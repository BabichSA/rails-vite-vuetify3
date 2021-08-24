<template>
  <v-app>
    <v-app-bar density="compact">
      <v-app-bar-title>Vuetify</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text>Developer</v-btn>
      <v-btn class="mr-3" text>Help</v-btn>
      <v-divider inset vertical></v-divider>
      <v-btn class="mr-4 ml-5" color="primary" plain>
        <v-icon left icon="mdi-handshake-outline"></v-icon>
        <span>John Leider</span>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <HelloWorld />
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
</style>
