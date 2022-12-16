<template>
  <div class="inventory-base-block"
       :class="{'has-item' : cell.item}"
       :draggable="isDraggable"
       @dragstart="dragStart($event)"
       @drop="drop($event, cell.id)"
       @dragenter.prevent @dragover.prevent
      >
    <img v-if="cell.item" :src="cell.item.logo" alt="">
    <span class="inventory-item-amount" v-if="cell.item">{{ cell.item.amount }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDraggable: !!this.cell.item,
      isDragging: false
    }
  },
  props: {
    cell: {
      type: Object,
      required: true
    },
    changePosition: {
      required: false
    }
  },
  methods: {
    dragStart(e) {
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('itemID', this.cell.id)
    },
    drop(e, newCellId) {
      this.changePosition(e.dataTransfer.getData('itemID'), newCellId)
    }
  }
}
</script>

<style scoped lang="scss">
.inventory-base-block {
  background-color: var(--block-bg);
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &.has-item {
    cursor: pointer;
  }

  .inventory-item-amount {
    color: #7D7D7D;
    font-family: Inter, sans-serif;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px #4D4D4D solid;
    border-top: 1px #4D4D4D solid;
    border-radius: 6px 0 0 0;
  }

  &:hover {
    background-color: var(--bg);
  }
}
</style>