<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      title="Scroll to top"
      bottom
      class="transition-swing mb-10"
      color="primary"
      fab
      fixed
      small
      right
      style="z-index: 6"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
// Globals
export default {
  name: 'DefaultFabToTop',
  data: () => ({ fab: false }),
  methods: {
    onScroll() {
      if (!window) return

      const top = window.pageYOffset || document.documentElement.offsetTop || 0
      this.fab = top > 300
    },
    toTop() {
      if (this.$route.hash) {
        this.$router.push({ hash: '' })
      }
      this.$vuetify.goTo(0)
    }
  }
}
</script>
