<template>
  <v-card
    color="orange lighten-2"
    dark
  >
    <v-card-title class="text-h5 red lighten-3">
      Search for Public Repositories in Github
    </v-card-title>
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        label="Public repositories"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
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