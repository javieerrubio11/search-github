<template>
  <div>
    <v-data-table
      v-if="items.length > 0"
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>

    <v-card v-if="items.length < 1">
      <v-card-text>No results found, please provide some text in the input above</v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Language', value: 'language' },
        { text: 'Description', value: 'description' }
      ]
    }),

    computed: {
      items () {
        return this.$store.state.repositories
      },
    }
  }
</script>