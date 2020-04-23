<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
        <div class="container-fluid">

            <!--Toggler-->
            <navbar-toggle-button @click.native="showSidebar">
                <span class="navbar-toggler-icon"></span>
            </navbar-toggle-button>
            <router-link class="navbar-brand" to="/">
                <img :src="logo" class="navbar-brand-img" alt="...">
            </router-link>

            <slot name="mobile-right">
                <ul class="nav align-items-center d-md-none">
                    <!-- <base-dropdown class="nav-item" position="right">
                        <a slot="title" class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">
                            <i class="ni ni-bell-55"></i>
                        </a>

                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </base-dropdown> -->
                </ul>
            </slot>
            <slot></slot>
            <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">

                <div class="navbar-collapse-header d-md-none">
                    <div class="row">
                        <div class="col-6 collapse-brand">
                            <router-link to="/">
                                <img :src="logo">
                            </router-link>
                        </div>
                        <div class="col-6 collapse-close">
                            <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
                        </div>
                    </div>
                </div>

                <ul class="navbar-nav">
                    <slot name="links">
                    </slot>
                </ul>
                <!--Divider-->
                <hr class="my-3">
                <!--Heading-->
                <h6 class="navbar-heading text-muted">Conecta con nosotros</h6>
                <!--Navigation-->
                <ul class="navbar-nav mb-md-3">
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://github.com/Code4PuertoRico/covid19-pr-dashboard">
                            <img src="img/logos/github.png" class="sidebar-logos"/> Código abierto en Github
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://twitter.com/code4puertorico">
                            <img src="img/logos/twitter.png" class="sidebar-logos"/> Síguenos en Twitter
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://chat.code4puertorico.org/">
                            <img src="img/logos/slack.png" class="sidebar-logos"/> Únete a nuestro Slack
                        </a>
                    </li>
                </ul>
                <!--Divider-->
                <hr class="my-3">
                <!--Heading-->
                <h6 class="navbar-heading text-muted">Recursos</h6>
                <!--Navigation-->
                <ul class="navbar-nav mb-md-3">
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://github.com/ChrisMichaelPerezSantiago/covid19">
                            <img src="img/logos/github.png" class="sidebar-logos"/> COVID-19 API
                        </a>
                    </li>
                </ul>
            </div>
            </div>
    </nav>
</template>
<script>
  import NavbarToggleButton from '@/components/NavbarToggleButton'

  export default {
    name: 'sidebar',
    components: {
      NavbarToggleButton
    },
    props: {
      logo: {
        type: String,
        default: 'img/brand/code4pr.png',
        description: 'Sidebar app logo'
      },
      autoClose: {
        type: Boolean,
        default: true,
        description: 'Whether sidebar should autoclose on mobile when clicking an item'
      }
    },
    provide() {
      return {
        autoClose: this.autoClose
      };
    },
    methods: {
      closeSidebar() {
        this.$sidebar.displaySidebar(false)
      },
      showSidebar() {
        this.$sidebar.displaySidebar(true)
      }
    },
    beforeDestroy() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false;
      }
    }
  };
</script>
<style>
  .sidebar-logos {
    width: 24px;
    margin-right: 12px;
  }
</style>