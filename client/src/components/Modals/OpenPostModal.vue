<template>
  <ModalWrapper :name="this.id">
    <div class="post-modal">
      <div class="post-modal__row">
        <div class="post-modal__left">
          <img
            :src="src + getPost.img"
            alt=""
            class="post-modal__img">
        </div>
        <div class="post-modal__right">
        </div>
      </div>
    </div>
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/Modals/ModalWrapper";
import { mapActions, mapGetters } from "vuex";
// TODO: load without image on modal open
export default {
  name: "OpenPostModal",
  data () {
    return {
      src: process.env.VUE_APP_API_URL,
      isOpen: false,
    }
  },
  components: {
    ModalWrapper,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.checkIsOpen();
  },
  watch: {
    $route (to, from) { this.checkIsOpen() }
  },
  methods: {
    ...mapActions([
      'getPostPerId',
      'open'
    ]),
    openModal () {
      this.open(this.id);
    },
    checkIsOpen () {
      if (this.$route.query.post) {
        this.openModal();
        this.getPostPerId(this.$route.query.post);
        this.isOpen = true;
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPost',
    ]),
  },
}
</script>

<style scoped lang="scss">
  .post-modal {
    &__row {
      display: flex;
    }
    &__left {
      margin: -12px;
      flex: 0 0 540px;
      max-height: 540px;
    }
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
