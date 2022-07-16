<template>
  <f7-page name="firstAccess">
    <f-block>
      <f-row>
        <f-col>
          <div class="d-flex flex-column align-items-center justify-content-center wrapper">
            <svg width="123" height="135">
              <image class="logo" xlink:href="/assets/Logo.svg" />
            </svg>
            <h1 class="fw-bold text-primary mb-0">OUTb</h1>

            <div class="d-flex actions">
              <f7-button outline class="Button me-5">
                <span>Solicitar acesso</span>
              </f7-button>

              <f7-button fill class="Button" @click="f7router.navigate('/login/')">
                <span>Entrar</span>
              </f7-button>
            </div>
          </div>
        </f-col>
      </f-row>
    </f-block>
  </f7-page>
</template>
<script>
export default {
  props: {
    f7router: Object,
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
  padding-top: 25vh;
}
.actions {
  margin-top: 15vh;
}
.Button {
  width: 160px;
  height: 45px;
  border-radius: 4px;
  font-size: 16px;
  text-transform: unset;
}
.logo {
  width: 123px;
  height: 135px;
}
</style>
