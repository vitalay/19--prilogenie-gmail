

<template>
  <the-navbar></the-navbar>
<div class="container with-nav">
 <login></login>

  <!-- <router-view></router-view> -->
</div>

</template>





<script>

import TheNavbar from './components/TheNavbar.vue';
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Forget from './views/Forget.vue'


export default {
  components: {
    TheNavbar,
    Login,
    Dashboard,
    Forget

  },

  provide() {
    return {
      emails: [
        { id: 1, theme: 'Купи пиццу' },
        { id: 2, theme: 'Выучи Vue' },
        { id: 3, theme: 'Хочу покормить кота' },
        { id: 4, theme: 'A Блок про Vueх' },
        { id: 5, theme: 'А что там про Vue Hooks' }

      ]
    }
  }

}

</script>


<style scoped>

</style>
