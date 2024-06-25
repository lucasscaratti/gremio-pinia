<template>
  <q-page class="q-pa-md bg-color">

    <div class="logo-container">
      <img class="gremio-logo" src="~assets\Gremio_logo.png">
    </div>

    <h6 class="q-ma-xs">Histórico de Avaliações: </h6>

    <q-card v-for="(media, index) in mediasTime" :key="index">
      <q-card-section class="q-mb-sm">
        <div><b>Adversário:</b> {{ listaAdversarios[index] }}</div>
        <div><b>Média do Time:</b> {{ media.toFixed(2) }}</div>
      </q-card-section>
    </q-card>

    <q-card v-if="mediasTime.length > 0">
      <q-card-section class="q-mt-md">
        <div><b>Média Geral:</b> {{ mediaMediasTime.toFixed(2) }}</div>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script>
import { computed } from 'vue';
import { useJogadoresStore } from '../stores/useJogadoresStore';

export default {
  setup() {
    const store = useJogadoresStore();

    const mediasTime = computed(() => store.mediasTime);
    const listaAdversarios = computed(() => store.listaAdversarios);

    // Calcula a média das médias do time
    const mediaMediasTime = computed(() => {
      const totalMedias = store.mediasTime.reduce((acc, curr) => acc + curr, 0);
      return store.mediasTime.length > 0 ? totalMedias / store.mediasTime.length : 0;
    });

    return {
      mediasTime,
      mediaMediasTime,
      listaAdversarios
    };
  }
};
</script>

<style scoped>
.q-card {
  max-width: 600px;
  margin: 0 auto;
}

.logo-container {
  position: relative;
  text-align: center;
}

.gremio-logo {
  max-height: 200px;
  width: auto;
}
</style>
