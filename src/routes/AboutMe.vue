<template>
  <div class="aboutme">
    <h1>Hakkımda</h1>
    <br>
    <p>
      Adım Armağan, <strong>17</strong> yaşındayım.<br>
      JavaScript, HTML, CSS, TypeScript ve C# ile <strong>3 yıldır</strong> uğraşıyorum.<br>
      Ek olarak <strong>ADHD ve Diskleksi</strong> sahibiyim.<br>
      Türkiye, İstanbul'da yaşıyorum.
    </p>
    <br>
    <p>
      Projelerimi görüntülemek için ve benimle iletişime geçmek için,<br>
      aşşağıdaki düğmeleri kullanabilirsiniz.  
    </p>
    <br>
    <span class="buttons">
      <router-link to="/projects">
        <Button value="Projelerim"></Button> 
      </router-link>
      <router-link to="/contact">
        <Button value="İletişim"></Button> 
      </router-link>
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