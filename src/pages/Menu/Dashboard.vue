<template>
<q-pull-to-refresh @refresh="refresh">
    <q-page id="zatpp_dashboardpage">
    <KenFast style="z-index:-999;max-width:768px" />
    <div style="z-index:9999;top:0px;left:0px" class="dashboard_audio">
      <vue-plyr ref="plyr" id="audioPlayer" :options="{ controls: controls }" >
        <audio autoplay loop>
          <source src="~assets/audio/intro.mp3" type="audio/mp3" />
          <source src="~assets/audio/intro.ogg" type="audio/ogg" />
        </audio>
      </vue-plyr>
    </div>
    <q-btn
      style="position:absolute;bottom:20px;right:0px;z-index:9999;font-size:10px"
      flat
      label="Menu"
      color="transparent"
      @click="dialog = true"
    />
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />
          <q-btn
            dense
            flat
            icon="minimize"
            @click="maximizedToggle = false"
            :disable="!maximizedToggle"
          >
            <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn
            dense
            flat
            icon="crop_square"
            @click="maximizedToggle = true"
            :disable="maximizedToggle"
          >
            <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="text-h6">MENU</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <code>
            >>>>> Lolita losing blood really bad => flesh and blood. Visceral (Intimate). Mere mortal. A young female poet labeled as criminal.
            <br />
            <br />>>>>> In the backseat of my car => world. Car. Being in
            <br />
            <br />>>>>> On our tails the enemy is chasing us => individual vs collective truth. Enemy = police. The mechanical minds. Symbol of state. Collective being of mankind. Enemy of "the self"
            <br />
            <br />>>>>> I can't drive any faster
            <br />
            <br />>>>>> Starts a rambling monologue about a girl from unrescued world => start of pre-death experience. Last 5 minutes of her life.
            <br />
            <br />>>>>> Put a pressure on her wound
            <br />
            <br />>>>>> Lolita slowly drifting away => process of dying. from being to nothing.
            <br />
            <br />>>>>> Found herself in a bar called lazy moon => another world. A new reality revealed itself. A place in a different dimension. Her mind. Her matrix.
            <br />
            <br />>>>>> Buried her face in the menu. She said I want to drink. I want a cold cappuccino. While Im waiting for my hero. The rain begin again it blends with her tears. => scene of her being (self) in a new reality. Normal reality fades, so does her senses.
            <br />
            <br />>>>>> Don't leave me alone in the darkness of July. But if you're quest drives your fear makes you strong. You must face your battle on your own => Lolita last words to her boyfriend. Face to face with death. Encountering primal fear. Loneliness itself. "Battle" of letting go your own life on your own. Understanding the possibility of his own death through his lover experience and words. Energy, bravery that came not from the mind but from life itself.
            <br />
            <br />>>>>> For a price of peace. He drove his car into the cliff => act of finishing his own life.
          </code>
        </q-card-section>
      </q-card>
    </q-dialog>
    <div class="row q-px-lg q-pt-none q-mt-none q-mb-none">
      <div class="col q-pt-lg text-center" style="z-index:2">
        <p class="q-mb-none athelasregular subtitle">WHAT'S ON THE MENU:</p>
        <h5 class="q-mt-none q-pt-none q-mb-sm bigcaslonmedium title">A Zeke and The Popo Story</h5>
        <p class="q-px-lg">Audio Story · Crowdless Concert · New Single</p>
      </div>
    </div>
    <div class="row mobile-hide">
      <div class="col flex flex-center text-center">
        <div class="text-bold">
          <p class="text-caption">
            This app looks good on mobile devices.
            <br />For better experience, please switch
            <br />to your smartphone
            <br />and visit zatpp.com again
          </p>
        </div>
      </div>
    </div>
    <q-img
      class="zatpp_bgmenu"
      style="position:absolute;bottom:-15px;"
      src="/bg_menu-masker.png"
    />
  </q-page>
      </q-pull-to-refresh>

</template>

<script>
import KenFast from "components/KenFast";
import DashboardMenu from "components/Menu/DashboardMenu";

export default {
  data() {
    return {
      dialog: false,
      maximizedToggle: true
    };
  },
  components: {
    KenFast,
    DashboardMenu
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        done();
      }, 1000);
    }
  },
  computed: {
    controls() {
      if (this.fullview) {
        return `<div class="plyr__controls">
              <button type="button" class="plyr__control" data-plyr="rewind">
                  <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
                  <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
              </button>
              <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
              </button>
              <button type="button" class="plyr__control" data-plyr="fast-forward">
                  <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
                  <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
              </button>
              <div class="plyr__progress">
                  <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
                  <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
                  <span role="tooltip" class="plyr__tooltip">00:00</span>
              </div>
              <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
              <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
              <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
              </button>
              <button type="button" class="plyr__control" data-plyr="captions">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
              </button>
              <button type="button" class="plyr__control" data-plyr="fullscreen">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
              </button>
          </div>
          `;
      } else {
        return `<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
              </button>
          `;
      }
    }
  },
}
</script>

<style>

.dashboard_audio button {
    padding: 20px;
}
</style>
