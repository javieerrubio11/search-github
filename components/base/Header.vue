<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    color="primary"
    dark
  >
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      title: 'Searcher'
    }
  }
}
</script>
