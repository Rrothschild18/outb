<template>
  <f7-page name="login">
    <f7-block>
      <f7-icon material="arrow_back" size="30px" @click="f7router.back()"></f7-icon>
      <f7-row>
        <div class="d-flex flex-column align-items-center justify-content-center wrapper">
          <div class="d-flex align-items-center">
            <svg width="84" height="92">
              <image class="logo" xlink:href="/assets/LoginLogo.svg" />
            </svg>
            <h1 class="fw-bold text-primary ms-4 mb-0">OuTB</h1>
          </div>

          <form action="" class="w-100 Form">
            <f7-row>
              <f7-col width="100">
                <f7-list no-hairlines class="m-0">
                  <f7-input label="E-mail" type="email" placeholder="E-mail" clear-button> </f7-input>
                </f7-list>
              </f7-col>
              <f7-col width="100 ">
                <f7-list no-hairlines class="m-0">
                  <f7-input label="Senha" class="mt-6" type="password" placeholder="Senha" clear-button> </f7-input>
                </f7-list>
              </f7-col>

              <f7-col width="100 ">
                <div class="d-flex justify-content-end mt-4">
                  <span class="text-primary">Esqueceu a senha?</span>
                </div>
              </f7-col>
            </f7-row>
          </form>

          <div class="d-flex flex-column actions w-100">
            <f7-button fill @click="f7router.navigate('/home/')" class="Button w-100">
              <span>Entrar</span>
            </f7-button>
            <f7-button class="Button w-100">
              <span>Solicitar acesso</span>
            </f7-button>
          </div>
        </div>
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
    return {
      count: 0,
    };
  },

  methods: {},
};
</script>
<style scoped>
.wrapper {
  padding-top: 15vh;
}
.Form {
  margin-top: 81px;
}
.actions {
  margin-top: 60px;
}
.Button {
  width: 160px;
  height: 45px;
  border-radius: 4px;
  font-size: 16px;
  text-transform: unset;
}
input {
  height: 41px;
}
</style>
