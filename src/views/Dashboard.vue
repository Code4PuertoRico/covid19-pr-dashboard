<template>
    <div>
        <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">

          <!-- Disclaimer Alert -->
          <base-alert type="warning" dismissible>

              <span class="alert-inner--text">
                <span style="font-size: 20px"><strong>Reporte Actualizado:</strong> 04/19/2020, 9:00 AM</span>
                <br>
                <br>
                <strong>Disclaimer:</strong> Datos son provistos por fuentes externas como el Departamento
              de Salud. No somos resonsables por la integridad de la data reportada, sólo brindamos una mejor forma para visualizarla.</span>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </base-alert>

            <!-- Card stats -->
            <div class="row">
                <div class="col-xl-4 col-lg-6 mt-4">
                    <stats-card title="Casos Nuevos"
                                type="gradient-primary"
                                sub-title="95"
                                icon="ni ni-ambulance"
                                class="mb-4 mb-xl-0"
                    >
                      <template slot="footer">
                          <span class="text-danger mr-2"><i class="fa fa-arrow-up"></i> 90.0%</span>
                          <span class="text-nowrap">desde último reporte</span>
                      </template>
                    </stats-card>
                </div>
                <div class="col-xl-4 col-lg-6 mt-4">
                    <stats-card title="Casos Positivos"
                                type="gradient-red"
                                sub-title="1,213"
                                icon="ni ni-fat-add"
                                class="mb-4 mb-xl-0"
                    >
                      <template slot="footer">
                          <span class="text-danger mr-2"><i class="fa fa-arrow-up"></i> 8.50%</span>
                          <span class="text-nowrap">desde último reporte</span>
                      </template>
                    </stats-card>
                </div>
                <div class="col-xl-4 col-lg-6 mt-4">
                    <stats-card title="Casos Pendientes"
                                type="gradient-orange"
                                sub-title="1,830"
                                icon="ni ni-folder-17"
                                class="mb-4 mb-xl-0"
                    >
                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-up"></i> 4.45%</span>
                            <span class="text-nowrap">desde último reporte</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-4 col-lg-6 mt-4">
                    <stats-card title="Muertes"
                                type="gradient-default"
                                sub-title="62"
                                icon="ni ni-badge"
                                class="mb-4 mb-xl-0"
                    >
                      <template slot="footer">
                          <span class="text-danger mr-2"><i class="fa fa-arrow-up"></i> 3.33%</span>
                          <span class="text-nowrap">desde último reporte</span>
                      </template>
                    </stats-card>
                </div>
                <div class="col-xl-4 col-lg-6 mt-4">
                    <stats-card title="Casos Negativos"
                                type="gradient-green"
                                sub-title="8,280"
                                icon="ni ni-fat-delete"
                                class="mb-4 mb-xl-0"
                    >
                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 2.79%</span>
                            <span class="text-nowrap">desde último reporte</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-4 col-lg-6 mt-4">
                    <stats-card title="Total"
                                type="gradient-info"
                                sub-title="11,332"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0"
                    >
                      <template slot="footer">
                          <span class="text-default mr-2"><i class="fa fa-arrow-up"></i> 3.65%</span>
                          <span class="text-nowrap">desde último reporte</span>
                      </template>
                    </stats-card>
                </div>
            </div>
        </base-header>

        <!--Charts-->
        <div class="container-fluid mt--7">
            <div class="row">
                  <div class="col-xl-12">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h5 class="h3 mb-0">Total de Casos</h5>
                            </div>
                        </div>

                        <pruebas-vs-casos-positivos-chart></pruebas-vs-casos-positivos-chart>
                    </card>
                </div>
            </div>
            <!-- End charts-->

            <!--Tables-->
            <div class="row mt-5">
                <div class="col-xl-8">
                    <registro-de-casos-nuevos></registro-de-casos-nuevos>
                </div>
                <div class="col-xl-4">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h5 class="h3 mb-0">Registro de Casos Nuevos</h5>
                            </div>
                        </div>
                      
                      <registro-de-casos-chart></registro-de-casos-chart>
                    </card>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-xl-4">
                  <div class="row">
                    <div class="col-xl-12">
                      <card header-classes="bg-transparent">
                          <div slot="header" class="row align-items-center">
                              <div class="col">
                                  <h5 class="h3 mb-0">Casos Positivos por Sexo</h5>
                              </div>
                          </div>
                          <casos-por-sexo-chart></casos-por-sexo-chart>
                      </card>
                    </div>
                  </div>

                  <div class="row mt-4">
                    <div class="col-xl-12">
                      <card header-classes="bg-transparent">
                          <div slot="header" class="row align-items-center">
                              <div class="col">
                                  <h5 class="h3 mb-0">Total de Casos</h5>
                              </div>
                          </div>

                          <total-de-casos-chart></total-de-casos-chart>
                      </card>
                    </div>
                  </div>
                </div>

                <div class="col-xl-8">
                    <card header-classes="bg-transparent">
                        <div slot="header" class="row align-items-center">
                            <div class="col">
                                <h5 class="h3 mb-0">Casos por Edad</h5>
                            </div>
                             <base-button v-show="showCasosPorEdadChartPie" type="primary" icon="ni ni-chart-bar-32"></base-button>
                             <base-button v-show="showCasosPorEdadChart" type="primary" icon="ni ni-chart-pie-35"></base-button>

                        </div>
                        <casos-por-edad-chart v-show="showCasosPorEdadChart"></casos-por-edad-chart>
                    </card>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  // Charts
  import CasosPorSexoChart from './Charts/CasosPorSexoChart';
  import CasosPorEdadChart from './Charts/CasosPorEdadChart';
  import RegistroDeCasosChart from './Charts/RegistroDeCasosChart';
  import TotalDeCasosChart from './Charts/TotalDeCasosChart';
  import PruebasVsCasosPositivosChart from './Charts/PruebasVsCasosPositivosChart';

  // Tables
  import RegistroDeCasosNuevos from './Tables/RegistroDeCasosNuevos';

  export default {
    components: {
      CasosPorSexoChart,
      CasosPorEdadChart,
      PruebasVsCasosPositivosChart,
      TotalDeCasosChart,
      RegistroDeCasosChart,
      RegistroDeCasosNuevos
    },
    data() {
      return {
        showCasosPorEdadChart: true,
        showCasosPorEdadChartPie: false,
        htmlLegend: null,
      }
    }
  };
</script>
<style></style>
