<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Municipios</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">Casos por Región</a>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Municipio</th>
          <th># de Casos</th>
          <th>%</th>
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.municipio}}
          </th>
          <td>
            {{row.casos}}
          </td>
          <td>
            {{row.porcentaje}}
            <!-- <i class="fas fa-arrow-up text-success ml-3"
               :class="row.cambio === 'up' ? 'text-success': 'text-danger'"> 
            </i> -->
          </td>
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'casos-por-municipio',
    data() {
      return {
        tableData: [
          {
            municipio: 'San Juan',
            casos: '153',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Guaynabo',
            casos: '70',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Bayamon',
            casos: '55',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Carolina',
            casos: '43',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Mayagüez',
            casos: '29',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Trujillo Alto',
            casos: '27',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Toa Baja',
            casos: '20',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Toa Alta',
            casos: '18',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Quebradillas',
            casos: '17',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Juana Díaz ',
            casos: '15',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Arecibo',
            casos: '14',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Ponce',
            casos: '14',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Dorado',
            casos: '12',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Yauco',
            casos: '12',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Cabo Rojo',
            casos: '11',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Aguas Beunass',
            casos: '10',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Barranquitas',
            casos: '9',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Cayey',
            casos: '9',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Isabela',
            casos: '9',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Salinas',
            casos: '9',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'San German',
            casos: '9',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'San Sebastian',
            casos: '9',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Vega Baja',
            casos: '8',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Canovanas',
            casos: '7',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Cataño',
            casos: '7',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Cidra',
            casos: '7',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Guánica',
            casos: '7',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Hormigueros',
            casos: '7',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'San Lorenzo',
            casos: '7',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Aguadilla',
            casos: '6',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Aibonito',
            casos: '6',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Hatillo',
            casos: '6',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Morovis',
            casos: '6',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Rio Grande',
            casos: '6',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Sabana Grande',
            casos: '6',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Añasco',
            casos: '5',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Gurabo',
            casos: '5',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Lares',
            casos: '4',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Las Piedras',
            casos: '4',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Luquillo',
            casos: '4',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Manatí',
            casos: '4',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Maunabo',
            casos: '4',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Moca',
            casos: '4',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Villalba',
            casos: '4',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Yabucoa',
            casos: '4',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Ceiba',
            casos: '3',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Ciales',
            casos: '3',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Lajas',
            casos: '3',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Naranjito',
            casos: '3',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Orocovis',
            casos: '3',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Patillas',
            casos: '3',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Aguada',
            casos: '2',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Corozal',
            casos: '2',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Guayama',
            casos: '2',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Guayanillaa',
            casos: '2',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Humacao',
            casos: '2',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Loiza',
            casos: '2',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Adjuntas',
            casos: '1',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Barceloneta',
            casos: '1',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Camuy',
            casos: '1',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Juncos',
            casos: '1',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Naguabo',
            casos: '1',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Peñuelas',
            casos: '1',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Rincón',
            casos: '1',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Santa Isabel',
            casos: '1',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Utuado',
            casos: '1',
            porcentaje: '%',
            cambio: 'down'
          },
                    {
            municipio: 'Arroyo',
            casos: '0',
            porcentaje: '%',
            cambio: 'down'
          },
          {
            municipio: 'Coamo',
            casos: '0',
            porcentaje: '%',
            cambio: 'up'
          },
          {
            municipio: 'Jayuya',
            casos: '0',
            porcentaje: '%',
            cambio: 'down'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
