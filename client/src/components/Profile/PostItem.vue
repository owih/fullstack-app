<template>
  <div class="post-item">
    <img src="#" alt="">
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    ...mapActions([
      'open'
    ]),
    openPostModal () {
      this.open('postModal');
    }
  }
}
</script>

<style scoped>

</style>
