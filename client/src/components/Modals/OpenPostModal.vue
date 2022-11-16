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
                <img :src="getPostOwnerProfile && getPostOwnerProfile.img ? src + getPostOwnerProfile.img : require('../../assets/images/profile/profile-empty.jpg')" alt="" class="image">
              </div>
              {{ getPostOwnerProfile && getPostOwnerProfile.login }}
            </div>
          </div>
          <div class="post-modal__description">
            {{ getPost.description }}
          </div>
          <div class="post-modal__likes">
            <strong>{{ getPost.likes }}</strong> likes
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
      'fetchPostPerId',
      'fetchProfilePerPostOwner',
      'clearCurrentPostState',
      'open'
    ]),
    openModal () { this.open(this.id) },
    checkIsOpen () {
      if (this.$route.query.post) {
        this.openModal();
        this.fetchPostPerId(this.$route.query.post).then(() => this.fetchProfilePerPostOwner(this.getPost.profileId));
        this.isOpen = true;
      } else if (this.isOpen) {
        this.isOpen = false;
        this.clearCurrentPostState();
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPost',
      'getPostOwnerProfile'
    ]),
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";
@import "src/assets/styles/mixins";
  .post-modal {
    &__row {
      display: flex;
      flex-direction: column;
      @include media-breakpoint-up(md) {
        flex-direction: row;
      }
    }
    &__left {
      flex: 0 1 400px;
      height: 400px;
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
      @include media-breakpoint-up(md) {
        flex: 0 0 540px;
        height: 540px;
      }
    }
    &__right {
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    &__profile {
      font-size: 18px;
      display: flex;
      max-width: 70%;
      align-items: center;
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
      flex: 0 0 40px;
      border-radius: 40px;
      overflow: hidden;
      margin-right: 6px;
      vertical-align: middle;
      display: inline-block;
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__likes {
      text-align: right;
      padding-bottom: 8px;
      border-bottom: 1px solid $gray-300;
      margin-bottom: 8px;
    }
    &__comments {
      flex: 1 0 300px;
      overflow: auto;
    }
    &__description {
      flex: 0 1 30px;
    }
  }
</style>
