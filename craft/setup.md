# discord.jsを使ったBOT作り | セットアップ編
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


次(準備中)
