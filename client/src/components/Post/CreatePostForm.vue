<template>
  <form @submit.prevent="sendPostData" action="#" class="create-post-form">
    <div class="create-post-form__item">
      <InputField placeholder="Enter description" v-model="this.postData.description"/>
    </div>
    <div class="create-post-form__item">
      <input @change="processImageFile" type="file">
    </div>
    <div class="create-post-form__item">
      <ControlPrimary type="submit">
        Create post
      </ControlPrimary>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreatePostForm",
  data () {
    return {
      postData: {
        description: '',
        img: null,
        profileId: null,
      }
    }
  },
  emits: {
    changeImagePreview: {
      type: File
    }
  },
  mounted () {
    this.postData.profileId = this.getUser.id;
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods: {
    ...mapActions([
      'createPost'
    ]),
    processImageFile (event) {
      this.$emit('changeImagePreview', event.target.files[0]);
      this.postData.img = event.target.files[0];
    },
    sendPostData () {
      const formData = this.createPostFormData();
      this.createPost(formData);
      this.clearData();
    },
    createPostFormData () {
      const formData = new FormData();
      formData.append('description', this.postData.description);
      formData.append('img', this.postData.img);
      formData.append('profileId', this.postData.profileId);
      return formData;
    },
    clearData () {
      this.postData.description = '';
      this.postData.img = null;
      this.postData.profileId = null;
    }
  },
}
</script>

<style scoped lang="scss">
  .create-post-form {
    &__item {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
</style>
