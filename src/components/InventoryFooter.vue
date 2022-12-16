<template>
  <footer>
    <div class="skeleton-text full"/>
    <close-icon />
  </footer>
</template>

<script>
import CloseIcon from "@/components/UI/CloseIcon";
export default {
  components: {
    CloseIcon
  }
}
</script>

<style scoped>
footer {
  grid-area: footer;
  padding: 18px;
  display: flex;
}

svg {
  margin-left: 42px;
  cursor: pointer;
}
</style>