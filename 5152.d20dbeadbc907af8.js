"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5152],{5152:e=>{e.exports="import type {MaskitoOptions} from '@maskito/core';\nimport {maskitoUpdateElement} from '@maskito/core';\nimport {maskitoEventHandler, maskitoTimeOptionsGenerator} from '@maskito/kit';\n\nconst timeOptions = maskitoTimeOptionsGenerator({\n    mode: 'HH:MM AA',\n});\n\nexport default {\n    ...timeOptions,\n    plugins: [\n        ...timeOptions.plugins,\n        maskitoEventHandler('blur', (element) => {\n            if (element.value.length >= 'HH:MM'.length && !element.value.endsWith('M')) {\n                maskitoUpdateElement(element, `${element.value}\xa0AM`);\n            }\n        }),\n    ],\n} satisfies MaskitoOptions;\n"}}]);