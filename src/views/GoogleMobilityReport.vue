<template>
    <div>
        <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">

          <!-- Disclaimer Alert -->
          <base-alert type="warning" dismissible>

              <span class="alert-inner--text">
                <span style="font-size: 20px"><strong>Reporte Actualizado:</strong> 04/19/2020, 9:00 AM</span>
                <br>
                <br>
                <strong>Disclaimer:</strong> Datos son provistos Google. No somos resonsables por la integridad de la data reportada, sólo brindamos una mejor forma para visualizarla.</span>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </base-alert>

            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-12 col-md-10">
                        <h1 class="display-2 text-white">Google Mobility Reports</h1>
                        <p class="text-white mt-0 mb-5">
                            Google prepared this report to help you and public health officials understand responses to social
                            distancing guidance related to COVID-19. This report shouldn’t be used for medical diagnostic,
                            prognostic, or treatment purposes. It also isn’t intended to be used for guidance on personal travel plans.
                            </p>
                        <a href="https://www.google.com/covid19/mobility/"><base-button type="info" icon="ni ni-chart-pie-35">View Source</base-button></a>
                    </div>
                </div>
            </div>
        </base-header> 
         <!-- Card stats -->
        <div class="row pl-4 pr-4">
            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                <google-stats-card title="Retail &amp; Recreation"
                            type="gradient-info"
                            sub-title=""
                            icon="ni ni-building"
                            class="mb-4 mb-xl-0"
                >

                    <template slot="footer">
                        <img class="googleGraph" src="img/googleReports/retail-and-recreation.png" alt="">
                        <span class="text-danger mr-2 stats-percentage-size stats-percentage-size"><i class="fa fa-arrow-down icon-size"></i> -89%</span>
                        <span class="text-nowrap">comparado al baseline</span>
                    </template>
                </google-stats-card>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                <google-stats-card title="Grocery &amp; Pharmacy"
                            type="gradient-info"
                            sub-title=""
                            icon="ni ni-cart"
                            class="mb-4 mb-xl-0"
                >

                    <template slot="footer">
                        <img class="googleGraph" src="img/googleReports/grocery-and-pharmacy.png" alt="">
                        <span class="text-danger mr-2 stats-percentage-size"><i class="fa fa-arrow-down icon-size"></i> -87%</span>
                        <span class="text-nowrap">comparado al baseline</span>
                    </template>
                </google-stats-card>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                <google-stats-card title="Parks"
                            type="gradient-info"
                            sub-title=""
                            icon="ni ni-square-pin"
                            class="mb-4 mb-xl-0"
                >

                    <template slot="footer">
                        <img class="googleGraph" src="img/googleReports/parks.png" alt="">
                        <span class="text-danger mr-2 stats-percentage-size"><i class="fa fa-arrow-down icon-size"></i> -78%</span>
                        <span class="text-nowrap">comparado al baseline</span>
                    </template>
                </google-stats-card>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                <google-stats-card title="Transit Stations"
                            type="gradient-info"
                            sub-title=""
                            icon="ni ni-delivery-fast"
                            class="mb-4 mb-xl-0"
                >

                    <template slot="footer">
                        <img class="googleGraph" src="img/googleReports/transit-stations.png" alt="">
                        <span class="text-danger mr-2 stats-percentage-size"><i class="fa fa-arrow-down icon-size"></i> -86%</span>
                        <span class="text-nowrap">comparado al baseline</span>
                    </template>
                </google-stats-card>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                <google-stats-card title="Workplaces"
                            type="gradient-info"
                            sub-title=""
                            icon="ni ni-ruler-pencil"
                            class="mb-4 mb-xl-0"
                >

                    <template slot="footer">
                        <img class="googleGraph" src="img/googleReports/workplaces.png" alt="">
                        <span class="text-danger mr-2 stats-percentage-size"><i class="fa fa-arrow-down icon-size"></i> -65%</span>
                        <span class="text-nowrap">comparado al baseline</span>
                    </template>
                </google-stats-card>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4 mt-4">
                <google-stats-card title="Residential"
                            type="gradient-info"
                            sub-title=""
                            icon="ni ni-single-02"
                            class="mb-4 mb-xl-0 icon-size"
                >
                
                    <template slot="footer">
                        <img class="googleGraph" src="img/googleReports/residential.png" alt="">
                        <span class="text-success mr-2 stats-percentage-size"><i class="fa fa-arrow-up icon-size"></i> +29%</span>
                        <span class="text-nowrap">comparado al baseline</span>
                    </template>
                </google-stats-card>
            </div>
        </div>   
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .googleGraph {
        margin: 24px;
        width: 240px;
    }

    .icon-size  {
        font-size: 48px !important;
    }

    .stats-percentage-size {
        font-size: 32px;
    }
</style>