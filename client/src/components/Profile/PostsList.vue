<template>
  <div class="posts-list">
    <div class="posts-list__row">
      <div class="posts-list__col"
           v-if="Number(this.$route.params.id) === this.getUser.id || this.$route.fullPath === profileSrc"
      >
        <div
          class="posts-list__create"
          @click="openCreatePostModal"
        >
          <i class="icon icon-plus"></i>
        </div>
      </div>
      <div
        class="posts-list__col"
        v-for="post in posts"
        :key="post.id"
      >
        <PostItem :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/Profile/PostItem";
import { mapActions, mapGetters } from "vuex";
import { PROFILE_ROUT } from "@/stubs/routes";

export default {
  name: "PostsList",
  data () {
    return {
      profileSrc: PROFILE_ROUT,
    }
  },
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters([
      'getUser'
    ]),
  },
  methods: {
    ...mapActions([
      'open'
    ]),
    openCreatePostModal () {
      this.open('CreatePostModal');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables";
@import "src/assets/styles/mixins";
  .posts-list {
    max-width: 300px;
    margin: 0 auto;
    @include media-breakpoint-up(md) {
      max-width: none;
    }
    &__create {
      background-color: $gray-100;
      height: 100%;
      position: relative;
      cursor: pointer;
      &:hover {
        .icon {
          transform: translate(-50%, -50%) scale(1.2);
        }
      }
      .icon {
        pointer-events: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        color: $gray-600;
        transition: $transition-base;
      }
    }
    &__row {
      display: flex;
      margin: -12px;
      flex-wrap: wrap;
    }
    &__col {
      padding: 12px;
      height: 300px;
      flex: 0 0 100%;
      @include media-breakpoint-up(md) {
        flex: 0 0 50%;
      }
      @include media-breakpoint-up(lg) {
        flex: 0 0 33.33333%;
      }
    }
  }
</style>
