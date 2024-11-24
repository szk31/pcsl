const singer_lookup=[,"看谷にぃあ","胡桃澤もも","ももにぃあ","逢魔きらら","きらにぃあ","ももきら","ぷちここ","つきみゆこ",,"ゆこもも",,"ゆこきら",,,,"愛白ふりる",,,,,,,,,,,,,,,,"小悪熊ちゅい"],display_order=[,7,6,4,5,3,2,1,12,,9,,8,,,,11,,,,,,,,,,,,,,,,10];let member_display_order=[7,6,5,3,4,2,1];const series_lookup={"マクロス":"マクロスまくろす","ラブライブ":"ラブライブらぶらいぶll","アイマス":"アイマスあいますデレマスでれます","ジブリ":"ジブリじぶり","物語シリーズ":"物語シリーズものがたりしりーず","まどマギ":"まどマギまどまぎ",disney:"disneyディズニーでぃずにー"},entry_idx={song_id:0,video:1,note:2,time:3,type:4},song_idx={name:0,artist:1,reading:2,attr:3,release:4,reference:5},video_idx={id:0,date:1};let video,entry;const version="1.8.1",key_hash=["473c05c1ae8349a187d233a02c514ac73fe08ff4418429806a49f7b2fe4ba0b7a36ba95df1d58b8e84a602258af69194","3f01e53f1bcee58f6fb472b5d2cf8e00ce673b13599791d8d2d4ddcde3defbbb4e0ab7bc704538080d704d87d79d0410"];let prevent_menu_popup=!1,current_page="home",key_valid=!1,settings={set_hidden_unlocked:{value:!1,req_LS:!0},set_show_hidden:{value:!1,req_LS:!0},ser_show_private:{value:!0,req_LS:!0,prv_name:["pcsl_s_showHidden"]},ser_select_input:{value:!0,req_LS:!0,prv_name:["pcsl_s_selecInput"]},ser_via_song_name:{value:!0,req_LS:!1},ser_sort_by_date:{value:!0,req_LS:!1},ser_sort_asd:{value:!0,req_LS:!1},ser_rand_show:{value:!1,req_LS:!0,prv_name:["pcsl_s_showRandom"]},ser_rand_req_empty:{value:!1,req_LS:!0,prv_name:["pcsl_s_ignoreRule"]},pdt_on_change_only:{value:!0,req_LS:!0,prv_name:["pcsl_s_autoAnyway"]},pdt_reading:{value:!0,req_LS:!0,prv_name:["pcsl_s_shwReading"]},pdt_copy_on_select:{value:!1,req_LS:!0},rep_show_release:{value:!1,req_LS:!0,prv_name:["pcsl_s_showReleas"]},rep_long_press_copy:{value:!0,req_LS:!0,prv_name:["pcsl_s_LPressCopy"]},rep_long_press_time:{value:600,req_LS:!0,prv_name:["pcsl_s_longP_time"]},rep_select_input:{value:!0,req_LS:!0,prv_name:["pcsl_s_rep_select"]},rep_show_group:{value:!1,req_LS:!0},rep_is_union:{value:!0,req_LS:!1},rep_sort_method:{value:"50",req_LS:!1},rep_sort_asd:{value:!0,req_LS:!1},rep_selected_first:{value:!1,req_LS:!1},rep_show_artist:{value:!0,req_LS:!0,prv_name:["pcsl_s_rep_artist"]}};function update_setting(e){return ls("pcsl_"+e,settings[e].value),settings[e].value}function toggle_setting(e){return settings[e].value^=1,update_setting(e)}let entry_proc=[],memcount_rep_int,processed_song_name=[""],auto_skips=[];{let e=ls("theme");e||ls("theme",e="mixed"),document.documentElement.setAttribute("theme",e)}function init(){$("#loading_text").html("Processing data..."),load_setting_flags(),process_data(),load_url_para(),$("#loading_text").html("Loading Complete.<br />You can't see this tho"),$("#loading_overlay").addClass("hidden"),$("body").removeClass("allow_reload")}function load_setting_flags(){function a(e,t){ls(e,"number"==typeof t?t:t?1:0)}$("#three_way_"+("extra"===ls("theme")?"dark":ls("theme"))).addClass("selected");const e=new URLSearchParams(window.location.search).has("reset_settings");switch(e&&ls("theme","mixed"),Object.entries(settings).forEach(([s,n])=>{if(n.req_LS){var r="pcsl_"+s;if(e)localStorage.removeItem(r),ls(r,"number"==typeof n.value?n.value:n.value?1:0);else{let e=ls(r);if(!e){if(!settings[s].prv_name?.length)return void a(r,n.value);var i=settings[s].prv_name.find(e=>ls(e));if(!i)return void a(r,n.value);e=ls(i),localStorage.removeItem(i),ls(r,e)}n=settings[s].value;switch(e){case"0":case"1":settings[s].value=1==e;break;default:settings[s].value=parseInt(e)}e=settings[s].value;var o=settings[s].value!==n;let t=`#setting_${s}>div`;switch(s){case"set_hidden_unlocked":return void(settings[s].value&&$("#setting_extra_container").removeClass("hidden"));case"set_show_hidden":o&&$(".settings_extra").removeClass("hidden");break;case"ser_rand_show":$("#nav_search_random").toggleClass("blank",!e),$(".setting_req_random").toggleClass("disabled",!e);break;case"rep_long_press_time":return void(o&&($("#three_way_time>div").removeClass("selected"),$("#three_way_"+e).addClass("selected")));case"rep_show_artist":t=".rep_tweet_a";break;case"rep_long_press_copy":$("#three_way_time").toggleClass("disabled",!e);break;case"rep_show_group":$("#filter_set").toggleClass("hidden",!e)}o&&$(t).toggleClass("selected")}}}),ls("theme")){case"light":case"mixed":$("#setting_dark_container>div").addClass("disabled");break;case"extra":$("#setting_dark").click()}}function process_data(){$("#input").val("");{const a=new Date("2021-01-01");for(var e in video)video[e][video_idx.date]=(e=video[e][video_idx.date],s=void 0,(s=new Date(a)).setDate(a.getDate()+e),s.toISOString().slice(0,10));for(var t in entry)entry[t][entry_idx.note]=note_index[entry[t][entry_idx.note]];note_index=null}var s,n;for(n in song)entry_proc[n]=[];for(let e=0;e<entry.length;++e)entry[e][entry_idx.type]&&entry_proc[entry[e][0]].push(e);$("#info_version").html(version),$("#info_last-update").html(video[video.length-1][video_idx.date]),auto_display_max=Math.floor(7*window.innerHeight/window.innerWidth);var r=[];for(let e=1;e<song.length;++e)processed_song_name.push(song[e][song_idx.name].toLowerCase().normalize("NFKC").trim()),2<e&&song[e][song_idx.name].trim()===song[e-1][song_idx.name].trim()&&auto_skips.push(e);for(let e=0;e<song.length;++e){for(var i in rep_list[e]=0,entry_proc[e])rep_list[e]|=entry[entry_proc[e][i]][entry_idx.type];for(var o in r[e]=[...new Set(entry_proc[e])],rep_hits_solo[e]=[],r[e])rep_hits_solo[e]=rep_hits_solo[e].concat(split_to_solo(entry[r[e][o]][entry_idx.type]));rep_hits_solo[e]=[...new Set(rep_hits_solo[e])].filter(Number)}}function load_url_para(){var s=new URLSearchParams(window.location.search),e=(s.delete("key"),s.delete("reset_settings"),window.history.pushState(null,null,""+document.location.href.split("?")[0]+(s.size?"?"+s:"")),s.get("sfilter")&&(e=[1&(e=parseInt(s.get("sfilter")))?"":"nia",2&e?"":"momo",4&e?"":"kirara",8&e?"":"yuco",16&e?"":"shiro",32&e?"":"chui"],"rep"!==s.get("page")&&!s.get("rfilter")||e.forEach(e=>e?$("#filter_icon_container .icon_"+e).click():null),"search"!==s.get("page")&&!s.get("search")||e.forEach(e=>e?$(".singer_icon.icon_"+e).click():null)),s.get("page"));if(e&&"home"!==e&&jump2page(e),null!==s.get("search")){"search"!==current_page&&jump2page("search");var t=s.get("search").split(",");if(1<t.length){let e=0;for(var n in t){n=parseInt(t[n]);1<=n&&n<song.length&&(hits[e++]=song_lookup[n])}is_searching_from_rep=1,search_memory="!bulk_load_flag",update_display(1)}else 1<=t&&t<song.length&&($("#input").val(song[song_lookup[t]][song_idx.name]),$("#input").blur())}if(null!==s.get("rfilter")){"repertoire"!==current_page&&jump2page("rep");var r,i,o=[];let e=parseInt(s.get("rfilter")),t=0;for(;e;)e%2&&o.push(t),e>>=1,t++;for(r in rep_anisong)o.includes(rep_anisong[r][1])||$("#anisong_"+r).click();for(i in rep_genre)o.includes(rep_genre[i][1])||$("#general_"+i).click()}}function memcount_load_rep(){clearInterval(memcount_rep_int);var e,t=[];for(let e=0;e<33;++e)t[e]=[];for(e in rep_hits_solo)for(var s in rep_hits_solo[e]){var n,r=split_to_solo(rep_hits_solo[e][s]);for(n in r)t[r[n]].push(e)}t.map(e=>[...new Set(e)]);var i=[t[4].length,t[2].length,t[1].length,t[32].length,t[16].length,t[8].length,new Set([...t[4],...t[32]]).size,new Set([...t[2],...t[16]]).size,new Set([...t[1],...t[8]]).size],o=[4,2,1,32,16,8,4,2,1];let a="";for(let e=0;e<(key_valid?6:3);++e)a+=`<div class="memcount_rep_block"><div class="singer_${o[e]}m memcount_rep_name">${singer_lookup[o[e]]}</div><div class="singer_${o[e]}">${i[e]}</div></div>`;if(key_valid){a+='<div></div><div class="memcount_rep_sum"></div><div></div>';for(let e=6;e<9;++e)a+=`<div class="memcount_rep_block_sum memcount_rep_singer_${o[e]}"><div>${i[e]}</div></div>`}$("#memcount_rep_content").toggleClass("extra_content",key_valid),$("#memcount_rep_content").html(a)}function display_date(e){e="string"==typeof e?new Date(e):e;return e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+String(e.getDate()).padStart(2,"0")}document.addEventListener("DOMContentLoaded",async function(){if(window.innerHeight/window.innerWidth<1.5)return $("#v_screen").addClass("post_switch"),$("#v_screen").height("100%"),$("#v_screen").width(.5625*window.innerHeight),$("#v_screen").attr("src","index.html"+window.location.search),$("body > div").addClass("post_switch"),$("body").addClass("post_switch"),(e=new URLSearchParams(window.location.search)).delete("key"),window.history.pushState(null,null,""+document.location.href.split("?")[0]+(e.size?"?"+e:"")),void(song=song_lookup=note_index=null);let t;function s(e){return r?CryptoJS.AES.decrypt(e,t).toString(CryptoJS.enc.Utf8):e}var e=new URLSearchParams(window.location.search);t=e.get("key");let n=!0,r=0;await getSHA384Hash(ls("pcsl_key"))===key_hash[1]?(r=2,t=ls("pcsl_key")):""!==t&&await getSHA384Hash(t)===key_hash[1]?(r=2,n=!1,ls("pcsl_key",t)):await getSHA384Hash(ls("pcsl_key"))===key_hash[0]?(r=1,t=ls("pcsl_key")):""!==t&&await getSHA384Hash(t)===key_hash[0]&&(r=1,n=!1,ls("pcsl_key",t)),(key_valid=Boolean(r))&&(rep_singer=[1,1,1,1,1,1]),ls("pcsl_version_hash")===version_hash&&n?(e=ls("pcsl_data").split("\n"),video=JSON.parse(s(e[0])),entry=JSON.parse(s(e[1])),init()):($("#loading_text").html("Downloading data..."),fetch(`data_${r}.txt`).then(e=>(e.ok||(console.log(`failed to load data_${r}.txt`),$("#loading_text").html("Failed to download data.<br />Please reload to try again.<br /><br />Contact site administrator<br />if this problem persists.")),e.text())).then(e=>{var t=e.split("\n");video=JSON.parse(s(t[0])),entry=JSON.parse(s(t[1])),ls("pcsl_data",e),ls("pcsl_version_hash",version_hash),init()})),key_valid?(member_display_order=[7,6,5,3,4,2,1,32,16,8],$(".extra").removeClass("hidden"),$(".memcount_subblock").removeClass("anti_extra"),$(".anti_extra").html(""),$(".anti_extra").addClass("hidden"),$("#home_key").removeClass("hidden"),$("#filter_entry_icon_container").addClass("hidden"),$("#filter_entry_icon_extra").removeClass("hidden")):part_filter=[1,1,1,0,0,0]}),$(function(){$(document).on("click","#nav_menu",function(e){e.preventDefault(),prevent_menu_popup||($("#menu_container").toggleClass("hidden"),$("#nav_menu").toggleClass("menu_opened"),$(document.body).toggleClass("no_scroll"))}),$(document).on("click","#nav_to_top",function(e){if(e.preventDefault(),prevent_menu_popup)return;let t=$("html,body").scrollTop(),s=t/33;let n=setInterval(function(){t-=s,$("html,body").scrollTop(t),t<=0&&clearInterval(n)},1);"repertoire"===current_page&&settings.rep_selected_first.value&&rep_display()}),$(document).on("click","#menu_container",function(e){$(e.target).parents(".defog").length||$(e.target).hasClass("defog")||($("#menu_container").addClass("hidden"),$("#nav_menu").removeClass("menu_opened"),$(document.body).removeClass("no_scroll"))}),$(document).on("click",".menu2page",function(e){e=$(e.target).attr("id").replace("menu2page_","");e!==current_page&&(jump2page(e),$("#menu_container").addClass("hidden"),$("#nav_menu").removeClass("menu_opened"),$(document.body).removeClass("no_scroll"))}),$(document).on("click","#menu_setting",function(){$("#popup_container").removeClass("hidden"),$("#settings").removeClass("hidden"),$("#menu_container").addClass("hidden"),$("#nav_menu").removeClass("menu_opened"),prevent_menu_popup=!0}),$(document).on("click","#menu_count",function(){if($("#popup_container").removeClass("hidden"),$("#memcount").removeClass("hidden"),$("#menu_container").addClass("hidden"),$("#nav_menu").removeClass("menu_opened"),prevent_menu_popup=!0,""===$("#memcount_content").html()){var e,t=[];for(let e=0;e<33;++e)t[e]=[0,0,0];for(let e=0;e<entry.length;++e)is_private(e)?t[entry[e][entry_idx.type]][2]++:entry[e][entry_idx.note].includes("【メン限")?t[entry[e][entry_idx.type]][1]++:t[entry[e][entry_idx.type]][0]++;let s='<table id="memcount_table"><tr><th></th><th>通常</th><th>メン限</th><th>非公開</th></tr>';for(e in member_display_order){var n=member_display_order[e];s+=`<tr class="memcount_row"><td class="memcount_name singer_${n}"><div>${singer_lookup[n]}</div></td>`;for(let e=0;e<3;++e)s+=`<td class="${0===t[n][e]?"memcount_empty":"singer_"+n}">${t[n][e]}</td>`;s+="</tr>"}var r,i=[0,0,0,0,0,0];for(r in entry){var o,a=split_to_solo(entry[r][entry_idx.type]);for(o in a)i[part_rom.indexOf(a[o])]++}if(key_valid){s+='</table><div id="memcount_sum_warpper" class="memcount_sum"><div class="memcount_sum_icon col-1 colspan-2"></div>';for(let t=0;t<2;++t){for(let e=2;0<=e;--e)s+=`<div class="singer_${1<<3*t+e}">${i[3*t+e]}</div>`;s+="<div></div>"}}else{s+='</table><div class="memcount_sum"><div class="memcount_sum_icon"></div>';for(let e=2;0<=e;--e)s+=`<div class="singer_${1<<e}">${i[e]}</div>`}$("#memcount_content").html(s+"</div>"),memcount_rep_int=setInterval(memcount_load_rep,1)}}),$(document).on("click","#menu_info",function(){$("#popup_container").removeClass("hidden"),$("#information").removeClass("hidden"),$("#menu_container").addClass("hidden"),$("#nav_menu").removeClass("menu_opened"),prevent_menu_popup=!0});{let t=0;$(document).on("click",function(e){$(e.target).closest(".settings_title").length?5==++t&&(ls("pcsl_set_hidden_unlocked",1),$("#setting_extra_container").removeClass("hidden")):t=0}),$(document).on("click","#three_way_theme>div",function(){var e=this.id.replace("three_way_","");$("#setting_dark").toggleClass("disabled","dark"!==e),"dark"!==e&&($("#setting_dark>div").removeClass("selected"),$("#dark_normal").addClass("selected")),document.documentElement.setAttribute("theme",e),ls("theme",e),$("#three_way_theme>div").removeClass("selected"),$(this).addClass("selected")}),$(document).on("click","#three_way_time>div",function(){var e;$(".setting_copy_time").hasClass("disabled")||(ls("pcsl_rep_long_press_time",e=parseInt(this.id.replace("three_way_",""))),settings.rep_long_press_time.value=e,$("#three_way_time>div").removeClass("selected"),$(this).addClass("selected"))}),$(document).on("click",".two_way:not(.disabled)",function(){$(this).children().toggleClass("selected");var e=this.id.replace("setting_","");switch(e){case"set_show_hidden":$(".settings_extra").toggleClass("hidden",toggle_setting(e));break;case"dark":var t=$("#dark_extra").hasClass("selected")?"extra":"dark";ls("theme",t),document.documentElement.setAttribute("theme",t);break;case"ser_show_private":toggle_setting(e),update_display(1);break;case"ser_rand_show":t=toggle_setting(e);$("#nav_search_random").toggleClass("blank",t),$(".setting_req_random").toggleClass("disabled",!t);break;case"ser_rand_req_empty":toggle_setting(e),$("#nav_search_random").toggleClass("disabled",!settings.ser_via_song_name.value||!settings.ser_rand_req_empty.value&&""!==search_memory);break;case"rep_show_release":toggle_setting(e),"repertoire"===current_page&&rep_display();break;case"rep_long_press_copy":$(".setting_copy_time").toggleClass("disabled",!toggle_setting(e));break;case"rep_show_group":$("#filter_set").toggleClass("hidden",!toggle_setting(e));break;case"ser_select_input":case"pdt_on_change_only":case"pdt_reading":case"pdt_copy_on_select":case"rep_select":toggle_setting(e)}}),$(document).on("click","#settings_reset_button, #settings_reset_nah",function(){$(".settings_reset>span").toggleClass("hidden"),$("#settings_reset_confirm").toggleClass("blank")}),$(document).on("click","#settings_reset_yes",function(){var e=new URL(window.location.href);e.searchParams.set("reset_settings",""),window.location.href=e.toString()})}$(document).on("click","#memcount, #memcount_rep",function(e){$(e.target).closest(".popup_frame").length&&$(".memcount_subblock").toggleClass("hidden")}),$(document).on("click","#popup_container",function(e){$(e.target).closest(".popup_frame").length||($(".popup_frame").addClass("hidden"),$("#popup_container").addClass("hidden"),$(document.body).removeClass("no_scroll"),prevent_menu_popup=!1)}),$(document).on("click",".home_member_icon_bg",function(){jump2page("rep"),$(".filter_icon").removeClass("selected"),rep_singer.fill(0),$(".filter_icon."+$(this).children().attr("class")).click()}),$(document).on("click","#home_key_reset_button, #home_key_reset_nah",function(){$(".home_key_reset>span").toggleClass("hidden"),$("#home_key_comfirm").toggleClass("blank")}),$(document).on("click","#home_key_reset_yes",function(){localStorage.removeItem("pcsl_version_hash"),localStorage.removeItem("pcsl_key"),window.location=window.location.href.split("?")[0]})});const private_regex=/非公開|記録用|アーカイブなし/;function is_private(e){return private_regex.test(entry[e][entry_idx.note])}function bold(e,t){var s=e.toLowerCase().indexOf(t.toLowerCase());return-1===s||""===t?e:e.substring(0,s)+"<b>"+e.substring(s,s+t.length)+"</b>"+e.substring(s+t.length)}function copy_of(e){return"object"==typeof e?JSON.parse(JSON.stringify(e)):e}function get_last_sang(s,e=[4,2,1,32,16,8]){for(let t=entry_proc[s].length-1;0<=t;--t)if(e.some(e=>(e&entry[entry_proc[s][t]][entry_idx.type])===e))return new Date(video[entry[entry_proc[s][t]][entry_idx.video]][video_idx.date]);return 0}function to8601(e){try{return new Date(e.substring(6),parseInt(e.substring(3,5))-1,e.substring(0,2))}catch{return console.log(e+" is not in dd-MM-yyyy format"),-1}}const today=(new Date).setHours(0,0,0,0);function get_date_different(e,t=today){return e="string"==typeof e?new Date(e):e,t=void 0===t?t:new Date(t),Math.round(Math.abs(e-t)/864e5)}function get_sang_count(s,e=[4,2,1,32,16,8]){let n=mem_count=0;for(let t in entry_proc[s])e.some(e=>(e&entry[entry_proc[s][t]][entry_idx.type])===e)&&(n++,entry[entry_proc[s][t]][entry_idx.note].includes("【メン限"))&&mem_count++;return[n,mem_count]}function jump2page(e){if(e=new Object({rep:"repertoire",repertoire:e,search:e,home:e})[e]){switch(current_page=e,$(".menu2page_selected").removeClass("menu2page_selected"),$("#menu2page_"+e).addClass("menu2page_selected"),$(".section_container").addClass("hidden"),$("#"+e+"_section").removeClass("hidden"),$("#nav_control_group div:not(#nav_to_top)").addClass("hidden"),$("#search_display").html(""),$("#rep_display").html(""),e){case"home":$("#nav_title").html("ホーム"),$("#nav_dummy").removeClass("hidden");break;case"search":$("#nav_search_random").removeClass("hidden"),$("#nav_title").html("曲検索"),$("#input").val(""),search();break;case"repertoire":$("#repertoire_section").removeClass("hidden"),$("#nav_share").removeClass("hidden"),$("#nav_share").toggleClass("disabled",!rep_selected.length),$("#nav_title").html("レパートリー"),rep_input_memory="",rep_search();break;default:return-1}$(window).scrollTop(0)}}function split_to_solo(e){switch(e){case 3:return[1,2];case 5:return[1,4];case 6:return[2,4];case 7:return[1,2,4];case 10:return[2,8];case 12:return[4,8]}return[e]}let copy_popup_flag=!1;function copy_popup(){copy_popup_flag||(copy_popup_flag=!0,$("#copy_popup").attr("class","fade_out"),setTimeout(()=>{copy_popup_flag=!1,$("#copy_popup").attr("class","hidden")},1500))}function to_html(e){return e.replaceAll('"',"&quot;").replaceAll("'","&apos;")}function to_non_html(e){return e.replaceAll("&quot;",'"').replaceAll("&apos;","'")}const getSHA384Hash=async e=>{e=(new TextEncoder).encode(e),e=await window.crypto.subtle.digest("SHA-384",e);return Array.from(new Uint8Array(e)).map(e=>e.toString(16).padStart(2,"0")).join("")};function refresh_bgColour(){document.documentElement.setAttribute("theme",ls("theme"))}function ls(e,t){return void 0===t?localStorage.getItem(e):localStorage.setItem(e,t)}let search_memory="",part_filter=[1,1,1,1,1,1];const part_rom=[1,2,4,8,16,32];let hide_song=new Array,auto_display_max,auto_display_count,is_searching_from_rep=!1,input_focused=!1,hits=($(function(){let t;$(document).on("click","#nav_search_random",function(){if(!($(this).hasClass("disabled")&&!settings.ser_rand_req_empty.value||prevent_menu_popup)){let s=0;if(part_filter.forEach((e,t)=>e?s+=part_rom[t]:null),s){let e;for(;;)if((e=1+Math.floor(Math.random()*song.length))!==t&&rep_list[e]&s&&(settings.ser_show_private.value||entry_proc[e].some(e=>entry[e][entry_idx.type]&s&&!is_private(e))))break;t=e,$("#search_input").val(song[e][song_idx.name]),is_searching_from_rep=0,search()}}});{$(document).on("input","#search_input",function(){auto_search()}),$(document).on("mousedown",".auto_panel",function(){$("#search_input").val(to_non_html(this.id))});let t=0;function s(){$("#ser_opt_asd>div:nth-child(2)").html(new Array("古い順&nbsp;(⇌新しい順)","新しい順&nbsp;(⇌古い順)","正順&nbsp;(⇌逆順)","逆順&nbsp;(⇌正順)")[(settings.ser_sort_by_date.value?0:2)+(settings.ser_sort_asd.value?0:1)])}$(document).on("keydown",function(e){e=Object({38:-1,40:1})[e.keyCode];$("#search_auto").hasClass("hidden")||void 0===e||auto_input_memory!==get_search_input()||!t&&-1===e||(t=Math.max(1,Math.min(auto_display_max,auto_display_count,t+e)),$("#search_auto>div").removeClass("selected"),$(`#search_auto>div:nth-child(${t})`).addClass("selected"))}),$(document).on("keydown",function(e){9===e.keyCode&&"search"===current_page&&(e.preventDefault(),$("#search_input").click(),$("#search_input").focus())}),$(document).on("blur","#search_input",function(){$("#search_auto").addClass("hidden"),input_focused=!1,is_searching_from_rep?is_searching_from_rep=0:$("#nav_share").toggleClass("disabled",!is_searching_from_rep),search()}),$(document).on("keydown",function(e){13===e.keyCode&&"search"===current_page&&(t&&(t=0,e=$(".auto_panel.selected")[0].id,$("#search_input").val(e),settings.pdt_copy_on_select.value)&&(navigator.clipboard.writeText(e),copy_popup()),$("#search_input").blur())}),$(document).on("click","#search_input, #rep_input",function(){if(!input_focused){if(input_focused=!0,settings.ser_select_input.value&&"search_input"===this.id||settings.rep_select_input.value&&"rep_input"===this.id){let e=this;setTimeout(function(){e.setSelectionRange(0,$(e).val().length)},0)}else"!bulk_load_flag"===search_memory&&"search_input"===this.id&&($(this).val(""),$("#nav_search_random").removeClass("disabled"),$("#nav_share").addClass("disabled"));"search_input"===this.id&&auto_search()}}),$(document).on("click","#ser_opt_button",function(){$(this).toggleClass("opened"),$("#ser_opt_container").toggleClass("hidden")}),$(document).on("click",".singer_icon",function(){part_filter[part_rom.indexOf(parseInt($(this).attr("name")))]^=1,part_filter.every(e=>!e)?(part_filter=part_filter.map(()=>1),$(".singer_icon").addClass("selected")):$(this).toggleClass("selected"),search_memory="",search()}),$(document).on("click",".ser_opt_gp1",function(){var e="ser_opt_songname"===this.id;e!==settings.ser_via_song_name.value&&(settings.ser_via_song_name.value=e,$(".ser_opt_gp1>.radio").toggleClass("selected"),$("#search_input").val(""),$("#search_input").attr("placeholder",settings.ser_via_song_name.value?"曲名/読みで検索":"アーティスト名で検索"),$("#search_display").html(""),search_memory="",$("#nav_search_random").toggleClass("disabled",!settings.ser_via_song_name.value))}),$(document).on("click",".ser_opt_gp2",function(){var e="ser_opt_date"===this.id;e!==settings.ser_sort_by_date.value&&(settings.ser_sort_by_date.value=e,$(".ser_opt_gp2>.radio").toggleClass("selected"),s(),update_display())}),$(document).on("click","#ser_opt_asd",function(){settings.ser_sort_asd.value^=1,s(),update_display()}),$(document).on("click",".song_name_container",function(e){$(e.target).hasClass("song_copy_icon")||(e=this.id,hide_song.includes(e)?hide_song.splice(hide_song.indexOf(e),1):hide_song.push(e),$(".song_"+e).toggleClass("hidden"),$("#fold_"+e).toggleClass("closed"))}),$(document).on("click",".song_copy_icon",function(){navigator.clipboard.writeText(song[parseInt(this.id.replace("copy_name_",""))][song_idx.name]),copy_popup()}),$(document).on("click",".entry_share",function(e){e.preventDefault();let s=parseInt(this.id.replace("entry_",""));e="https://www.youtube.com/watch?v="+video[entry[s][entry_idx.video]][video_idx.id];fetch("https://noembed.com/embed?dataType=json&url="+e).then(e=>e.json()).then(function(t){if(t.title){let e;e=entry[s][entry_idx.time]?song[entry[s][entry_idx.song_id]][song_idx.name].trim()+" / "+song[entry[s][entry_idx.song_id]][song_idx.artist]+" @"+t.title+"\n(youtu.be/"+video[entry[s][entry_idx.video]][video_idx.id]+timestamp(s)+")":t.title+"\n(youtu.be/"+video[entry[s][entry_idx.video]][video_idx.id]+")",window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(e),"_blank")}else alert("動画タイトル取得できませんでした。")})})}}),[]),auto_input_memory="";function auto_search(){var r=get_search_input();if(auto_input_memory!==r||settings.pdt_on_change_only.value)if((auto_input_memory=r)&&settings.ser_via_song_name.value){let s=[],n=[];for(var e in series_lookup)series_lookup[e].includes(r)&&s.push(e);var i,o,a=/[^\u3040-\u309F\u30FC\u30F4]/.test(r),_=r2k(r);for(let t=1;t<song.length&&s.length<auto_display_max;++t)if(!auto_skips.includes(t))if(a){let e=processed_song_name[t].indexOf(r);-1===(e=-1===e&&song[t][song_idx.reading].includes(" ")&&song[t][song_idx.reading].includes(r)?1:e)&&_&&(e=song[t][song_idx.reading].indexOf(_)),l(t,e)}else l(t,song[t][song_idx.reading].indexOf(r));auto_display_count=0;let t="";for(i in s){let e=auto_display=song_name="";auto_display="string"==typeof s[i]?song_name=s[i]:(e=bold(song[s[i]][song_idx.reading].split(" ")[0],r),bold(song_name=song[s[i]][song_idx.name],r)),t+=`<div id="${to_html(song_name)}" class="auto_panel${0==auto_display_count++?" auto_first":""}">`+`<div class="auto_reading${e&&settings.pdt_reading.value?"":" auto_no_reading"}">${e}</div>`+`<div class="auto_display">${auto_display}</div>`+"</div>"}for(o in n){if(auto_display_count++>=auto_display_max)break;t+=`<div id="${to_html(song[n[o]][song_idx.name])}" class="auto_panel${0===auto_display_count?" auto_first":""}">`+`<div class="auto_reading${settings.pdt_reading.value?"":" auto_no_reading"}">${song[n[o]][song_idx.reading].split(" ")[0]}</div>`+`<div class="auto_display">${bold(song[n[o]][song_idx.name],r)}</div>`+"</div>"}function l(e,t){t?0<t&&n.push(e):s.push(e)}$("#search_auto").html(t),$("#search_auto").toggleClass("hidden",!t),auto_pointer=0,$("#search_auto>div").removeClass("selected")}else $("#search_auto").addClass("hidden")}function search(){if(is_searching_from_rep)update_display();else{let s=get_search_input();if(s!==search_memory)if(search_memory=s){$("#nav_search_random").toggleClass("disabled",!settings.ser_rand_req_empty.value);const r=s in series_lookup?s:"",i=attr_idx.includes(s)?attr_idx.indexOf(s):0;hits=[];let e=0;if(r)song.forEach((e,t)=>t&&(i?e[song_idx.attr]&1<<i:e[song_idx.reading].includes(s))?hits.push(t):null);else for(var t=r2k(s),n=1;n<song.length&&hits.length<200;++n)(settings.ser_via_song_name.value?processed_song_name[n].includes(s)||song[n][song_idx.reading].toLowerCase().includes(s)||song[n][song_idx.reading].includes(t):song[n][song_idx.artist].toLowerCase().includes(s))&&(processed_song_name[n]===s?hits.splice(e++,0,n):hits.push(n));update_display()}else $("#search_display").html(""),$("#nav_search_random").removeClass("disabled")}}function update_display(e=!1){if(e|=is_searching_from_rep,$("#search_auto").addClass("hidden"),search_memory||e){let r=-1;var a=[];let i=found_entries=0,o="";for(let n=0;n<hits.length&&n<=200;++n){let t=[];t=settings.ser_sort_by_date.value?entry_proc[hits[n]].sort((e,t)=>settings.ser_sort_asd.value?e-t:t-e):entry_proc[hits[n]].sort((e,t)=>entry[e][entry_idx.type]===entry[t][entry_idx.type]?e-t:(settings.ser_sort_asd.value?1:-1)*(display_order[entry[e][entry_idx.type]]-display_order[entry[t][entry_idx.type]])),found_entries+=t.length;for(let e=0;e<t.length;++e){let s=t[e];var _=!part_filter.some((e,t)=>e&&part_rom[t]&entry[s][entry_idx.type]);if(!(_||!settings.ser_show_private.value&&is_private(s))){if(r!==hits[n]){o+=(-1!==r?"</div>":"")+'<div class="song_container">',r=hits[n],a.push(r);_=!hide_song.includes(r);let t=song[r][song_idx.name].normalize("NFKC"),s=0;for(let e=0;e<t.length;++e)s+=/[ -~]/.test(t.charAt(e))?1:2;["secret base ~君がくれたもの~","かくしん的☆めたまるふぉ～ぜっ！","ススメ☆オトメ ~jewel parade~","Time after time ～花舞う街で～"].includes(t)&&(s=0),"みくみくにしてあげる♪【してやんよ】"===t&&(t="みくみくにしてあげる♪<br />【してやんよ】"),/([^~]+~+[^~])/g.test(t)&&28<=s&&(t=t.substring(0,t.search(/~/g))+"<br />"+t.substring(t.search(/~/g))),o+=`<div class="song_name_container" id="${r}">`+`<div class="song_rap"><div class="song_name">${t}</div>`+`<div class="song_credit${_?"":" hidden"}${30<song[r][song_idx.artist].length?" long_credit":""} song_${r}">`+song[r][song_idx.artist]+'</div></div><div class="song_icon_container">'+`<div id="fold_${r}" class="song_fold_icon${_?"":" closed"}"></div>`+`<div id="copy_name_${r}" class="song_copy_icon song_${r}${_?"":" hidden"}"></div>`+"</div></div>"}let e=entry[s][entry_idx.note];_=e.includes("【メン限");if(_&&(e=e.replace(/【メン限アーカイブ】|【メン限】/g,"")),o+=`<div class="entry_container singer_${entry[s][entry_idx.type]}${_?"m":""} song_${r}${hide_song.includes(r)?" hidden":""}">`+`<a href="https://youtu.be/${video[entry[s][entry_idx.video]][video_idx.id]}${timestamp(s)}" target="_blank">`+'<div class="entry_primary">'+`<div class="entry_date">${display_date(video[entry[s][entry_idx.video]][video_idx.date])}</div>`+`<div class="entry_singer">${singer_lookup[entry[s][entry_idx.type]]}</div>`+`<div class="mem_display">${_?"メン限":""}</div>`+`<div class="entry_share" id="entry_${s}"></div>`+"</div>"+(e?`<div class="entry_note">${e}</div>`:"")+"</a></div>",400<=++i){n=200;break}}}}hits.length?found_entries?""===o&&(o+='<div class="search_no_result">非表示動画のみ'):o+='<div class="search_no_result">歌記録なし':o+='<div class="search_no_result">曲検索結果なし',$("#search_display").html(o+'</div><div class="general_vertical_space"></div>');for(let e=0;e<hide_song.length;++e)a.includes(hide_song[e])||hide_song.splice(e--,1)}}function timestamp(e){e=entry[e][entry_idx.time];return e?"?t="+e:""}function get_search_input(){return $("#search_input").val().normalize("NFKC").toLowerCase().trim()}const attr_idx=["others","アニソン","ラブライブ","アイマス","マクロス","J-POP","ボカロ","ジブリ","特撮","ロック","歌謡曲","disney"];let rep_list=[],rep_singer=[1,1,1],rep_anisong={lovelive:[1,2],imas:[1,3],macros:[1,4],other:[1,1]},rep_genre={jpop:[1,5],voc:[1,6],jib:[1,7],tok:[1,8],rock:[1,9],kay:[1,10],dis:[1,11],other:[1,0]};const oke_gone=["ノーザンクロス"];let selected_member=[4,2,1,32,16,8];const selected_member_ram=[4,2,1,32,16,8],name_lookup=["kirara","momo","nia","chui","shiro","yuco"],exist=e=>selected_member.includes(e);let longpress_timer,post_longpress_timer,is_long_pressing=!1,rep_hits=($(function(){$(document).on("blur","#rep_input",function(){input_focused=!1,rep_search()}),$(document).on("keydown",function(e){13===e.keyCode&&"repertoire"===current_page&&$("#rep_input").blur()}),$(document).on("keydown",function(e){9===e.keyCode&&"repertoire"===current_page&&(e.preventDefault(),$("#rep_input").click(),$("#rep_input").focus())}),$(document).on("click","#filter_display",function(){$("#filter_close").toggleClass("closed"),$("#filter_content").toggleClass("hidden")}),$(document).on("click","#filter_set",function(){settings.rep_is_union.value^=1,$("#filter_set>span").toggleClass("selected"),rep_search(!0)}),$(document).on("click",".filter_icon",function(){var e=$(this).attr("class").split(/\s+/).find(e=>e.startsWith("icon_")).replace("icon_","");rep_singer[name_lookup.indexOf(e)]^=1,rep_singer.every(e=>!e)?(rep_singer=rep_singer.map(()=>1),$(".filter_icon").addClass("selected")):$(this).toggleClass("selected"),rep_search(!0)}),$(document).on("click",".filter_anisong",function(){var e=this.id.replace("anisong_","");if("all"===e)for(var t in $(".filter_anisong .checkbox").toggleClass("selected",!$("#anisong_all .checkbox").hasClass("selected")),rep_anisong)rep_anisong[t][0]=$("#anisong_all .checkbox").hasClass("selected")?1:0;else if($(`#${this.id} .checkbox`).toggleClass("selected"),rep_anisong[e][0]^=1,$(`#${this.id} .checkbox`).hasClass("selected")){for(var s in rep_anisong)if(!rep_anisong[s][0])return void rep_search();$("#anisong_all .checkbox").addClass("selected")}else $("#anisong_all .checkbox").removeClass("selected");rep_search()}),$(document).on("click",".filter_genre",function(){var e=this.id.replace("genre_",""),t="#genre_all .checkbox";if("all"===e)for(var s in $(".filter_genre .checkbox").toggleClass("selected",!$(t).hasClass("selected")),rep_genre)rep_genre[s][0]=$(t).hasClass("selected")?1:0;else if($(`#${this.id} .checkbox`).toggleClass("selected"),rep_genre[e][0]^=1,$(`#${this.id} .checkbox`).hasClass("selected")){for(var n in rep_genre)if(!rep_genre[n][0])return void rep_search();$(t).addClass("selected")}else $(t).removeClass("selected");rep_search()}),$(document).on("click",".filter_sort",function(){var e=this.id.replace("sort_","");settings.rep_sort_method.value!==e&&($(".filter_sort .radio").removeClass("selected"),$(`#${this.id} .radio`).addClass("selected"),settings.rep_sort_method.value=e,update_rep_sort_display(),rep_display())}),$(document).on("click","#filter_asd",function(){settings.rep_sort_asd.value^=1,update_rep_sort_display(),rep_display()}),$(document).on("click","#sort_selected",function(){settings.rep_selected_first.value^=1,$("#sort_selected .checkbox").toggleClass("selected"),rep_display()}),$(document).on("click",".rep_song_container",function(){var e;is_long_pressing||(e=parseInt(this.id.replace("rep_song_","")),$(this).hasClass("selected")?(rep_selected.splice(rep_selected.indexOf(e),1),rep_selected.length||$("#nav_share").addClass("disabled")):(rep_selected.push(e),$("#nav_share").removeClass("disabled")),$(this).toggleClass("selected"))}),$(document).on("mousedown touchstart",".rep_song_container",function(){if(settings.rep_long_press_copy.value){let e=parseInt(this.id.replace("rep_song_",""));longpress_timer=setTimeout(function(){navigator.clipboard.writeText(song[e][song_idx.name]),copy_popup(),is_long_pressing=!0,post_longpress_timer=setTimeout(function(){is_long_pressing=!1,clearTimeout(post_longpress_timer)},settings.rep_long_press_time.value-100)},settings.rep_long_press_time.value)}}),$(document).on("mouseup mouseleft touchend touchmove",".rep_song_container",function(){clearTimeout(longpress_timer)}),$(document).on("click","#nav_share",function(){"repertoire"!==current_page||$(this).hasClass("disabled")||prevent_menu_popup||(prevent_menu_popup=!0,$(document.body).toggleClass("no_scroll"),$("#rep_share").removeClass("hidden"),$("#popup_container").removeClass("hidden"))}),$(document).on("click","#rep_share_search",function(){$("#popup_container").click(),is_searching_from_rep=1,jump2page("search"),hits=copy_of(rep_selected),search_memory="!bulk_load_flag",$("#input").val(""),update_display(1)}),$(document).on("click","#rep_share_link",function(){$("#popup_container").click();let t="szk31.github.io/pcsl/?search="+song_lookup.indexOf(rep_selected[0]);for(let e=1;e<rep_selected.length;++e)t+=","+song_lookup.indexOf(rep_selected[e]);navigator.clipboard.writeText(t),copy_popup()}),$(document).on("click","#rep_share_tweet",function(){$("#rep_share").addClass("hidden"),$("#rep_tweet").removeClass("hidden")}),$(document).on("click",".rep_tweet_a",function(){settings.rep_show_artist.value!=("rep_tweet_ya"===this.id)&&(settings.rep_show_artist.value^=1,$(".rep_tweet_a").toggleClass("selected"),update_setting("rep_show_artist"))}),$(document).on("click",".rep_tweet_submit",function(){let e="";for(var t in rep_selected)e+=`${song[rep_selected[t]][song_idx.name]}${settings.rep_show_artist.value?" / "+song[rep_selected[t]][song_idx.artist]:""}\n`;var s=this.id.replace("rep_tweet_","");"t"===s?(navigator.clipboard.writeText(e),copy_popup()):window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(e+{k:"#うたってきららちゃま",m:"#ももっとリクエスト",y:"#つきみゆこ"}[s]),"_blank"),$("#popup_container").click()})}),[]),rep_hits_solo=[],rep_selected=[],rep_input_memory="";function rep_search(e=!1){var t=$("#rep_input").val().normalize("NFKC").trim().toLowerCase();if(t!==rep_input_memory)rep_input_memory=t;else if(!e&&t)return;if(selected_member=[],rep_singer.forEach((e,t)=>e?selected_member.push(selected_member_ram[t]):null),t){if(rep_hits=[],"未披露"===t)entry_proc.forEach((e,t)=>e.length?null:rep_hits.push(t)),rep_hits.shift();else for(let e=1;e<song.length;++e)entry_proc[e].length&&(processed_song_name[e].includes(t)||song[e][song_idx.reading].includes(t))&&rep_hits.push(e);rep_display()}else if(selected_member.length){let t=inv_mask=0;Object.values(rep_anisong).concat(Object.values(rep_genre)).forEach(e=>t+=e[0]<<e[1]),Object.values(rep_anisong).forEach(e=>inv_mask+=e[0]<<e[1]),inv_mask=28&~inv_mask,rep_hits=[];var s=selected_member.reduce((e,t)=>e+t,0);for(i in song)(settings.rep_is_union.value?rep_hits_solo[i].some(exist):rep_list[i]===s)&&song[i][song_idx.attr]&t&&!(song[i][song_idx.attr]&inv_mask)&&rep_hits.push(Number(i));rep_display()}else clearInterval(rep_display_inter),$("#rep_display").html(""),$("#rep_count").html("hits: 0")}let rep_display_inter;function rep_display(){if($("#rep_count").html(`hit${1<rep_hits.length?"s":""}: `+rep_hits.length),(rep_hits=settings.rep_selected_first.value?rep_hits.filter(e=>!rep_selected.includes(e)):rep_hits).length){switch($("#rep_display").html(""),settings.rep_sort_method.value){case"50":rep_hits.sort((e,t)=>(settings.rep_sort_asd.value?1:-1)*(e-t));break;case"count":let s=[];rep_hits.forEach(e=>s[e]=(6===selected_member.length?entry_proc[e]:entry_proc[e].filter(e=>split_to_solo(entry[e][entry_idx.type]).some(e=>selected_member.includes(e)))).length),rep_hits.sort((e,t)=>(settings.rep_sort_asd.value?1:-1)*(s[t]-s[e]));break;case"date":let n=[];rep_hits.forEach(e=>{var t=get_last_sang(e,selected_member);n[e]=t?t.getTime():0}),rep_hits.sort((e,t)=>(settings.rep_sort_asd.value?1:-1)*(n[t]-n[e]));break;case"release":let r=[];rep_hits.forEach(e=>r[e]=to8601(song[e][song_idx.release]).getTime()),rep_hits.sort((e,t)=>(settings.rep_sort_asd.value?1:-1)*(r[t]-r[e]))}settings.rep_selected_first.value&&(rep_hits=rep_selected.concat(rep_hits)),rep_loading_progress=0,rep_display_loop(),clearInterval(rep_display_inter),rep_display_inter=setInterval(rep_display_loop,10)}else $("#rep_display").html('<div class="search_no_result">検索結果なし</div>')}let rep_loading_progress=0;function rep_display_loop(){var t=Math.min(rep_loading_progress+20,rep_hits.length);for(let e=rep_loading_progress;e<t;++e){var s=get_sang_count(rep_hits[e],selected_member),n=get_last_sang(rep_hits[e],selected_member),n=0===n?-1:get_date_different(n),n=`<div class="rep_song_container${rep_selected.includes(rep_hits[e])?" selected":""}${s[0]&&s[0]===s[1]?" rep_mem_only":""}" id="rep_song_${rep_hits[e]}">`+'<div class="rep_song_row1">'+`<div class="rep_song_title">${song[rep_hits[e]][song_idx.name]} / ${song[rep_hits[e]][song_idx.artist]}</div>`+`<div class="rep_song_nooke">${oke_gone.includes(song[rep_hits[e]][song_idx.name])?"オケ消滅":""}</div>`+'</div><div class="rep_song_info grid_block-4">'+`<div>${0===n?"今日":-1===n?"---":n+"日前"}</div>`+`<div>${s[0]}回${0<s[1]?s[0]===s[1]?" (メン限のみ)":` (${s[1]}回メン限)`:""}</div>`+`<div class="rep_song_singer${key_valid?" rep_singer_2rows":""}">`+`<div${rep_hits_solo[rep_hits[e]].includes(4)?' class="singer_4"':""}></div>`+`<div${rep_hits_solo[rep_hits[e]].includes(2)?' class="singer_2"':""}></div>`+`<div${rep_hits_solo[rep_hits[e]].includes(1)?' class="singer_1"':""}></div>`+(key_valid?`<div${rep_hits_solo[rep_hits[e]].includes(32)?' class="singer_32"':""}></div>`+`<div${rep_hits_solo[rep_hits[e]].includes(16)?' class="singer_16"':""}></div>`+`<div${rep_hits_solo[rep_hits[e]].includes(8)?' class="singer_8"':""}></div>`:"")+"</div>"+(settings.rep_show_release.value?`<div class="rep_extra_info"> (${display_date(to8601(song[rep_hits[e]][song_idx.release]))})</div>`:"<div></div>")+"</div></div>";$("#rep_display").append(n)}(rep_loading_progress+=20)>=rep_hits.length&&(clearInterval(rep_display_inter),$("#rep_display").append('<div class="general_vertical_space"></div>'))}function update_rep_sort_display(){let e="";switch(settings.rep_sort_method.value){case"50":e=settings.rep_sort_asd.value?"正順 (⇌逆順)":"逆順 (⇌正順)";break;case"count":e=settings.rep_sort_asd.value?"多い順 (⇌少ない順)":"少ない順 (⇌多い順)";break;case"date":case"release":e=settings.rep_sort_asd.value?"新しい順 (⇌古い順)":"古い順 (⇌新しい順)";break;default:return 1}$("#filter_asd div:nth-child(2)").html(e)}