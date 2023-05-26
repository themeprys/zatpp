import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

// "async" is optional
export default async ({ /* app, router, Vue, ... */ }) => {
  Vue.use(VuePlyr)
}
