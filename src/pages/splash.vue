<template>
  <f7-page name="splash">
    <div class="d-flex flex-column align-items-center justify-content-center wrapper">
      <svg width="123" height="135">
        <image class="logo" xlink:href="/assets/Logo.svg" />
      </svg>
      <h1 class="fw-bold text-primary mb-0">OUTb</h1>
    </div>
  </f7-page>
</template>
<script>
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  mounted() {
    setTimeout(() => {
      this.f7router.navigate("/first/");
    }, 1000);
  },

  data() {
    return {
      count: 0,
    };
  },

  methods: {},
};
</script>
<style scoped>
.wrapper {
  padding-top: 240px;
}
.logo {
  width: 123px;
  height: 135px;
}
</style>
