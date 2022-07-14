<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar small :sliding="false">
      <f7-nav-title sliding>Outb</f7-nav-title>
      <f7-nav-title-large>Outb</f7-nav-title-large>
    </f7-navbar>

    {{ count }}
    <f7-button @click="handleClick()">Button</f7-button>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },

  methods: {
    handleClick() {
      this.count++;
    },
  },
};
</script>
