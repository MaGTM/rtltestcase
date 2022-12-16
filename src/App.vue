<template>
  <div id="main-content">
    <sidebar class="base-box" />
    <inventory class="base-box"/>
    <inventory-footer class="base-box"/>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Inventory from "@/components/Inventory/Inventory";
import InventoryFooter from "@/components/InventoryFooter";

export default {
  components: {
    Sidebar,
    Inventory,
    InventoryFooter
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #303030;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
  }
  #main-content {
    width: 785px;
    height: 596px;
    display: grid;
    grid-template-columns: 236px 1fr 1fr;
    grid-template-rows: 1fr 1fr 72px;
    gap: 24px;
    grid-template-areas:
    "sidebar inventory inventory"
    "sidebar inventory inventory"
    "footer footer footer";
  }

  .base-box {
    background-color: #262626;
    border: #4D4D4D 1px solid;
    border-radius: 12px;
  }

  .skeleton-text {
    background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
  }

  .skeleton-text.title {
    height: 26px;
    border-radius: 8px;
  }
  .skeleton-text.text {
    height: 10px;
    border-radius: 4px;
  }
  .skeleton-text.full {
    height: 100%;
    width: 100%;
    border-radius: 12px;
  }
</style>