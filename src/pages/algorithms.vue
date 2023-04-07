<template>
  <f7-page name="AlgorithmsList">
    <f7-navbar no-shadow class="shadow-sm w-100">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
            <f7-icon material="arrow_back" class="back-arrow ripple" size="30px" @click="f7router.back()"></f7-icon>
            <h4 class="mb-0 fw-bold">Algorithms</h4>
          </div>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <div class="mb-10 mt-5">
        <h4>Algorithms</h4>
        <span>
          Discover our machine learning algorithms designed to aid patients with tuberculosis. Explore our list of
          algorithms and how they can help diagnose and mana ge TB more effectively.
        </span>
      </div>

      <f7-row>
        <f7-col width="100" class="mb-3">
          <f7-card class="m-0 border no-shadow" :padding="false">
            <template #content>
              <f7-button class="py-6 px-4 algorithm-list-button">
                <div class="d-flex justify-content-between align-items-center w-100">
                  <h4 class="fw-bold text-gray-dark mb-0">Outcomes</h4>
                  <f7-icon material="chevron_right" class="status-icon"></f7-icon>
                </div>
              </f7-button>
            </template>
          </f7-card>
        </f7-col>

        <f7-col width="100" class="mb-3">
          <f7-card class="m-0 py-6 px-4 border no-shadow" :padding="false">
            <template #content>
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="fw-bold text-gray mb-0">Tuberculosis with resistant bacteria</h4>
                <f7-icon material="chevron_right" class="status-icon _disabled"></f7-icon>
              </div>
            </template>
          </f7-card>
        </f7-col>

        <f7-col width="100" class="mb-3">
          <f7-card class="m-0 py-6 px-4 border no-shadow" :padding="false">
            <template #content>
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="fw-bold text-gray mb-0">Primary abandon</h4>
                <f7-icon material="chevron_right" class="status-icon _disabled"></f7-icon>
              </div>
            </template>
          </f7-card>
        </f7-col>

        <f7-col width="100" class="mb-3">
          <f7-card class="m-0 py-6 px-4 border no-shadow" :padding="false">
            <template #content>
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="fw-bold text-gray mb-0">Return from abandon</h4>
                <f7-icon material="chevron_right" class="status-icon _disabled"></f7-icon>
              </div>
            </template>
          </f7-card>
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
.navbar-inner .sliding {
  background-color: #fff !important;
}

.status-icon {
  color: #0d99ff;

  &._disabled {
    opacity: 0.8;
  }
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

.card {
  .card-content-padding {
    padding: 0 !important;
  }
}
.back-arrow {
  position: absolute;
  left: 16px;
}
.algorithm-list-button {
  height: 80px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-transform: unset;
}
</style>
