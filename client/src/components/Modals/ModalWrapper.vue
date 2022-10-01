<template>
  <div
    v-if="allOpen.includes(name)"
    :class="`modal-overlay ${active === name ? 'modal-overlay_active' : ''}`"
    @click.self="closeModal"
  >
    <div class="modal-wrapper">
      <button @click="closeModal">
        <i class="icon icon-plus"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ModalWrapper",
  props: {
    name: { type: String, required: true }
  },
  computed: {
    ...mapGetters([
      'active',
      'allOpen'
    ]),
  },
  methods: {
    ...mapActions([
      'close'
    ]),
    closeModal () {
      this.$router.replace({ post: '' })
      this.close(this.name)
    }
  },
  beforeUnmount () {
    if (this.allOpen.includes(this.name)) this.closeModal()
  }
}
</script>

<style scoped lang="scss">
*:focus {
  outline: none;
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
}
.modal-overlay_active {
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-wrapper {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  padding: 12px;
  transition: all 0.3s ease;
  height: 540px;
  max-width: 900px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-wrapper button {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
  .icon {
    transform: rotate(45deg);
    font-size: 18px;
  }
}
.without-spacers {
  .modal-wrapper {
    padding: 0;
  }
}
</style>
