"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[6048],{66048:function(n){n.exports='import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from \'@angular/core\';\n\nimport mask, {PLACEHOLDER, removePlaceholder} from \'./mask\';\n\n@Component({\n    selector: \'placeholder-doc-example-3\',\n    template: `\n        <tui-input\n            tuiTextfieldCustomContent="tuiIconCalendarLarge"\n            [style.max-width.rem]="20"\n            [(ngModel)]="value"\n        >\n            Enter date\n            <input\n                #inputRef\n                tuiTextfield\n                inputmode="numeric"\n                [maskito]="maskitoOptions"\n                (focus)="onFocus()"\n                (blur)="onBlur()"\n            />\n        </tui-input>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PlaceholderDocExample3 {\n    @ViewChild(\'inputRef\', {read: ElementRef})\n    inputRef!: ElementRef<HTMLInputElement>;\n\n    readonly maskitoOptions = mask;\n    value = \'\';\n\n    onBlur(): void {\n        this.value = removePlaceholder(this.value);\n    }\n\n    onFocus(): void {\n        const initialValue = this.value;\n\n        this.value = initialValue + PLACEHOLDER.slice(this.value.length);\n\n        setTimeout(() => {\n            this.inputRef.nativeElement.setSelectionRange(\n                initialValue.length,\n                initialValue.length,\n            );\n        });\n    }\n}\n'}}]);