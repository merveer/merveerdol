<template lang="pug">
  section.home
    div
      img.home__img(src='~/assets/logo.jpg')
      h1.home__title
        | {{ me.nameSurname }}
      h2.home__subtitle
        | {{ me.title }}
      h2.home__subtitle
        | {{ me.description }}
      h2.home__socialmedia(v-for='website in me.accounts.websites')
        a(:href="`${website.url}`", target="_blank") {{ website.name }}
</template>

<script>
  export default {
    async asyncData ({ store, params, error, payload }) {
      let data = payload
      if (data) {
        return {
          me: data,
        }
      } else {
        await store.dispatch('me/getMe')
        return {
          me: store.getters['me/me'],
        }
      }
    },
    async mounted () {
      console.log(this.me)
    },
    head () {
      return {
        title: 'Merve UYGUN ERDOL',
        meta: [
          { name: 'description', hid: 'description', content: 'Frontend Developer Intern at edelkrone' },
          // Open Grapg
          { name: 'og:title', content: 'Merve UYGUN ERDOL' },
          { name: 'og:description', content: 'Frontend Developer Intern at edelkrone' },
          { name: 'og:type', content: 'website' },
          { name: 'og:url', content: `https://merveerdol.com` },
          { name: 'og:image', content: `http://www.merveerdol.com/_nuxt/img/logo.f2fd92d.jpg` },
          // Twitter Card
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@merveerdol' },
          { name: 'twitter:title', content: 'Merve UYGUN ERDOL' },
          { name: 'twitter:description', content: 'Frontend Developer Intern at edelkrone' },
          { name: 'twitter:image', content: `http://www.merveerdol.com/_nuxt/img/logo.f2fd92d.jpg` },
          { name: 'twitter:image:alt', content: 'Merve UYGUN ERDOL' }
        ]
      }
    },
 }
</script>

<style lang="scss">
  $mainColor:#793097;
  @import "~assets/stylesheets/base/base.scss";
  @import "~assets/stylesheets/base/breakpoint.scss";
  .home {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &__img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 40%;
      border-radius: 50%;
    }
    &__title {
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      font-weight: 300;
      font-size: 100px;
      color:$mainColor;
      letter-spacing: 1px;
      @include md {
        font-size: 80px;
      }
      @include sm {
        font-size: 60px;
      }
      @include xs {
        font-size: 40px;
      }
    }
    &__subtitle {
      font-weight: 300;
      font-size: 42px;
      color:#333333;
      word-spacing: 5px;
      padding-bottom: 15px;
      @include md {
        font-size: 32px;
       }
      @include sm {
        font-size: 25px;
      }
      @include xs {
        font-size: 20px;
      }
    }
    &__socialmedia {
      font-size: 30px;
      color:darkslateblue;
      font-weight: 300;
      @include md {
        font-size: 25px;
      }
      @include sm {
        font-size: 20px;
      }
      @include xs {
        font-size: 18px;
      }
    }
    a {
      color: #0EAA54;
      text-decoration: none;
      &:hover {
        color:#F9536D
      }
    }
  }

</style>
