<template>
  <div v-if="isProfilesLoaded">
    <h2 v-if="this.searchQuery">Search query is "{{ this.searchQuery }}"</h2>
    <div class="profile-list">
      <div
        class="profile-list__item"
        v-for="profile in searchQuery ? this.getSearchedProfiles : this.getAllProfiles"
        :key="profile.id"
      >
        <ProfileListItem :profile="profile"/>
      </div>
    </div>
    <div class="profile-list__pagination">
      <PaginationVue
        v-if="count"
        :limit="limit"
        :currentPage="currentPage"
        :count="count"
        @switchPage="switchPage"
      />
    </div>
  </div>
</template>

<script>
import ProfileListItem from "@/components/Profile/ProfileListItem";
import PaginationVue from "@/components/Pagination/PaginationVue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProfileList",
  data () {
    return {
      limit: 6,
      currentPage: Number(this.$route.query.page) || 1,
      isProfilesLoaded: false,
      count: 0,
      searchQuery: this.$route.query.search || '',
    }
  },
  components: {
    ProfileListItem, PaginationVue
  },
  mounted () {
    if (!this.searchQuery) this.fetchProfileList()
    else this.fetchSearchedProfileList();
  },
  watch: {
    $route (to, from) {
      this.searchQuery = to.query.search;
      if (!this.searchQuery) this.fetchProfileList()
      else this.fetchSearchedProfileList();
    }
  },
  methods: {
    ...mapActions([
      'fetchAllProfilesList', 'fetchProfilesPerName', 'clearProfiles'
    ]),
    async fetchProfileList () {
      const page = this.currentPage;
      const limit = this.limit;
      this.fetchAllProfilesList({ page, limit })
        .then((count) => {
          this.count = count;
          this.isProfilesLoaded = true;
          if (this.getAllProfiles.length || this.currentPage === 1) return;
          // Если вводим страницу, на которой нет контента
          this.currentPage = 1;
          this.$router.push({ query: { page: this.currentPage } })
          this.fetchProfileList();
        })
    },
    async fetchSearchedProfileList () {
      const page = 1;
      const limit = this.limit;
      this.fetchProfilesPerName({ page, limit, name: this.searchQuery })
        .then((count) => {
          this.count = count;
          this.isProfilesLoaded = true;
        })
    },
    switchPage (page) {
      this.$router.push({ query: { page } })
      this.currentPage = page;
    }
  },
  computed: {
    ...mapGetters([
      'getAllProfiles', 'getSearchedProfiles'
    ])
  },
  unmounted () { this.clearProfiles() }
}
</script>

<style scoped lang="scss">
  .profile-list {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    &__pagination {
      margin-top: 32px;
    }
    &__item {
      width: 50%;
      padding: 8px;
    }
  }
</style>
