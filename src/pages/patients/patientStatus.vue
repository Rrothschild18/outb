<template>
  <f7-page name="patientSingle">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <f7-icon material="arrow_back" class="back-arrow ripple" size="30px" @click="f7router.back()"></f7-icon>
          <h4 class="mb-0 fw-bold">Paciente 18062022</h4>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <section>
        <h4>Historico de tratamento</h4>

        <span class="mb-3 d-block">Resumo</span>
        <f7-card
          class="m-0 mt-5 status-card"
          :padding="false"
          @click="f7router.navigate({ name: 'PatientSingle', params: { id: 999 } })"
        >
          <template #content>
            <f7-button class="status-button" color="yellow">
              <f7-row class="h-100">
                <f7-col width="100">
                  <div class="d-flex justify-content-between w-100 mb-3">
                    <div class="chip">
                      <h6 class="mb-0 fw-bold">Retorno abandono</h6>
                    </div>
                    <f7-icon material="chevron_right" class="status-icon"></f7-icon>
                  </div>
                </f7-col>
                <f7-col width="50" class="d-flex flex-column align-items-start">
                  <span class="info text-gray-dark">Tipo</span>
                  <h6 class="mb-0 info-value fw-bold">Reincidente</h6>
                </f7-col>
                <f7-col width="50" class="d-flex flex-column align-items-start">
                  <span class="info text-gray-dark">Forma clínica</span>
                  <h6 class="mb-0 info-value fw-bold">Pleural</h6>
                </f7-col>
              </f7-row>
            </f7-button>
          </template>
        </f7-card>
      </section>

      <section class="mt-7 text-center">
        <h5>Quadros clinicos</h5>

        <f7-row>
          <f7-col width="33">
            <div class="d-flex flex-column w-100">
              <span>Melhorar</span>
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-3">~10%</span>
                <f7-badge color="green"> </f7-badge>
              </div>
            </div>
          </f7-col>
          <f7-col width="33">
            <div class="d-flex flex-column w-100">
              <span>Estavel</span>
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-3">~30%</span>
                <f7-badge color="blue"> </f7-badge>
              </div>
            </div>
          </f7-col>
          <f7-col width="33">
            <div class="d-flex flex-column w-100">
              <span>Agravar</span>
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-3">~60%</span>
                <f7-badge color="yellow"> </f7-badge>
              </div>
            </div>
          </f7-col>
        </f7-row>

        <hr class="separator w-100" />

        <h5>Historico</h5>

        <div class="timeline d-flex flex-column align-items-start">
          <div class="timeline-item d-flex flex-column align-items-start">
            <div class="circle back-green"></div>
            <h6 class="text-gray-dark">28 FEVEREIRO, 2020</h6>
            <h5>Curado</h5>
            <span class="text-gray-dark text-start"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <div class="line back-green"></div>
          </div>
          <div class="timeline-item d-flex flex-column align-items-start">
            <div class="circle _disabled"></div>
            <h6 class="text-gray-dark">15 FEVEREIRO, 2020</h6>
            <h5>Estavel</h5>
            <span class="text-gray-dark text-start"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <div class="line _disabled"></div>
          </div>
          <div class="timeline-item d-flex flex-column align-items-start">
            <div class="circle _disabled"></div>
            <h6 class="text-gray-dark">13 FEVEREIRO, 2020</h6>
            <h5>Estavel</h5>
            <span class="text-gray-dark text-start"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <div class="line _disabled"></div>
          </div>
          <div class="timeline-item d-flex flex-column align-items-start">
            <div class="circle _disabled back-yellow"></div>
            <h6 class="text-gray-dark">10 FEVEREIRO, 2020</h6>
            <h5>Grave</h5>
            <span class="text-gray-dark text-start"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <div class="line _disabled back-yellow"></div>
          </div>
          <div class="timeline-item d-flex flex-column align-items-start">
            <div class="circle _disabled back-red"></div>
            <h6 class="text-gray-dark">04 FEVEREIRO, 2020</h6>
            <h5>Critico</h5>
            <span class="text-gray-dark text-start"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <div class="line _disabled back-red"></div>
          </div>
          <div class="timeline-item d-flex flex-column align-items-start">
            <div class="circle _disabled back-red"></div>
            <h6 class="text-gray-dark">02 FEVEREIRO, 2020</h6>
            <h5>Critico</h5>
            <span class="text-gray-dark text-start"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <div class="line _disabled back-red"></div>
          </div>
        </div>
      </section>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  mounted() {},

  data() {
    return {
      count: 0,
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.back-arrow {
  position: absolute;
  left: 16px;
}

.status-card {
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #ffd500;
    width: 5px;
    border-radius: 4px 0 0 4px;
  }
}

.chip {
  background-color: #ffd500;
}

.info {
  font-size: 12px;
  text-transform: uppercase;
  height: 28px;
}

.info-value {
  color: #000;
}

.status-icon {
  color: #000;
}

.status-button {
  height: 144px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-transform: unset;
  padding: 16px;
}

.timeline {
  .timeline-item {
    overflow: visible;

    .circle {
      position: absolute;
      left: -22px;
      top: 3px;
      width: 16px;
      height: 16px;
      background-color: #2196f3;
      border-radius: 50%;
      z-index: 99;

      &._disabled {
        width: 12px;
        height: 12px;
        left: -20px;
        opacity: 0.7;
        top: 5px;
      }
    }

    .line {
      position: absolute;
      left: -15px;
      width: 2px;
      top: 15px;
      height: 90%;
      background-color: #2196f3;
      z-index: 99;

      &._disabled {
        opacity: 0.7;
        top: 17px;
      }
    }

    .back-red {
      background: red;
    }
    .back-yellow {
      background: #ffcc00;
    }
    .back-green {
      background: #16794b;
    }
  }
}
</style>
