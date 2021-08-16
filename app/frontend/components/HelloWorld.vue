<template>
  <section>
    {{ test }}
    <v-btn block> Block Button </v-btn>
  </section>
</template>

<script>
export default {
  data() {
    return {
      test: "HelloWorld",
    };
  },
};
</script>

<style></style>
