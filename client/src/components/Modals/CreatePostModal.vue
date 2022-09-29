<template>
  <ModalWrapper :name="this.id">
    <div>
      asdasd
    </div>
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/Modals/ModalWrapper";
import { mapActions } from "vuex";

export default {
  name: "CreatePostModal",
  components: {
    ModalWrapper,
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
  }
}
</script>
