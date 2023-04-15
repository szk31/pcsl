# [P]etit♡[C]ocotte [S]ong [L]ist <a name="title"></a>
ぷちここ歌まとめ

逢魔きらら、胡桃澤もも、看谷にぃあ＋αの歌一覧

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

[逢魔きらら](https://www.youtube.com/@omakirara){:target="_blank"}\
[胡桃澤もも](https://www.youtube.com/@kurumizawamomo){:target="_blank"}

Twitter

[逢魔きらら](https://twitter.com/omakirara){:target="_blank"}\
[胡桃澤もも](https://twitter.com/kurumizawamomo){:target="_blank"}


[PC用 (google sheets)](https://docs.google.com/spreadsheets/d/1DSU1xBxXEZodMQCCu7hWsvdxWt-K0biXI5tt5_RD_DQ/){:target="_blank"}

製作者 : shizuku3158 ( <a href="https://twitter.com/8513ukuzihs" target="_blank">twitter</a> )

# URLパラメータの使い方 <a name="urlpara"></a>
URLパラメータとは、szk31<area>.github.io/pcsl/?**page=search&hfilter=4**の?以降の部分です。以下はこのページが対応してるURLパラメータの一覧です。

 - key\
コンテンツのキーです。\
キーの入力がなければ、レベル0のアクセス権になります。\
公開キーは[main.js](https://github.com/szk31/pcsl/blob/main/main.js){:target="_blank"}に隠れています。公開キー入力後はレベル1のアクセス権になります。\
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
 - search\
歌検索ページから共有したときのURLから曲の情報を読み取るパラメータです。\
例：`?search=100`の場合、`song[song_lookup[100]]`の曲が読み込まれます。

# 歌検索の使い方 <a name="search"></a>
編集中…

# レパートリー一覧の使い方 <a name="rep"></a>
編集中…

# 免責事項 <a name="disclaimer"></a>

anything that has a owner / is copyrighted belongs to their owner / holder.\
anything else thats made by me is copyleft, do whatever you want with it.

Content keys (Level2) are only distributed to selected individuals.\
Please do not request or redistribute.\
This repository may be removed if any leaks happen.