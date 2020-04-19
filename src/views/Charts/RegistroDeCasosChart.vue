<template>
  <div class="">
    <apexchart ref="registroDeCasos" width="300" type="pie" :options="chartOptions" :series="series"></apexchart>
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
      series: [4, 3, 43],
    }
  },
  methods: {
  }
}
</script>