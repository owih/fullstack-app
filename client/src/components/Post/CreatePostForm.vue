<template>
  <form @submit.prevent="sendPostData" action="#" class="create-post-form">
    <div class="create-post-form__item">
      <TextareaField :required="true" placeholder="Enter description" v-model="this.postData.description"/>
    </div>
    <div class="create-post-form__item">
      <InputField :required="true" placeholder="Enter link" v-model="this.postData.link"/>
    </div>
    <div class="create-post-form__item">
      <input :required="true" @change="processImageFile" type="file">
    </div>
    <div class="create-post-form__item">
      <ControlPrimary type="submit">
        Create post
      </ControlPrimary>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import InputField from '@/UI/InputField.vue';

export default {
  name: 'CreatePostForm',
  components: { InputField },
  data () {
    return {
      postData: {
        description: '',
        link: '',
        img: null,
        profileId: null,
      }
    }
  },
  emits: {
    changeImagePreview: {
      type: File || null,
    },
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
      this.$emit('changeImagePreview', null);
    },
    createPostFormData () {
      const formData = new FormData();
      formData.append('link', this.postData.link);
      formData.append('description', this.postData.description);
      formData.append('img', this.postData.img);
      formData.append('profileId', this.postData.profileId);
      return formData;
    },
    clearData () {
      this.postData.description = '';
      this.postData.img = null;
      this.postData.profileId = null;
      this.$emit('changeImagePreview', null);
    }
  },
  unmounted () { this.clearData() }
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
