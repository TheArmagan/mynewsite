<template>
  <div class="contact">
    <h1>İletişim</h1>
    <br>
    <p><strong>Discord İsmim:</strong> Armagan#4869</p>
    <p><strong>E-Mail Adresim:</strong> kiracarmaganonal@gmail.com</p>
    <br>
    <p>Ek olarak güzel sohbet edebilcek bir yer bakıyorsanız. Discord sunucumada göz atabilirsiniz.</p>
    <br>
    <span class="buttons">
      <a href="mailto:kiracarmaganonal@gmail.com">
        <Button value="E-Mail"></Button>
      </a>
      <a href="/discord">
        <Button value="Discord"></Button>
      </a>
    </span>
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from "@/components/Button.vue"

export default defineComponent({
  components: {
    Button
  }
})
</script>

<style scoped>
  .buttons a:not(:last-child) {
    margin-right: 8px;
  }
</style>