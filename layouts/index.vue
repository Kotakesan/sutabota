<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt class="layout__container" />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.layout__container {
  height: 600px;
  font-size: 18px;
}
</style>
