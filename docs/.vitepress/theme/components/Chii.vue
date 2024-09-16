<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const targetHeight = ref(0);
const devtoolsHeight = ref(0);

function resetHeight() {
  const totalHeight = window.innerHeight - 64;
  targetHeight.value = totalHeight / 2;
  devtoolsHeight.value = totalHeight - targetHeight;
}

onMounted(() => {
  resetHeight();
  window.addEventListener("resize", resetHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resetHeight);
});
</script>

<template>
  <iframe
    id="home"
    src="/home.html"
    scrolling="no"
    :style="{ height: targetHeight + 'px' }"
  ></iframe>
</template>

<style>
#home {
  width: 100%;
  border: none;
}
</style>
