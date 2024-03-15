# [P]etit♡[C]ocotte [S]ong [L]ist <a name="title"></a>
ぷちここ歌まとめ

逢魔きらら、胡桃澤もも、看谷にぃあ＋αの歌一覧\
ここでは曲名検索から歌った枠(TS付き)に直接飛べます。\
レパートリー一覧でジャンル別の既存曲も確認できます。\

English version [here](#eng)

# 目次 <a name="toc"></a>

- [タイトル](#title)
- [リンク集](#links)
- [URLパラメータ](#urlpara)
- 各ページの使い方
  - [歌検索](#search)
  - [レパートリー一覧](#rep)
- [免責事項](#disclaimer)

# リンク集 <a name="links"></a>

YouTube

[逢魔きらら](https://www.youtube.com/@omakirara)\
[胡桃澤もも](https://www.youtube.com/@kurumizawamomo)

Twitter

[逢魔きらら](https://twitter.com/omakirara)\
[胡桃澤もも](https://twitter.com/kurumizawamomo)


[PC用 (google sheets)](https://docs.google.com/spreadsheets/d/1DSU1xBxXEZodMQCCu7hWsvdxWt-K0biXI5tt5_RD_DQ/)

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
| home | デフォルトのページ |
| search | 検索用のページ |
| repertoire | レパートリー一覧のページ |
| rep | 同上 |
 - hfilter\
*hard_filter*の略で強制フィルターです。デフォルト値は **7** です。\
bit値が1のメンバーのみ読み込んでいます。\
以下参考まで。

| 数値 | bitの位置 | メンバー名 |
| :---: | :---: | :--- |
| 4 | 0b**1**00 | 逢魔きらら |
| 2 | 0b0**1**0 | 胡桃澤もも |
| 1 | 0b00**1** | 看谷にぃあ |

 例：`?hfilter=3`でアクセスした場合、`3 = 0b011`のため、`0b010`の胡桃澤ももと`0b001`の看谷にぃあか参加しているエントリー**のみ**が読み込まれます。\
hfilterの値はクッキーで保存していますので、一回入力できたら同じデバイスからのアクセスも同じ設定を引き続きます。リセットしたい場合は`?hfilter=7`をご利用ください。
 - sfilter\
*soft_filter*の略で、`page=search`か`page=repertoire`でアクセスあいた場合、指定したページのメンバー選択が自動的にsfilterのメンバー**のみ**になります。各メンバーの値は上記hfilterの説明を参照してください。
 - search\
歌検索ページから共有したときのURLから曲の情報を読み取るパラメータです。\
例：`?search=100`の場合、`song[song_lookup[100]]`の曲が読み込まれます。\
`?search=10,11,12,13`の場合、`song[song_lookup[10]]`から`song[song_lookup[13]]`の四曲が読み込まれます。\
連番である必要がありませんが、`1≦x≦song.length`である必要があります。
 - rfilter\
*repertoire_filter*の略で、レパートリー一覧のジャンルの特定ができます。\
「現在選択済みのジャンルを共有」機能は開発中です。手動で編集する場合は以下参考してください。

| ジャンル | bit | ジャンル | bit | ジャンル | bit |
| :---: | :---: | :---: | :---: | :---: | :---: |
| ジャンルその他 | 0 | J-POP | 5 | 歌謡曲 | 10 |
| アニソンその他 | 1 | ボカロ | 6 | ポップス | 11 |
| ラブライブ | 2 | ジブリ | 7 | R&B | 12 |
| アイマス | 3 | 特撮 | 8 | キャラソン | 13 |
| マクロス | 4 | ロック | 9 |

例：アニソンを検索したい場合、「アニソンその他」(1)、「ラブライブ」(2)、「アイマス」(3)、「マクロス」(4)が全部になります。
この場合のrfilter値は、`2^1 + 2^2 + 2^3 + 2^4 = 30`になります。（?rfilter=30）

# 歌検索の使い方 <a name="search"></a>
入力ボックスで曲名か、読みで検索できます。\
例えば、`甲賀忍法帖`を検索したいとき`甲賀`や`忍法`、`こうが`などの単語で引っかかります。\
`Butterfly`など同じ曲名の曲が複数存在する場合や、`ピエロ`など**検索した文字列と完全一致**(*ピエロ*)と**検索した文字列と一部一致**(*からくりピエロ, 夜のピエロ*)の曲が混在した場合、**完全一致**の曲が優先的に表示されます。また、アーティスト検索で曲の歌手や声優で検索できます。**データに統一性がないため精確な結果が出ないことがあります。** 

入力ボックスの横にある ▼ でメニューを開けます。
1. 歌手選択\
メンバーのアイコンをクリックでトリガーできます。モノクロのメンバーのみが参加している枠が検索結果から表示されなくなります。
1. 検索方法\
曲名(読み)で検索とアーティスト名で検索を切り替えます。
1. 並び順\
歌った日付か、参加者で並べます。参加者順は以下になります。\
ぷちここ→ももきら→きらにぃあ→ももにぃあ→きらら→もも→にぃあ
1. その他\
色々な設定がいじれます。括弧の中に表示されるのはデフォルト値です。
   1. 最大表示曲数 (*100*)\
一回に表示できる最大の曲数。1 ≦ x ≦ 400
   1. 非公開動画の表示 (*ON*)\
非公開のため見れないが歌ったことがある曲の表示します。
   1. 入力リセット (*OFF*)\
入力ボックスをクリックしたとき元々入力された文字を消します。
   1. ランダム条件無視 (*OFF*)\
ランダムボタンを押す条件として、入力ボックスに文字があってはなりません。ONにした場合、入力ボックスに文字があってもランダムボタンが押せるようになります。
   1. 検索URL付き (*OFF*)\
動画を共有するとき、共有する曲が検索されている状態で検索ページを開けます。

曲名の隣の ▼ を押すとその曲のエントリーを収納できます。もう一度押すと元に戻ります。<img src="https://szk31.github.io/pcsl/icon/copy_border.png" width="20px" height="20px" alt="copy_icon"> を押すと曲名がコピーされます。エントリーの右にある <img src="https://szk31.github.io/pcsl/icon/share.png" width="20px" height="20px" alt="share_icon"> を押すとツイート用の文章でTwitterが開きます。他のSNSに対応する予定は今のところありません。

# レパートリー一覧の使い方 <a name="rep"></a>
1回以上歌ったことがある曲の一覧が見れます。絞り込み・並び順を変えるでリクエストなどに使えます。

1. 既存選択\
各メンバーの既存曲が見れます。選択されているメンバーが歌ったことある曲のみ表示されます。
1. ジャンル選択\
曲のジャンル限定で検索できます。アニソン・ボカロ限定リクエストに活用してください。\
全部のチェックボックスを押すと一括選択/選択解除ができます。
1. 並び順/表示\
絞り込まれた曲の表示順が変えれます。\
表示アイテムの属性情報は「弾き語り」「ASMR弾き語り」「アカペラ」の回数を表示します。
1. 曲名で検索
歌検索と同様、曲の**名前**を入れるとヒットする曲のみ表示されます。\
予想は実装してありません。\
1. 曲選択
曲のブロックを押すことで、その曲を選択できます。\
選択された曲は「選択済み優先」が<img src="https://szk31.github.io/pcsl/icon/cbx_check.png" width="20px" height="20px" alt="checkbox_check_icon">のとき、絞り込み一切無視し一番上に表示されます。\
また、曲選択後に更新されず、絞り込みに変化があるか、右上の<img src="https://szk31.github.io/pcsl/icon/to_top.png" width="20px" height="20px" alt="to_top_icon">ボタンが押されたときのみ更新されます。\
選択された曲は右上の<img src="https://szk31.github.io/pcsl/icon/share.png" width="20px" height="20px" alt="share_icon">を押すとツイート用ダイアログが表示されます。(オーバーホール予定)\
また、右上の<img src="https://szk31.github.io/pcsl/icon/to_yt.png" width="20px" height="20px" alt="to_youtube_icon">を押すと選択された曲で歌検索が表示されます。

# English version <a name="eng"></a>

# Table of Contents

# Disclaimer <a name="disclaimer"></a>

anything that has a owner / is copyrighted belongs to their owner / holder.\
anything else thats made by me is copyleft, do whatever you want with it.

Content keys (Level2) are only distributed to selected individuals.\
~~Please do not request or redistribute.~~\
Feel free to request via twitter, though there is no guarantee on anything.

# Future Version / to-do list
1. UI overhaul
1. rep-share overhaul