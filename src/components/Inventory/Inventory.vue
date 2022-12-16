<template>
  <div id="inventory">
    <InventoryCellComponent :cell="i" v-for="i in inventory.inventoryCells" class="inventory-base-block" :key="i.id"
                            @click="showModal(i)" :changePosition="inventory.changePosition.bind(inventory)"/>
    <InventoryModal @close="showModal" :class="{'show' : isModalShow}" :cellItem="selectedItem" :showModal="showModal"/>
    <button id="reload" v-if="inventory.inventoryCells.filter(item => item.item).length === 0" @click="reload">Перезагрузить</button>
  </div>
</template>

<script>
import {Inventory} from "@/models/Inventory";
import InventoryCellComponent from "@/components/Inventory/InventoryCellComponent";
import InventoryModal from "@/components/Inventory/InventoryModal";
import {onRenderTriggered, onUpdated} from "vue";

let inventory = new Inventory()

if(!localStorage.getItem('inventory')) {
  inventory.initCells(25)
} else {
  inventory.init()
}
export default {
  components: {
    InventoryCellComponent,
    InventoryModal
  },
  setup() {
    onUpdated(() => {
      inventory.save()
    })
  },
  data() {
    return {
      inventory,
      isModalShow: false,
      selectedItem: null
    }
  },
  methods: {
    showModal(item, close) {
      if (item && item.item) {
        this.isModalShow = !this.isModalShow
        this.selectedItem = item
      } else if (close) {
        this.isModalShow = false
      }
    },
    reload() {
      inventory.initCells(25)
      this.inventory = inventory
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped lang="scss">
#inventory {
  grid-area: inventory;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  overflow-x: hidden;
  gap: 1px;
  background-color: #4D4D4D;
  position: relative;

  .show {
    width: 250px;
    border-left: 1px #4D4D4D solid;
  }

  #reload {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
}
</style>