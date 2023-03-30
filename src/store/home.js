export default {
  state: { test: "success" },
  getters: {
    test(state) {
      console.log(state);
      return state;
      // return state.todos.find((todo) => todo.id === id);
    },
  },
  mutations: {},
  actions: {},
};
