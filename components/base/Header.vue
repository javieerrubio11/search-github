<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
