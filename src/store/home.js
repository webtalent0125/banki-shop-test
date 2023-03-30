export default {
  state: {
    products: [
      {
        title: "«Рождение Венеры»",
        position: "Сандро Боттичелли",
        price: "1 000 000 $",
        state: "1",
        sale: "2 000 000 $",
        img: "@/assets/img/1.jpg",
      },
      {
        title: "«Тайная вечеря» Леонардо",
        position: "да Винчи",
        price: "3 000 000 $",
        state: "1",
        sale: "",
        img: "@/assets/img/1.jpg",
      },
      {
        title: "«Сотворение Адама»",
        position: "Микеланджело",
        price: "6 000 000 $",
        state: "2",
        sale: "6 000 000 $",
        img: "@/assets/img/1.jpg",
      },
      {
        title: "«Урок анатомии»",
        position: "Рембрандт",
        price: "1 000 000 $",
        state: "3",
        sale: "2 000 000 $",
        bio: "Продана на аукционе",
        img: "@/assets/img/1.jpg",
      },
    ],
    filteredProducts: [
      {
        title: "«Рождение Венеры»",
        position: "Сандро Боттичелли",
        price: "1 000 000 $",
        state: "1",
        sale: "2 000 000 $",
        img: "@/assets/img/1.jpg",
      },
      {
        title: "«Тайная вечеря» Леонардо",
        position: "да Винчи",
        price: "3 000 000 $",
        state: "1",
        sale: "",
        img: "@/assets/img/1.jpg",
      },
      {
        title: "«Сотворение Адама»",
        position: "Микеланджело",
        price: "6 000 000 $",
        state: "2",
        sale: "6 000 000 $",
        img: "@/assets/img/1.jpg",
      },
      {
        title: "«Урок анатомии»",
        position: "Рембрандт",
        price: "1 000 000 $",
        state: "3",
        sale: "2 000 000 $",
        bio: "Продана на аукционе",
        img: "@/assets/img/1.jpg",
      },
    ],
    filterKey: "",
  },
  getters: {
    GETPRODUCTS(state) {
      return state.products;
    },
    FILTEREDPRODUCTS(state) {
      return state.filteredProducts;
    },
    GETSEARCHKEY(state) {
      return state.filterKey;
    },
  },
  actions: {
    filterAction({ commit }, key) {
      return commit("FILTER_PRODUCTS", key);
    },
    proceedAction({ commit }, value) {
      return commit("PROCEED_PRODUCT", value);
    },
  },
  mutations: {
    FILTER_PRODUCTS(state, key) {
      state.filterKey = key;
      if (key === "") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (value) => value.position.indexOf(key) > -1
        );
      }
    },
    PROCEED_PRODUCT(state, proceedIndex) {
      if (state.products[proceedIndex].state == "2") {
        state.products[proceedIndex].state = "1";
      } else {
        state.products[proceedIndex].state = "2";
      }
    },
  },
};
