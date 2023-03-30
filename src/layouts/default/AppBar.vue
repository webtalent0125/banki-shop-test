<template>
  <div>
    <v-app-bar :elevation="0" height="97" class="bar-border">
      <v-container>
        <v-row>
          <v-col class="d-flex">
            <div class="pc-menue">
              <v-btn variant="text" height="auto">Каталог</v-btn>
              <v-btn variant="text" height="auto">Доставка</v-btn>
              <v-btn variant="text" height="auto">Оплата</v-btn>
              <v-btn variant="text" height="auto">Контакты</v-btn>
              <v-btn variant="text" height="auto">О компании</v-btn>
            </div>
            <div class="mobile-menue">
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                </template>
                <v-list>
                  <v-list-item :key="1" :value="1">
                    <v-list-item-title>Каталог</v-list-item-title>
                  </v-list-item>
                  <v-list-item :key="2" :value="2">
                    <v-list-item-title>Доставка</v-list-item-title>
                  </v-list-item>
                  <v-list-item :key="3" :value="3">
                    <v-list-item-title>Оплата</v-list-item-title>
                  </v-list-item>
                  <v-list-item :key="4" :value="5">
                    <v-list-item-title>Контакты</v-list-item-title>
                  </v-list-item>
                  <v-list-item :key="6" :value="6">
                    <v-list-item-title>О компании</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <v-spacer></v-spacer>
            <div class="d-flex padding-0">
              <input
                class="search-input rounded-0"
                type="text"
                placeholder="Поиск по названию картины"
                v-model="searchKey"
              />
              <v-btn @click="filter" class="default-btn button-bg-d rounded-0"
                >Найти</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      searchKey: "",
    };
  },
  methods: {
    ...mapActions(["filterAction"]),
    filter: function () {
      this.filterAction(this.searchKey);
    },
  },
  watch: {
    searchKey(newQuestion) {
      this.filter(newQuestion);
    },
  },
};
</script>
