<template>
  <div class="profiles">
    <div class="container">
      <h1 class="profiles__title">Profiles</h1>
      <div class="profiles__list">
        <ProfileList />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileList from "@/components/Profile/ProfileList";

export default {
  name: "ProfilesView",
  components: {
    ProfileList,
  }
}
</script>

<style scoped lang="scss">
  .profiles {
    &__title {
      margin-bottom: 40px;
    }
  }
</style>
