import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

const state = {
  idToPass: "",
  agendas: [
    {
      agendaId: "ANG-1",
      name: "Work",
      description: "My Agenda to manage my workd",
      startHour: "10:00",
      endHour: "12:00",
      appointments: [
        {
          name: "PRUEBA",
          start: `2020-06-19T23:45:00`,
          end: `2020-06-20T01:45:00`,
          color: "green",
          timed: true
        },
        {
          name: "PRUEBA2",
          start: `2020-06-9T23:45:00`,
          end: `2020-06-10T01:45:00`,
          color: "blue",
          timed: true
        }
      ]
    },
    {
      agendaId: "ANG-2",
      name: "Home",
      description: "My Agenda to manage home",
      startHour: "",
      endHour: "",
      appointments: [
        {
          name: "PRUEBA",
          start: `2020-06-1T04:45:00`,
          end: `2020-06-1T10:45:00`,
          color: "orange",
          timed: true
        },
        {
          name: "PRUEBA2",
          start: `2020-06-1T04:45:00`,
          end: `2020-06-1T10:45:00`,
          color: "cyan",
          timed: true
        }
      ]
    }
  ]
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
