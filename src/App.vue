<template>
  <div id="app" class="flex flex-col min-h-screen">
    <AppHeader />
    <router-view class="flex-grow" />
   
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

</style>
