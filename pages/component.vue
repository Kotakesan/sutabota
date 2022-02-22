<template>
  <div>
    <Label :title="title" />
    <DescriptionComponent
      class="content__wrapper"
      description="説明"
      :title="title"
      @click="onClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "コンポーネントの作り方",
    };
  },
  methods: {
    onClick() {
      console.log("clickしました");
    },
  },
};
</script>

<style></style>
