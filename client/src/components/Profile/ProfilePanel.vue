<template>
  <div class="profile-panel">
    <div class="profile-panel__row">
      <div class="profile-panel__left">
        <div class="profile-panel__image-wrapper">
          <img :src="require('@/assets/images/profile/profile-empty.jpg')" alt="" class="profile-panel__image">
        </div>
      </div>
      <div class="profile-panel__right">
        <div class="profile-panel__header">
          <div class="profile-panel__name">
            profile name
          </div>
          <div class="profile-panel__logout">
            Change profile
          </div>
        </div>
        <div class="profile-panel__statistics">
          <div class="profile-panel__statistic-item">
            <strong>2</strong> posts
          </div>
          <div class="profile-panel__statistic-item">
            <strong>0</strong> followers
          </div>
          <div class="profile-panel__statistic-item">
            <strong>13</strong> following
          </div>
        </div>
        <div class="profile-panel__about">
          <div><strong>Hi its my profile</strong></div>
          <div>Some text about my life and hobbies :3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePanel"
}
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";
  .profile-panel {
    text-align: left;
    &__row {
      display: flex;
      margin: -8px;
    }
    &__left {
      padding: 8px;
      flex: 0 0 33.33333%;
    }
    &__image-wrapper {
      text-align: center;
    }
    &__image {
      border-radius: 100%;
      overflow: hidden;
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    &__right {
      padding: 8px;
    }
    &__header {
      display: flex;
      margin: 0 -8px 16px;
      align-items: center;
    }
    &__name {
      padding: 0 8px;
      font-size: 24px;
    }
    &__logout {
      padding: 0 8px;
    }
    &__statistics {
      display: flex;
      margin: 0 -8px 16px;
      justify-content: space-between;
    }
    &__statistic-item {
      padding: 0 8px;
    }
  }
</style>
