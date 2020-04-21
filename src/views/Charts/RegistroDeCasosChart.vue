<template>
  <div class="">
    <apexchart ref="registroDeCasos" type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'registro-de-casos-chart',
  data: function() {
    return {
      chartOptions: {
        labels: ["Adm. Veteranos", "Dept. de Salud", "Labs Privados"],
      },
      series: [1, 4, 41],
    }
  },
  methods: {
  }
}
</script>
<style>
</style>