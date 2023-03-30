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
        cols="3"
        xs="12"
      >
        <ProductCard :info="{ ...value }" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
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
    };
  },
  computed: {
    ...mapGetters(["test"]),
  },
  mounted() {
    // console.log(this.$store);
  },
};
</script>
