<template lang="pug">
  section.home
    div
      img.home__img(src='~/assets/edelkrone_logo.png')
      h1.home__title
        | Frontend Development   
        span Team
          div(v-for="item in me" :key="item.userName"  )
            template(v-if="item.userName === 'merve'")
              h2.home__subtitle
                |<nuxt-link :to="'/users/'+item.userName">{{ item.nameSurname }} </nuxt-link> 
            template(v-if="item.userName === 'dogukan'") 
              h2.home__subtitle
                |<nuxt-link :to="'/users/'+item.userName"> {{ item.nameSurname }} </nuxt-link> 
                
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
          await store.dispatch('me/getAllMes')
          return {
            me: store.getters['me/mes'],
          }
        }
      }
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
    }
    &__title {
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      padding-top: 90px;
      padding-bottom: 84px;
      font-weight: 300;
      font-size: 60px;
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
    span{
      font-weight: 600
     }
  }

</style>
