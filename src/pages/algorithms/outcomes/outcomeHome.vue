<template>
  <f7-page name="OutcomeHome">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <h4 class="mb-0 fw-bold">Outcomes</h4>
          <f7-icon material="arrow_back" class="back-arrow ripple" size="30px" @click="f7router.back()"></f7-icon>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <!-- Top Navbar -->

      <f7-row>
        <f7-col>
          <section class="mb-8">
            <!-- <h4 class="text-primary fw-bold d-block mb-0">Outcomes algorithm</h4> -->
            <h5 class="mb-0">
              <span class="text-primary fw-bold mb-0 fs-4 me-1">Outcomes algorithm</span>

              provides an overview of what are possibles outcomes for patients who has TB
            </h5>
          </section>

          <section>
            <div class="d-flex justify-content-between mb-5">
              <span>Recent added</span>
              <span>{{ lastOutcomeStatus.createdAt }}</span>
            </div>

            <f7-card
              class="m-0 status-card"
              :padding="false"
              @click="
                f7router.navigate({ name: 'OutcomeStatus', params: { algorithmId, id: lastOutcomeStatus.patientId } })
              "
            >
              <template #content>
                <f7-button class="status-button">
                  <div class="d-flex justify-content-between w-100 mb-3">
                    <h6 class="text-secondary-blue mb-0">{{ lastOutcomeStatus.TIPO_CASO }}</h6>
                    <f7-icon material="chevron_right" class="status-icon"></f7-icon>
                  </div>
                  <h4 class="fw-bold mb-0">Patient {{ firstPatientName(lastOutcomeStatus.name) }}</h4>
                  <span class="text-gray-dark">{{ lastOutcomeStatus.SITUACAO_ATUAL }}</span>
                </f7-button>
              </template>
            </f7-card>
          </section>

          <section class="mt-3">
            <f7-row>
              <h4 class="mt-5 fw-bold">Menu</h4>
              <f7-col width="50" class="mb-3">
                <f7-card
                  class="m-0 border"
                  no-shadow
                  @click="
                    f7router.navigate({
                      name: 'OutcomeForm',
                      params: { algorithmId, mode: 'create' },
                    })
                  "
                >
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="person_add" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Create patient outcome</h6>
                      </div>
                    </div>
                  </template>
                </f7-card>
              </f7-col>

              <f7-col width="50" class="mb-3">
                <f7-card
                  class="m-0 border"
                  no-shadow
                  @click="
                    f7router.navigate({ name: 'OutcomesList', params: { id: 'f2e38111-d571-4940-8ea7-1e3d677a0f02' } })
                  "
                >
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="recent_actors" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Patients outcomes</h6>
                      </div>
                    </div>
                  </template>
                </f7-card>
              </f7-col>

              <f7-col width="100" class="mb-3">
                <f7-card class="m-0 border" no-shadow>
                  <template #content>
                    <div class="menu-content">
                      <div
                        class="d-flex flex-column align-items-center justify-content-center menu-content-wrapper text-center"
                      >
                        <f7-icon material="help" size="40px" color="primary" class="d-block"></f7-icon>
                        <h6 class="d-block mb-0 mt-2">Help</h6>
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
import { f7 } from "framework7-vue";
import { lastStatusByAlgorithmId } from "../../../services";

export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  async mounted() {
    await this.fetchLastOutcomeStatus();
  },

  data() {
    return {
      lastOutcomeStatus: {},
    };
  },

  computed: {
    algorithmId() {
      return f7.store.state.algorithm.id;
    },
  },

  methods: {
    async fetchLastOutcomeStatus() {
      try {
        const response = await lastStatusByAlgorithmId(this.algorithmId);
        this.lastOutcomeStatus = response.data;
      } catch (e) {
        console.log(e);
      }
    },

    firstPatientName(name = "- -") {
      return name?.split(" ")?.[0];
    },
  },
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
