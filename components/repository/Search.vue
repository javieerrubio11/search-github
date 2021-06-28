<template>
  <v-card class="card-search">
    <v-card-title class="text-h6 primary lighten-2">
      Search for public repositories in Github
    </v-card-title>
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :search-input.sync="search"
        hide-no-data
        hide-selected
        label="Public repositories"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        class="mt-4"
      ></v-autocomplete>
    </v-card-text>
  </v-card>
</template>

<script>

  export default {
    data: () => ({
      model: null,
      search: null,
      timer: null
    }),

    watch: {
      search (val) {
        // Clear timer
        if (this.timer) {
            clearTimeout(this.timer)
            this.timer = null
        }

        // Programm timer (avoid multiple calls for the API)
        const vm = this
        this.timer = setTimeout(() => {
          vm.searchRepository(val)
        }, 500)
      }
    },

    methods: {
      searchRepository(text) {
        // Only calls with 3 characters
        if (!text || text.length < 3) {
          return
        }

        // Execute query in the API
        this.$store.dispatch('getRepositories', text)
      }
    }
  }
</script>

<style lang="scss" scoped>
@mixin square($size, $radius: 0) {
  width: $size;
  height: $size;

  @if $radius != 0 {
    border-radius: $radius;
  }
}

.card-search {
  @include square(100%, $radius: 10px);
}
</style>