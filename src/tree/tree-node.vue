<template>
  <div :class="$options.name">
    <span :class="cx('label')">{{label}}</span>
    <div
      :class="cx('children')"
      v-if="!isLeaf"
    >
      <lsp-tree-node
        v-for="(item, index) in children"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { RecordPropsDefinition } from 'vue/types/options';

export interface TreeNodeProps {
  label: string;
  children: TreeNodeProps[];
  checked?: boolean;
  expanded?: boolean;
}

export default {
  name: 'lsp-tree-node',

  model: {
    prop: 'label',
    event: 'change',
  },

  props: {
    label: String,
    children: Array,
    checked: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  } as RecordPropsDefinition<TreeNodeProps>,

  data() {
    return {}
  },

  computed: {
    isLeaf(): boolean {
      if (this.children && this.children.length) {
        return false
      }
      return true
    },
  },

  methods: {
    cx(...args: string[]): string {
      return [this.$options.name, ...args].join('-')
    },
    labelClick(node: TreeNodeProps) {
      this.$emit('click', node)
    },
  },
};
</script>

<style lang="less">
.lsp-tree-node{
  &-children{
    margin-left: 12px;
  }
}
</style>