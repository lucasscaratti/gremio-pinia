<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal class="text-white" height-hint="98">

      <div class="stripe stripe-top"></div>
      <div class="stripe stripe-middle"></div>
      <div class="stripe stripe-bottom"></div>

      <q-toolbar>
        <img class="absolute-center full-height" src="~assets\Gremio_logo.png">
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class=" text-white footer">
      <q-tabs v-model="tab" class="text-white">
        <q-route-tab name="historico" label="Histórico" icon="group" to="/historico" exact />
        <q-route-tab name="avaliacao" label="Avaliação" icon="star" to="/avaliacao" exact />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      tab: ref('avaliacao')
    }
  }
}
</script>

<style scoped>
.stripe {
  position: absolute;
  width: 100%;
  height: 33%;
}

.stripe-top {
  top: 0;
  background-color: black;
}

.stripe-middle {
  top: 33%;
  background-color: white;
}

.stripe-bottom {
  bottom: 0;
  background-color: #0D80BF;
}

.footer {
  background-color: #0D80BF;
}
</style>
