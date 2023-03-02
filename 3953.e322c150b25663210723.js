"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[3953],{3953:n=>{n.exports="```ts\nimport {Component} from '@angular/core';\nimport {MaskitoPredicate} from '@maskito/angular';\nimport {MaskitoOptions} from '@maskito/core';\n\n@Component({\n  selector: 'your-component',\n  template: `\n    <custom-input-wrapper\n      [maskito]=\"maskitoOptions\"\n      [maskitoElement]=\"predicate\"\n    >\n      Using maskito with another library\n    </custom-input-wrapper>\n  `,\n})\nexport class YourComponent {\n  readonly maskitoOptions: MaskitoOptions = {\n    mask: /^\\d+$/,\n  };\n\n  readonly predicate: MaskitoPredicate = element => element.querySelector('input[id=\"my-input\"]')!;\n}\n```\n"}}]);