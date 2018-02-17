# ヘルプ（Ｑ＆Ａ）

> ## エラーが起きる

> ### Ｑ．Incorrect login details were provided.と出た
Ａ．Tokenが誤っている可能性があります。App Bot UserではなくApp DetailsのTokenをコピーしている可能性があります

> ### Ｑ．何もしていないのにエラーが出た
Ａ．ConfigのwelcomechannelのチャンネルIDを誤っている可能性があります。ウェルカムメッセージを送信するチャンネルを右クリックしてIDをコピーしてください。

> ### Ｑ．コマンドが反応しない
Ａ．ボットが起動されていない可能性があります。お使いのOSがWindowsの場合はrun.bat、Macの場合はrun.shを実行してください

> ### Ｑ．用語 '○○○○' は、コマンドレット...と出る
Ａ．Node.jsがインストールされていない可能性があります。[こちら](https://nodejs.org/ja/)からNode.jsの**最新版**をダウンロードし、インストールをお願いします。

> ### Ｑ．run.batまたはrun.shを実行できない。
Ａ．お使いのOSに対応していない可能性があります。現在はWindows、Macのみに対応しています。Linuxでも使用はできますが手動で実行することになりますのでご注意ください。

> ### Ｑ．上記のＱ＆Ａを確認してもエラーが起きる
Ａ．以下の方法を確認してみてください
１. `npm-install.dat`を実行したか
２. ネットワークに繋がっているか
３. Tokenはあっているか
４. Node.jsの8.0.0以降をインストールしているか

上記の方法を全て確認してもエラーが出る場合は[DJS-JPN (Discord)](https://discord.gg/DbTpjXV)の`#report`またはGitHubのissuesにエラー内容の報告をお願いします。

> ## ボットについて

> ### Ｑ．ウェルカムメッセージを無効にしたい
Ａ．Config.jsonからwelcomechannelの横にあるチャンネルIDをDisableに変更してください（初期設定では無効になっています）

> ### Ｑ．上記方法以外について知りたい
Ａ．[DJS-JPN (Discord)](https://discord.gg/DbTpjXV)のgeneralに質問の送信をお願いします。
