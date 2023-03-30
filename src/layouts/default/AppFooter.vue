<template>
  <v-footer absolute class="bg-footer on-footer">
    <v-container class="w-100">
      <v-row>
        <v-col class="px-0">
          <v-btn class="color-primary on-btn" variant="text">Каталог</v-btn>
          <v-btn variant="text">Доставка</v-btn>
          <v-btn variant="text">Оплата</v-btn>
          <v-btn variant="text">Контакты</v-btn>
          <v-btn variant="text">О компании</v-btn>
        </v-col>
        <v-col class="px-0">
          <div class="contact-me"> 
            <v-btn prepend-icon="mdi-phone" variant="text"
              >+7 (812) 555-55-55</v-btn
            >
            <v-btn prepend-icon="mdi-map-marker" variant="text"
              >г. Санкт-Петербург, ул. Ефимова, 3</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script setup>
//
</script>
  