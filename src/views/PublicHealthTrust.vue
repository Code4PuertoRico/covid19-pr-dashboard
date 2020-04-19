<template>
  <div class="bg-prht">
    <iframe class="iframe-container-prht d-md-none" src="https://prvectorcontrol.maps.arcgis.com/apps/opsdashboard/index.html#/655a688c91f749819826e7275b00c5d8" frameborder="0" allowfullscreen></iframe> 
    <iframe class="iframe-container-prht d-none d-md-block" src="https://prvectorcontrol.maps.arcgis.com/apps/opsdashboard/index.html#/ca2768d76557413cbd76aecd2cb565ac" frameborder="0" allowfullscreen></iframe> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .iframe-container-prht {
        display: block;       /* iframes are inline by default */
        background-color: #d6d6d6;
        border: none;         /* Reset default border */
        height: 100vh;        /* Viewport-relative units */
        width: 85vw;
        padding: 54px 32px;
    }
    .bg-prht {
        background-color: #d6d6d6 !important;
    }
</style>