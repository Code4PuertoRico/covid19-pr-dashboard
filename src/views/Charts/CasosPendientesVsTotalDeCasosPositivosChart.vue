<template>
<div>
  <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
export default {
  name: 'pruebas-vs-casos-positivos-chart',
  data: function() {
    return {

          series: [{
            name: 'Casos Pendientes',
            type: 'column',
            data: [0,4,21,29,52,71,69,35,42,70,335,334,792,817,794,854,897,1119,1055,1129,1039,1000,968,1160,1304,1392,1332,1251,1288,1322,1404,1465,1472,1752,1830,1886,1756,1944]
          }, {
            name: 'Casos Positivos Nuevos',
            type: 'column',
            data: [5,0,0,0,9,7,2,8,8,12,13,15,21,27,47,65,47,30,62,74,23,38,60,47,63,42,63,109,6,20,51,69,25,50,95,39,46,80]
          }, {
            name: 'Total de Casos Positivos',
            type: 'line',
            data: [5,5,5,5,14,21,23,21,39,51,64,79,100,127,174,239,286,316,378,452,475,513,573,620,683,683,725,788,897,903,923,974,1043,1068,1118,1213,1252,1298,1378]
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
              '4/10', '4/11', '4/12', '4/13', '4/14', '4/15', '4/16', '4/17','4/18', '4/19', '4/20','4/21','4/22'],
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
                  text: "Casos Pendientes",
                },
                tooltip: {
                  enabled: true
                },
                logarithmic: true,
              },
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
              },
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
                  text: "Total de Casos Positivos",
                },
                tooltip: {
                  enabled: true
                },
                logarithmic: true,
              },
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
              horizontalAlign: 'left',
              offsetX: 40,
              offsetY: 8
            },
          },
          
          
    }
  }
}
</script>