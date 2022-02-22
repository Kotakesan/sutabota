<template>
  <div>
    <Label title="VueでReactがんばる" />
    <div class="d-flex justify-space-between content__wrapper">
      <ListItem text="コンポーネントの作り方" to="component" />
      <ListItem text="テンプレート構文" to="template" />
      <ListItem text="valorant" to="valorant" />
      <ListItem text="すたぼた" to="sutabota" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "index",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.content__wrapper {
  font-size: 18px;
  font-weight: 600;
}
</style>
