<template>
  <div class="px-4 py-2 list-item" @click="$router.push(to)">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
    to: { type: String, default: "" },
  },
};
</script>

<style>
.list-item {
  background-color: rgb(78, 138, 118);
  cursor: pointer;
  border-color: rgb(78, 138, 118);
  border-radius: 8px;
}
.list-item:hover {
  background-color: rgb(135, 190, 172);
}
</style>
