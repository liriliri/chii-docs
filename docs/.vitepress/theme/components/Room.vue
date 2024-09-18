<template>
  <iframe id="playground" src="https://chii.liriliri.io/playground/"></iframe>
</template>

<style>
#playground {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--vp-nav-height));
  border: none;
  background: #fff;
}
</style>
