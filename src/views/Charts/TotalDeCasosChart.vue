<template>
  <div class="">
    <apexchart ref="totalDeCasosChart" width="300" type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'total-de-casos-chart',
  data: function() {
    return {
      chartOptions: {
        labels: ["Negativos", "Positivos", "Pendientes", "Inconclusos"],
      },
      series: [8280, 1213, 1830, 9],
    }
  },
  methods: {
  }
}
</script>