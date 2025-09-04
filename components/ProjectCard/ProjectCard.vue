<script setup lang="ts">
import { useRouter } from 'vitepress';

const router = useRouter();
const props = defineProps<{ name: string, cover: string, link: string }>()

function nav() {
  router.go(props.link);
}
</script>

<template>
  <div class="project-card" @click="nav">
    <img :src="props.cover" alt="" class="cover">
    <div class="name">{{ props.name }}</div>
  </div>
</template>

<style scoped>
.project-card {
  cursor: pointer;
}
</style>
