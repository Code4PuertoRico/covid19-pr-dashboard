<template>
<div class="">
  <apexchart type="line" height="458" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
export default {
  name: 'casos-por-edad-chart',
  data: function() {
    return {
          series: [{
            name: 'Personas',
            type: 'column',
            data: [17, 50, 182, 189, 246, 277, 176, 98, 80]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
            },
            stroke: {
              width: [0, 4]
            },
            title: {
              text: ''
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: [1]
            },
            labels: [
              "< 10", "10 - 19", "20 - 29", "30 - 39", "40 - 49", 
                  "50 - 59", "60 - 69", "70 - 79", "+= 80"],
            xaxis: {
              title: {
                text: 'Rangos de Edades'
              }
            },
            yaxis: [{
              title: {
                text: '# de Casos'
              }
            }]
          }
    }}
}
</script>