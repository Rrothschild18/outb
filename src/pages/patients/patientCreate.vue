<template>
  <f7-page name="PatientCreate" class="PatientCreate">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <f7-icon material="arrow_back" class="back-arrow ripple" size="30px" @click="f7router.back()"></f7-icon>
          <h4 class="mb-0 fw-bold">Incluir pacientes</h4>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <h4>Criar Paciente</h4>

      <section class="form">
        <h6>Passos</h6>

        <div class="stepper w-100 d-flex align-items-center justify-content-between mb-3">
          <div class="step-item d-flex align-items-center justify-content-center w-100">
            <div class="px-3 d-flex flex-column align-items-center">
              <span class="ball _filled d-flex align-items-center justify-content-center fw-bold">1</span>
              <span class="text-center text-gray-dark fw-bold">Dados básicos</span>
            </div>

            <div class="bg-primary position-relative w-100">
              <hr class="line" />
            </div>
          </div>
          <div class="step-item d-flex align-items-center justify-content-center w-100">
            <div class="px-3 d-flex flex-column align-items-center">
              <span class="ball d-flex align-items-center justify-content-center fw-bold">2</span>
              <span class="text-center text-gray-dark fw-bold">Dados médicos</span>
            </div>

            <div class="bg-primary position-relative w-100">
              <hr class="line" />
            </div>
          </div>
          <div class="step-item d-flex align-items-center justify-content-center w-100">
            <div class="px-3 d-flex flex-column align-items-center">
              <span class="ball _inactive d-flex align-items-center justify-content-center fw-bold">3</span>
              <span class="text-center text-gray-dark fw-bold">Dados da TB</span>
            </div>

            <div class="bg-primary position-relative w-100">
              <hr class="line" />
            </div>
          </div>
        </div>

        <f7-row>
          <f7-col width="100 mb-3">
            <f7-list no-hairlines class="m-0">
              <f7-list-input label="Nome" floating-label outline type="text" v-model:value="values.name" clear-button>
              </f7-list-input>
            </f7-list>
          </f7-col>
          <f7-col width="100 mb-3">
            <f7-list no-hairlines class="m-0">
              <f7-list-input
                label="Tipo ocupação"
                floating-label
                type="select"
                v-model:value="values.occupation"
                outline
              >
                <option value="-">-</option>
                <option value="Aposentado">Aposentado</option>
                <option value="Detento">Detento</option>
                <option value="Desempragado">Desempragado</option>
                <option value="Profissional">Profissional</option>
                <option value="Profissional_de_Saúde">Profissional de Saúde</option>
                <option value="Profissional_Sistema_Penitenciário">Profissional Sistema Penitenciário</option>
                <option value="Outra">Outra</option>
              </f7-list-input>
            </f7-list>
          </f7-col>
          <f7-col width="50 mb-3">
            <f7-list no-hairlines class="m-0">
              <f7-list-input label="Faixa Etaria" floating-label type="select" v-model:value="values.age" outline>
                <option value="-">-</option>
                <option value="0">Menor de 1 ano</option>
                <option value="01_04">1 a 4</option>
                <option value="05_09">5 a 9</option>
                <option value="10_14">10 a 14</option>
                <option value="15_19">15 a 19</option>
                <option value="20_29">20 a 29</option>
                <option value="30_39">30 a 39</option>
                <option value="40_49">40 a 49</option>
                <option value="50_59">50 a 59</option>
                <option value="60_69">60 a 69</option>
                <option value="70_79">70 a 79</option>
                <option value="-1">Maior de 80 anos</option>
              </f7-list-input>
            </f7-list>
          </f7-col>
          <f7-col width="50 mb-3">
            <f7-list no-hairlines class="m-0">
              <f7-list-input label="Raça/Cor" floating-label type="select" v-model:value="values.race" outline>
                <option value="-">-</option>
                <option value="Amarelo">Amarelo</option>
                <option value="Branco">Branco</option>
                <option value="Indigena">Indigena</option>
                <option value="Pardo">Pardo</option>
                <option value="Preto">Preto</option>
                <option value="Ignorado">Ignorado</option>
              </f7-list-input>
            </f7-list>
          </f7-col>
          <f7-col width="50 mb-3">
            <f7-list no-hairlines class="m-0">
              <f7-list-input label="Sexo" floating-label type="select" v-model:value="values.gender" outline>
                <option value="-">-</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </f7-list-input>
            </f7-list>
          </f7-col>
          <f7-col width="50 mb-3">
            <f7-list no-hairlines class="m-0">
              <f7-list-input label="Escolaridade" floating-label type="select" v-model:value="values.schooling" outline>
                <option value="-">-</option>
                <option value="1_3">De 1 a 3 anos</option>
                <option value="4_7">De 4 a 7 anos</option>
                <option value="8_11">De 8 a 11 anos</option>
                <option value="12_14">De 12 a 14 anos</option>
                <option value="15">15 ou mais anos</option>
                <option value="Ignorado">Ignorado</option>
                <option value="Nenhuma">Nenhuma</option>
              </f7-list-input>
            </f7-list>
          </f7-col>
        </f7-row>
      </section>
      <f7-button fill class="Button w-100">
        <span class="text-capitalize">Prosseguir</span>
      </f7-button>
      <pre>{{ values }}</pre>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  mounted() {},

  data() {
    return {
      values: {
        name: "",
        age: "-",
        race: "-",
        gender: "-",
        schooling: "-",
        occupation: "-",
      },
    };
  },

  methods: {},
};
</script>
<style lang="scss">
.PatientCreate {
  .back-arrow {
    position: absolute;
    left: 16px;
  }

  .form {
    .list .item-content {
      padding-left: 0;
    }

    .list .item-inner {
      padding: 0;
    }
  }

  .stepper {
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

        &._filled {
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
}
</style>
