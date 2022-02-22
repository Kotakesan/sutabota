<template>
  <v-app dark>
    <v-main>
      <v-container>
        <nuxt class="layout__container" />
        <div class="pr-8 d-flex justify-end layout__button">
          <v-btn @click="$router.push('/')">もどります</v-btn>
        </div>
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
  .content__wrapper {
    font-size: 24px;
    font-weight: 400;
    padding: 32px;
  }
}
</style>
