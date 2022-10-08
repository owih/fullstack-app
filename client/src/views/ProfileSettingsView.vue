<template>
  <div class="profile-settings">
    <div class="container">
      <h1 class="profile-settings__title">Profile settings</h1>
      <ProfileSettingsForm />
    </div>
  </div>
</template>

<script>
import ProfileSettingsForm from "@/components/Profile/ProfileSettingsForm";

export default {
  name: "ProfileSettingsView",
  components: {
    ProfileSettingsForm,
  }
}
</script>

<style scoped lang="scss">
  .profile-settings {
    &__title {
      margin-bottom: 40px;
    }
  }
</style>
