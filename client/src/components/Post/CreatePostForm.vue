<template>
  <form @submit="createPost" action="#" class="create-post-form">
    <div class="create-post-form__item">
      <InputField placeholder="Enter description" v-model="description"/>
    </div>
    <div class="create-post-form__item">
      <input @change="getImageFile" type="file">
    </div>
    <div class="create-post-form__item">
      <ControlPrimary>
        Create post
      </ControlPrimary>
    </div>
  </form>
</template>

<script>
export default {
  name: "CreatePostForm",
  data () {
    return {
      description: '',
    }
  },
  methods: {
    getImageFile (event) {
      this.$emit('changeImagePreview', event.target.files[0])
    }
  },
  emits: {
    changeImagePreview: {
      type: File
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
