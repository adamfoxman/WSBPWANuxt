// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
import {resolve} from "path";

export default defineNuxtConfig({
    devtools: {enabled: true},
    alias: {"@": resolve(__dirname, '/')},
    css: ["~/assets/main.scss", "@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css"],
})