<template>
  <div>
    <div>description: {{ description }}</div>
    <div>title: {{ title }}</div>
    <div class="mt-8">
      <Button @click="$emit('click')"> 親コンポーネントにイベント通知</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: { type: String, default: "" },
    title: { type: String, default: "" },
  },
};
</script>

<style></style>
