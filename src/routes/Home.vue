<template>
  <div class="home">
    <p>In Development</p>
    <br>
    <TextInput/>
    <br><br>
    <TextInput value="With value"/>
    <br><br>
    <TextInput placeholder="Hello World"/>
    <br><br>
    <TextInput placeholder="Hello World 2" title="This is a title"/>
    <br><br>
    <Button value="This is button"/>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/TextInput.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  components: {
    TextInput,
    Button
  }
})
</script>