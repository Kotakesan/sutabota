<template>
  <div>
    <Label :title="title" />
    <DescriptionComponent
      class="content__wrapper"
      description="API TEST"
      :title="title"
      @click="onClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "VALORANT",
      profile: undefined,
    };
  },
  methods: {
    async onClick() {
      this.profile = await this.$_api.acount.get();
      console.log("prof", this.profile);
    },
  },
};
</script>
