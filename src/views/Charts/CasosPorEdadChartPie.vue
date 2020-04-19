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
      series: [12, 40, 161, 162, 212, 249, 149, 83, 47],
    }
  },
  methods: {
  }
}
</script>

T_Menor_10: 12,
T_10_19: 40,
T_20_29: 161,
T_30_39: 162,
T_40_49: 212,
T_50_59: 249,
T_60_69: 149,
T_70_79: 83,
T_Mayor_80: 47,