<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useJogadoresStore } from '../stores/useJogadoresStore';

export default {
  setup() {
    const store = useJogadoresStore();
    const notas = ref({});
    const adversario = ref('');
    const router = useRouter();

    const jogadoresOrdenados = computed(() => store.jogadoresOrdenados);

    const submitNotas = () => {
      // Verifica se todas as notas estão entre 1 e 10
      const notasValidas = Object.keys(notas.value).every(id => {
        const nota = notas.value[id];
        return !isNaN(nota) && nota !== null && nota >= 1 && nota <= 10;
      });

      // Verifica se o nome do adversário não está em branco
      const adversarioValido = adversario.value.trim() !== '';

      // Se todas as notas são válidas e o adversário não está em branco, prossegue
      if (notasValidas && adversarioValido) {
        Object.keys(notas.value).forEach(id => {
          const nota = notas.value[id];
          if (!isNaN(nota) && nota !== null) {
            store.addNota(Number(id), nota);
            notas.value[id] = null;
          }
        });
        store.calcularMediaTime(adversario.value);
        adversario.value = '';
      } else {
        // Caso contrário, exibe uma mensagem de erro
        alert('Por favor, verifique as notas (devem estar entre 1 e 10) e o nome do adversário.');
      }
    };

    const resetarForm = () => {
      adversario.value = '';
      Object.keys(notas.value).forEach(id => {
        notas.value[id] = null;
      }
      );
    }

    const irParaPerfil = (id) => {
      router.push(`/jogador/${id}`);
    };

    return {
      jogadoresOrdenados,
      notas,
      adversario,
      submitNotas,
      resetarForm,
      irParaPerfil
    };
  }
};
</script>

<template>
  <div class="row q-ma-xs">
    <q-card v-for="jogador in jogadoresOrdenados" :key="jogador.id" class="row q-ma-xs">
      <q-card-section class="q-pa-xs q-mt-md">
        <q-avatar>
          <q-img :src="jogador.foto" @click="irParaPerfil(jogador.id)" clickable />
        </q-avatar>
      </q-card-section>

      <q-card-section class="col q-pa-xs">
        <q-item-label class="q-mr-sm text-bold card">{{ jogador.numero }}</q-item-label>
        <q-item-label class="text-bold card">{{ jogador.nome }}</q-item-label>
        <q-item-label caption class="q-ma-none">{{ jogador.posicao }}</q-item-label>
        <q-input v-model="notas[jogador.id]" type="number" placeholder="Nota" outlined class="input-box q-mt-xs" />
      </q-card-section>
    </q-card>

    <div class="container q-pa-xs">
      <q-input v-model="adversario" label="Nome do Adversário" outlined class="input-adv q-mb-xs" />
      <q-btn label="Limpar" color="secondary" @click="resetarForm" class="custom-btn" />
      <q-btn label="Submit" color="primary" @click="submitNotas" class="custom-btn" />
    </div>
  </div>

</template>

<style scoped>
.container {
  display: inline-block;
  height: 100%;
  width: 50%;
}

.input-adv {
  width: 100%;
  height: 50%;
  background-color: white;
}

.custom-btn {
  height: 100%;
  width: 48%;
  margin-left: 2%;
}

.q-card {
  width: 47%;
}

.card {
  display: inline-block
}

:deep(.input-box .q-field__control),
:deep(.input-box .q-field__marginal) {
  height: 32px;
  width: 70px;
  font-size: 10px;
}
</style>
