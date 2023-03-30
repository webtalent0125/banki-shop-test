import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import home from "./home";

Vue.use(Vuex);

const store = new Vuex({
  plugins: [new VuexPersistence().plugin],
  modules: {
    home: home,
  },
});

export default store;
