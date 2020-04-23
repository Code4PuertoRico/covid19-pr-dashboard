<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Code4PR"
      title="Code4PR"
      logo="img/logos/covid19prdata.png"
    >
      <template slot="links">

        <sidebar-item
          :link="{
            name: 'Open-Source Dashboard',
            img: 'img/icons/dashboard.png',
            path: '/dashboard'
          }"
        />

        <!--Heading-->
        <h6 class="navbar-heading text-muted pl-4 mt-2">Fuentes de Datos</h6>

        <sidebar-item :link="{name: 'Puerto Rico Task Force', path: '/taskforce', img: 'img/logos/gobierno-pr.jpg'}"/>
        <sidebar-item :link="{name: 'PR Public Health Trust', path: '/prpht', img: 'img/logos/pr-public-health-trust.jpeg'}"/>
        <sidebar-item :link="{name: 'Google Mobility Report', path: '/google', img: 'img/logos/google.png'}"/>
        <sidebar-item :link="{name: 'FB Mobility Dashboard', path: '/facebook', img: 'img/logos/fb.png'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'blue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style>
</style>
