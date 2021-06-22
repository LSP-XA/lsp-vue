<template>
  <div :class="$options.name">
    <tree-node
      v-for="(item, index) in tree"
      :key="index"
      v-bind="item"
    />
  </div>
</template>

<script lang="ts">
import TreeNode, { TreeNodeProps } from './tree-node.vue'

console.log(TreeNode)

export default {
  name: 'lsp-tree',

  components: { TreeNode },

  data() {
    return {
      tree: [
        {
          label: 'item1',
          children: [
            {
              label: 'item1-1'
            },
          ],
        },
        {
          label: 'item2',
          children: [
            {
              label: 'item2-1',
              children: [
                {
                  label: 'item2-1-1',
                },
              ],
            },
          ],
        },
        {
          label: 'item3',
        },
      ] as TreeNodeProps[]
    }
  },

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="less">
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
