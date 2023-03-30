/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "../router";
// import store from "../store/index";
// console.log(store)

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router);
}
