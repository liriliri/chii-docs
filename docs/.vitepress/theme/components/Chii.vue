<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useData } from 'vitepress'
import LunaSplitPane, { LunaSplitPaneItem } from 'luna-split-pane/vue'

const totalHeight = ref(0)
const targetIframe = ref(null)
const devtoolsIframe = ref(null)

function resetHeight() {
  totalHeight.value = window.innerHeight - 64
}

function sendToTarget(event) {
  targetIframe.value.contentWindow.postMessage(event.data, event.origin)
}

onMounted(() => {
  resetHeight()
  window.addEventListener('resize', resetHeight)

  const targetSrc = '/target.js'
  window.loadChii = () => {
    targetIframe.value.contentWindow.ChiiDevtoolsIframe = devtoolsIframe.value
    targetIframe.value.contentWindow.injectTarget(targetSrc)
  }
  window.addEventListener('message', sendToTarget)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resetHeight)
  window.loadChii = null
  window.removeEventListener('message', sendToTarget)
})

const isDark = useData().isDark
const theme = computed(() => (isDark.value ? 'dark' : 'light'))
</script>

<template>
  <luna-split-pane
    :style="{ height: totalHeight + 'px' }"
    direction="vertical"
    :theme="theme"
  >
    <luna-split-pane-item :weight="50" :min-size="100">
      <iframe
        id="home"
        :src="useData().lang.value === 'zh' ? '/zh/home.html' : '/home.html'"
        scrolling="no"
        ref="targetIframe"
        style="height: 100%"
      ></iframe>
    </luna-split-pane-item>
    <luna-split-pane-item :weight="50" :min-size="100">
      <iframe id="devtools" ref="devtoolsIframe" style="height: 100%"></iframe>
    </luna-split-pane-item>
  </luna-split-pane>
</template>

<style>
#home,
#devtools {
  width: 100%;
  border: none;
}

#devtools {
  border-top: 1px solid var(--vp-c-divider);
}
</style>
