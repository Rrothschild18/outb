<template>
  <f7-page name="OutcomeForm" class="OutcomeForm">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <f7-icon material="arrow_back" class="back-arrow" size="30px" @click="f7router.back()"></f7-icon>
          <h4 class="mb-0 fw-bold">Register outcome</h4>
        </div>
      </template>
    </f7-navbar>

    <f7-block class="mt-3 mb-2">
      <section class="form">
        <h5 class="fw-bold">Passos:</h5>

        <Stepper v-bind="stepperConfig" id="top" />

        <f7-tabs animated :style="handleTabStylesByStep">
          <f7-tab id="tab-1" tab-active>
            <!-- STEP 1 -->
            <f7-row>
              <h5>Dados basicos</h5>
              <form>
                <f7-row v-if="hasFields">
                  <f7-col
                    :width="patientFirstStepColumns[fieldName]"
                    class="mb-3"
                    v-for="(fieldName, key) of patientFirstStepFields"
                    :key="key"
                  >
                    <f7-list no-hairlines class="m-0" v-if="handleInputCheckType(fieldName)">
                      <f7-list-input
                        :name="fields[fieldName].name"
                        :label="fields[fieldName].label"
                        :type="fields[fieldName].type"
                        :placeholder="fields[fieldName].label"
                        v-model:value="values[fields[fieldName].name]"
                        floating-label
                        outline
                      >
                        <option
                          v-for="(option, optionKey) of fields[fieldName].options"
                          :key="optionKey"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </f7-list-input>
                    </f7-list>

                    <f7-list no-hairlines class="m-0" v-if="isRadio(fieldName)">
                      <small class="w-100 fw-bold d-block">{{ fields[fieldName].label }}</small>

                      <div
                        v-for="(radio, radioKey) of fields[fieldName].options"
                        :key="radioKey"
                        class="d-flex align-items-center mb-3"
                      >
                        <label :for="fields[fieldName].name" class="ms-2 me-1">{{ radio.label }}</label>
                        <f7-radio
                          :name="fields[fieldName].name"
                          :value="radio.value"
                          :checked="true"
                          @change="handleRadioChange($event, fieldName)"
                        >
                        </f7-radio>
                      </div>
                    </f7-list>
                  </f7-col>
                </f7-row>
              </form>

              <f7-col width="100">
                <f7-button fill class="Button w-100" tab-link="#tab-2" @click="nextStep()">
                  <span class="text-capitalize">Prosseguir</span>
                </f7-button>
              </f7-col>
            </f7-row>
          </f7-tab>
          <!-- STEP 2 -->
          <f7-tab id="tab-2">
            <f7-row>
              <h5>Dados médicos</h5>

              <form>
                <f7-row v-if="hasFields">
                  <f7-col
                    :width="patientSecondStepColumns[fieldName]"
                    class="mb-3"
                    v-for="(fieldName, key) of patientSecondStepFields"
                    :key="key"
                  >
                    <f7-list no-hairlines class="m-0">
                      <f7-list-input
                        :name="fields[fieldName].name"
                        :label="fields[fieldName].label"
                        :type="fields[fieldName].type"
                        :placeholder="fields[fieldName].label"
                        v-model:value="values[fields[fieldName].name]"
                        floating-label
                        outline
                      >
                        <option
                          v-for="(option, optionKey) of fields[fieldName].options"
                          :key="optionKey"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </f7-list-input>
                    </f7-list>
                  </f7-col>
                </f7-row>
              </form>
            </f7-row>

            <f7-col width="100">
              <f7-button fill class="Button w-100 mb-2" tab-link="#tab-3" @click="nextStep()">
                <span class="text-capitalize">Prosseguir</span>
              </f7-button>
              <f7-button outline class="Button w-100" tab-link="#tab-1" @click="backStep()">
                <span class="text-capitalize">Voltar</span>
              </f7-button>
            </f7-col>
          </f7-tab>

          <!-- STEP 3 -->
          <f7-tab id="tab-3">
            <f7-row>
              <h5>Dados sobre a TB e comorbidades</h5>

              <form>
                <f7-row v-if="hasFields">
                  <f7-col
                    :width="patientThirdStepColumns[fieldName]"
                    class="mb-3"
                    v-for="(fieldName, key) of patientThirdStepFields"
                    :key="key"
                  >
                    <f7-list no-hairlines class="m-0" v-if="handleInputCheckType(fieldName)">
                      <f7-list-input
                        :name="fields[fieldName].name"
                        :label="fields[fieldName].label"
                        :type="fields[fieldName].type"
                        :placeholder="fields[fieldName].label"
                        v-model:value="values[fields[fieldName].name]"
                        floating-label
                        outline
                      >
                        <option
                          v-for="(option, optionKey) of fields[fieldName].options"
                          :key="optionKey"
                          :value="option.value"
                        >
                          {{ option.label }}
                        </option>
                      </f7-list-input>
                    </f7-list>

                    <f7-list no-hairlines class="m-0" v-if="isRadio(fieldName)">
                      <small class="w-100 fw-bold d-block">{{ fields[fieldName].label }}</small>

                      <div
                        v-for="(radio, radioKey) of fields[fieldName].options"
                        :key="radioKey"
                        class="d-flex align-items-center mb-3"
                      >
                        <label :for="fields[fieldName].name" class="ms-2 me-1">{{ radio.label }}</label>
                        <f7-radio
                          :name="fields[fieldName].name"
                          :value="radio.value"
                          :checked="radio.value === values[fieldName]"
                          @change="handleRadioChange($event, fieldName)"
                        >
                        </f7-radio>
                      </div>
                    </f7-list>
                  </f7-col>
                </f7-row>
              </form>

              <f7-col width="100">
                <f7-button fill class="Button w-100 mb-2" @click="onSubmissionForm()">
                  <span class="text-capitalize">Finalizar</span>
                </f7-button>
                <f7-button outline class="Button w-100" tab-link="#tab-2" @click="backStep()">
                  <span class="text-capitalize">Voltar</span>
                </f7-button>
              </f7-col>
            </f7-row>
          </f7-tab>
        </f7-tabs>
      </section>
    </f7-block>
  </f7-page>
</template>
<script>
import { f7 } from "framework7-vue";

import {
  outcomesFields,
  createOutcomePatient,
  outcomePatientById,
  lastOutcomeStatusByPatientId,
  newStatus,
  patchStatus,
  getStatusByPatientId,
} from "../../../services";

import { toRaw } from "vue";

export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  data() {
    return {
      fields: {},
      values: {
        HIV: false,
        DIABETES: false,
        ALCOOLISMO: false,
        DOENCA_MENTAL: false,
        USO_DROGAS: false,
        TABAGISMO: false,
        SEXO: "",
        MUDANCA_ESQUEMA: false,
        USO_DROGAS: false,
        MUDANCA_ESQUEMA: false,
        OUTRAS_DOENCAS_IMUNO: false,
        AIDS: false,
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

  computed: {
    algorithmId() {
      return f7.store.state.algorithm.id;
    },

    hasFields() {
      return !!Object.keys(this.fields).length;
    },

    patientId() {
      return this.f7route.params.id;
    },

    hasFieldOptions(field) {
      return !!field.options;
    },

    backTab() {
      return this.stepperConfig.currentStep === 0 ? `#tab${this.stepperConfig.currentStep - 1}` : null;
    },

    patientFirstStepFields() {
      return [
        "name",
        "TIPO_OCUPACAO",
        "IDADE",
        "CODIGO_TRATAMENTO_ANTERIOR",
        "MUNICIPIO_RESIDENCIA",
        // "FAIXA_ETARIA", Removido por nao precisar preencher
        "RACA_COR",
        "SEXO",
        this.showFieldPregnantField(),
        "ESCOLARIDADE",
        "TEMPO_TRAMENTO_ANTERIOR",
        "SITUACAO_ATUAL",
        "TOTCOMUNIC",
        "COMUNICEXA",
        "COMUNICDO",
      ].filter((fieldName) => fieldName !== null);
    },

    patientFirstStepColumns() {
      return {
        name: 100,
        TIPO_OCUPACAO: 50,
        // FAIXA_ETARIA: 50,
        IDADE: 50,
        MUNICIPIO_RESIDENCIA: 50,
        RACA_COR: 50,
        SEXO: 50,
        GESTANTE: 50,
        ESCOLARIDADE: 50,
        SITUACAO_ATUAL: 100,
        CODIGO_TRATAMENTO_ANTERIOR: 100,
        TEMPO_TRAMENTO_ANTERIOR: 50,
        TOTCOMUNIC: 100,
        COMUNICEXA: 100,
        COMUNICDO: 100,
      };
    },

    patientSecondStepFields() {
      return [
        "INSTITUTO_TRATAMENTO",
        "TIPO_CASO",
        "FORMA_CLINICA_1",
        "CLASSIFICACAO",
        "BACILOSCOPIA_ESCARRO",
        "DESCOBERTA",
        "TIPO_TRATAMENTO",
        "CULTURA_ESCARRO",
        this.showFieldBasedOnOtherIsAnswered("CULTURA_ESCARRO", "CULTURA_OUTRO_MATERIAL"),
        "RX_TORAX",
        this.showFieldBasedOnOtherIsAnswered("RX_TORAX", "RX_OUTRO"),
        "NECROPSIA",
      ].filter((fieldName) => fieldName !== null);
    },

    patientSecondStepColumns() {
      return {
        INSTITUTO_TRATAMENTO: 100,
        TIPO_CASO: 100,
        FORMA_CLINICA_1: 100,
        DESCOBERTA: 100,
        TIPO_TRATAMENTO: 100,
        CLASSIFICACAO: 50,
        BACILOSCOPIA_ESCARRO: 50,
        CULTURA_ESCARRO: 50,
        CULTURA_OUTRO_MATERIAL: 50,
        RX_TORAX: 50,
        RX_OUTRO: 50,
        NECROPSIA: 50,
        NRO_DOSES_PRI: 100,
        NRO_DOSES_SEG: 100,
        MOTIVO_INTERNACAO_1: 100,
        TIPO_SAIDA_1: 100,
      };
    },

    patientThirdStepFields() {
      return [
        "TESTE_SENSIBILIDADE",
        "RESISTENCIA",
        "HISTOPATOLOGIA",
        "ESQUEMA_INICIAL",
        "MUDANCA_ESQUEMA",
        this.showFieldBasedOnOtherIsAnswered("MUDANCA_ESQUEMA", "MOTIVO_MUDANCA_ESQUEMA"),
        this.showFieldBasedOnOtherIsAnswered("MUDANCA_ESQUEMA", "ESQUEMA_ATUAL"),
        "HIV",
        "DIABETES",
        "ALCOOLISMO",
        "USO_DROGAS",
        "TABAGISMO",
        "OUTRAS_DOENCAS_IMUNO",
        "AIDS",
        "DOENCA_MENTAL",
        "NRO_DOSES_PRI",
        "NRO_DOSES_SEG",
        "MOTIVO_INTERNACAO_1",
        "TIPO_SAIDA_1",
      ].filter((fieldName) => fieldName !== null);
    },

    patientThirdStepColumns() {
      return {
        HIV: 100,
        DIABETES: 100,
        ALCOOLISMO: 100,
        DOENCA_MENTAL: 100,
        USO_DROGAS: 100,
        TABAGISMO: 100,
        OUTRAS_DOENCAS_IMUNO: 100,
        AIDS: 100,
        TESTE_SENSIBILIDADE: 100,
        ESQUEMA_INICIAL: 100,
        MOTIVO_MUDANCA_ESQUEMA: 100,
        ESQUEMA_ATUAL: 100,
        MUDANCA_ESQUEMA: 100,
        RESISTENCIA: 100,
        HISTOPATOLOGIA: 100,
        DOENCA_MENTAL: 100,
        NRO_DOSES_PRI: 100,
        NRO_DOSES_SEG: 100,
        MOTIVO_INTERNACAO_1: 100,
        TIPO_SAIDA_1: 100,
      };
    },

    isEditMode() {
      const path = this.f7route.path;
      const pathSplitted = path.split("/");
      const action = pathSplitted[pathSplitted.length - 1];

      return action === "edit";
    },

    handleTabStylesByStep() {
      const styles = {
        maxHeight: "100%",
      };

      if (this.stepperConfig.currentStep === 0) {
        styles.maxHeight = `${600 + 72}px`;
      }

      if (this.stepperConfig.currentStep === 1) {
        styles.maxHeight = "660px";
      }

      if (this.stepperConfig.currentStep === 2) {
        styles.maxHeight = "100%";
      }

      return styles;
    },
  },

  mounted() {
    console.log(f7.store.state.algorithm.id);
    console.log(toRaw(this.f7route.params));

    this.getOutcomeFields();

    if (this.f7route.params.id) {
      this.getLastOutcomeStatusByPatientId(this.f7route.params.id);
    }
  },

  watch: {
    "stepperConfig.currentStep": (newStep, oldStep) => {
      const el = document.querySelector("#top");
      el.scrollIntoView();
    },

    "values.SEXO": {
      handler(newValue) {
        if (newValue === "M" || newValue === "") {
          this.values.GESTANTE = "";
        }
      },
    },

    "values.IDADE": {
      handler(newValue) {
        const parsedAge = this.parseAge(newValue);

        this.values.FAIXA_ETARIA = this.fields["FAIXA_ETARIA"].options.find(({ value }) => value === parsedAge).value;
      },
    },
  },

  methods: {
    nextStep() {
      if (this.stepperConfig.currentStep > this.stepperConfig.stepsNumber) {
        this.stepperConfig.currentStep = this.stepperConfig.stepsNumber;
        return;
      }

      this.stepperConfig.currentStep++;
    },

    hasOptions(field) {
      return !!field.options;
    },

    backStep() {
      if (this.stepperConfig.stepsNumber < this.stepperConfig.currentStep) {
        this.stepperConfig.currentStep = 0;
        return;
      }

      this.stepperConfig.currentStep--;
    },

    async getOutcomeFields() {
      let { data } = await outcomesFields();

      this.fields = data.fields;
    },

    async getLastOutcomeStatusByPatientId(patientId) {
      let { data } = await lastOutcomeStatusByPatientId(patientId);

      this.values = data;
    },

    async getPatientStatusById(id) {
      let { data } = await patientByStatusId(id);

      console.log(data);

      this.values = data;
    },

    async createPatientStatus(statusData) {
      let { data } = await newStatus(statusData);

      return data;
    },

    handleRadioChange(event, fieldName) {
      const value = event.target.value;

      this.values[fieldName] = value === "true";
    },

    handleInputCheckType(fieldName) {
      return ["text", "select", "number"].includes(this.fields[fieldName]?.type);
    },

    isRadio(fieldName) {
      return this.fields[fieldName].type === "radio";
    },

    async onSubmissionForm() {
      if (this.isEditMode) {
        const patientLastStatus = toRaw(this.values);
        const id = patientLastStatus.id;
        delete patientLastStatus.id;

        let newOutcomeStatus = await this.createPatientStatus({
          ...patientLastStatus,
          lastStatusId: id,
          patientId: this.patientId,
          nextStatusId: null,
          algorithmId: this.algorithmId,
          createdAt: this.dateSaoPaulo(),
        });

        patchStatus(
          {
            nextStatusId: newOutcomeStatus.id,
          },
          id
        );

        return this.f7router.navigate({ name: "OutcomeHome", params: { id: this.algorithmId } });
      }

      const { data: newPatientForList } = await createOutcomePatient({
        ...this.values,
        formId: f7.store.state.algorithm.id,
        algorithmId: this.algorithmId,
        createdAt: this.dateSaoPaulo(),
      });

      const firstOutcomeResult = await this.createPatientStatus({
        ...newPatientForList,
        lastStatusId: null,
        patientId: newPatientForList.id,
        nextStatusId: null,
        algorithmId: this.algorithmId,
        createdAt: this.dateSaoPaulo(),
      });

      console.log(newPatientForList);
      console.log(firstOutcomeResult);

      //see how to redirect correctly
      return this.f7router.navigate({ name: "OutcomeHome", params: { id: this.algorithmId } });
    },

    showFieldPregnantField() {
      return this.values?.["SEXO"] === "M" || this.values?.["SEXO"] === "" ? null : "GESTANTE";
    },

    parseAge(age) {
      const ages = [
        { key: 1, value: "01-04", index: 0 },
        { key: 4, value: "01-04", index: 1 },
        { key: 5, value: "05-09", index: 2 },
        { key: 9, value: "05-09", index: 3 },
        { key: 10, value: "10-14", index: 4 },
        { key: 14, value: "10-14", index: 5 },
        { key: 15, value: "15-19", index: 6 },
        { key: 19, value: "15-19", index: 7 },
        { key: 20, value: "20-29", index: 8 },
        { key: 29, value: "20-29", index: 9 },
        { key: 30, value: "30-39", index: 10 },
        { key: 39, value: "30-39", index: 11 },
        { key: 40, value: "40-49", index: 12 },
        { key: 49, value: "40-49", index: 13 },
        { key: 50, value: "50-59", index: 14 },
        { key: 59, value: "50-59", index: 15 },
        { key: 60, value: "60-69", index: 16 },
        { key: 69, value: "60-69", index: 17 },
        { key: 70, value: "70-79", index: 18 },
        { key: 79, value: "70-79", index: 19 },
      ];

      if (age < 4) {
        return "MENOR DE 1 ANO";
      }

      if (age > 80) {
        return "MAIOR DE 80 ANOS";
      }

      for (const { key, index } of ages) {
        const isHigherThanMin = age > key;
        const isLowerThanMax = !(age < ages[index + 1].key);

        const isBetween = isHigherThanMin && isLowerThanMax;

        if (!isBetween) {
          return ages[index].value;
          break;
        }
      }
    },

    showFieldBasedOnOtherIsAnswered(fieldNameToCompare, fieldToShow) {
      if (typeof this.values[fieldNameToCompare] === "boolean") {
        return this.values[fieldNameToCompare] ? fieldToShow : null;
      }

      return !!this.values[fieldNameToCompare]?.length ? fieldToShow : null;
    },

    dateSaoPaulo() {
      // get the current date and time
      const now = new Date();

      // convert to Sao Paulo time zone
      const options = {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };

      const saoPauloDate = now.toLocaleString("en-US", options);

      return saoPauloDate.replace(",", " ");
    },
  },
};
</script>
<style lang="scss">
.OutcomeForm {
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
