# LspEditable 可编辑元素

### 介绍

LspEditable 是一个比较色批的可编辑元素组件

### 引入

```js
import Vue from 'vue';
import { LspEditable } from 'lsp-vue';

Vue.use(LspEditable);
```

## 代码演示

### 基础用法

```html
<lsp-editable v-model="value1" />
```

### 设置样式

```html
<lsp-editable v-model="valu2" class="custom" />
```

### 自定义元素类型

```html
<lsp-editable v-model="valu3" tag="h2" />
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| value          | 文字内容 | _string_ | '' |
| tag | 标签类型 | _string_ | `div`         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| input  | 输入时触发 | _event: string_ |

