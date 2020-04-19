<template>
  <footer class="footer px-4">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{year}} <a href="https://github.com/Code4PuertoRico/Code4PR" class="font-weight-bold ml-1" target="_blank">  
                      Made with ❤ from Puerto Rico by Code4PR</a>

        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="https://github.com/Code4PuertoRico/Code4PR" class="nav-link">About Us</a>
          </li>
          <li class="nav-item">
            <a href="https://github.com/Code4PuertoRico/covid19-response/blob/master/LICENSE" class="nav-link">License</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
