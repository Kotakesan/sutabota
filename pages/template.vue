<template>
  <div>
    <Label title="テンプレート構文" />
    <Template
      class="content__wrapper"
      :items="items"
      :is-active.sync="isActive"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "アイテム1" },
        { id: 2, name: "アイテム2" },
        { id: 3, name: "アイテム3" },
        { id: 4, name: "アイテム4" },
        { id: 5, name: "アイテム5" },
      ],
      isActive: false,
    };
  },
};
</script>

<style></style>
