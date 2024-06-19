<script setup lang="ts">
// import { Button } from "@/components/ui/button";
import NavBar from "@/components/custom/NavBar.vue";
</script>

<template>
  <div>
    <!-- <router-link to="/person/emma">its a link</router-link> -->
  </div>
  <NavBar />
  <div class="w-[86%] mx-auto">
    <router-view></router-view>
  </div>
</template>
