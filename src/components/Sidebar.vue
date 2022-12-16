<template>
  <div id="sidebar">
    <img :src="require('@/assets/images/Img Blur.png')" alt="sidebarimg">
    <div class="sidebar-description">
      <span class="skeleton-text title sidebar-description__title"></span>
      <div class="sidebar-description__list">
        <span
            v-for="n in 6"
            class="skeleton-text text sidebar-description__list__item"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#sidebar {
  grid-area: sidebar;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 14px;
}

img {
  width: 100%;
}

span {
  display: block;
  border-radius: 8px;
}

.sidebar-description {
  width: 80%;
  margin-top: 20px;
}

.sidebar-description__title {
  margin-bottom: 24px;
}

.sidebar-description__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 16px;
}

.sidebar-description__list__item:nth-child(1) {
  width: 155px;
}
.sidebar-description__list__item:nth-child(2) {
  width: 190px;
}
.sidebar-description__list__item:nth-child(3) {
  width: 170px;
}
.sidebar-description__list__item:nth-child(4) {
  width: 160px;
}
.sidebar-description__list__item:nth-child(5) {
  width: 140px;
}
.sidebar-description__list__item:nth-child(6) {
  margin-top: 8px;
  width: 80px;
}

</style>