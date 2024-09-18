<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const targetHeight = ref(0);
const devtoolsHeight = ref(0);
const targetIframe = ref(null);
const devtoolsIframe = ref(null);

function resetHeight() {
  const totalHeight = window.innerHeight - 64;
  targetHeight.value = totalHeight / 2;
  devtoolsHeight.value = totalHeight - targetHeight.value;
}

function sendToTarget(event) {
  targetIframe.value.contentWindow.postMessage(event.data, event.origin);
}

onMounted(() => {
  resetHeight();
  window.addEventListener("resize", resetHeight);

  const targetSrc = "/target.js";
  window.loadChii = () => {
    targetIframe.value.contentWindow.ChiiDevtoolsIframe = devtoolsIframe.value;
    targetIframe.value.contentWindow.injectTarget(targetSrc);
  };
  window.addEventListener("message", sendToTarget);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resetHeight);
  window.loadChii = null;
  window.removeEventListener("message", sendToTarget);
});
</script>

<template>
  <iframe
    id="home"
    src="/home.html"
    scrolling="no"
    ref="targetIframe"
    :style="{ height: targetHeight + 'px' }"
  ></iframe>
  <iframe
    id="devtools"
    ref="devtoolsIframe"
    :style="{ height: devtoolsHeight + 'px' }"
  ></iframe>
</template>

<style>
#home,
#devtools {
  width: 100%;
  border: none;
}

#devtools {
  border-top: 1px solid #d3e3fd;
}
</style>
