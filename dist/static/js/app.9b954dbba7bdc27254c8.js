webpackJsonp([2,0],[function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var n=i(14),s=r(n),o=i(57),a=r(o);new s.default({el:"#app",template:"<App />",components:{App:a.default}})},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(14),s=r(n),o=new s.default;e.default=o},,,,,function(t,e,i){var r,n;i(53),r=i(17);var s=i(67);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-2251565a",t.exports=r},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=r(n);i(72),e.default={find:function(t){var e={type:"track"},i=(0,s.default)(e,t),r=i.type,n=i.service,o=i.id;if(!o)throw new Error("id not defined");if(!n)throw new Error("service not defined");var a="https://api.saoirse.audio/"+r+"/"+n+"/"+o;return fetch(a).then(function(t){return t.json()})},getSpotifyTrack:function(t){var e="https://api.spotify.com/v1/tracks/"+t;return fetch(e).then(function(t){return t.json()})}}},,,,,,,,function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(60),s=r(n),o=i(61),a=r(o);e.default={components:{SearchBar:s.default,SearchResults:a.default}}},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),s=r(n);e.default={components:{ServiceError:s.default},props:["id"],computed:{src:function(){return"//tools.applemusic.com/embed/v1/song/"+this.id+"?country=us"},validId:function(){return!this.id||"N/A"!==this.id}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["service"]}},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),s=r(n);e.default={components:{ServiceError:s.default},props:["id"],computed:{src:function(){return"https://open.spotify.com/embed/track/"+this.id},validId:function(){return!this.id||"N/A"!==this.id}}}},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),s=r(n);e.default={components:{ServiceError:s.default},props:["id"],computed:{validId:function(){return!this.id||"N/A"!==this.id},src:function(){return"https://embed.tidal.com/v0.6.11/index.html?pid=0&type=t&id="+this.id+"&relatedId=&token=&custom="}}}},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),s=r(n),o=i(1),a=(r(o),"pause"),u="play_arrow";e.default={props:["title"],data:function(){return{currentPlayButtonIcon:"play_arrow",progressPercent:100,artistList:void 0,imageSourceSet:void 0,songName:void 0,spotifyId:void 0}},methods:{toggleAudioPlayback:function(){this.audio.paused?this.audio.play():this.audio.pause()},updateButtonState:function(){this.currentPlayButtonIcon=this.audio.paused?u:a},progessUpdate:function(){var t=this.audio,e=t.currentTime,i=t.duration,r=e/i*100;this.progressPercent=r},updateContent:function(){var t=this;!this.title||this.songName&&this.title===this.spotifyId||s.default.getSpotifyTrack(this.title).then(function(e){t.currentPlayButtonIcon=u,t.progressPercent=100,t.audio.src=e.preview_url,t.songName=e.name,t.spotifyId=t.title,t.artistList=e.artists.map(function(t){return t.name}).join(", "),t.imageSourceSet=e.album.images.map(function(t){return t.url+" "+t.width+"w"}).join(", ")})}},computed:{progressStyle:function(){var t=Math.abs(100-this.progressPercent);return"transform: translateX(-"+t+"%)"}},mounted:function(){var t=this;this.audio=document.createElement("audio"),this.audio.preload=!0,this.audio.onplay=this.updateButtonState,this.audio.onpause=this.updateButtonState,this.audio.ontimeupdate=this.progessUpdate,this.updateContent(),this.$watch("title",function(){return t.updateContent()})}}},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(7),s=r(n),o=i(1),a=r(o);e.default={data:function(){return{service:"spotify",id:"",services:[{name:"Spotify",value:"spotify"},{name:"TIDAL",value:"tidal"},{name:"Apple Music / iTunes",value:"itunes"}]}},methods:{parseLocationHash:function(){var t=["spotify","isrc","itunes","apple-music","tidal"],e=["track"];if(document.location.pathname&&document.location.pathname.indexOf("/")!==-1){var i=document.location.pathname.split("/"),r=i[1],n=i[2],s=i[3],o=t.indexOf(n)!==-1,a=e.indexOf(r)!==-1;"apple-music"===n&&(n="itunes"),o&&a&&this.find({service:n,id:s})}},find:function(t){t.service,t.id;s.default.find(t).then(function(t){return t.Code&&"404"===t.Code?void alert("["+t.Code+"] "+t.Message):void a.default.$emit("update-search-result",t)})},search:function(t){t.preventDefault(),this.find(this)}},mounted:function(){this.parseLocationHash()}}},function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(8),s=r(n),o=i(59),a=r(o),u=i(58),d=r(u),c=i(63),f=r(c),l=i(62),h=r(l),p=i(1),_=r(p);e.default={components:{SaoirsePreview:a.default,AppleMusicEmbed:d.default,TidalEmbed:f.default,SpotifyEmbed:h.default},data:function(){return{search:void 0,tidalUrl:"",spotifyUrl:""}},methods:{updateSearchResult:function(t){this.search=(0,s.default)({},this.search,t);var e=this.search,i=e.tidal_id,r=e.spotify_id;this.tidalUrl="https://listen.tidal.com/track/"+i+"?play=true",this.spotifyUrl="https://play.spotify.com/track/"+r+"?play=true"}},mounted:function(){_.default.$on("update-search-result",this.updateSearchResult)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){var r,n;i(50),r=i(15);var s=i(64);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=r},function(t,e,i){var r,n;r=i(16);var s=i(71);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,t.exports=r},function(t,e,i){var r,n;i(54),r=i(20);var s=i(68);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-3e61a67c",t.exports=r},function(t,e,i){var r,n;i(55),r=i(21);var s=i(69);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-4f957212",t.exports=r},function(t,e,i){var r,n;i(51),r=i(22);var s=i(65);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-1632ec32",t.exports=r},function(t,e,i){var r,n;i(52),r=i(18);var s=i(66);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-20219ee9",t.exports=r},function(t,e,i){var r,n;i(56),r=i(19);var s=i(70);n=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(n=r=r.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-4fb6a3e9",t.exports=r},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"app"},[_m(0)," ",_m(1)," ",_h("SearchBar")," ",_h("SearchResults")])},staticRenderFns:[function(){with(this)return _h("h1",["Saoirse"])},function(){with(this)return _h("p",['\n    Saoirse is the irish word for "freedom". This tool help you find your favourite tracks on other music streaming services. Free the music!\n  '])}]}},function(module,exports){module.exports={render:function(){with(this)return search?_h("div",{staticClass:"search-results"},[_h("SaoirsePreview",{attrs:{title:search.spotify_id}})," ",_h("section",[_m(0)," ",_h("table",[_m(1)," ",_h("tbody",[_h("tr",[_m(2)," ",_h("td",[_s(search.tidal_id)])," ",_h("td",[_h("a",{attrs:{href:tidalUrl,target:"_blank"}},["Play on TIDAL"])])])," ",_h("tr",[_m(3)," ",_h("td",[_s(search.spotify_id)])," ",_h("td",[_h("a",{attrs:{href:spotifyUrl,target:"_blank"}},["Play on Spotify"])])])," ",_h("tr",[_m(4)," ",_h("td",[_s(search.itunes_id)])," ",_m(5)])," ",_h("tr",[_m(6)," ",_h("td",[_s(search.isrc_id)])," ",_m(7)])])])])," ",_h("section",{staticClass:"embeds"},[_m(8)," ",_h("AppleMusicEmbed",{attrs:{id:search.itunes_id}})," ",_h("TidalEmbed",{attrs:{id:search.tidal_id}})," ",_h("SpotifyEmbed",{attrs:{id:search.spotify_id}})])]):_e()},staticRenderFns:[function(){with(this)return _h("header",[_h("h2",["Track IDs"])])},function(){with(this)return _h("thead",[_h("th")," ",_h("th",["ID"])," ",_h("th",["Link"])])},function(){with(this)return _h("td",["TIDAL"])},function(){with(this)return _h("td",["Spotify"])},function(){with(this)return _h("td",["Apple Music / iTunes"])},function(){with(this)return _h("td",[_h("em",["iTunes does not support direct linking"])])},function(){with(this)return _h("td",["ISRC"])},function(){with(this)return _h("td")},function(){with(this)return _h("header",[_h("h2",["Embeds"])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"spotify-embed"},[validId?_h("iframe",{attrs:{src:src,width:"100%",height:"80px",frameborder:"0",allowtransparency:"true"}}):_e()," ",validId?_e():_h("service-error",{attrs:{service:"Spotify"}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"message"},["\n  Couln't find this track on "+_s(service)+".\n"])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"result-card"},[_h("figure",{staticClass:"background",attrs:{tabindex:"-1"}},[_h("img",{attrs:{srcset:imageSourceSet,alt:"Background image for search result"}})])," ",_h("figure",{staticClass:"cover"},[_h("img",{attrs:{srcset:imageSourceSet,alt:"Image for search result"}})])," ",_h("div",{staticClass:"right"},[_h("div",{staticClass:"metadata"},[_h("span",{staticClass:"name"},[_s(songName)])," ",_h("span",{staticClass:"artist"},[_s(artistList)])," ",_m(0)])," ",_h("div",{staticClass:"controls"},[_h("button",{on:{click:toggleAudioPlayback}},[_h("i",{staticClass:"material-icons"},[_s(currentPlayButtonIcon)])])," ",_h("div",{staticClass:"progress-bar"},[_h("div",{staticClass:"bar",style:progressStyle})])])])])},staticRenderFns:[function(){with(this)return _h("em",["Playback powered by Spotify"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("form",{staticClass:"search-form",on:{submit:search}},[_m(0)," ",_h("select",{directives:[{name:"model",rawName:"v-model",value:service,expression:"service"}],attrs:{id:"service"},on:{change:function(t){service=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value})[0]}}},[_l(services,function(t){return _h("option",{domProps:{value:t.value}},[_s(t.name)])})])," ",_h("input",{directives:[{name:"model",rawName:"v-model",value:id,expression:"id"}],attrs:{type:"search",name:"search",placeholder:"Type in track id..."},domProps:{value:_s(id)},on:{input:function(t){t.target.composing||(id=t.target.value)}}})," ",_m(1)])},staticRenderFns:[function(){with(this)return _h("label",{attrs:{for:"service"}},["Select service:"])},function(){with(this)return _h("button",{attrs:{type:"submit"}},["Free the music"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"tidal-embed"},[_h("iframe",{attrs:{src:src,frameborder:"0",allowfullscreen:"true",style:"width:100%;height:181px"}})," ",validId?_e():_h("ServiceError",{attrs:{service:"Tidal"}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"apple-music-embed"},[validId?_h("iframe",{attrs:{src:src,height:"110px",width:"100%",frameborder:"0"}}):_e()," ",validId?_e():_h("service-error",{attrs:{service:"Apple Music"}})])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.9b954dbba7bdc27254c8.js.map