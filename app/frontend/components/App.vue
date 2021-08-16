<template>
  <section>
    <h1>QQ!</h1>
    <v-icon icon="mdi-home" />
  </section>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style></style>
