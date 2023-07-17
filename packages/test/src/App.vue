<script setup lang="ts">
import { RouterView } from "vue-router";
// import { Card } from 'simple-ui-vue'
import test from "./components/test.vue";
</script>

<template>
  <test></test>
  <RouterView />
</template>

<style lang="less">
@import "./index.less";
</style>
