<template>
  <q-page id="zatpp_themenu">
    <ken style="z-index:-999;" />
    <div class="zatpp_logo absolute-top-left q-pt-lg q-pl-lg" style="z-index:99;">
      <img alt="Charlie" src="/logo.png" width="50px" />
    </div>
    <div class="zatpp_cta text-center absolute-center" style="z-index:99">
      <div class="flex flex-center" style="z-index:99;">
        <router-link to="/dashboard">
          <img
            alt="Charlie"
            :src="$q.dark.isActive ? '/penguin_dark.png' : '/penguin-masker.png'"
            width="120px"
          />
        </router-link>
      </div>
      <p class="q-mb-xs athelasregular subtitle text-bold">WHAT'S ON THE MENU:</p>
      <p class="bigcaslonmedium title">A Zeke and The Popo Story</p>
      <div class="row no-wrap" style="width:250px">
         <q-btn class="zatpp_loginbutton col-xs-6 q-mr-md" color="white" label="Start" to="/dashboard" />
         <q-btn type="a" class="col-xs-6 zatpp_ctatokped" color="primary" label="About" to="/involved"  />
      </div>
         </div>
    <div class="absolute-bottom-right q-pr-md q-pb-md">v.2.1.0 <a style="text-decoration: none;color: #111;font-weight: bold;" href="https://themeprys.com">@themePrys</a></div>
  </q-page>
</template>

<script>

import Ken from "components/Ken";

export default {
  components: {
    Ken
  },
  meta: {
    title: 'What\'s on The Menu: a Zeke and The Popo Story'
  }
};
</script>

<style>
.zatpp_ctatokped .q-icon {
  font-size: 15px;
}
.zatpp_loginbutton .q-btn__content {
  color: #1d1d1d;
  font-weight: bold;
}
</style>
