<template>
  <span class="text-input-component">
    <p v-if="title" class="title">{{title}}</p>
    <input @input="$emit('update:modelValue', $event.target.value)" :value="modelValue || value" type="text" :name="name" :id="id" :placeholder="placeholder">
  </span>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "TextInput",
    props: {
      value: {
        type: String,
        default: ""
      },
      modelValue: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      name: {
        type: String,
        default: ""
      },
      id: {
        type: String,
        default: ""
      },
    },
    emits: ['update:modelValue']
  })
</script>

<style scoped>
  input {
    font-size: 16px;
    padding: 6px 8px;
    color: rgb(212, 209, 209);
    background-color: #0a0c12be;
    transition: border 100ms ease-in-out;
    border: 1px solid #67686E;
    border-radius: 6px;
  }

  input:hover, input:active {
    border: 1px solid #7e808a;
    color: rgb(255, 255, 255);
  }

  input::placeholder {
    font-size: 0.9em;
    font-weight: 600;
    opacity: 0.5;
  }

  .title {
    margin-bottom: 0.4em;
    font-size: 0.8em;
    font-weight: 600;
    color: rgb(212, 209, 209);
  }
</style>