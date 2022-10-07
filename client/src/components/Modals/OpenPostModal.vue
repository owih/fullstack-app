<template>
  <ModalWrapper class="without-spacers" :name="this.id">
    <div class="post-modal">
      <div class="post-modal__row">
        <div class="post-modal__left">
          <img
            :src="src + getPost.img"
            alt=""
            class="post-modal__img">
        </div>
        <div class="post-modal__right">
          <div class="post-modal__about">
            <div class="post-modal__profile">
              <div class="post-modal__avatar">
                <img :src="require('../../assets/images/profile/profile-empty.jpg')" alt="" class="image">
              </div>
              Name author
            </div>
          </div>
          <div class="post-modal__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem eius esse facere nihil numquam quaerat quisquam, reiciendis vel. Ab animi blanditiis dolor error hic quaerat quo reprehenderit, saepe veritatis.
          </div>
          <div class="post-modal__likes">
            <strong>202</strong> likes
          </div>
          <div class="post-modal__comments">
            <PostComments />
          </div>
        </div>
      </div>
    </div>
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/Modals/ModalWrapper";
import PostComments from "@/components/Post/PostComments";
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
    PostComments,
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
@import "src/assets/styles/variables";
  .post-modal {
    &__row {
      display: flex;
    }
    &__left {
      flex: 0 0 540px;
      height: 540px;
      position: relative;
      &:before {
        content: 'Post picture';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 22px;
        color: lightgray;
      }
    }
    &__right {
      padding: 16px;
    }
    &__profile {
      font-size: 18px;
    }
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
    }
    &__about {
      padding-bottom: 8px;
      border-bottom: 1px solid $gray-300;
      margin-bottom: 8px;
    }
    &__avatar {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      overflow: hidden;
      margin-right: 6px;
      vertical-align: middle;
      display: inline-block;
      .image {
        width: 100%;
        height: 100%;
      }
    }
    &__likes {
      text-align: right;
      padding-bottom: 8px;
      border-bottom: 1px solid $gray-300;
      margin-bottom: 8px;
    }
  }
</style>
