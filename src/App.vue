<template>
  <div id="main-content" >
    <sidebar class="base-box" />
    <inventory class="base-box"/>
    <inventory-footer class="base-box"/>
    <button id="change-theme-btn" @click="changeTheme">Смена темы</button>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Inventory from "@/components/Inventory/Inventory";
import InventoryFooter from "@/components/InventoryFooter";
import {onMounted} from "vue";

export default {
  setup() {
    onMounted(() => {
      if(!localStorage.getItem('theme-color')) {
        localStorage.setItem('theme-color', 'dark')
      }
      document.documentElement.setAttribute('theme-color', localStorage.getItem('theme-color'))
    })
  },
  components: {
    Sidebar,
    Inventory,
    InventoryFooter
  },
  data() {
    return {
      theme: 'dark'
    }
  },
  methods: {
    changeTheme() {
      switch (this.theme) {
        case 'light':
          this.theme = 'dark'
          document.documentElement.setAttribute('theme-color', this.theme)
          localStorage.setItem('theme-color', 'dark')
          break
        case 'dark':
          this.theme = 'light'
          document.documentElement.setAttribute('theme-color', this.theme)
          localStorage.setItem('theme-color', 'light')
          break
      }
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /*Light Mode*/
    --bg--light: #E6E6E6;
    --block-bg--light: white;
    --skeleton-text--light: linear-gradient(90deg, #BDBDBD 0%, #9C9C9C 50%, #BCBCBC 100%);
    --close-icon--light: #303030;
    --default-txt--light: #303030;
    /*Dark Mode*/
    --bg--dark: #303030;
    --block-bg--dark: #262626;
    --skeleton-text--dark: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
    --close-icon--dark: white;
    --default-txt--dark: white;
  }

  :root[theme-color='light'] {
    --bg: var(--bg--light);
    --block-bg: var(--block-bg--light);
    --skeleton-text: var(--skeleton-text--light);
    --close-icon: var(--close-icon--light);
    --default-txt: var(--default-txt--light)
  }

  :root[theme-color='dark'] {
    --bg: var(--bg--dark);
    --block-bg: var(--block-bg--dark);
    --skeleton-text: var(--skeleton-text--dark);
    --close-icon: var(--close-icon--dark);
    --default-txt: var(--default-txt--dark)
  }

  body {
    background-color: var(--bg);
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
    position: relative;
  }

  .base-box {
    background-color: var(--block-bg);
    border: #4D4D4D 1px solid;
    border-radius: 12px;
  }

  .skeleton-text {
    background: var(--skeleton-text);
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

  #change-theme-btn {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 36px;
    padding: 6px 14px;
    cursor: pointer;
  }
</style>