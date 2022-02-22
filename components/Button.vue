<template>
  <v-btn class="button__text" @click="$emit('click')">
    <slot />
  </v-btn>
</template>

<script>
export default {};
</script>

<style>
.button__text {
  font-size: 18px !important;
  font-weight: 400 !important;
}
</style>
