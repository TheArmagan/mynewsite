<template>
  <div class="background-component">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Background",
  mounted() {
    let canvas = this.$refs.canvas as HTMLCanvasElement;
    let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    window.addEventListener("resize", ()=>{
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    });

    let drawData = new Set<{x:number,y:number,progress:number}>();

    document.body.addEventListener("mousemove", (e)=>{
      drawData.add({x:e.x, y:e.y,progress:1});
    });

    document.body.addEventListener("touchmove", (e)=>{
      Array.from(e.touches).forEach(i=>{
        drawData.add({x:i.clientX, y:i.clientY,progress:1});
      });
    });

    function draw() {
      requestAnimationFrame(draw);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawData.forEach(i=>{
        ctx.beginPath();
        ctx.arc(i.x-(i.progress/2), i.y-(i.progress/2), i.progress, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(150, 40, 54, ${1-(i.progress/50)})`;
        ctx.fill();
        i.progress += 2;
        if (i.progress > 100) {
          drawData.delete(i);
        }
      });
    }

    draw();
  }
})
</script>

<style scoped>
  canvas {
    background-color: #0F111A;
  }
</style>
