<template>
  <div class="label-title__wrapper">
    <div class="d-flex pt-4">
      <p class="label-title flex-grow-1">{{ title }}</p>
    </div>
    <v-divider class="my-2 mb-4" />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
  },
};
</script>

<style>
.label-title {
  font-size: 24px;
  font-weight: 600;
}
</style>
