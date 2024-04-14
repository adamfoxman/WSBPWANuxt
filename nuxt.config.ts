// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
import {resolve} from "path";

export default defineNuxtConfig({
    devtools: {enabled: true},
    alias: {
        "@": resolve(__dirname, "/"),
    },
    css: ["~/assets/css/main.scss", "@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css"],
    plugins: [{src: "~/plugins/vue-unicons", ssr: false, mode: "client"}],
    colorMode: {
        preference: "light",
    },
});