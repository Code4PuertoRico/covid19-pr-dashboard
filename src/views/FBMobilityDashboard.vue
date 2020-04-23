<template>
    <div>
        <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-8">

          <!-- Disclaimer Alert -->
          <base-alert type="warning" dismissible>

              <span class="alert-inner--text">
                <span style="font-size: 20px"><strong>Reporte Actualizado:</strong> 04/23/2020, 6:30 AM</span>
                <br>
                <br>
                <strong>Disclaimer:</strong> Datos son provistos por Facebook. No somos resonsables por la integridad de la data reportada, sólo brindamos una mejor forma para visualizarla.</span>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </base-alert>

            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-12 col-md-10">
                        <h1 class="display-2 text-white">Facebook Data for Good Mobility Dashboard</h1>
                        <p class="text-white mt-0 mb-5">
                            The information provided by Facebook on population mobility always needs to be contextualized with a range of additional 
                            data sources on local demographics, infrastructure and socioeconomic indicators, in order to understand the underlying 
                            reasons for the observed variations in mobility, and how they may impact the risks associated with COVID-19. 
                            Researchers can access these additional insights through public data sources like census information, as well as through 
                            other commercially available statistics.
                            </p>
                        <a href="https://visualization.covid19mobility.org/"><base-button type="info" icon="ni ni-chart-pie-35">View Source</base-button></a>
                    </div>
                </div>
            </div>
        </base-header> 
         <!-- Card stats -->
        <div class="row pl-4 pr-4">
            <div class="col-sm-12 mt--7 p-5">
                <google-stats-card title="Relative Mobility Change"
                            type="gradient-info"
                            sub-title=""
                            class="mb-4 mb-xl-0"
                >

                    <template slot="footer">
                        <img class="fbGraph" src="img/fbReports/stay-put-percentage.png" alt="">
                        <span class="text-danger mr-2 stats-percentage-size"><i class="fa fa-arrow-down icon-size"></i> -43%</span>
                        <span class="text-nowrap">comparado al baseline</span>
                    </template>
                </google-stats-card>
            </div>
            <div class="col-sm-12 p-5">
                <google-stats-card title="Stay-Put Percentage"
                            type="gradient-info"
                            sub-title=""
                            class="mb-4 mb-xl-0"
                >

                    <template slot="footer">
                        <img class="fbGraph" src="img/fbReports/stay-put-percentage.png" alt="">
                        <span class="text-success mr-2 stats-percentage-size"><i class="fa fa-arrow-up icon-size"></i> 21%</span>
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
    .fbGraph {
        margin: 24px;
        width: 90%;
    }

    .icon-size  {
        font-size: 48px !important;
    }

    .stats-percentage-size {
        font-size: 32px;
    }
</style>