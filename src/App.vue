<template>
  <div>
    <Background/>
    <Content/>
    <div class="used-thecnoligies">
      Bu sayfa şunları kullanarak yapıldı;
      <a class="thecnology">HTML5 Canvas</a><br>
      <a class="thecnology">HTML5</a>,
      <a class="thecnology">Vue 3.0</a>, 
      <a class="thecnology">Vue Router Next</a>,<br>
      <a class="thecnology">TypeScript/JavaScript</a>,
      <a class="thecnology">CSS3</a><br>
      ve en önemlisi sevgi.
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line
declare const window: any;

import { defineComponent } from 'vue';
import Background from './components/Background.vue';
import Content from './components/Content.vue';

export default defineComponent({
  name: 'App',
  components: {
    Content,
    Background,
  },
  data() {
    return {}
  },
  computed: {
    isTouch() {
      return navigator.maxTouchPoints != 0;
    }
  },
  mounted() {
    window.internalApp = this;
  },
  methods: {}
});
</script>

    
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'Raleway', sans-serif;
}

::-webkit-scrollbar {
  width: 11px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 11px 11px rgba(255, 255, 255, 0.05);
  border: solid 2px transparent;
  border-radius: 11px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 11px 11px rgba(255, 255, 255, 0.1);
  border: solid 2px transparent;
  border-radius: 11px;
}

::-webkit-scrollbar-thumb:hover {
  box-shadow: inset 0 0 11px 11px rgba(255, 255, 255, 0.2);
}

::-webkit-scrollbar-button {
  display: none;
}

html, body, #app {
  width: 100vw;
  height: 100vh;
  background-color: #0F111A;
  color: white;
  position: relative;
  overflow: hidden;
}


.background {
  z-index: 1;
}

.main {
  z-index: 2;
}

.background, .main {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

a {
  color: currentColor;
  text-decoration: none;
}

.used-thecnoligies {
  font-weight: 400 !important;
  font-size: 12px;
  opacity: 0.1;
  z-index: 10;
  position: absolute;
  left: 4px;
  bottom: 4px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  transition: opacity 100ms ease-in-out;
}

.used-thecnoligies:hover {
  opacity: 0.9;
}

.thecnology {
  font-weight: 400 !important;
}
</style>
