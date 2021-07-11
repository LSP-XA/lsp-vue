<template>
  <component contenteditable @input="onInput" :is="tag" />
</template>

<script lang="ts">
import { RecordPropsDefinition } from 'vue/types/options';

type Props = {
  tag?: string;
  value?: string;
}

export default {
  name: 'lsp-editable',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
    value: {
      type: String,
      default: '',
    },
  } as RecordPropsDefinition<Props>,

  data() {
    return {}
  },

  computed: {
    el: {
      cache: false,
      get(): HTMLElement {
        return this.$el
      },
    },
    content: {
      cache: false,
      get(): string {
        return this.el.innerText
      },
    },
  },

  watch: {
    value(newContent) {
      if (newContent !== this.content) {
        this.el.innerText = newContent
      }
    },
  },

  mounted() {
    this.el.innerText = this.value
  },

  methods: {
    onInput() {
      this.$emit('input', this.content)
    },
  },
};
</script>

<style lang="less">

</style>
