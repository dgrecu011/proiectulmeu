<template>
  <div id="app" class="flex flex-col min-h-screen">
    <AppHeader />
    <router-view class="flex-grow" />
    <!-- This allows the main content to take the available space -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
/* Global Styles */
</style>
