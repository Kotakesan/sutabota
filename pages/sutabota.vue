<template>
  <div>
    <Label title="すたぼた" />
    <div class="pa-4">
      ボタンを押すとスタンミじゃぱんさんの声を聴くことができます。
    </div>
    <v-card class="pa-4">
      <v-card-title> 挨拶</v-card-title>
      <v-btn @click="onClick('jasimnida')"
        >나의 이름은 다지마 게이고입니다.</v-btn
      >
      <v-card-text class="font-weight-bold white--text"></v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "index",
  data() {
    return {
      isPlayed: false,
    };
  },
  methods: {
    onClick(name) {
      if (this.isPlayed) {
        // this.audio.pause();
        this.isPlayed = false;
      } else {
        const audio = new Audio(`../assets/sounds/${name}.mp3`);
        // this.audio.load();
        // this.audio.play();
        this.isPlayed = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content__wrapper {
  font-size: 18px;
  font-weight: 600;
}
</style>
