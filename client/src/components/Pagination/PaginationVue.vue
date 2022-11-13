<template>
  <div class="pagination" v-if="countOfButtons > 1">
    <ul class="pagination__list">
      <li class="pagination__item" v-for="(button, index) in countOfButtons" :key="index">
        <button
          class="pagination__link"
          :class="{'pagination__link_current': index + 1 === currentPage}"
          @click="$emit('switchPage', index + 1)"
        >
          {{ index + 1 }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginationVue",
  data () {
    return {
      countOfButtons: 0,
    }
  },
  props: {
    count: Number,
    limit: Number,
    currentPage: Number,
  },
  emits: {
    switchPage: String,
  },
  watch: {
    count () {
      this.countPagination();
    }
  },
  mounted () {
    this.countPagination();
  },
  methods: {
    countPagination () {
      this.countOfButtons = Math.ceil(this.count / this.limit)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.pagination {
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  &__item {
    &:not(:first-child) {
      .pagination__link {
        border-left: none;
      }
    }
  }
  &__link {
    border: 1px solid lightgray;
    border-radius: 0;
    background-color: transparent;
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
      color: $primary;
    }
    &_current {
      pointer-events: none;
      color: lightgray;
    }
  }
}
</style>
