<template>
  <div class="settings-form">
    <div class="settings-form__item">
      <div class="settings-form__row">
        <div class="settings-form__col">
          <div class="settings-form__avatar">
            <input
              class="input" id="set-profile-photo"
              type="file"
              @input="changePreviewImage"
            >
            <label class="label" for="set-profile-photo">
              <img
                :src="profilePreviewImageSrc
                ? profilePreviewImageSrc
                : profileImage && dbAppSrc + profileImage || require('@/assets/images/profile/profile-empty.jpg')"
                alt=""
                class="image"
              >
            </label>
          </div>
        </div>
        <div class="settings-form__col">
          <div class="settings-form__type">
            Change ur profile photo
          </div>
        </div>
      </div>
    </div>
    <div class="settings-form__item">
      <div class="settings-form__row">
        <div class="settings-form__col">
          <InputField v-model="profileName" placeholder="Set new profile name">
            Change profile name
          </InputField>
        </div>
        <div class="settings-form__col">
          <div class="settings-form__type">
            You can set any nickname, include non-unique or only with numbers
          </div>
        </div>
      </div>
    </div>
    <div class="settings-form__item">
      <div class="settings-form__row">
        <div class="settings-form__col">
          <InputField v-model="profileStatus" placeholder="Set new profile status">
            Change status
          </InputField>
        </div>
        <div class="settings-form__col">
          <div class="settings-form__type">
            Show to anyone ur status today
          </div>
        </div>
      </div>
    </div>
    <div class="settings-form__item">
      <div class="settings-form__row">
        <div class="settings-form__col">
          <InputField v-model="profileDescription" placeholder="Set new profile description">
            Change profile description
          </InputField>
        </div>
        <div class="settings-form__col">
          <div class="settings-form__type">
            Let people know about ur feelings!
          </div>
        </div>
      </div>
    </div>
    <div class="settings-form__item">
      <div class="settings-form__control">
        <LinkPrimary :link="profileLink">
          Back to profile
        </LinkPrimary>
      </div>
      <div class="settings-form__control">
        <ControlPrimary @click="processFormData">
          Save
        </ControlPrimary>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { PROFILE_ROUT } from "@/stubs/routes";

export default {
  name: "ProfileSettingsForm",
  data () {
    return {
      dbAppSrc: process.env.VUE_APP_API_URL,
      profilePreviewImageSrc: '',
      profileImage: null,
      profileName: '',
      profileStatus: '',
      profileDescription: '',
      profileLink: PROFILE_ROUT
    }
  },
  mounted () {
    this.getProfileData();
  },
  watch: {
    getCurrentProfileData () {
      this.profileName = this.getCurrentProfileData.login;
      this.profileStatus = this.getCurrentProfileData.status;
      this.profileDescription = this.getCurrentProfileData.description;
      this.profileImage = this.getCurrentProfileData.img;
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getCurrentProfileData'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchCurrentProfilePerId',
      'updateProfileData'
    ]),
    getProfileData () {
      this.fetchCurrentProfilePerId(this.getUser.id);
    },
    processFormData () {
      const formData = new FormData();
      formData.append('img', this.profileImage);
      formData.append('name', this.profileName);
      formData.append('status', this.profileStatus);
      formData.append('description', this.profileDescription);
      const userId = this.getUser.id;
      this.updateProfileData({ userId, formData });
    },
    changePreviewImage (event) {
      if (!event.target.files.length) return;
      this.profileImage = event.target.files[0];
      this.profilePreviewImageSrc = URL.createObjectURL(event.target.files[0]);
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";
  .settings-form {
    &__item {
      &:not(:last-child) {
        margin-bottom: 32px;
      }
    }
    &__row {
      display: flex;
      margin: -12px;
      align-items: end;
    }
    &__col {
      padding: 12px;
      flex: 1 0 60%;
      &:first-child {
        flex: 0 0 40%;
      }
    }
    &__avatar {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 0 auto;
      transition: opacity .2s ease-in-out;
      &:before {
        content: 'CLICK TO CHANGE';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: opacity .2s ease-in-out;
        font-size: 21px;
        font-weight: bold;
        opacity: 0;
        pointer-events: none;
        -webkit-text-stroke: 1px $white;
      }
      &:hover {
        opacity: 0.8;
        &:before {
          opacity: 1;
        }
      }
      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
      .label {
        cursor: pointer;
      }
    }
    &__type {
      display: inline-block;
      font-size: 18px;
      padding: 11px;
      background-color: lightblue;
      border-radius: 4px;
    }
    &__control {
      display: inline-block;
      min-width: calc(20% - 12px);
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
</style>
