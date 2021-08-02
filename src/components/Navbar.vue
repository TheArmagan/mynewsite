<template>
  <div class="nav-component">
    <div class="buttons" @click="updateBottomBar()">
      <router-link class="button" to="/" :class="{'active': $route.path == '/'}">
        Ev
      </router-link>
      <router-link class="button" to="/aboutme" :class="{'active': $route.path == '/aboutme'}">
        Hakkımda
      </router-link>
      <router-link class="button" to="/projects" :class="{'active': $route.path == '/projects'}">
        Projerlerim
      </router-link>
      <router-link class="button" to="/contact" :class="{'active': $route.path == '/contact'}">
        İletişim
      </router-link>
    </div>
    <div class="bar-container">
      <div class="bottom-bar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import gsap from "gsap";

export default defineComponent({
  mounted() {
    this.updateBottomBar(true);
    window.addEventListener("resize", ()=>{
      this.updateBottomBar(true);
    });
  },
  methods: {
    updateBottomBar(instant = false) {
      let buttonRect = (document.querySelector(".button.active") as HTMLLinkElement).getBoundingClientRect();
      let buttonsRect = (document.querySelector(".buttons") as HTMLDivElement).getBoundingClientRect();
      let barOffset = buttonRect.left-buttonsRect.left;
      let barWidth = buttonRect.width;
      gsap.to(".bottom-bar", {width: barWidth, left: barOffset, duration: instant ? 0 : 0.35})
    }
  }
})
</script>


<style scoped>
  .nav-component {
    display: block;
    width: 100%;
  }

  .buttons {
    display: flex;
    width: 100%;
    height: 48px;
    justify-content: flex-start;
    align-items: center;
  }

  .button {
    cursor: pointer;
    user-select: none !important;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms ease-in-out;
    border-bottom: 1px solid #67686e1e;
    color: rgb(212, 212, 212);
  }

  .button.active {
    color: rgb(255, 255, 255);
  }

  .button:hover {
    transition: all 100ms ease-in-out;
    background-color: #67686e41;
  }

  .bar-container {
    display: block;
    position: relative;
    width: 100%;
    height: 2px;
  }

  .bottom-bar {
    position: absolute;
    background-color: #67686e60;
    height: 2px;
    width: 0px;
  }

</style>