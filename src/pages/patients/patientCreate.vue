<template>
  <f7-page name="PatientCreate" class="PatientCreate">
    <f7-navbar no-shadow class="shadow-sm">
      <template #default>
        <div class="w-100 bg-white h-100 d-flex align-items-center justify-content-center">
          <f7-icon material="arrow_back" class="back-arrow" size="30px" @click="f7router.back()"></f7-icon>
          <h4 class="mb-0 fw-bold">Cadastrar paciente</h4>
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
                  <f7-col width="100">
                    <f7-button fill class="Button w-100" tab-link="#tab-2" @click="nextStep()">
                      <span class="text-capitalize">Prosseguir</span>
                    </f7-button>
                  </f7-col>
                </f7-row>
              </form>
            </f7-row>
          </f7-tab>

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

              <f7-col width="100">
                <f7-button fill class="Button w-100 mb-2" tab-link="#tab-3" @click="nextStep()">
                  <span class="text-capitalize">Prosseguir</span>
                </f7-button>
                <f7-button outline class="Button w-100" tab-link="#tab-1" @click="backStep()">
                  <span class="text-capitalize">Voltar</span>
                </f7-button>
              </f7-col>
            </f7-row>
          </f7-tab>

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

                <f7-col width="100">
                  <f7-button fill class="Button w-100 mb-2" @click="createPatient()">
                    <span class="text-capitalize">Finalizar</span>
                  </f7-button>
                  <f7-button outline class="Button w-100" tab-link="#tab-2" @click="backStep()">
                    <span class="text-capitalize">Voltar</span>
                  </f7-button>
                </f7-col>
              </form>
            </f7-row>
          </f7-tab>
        </f7-tabs>
      </section>
    </f7-block>
  </f7-page>
</template>
<script>
import { patientFields } from "../../services";

export default {
  props: {
    f7route: Object,
    f7router: Object,
  },

  data() {
    return {
      fields: {},
      values: {
        name: "",
        occupation: "",
        age: "",
        race: "",
        gender: "",
        schooling: "",
        currentSituation: "",
        lastTreatmentCode: "",
        lastTreatment: "",
        totComunic: "",
        totComunicEx: "",
        totComunicAd: "",
        instTrat: "",
        type: "",
        manifest: "",
        manifestTwo: "",
        manifestThree: "",
        classification: "",
        discoveryType: "",
        bac: "",
        cultEsc: "",
        cultOutro: "",
        rx: "",
        rxoutro: "",
        necropsia: "",
        hiv: false,
        diabetes: false,
        alcoolismo: false,
        mental: false,
        drogadicao: false,
        tabagismo: false,
        aids: "",
        sensibility: "",
        treatment: "",
        initialExposure: "",
        exposureChange: false,
        actualExposure: "",
        actualExposureReason: "",
        resistencia: "",
        histo: "",
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
    hasFields() {
      return !!Object.keys(this.fields).length;
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
        "occupation",
        "lastTreatmentCode",
        "age",
        "race",
        "gender",
        "schooling",
        "lastTreatment",
        "currentSituation",
        "totComunic",
        "totComunicEx",
        "totComunicAd",
      ];
    },

    patientFirstStepColumns() {
      return {
        name: 100,
        occupation: 100,
        age: 50,
        race: 50,
        gender: 50,
        schooling: 50,
        currentSituation: 50,
        lastTreatmentCode: 100,
        lastTreatment: 50,
        totComunic: 100,
        totComunicEx: 100,
        totComunicAd: 100,
      };
    },

    patientSecondStepFields() {
      return [
        "instTrat",
        "type",
        "manifest",
        "manifestTwo",
        "manifestThree",
        "classification",
        "bac",
        "discoveryType",
        "cultEsc",
        "cultOutro",
        "rx",
        "rxoutro",
        "necropsia",
      ];
    },

    patientSecondStepColumns() {
      return {
        instTrat: 100,
        type: 100,
        manifest: 100,
        manifestTwo: 50,
        manifestThree: 50,
        discoveryType: 100,
        classification: 50,
        bac: 50,
        cultEsc: 50,
        cultOutro: 50,
        rx: 100,
        rxoutro: 50,
        necropsia: 50,
      };
    },

    patientThirdStepFields() {
      return [
        "sensibility",
        "treatment",
        "initialExposure",
        "resistencia",
        "histo",
        "actualExposure",
        "actualExposureReason",
        "exposureChange",
        "hiv",
        "diabetes",
        "alcoolismo",
        "drogadicao",
        "tabagismo",
        "aids",
        "mental",
      ];
    },

    patientThirdStepColumns() {
      return {
        hiv: 100,
        diabetes: 100,
        alcoolismo: 100,
        mental: 100,
        drogadicao: 100,
        tabagismo: 100,
        aids: 100,
        sensibility: 100,
        treatment: 100,
        initialExposure: 100,
        exposureChange: 100,
        actualExposure: 100,
        actualExposureReason: 100,
        resistencia: 100,
        histo: 100,
      };
    },

    handleTabStylesByStep() {
      const styles = {
        maxHeight: "100%",
      };

      if (this.stepperConfig.currentStep === 0) {
        styles.maxHeight = "610px";
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
    this.getPatientFields();
  },

  watch: {
    "stepperConfig.currentStep": (newStep, oldStep) => {
      const el = document.querySelector("#top");
      el.scrollIntoView();
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

    async getPatientFields() {
      let { data } = await patientFields();

      this.fields = data.fields;
    },

    handleRadioChange(event, fieldName) {
      const value = event.target.value;

      this.values[fieldName] = value === "true";
    },

    handleInputCheckType(fieldName) {
      return (
        this.fields[fieldName].type === "input" ||
        this.fields[fieldName].type === "select" ||
        this.fields[fieldName].type === "text"
      );
    },

    isRadio(fieldName) {
      return this.fields[fieldName].type === "radio";
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
