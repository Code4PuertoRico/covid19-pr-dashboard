<template>
  <div class="">
    <apexchart ref="casosPorSexo" width="258" type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'casos-por-sexo-chart',
  data: function() {
    return {
      chartOptions: {
        labels: ["M", "F"],
      },
      series: [667, 631],
    }
  },
  methods: {
  }
}
</script>