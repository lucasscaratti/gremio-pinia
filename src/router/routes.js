const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // Rota padrão é a pagina de avaliação
      { path: "", redirect: "/avaliacao" },

      {
        path: "avaliacao",
        component: () => import("src/pages/PaginaAvaliacao.vue"),
      },
      {
        path: "historico",
        component: () => import("pages/PaginaHistorico.vue"),
      },
      {
        path: "jogador/:id",
        component: () => import("pages/PerfilJogador.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
