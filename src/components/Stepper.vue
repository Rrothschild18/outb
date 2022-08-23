<template>
  <div class="Stepper w-100 d-flex align-items-center justify-content-between mb-3">
    <div
      class="step-item d-flex align-items-center justify-content-center w-100"
      v-for="(step, key) of stepsContent"
      :key="key"
    >
      <div class="d-flex flex-column align-items-center">
        <span class="ball d-flex align-items-center justify-content-center fw-bold" :class="handleBallClasses(key)">
          {{ key }}</span
        >
        <span class="text-center text-gray-dark fw-bold">{{ step.title }}</span>
      </div>

      <div class="bg-primary position-relative w-100">
        <hr class="line" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentStep: {
      default: 0,
      type: Number,
    },

    stepsNumber: {
      default: 0,
      type: Number,
    },

    stepsContent: {
      default: () => [],
      type: Array,
    },
  },

  computed: {},

  methods: {
    handleBallClasses(key) {
      if (key > this.currentStep) return "_inactive";

      if (key < this.currentStep) return "_faded";

      return "";
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.Stepper {
  height: fit-content;

  .step-item {
    .ball {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: #4648ff;

      &._inactive {
        background-color: #777777;
      }

      &._faded {
        background-color: rgba(70, 72, 255, 0.65);
      }
    }

    .line {
      position: absolute;
      width: 110%;
      margin: 0;
      top: -20px;
      left: -7px;
    }

    span {
      color: #fff;
      font-size: 12px;
    }

    &:last-child {
      .line {
        display: none;
      }
    }
  }

  > :last-child :is(div) {
    padding-right: 0px !important;
  }

  > :last-child {
    width: unset !important;
  }

  > :first-child :is(div) {
    padding-left: 0px !important;
  }
}
</style>
