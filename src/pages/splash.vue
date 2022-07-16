<template>
  <f7-page name="splash">
    <div
      class="d-flex flex-column align-items-center justify-content-center wrapper"
    >
      <img src="assets/logo.png" alt="Logo" />
      <h1 class="fw-bold text-primary mb-0">OUTb</h1>
      <!-- <f7-link href="/first/">First</f7-link> -->
      <!-- <span @click="f7router.navigate('/first/')">TESTEEE</span> -->
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
</style>
