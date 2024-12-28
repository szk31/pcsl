# [P]etit♡[C]ocotte [S]ong [L]ist <a name="title"></a>
ぷちここ歌まとめ (v1.8.2)

逢魔きらら、胡桃澤もも、看谷にぃあ＋αの歌一覧\
ここでは曲名検索から歌った枠(TS付き)に直接飛べます。\
レパートリー一覧でジャンル別の既存曲も確認できます。

# 目次 <a name="toc"></a>

- [タイトル](#title)
- [リンク集](#links)
- [URLパラメータ](#urlpara)
- 各ページの使い方
  - [曲検索](#search)
  - [レパートリー一覧](#rep)
  - [設定](#setting)
  - [メンバー別合計](#memcount)
- [disclaimer](#disclaimer)
- [update note](#update_note)

# リンク集 <a name="links"></a>

YouTube

[逢魔きらら](https://www.youtube.com/@omakirara)\
[胡桃澤もも](https://www.youtube.com/@kurumizawamomo)

Twitter

[逢魔きらら](https://twitter.com/omakirara)\
[胡桃澤もも](https://twitter.com/kurumizawamomo)


[DB (google sheets)](https://docs.google.com/spreadsheets/d/1DSU1xBxXEZodMQCCu7hWsvdxWt-K0biXI5tt5_RD_DQ/)

製作者 : shizuku3158 ( [twitter](https://twitter.com/8513ukuzihs) )

# URLパラメータの使い方 <a name="urlpara"></a>
URLパラメータとは、szk31<area>.github.io/pcsl/?**page=search&hfilter=4**の?以降の部分です。以下はこのページが対応してるURLパラメータの一覧です。

 - key\
コンテンツのキーです。\
キーの入力がなければ、レベル0のアクセス権になります。\
公開キーは[main.js](https://github.com/szk31/pcsl/blob/main/main.js)にあります。公開キー入力後はレベル1のアクセス権になります。\
レベル2のキーはプライベート用で、公開することはありません。
 - page\
ページを開いたとき表示するページです。デフォルトは **home** 。\
有効な値は以下の4つになります。

| 名前 | 飛ぶページ |
| :---: | :--- |
| home | デフォルト |
| search | 歌検索 |
| repertoire | レパートリー一覧 |
| rep | 同上 |
 - sfilter\
*soft_filter*の略で、`page=search`か`page=repertoire`でアクセスあいた場合、指定したページのメンバー選択が自動的にsfilterのメンバー**のみ**になります。各メンバーの値は下記の説明を参照してください。

| 数値 | bitの位置 | メンバー名 |
| :---: | :---: | :--- |
| 4 | 0b000**1**00 | 逢魔きらら |
| 2 | 0b0000**1**0 | 胡桃澤もも |
| 1 | 0b00000**1** | 看谷にぃあ |
<!---
| 32 | 0b**1**00000 | 小悪熊ちゅい |
| 16 | 0b0**1**0000 | 愛白ふりる |
| 8 | 0b00**1**000 | つきみゆこ |
--->

 - search\
歌検索ページから共有したときのURLから曲の情報を読み取るパラメータです。\
例：`?search=100`の場合、`song[song_lookup[100]]`の曲が読み込まれます。\
`?search=10,11,12,13`の場合、`song[song_lookup[10]]`から`song[song_lookup[13]]`の四曲が読み込まれます。\
連番である必要がありませんが、`1 ≦ x ≦ song.length - 1`である必要があります。
 - rfilter\
*repertoire_filter*の略で、レパートリー一覧のジャンルの特定ができます。\
「現在選択済みのジャンルを共有」機能は開発中です。手動で編集する場合は以下参考してください。

| ジャンル | bit | ジャンル | bit | ジャンル | bit |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ジャンルその他 | 0 | J-POP | 5 | 歌謡曲 | 10 |
| アニソンその他 | 1 | ボカロ | 6 | ディズニー | 11 |
| ラブライブ | 2 | ジブリ | 7 |
| アイマス | 3 | 特撮 | 8 |
| マクロス | 4 | ロック | 9 |

例：アニソンを検索したい場合、「アニソンその他」(1)、「ラブライブ」(2)、「アイマス」(3)、「マクロス」(4)が全部になります。
この場合のrfilter値は、`2^1 + 2^2 + 2^3 + 2^4 = 30`になります。（?rfilter=30）

# 曲検索 <a name="search"></a>
入力ボックスで曲名か、読み、またはシリーズ名で検索できます。\
対応中のシリーズは「マクロス」「ラブライブ」「アイマス」「ジブリ」「物語シリーズ」「まどマギ」「disney」。

入力ボックスの横にある ▼ でメニューを開けます。
1. 歌手選択\
メンバーのアイコンをクリックでトリガーできます。\
選択外にされたメンバーのソロ枠が表示されなくなります。
1. 検索方法\
曲名(読み)で検索とアーティスト名で検索を切り替えます。
1. 並び順\
歌った日付か、歌手で並べます。歌手順は以下になります。\
ぷちここ→ももきら→きらにぃあ→ももにぃあ→きらら→もも→にぃあ
1. 曲予想\
入力する度に、可能な曲がリストされます。\
PCの場合↓と↑キーで移動、Enterで決定できます。

曲名を押すとその曲のエントリーを収納できます。もう一度押すと元に戻ります。<img src="https://szk31.github.io/pcsl/icon/copy_border.png" width="20px" height="20px" alt="copy_icon"> を押すと曲名がコピーされます。\
エントリーの右にある <img src="https://szk31.github.io/pcsl/icon/share.png" width="20px" height="20px" alt="share_icon"> を押すとツイート用の文章でTwitterが開きます。動画を共有するとき、共有する曲が検索されている状態で検索ページを開けます。他のSNSに対応する予定は今のところありません。

# レパートリー一覧 <a name="rep"></a>
1回以上歌ったことがある曲の一覧が見れます。絞り込み・並び順を変えるでリクエストなどに使えます。

1. メンバー選択\
各メンバーの既存曲が見れます。選択されているメンバーが歌ったことある曲のみ表示されます。
1. ジャンル選択\
曲のジャンル限定で検索できます。アニソン・ボカロ限定リクエストに活用してください。\
全部のチェックボックスを押すと一括選択/選択解除ができます。
1. 並び順/表示\
絞り込まれた曲の表示順が変えれます。
1. 曲名で検索\
歌検索と同様、曲の**名前**を入れるとヒットする曲のみ表示されます。
1. 曲選択\
曲のブロックを押すことで選択されます。\
選択された曲は「選択済み優先」が <img src="https://szk31.github.io/pcsl/icon/cbx_check.png" width="20px" height="20px" alt="checkbox_check_icon"> のとき、絞り込み一切無視し一番上に表示されます。\
また、曲選択後に更新されず、絞り込みに変化があるか、右上の <img src="https://szk31.github.io/pcsl/icon/to_top.png" width="20px" height="20px" alt="to_top_icon"> ボタンが押されたときのみ更新されます。\
選択された曲は右上の <img src="https://szk31.github.io/pcsl/icon/share.png" width="20px" height="20px" alt="share_icon"> を押すと以下のことができます。
   * 選択した曲で曲検索
   * 上記の選択をURLで共有
   * リクエストタグ付きでツイート
   * テキストとしてコピー

# 設定 <a name="setting"></a>
- 全般 - エキストラ設定表示\
普段使われないものを表示/非表示(下記\[EX\]の項目)\
タイトルの「設定」を5回押すことで表示されます。
- 全般 - 表示色\
いわゆるライトモード、ダークモード
- 全般 - \[EX\]ダークモード\
画面をさらに暗くすることができます。


- 曲検索 - 非公開動画表示\
非公開中の枠も表示されますが、見れません。
- 曲検索 - 入力自動選択\
入力欄タップするとき値が全選択されます。
- 曲検索 - ランダムボタン表示\
ランダムボタンが表示されます。
- 曲検索 - ランダム条件無視\
ランダムの条件「入力欄が空欄」が無視されます。


- 入力予想 - 変更時のみ表示\
入力欄が変更された場合のみ予想が表示されます。
- 入力予想 - 読み仮名表示\
曲名の読み仮名が表示されます。
- 入力予想 - \[EX\]選択コピー\
予想から曲名を選択した時、曲名がコピーされます。


- レパートリー - 入力自動選択\
上記　曲検索 - 入力自動選択　と同じ
- レパートリー - \[EX\]集合選択表示\
メンバーの集合選択が表示されます。
- レパートリー - リリース日付表示\
曲のリリース日付が表示されます。
- レパートリー - 曲名長押しコピー\
曲名を長押しすると曲名がコピーされます。
- レパートリー - 長押し時間\
長押しが反応するまでの秒数が設定できます。

# メンバー別合計 <a name="memcount"></a>
メンバー別の歌った回数、レパートリーの曲数が見れます。\
グルーピングの情報や、メン限、非公開の数字も見れます。

# Disclaimer <a name="disclaimer"></a>

anything that has a owner / is copyrighted belongs to their owner / holder.\
anything else that's made by me is copyleft, do whatever you want with it.

Content keys (Level2) are only distributed to selected individuals.\
Feel free to request via twitter, though there is no guarantee on anything.\

This site is ONLY tested in the following conditions.
1. Key level 2
1. Dark theme (extra dark)
1. Chrome (pc)
1. Live server (VS code ext.)

This site uses the following libraries / resources.
1. [Jquery](https://jquery.com/)
1. [aes.js](https://cdnjs.com/libraries/aes-js)
1. [Google fonts (M PLUS 1p)](https://fonts.google.com/specimen/M+PLUS+1p)
1. [PNG minify](https://tinypng.com/)
1. [PNG to base64](https://www.base64-image.de/)
1. [JS minify](https://go.tacodewolff.nl/minify)
1. [Lightning CSS](https://lightningcss.dev/playground)
1. [MD editor](https://markdown.pioul.fr/)

# Update Note <a name="update_note"></a>

- First commit (12022-12-18)
- v12022-12-20-1
  - added copy button
  - reduced data file size
- v12022-12-21-1
  - fixed artist off by one
- v12022-12-21-2
  - fixed time stamp not applying to url
- v12022-12-22-1
  - added share (twitter)
  - improved song name display 
- v12022-12-23-1
  - added icon, title
  - prevent user from sharing when fail to obtain data
- v12022-12-23-2
  - test update on if alert works on mobile
- v12022-12-23-3
  - another test on alert on mobile
- v12022-12-24-1
  - change icon to gif
  - added menu, setting, info icon (currently hidden)
  - added aaaaaa\n~bbb for some songs, title that contains \u301c will be an exception for this, the next data update will solve this problem
- v12022-12-26-1
  - added menu
  - added info
  - added option - show_hidden_video
  - fixed not being to share anyway
- v12022-12-26-2
  - updated alert text to be including private video
- v12022-12-27-1
  - added icon mode
  - added option - clear input when re-focus
  - added option - switch between selecting singer in name(text) or icon(picture) mode
  - user are not allow to scroll when in menu
- v12022-12-27-2
  - removed itt.js as there's currently no plan of a desktop version for this website, thus no such thing as hover and tooltip
  - to-top button no longer works in info and setting screen
  - fixed not able to scroll when pressing menu-fog to leave menu
  - fixed menu is possible to be called out when in info and setting
- v12022-12-27-3
  - info bottom section now stick to the bottom
  - info height now related w/ height
  - trying to reload the page as mobile cache sometimes break things
- v12022-12-30-1
  - added random song
  - song that's exact same to search string will now come first than other songs
  - comment adjustment
- v12022-12-30-2
  - moved random to nav- instead of search-
- v12022-12-31-1
  - search is now faster
  - max_display now works post-singer selection instead of pre-singer selection
- v12022-12-31-2
  - fixed private entries displays anyways no matter if do_display_private is true or false
- v12022-12-31-3
  - fixed random search not performing as expected
- v12023-01-03-1
  - added ignore random requirement
  - fixed random may return songs with only private entry when do_display_hidden is false
- v12023-01-04-1
  - added autocomplete (testing)
  - grouped event listener into groups
- v12023-01-05-1
  - changed all px to vw
  - autocomplete count now differs according to screen size
  - autocomplete panels text no longer overflow
  - as onblur fires before onclick, search-auto-panel has been changed to onmousedown
- v12023-01-05-2
  - reduced script size by adding a bold() function instead of manually do so.
- v12023-01-09-1
  - added option for max display in settings
  - added scrollbar for settings when needed (there are a few ratio the text will misalign but not common, scrollbar should not appear at all due to this page is built for mobile)
- v12023-01-09-2
  - input type test
- v12023-01-09-3
  - added case for non numeric input when input is 1 character long for setting-max_display
- v12023-01-09-4
  - setting-max_display input blurs if enter is pressed (assumingly closing the on-screen virtual keyboard)
- v12023-01-15-1
  - added repertoire page
  - removed some series
- v12023-01-15-2
  - changed a's into divs
- v12023-01-15-3
  - attempt to fix font size not working on mobile
- v12023-01-15-4
  - fixed tweet button not working
  - fixed to_top button not displaying
  - attempt to fix toggle switch box shadow
- v12023-01-16-1
  - added delete button on edit mode
  - added auto scroll on off-screen arrow button
- v12023-01-17-1
  - attempt to fix delete button not showing when address bar is present
- v12023-01-17-2
  - added character count and illegal tweet length indicator
- v12023-01-17-3
  - fixing bottom of characters like q, p or g being not visible.
- v12023-01-17-4
  - split script into 3 separate files
- v1.0.0 (12023-01-19)
  - changing version name from date to x.x.x
  - css optimisation
  - pop up window for non-suitable screen sizes
- v1.1.0 (12023-01-21)
  - create an iframe instead of a popup window
- v1.1.1 (12023-01-26)
  - fixed rep select not displaying the correct item / able to select the same song multiple times
  - fixed rep title 2nd line being visible
- v1.1.2 (12023-01-29)
  - attempt to fix rep-song title
- v1.1.3 (12023-02-01)
  - moved data files to data/
- v1.1.4 (12023-02-01)
  - attempt to fix rep song title second line being visible
  - changed song artist notation
- v1.1.5 (12023-02-02)
  - fixed information returning not working as intended
  - removed search-select but singer name
  - added member entry count
- v1.1.6 (12023-02-12)
  - fixed copy button being visible when the song name is collapsed
- v1.1.7 (12023-02-17)
  - fixing rep - sort : count displaying the order of all singer despite the selection not being so
- v1.1.8 (12023-02-17)
  - fixed last sang date not being correct
- v1.1.9 (12023-02-17)
  - fixed artist not being loaded when a closed song's displaying entry changed
- v1.1.10 (12023-02-18)
  - fixed last sang date not being correct (again)
- v1.1.11 (12023-02-18)
  - reduced data access in the process of sorting rep with date related options
- v1.1.12 (12023-02-18)
  - fixed sort by release date not loading
- v1.2.0 (12023-02-22)
  - added search sort
  - moved singer select to search sort
  - removed some unused code
- v1.2.1 (12023-02-25)
  - fixed search control sort will display previous search when input is empty
  - reading search works with hiragana "vu" now
- v1.2.2 (12023-02-25)
  - attempt to fix different of dates (again)
- v1.2.3 (12023-03-03)
  - moved setting into search options
  - removed unused code
- v1.2.4 (12023-03-03)
  - update yuco display name
  - search options max display will validate on every input instead of finishing input
- v1.2.5 (12023-03-04)
  - fixed random not being disabled in searching artist mode
- v1.2.6 (12023-03-07)
  - added copied to clipboard popup
  - added rep search by song name
  - added rep list copy button
- v1.2.7 (12023-03-07)
  - minor fixes
  - added reason display for blank screen when input is not blank in search
- v1.2.8 (12023-03-08)
  - fixed rep search by input will display a date when the selected singer had never sang the displaying song
- v1.2.9 (12023-03-11)
  - fixed search sort by singer not acting as expected
  - hide autocomplete for input
- v1.2.10 (12023-04-01)
  - added home page
  - default page changed from search to home
- v1.2.11 (12023-04-01)
  - added google sheet link
- v1.2.12 (12023-04-01)
  - added url para for jumping to pages
- v1.2.13 (12023-04-02)
  - fixed going nowhere if no page para
  - added loading that only last for a split second
  - fixed jump2page being called twice when when page para is missing
- v1.2.14 (12023-04-04)
  - added key deletion
  - fixed current_page not being updated when loading a page through url para
- v1.2.15 (12023-04-05)
  - reduced image size
  - added missing path for remove cookie
  - added saving and loading settings across sections
- v1.2.16 (12023-04-05)
  - fixed reading length of get cookie
  - added display for changes loading settings from cookie
  - added hard filter (only access able by url para or console)
- v1.2.17 (12023-04-09)
  - edited how the enc alg works
  - changed home_extra and a few css
  - fixed member photo border
  - added hidden setting sharing the webpage when sharing entry, default off
- v1.3.0 (12023-04-14)
  - added key access level
  - reworked url para search system
  - reworked checkbox / radio button visual
  - replaced some checkboxes / radio buttons with switch (⇌)
  - fixed rep union/inter not checking selected option correctly
  - add do_share_web as an option in search-settings
- v1.3.1 (12023-04-16)
  - fixed wrong video URL
  - applied hard filter to auto search
- v1.3.2 (12023-04-18)
  - fixed url para search not working (called before processing entries)
  - fixed url para search may cause out of range array access
  - changed font file origin
  - changed rep loading speed from all at once to 20 songs / 10ms
  - compressed button images added in 1.3.0
- v1.3.3 (12023-04-19)
  - fixed loading loop was not properly implemented
  - fixed page=rep not loading correctly
  - added border for search and rep entries
  - added momo litlink
- v1.3.4 (12023-04-21)
  - all icons are now pre-loaded
  - changed loading screen css to be in html
  - fixed rep page selected / not selected size inconsistency
  - fixed rep not generating result when re-entered while input is not blank
  - added member count for each member
- v1.4.0 (12023-04-24)
  - added display selected songs at top option at rep
  - added search from rep selected
  - added share rep selected (option at search navigation bar)
  - added rep display selected at top option
  - fixed rep display loop not displaying first 20 songs right after change causing a bling on display
- v1.4.1 (12023-04-26)
  - fixed search filter and sort option not functioning when loading multiple songs with url para or search from rep
  - fixed hiding song not working for loading multiple songs with url para or search from rep
- v1.4.2 (12023-04-28)
  - fixed song name does no show up in display when accessed with ?search with only 1 song id
  - fixed random not working after accessed with ?search
  - fixed input enter does not work if accessed with ?page=rep
  - fixed rep_hits does not get displayed properly when rep_selected.length > rep_hits.length when rep_display_selected_first is true
  - added ?sfilter
  - added description at readme
- v1.4.3 (12023-05-09)
  - fixed rep sort method not working
  - added free chat video link
  - attempt to fix keyless rep count number being incorrect
  - fixed entering with ?page=rep will cause no page selected in menu
  - split rep singer display into 2 rows if key is valid
- v1.5.0 (12023-05-26)
  - fixed rep searching full width symbols (!, ~, etc) not working as intended
  - pre-process song names (to lower case, normalise) at start instead of doing it everytime on search.
  - added remaining members at search selection
  - merged search icon group into home icon group (css)
- v1.5.1 (12023-06-01)
  - fixed sfilter url para not working
  - change search icon singer frame colour back to previous palette
  - fixed sfilter not working for some entries
  - added wip search
  - fixed using same loop var in inner loop
  - reduced data size by calculating needed data after data arrive
- v1.5.2 (12023-06-06)
  - disables search share after change method
  - split data into 2 files
  - minify js and css
  - no longer prefetch images
  - minimised some images
- v1.5.3 (12023-09-11)
  - fixed sfilter not working on rep
  - updated comments to match standards
  - colour palette update
  - fixed search member filter not working as expected (not displaying entry if un-selected member is participated in such entry)
  - all nia ch. entries are now available at level 0 and 1 (most being private)
- v1.5.4 (12023-09-12)
  - added url para "rfilter"
  - fixed .rep_singer_2rows being slightly taller than expected
- v1.5.5 (12023-10-28)
  - added disney to search series lookup
  - added disney to rep filter
  - removed genre:others from some song that already have other attr under genre except special cases
  - fixed new song (kira power) was not sorted when other song id is numbered in the sorted order
  - added long pressing on rep song name copies song name
- v1.5.6 (12023-11-09)
  - attempt to fix not working on mobile
  - fixed not being able to select songs
  - reworked memcount_rep
- v1.5.7 (12023-11-11)
  - remove union and intersection selector
  - reworked how rep filter work
- v1.5.8 (12023-11-19)
  - fixed sfilter not working
  - fixed rep-memcount not working
  - reworked memcount
  - fixed incorrect video id
  - fixed outdated bg colour
  - updated pop-ups css to be in the SlateBlue family
  - removed unused stuffs
  - added bug report page replacing twitter
- v1.5.9 (12024-02-27)
  - fixed release date missing on 1 song causing sort by date and display release date not working
  - fixed rep result not updating after select/deselecting member
  - fixed an extra ? being added to url when no url-para present
  - minor optimisation
  - changed memcount-rep gradient to line up corner to corner
  - fixed scroll bar being visible
  - changed search-option-reset to search-option-select, where focusing on search input will select whole input instead of clearing the input. Default on.
  - Added theme colour.
- v1.6.0 (12024-02-29)
  - data not related to key level will no longer be downloaded
  - data will not be downloaded unless new update exists
- v1.6.1 (12024-03-08)
  - fixed sfilter not working
  - fixed local storage not being cleared after a key reset
  - added doctype (firefox support)
  - some css adjustment
  - fixed mem-count rep not loading correctly on level 2 key
  - fixed key not being removed from url
  - fixed mem-count table header not being visible
  - fixed auto-search not showing up on focus
  - fixed special notation not being included in auto-search
  - fixed selecting songs which name's includes " not being correctly selected from auto-search
- v1.6.2 (12024-03-10)
  - added light mode and dark mode colour palette (no code supporting changing display yet)
  - spacing adjustment
- v1.6.3 (12024-03-12)
  - added setting menu
  - added switch of light-mixed-dark mode
  - mobile devices not longer bypass screen ratio check
  - fixed search-auto_search:hover changing colour
  - switched from using cookie to using local storage
  - switch from jquery 3.6.1 to 3.7.1 slim
  - added note for song (no longer) w/ any karaoke
  - fixed rep infinitely adding space below
  - removed rep-attr display
  - removed search-share option
- v1.6.4 (12024-03-15)
  - removed hard-filter
  - removed url share
  - added long press copy to settings
  - extended colour theme support to post-switch background
  - changed memcount-rep display colour in dark mode
  - attempt to disable pull down reload when fully loaded
  - fixed key cannot be removed
  - fixed newly added key does not survive across sessions
  - merged rep-entry, rep-genre and rep-sort
  - removed preloading images, doesn't seem to work w/ css content
- v1.6.5 (12024-03-16)
  - removed some unnecessary code
  - reduced height of rep-filter block
  - switched from 4 bits to 6 bits for singer
  - removed some unnecessary code
  - fixed random does not goes with setting when page loaded with setting-display_random being true
  - fixed search-share being able to be clicked when menu / popups present
- v1.7.0 (12024-03-19)
  - fixed rep-filter-sort text alignment
  - fixed search-random being visible when switching to search in artist when do_show_random is false
  - removed cookie support
  - switched from var to let/const
  - overhauled rep-share
  - refactored some functions
  - added setting-rep-longPress-time
- v1.7.1 (12024-03-21)
  - added name for home icons
  - added yucomomo and yucokira support
  - made some corners rounder
- v1.7.2 (12024-04-04)
  - merged `` quoted script to reduce size
  - fixed memcount (key: 0) display issue
  - fixed rep-attr, where removed attr does not counts as others
  - added song name display exceptions
  - changed all colour from rgb() and names longer than 7 characters to #rrggbb
  - added reset storage dialog on loading screen (not tested, hope never going to be used)
- v1.7.3 (12024-04-06)
  - merged pngs into base64 css
  - added extra dark mode
  - adjusted some colour palette
- v1.7.4 (12024-04-12)
  - small adjust in css
  - auto-search shows songs w/ no entry now
  - fixed hidden-only and no-entry notice
  - added rep-song border back (as outline)
  - fixed loading fail button size
  - fixed rep-share-tweet button size
  - added changeless auto option
  - added keyboard arrow control for auto search
  - renamed some variables into more meaningful names
  - refactored some old functions
- v1.7.5 (12024-04-15)
  - fixed some song having attr of 0
  - reduced index.html size
  - fixed memcount table edge bleeding
  - added rep-hit_count
  - added method to search for songs with no entry
- v1.7.6 (12024-05-12)
  - fixed rep-song being very slightly higher than normal when key is active
  - added redirect pages
  - fixed sfilter not working on rep
  - added pressing home member icon loads rep w/ said member's repertoire
- v1.7.7 (12024-06-10)
  - added option for show / hide reading in auto-search
  - auto-search and search also search \[a-z\] input as if kanas were input
- v1.8.0 (12024-09-24)
  - fixed rep-selected song are not removed from non-selected list correctly for empty input
  - fixed search-exact_result_to_top only moves the 1st song even if multiple song have the same name
  - fixed search-sort-asd display text not updating
  - unselecting the last member will auto re-select all members in all member selections
  - reworked settings internally
  - added settings-show_hidden, unlock via tapping settings title 5 times
  - moved settings-extra_dark from settings-theme to settings-show_hidden
  - changing theme to non-dark will reset extra dark to normal dark
  - renamed auto-search to predict 
  - added settings-predict-copy under settings-show_hidden
  - added settings-rep-show_group under settings-show_hidden
  - re-added union / intersection for rep (default hidden/union)
  - added no song found error message to rep
  - added reset to default settings (via url para, require reload)
- v1.8.1 (12024-11-24)
  - reworked key removal sequence
  - fixed rep-inter not working on key level 0
  - added pressing Tab to focus on search bar
- v1.8.2 (12024-12-28)
  - sfilter and rfilter now support non decimal input (0b, 0x and etc)
  - changed rep-song-member display badge shape (key Lv. 0, 1, 2) and position (key Lv. 0)
  - r2k will also search as if all trailing \[a-z\] is removed
  - fixing setting-hidden-extra_dark being available right after unlocking hidden settings despite theme is not dark
  - adding intent:// opt-in option for mobile user (a new tab will be opened anyway even if intent app being launched)
  - setting popup is now 1vw wider as some devices has 9 chaeacters items in 2 lines

# Future Version / to-do list
- adding video ID search
- tune down white and black
  - also make icons into frames / monochrome
- (if possible?) prevent intent from opening a new tab if intent app launched correctly

<!---
nothing here but us chickens!\
(nothing is planned for the moment)
--->