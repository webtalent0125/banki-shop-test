<template>
  <v-app-bar :elevation="0" class="bar-border" height="97">
    <v-container>
      <v-row>
        <v-col class="d-flex">
          <v-spacer></v-spacer>
          <v-btn variant="text" class="h-auto">Каталог</v-btn>
          <v-btn variant="text" class="h-auto">Доставка</v-btn>
          <v-btn variant="text" class="h-auto">Оплата</v-btn>
          <v-btn variant="text" class="h-auto">Контакты</v-btn>
          <v-btn variant="text" class="h-auto">О компании</v-btn>
          <v-spacer></v-spacer>
          <!-- <v-btn icon="mdi-magnify"></v-btn> -->
          <div class="d-flex">
            <input
              class="search-input rounded-0"
              type="text"
              placeholder="Поиск по названию картины"
            />
            <v-btn class="default-btn button-bg-d rounded-0">Найти</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
//
</script>
