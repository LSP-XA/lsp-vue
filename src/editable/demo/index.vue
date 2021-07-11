<template>
  <demo-section>
    <demo-block title="基础用法">
      <lsp-editable v-model="valu1" />
    </demo-block>
    <demo-block title="设置样式">
      <lsp-editable v-model="valu2" class="custom" />
    </demo-block>
    <demo-block title="自定义元素类型">
      <lsp-editable v-model="valu3" tag="h2" />
    </demo-block>
  </demo-section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      valu1: '可编辑html元素',
      valu2: '可编辑html元素-设置样式',
      valu3: '可编辑html元素-自定义元素类型',
    }
  },
}
</script>

<style scoped lang="less">
.custom{
  color: rgb(21, 255, 0);
}
</style>