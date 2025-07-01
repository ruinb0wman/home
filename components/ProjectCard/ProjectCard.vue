<template>
  <div class="project-card" @click="nav">
    <img :src="cover" alt="" class="cover">
    <div class="name">{{ name }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress';

const router = useRouter();
const props = defineProps<{ name: string, cover: string, link: string }>()

function nav() {
  router.go(props.link);
}
</script>

<style scoped>
.project-card {
  cursor: pointer;
}
</style>
