import { defineStore } from "pinia";

function getImagemJogador(nomeArquivo) {
  return new URL(`../assets/jogadores/${nomeArquivo}`, import.meta.url).href;
}

export const useJogadoresStore = defineStore("jogadores", {
  state: () => ({
    jogadores: [
      {
        id: 1,
        nome: "Marchesin",
        posicao: "Goleiro",
        numero: 1,
        foto: getImagemJogador("marchesin.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Agustín Federico Marchesín",
        naturalidade: "San Cayetano, ARG.",
        pe: "Direito",
        clubeAnterior: "Celta de Vigo",
        altura: "1,88 m",
        gols: "0",
        dataNascimento: "16 Mar, 1988 (36)",
        dataEstreia: "Jan, 2024",
      },
      {
        id: 19,
        nome: "D. Costa",
        posicao: "Centro-Avante",
        numero: 19,
        foto: getImagemJogador("dcosta.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Diego da Silva Costa",
        naturalidade: "Lagarto, SE",
        pe: "Direito",
        clubeAnterior: "Botafogo",
        altura: "1,86 m",
        gols: "7",
        dataNascimento: "7 Out, 1988 (35)",
        dataEstreia: "Fev, 2024",
      },
      {
        id: 20,
        nome: "Villasanti",
        posicao: "Volante",
        numero: 20,
        foto: getImagemJogador("villasanti.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Mathías Adalberto Villasanti Rolón",
        naturalidade: "Caacupé, PAR.",
        pe: "Direito",
        clubeAnterior: "Cerro Porteño",
        altura: "1,78 m",
        gols: "11",
        dataNascimento: "24 Jan, 1997 (27)",
        dataEstreia: "Ago, 2021",
      },
      {
        id: 10,
        nome: "F. Cristaldo",
        posicao: "Atacante",
        numero: 10,
        foto: getImagemJogador("fcristaldo.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Franco Cristaldo",
        naturalidade: "Morón, ARG.",
        pe: "Direito",
        clubeAnterior: "Huracán",
        altura: "1,75 m",
        gols: "20",
        dataNascimento: "15 Ago, 1996 (27)",
        dataEstreia: "Jan, 2023",
      },
      {
        id: 3,
        nome: "Geromel",
        posicao: "Zagueiro",
        numero: 3,
        foto: getImagemJogador("geromel.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Pedro Tonon Geromel",
        naturalidade: "São Paulo, SP",
        pe: "Direito",
        clubeAnterior: "1.FC Köln",
        altura: "1,90 m",
        gols: "15",
        dataNascimento: "21 Set, 1985 (38)",
        dataEstreia: "Jan, 2016",
      },
      {
        id: 18,
        nome: "João Pedro",
        posicao: "Lateral Direito",
        numero: 18,
        foto: getImagemJogador("joaopedro.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "João Pedro Maturano dos Santos",
        naturalidade: "Presidente Prudente, SP",
        pe: "Direito",
        clubeAnterior: "FC Porto",
        altura: "1,79 m",
        gols: "5",
        dataNascimento: "15 Nov, 1996 (27)",
        dataEstreia: "Jan, 2023",
      },
      {
        id: 6,
        nome: "Reinaldo",
        posicao: "Lateral Esquerdo",
        numero: 6,
        foto: getImagemJogador("reinaldo.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Reinaldo Manoel da Silva",
        naturalidade: "Porto Calvo, AL",
        pe: "Esquerdo",
        clubeAnterior: "São Paulo",
        altura: "1,78 m",
        gols: "4",
        dataNascimento: "28 Set, 1989 (34)",
        dataEstreia: "Jan, 2023",
      },
      {
        id: 23,
        nome: "Pepê",
        posicao: "Volante",
        numero: 23,
        foto: getImagemJogador("pepe.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "João Pedro Vilardi Pinto",
        naturalidade: "Rio de Janeiro, RJ",
        pe: "Direito",
        clubeAnterior: "Cuiabá",
        altura: "1,83 m",
        gols: "2",
        dataNascimento: "6 Jan, 1998 (26)",
        dataEstreia: "Jan, 2023",
      },
      {
        id: 4,
        nome: "Kannemann",
        posicao: "Zagueiro",
        numero: 4,
        foto: getImagemJogador("kannemann.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Walter Kannemann",
        naturalidade: "Concepción del Uruguay, ARG.",
        pe: "Esquerdo",
        clubeAnterior: "Atlas",
        altura: "1,84 m",
        gols: "5",
        dataNascimento: "14 Mar, 1991 (33)",
        dataEstreia: "Jul, 2016",
      },
      {
        id: 21,
        nome: "Pavón",
        posicao: "Ponta-Direita",
        numero: 21,
        foto: getImagemJogador("pavon.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Cristian David Pavón",
        naturalidade: "Anisacate, ARG.",
        pe: "Direito",
        clubeAnterior: "Atlético-MG",
        altura: "1,74 m",
        gols: "3",
        dataNascimento: "21 Jan, 1996 (28)",
        dataEstreia: "Fev, 2024",
      },
      {
        id: 7,
        nome: "Soteldo",
        posicao: "Ponta-Esquerda",
        numero: 7,
        foto: getImagemJogador("soteldo.png"),
        notas: [],
        media: 0,
        ultimaNota: null,
        nomeCompleto: "Yeferson Julio Soteldo",
        naturalidade: "Acarigua, VEN.",
        pe: "Direito",
        clubeAnterior: "Santos",
        altura: "1,60 m",
        gols: "3",
        dataNascimento: "30 Jun, 1997 (26)",
        dataEstreia: "Jan, 2024",
      },
    ],
    mediasTime: [],
    listaAdversarios: [],
  }),
  persist: {
    storage: localStorage,
    paths: ["jogadores", "mediasTime", "listaAdversarios"],
  },
  getters: {
    jogadoresOrdenados: (state) => {
      return [...state.jogadores].sort((a, b) => a.numero - b.numero);
    },
    mediaMediasTime: (state) => {
      const totalMedias = state.mediasTime.reduce((acc, curr) => acc + curr, 0);
      return state.mediasTime.length > 0
        ? totalMedias / state.mediasTime.length
        : 0;
    },
  },
  actions: {
    addNota(jogadorId, nota) {
      const jogador = this.jogadores.find((j) => j.id === jogadorId);
      if (jogador) {
        jogador.notas.push(Number(nota)); // Armazenando a nota no histórico
        jogador.ultimaNota = Number(nota); // Armazenando a última nota

        // Recalcular a média do jogador
        const totalNotas = jogador.notas.reduce((acc, curr) => acc + curr, 0);
        jogador.media = totalNotas / jogador.notas.length;
      }
    },
    calcularMediaTime(adversario) {
      let totalMedia = 0;
      let totalJogadores = this.jogadores.length;

      this.jogadores.forEach((jogador) => {
        if (jogador.ultimaNota !== null) {
          totalMedia += jogador.ultimaNota; // Somando a última nota de cada jogador
        }
      });

      const mediaTime = totalJogadores > 0 ? totalMedia / totalJogadores : 0; // Calcula a média do time

      this.mediasTime.push(mediaTime);
      this.listaAdversarios.push(adversario);

      // Limpa as últimas notas dos jogadores após calcular a média
      this.jogadores.forEach((jogador) => {
        jogador.ultimaNota = null;
      });
    },
  },
});
