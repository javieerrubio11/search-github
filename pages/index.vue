<template>
  <v-container>
    <div>
      <Search />
    </div>
    <div class="pt-5">
      <Table />
    </div>
  </v-container>
</template>

<script>
import Search from '~/components/Repository/Search.vue'
import Table from '~/components/Repository/Table.vue'

export default {
  components: {
    Search,
    Table
  }
}
</script>
