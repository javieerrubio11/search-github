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
import Search from '~/components/repository/Search.vue'
import Table from '~/components/repository/Table.vue'

export default {
  components: {
    Search,
    Table
  }
}
</script>
