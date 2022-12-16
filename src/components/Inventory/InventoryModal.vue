<template>
  <div id="modal">
    <close-icon @click="$emit('close', null, true)" id="close"/>
    <img :src="cellItem.item.logo" alt="" v-if="cellItem && cellItem.item">
    <div class="inventory-modal-content">
      <div class="skeleton-text title"/>
      <div class="skeleton-text text modal-text" v-for="n in 5"/>
    </div>
    <button @click="showDeleting">Удалить предмет</button>
    <div class="inventory-delete" :class="{'delete-active' : isDeleting}">
      <input type="number" placeholder="Введите количество" v-model="amount">
      <div class="inventory-delete-options">
        <button @click="showDeleting">Отмена</button>
        <button @click="deleteAmount" :disabled="this.cellItem && (this.amount > this.cellItem.item.amount || !this.amount)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },

  data() {
    return {
      isDeleting: false,
      amount: null
    }
  },

  props: {
    cellItem: {
      required: true
    },
    showModal: {

    }
  },

  methods: {
    showDeleting() {
      this.isDeleting = !this.isDeleting
    },
    deleteAmount() {
      this.isDeleting = false
      if(this.amount < this.cellItem.item.amount) {
        this.showModal(null, true)
        this.cellItem.item.deleteAmount(this.amount)
        this.amount = null
      }
      if(this.amount === this.cellItem.item.amount) {
        this.showModal(null, true)
        this.cellItem.deleteItem()
      }
    }
  }

}
</script>

<style scoped lang="scss">
#modal {
  position: absolute;
  backdrop-filter: blur(16px);
  right: 0;
  top: 0;
  height: 100%;
  width: 0;
  transition: width 0.3s ease;
  overflow: hidden;
  img {
    width: 130px;
    height: 130px;
    margin: 55px auto 0 auto;
    display: block;
  }

  .inventory-modal-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    &:before, &:after {
      display: block;
      content: ' ';
      background-color: #4D4D4D;
      height: 1px;
      width: 220px;
    }
    &:before {
      margin-top: 30px;
      margin-bottom: 16px;
    }
    &:after {
      margin-top: 24px;
      margin-bottom: 18px;
    }
    .title {
      width: 211px;
      margin-bottom: 24px;
    }
    .modal-text {
      margin-bottom: 16px;
      &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        width: 211px;
      }
      &:nth-child(5) {
        width: 180px;
      }
      &:nth-child(6) {
        width: 80px;
        margin-bottom: 0;
      }
    }
  }
  #close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 12px;
    height: 12px;
    fill: var(--close-icon);
  }
  button {
    height: 39px;
    border: none;
    outline: none;
    border-radius: 8px;
    width: 220px;
    margin: 0 auto;
    display: block;
    background-color: #FA7272;
    color: white;
    cursor: pointer;
    transition: filter 0.3s ease;
    &:hover {
      filter: brightness(1.1);
    }
    &:disabled {
      filter: brightness(0.7);
      cursor: default;
    }
  }

  .inventory-delete {
    position: absolute;
    background-color: var(--block-bg);
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0;
    z-index: 100;
    border-top: #4D4D4D 1px solid;
    gap: 20px;
    transition: height 0.3s ease;
    overflow: hidden;
    padding: 0 21px;

    input {
      margin-top: 20px;
      outline: none;
      border-radius: 4px;
      border: #4D4D4D 1px solid;
      background-color: transparent;
      padding: 11px 55px 12px 12px;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
      }
      color: var(--default-txt);
    }

    &-options {
      width: 100%;
      display: flex;
      justify-content: space-between;
      button {
        width: auto;
        padding: 8px 16px;
        &:nth-child(1) {
          background-color: var(--bg);
          color: var(--default-txt);
        }
      }
    }

    &.delete-active {
      height: 133px;
    }
  }
}
</style>