<template>
  <ModalWrapper class="without-spacers" :name="this.id">
    <div class="create-post-modal">
      <div class="create-post-modal__row">
        <div class="create-post-modal__left">
          <div class="create-post-modal__image-wrapper">
            <img v-if="imagePreviewSrc" class="create-post-modal__img" :src="imagePreviewSrc" alt="">
            <div v-else class="create-post-modal__preview">
              Image preview
            </div>
          </div>
        </div>
        <div class="create-post-modal__right">
          <div class="create-post-modal__title">
            Create post
          </div>
          <CreatePostForm @changeImagePreview="changeImagePreview" />
        </div>
      </div>
    </div>
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/Modals/ModalWrapper";
import CreatePostForm from "@/components/Post/CreatePostForm";
import { mapActions } from "vuex";

export default {
  name: "CreatePostModal",
  components: {
    ModalWrapper, CreatePostForm
  },
  data () {
    return {
      imagePreviewSrc: '',
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'open'
    ]),
    changeImagePreview (file) {
      if (file) {
        this.imagePreviewSrc = URL.createObjectURL(file);
      } else {
        this.imagePreviewSrc = '';
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";
.create-post-modal {
  height: 100%;
  &__row {
    display: flex;
    height: 100%;
  }
  &__left {
    flex: 0 0 540px;
    height: 540px;
  }
  &__right {
    flex: 1 0 auto;
    padding: 12px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__image-wrapper {
    position: relative;
    height: 100%;
  }
  &__preview {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    color: $gray-500;
  }
  &__title {
    font-size: 20px;
    margin-bottom: 22px;
  }
}
</style>
