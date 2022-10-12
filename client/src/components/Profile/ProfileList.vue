<template>
  <div v-if="isProfilesLoaded">
    <div class="profile-list">
      <div
        class="profile-list__item"
        v-for="profile in this.getAllProfiles"
        :key="profile.id"
      >
        <ProfileListItem :profile="profile"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileListItem from "@/components/Profile/ProfileListItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProfileList",
  data () {
    return {
      limit: 6,
      currentPage: this.$route.params.page,
      isProfilesLoaded: false,
    }
  },
  components: {
    ProfileListItem
  },
  mounted () {
    this.fetchProfileList();
  },
  methods: {
    ...mapActions([
      'fetchAllProfilesList'
    ]),
    async fetchProfileList () {
      const page = this.$route.params.page || 1;
      const limit = this.limit;
      this.fetchAllProfilesList({ page, limit })
        .then(() => {
          this.isProfilesLoaded = true;
        })
    }
  },
  computed: {
    ...mapGetters([
      'getAllProfiles'
    ])
  }
}
</script>

<style scoped lang="scss">
  .profile-list {
    &__item {
      width: 50%;
      &:not(:last-child) {
        margin-bottom: 24px;
      }
    }
  }
</style>
