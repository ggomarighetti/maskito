"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[664],{664:n=>{n.exports="import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';\nimport {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {MaskitoDirective} from '@maskito/angular';\nimport {maskitoGetCountryFromNumber} from '@maskito/phone';\nimport {TUI_IS_APPLE} from '@taiga-ui/cdk';\nimport {\n    TuiFlagPipeModule,\n    TuiPrimitiveTextfieldModule,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/kit';\nimport metadata from 'libphonenumber-js/min/metadata';\n\nimport mask from './mask';\n\n@Component({\n    standalone: true,\n    selector: 'phone-doc-example-3',\n    imports: [\n        TuiInputModule,\n        TuiTextfieldControllerModule,\n        ReactiveFormsModule,\n        FormsModule,\n        TuiPrimitiveTextfieldModule,\n        MaskitoDirective,\n        TuiFlagPipeModule,\n    ],\n    template: `\n        <tui-input\n            [style.max-width.rem]=\"30\"\n            [tuiTextfieldCustomContent]=\"countryIsoCode ? flag : 'tuiIconPhoneLarge'\"\n            [(ngModel)]=\"value\"\n        >\n            Non-strict\n            <input\n                autocomplete=\"tel\"\n                inputmode=\"tel\"\n                tuiTextfield\n                [attr.pattern]=\"pattern\"\n                [maskito]=\"mask\"\n            />\n        </tui-input>\n\n        <ng-template #flag>\n            <img\n                width=\"28\"\n                [attr.alt]=\"countryIsoCode\"\n                [src]=\"countryIsoCode | tuiFlag\"\n            />\n        </ng-template>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PhoneMaskDocExample3 {\n    value = '';\n    readonly mask = mask;\n\n    get countryIsoCode(): string {\n        return maskitoGetCountryFromNumber(this.value, metadata) || '';\n    }\n\n    constructor(@Inject(TUI_IS_APPLE) private readonly isApple: boolean) {}\n\n    get pattern(): string {\n        return this.isApple ? '+[0-9-]{1,20}' : '';\n    }\n}\n"}}]);