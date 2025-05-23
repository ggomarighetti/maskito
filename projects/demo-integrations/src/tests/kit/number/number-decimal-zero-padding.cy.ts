import {openNumberPage} from './utils';

describe('Number | decimalZeroPadding', () => {
    describe('[minimumFractionDigits] === [maximumFractionDigits] === 4', () => {
        beforeEach(() => {
            openNumberPage(
                'decimalSeparator=,&maximumFractionDigits=4&minimumFractionDigits=4',
            );
        });

        it('Type 42 => 42,0000', () => {
            cy.get('@input')
                .type('42')
                .should('have.value', '42,0000')
                .should('have.prop', 'selectionStart', '42'.length)
                .should('have.prop', 'selectionEnd', '42'.length);
        });

        it('Type , => 0,0000', () => {
            cy.get('@input')
                .type(',')
                .should('have.value', '0,0000')
                .should('have.prop', 'selectionStart', '0,'.length)
                .should('have.prop', 'selectionEnd', '0,'.length);
        });

        it('Type 42,27 => 42,2700', () => {
            cy.get('@input')
                .type('42,27')
                .should('have.value', '42,2700')
                .should('have.prop', 'selectionStart', '42,27'.length)
                .should('have.prop', 'selectionEnd', '42,27'.length);
        });

        it('Integer part has `overwriteMode: shift`', () => {
            cy.get('@input')
                .type('42,27')
                .type('{leftArrow}'.repeat('2,27'.length))
                .type('55')
                .should('have.value', '4 552,2700')
                .should('have.prop', 'selectionStart', '4 55'.length)
                .should('have.prop', 'selectionEnd', '4 55'.length);
        });

        it('Decimal part has `overwriteMode: replace`', () => {
            cy.get('@input')
                .type('42,27')
                .type('{leftArrow}'.repeat('27'.length))
                .type('55')
                .should('have.value', '42,5500')
                .should('have.prop', 'selectionStart', '42,55'.length)
                .should('have.prop', 'selectionEnd', '42,55'.length);
        });

        it('42,|2700 => Backspace => 42|,2700', () => {
            cy.get('@input')
                .type('42,27')
                .type('{leftArrow}'.repeat('27'.length))
                .type('{backspace}')
                .should('have.value', '42,2700')
                .should('have.prop', 'selectionStart', '42'.length)
                .should('have.prop', 'selectionEnd', '42'.length);
        });

        it('42|,2700 => Delete => 42,|2700', () => {
            cy.get('@input')
                .type('42,27')
                .type('{leftArrow}'.repeat(',27'.length))
                .type('{del}')
                .should('have.value', '42,2700')
                .should('have.prop', 'selectionStart', '42,'.length)
                .should('have.prop', 'selectionEnd', '42,'.length);
        });

        it('0|,4242 => Backspace => |,4242 => ,4242| => Backspace x4 => ,|0000', () => {
            cy.get('@input')
                .type('0,4242')
                .type('{moveToStart}{rightArrow}')
                .type('{backspace}')
                .should('have.value', ',4242')
                .should('have.prop', 'selectionStart', 0)
                .should('have.prop', 'selectionEnd', 0)
                .type('{moveToEnd}')
                .type('{backspace}'.repeat(2))
                .should('have.value', ',4200')
                .should('have.prop', 'selectionStart', ',42'.length)
                .should('have.prop', 'selectionEnd', ',42'.length)
                .type('{backspace}'.repeat(2))
                .should('have.value', ',0000')
                .should('have.prop', 'selectionStart', ','.length)
                .should('have.prop', 'selectionEnd', ','.length);
        });

        describe('Extra decimal separator insertion', () => {
            it('42,|2700 => Type , => 42,|2700', () => {
                cy.get('@input')
                    .type('42,27')
                    .type('{leftArrow}'.repeat('27'.length))
                    .should('have.value', '42,2700')
                    .should('have.prop', 'selectionStart', '42,'.length)
                    .should('have.prop', 'selectionEnd', '42,'.length)
                    .type(',')
                    .should('have.value', '42,2700')
                    .should('have.prop', 'selectionStart', '42,'.length)
                    .should('have.prop', 'selectionEnd', '42,'.length);
            });

            it('42|,2700 => Type , => 42,|2700', () => {
                cy.get('@input')
                    .type('42,27')
                    .type('{leftArrow}'.repeat(',27'.length))
                    .should('have.value', '42,2700')
                    .should('have.prop', 'selectionStart', '42'.length)
                    .should('have.prop', 'selectionEnd', '42'.length)
                    .type(',')
                    .should('have.value', '42,2700')
                    .should('have.prop', 'selectionStart', '42,'.length)
                    .should('have.prop', 'selectionEnd', '42,'.length);
            });

            it('42,2|700 => Type , => 42,2|700', () => {
                cy.get('@input')
                    .type('42,27')
                    .type('{leftArrow}')
                    .should('have.value', '42,2700')
                    .should('have.prop', 'selectionStart', '42,2'.length)
                    .should('have.prop', 'selectionEnd', '42,2'.length)
                    .type(',')
                    .should('have.value', '42,2700')
                    .should('have.prop', 'selectionStart', '42,2'.length)
                    .should('have.prop', 'selectionEnd', '42,2'.length);
            });

            it('9|9,1234 => Type , => 9|9,1234 (no changes)', () => {
                cy.get('@input')
                    .type('99,1234')
                    .type('{moveToStart}{rightArrow}')
                    .should('have.value', '99,1234')
                    .should('have.prop', 'selectionStart', 1)
                    .should('have.prop', 'selectionEnd', 1)
                    .type(',')
                    .should('have.value', '99,1234')
                    .should('have.prop', 'selectionStart', 1)
                    .should('have.prop', 'selectionEnd', 1);
            });
        });

        describe('Move caret when user tries to delete non-removable zeroes in decimal part', () => {
            beforeEach(() => {
                cy.get('@input').type(',').should('have.value', '0,0000');
            });

            describe('Via `Backspace` button', () => {
                it('0,0000| => Backspace => 0,000|0', () => {
                    cy.get('@input')
                        .type('{moveToEnd}{backspace}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,000'.length)
                        .should('have.prop', 'selectionEnd', '0,000'.length);
                });

                it('0,000|0 => Backspace => 0,00|00', () => {
                    cy.get('@input')
                        .type('{moveToEnd}{leftArrow}{backspace}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,00'.length)
                        .should('have.prop', 'selectionEnd', '0,00'.length);
                });

                it('0,00|00 => Backspace => 0,0|000', () => {
                    cy.get('@input')
                        .type('{moveToEnd}')
                        .type('{leftArrow}'.repeat(2))
                        .type('{backspace}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,0'.length)
                        .should('have.prop', 'selectionEnd', '0,0'.length);
                });

                it('0,0|000 => Backspace => 0,|0000', () => {
                    cy.get('@input')
                        .type('{moveToEnd}')
                        .type('{leftArrow}'.repeat(3))
                        .type('{backspace}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,'.length)
                        .should('have.prop', 'selectionEnd', '0,'.length);
                });
            });

            describe('Via `Delete` button', () => {
                it('0,|0000 => Delete => 0,0|000', () => {
                    cy.get('@input')
                        .type('{moveToStart}')
                        .type('{rightArrow}'.repeat('0,'.length))
                        .type('{del}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,0'.length)
                        .should('have.prop', 'selectionEnd', '0,0'.length);
                });

                it('0,0|000 => Delete => 0,00|00', () => {
                    cy.get('@input')
                        .type('{moveToStart}')
                        .type('{rightArrow}'.repeat('0,0'.length))
                        .type('{del}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,00'.length)
                        .should('have.prop', 'selectionEnd', '0,00'.length);
                });

                it('0,00|00 => Delete => 0,000|0', () => {
                    cy.get('@input')
                        .type('{moveToStart}')
                        .type('{rightArrow}'.repeat('0,00'.length))
                        .type('{del}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,000'.length)
                        .should('have.prop', 'selectionEnd', '0,000'.length);
                });

                it('0,000|0 => Delete => 0,0000|', () => {
                    cy.get('@input')
                        .type('{moveToStart}')
                        .type('{rightArrow}'.repeat('0,000'.length))
                        .type('{del}')
                        .should('have.value', '0,0000')
                        .should('have.prop', 'selectionStart', '0,0000'.length)
                        .should('have.prop', 'selectionEnd', '0,0000'.length);
                });
            });
        });
    });

    describe('[minimumFractionDigits] === 3; [maximumFractionDigits] === 5', () => {
        beforeEach(() => {
            openNumberPage('minimumFractionDigits=3&maximumFractionDigits=5');
        });

        it('Type 42 => 42.000', () => {
            cy.get('@input')
                .type('42')
                .should('have.value', '42.000')
                .should('have.prop', 'selectionStart', '42'.length)
                .should('have.prop', 'selectionEnd', '42'.length);
        });

        it('Type 42 => 42.000 => Move cursor to the end => Type 12', () => {
            cy.get('@input')
                .type('42')
                .should('have.value', '42.000')
                .type('{moveToEnd}')
                .type('45')
                .should('have.prop', 'selectionStart', '42.00045'.length)
                .should('have.prop', 'selectionEnd', '42.00045'.length);
        });

        it('Type , => 0.|000', () => {
            cy.get('@input')
                .type(',')
                .should('have.value', '0.000')
                .should('have.prop', 'selectionStart', '0.'.length)
                .should('have.prop', 'selectionEnd', '0.'.length);
        });

        it('Type 42.27 => 42.270', () => {
            cy.get('@input')
                .type('42.27')
                .should('have.value', '42.270')
                .should('have.prop', 'selectionStart', '42.27'.length)
                .should('have.prop', 'selectionEnd', '42.27'.length);
        });

        it('Integer part has `overwriteMode: shift`', () => {
            cy.get('@input')
                .type('42,27')
                .type('{leftArrow}'.repeat('2.27'.length))
                .type('55')
                .should('have.value', '4 552.270')
                .should('have.prop', 'selectionStart', '4 55'.length)
                .should('have.prop', 'selectionEnd', '4 55'.length);
        });

        it('Decimal part has `overwriteMode: replace`', () => {
            cy.get('@input')
                .type('42,27')
                .type('{leftArrow}'.repeat('27'.length))
                .type('55')
                .should('have.value', '42.550')
                .should('have.prop', 'selectionStart', '42.55'.length)
                .should('have.prop', 'selectionEnd', '42.55'.length);
        });

        it('42.|270 => Backspace => 42|.270', () => {
            cy.get('@input')
                .type('42.27')
                .type('{leftArrow}'.repeat('27'.length))
                .type('{backspace}')
                .should('have.value', '42.270')
                .should('have.prop', 'selectionStart', '42'.length)
                .should('have.prop', 'selectionEnd', '42'.length);
        });

        it('42|.270 => Delete => 42.|270', () => {
            cy.get('@input')
                .type('42,27')
                .type('{leftArrow}'.repeat('.27'.length))
                .type('{del}')
                .should('have.value', '42.270')
                .should('have.prop', 'selectionStart', '42.'.length)
                .should('have.prop', 'selectionEnd', '42.'.length);
        });

        it('0|.4242 => Backspace => |.4242 => .4242| => Backspace x4 => .|000', () => {
            cy.get('@input')
                .type('0.4242')
                .type('{moveToStart}{rightArrow}')
                .type('{backspace}')
                .should('have.value', '.4242')
                .should('have.prop', 'selectionStart', 0)
                .should('have.prop', 'selectionEnd', 0)
                .type('{moveToEnd}')
                .type('{backspace}'.repeat(2))
                .should('have.value', '.420')
                .should('have.prop', 'selectionStart', '.42'.length)
                .should('have.prop', 'selectionEnd', '.42'.length)
                .type('{backspace}'.repeat(2))
                .should('have.value', '.000')
                .should('have.prop', 'selectionStart', '.'.length)
                .should('have.prop', 'selectionEnd', '.'.length);
        });

        describe('Extra decimal separator insertion', () => {
            it('42.|270 => Type . => 42.|270', () => {
                cy.get('@input')
                    .type('42.27')
                    .type('{leftArrow}'.repeat('27'.length))
                    .should('have.value', '42.270')
                    .should('have.prop', 'selectionStart', '42.'.length)
                    .should('have.prop', 'selectionEnd', '42.'.length)
                    .type('.')
                    .should('have.value', '42.270')
                    .should('have.prop', 'selectionStart', '42.'.length)
                    .should('have.prop', 'selectionEnd', '42.'.length);
            });

            it('42|.270 => Type . => 42.|270', () => {
                cy.get('@input')
                    .type('42.27')
                    .type('{leftArrow}'.repeat('.27'.length))
                    .should('have.value', '42.270')
                    .should('have.prop', 'selectionStart', '42'.length)
                    .should('have.prop', 'selectionEnd', '42'.length)
                    .type('.')
                    .should('have.value', '42.270')
                    .should('have.prop', 'selectionStart', '42.'.length)
                    .should('have.prop', 'selectionEnd', '42.'.length);
            });

            it('42.2|70 => Type , => 42.2|70', () => {
                cy.get('@input')
                    .type('42.27')
                    .type('{leftArrow}')
                    .should('have.value', '42.270')
                    .should('have.prop', 'selectionStart', '42.2'.length)
                    .should('have.prop', 'selectionEnd', '42.2'.length)
                    .type(',')
                    .should('have.value', '42.270')
                    .should('have.prop', 'selectionStart', '42.2'.length)
                    .should('have.prop', 'selectionEnd', '42.2'.length);
            });

            it('9|9.1234 => Type . => 9|9.1234 (no changes)', () => {
                cy.get('@input')
                    .type('99.1234')
                    .type('{moveToStart}{rightArrow}')
                    .should('have.value', '99.1234')
                    .should('have.prop', 'selectionStart', 1)
                    .should('have.prop', 'selectionEnd', 1)
                    .type('.')
                    .should('have.value', '99.1234')
                    .should('have.prop', 'selectionStart', 1)
                    .should('have.prop', 'selectionEnd', 1);
            });
        });

        describe('Move caret when user tries to delete non-removable zeroes in decimal part', () => {
            beforeEach(() => {
                cy.get('@input').type(',').should('have.value', '0.000');
            });

            describe('Via `Backspace` button', () => {
                it('0.000| => Backspace => 0.00|0', () => {
                    cy.get('@input')
                        .type('{moveToEnd}{backspace}')
                        .should('have.value', '0.000')
                        .should('have.prop', 'selectionStart', '0.00'.length)
                        .should('have.prop', 'selectionEnd', '0.00'.length);
                });

                it('0.00|0 => Backspace => 0.0|00', () => {
                    cy.get('@input')
                        .type('{moveToEnd}{leftArrow}{backspace}')
                        .should('have.value', '0.000')
                        .should('have.prop', 'selectionStart', '0.0'.length)
                        .should('have.prop', 'selectionEnd', '0.0'.length);
                });

                it('0.0|00 => Backspace => 0.|000', () => {
                    cy.get('@input')
                        .type('{moveToEnd}')
                        .type('{leftArrow}'.repeat(2))
                        .type('{backspace}')
                        .should('have.value', '0.000')
                        .should('have.prop', 'selectionStart', '0.'.length)
                        .should('have.prop', 'selectionEnd', '0.'.length);
                });
            });

            describe('Via `Delete` button', () => {
                it('0.|000 => Delete => 0.0|00', () => {
                    cy.get('@input')
                        .type('{moveToStart}')
                        .type('{rightArrow}'.repeat('0.'.length))
                        .type('{del}')
                        .should('have.value', '0.000')
                        .should('have.prop', 'selectionStart', '0.0'.length)
                        .should('have.prop', 'selectionEnd', '0.0'.length);
                });

                it('0.0|00 => Delete => 0.00|0', () => {
                    cy.get('@input')
                        .type('{moveToStart}')
                        .type('{rightArrow}'.repeat('0.0'.length))
                        .type('{del}')
                        .should('have.value', '0.000')
                        .should('have.prop', 'selectionStart', '0.00'.length)
                        .should('have.prop', 'selectionEnd', '0.00'.length);
                });

                it('0.00|0 => Delete => 0.000|', () => {
                    cy.get('@input')
                        .type('{moveToStart}')
                        .type('{rightArrow}'.repeat('0.00'.length))
                        .type('{del}')
                        .should('have.value', '0.000')
                        .should('have.prop', 'selectionStart', '0.000'.length)
                        .should('have.prop', 'selectionEnd', '0.000'.length);
                });
            });
        });
    });

    describe('[decimalZeroPadding] is compatible with [postfix]', () => {
        it('Type 42', () => {
            openNumberPage(
                'prefix=$&postfix=$&minimumFractionDigits=2&maximumFractionDigits=2',
            );

            cy.get('@input')
                .type('42')
                .should('have.value', '$42.00$')
                .should('have.prop', 'selectionStart', '$42'.length)
                .should('have.prop', 'selectionEnd', '$42'.length);
        });

        it('Type 42,24', () => {
            openNumberPage(
                'prefix=$&postfix=$&minimumFractionDigits=2&maximumFractionDigits=2',
            );

            cy.get('@input')
                .type('42,24')
                .should('have.value', '$42.24$')
                .should('have.prop', 'selectionStart', '$42.24'.length)
                .should('have.prop', 'selectionEnd', '$42.24'.length);
        });

        it('Type 42.24', () => {
            openNumberPage(
                'prefix=$&postfix=kg&minimumFractionDigits=2&maximumFractionDigits=2',
            );

            cy.get('@input')
                .type('42.24')
                .should('have.value', '$42.24kg')
                .should('have.prop', 'selectionStart', '$42.24'.length)
                .should('have.prop', 'selectionEnd', '$42.24'.length);
        });
    });

    describe('conditions for empty textfield', () => {
        beforeEach(() => {
            openNumberPage(
                'thousandSeparator=_&maximumFractionDigits=2&minimumFractionDigits=2&minusSign=-',
            );
        });

        it('0.42| => Backspace x3 => 0|.00 => Backspace => Empty', () => {
            cy.get('@input')
                .type('0.42')
                .should('have.value', '0.42')
                .type('{backspace}'.repeat(3))
                .should('have.value', '0.00')
                .should('have.a.prop', 'selectionStart', 1)
                .should('have.a.prop', 'selectionEnd', 1)
                .type('{backspace}')
                .should('have.value', '');
        });

        it('-.42| => Backspace x2 => -.|00  => Backspace => -', () => {
            cy.get('@input')
                .type('-0.42')
                .should('have.value', '-0.42')
                .type('{moveToStart}')
                .type('{rightArrow}'.repeat(2))
                .type('{backspace}')
                .should('have.value', '-.42')
                .type('{moveToEnd}')
                .type('{backspace}')
                .should('have.value', '-.40')
                .type('{backspace}')
                .should('have.value', '-.00')
                .should('have.a.prop', 'selectionStart', 2)
                .should('have.a.prop', 'selectionEnd', 2)
                .type('{backspace}')
                .should('have.value', '-')
                .should('have.a.prop', 'selectionStart', 1)
                .should('have.a.prop', 'selectionEnd', 1);
        });

        it('5|.00 => Backspace  => Empty', () => {
            cy.get('@input')
                .type('5')
                .should('have.value', '5.00')
                .should('have.a.prop', 'selectionStart', 1)
                .should('have.a.prop', 'selectionEnd', 1)
                .type('{backspace}')
                .should('have.value', '');
        });

        it('-5|.00 => Backspace  => -', () => {
            cy.get('@input')
                .type('-5')
                .should('have.value', '-5.00')
                .should('have.a.prop', 'selectionStart', 2)
                .should('have.a.prop', 'selectionEnd', 2)
                .type('{backspace}')
                .should('have.value', '-');
        });
    });
});
