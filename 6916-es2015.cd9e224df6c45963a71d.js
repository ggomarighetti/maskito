"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[6916],{6916:function(t){t.exports="```ts\nimport {createApp} from 'vue';\nimport {maskitoNumberOptionsGenerator} from '@maskito/kit';\nimport {maskito} from '@maskito/vue';\n\ncreateApp({\n  template: '<input v-model=\"value\" v-maskito=\"options\" />',\n  directives: {maskito},\n  data: () => ({\n    value: '123456',\n    options: maskitoNumberOptionsGenerator(),\n  }),\n}).mount('#vue');\n```\n"}}]);