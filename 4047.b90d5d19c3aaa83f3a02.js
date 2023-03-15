"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[4047],{4047:t=>{t.exports="# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.\n\n## [0.6.0](https://github.com/tinkoff/maskito/compare/v0.5.0...v0.6.0) (2023-03-15)\n\n### Features\n\n- **angular:** add CVA and pipe ([#187](https://github.com/tinkoff/maskito/issues/187))\n  ([a099257](https://github.com/tinkoff/maskito/commit/a099257a16b569444cdae9276ce66e9a806f531e))\n- **core:** add `deleteWordBackward` & `deleteWordForward` support\n  ([#193](https://github.com/tinkoff/maskito/issues/193))\n  ([24b761c](https://github.com/tinkoff/maskito/commit/24b761c84d0947df5e4c78a2114f1de8f6ca20f4))\n\n### Bug Fixes\n\n- **core:** show trailing fixed characters + duplicated fixed character on `Drop`\n  ([#185](https://github.com/tinkoff/maskito/issues/185))\n  ([c7f6a1b](https://github.com/tinkoff/maskito/commit/c7f6a1bb8098b5641ed8c6921c2ebc86c6135b58))\n- **kit:** `maskitoParseNumber` incorrectly parses negative numbers\n  ([#190](https://github.com/tinkoff/maskito/issues/190))\n  ([d713bd1](https://github.com/tinkoff/maskito/commit/d713bd143e5090870a406ea14498cb99843bb9d0))\n- **kit:** `Number` should drop decimal part on paste from clipboard if `precision=0`\n  ([#195](https://github.com/tinkoff/maskito/issues/195))\n  ([ba85c38](https://github.com/tinkoff/maskito/commit/ba85c38ec0c81a22ff758f4ba386d045ac49ffd5))\n\n## [0.5.0](https://github.com/tinkoff/maskito/compare/v0.4.0...v0.5.0) (2023-03-09)\n\n### Features\n\n- **core:** new utility `maskitoTransform(value, maskitoOptions)`\n  ([#177](https://github.com/tinkoff/maskito/issues/177))\n  ([20316f1](https://github.com/tinkoff/maskito/commit/20316f15e153bfeeb45eda6406b8792e00f3238f))\n- **kit:** new utility `maskitoParseNumber` ([#178](https://github.com/tinkoff/maskito/issues/178))\n  ([fc58141](https://github.com/tinkoff/maskito/commit/fc58141625ecbdc7d804aa382a69b38bf7146fc4))\n\n### Bug Fixes\n\n- **kit:** `Number` mask throws an error on empty string in `thousandSeparator`\n  ([#176](https://github.com/tinkoff/maskito/issues/176))\n  ([cd52fad](https://github.com/tinkoff/maskito/commit/cd52fad80bc278f171dafa1709c54cba3f8fbc81))\n\n## [0.4.0](https://github.com/tinkoff/maskito/compare/v0.3.0...v0.4.0) (2023-03-02)\n\n### Features\n\n- **angular:** `maskitoElement` add new input ([#164](https://github.com/tinkoff/maskito/issues/164))\n  ([407c131](https://github.com/tinkoff/maskito/commit/407c131d2d8f8514173ad7a5e248759e2d4f8abc))\n\n### Bug Fixes\n\n- **kit:** `Number` pads empty integer part when paste from clipboard\n  ([#168](https://github.com/tinkoff/maskito/issues/168))\n  ([d043a82](https://github.com/tinkoff/maskito/commit/d043a82561cbed94b19d59d174fa6da7f08d49d4))\n\n## [0.3.0](https://github.com/tinkoff/maskito/compare/v0.2.0...v0.3.0) (2023-03-01)\n\n### Features\n\n- **angular:** add other maskito packages to `ng-update.packageGroup` of `package.json`\n  ([#161](https://github.com/tinkoff/maskito/issues/161))\n  ([bdecdaa](https://github.com/tinkoff/maskito/commit/bdecdaa9cac2681e35191cabd2d5d853eb97a09d))\n\n### Bug Fixes\n\n- **kit:** `Date`-mask fix wrong year that appears using the min property\n  ([#157](https://github.com/tinkoff/maskito/issues/157))\n  ([544e891](https://github.com/tinkoff/maskito/commit/544e8912d2752e0fc8f77757e935070b94823f65))\n\n## [0.2.0](https://github.com/tinkoff/maskito/compare/v0.1.1...v0.2.0) (2023-02-28)\n\n### Features\n\n- **kit:** new `DateTime` mask ([#146](https://github.com/tinkoff/maskito/issues/146))\n  ([6d6b2c1](https://github.com/tinkoff/maskito/commit/6d6b2c17b5c0f62bc804451524cd4b2ce3e50660))\n\n### Bug Fixes\n\n- **kit:** `Number` is now replacing hyphen, en-dash and em-dash with minus sign\n  ([#153](https://github.com/tinkoff/maskito/issues/153))\n  ([1f21f11](https://github.com/tinkoff/maskito/commit/1f21f1159baadcef65e49bacaec77eba3b6f36d8))\n\n### [0.1.1](https://github.com/tinkoff/maskito/compare/v0.1.0...v0.1.1) (2023-02-15)\n\n### Bug Fixes\n\n- **core:** `Module parse failed: 'import' and 'export' may appear only with 'sourceType: module'`\n  ([#131](https://github.com/tinkoff/maskito/issues/131))\n  ([41e05c0](https://github.com/tinkoff/maskito/commit/41e05c09e41ed611e0c2b9aa07a953dfbe049da7))\n\n## 0.1.0 (2023-02-14)\n\nThis release introduces the first publishing of the following packages:\n\n- `@maskito/core` <br /> It is the main zero-dependency and framework-agnostic package. It can be used alone in Vanilla\n  JavaScript project. It listens `beforeinput` and `input` events to validate and calibrate textfield's value. <br />\n  Read more: https://tinkoff.github.io/maskito/core-concepts/overview\n- `@maskito/kit` <br /> The optional framework-agnostic package. It contains ready-to-use masks with configurable\n  parameters. This release introduces the following masks:\n  - [Number](https://tinkoff.github.io/maskito/kit/number)\n  - [Time](https://tinkoff.github.io/maskito/kit/time)\n  - [Date](https://tinkoff.github.io/maskito/kit/date)\n  - [DateRange](https://tinkoff.github.io/maskito/kit/date-range)\n- `@maskito/angular`<br /> The Angular-specific library. It provides two convenient ways of using Maskito:\n  - Basic directive approach (when developer has direct access to native input element).\n  - Dependency Injection approach (when native input element is hidden somewhere deep inside another component).\n"}}]);