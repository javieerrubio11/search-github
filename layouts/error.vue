<template>
  <v-container dark class="fill-height d-flex justify-center align-center">
    <v-card width="100%" class="col-xs-12 col-md-8 col-lg-4">
      <v-card-title>
        <h1>Página de error</h1>
      </v-card-title>

      <v-card-text>
        <h3 class="pt-3">Código de error: {{ error.statusCode }}</h3>
        <h3 class="pt-3">Ha ocurrido un error inesperado. Rogamos que vuelva a la página de inicio o póngase en contacto con nosotros.</h3>
      </v-card-text>

      <v-card-actions>
        <v-btn block outlined color="secondary" to="/" dark>
          Volver al inicio
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
