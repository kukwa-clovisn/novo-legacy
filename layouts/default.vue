<script setup>
const showMenuBar = showMenu();
</script>
<template>
  <div class="p-0 m-0">
    <NuxtLayout name="page-header" />
    <slot />
    <NuxtLayout name="page-footer" />
    <NuxtLayout name="menu" v-if="showMenuBar" />
  </div>
</template>
