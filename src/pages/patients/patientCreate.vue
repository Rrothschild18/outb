<template>
  <f7-page name="PatientCreate" class="PatientCreate">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <f7-link tab-link="#tab-1">
            <f7-icon material="arrow_back" class="back-arrow ripple" size="30px" @click="handleBackEvents()"></f7-icon>
          </f7-link>
          <h4 class="mb-0 fw-bold">Incluir pacientes</h4>
        </div>
      </template>
    </f7-navbar>
    <f7-block class="mt-3">
      <h4>Criar Paciente</h4>

      <section class="form">
        <h6>Passos</h6>

        <Stepper v-bind="stepperConfig" />

        <f7-tabs animated>
          <f7-tab id="tab-1" tab-active>
            <!-- STEP 1 -->
            <f7-row>
              <f7-col width="100 mb-3">
                <f7-list no-hairlines class="m-0">
                  <f7-list-input
                    label="Nome"
                    floating-label
                    outline
                    type="text"
                    v-model:value="values.name"
                    clear-button
                  >
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
                  <f7-list-input
                    label="Escolaridade"
                    floating-label
                    type="select"
                    v-model:value="values.schooling"
                    outline
                  >
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
              <f7-col width="100 mb-3">
                <f7-list no-hairlines class="m-0">
                  <f7-list-input
                    label="Código do tratamento anterior"
                    floating-label
                    type="select"
                    v-model:value="values.lastTreatmentCode"
                    outline
                  >
                    <option value="new">Novo. Não tratou</option>
                    <option value="return">Sim, alta cura. Reicidiva</option>
                    <option value="returnAbandon">Retorno abandono</option>
                    <option value="retreatmentAbandon">Sim, alta abandono.</option>
                    <option value="unknow">Não sabe</option>
                    <option value="death">Obito</option>
                    <option value="noData">Sem informação</option>
                  </f7-list-input>
                </f7-list>
              </f7-col>
              <f7-col width="100 mb-3">
                <f7-list no-hairlines class="m-0">
                  <f7-list-input
                    label="Situação atual"
                    floating-label
                    type="select"
                    v-model:value="values.currentSituation"
                    outline
                  >
                    <option value="abandon">Abandono</option>
                    <option value="primaryAbandon">Abandono Primário</option>
                    <option value="healed">Cura</option>
                    <option value="inOutpatientTreatment">Em tratamento ambulatorial</option>
                    <option value="hospitalized">Em Tratamento Internado</option>
                    <option value="deathOrResistence">Falência/Resistência</option>
                    <option value="absentee">Faltoso</option>
                    <option value="mudDiag">Mud Diag</option>
                    <option value="mudDiag2">Mud Esquema Intoler/Toxicidade</option>
                    <option value="nonTBDeath">Óbito NTB</option>
                    <option value="TBDeath">Óbito TB</option>
                  </f7-list-input>
                </f7-list>
              </f7-col>
              <f7-col width="100">
                <f7-button fill class="Button w-100" tab-link="#tab-2" @click="nextStep()">
                  <span class="text-capitalize">Prosseguir</span>
                </f7-button>
                <pre>{{ values }}</pre>
              </f7-col>
            </f7-row>
          </f7-tab>

          <f7-tab id="tab-2">
            <!-- STEP 2 -->
            <f7-row>
              <h2>STEP 2</h2>
              <f7-col width="100">
                <f7-button fill class="Button w-100" tab-link="#tab-3">
                  <span class="text-capitalize">Prosseguir</span>
                </f7-button>
                <pre>{{ values }}</pre>
              </f7-col>
            </f7-row>
          </f7-tab>

          <f7-tab id="tab-3">
            <!-- STEP 2 -->
            <f7-row>
              <h2>STEP 3</h2>
            </f7-row>
          </f7-tab>
        </f7-tabs>
      </section>
    </f7-block>
  </f7-page>
</template>
<script>
import Stepper from "../../components/Stepper.vue";

export default {
  components: {
    Stepper,
  },

  props: {
    f7route: Object,
    f7router: Object,
  },

  mounted() {},

  computed: {
    backTab() {
      return this.stepperConfig.currentStep === 0 ? `#tab${this.stepperConfig.currentStep - 1}` : null;
    },
  },

  data() {
    return {
      formStep: 1,
      values: {
        name: "",
        age: "-",
        race: "-",
        gender: "-",
        schooling: "-",
        occupation: "-",
        lastTreatmentCode: "",
        currentSituation: "",
      },

      stepperConfig: {
        currentStep: 0,
        stepsNumber: 3,
        stepsContent: [
          {
            title: "Dados básicos",
          },
          {
            title: "Dados médicos",
          },
          {
            title: "Dados da TB",
          },
        ],
      },
    };
  },

  watch: {},

  methods: {
    nextStep() {
      this.stepperConfig.currentStep++;
    },

    handleBackEvents() {
      if (this.stepperConfig === 0) f7router.back();

      this.stepperConfig.currentStep--;
    },
  },
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
}
</style>
