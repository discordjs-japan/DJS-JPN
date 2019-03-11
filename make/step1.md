# discord.jsを使ったDiscordBOT作り | セットアップ編
## 必要な物
1. JavaScriptの基礎が出来ている事
1. テキストエディタ(Visual Studio Code がおススメです。)
1. [Node.js](https://nodejs.org)をインストールしている事(推奨・最新どちらでも構わないここでは推奨版を利用します。)

注意: Node.jsは6.0.0以降のバージョンをインストールして下さい

## discord.jsをnpmを使ってインストールする
1. コマンドプロントを管理者権限で実行
1. 開いたら`npm install discord.js --save`を実行して下さい。

インストール作業はこれで終了です。
## 音楽BOTの使用・作成を考えている方へ
音楽BOTの使用または作成を考えている方は`npm install discord.js --save`だけでは出来ません。一緒にオーディオエンジンをインストールする必要があります。
* ffmpeg(絶対に必要): `npm install ffmpeg-binaries`
* [node-opus](https://www.npmjs.com/package/node-opus)を使用したい方: `npm install discord.js node-opus --save`を実行して下さい。
* [opusscript](https://www.npmjs.com/package/opusscript)を使用したい方: `npm install discord.js opusscript --save`を実行して下さい。

### どちらを実行すればいい?
node-opusをオススメします。

## 音声パケットの暗号化と復号化を高速化する方法
* [sodium](https://www.npmjs.com/package/sodium): `npm install sodium --save`
* [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers): `npm install libsodium-wrappers --save`

## TokenとClientIDを獲得する
まず[こちら](https://discordapp.com/developers/applications/me)を開いて下さい。

### 手順
1. **New App** をクリック
1. **APP NAME(BOTの名前)** を書いて **Waiting for form completion**をクリック
1. **Client ID** をメモして下さい
1. **Create a Bot User**をクリックしたら **Yes, do it!** をクリック
1. そしたら **Username** の下に **Token** があるので **click to reveal** をクリックしてTokenをメモして下さい
これで獲得は完了です。

## BOTをサーバーに参加させる
1. 先ほどメモした **ClientID** を`https://discordapp.com/oauth2/authorize?&client_id=<ここに入れます>&scope=bot&permissions=0`
1. **ClientID** を打ち込んだらアクセスして導入するサーバーを選択する

#### 注意: `<ここに入れます>` は消してClientIDを入れて下さい


[次](https://djs-jpn.tk/make/step2)
