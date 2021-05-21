<template>
  <div class="main">
    <div class="middle">
      <div class="title-container">
        <h1 ref="title" class="title" style="opacity:0;transform:scale(0.1)">TheArmagan</h1>
      </div>
      <div ref="content" class="content" style="opacity:0">
        <Navbar/>
        <div class="router-view">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from "gsap";
import Navbar from './Navbar.vue';

export default defineComponent({
  components: { Navbar },
  name: 'Content',
  mounted() {
    gsap.to(".title", {opacity: 1, duration: 4}).then(()=>{
      (this.$refs.title as HTMLHeadingElement).removeAttribute("style");
    });
    
    gsap.to(".title", {transform: "scale(1)", duration: 1, ease: "Back.easeOut" });
    gsap.to(".content", {height: this.getContentHeight(), marginTop: 16, duration: 1});
    gsap.to(".content", {borderRadius: 4, duration: 2});
    gsap.to(".content", {opacity: 1, duration: 4})
  },
  methods: {
    getContentHeight() {
      let maxHeight = innerHeight - 120;
      let contentHeight = isNaN(parseInt(this.$route.meta?.contentHeight as string)) ? 370 : parseInt(this.$route.meta?.contentHeight as string);
      if (contentHeight < 370) contentHeight = 370;
      if (contentHeight > maxHeight) contentHeight = maxHeight;
      return contentHeight;
    }
  },
  watch: {
    $route() {
      gsap.to(".content", {height: this.getContentHeight(), marginTop: 16, duration: 1});
    }
  }
});
</script>
<style scoped>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    cursor: pointer;
    user-select: none;
    transform-origin: center center;
    font-size: 36px;
    display: inline-block;
    height: 48px;
  }

  .title:active {
    transform: scale(0.9);
  }

  .middle {
    max-width: 720px;
    width: 100%;
    height: auto;
    text-align: center;
  }

  .content {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 0px;
    width: 90%;
    height: 0px;
    background-color: #0a0c12be;
    transition: border 100ms ease-in-out;
    border: 1px solid #67686E00;
    contain: content;
  }

  .content:hover {
    border: 1px solid #67686E;
  }

  .router-view {
    padding: 16px;
    padding-bottom: 0px;
    text-align: left;
    display: block;
    height: 100%;
    width: 100%;
    contain: content;
    color: whitesmoke;
  }
</style>
