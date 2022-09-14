<template>
  <f7-page name="PatientStatus">
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
          class="m-0 mt-5"
          :padding="false"
          @click="
            f7router.navigate({
              name: 'PatientSingle',
              params: { id: 999 },
            })
          "
        >
          <template #content>
            <div class="status-card" :style="statusColor()"></div>
            <f7-button class="status-button" :color="parseColorName(patientStatusColor)">
              <div class="d-flex justify-content-between mb-3 w-100">
                <div class="chip" :style="statusColor()">
                  <h6 class="mb-0 fw-bold">{{ parseSelectResults("SITUACAO_ATUAL", lastStatus) }}</h6>
                </div>
                <f7-icon material="chevron_right" class="status-icon"></f7-icon>
              </div>
              <f7-row class="h-100">
                <f7-col width="100"> </f7-col>
                <f7-col width="50" class="d-flex flex-column align-items-start">
                  <span class="info text-gray-dark">Tipo</span>
                  <h6 class="mb-0 info-value fw-bold">{{ parseSelectResults("TIPO_CASO", lastStatus) }}</h6>
                </f7-col>
                <f7-col width="50" class="d-flex flex-column align-items-start">
                  <span class="info text-gray-dark">Forma clínica</span>
                  <h6 class="mb-0 info-value fw-bold">{{ parseSelectResults("FORMA_CLINICA_1", lastStatus) }}</h6>
                </f7-col>
              </f7-row>
            </f7-button>
          </template>
        </f7-card>
      </section>

      <section class="mt-7 text-center">
        <f7-row>
          <f7-col>
            <h5 class="fw-bold">Quadro clinico</h5>
            <div class="d-flex align-items-center justify-content-center">
              <span class="me-3">Melhorar: </span>
              <span class="me-1">~10%</span>
              <f7-badge color="green"> </f7-badge>
            </div>
          </f7-col>
        </f7-row>

        <hr class="separator w-100" />

        <h5>Historico</h5>

        <div class="timeline d-flex flex-column align-items-start">
          <div
            v-for="(status, index) of statuses"
            :key="index"
            class="timeline-item d-flex flex-column align-items-start"
          >
            <div class="circle" :style="statusColor2(generateRandomStatus())"></div>
            <!-- <div class="circle back-green" :style="statusColor(generateRandomStatus())"></div> -->
            <h6 class="text-gray-dark">28 FEVEREIRO, 2020</h6>
            <h5>{{ parseSelectResultsStatuses("SITUACAO_ATUAL") }}</h5>
            <span class="text-gray-dark text-start"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </span>
            <div class="line" :style="statusColor2()"></div>
            <!-- <div class="line back-green" :style="statusColor(generateRandomStatus())"></div> -->
          </div>
        </div>
      </section>
    </f7-block>

    <f7-fab
      position="right-bottom"
      color="primary"
      @click="
        f7router.navigate({
          name: 'PatientEdit',
          params: { id: patientId },
        })
      "
    >
      <f7-icon ios="f7:plus" color="white" aurora="f7:plus" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>
<script>
import { setColor, setColorName } from "../../helpers/colors";
import { getStatusByPatientId, patientFields } from "../../services";
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  computed: {
    patientId() {
      return this.f7route.params.id;
    },
  },

  created() {
    //resolve promossies race conditions
    this.loadData();
  },

  data() {
    return {
      fields: {},
      statuses: [],
      lastStatus: {},
      patientStatusColor: undefined,
      patientTimeLineColor: undefined,
    };
  },

  methods: {
    setColor,

    async loadData() {
      await this.getPatientFields();
      await this.fetchPatientStatuses();
    },

    async fetchPatientStatuses() {
      try {
        let { data: statusList } = await getStatusByPatientId(this.patientId);
        this.statuses = statusList;
        this.lastStatus = statusList[statusList.length - 1] || {};
      } catch (e) {
        console.log(e);
      }
    },

    async getPatientFields() {
      let { data } = await patientFields();

      this.fields = data.fields;
    },

    generateRandomStatus() {
      const rNumber = Math.floor(Math.random() * (5 - 0) + 0);

      const possibleStatuses = ["blue", "yellow", "red", "success", "gray"];

      return possibleStatuses[rNumber];
    },

    parseSelectResults(key) {
      return this.fields[key]?.options?.find(({ value }) => value === this.lastStatus[key])?.label || "";
    },

    parseSelectResultsStatuses(key) {
      return this.fields[key]?.options?.find(({ value }) => value === this.statuses[key])?.label || "";
    },

    parseColorName(color) {
      return setColorName(color);
    },

    statusColor() {
      if (this.patientStatusColor) {
        return { backgroundColor: `${this.patientStatusColor}` };
      }

      this.patientStatusColor = this.setColor(this.generateRandomStatus());

      return { backgroundColor: `${this.setColor(this.generateRandomStatus())}` };
    },

    statusColor2() {
      if (this.patientTimeLineColor) {
        return { backgroundColor: `${this.patientTimeLineColor}` };
      }

      this.patientTimeLineColor = this.setColor(this.generateRandomStatus());
    },

    statusColor2() {
      return { backgroundColor: `${this.setColor(this.generateRandomStatus())}` };
    },
  },
};
</script>
<style scoped lang="scss">
.back-arrow {
  position: absolute;
  left: 16px;
}

.status-card {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 5px;
  border-radius: 4px 0 0 4px;
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
