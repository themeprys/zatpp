(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"77d8":function(s,t,e){},7847:function(s,t,e){},"9e39":function(s,t,e){"use strict";e("7847")},a6af:function(s,t,e){s.exports=e.p+"media/03.1287f6b4.ogg"},a908:function(s,t,e){"use strict";var o=function(){var s=this;s._self._c;return s._m(0)},r=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"slideshow"},[t("div",{staticClass:"slideshow-image"}),t("div",{staticClass:"slideshow-image"}),t("div",{staticClass:"slideshow-image"}),t("div",{staticClass:"slideshow-image"})])}],n=(e("9e39"),e("2877")),l=e("9989"),a=e("eebe"),i=e.n(a),p={},c=Object(n["a"])(p,o,r,!1,null,"3adb546c",null);t["a"]=c.exports;i()(c,"components",{QPage:l["a"]})},aee8:function(s,t,e){"use strict";e("77d8")},b5df:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s._self._c;return t("q-pull-to-refresh",{on:{refresh:s.refresh}},[t("q-page",{style:s.$q.platform.is.mobile?"padding-top:240px":"padding-top:0px",attrs:{id:"zatpp_storypage"}},[t("q-page-sticky",{staticClass:"mobile-only",staticStyle:{"z-index":"-99"},attrs:{expand:"",position:"top"}},[t("img",{attrs:{src:"/story.jpg",width:"100%"}}),t("p",{staticClass:"absolute-bottom-right",staticStyle:{right:"10px",bottom:"-10px"}},[s._v("photo by Iman")])]),t("div",{staticStyle:{"$q.platform.is.mobile ? 'z-index":"9999",top:"10px",position:"absolute",left:"10px","'":"'position:absolute:bottom:0","z-index":"9999"}},[t("vue-plyr",{ref:"plyr",attrs:{id:"audioPlayer",options:{controls:s.controls}}},[t("audio",{attrs:{autoplay:""}},[t("source",{attrs:{src:e("d534"),type:"audio/mp3"}}),t("source",{attrs:{src:e("a6af"),type:"audio/ogg"}})])])],1),t("div",{class:s.$q.platform.is.mobile?"q-px-none q-pt-md bg-zatpp":"q-px-none q-pt-none bg-zatpp no-shadow"},[t("div",{staticClass:"mobile-hide"},[t("img",{attrs:{src:"/story.jpg",width:"100%"}}),t("p",{staticClass:"text-right q-pr-md"},[s._v("photo by Iman")])]),t("h5",{staticClass:"q-mt-md q-mb-sm text-center"},[s._v("\n        Story Synopses\n        "),t("br"),s._v('derived from "Charlie"\n      ')]),t("p",{staticClass:"text-center"},[s._v("by Zeke, narrated by Leo")]),t("div",{attrs:{id:"birds"}}),t("div",{staticClass:"q-my-md q-pt-md"},[t("q-linear-progress",{staticClass:"q-mt-sm",attrs:{value:s.progress,buffer:s.buffer,color:"grey-4"}}),t("q-linear-progress",{staticClass:"q-mt-sm",attrs:{value:s.progress,buffer:s.buffer,color:"grey-5"}})],1),t("div",{staticClass:"q-px-xl q-pt-lg"},[t("p",[s._v("Cut off by AI from his true nature he calmly accepts his artificial life and consequently his human weakness is shown by the act of repressing the existential truth itself.")])]),t("div",{staticClass:"flex flex-center q-py-xl"},[t("q-btn",{attrs:{size:"md",color:"primary",icon:"fas fa-forward",to:"/story4"}})],1)])],1)],1)},r=[],n=e("a908"),l=(e("067b"),e("5a89")),a={data:function(){return{progress:.01,buffer:.01}},components:{Ken:n["a"]},methods:{refresh:function(s){setTimeout((function(){s()}),1e3)}},computed:{controls:function(){return this.fullview?'<div class="plyr__controls">\n              <button type="button" class="plyr__control" data-plyr="rewind">\n                  <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>\n                  <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>\n              </button>\n              <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">\n                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>\n                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>\n                  <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>\n                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>\n              </button>\n              <button type="button" class="plyr__control" data-plyr="fast-forward">\n                  <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>\n                  <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>\n              </button>\n              <div class="plyr__progress">\n                  <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">\n                  <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>\n                  <span role="tooltip" class="plyr__tooltip">00:00</span>\n              </div>\n              <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>\n              <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>\n              <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">\n                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>\n                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>\n                  <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>\n                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>\n              </button>\n              <div class="plyr__volume">\n                  <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">\n              </div>\n              <button type="button" class="plyr__control" data-plyr="captions">\n                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>\n                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>\n                  <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>\n                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>\n              </button>\n              <button type="button" class="plyr__control" data-plyr="fullscreen">\n                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>\n                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>\n                  <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>\n                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>\n              </button>\n          </div>\n          ':'<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">\n                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>\n                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>\n              </button>\n          '}},mounted:function(){var s=this;this.vantaEffect=VANTA.BIRDS({el:"#birds",mouseControls:!0,touchControls:!0,minHeight:300,minWidth:200,scale:1,scaleMobile:1,backgroundColor:16777215,color1:0,color2:12500670,colorMode:"lerp",quantity:1,backgroundAlpha:0,THREE:l}),this.interval=setInterval((function(){if(s.progress>=1)return s.progress=.01,void(s.buffer=.01);s.progress=Math.min(1,s.buffer,s.progress+.1)}),700+1e3*Math.random()),this.bufferInterval=setInterval((function(){s.buffer<1&&(s.buffer=Math.min(1,s.buffer+.2*Math.random()))}),700)}},i=a,p=(e("aee8"),e("2877")),c=e("59d7"),u=e("9989"),d=e("de5e"),f=e("6b1d"),y=e("9c40"),b=e("eebe"),m=e.n(b),v=Object(p["a"])(i,o,r,!1,null,null,null);t["default"]=v.exports;m()(v,"components",{QPullToRefresh:c["a"],QPage:u["a"],QPageSticky:d["a"],QLinearProgress:f["a"],QBtn:y["a"]})},d534:function(s,t,e){s.exports=e.p+"media/03.7caee3bd.mp3"}}]);