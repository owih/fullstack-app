<template>
  <div class="wrapper" :class="{
    'wrapper_scroll-blocked': allOpen.length,
  }">
      <slot></slot>
      <CreatePostModal :id="createPostModal"/>
      <OpenPostModal id="OpenPostModal"/>
  </div>
</template>

<script>
import { CREATE_POST_MODAL, OPEN_POST_MODAL } from "@/stubs/modals";
import CreatePostModal from "@/components/Modals/CreatePostModal";
import OpenPostModal from "@/components/Modals/OpenPostModal";
import { mapGetters } from "vuex";

export default {
  name: "WrapperVue",
  data () {
    return {
      isThereOpenModal: false,
      createPostModal: CREATE_POST_MODAL,
      openPostModal: OPEN_POST_MODAL,
    }
  },
  components: {
    CreatePostModal,
    OpenPostModal,
  },
  computed: {
    ...mapGetters([
      'allOpen',
    ]),
  },
}
</script>

<style scoped>

</style>
