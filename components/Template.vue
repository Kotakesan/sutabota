<template>
  <div>
    <div class="font-weight-bold">v-for:</div>
    <div class="ml-8" v-for="(item, index) in items" :key="index">
      {{ index + 1 }} - {{ item.name }}
    </div>
    <div class="font-weight-bold">v-if:</div>
    <div class="ml-8">
      <Button class="mt-2" @click="$emit('update:is-active', !isActive)">
        切り替えます
      </Button>
      <div v-if="isActive" class="mt-2 template__is-active">アクティブです</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
    isActive: { type: Boolean, default: false },
  },
};
</script>

<style>
.template__is-active {
  animation: template__is-active 2s linear infinite;
}
@keyframes template__is-active {
  0% {
    color: Magenta;
  }
  33% {
    color: yellow;
  }
  66% {
    color: Cyan;
  }
  100% {
    color: Magenta;
  }
}
</style>
