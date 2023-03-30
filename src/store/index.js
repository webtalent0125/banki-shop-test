import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import home from "./home";

const store = createStore({
  modules: {
    home: home,
  },
  plugins: [createPersistedState()],
});

export default store;
