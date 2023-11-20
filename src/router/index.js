import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import LoginView from "../views/LoginView.vue";
import RegistroUsuario from "../views/RegistroUsuario.vue";
import RegistroDocente from "../views/RegistroDocente.vue";
import Registro from "../views/RegistroView.vue";
import RegistroEstudiante from "../views/RegistroEstudiante.vue";
import RegistroNotas from "../views/RegistroNotas.vue";
import materiaView from "../views/materiaView.vue";
import inscripcionMateria from "../views/inscripcionMateria.vue";
import IngresoNotas from "../views/IngresoNotas.vue";
import NotasView from "../views/NotasView.vue";
import EvaluacionesView from "../views/EvaluacionesView.vue";
import RecordatoriosView from "../views/RecordatoriosView.vue";
import historial from "../views/HistorialNotas.vue";
import inicio from "../views/InicioView.vue";
import { Storage } from "@ionic/storage";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: LoginView,
    beforeEnter: async (to, from, next) => {
      let res = await sessionActiva();

      if (res) {
        next("/tabs/tab1");
      } else {
        next();
      }
    },
  },
  {
    path: "/registro",
    component: RegistroUsuario,
    beforeEnter: async (to, from, next) => {
      let res = await sessionActiva();

      if (res) {
        next("/tabs/tab1");
      } else {
        next();
      }
    },
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        component: inicio,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab2",
        component: RegistroNotas,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab3",
        component: IngresoNotas,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab4",
        component: materiaView,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab5",
        component: RecordatoriosView,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab6",
        component: EvaluacionesView,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab7",
        component: NotasView,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab8",
        component: inscripcionMateria,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab9",
        component: historial,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab10",
        component: RegistroDocente,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab11",
        component: RegistroEstudiante,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
      {
        path: "tab12",
        component: Registro,
        beforeEnter: async (to, from, next) => {
          let res = await sessionActiva();

          if (res) {
            next();
          } else {
            next("/");
          }
        },
      },
    ],
  },
];

async function sessionActiva() {
  let storage = new Storage();

  await storage.create();

  let usuario = await storage.get("user");

  return usuario ? true : false;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
