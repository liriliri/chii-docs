<script setup>
import { ref, onMounted } from "vue";
import { defineClientComponent } from "vitepress";

const lunaShaderToyPlayerRef = ref(null);
const LunaShaderToyPlayer = defineClientComponent(
  () => import("luna-shader-toy-player/vue"),
  [
    {
      ref: lunaShaderToyPlayerRef,
    },
  ]
);

// https://www.shadertoy.com/view/XXyGzh
const code = `void mainImage( out vec4 o, vec2 u ) {
    vec2 v = iResolution.xy;
         u = .2*(u+u-v)/v.y;
         
    vec4 z = o = vec4(1,2,3,0);
     
    for (float a = .5, t = iTime, i; ++i < 19.; 
         o += (1. + cos(z+t)) 
            / length((1.+i*dot(v,v)) 
                   * sin(1.5*u/(.5-dot(u,u)) - 9.*u.yx + t))
         )  
        v = cos(++t - 7.*u*pow(a += .03, i)) - 5.*u,                 
        u += tanh(40. * dot(u *= mat2(cos(i + .02*t - vec4(0,11,33,0)))
                           ,u)
                      * cos(1e2*u.yx + t)) / 2e2
           + .2 * a * u
           + cos(4./exp(dot(o,o)/1e2) + t) / 3e2;
              
     o = 25.6 / (min(o, 13.) + 164. / o) 
       - dot(u, u) / 250.;
}`;

const renderPass = ref([
  {
    inputs: [],
    outputs: [],
    code,
    name: "Image",
    description: "",
    type: "image",
  },
]);

onMounted(() => {
  if (window.parent && window.parent.loadChii) {
    window.injectTarget = function (targetSrc) {
      var script = document.createElement("script");
      script.src = targetSrc;
      script.setAttribute("embedded", "true");
      script.setAttribute("cdn", "https://cdn.jsdelivr.net/npm/chii/public");
      document.head.appendChild(script);
    };
    window.parent.loadChii();
  }
});
</script>

<template>
  <div class="banner">
    <luna-shader-toy-player
      :controls="false"
      :renderPass="renderPass"
      :style="{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }"
    />
    <div class="slogan-container">
      <div class="slogan">
        <p>
          Chii<br />
          Remote Debugging Tool
        </p>
      </div>
      <div class="slogan-desc">
        Debug remotely with chrome devtools && Embed chrome devtools in web
        pages.
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slogan-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: var(--vp-font-family-base);
  text-shadow: 0 0 2px var(--vp-c-bg), 0 0 5px var(--vp-c-bg),
    0 0 10px var(--vp-c-bg);
}
.slogan {
  font-size: 56px;
  line-height: 1.2em;
  text-align: center;
  font-weight: 700;
}
.slogan-desc {
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 24px;
  color: var(--vp-c-text-2);
  text-align: center;
}

@media screen and (max-width: 768px) {
  .slogan {
    font-size: 32px;
  }
  .slogan-desc {
    font-size: 16px;
  }
}
</style>
