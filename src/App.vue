<template>
  <div 
  @mousemove="onMouseMove" 
  @mouseleave="onMouseLeave" 
  @mouseenter="onMouseEnter"
  @mousedown="onMouseDown"
  @mouseup="onMouseUp"
  >
    <Cursor :w="cursorW" :h="cursorH" :c="cursorColor" :x="cursorX" :y="cursorY" :style="`border-radius:99999px;${isCursorHoveringText ? `border: 1px solid black;` : ''}`"/>
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
import Cursor from './components/Cursor.vue';

export default defineComponent({
  name: 'App',
  components: {
    Content,
    Background,
    Cursor
  },
  data() {
    return {
      cursorX: -50,
      cursorY: -50,
      cursorColor: "#ffffff55",
      cursorW: 22,
      cursorH: 22,
      isCursorDown: false,
      isCursorHoveringText: false
    }
  },
  mounted() {
    window.internalApp = this;
  },
  methods: {
    onMouseMove(e: MouseEvent) {
      let x = e.x, y = e.y, target = e.target as HTMLElement;
      this.cursorX = x;
      this.cursorY = y;

      
      let isCursorHoveringTextElement = false;
      {
        let firstChild = target?.firstChild as HTMLElement;
        if (firstChild?.nodeName == "#text") {
          let style = getComputedStyle(target);
          let userSelect = style.userSelect || style.webkitUserSelect || "auto";
          if (userSelect == "auto" || userSelect == "text") {
            let rect = target?.getBoundingClientRect();
            if (rect) {
              if (x > rect.left && y > rect.top && x < (rect.left+rect.width) && y < (rect.top+rect.height)) {
                isCursorHoveringTextElement = true;
              }
            }
          }
        }
      }
      
      this.isCursorHoveringText = isCursorHoveringTextElement;
      if (isCursorHoveringTextElement) {
        this.cursorColor = "#ffffff";
        this.cursorW = 4;
        this.cursorH = 26;
      } else {
        this.cursorColor = "#ffffff33";
        if (this.isCursorDown) {
          this.cursorW = 18;
          this.cursorH = 18;
        } else {
          this.cursorW = 22;
          this.cursorH = 22;
        }
       
      }
    },
    onMouseEnter() {
      this.cursorColor = "#ffffff33";
    },
    onMouseLeave() {
      this.isCursorDown = false;
      this.cursorColor = "#ffffff00";
      this.cursorW = 22;
      this.cursorH = 22;
    },
    onMouseDown() {
      this.isCursorDown = true;
      if (this.isCursorHoveringText) return;
      this.cursorW = 18;
      this.cursorH = 18;
    },
    onMouseUp() {
      this.isCursorDown = false;
      if (this.isCursorHoveringText) return;
      this.cursorW = 22;
      this.cursorH = 22;
    }
  }
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
  cursor: none !important;
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

.cursor-container {
  z-index: 3;
}

.background, .main, .cursor-container {
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
  user-select: none;
  transition: opacity 100ms ease-in-out;
}

.used-thecnoligies:hover {
  opacity: 0.9;
}

.thecnology {
  font-weight: 400 !important;
}
</style>
