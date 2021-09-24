<template>
  <span class="button-component">
    <button :id="id" :name="name" :type="type">
      {{value}}
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Button",
  props: {
    value: {
      type: String,
      default: "Button"
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  }
})
</script>

<style scoped>
  button {
    font-size: 16px;
    padding: 8px 14px;
    color: rgb(213, 219, 236);
    background-color: #1d1e24be;
    transition: border 100ms ease-in-out, transform 100ms ease-in-out;
    border: 1px solid #90929b;
    border-radius: 6px;
    user-select: none;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
    border: 1px solid #b5b9c5;
    color: rgb(222, 225, 240);
  }

  button:active {
    transform: scale(0.95);
    border: 1px solid #7e808a;
    color: rgb(238, 238, 238);
  }
</style>