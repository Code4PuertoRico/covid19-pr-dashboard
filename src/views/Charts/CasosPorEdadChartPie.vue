<template>
  <div class="">
    <apexchart ref="casosPorEdad" width="325" type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'casos-por-edad-chart-pie',
  data: function() {
    return {
      chartOptions: {
        labels: ["< 10", "10 - 19", "20 - 29", "30 - 39", "40 - 49", 
                  "50 - 59", "60 - 69", "70 - 79", "+= 80"],
      },
      series: [20,56,190,208,264,306,196,106,60],
    }
  },
  methods: {
  }
}
</script>