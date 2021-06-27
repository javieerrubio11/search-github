<template>
  <v-footer app color="primary" dark>
    <span class="pr-2">&copy; {{ new Date().getFullYear() }}</span> V. Javier González
    <v-spacer />
    <a href="https://github.com/javieerrubio11" class="footer-link white--text" target="_blank" rel="noopener">Github</a>
  </v-footer>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
  @import "~/assets/variables";

  .footer-link {
    font-size: 20px;
    text-decoration: none;

    &:hover {
      font-weight: bold;
    }
  }


  /* >= desktop >= 1264 */
  @media (min-width: $screen-lg-min) {
    .footer-link { font-size: 20px; }
  }

  /* laptop 960 */
  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {
    .footer-link { font-size: 18px; }
  }

  /* tablet 600 */
  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
    .footer-link { font-size: 16px; }
  }

  /* movil 480 */
  @media (max-width: $screen-xs-max) {
    .footer-link { font-size: 18px; }
 }
</style>