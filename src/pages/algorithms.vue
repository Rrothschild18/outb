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
    <Loader absolute v-if="isLoading" />
    <f7-block class="mt-3">
      <div class="mb-10 mt-5">
        <h4>Algorithms</h4>
        <span>
          Discover our machine learning algorithms designed to aid patients with tuberculosis. Explore our list of
          algorithms and how they can help diagnose and mana ge TB more effectively.
        </span>
      </div>

      <f7-row v-if="!isLoading">
        <f7-col width="100" class="mb-3" v-for="algorithm in algorithms" :key="algorithm.id">
          <f7-card class="m-0 border no-shadow" :padding="false">
            <template #content>
              <f7-button
                :disabled="!algorithm.active"
                class="py-6 px-4 algorithm-list-button"
                @click="redirectToSelectedAlgorithm(algorithm)"
              >
                <div class="d-flex justify-content-between align-items-center w-100">
                  <h4 class="fw-bold mb-0" :class="algorithmCardClasses(algorithm.active)">
                    {{ algorithm.name }}
                  </h4>
                  <f7-icon
                    material="chevron_right"
                    class="status-icon"
                    :class="algorithmIconClasses(algorithm.active)"
                  ></f7-icon>
                </div>
              </f7-button>
            </template>
          </f7-card>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<script>
import { f7 } from "framework7-vue";
import { algorithmsList } from "../services";
import { toRaw } from "vue";

export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  data() {
    return {
      algorithms: [],
      isLoading: true,
    };
  },

  mounted() {
    this.getAlgorithms();
  },

  methods: {
    setCurrentAlgorithm: (payload) => f7.store.dispatch("setCurrentSelectedAlgorithm", payload),

    async getAlgorithms() {
      try {
        const { data } = await algorithmsList();

        this.algorithms = [...data];
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },

    algorithmCardClasses(isActive) {
      return isActive ? "text-gray-dark" : "text-gray";
    },

    algorithmIconClasses(isActive) {
      return isActive ? "" : "_disabled";
    },

    redirectToSelectedAlgorithm(algorithm) {
      const parsedAlgorithm = toRaw(algorithm);

      this.setCurrentAlgorithm(parsedAlgorithm);

      return this.f7router.navigate({ name: "OutcomeHome", params: { id: parsedAlgorithm.id } });
    },
  },
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
.algorithm-list-button {
  height: 80px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-transform: unset;
}
</style>
