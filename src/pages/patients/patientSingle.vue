<template>
  <f7-page name="PatientSingle">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <f7-icon material="arrow_back" class="back-arrow ripple" size="30px" @click="f7router.back()"></f7-icon>
          <h4 class="mb-0 fw-bold">Paciente 18062022</h4>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <section>
        <h4>Dados paciente</h4>

        <Box>
          <f7-row>
            <f7-col width="100 mb-3">
              <h6 class="mb-0 fw-bold">Nome</h6>
              <span>Alberto David Rothschild</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Faixa etária</h6>
              <span>50-60</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Raça/Cor</h6>
              <span>Branco</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Sexo</h6>
              <span>Masculino</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Escolaridade</h6>
              <span>15 anos ou mais</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Ocupação</h6>
              <span>Aposentado</span>
            </f7-col>
          </f7-row>
        </Box>

        <Box>
          <f7-row>
            <f7-col width="100 mb-3">
              <h6 class="mb-0 fw-bold">Codigo tratamento anterior</h6>
              <span>9293231</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Tratou a</h6>
              <span>2 anos</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Situacao</h6>
              <span>Tratamento Ambulatorial</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Tipo</h6>
              <span>Recidiva</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Forma clinica</h6>
              <span>Ganglionar Periférica</span>
            </f7-col>
            <f7-col width="50 mb-3">
              <h6 class="mb-0 fw-bold">Descoberta</h6>
              <span>Busca Ativa na Comunidade</span>
            </f7-col>
          </f7-row></Box
        >
      </section>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  mounted() {
    console.log(this.f7route.params.id);
  },

  data() {
    return {
      iconName: "exapand_more",
    };
  },

  methods: {
    handleOpen() {
      this.iconName = "exapand_less";
    },
  },

  computed: {},
};
</script>
<style scoped lang="scss">
.back-arrow {
  position: absolute;
  left: 16px;
}

.status-card {
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #ffd500;
    width: 5px;
    border-radius: 4px 0 0 4px;
  }
}

.chip {
  background-color: #ffd500;
}

.info {
  font-size: 12px;
  text-transform: uppercase;
  height: 28px;
}

.info-value {
  color: #000;
}

.status-icon {
  color: #000;
}

.status-button {
  height: 144px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-transform: unset;
  padding: 16px;
}

.timeline {
  .timeline-item {
    overflow: visible;

    .circle {
      position: absolute;
      left: -22px;
      top: -13px;
      width: 16px;
      height: 16px;
      background-color: red;
      border-radius: 50%;
      z-index: 99;

      &._disabled {
        width: 12px;
        height: 12px;
        left: -20px;
        opacity: 0.7;
      }
    }

    .line {
      position: absolute;
      left: -15px;
      width: 2px;
      height: 90%;
      background-color: red;
      z-index: 99;

      &._disabled {
        opacity: 0.7;
      }
    }
  }
}
</style>
