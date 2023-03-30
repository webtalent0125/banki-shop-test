<template>
  <v-card
    :disabled="info.state === '3'"
    height="100%"
    class="mx-auto rounded-0"
    max-width="400"
  >
    <v-img class="align-center h-50" src="@/assets/img/1.jpg" cover> </v-img>

    <div class="product-detail">
      <v-card-text class="px-0 py-0">
        <h2>{{ info.title }}</h2>
        <h2>{{ info.position }}</h2>
      </v-card-text>

      <v-card-actions class="px-0 py-0 mt-5 product-action">
        <div>
          <div v-if="info.state === 3">
            <h3>{{ info.bio }}</h3>
          </div>
          <div v-else>
            <h6 v-show="info.sale !== ''" class="product-sale">
              {{ info.sale }}
            </h6>
            <h3>{{ info.price }}</h3>
          </div>
        </div>
        <v-btn
          v-if="loading"
          class="default-btn buy-btn button-bg-d rounded-0 bg-checked"
          >loading</v-btn
        >
        <template v-else>
          <v-btn
            v-if="btnstate === '2'"
            @click="proceeding"
            prepend-icon="mdi-check"
            class="default-btn buy-btn button-bg-d rounded-0 bg-checked"
            >В корзине</v-btn
          >
          <v-btn
            v-else-if="btnstate === '1'"
            @click="proceeding"
            class="default-btn buy-btn button-bg-d rounded-0"
            >Купить</v-btn
          >
        </template>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  data() {
    return {
      btnstate: false,
      loading: false,
    };
  },
  created() {
    this.btnstate = this.info.state;
  },
  methods: {
    proceeding: function () {
      this.loading = true;
      setTimeout(() => {
        if (this.btnstate === "1") {
          this.btnstate = "2";
        } else {
          this.btnstate = "1";
        }
        this.loading = false;
      }, 2000);
      // console.log(this.btnstate);
    },
  },
};
</script>
