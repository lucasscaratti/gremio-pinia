<template>
  <q-page class="q-pa-md q-mt-none row items-start q-gutter-md bg-color">

    <q-card class="my-card" flat bordered style="width: 100%;">
      <q-card-section horizontal style="align-items: center;">
        <q-img :src="jogador.foto" style="width: 100%; max-width: 300px;" />

        <q-card-section>
          <div class="text-h5"><b>{{ jogador.nome }} #{{ jogador.numero }}</b></div>
          <div><b>Posição:</b> {{ jogador.posicao }}</div>
          <div><b>Nome Completo:</b> {{ jogador.nomeCompleto }}</div>
          <div><b>Data de Nascimento:</b> {{ jogador.dataNascimento }}</div>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card" flat bordered style="width: 100%; align-items: center;">
      <q-card-section horizontal style="align-items: center;">
        <q-card-section class="half-width">
          <div><b>Naturalidade:</b> {{ jogador.naturalidade }}</div>
          <div><b>Altura:</b> {{ jogador.altura }}</div>
          <div><b>Gols pelo clube:</b> {{ jogador.gols }}</div>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="half-width">
          <div><b>Clube Anterior:</b> {{ jogador.clubeAnterior }}</div>
          <div><b>Pé:</b> {{ jogador.pe }}</div>
          <div><b>Data de Estréia:</b> {{ jogador.dataEstreia }}</div>
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card" style="width: 100%;">
      <q-card-section>
        <div class="text-h6 text-center">Histórico de Avaliações</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-item v-for="(nota, index) in jogador.notas" :key="index">
          <q-item-section>
            <b>VS. {{ adversarios[index] }}</b>
          </q-item-section>
          <q-item-section><b>{{ nota }}</b></q-item-section>
        </q-item>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-none">
        <p class="text-center q-mb-none q-pt-md"><b>Média: {{ jogador.media.toFixed(2) }}</b></p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useJogadoresStore } from '../stores/useJogadoresStore';

export default {
  setup() {
    const store = useJogadoresStore();
    const route = useRoute();
    const jogadorId = Number(route.params.id);

    const jogador = computed(() => store.jogadores.find(j => j.id === jogadorId));
    const adversarios = computed(() => store.listaAdversarios);

    return {
      jogador,
      adversarios
    };
  }
};
</script>

<style scoped>
.half-width {
  flex: 1;
  max-width: 50%;
}

.my-card {
  display: flex;
  flex-direction: column;
}

.my-card .q-card-section {
  flex: 1;
  padding: 10px;
}
</style>
