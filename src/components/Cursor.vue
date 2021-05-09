<template>
  <div class="cursor site-cursor" :style="`left:${x-(w/2)}px;top:${y-(h/2)}px;width:${w}px;height:${h}px;background-color:${c};`"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    w: {
      type: Number,
      default: 0
    },
    h: {
      type: Number,
      default: 0
    },
    c: {
      type: String,
      default: "#ffffff"
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
  }
})
</script>


<style scoped>
.cursor {
  position: absolute;
  z-index: 10000;
  pointer-events: none;
  transition: background-color 100ms ease-in-out;
}
</style>
