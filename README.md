# [P]etit♡[C]ocotte [S]ong [L]ist <a name="title"></a>
ぷちここ歌まとめ

逢魔きらら、胡桃澤もも、看谷にぃあ＋αの歌一覧

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

曲名の隣の ▼ を押すとその曲のエントリーを収納できます。もう一度押すと元に戻ります。<img src="https://szk31.github.io/pcsl/icon/copy.png" width="20px" height="20px" alt="copy_icon"> を押すと曲名がコピーされます。エントリーの右にある <img src="https://szk31.github.io/pcsl/icon/share.png" width="20px" height="20px" alt="copy_icon"> を押すとツイート用の文章でTwitterが開きます。他のSNSに対応する予定は今のところありません。

# レパートリー一覧の使い方 <a name="rep"></a>
編集中…

# English version <a name="eng"></a>

# Table of Contents

# Disclaimer <a name="disclaimer"></a>

anything that has a owner / is copyrighted belongs to their owner / holder.\
anything else thats made by me is copyleft, do whatever you want with it.

Content keys (Level2) are only distributed to selected individuals.\
Please do not request or redistribute.\
This repository may be removed if any leaks happen.