<template>
  <div class="bg-teal-dark">
     <iframe class="iframe-container" width="100%" height="100%" src="https://bioseguridad.maps.arcgis.com/apps/opsdashboard/index.html#/3bfb64c9a91944bc8c41edd8ff27e6df" frameborder="0" allowfullscreen></iframe> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .iframe-container {
        display: block;       /* iframes are inline by default */
        background-color: #004c63;
        border: none;         /* Reset default border */
        height: 100vh;        /* Viewport-relative units */
        width: 90vw;
        padding: 54px 32px;
    }
    .bg-teal-dark {
        background-color: #004c63;
    }
</style>