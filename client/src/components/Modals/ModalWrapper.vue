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
      console.log('close')
      this.close(this.name)
    }
  },
  beforeUnmount () {
    if (this.allOpen.includes(this.name)) this.closeModal()
  }
}
</script>

<style scoped>
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
  padding: 20px;
  transition: all 0.3s ease;
  max-height: 80%;
  max-width: 300px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-wrapper button {
  float: right;
}
</style>
