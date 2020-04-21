<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Distribución de Casos Acumulados</h3>
        </div>
        <!-- <div class="col text-right">
          <base-button size="sm" type="primary">See all</base-button>
        </div> -->
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Fuente</th>
          <th>Positivos</th>
          <th>Negativos</th>
          <th>Pendientes</th>
          <th>Cantidad Total</th>
          <th>Porcentaje (%)</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.fuente}}
          </th>
          <td>
            {{row.positivos}}
          </td>
          <td>
            {{row.negativos}}
          </td>
          <td>
            {{row.pendientes}}
          </td>
          <td>
            {{row.total}}
          </td>
          <td>
            {{row.porcentaje}}
            <i
              :class="row.change === 'up' ? 'text-danger fas fa-arrow-up ml-3': 'text-success fas fa-arrow-down ml-3'">
            </i>
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'registro-de-casos-nuevos',
    data() {
      return {
        tableData: [
          {
            fuente: 'Dept de Salud',
            positivos: '286',
            negativos: '3008',
            pendientes: '114',
            inconcluso: '8',
            total: '3416',
            porcentaje: '10.2%',
            change: 'up'
          },
          {
            fuente: 'Hospital de Veteranos',
            positivos: '62',
            negativos: '767',
            pendientes: '33',
            inconcluso: '0',
            total: '862',
            porcentaje: '73.7%',
            change: 'down'
          },
          {
            fuente: 'Laboratorios Privados',
            positivos: '770',
            negativos: '4280',
            pendientes: '1605',
            inconcluso: '0',
            total: '6655',
            porcentaje: '16.0%',
            change: 'up'
          },
        ]
      }
    }

  }
</script>
<style>
</style>
