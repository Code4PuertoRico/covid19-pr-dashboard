<template>
<div>
  <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
export default {
  name: 'casos-nuevos-chart',
  data: function() {
    return {

          series: [ {
            name: 'Casos Positivos Nuevos',
            type: 'column',
            data: [5,0,0,0,9,7,2,8,8,12,13,15,21,27,47,65,47,30,62,74,23,38,60,47,63,42,63,109,6,20,51,69,25,50,95,39]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [4, 2, 4]
            },
            title: {
              text: '',
              align: 'left',
              offsetX: 0
            },
            xaxis: {
              type: 'category',
              categories: [
              '3/16', '3/17', '3/18', '3/19', '3/20', '3/21', '3/22', '3/23','3/24', '3/25', '3/26', '3/27',
              '3/28', '3/29', '3/30', '3/31', '4/01', '4/02', '4/03', '4/04','4/05', '4/06', '4/07', '4/08','4/09',
              '4/10', '4/11', '4/12', '4/13', '4/14', '4/15', '4/16', '4/17','4/18', '4/19', '4/20'],
              labels: {
                hideOverlappingLabels: true,
                style: {
                  fontSize: '8px',
                  fontWeight: 400,
                }
              }
            },
            yaxis: [
              {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                },
                labels: {
                },
                title: {
                  text: "Casos Positivos Nuevos",
                },
                tooltip: {
                  enabled: true
                },
                logarithmic: false,
              }
            ],
            tooltip: {
              fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
              },
            },
            legend: {
              horizontalAlign: 'center',
              offsetX: 40,
              offsetY: 8
            },
          },
          
          
    }
  }
}
</script>