<template>
  <v-app>
    <Header />

    <v-main>
      <nuxt />
    </v-main>

    <Footer />
    <FabToTop />
  </v-app>
</template>

<script>
import Header from '~/components/base/Header.vue'
import Footer from '~/components/base/Footer.vue'
import FabToTop from '~/components/base/FabToTop.vue'

export default {
  components: {
    Header,
    Footer,
    FabToTop
  }
}
</script>
