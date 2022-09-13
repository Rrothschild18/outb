<template>
  <f7-page name="PatientList">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <f7-icon material="arrow_back" class="back-arrow ripple" size="30px" @click="f7router.back()"></f7-icon>
          <h4 class="mb-0 fw-bold">Pacientes</h4>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <h4>Listagem de pacientes</h4>
      <section class="rounded bg-white shadow-sm pt-3">
        <f7-searchbar
          disable-button-text="Cancel"
          class="shadow-none border-bottom"
          placeholder="Pesquisar"
          :clear-button="true"
          :form="false"
        ></f7-searchbar>

        <Loader absolute v-if="loading" />
        <f7-list media-list class="PatientList no-hairline mb-3" virtual-list no-hairlines>
          <f7-list-item v-if="!loading">
            <f7-list-item
              link="#"
              chevron-center
              v-for="({ id, name, type, status }, index) of patients"
              :key="index"
              @click="f7router.navigate({ name: 'PatientSingle', params: { id } })"
            >
              <template #default>
                <section class="d-flex">
                  <div>
                    <div
                      class="patient-list-item d-flex align-items-center justify-content-center rounded"
                      :style="statusColor(status)"
                    >
                      <svg width="25" height="35">
                        <image class="logo" xlink:href="/assets/patient-list.svg" />
                      </svg>
                    </div>
                  </div>

                  <div class="d-flex flex-column ms-5 h-70 justify-content-center">
                    <h4 class="mb-0">{{ name }}</h4>
                    <h6 class="mb-0 text-gray-dark">{{ type }}</h6>
                  </div>
                </section>
              </template>
            </f7-list-item>
          </f7-list-item>
        </f7-list>
      </section>
    </f7-block>
  </f7-page>
</template>
<script>
import { setColor } from "../../helpers/colors";
import { patientsList, patientFields } from "../../services";

export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  data() {
    return {
      fields: {},
      patients: [],
      loading: true,
    };
  },

  mounted() {
    this.getPatientFields();
    this.getPatientList();
  },

  methods: {
    setColor,

    statusColor(status) {
      return { backgroundColor: `${this.setColor(status)}` };
    },

    generateRandomStatus() {
      const rNumber = Math.floor(Math.random() * (5 - 0) + 0);

      const possibleStatuses = ["blue", "yellow", "red", "success", "gray"];

      return possibleStatuses[rNumber];
    },

    async getPatientList() {
      try {
        let { data } = await patientsList();

        setTimeout(() => {
          this.patients = [
            ...data.map((patient) => {
              return {
                id: patient.id,
                name: patient.name.split(" ")[0] || `P #${patient.id}`,
                type: this.fields.TIPO_CASO?.options.find((option) => option.value === patient.TIPO_CASO).label || "-",
                status: this.generateRandomStatus(),
              };
            }),
          ];
          this.loading = false;
        }, 2000);
      } catch (e) {
        console.log(e);
      } finally {
      }
    },

    async getPatientFields() {
      let { data } = await patientFields();
      this.fields = data.fields;
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

.PatientList {
  overflow-y: scroll;
  max-height: 500px;
  height: 500px;

  .patient-list-item {
    height: 70px;
    width: 70px;
  }

  > a.item-link {
    text-decoration: none !important;
  }

  .h-70 {
    height: 70px;
  }
}

.Input {
  > input {
    height: 45px;
  }
}
</style>
