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
      <section class="roudend bg-white shadow-sm">
        <div class="p-4 pb-0 d-flex align-items-center">
          <f7-input label="E-mail" class="w-100 me-4" type="email" outline placeholder="E-mail" clear-button>
          </f7-input>
          <f7-icon material="filter_list" size="20px"></f7-icon>
        </div>

        <f7-list media-list class="PatientList no-hairline mb-3" virtual-list no-hairlines>
          <f7-list-item link="#" chevron-center v-for="({ name, type, status }, index) of patients" :key="index">
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
        </f7-list>
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
      patients: [
        { name: "P #18062022", type: "Novo", status: "red" },
        { name: "P #19062020", type: "Reicidiva", status: "blue" },
        { name: "P #11062010", type: "Novo", status: "yellow" },
        { name: "P #30062022", type: "Retorno abandono", status: "green" },
        { name: "P #12262022", type: "Retrat mud esquema int/tox", status: "gray" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
        { name: "P #19062020", type: "Recidiva", status: "blue" },
      ],
    };
  },

  methods: {
    statusColor(status) {
      return { backgroundColor: `${status}` };
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

input {
  height: 45px;
}
</style>
