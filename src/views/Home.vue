<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="page-title">Картины эпохи Возрождения</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(value, index) in products"
        :key="index"
        class="product-container"
        cols="12"
        md="4"
        lg="3"
        sm="6"
      >
        <ProductCard :index="index" :info="{ ...value }" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters(["GETPRODUCTS", "FILTEREDPRODUCTS"]),
  },
  methods: {
    ...mapActions(["filterAction"]),
  },
  created() {
    this.products = this.FILTEREDPRODUCTS;
  },
  watch: {
    FILTEREDPRODUCTS() {
      this.products = this.FILTEREDPRODUCTS;
    },
  },
};
</script>
