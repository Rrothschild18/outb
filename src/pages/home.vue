<template>
  <f7-navbar title="Menu"> </f7-navbar>
  <f7-page name="home">
    <f7-block>
      <!-- Top Navbar -->

      <f7-row>
        <f7-col>
          <section>
            <h4 class="text-primary fw-bold d-block">OUTb</h4>
            <p>é uma ferramenta de assistência médica para tuberculose</p>
          </section>

          <section>
            <div class="d-flex justify-content-between mb-5">
              <span>Recente</span>
              <span>13/12/ 2021</span>
            </div>

            <f7-card class="status-card m-0">
              <template #header>
                <div class="d-flex justify-content-between w-100">
                  <span class="text-secondary-blue">Retorno abandono</span>
                  <f7-icon material="chevron_right" class="status-icon"></f7-icon>
                </div>
              </template>
              <template #content>
                <h4 class="fw-bold">Paciente 18062022</h4>
                <span class="text-gray-medium">Tratamento ambulatorial</span>
              </template>
            </f7-card>
          </section>
          <section class="mt-10">
            <f7-row>
              <f7-col width="50" class="mb-5">
                <f7-card class="m-0 border" no-shadow>
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

              <f7-col width="50" class="mb-5">
                <f7-card class="m-0 border" no-shadow>
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

              <f7-col width="50" class="mb-5">
                <f7-card class="m-0 border" no-shadow>
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="person_add" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Cadastrar pacientes</h6>
                      </div>
                    </div>
                  </template>
                </f7-card>
              </f7-col>

              <f7-col width="50" class="mb-5">
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
  data() {
    return {
      count: 0,
    };
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
  padding-top: max(0px, min(100%, 200px));
}

.menu-content-wrapper {
  position: absolute;
  top: 16px;
  width: calc(100% - 32px);
  height: calc(100% - 32px);
}
</style>
