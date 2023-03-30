<template>
  <v-card :disabled="info.state === '3'" class="rounded-0">
    <v-img
      @click="dialog = true"
      class="align-center h-50"
      src="@/assets/img/1.jpg"
      cover
    >
    </v-img>

    <div class="product-detail">
      <v-card-text @click="dialog = true" class="px-0 py-0">
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
        >
          <v-progress-circular
            :size="20"
            :width="2"
            color="white"
            indeterminate
          ></v-progress-circular
        ></v-btn>
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
    <!--  modal -->
    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-carousel cycle show-arrows="hover">
          <v-carousel-item>
            <v-img
              @click="dialog = true"
              class="align-center h-100"
              src="@/assets/img/3.jpg"
              cover
            >
            </v-img
          ></v-carousel-item>

          <v-carousel-item>
            <v-img
              @click="dialog = true"
              class="align-center h-100"
              src="@/assets/img/4.jpg"
              cover
            >
            </v-img
          ></v-carousel-item>

          <v-carousel-item>
            <v-img
              @click="dialog = true"
              class="align-center h-100"
              src="@/assets/img/5.jpg"
              cover
            >
            </v-img
          ></v-carousel-item>
        </v-carousel>

        <div class="product-detail">
          <v-card-text @click="dialog = true" class="px-0 py-0">
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
            >
              <v-progress-circular
                :size="20"
                :width="2"
                color="white"
                indeterminate
              ></v-progress-circular
            ></v-btn>
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
    </v-dialog>
    <!--  modal -->
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    info: Object,
    index: Number,
  },
  data() {
    return {
      btnstate: String,
      loading: false,
      dialog: false,
    };
  },
  created() {
    this.btnstate = this.info.state;
  },
  computed: {
    ...mapGetters(["GETPRODUCTS", "FILTEREDPRODUCTS", "GETSEARCHKEY"]),
  },
  methods: {
    ...mapActions(["proceedAction", "filterAction"]),
    proceeding: function () {
      this.loading = true;
      setTimeout(() => {
        if (this.btnstate === "2") {
          this.btnstate = "1";
        } else {
          this.btnstate = "2";
        }
        this.proceedAction(this.index);
        this.loading = false;
        this.filterAction(this.GETSEARCHKEY);
      }, 2000);
    },
  },
};
</script>
