export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecom',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet",href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"},
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" },
      //{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css" },
      // { rel: "stylesheet", href: "/frontend/css/swiper-bundle.min.css" },
      { rel: "stylesheet", href: "/css/styles.css" },
      { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/css/storebtn.css" },
     // { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
      //{ rel: "stylesheet", href: "/css/owl.theme.default.min.css" },

    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.7.0.js" },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" },
      { src: "/js/priceRange.js" },
      { src: "/js/star-rating.js" },
      { src: "/js/search_modal.js" },
      { src: "/js/login_popup.js" },
      { src: "/js/addActiveClass.js" },
      { src: "/js/owl.carousel.min.js" },
      { src: "/js/owl_carousel_plugin.js" },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   'owl.carousel/dist/assets/owl.carousel.min.css',
  //   'owl.carousel/dist/assets/owl.theme.default.min.css'
  // ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/jquery.js', ssr: false }, // Import jQuery
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['jquery'],
  }
}
