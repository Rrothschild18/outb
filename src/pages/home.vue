<template>
  <f7-page name="home">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <h4 class="mb-0 fw-bold">Home</h4>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <!-- Top Navbar -->

      <f7-row>
        <f7-col>
          <section class="mb-8">
            <h4 class="text-primary fw-bold d-block mb-0">OUTb</h4>
            <h5 class="mb-0">
              offers insights using machine learning algorithms to combat tuberculosis. It provides an overview of the
              different algorithms available and how they can support healthcare professionals in improving diagnoses
              and manage TB more effectively.
            </h5>
          </section>

          <!-- <section>
            <div class="d-flex justify-content-between mb-5">
              <span>Recente</span>
              <span>13/12/ 2021</span>
            </div>

            <f7-card
              class="m-0 status-card"
              :padding="false"
              @click="f7router.navigate({ name: 'PatientStatus', params: { id: 999 } })"
            >
              <template #content>
                <f7-button class="status-button">
                  <div class="d-flex justify-content-between w-100 mb-3">
                    <h6 class="text-secondary-blue mb-0">Retorno abandono</h6>
                    <f7-icon material="chevron_right" class="status-icon"></f7-icon>
                  </div>
                  <h4 class="fw-bold mb-0">Paciente 18062022</h4>
                  <span class="text-gray-dark">Tratamento ambulatorial</span>
                </f7-button>
              </template>
            </f7-card>
          </section> -->

          <section class="mt-3">
            <f7-row>
              <h4 class="mt-5 fw-bold">Menu</h4>
              <f7-col width="50" class="mb-3">
                <f7-card class="m-0 border" no-shadow @click="f7router.navigate({ name: 'PatientCreate' })">
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="person_add" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Cadastrar paciente</h6>
                      </div>
                    </div>
                  </template>
                </f7-card>
              </f7-col>

              <f7-col width="50" class="mb-3">
                <f7-card class="m-0 border" no-shadow @click="f7router.navigate({ name: 'PatientList' })">
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="recent_actors" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Listar paciente</h6>
                      </div>
                    </div>
                  </template>
                </f7-card>
              </f7-col>

              <f7-col width="50" class="mb-3">
                <f7-card class="m-0 border" no-shadow @click="f7router.navigate({ name: 'AlgorithmsList' })">
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="health_and_safety" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Listar predições</h6>
                      </div>
                    </div>
                  </template>
                </f7-card>
              </f7-col>

              <f7-col width="50" class="mb-3">
                <f7-card class="m-0 border" no-shadow>
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="help" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Ajuda</h6>
                      </div>
                    </div>
                  </template>
                </f7-card>
              </f7-col>
            </f7-row>
          </section>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.status-card {
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #0d99ff;
    width: 5px;
    border-radius: 4px 0 0 4px;
  }
}

.status-icon {
  color: #0d99ff;
}

.menu-item-option {
  &:before {
    content: "";
    display: block;
    width: 100%;
    max-height: 140px;
    padding-top: 100%;
  }
}

.menu-content {
  padding-top: max(0px, min(100%, 150px));
}

.menu-content-wrapper {
  position: absolute;
  top: 16px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
}

.status-button {
  height: 124px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-transform: unset;
  padding: 16px;
}

.card {
  .card-content-padding {
    padding: 0 !important;
  }
}
</style>
