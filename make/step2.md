# discord.jsを使ったDiscordBOT作り | コードを書いてBOTを起動しよう
[discord.jsを使ったDiscordBOT作り | セットアップ編](https://djs-jpn.tk/make/setp1)これが出来たらコードを書いて見ましょう
例
```
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hello World`);
});

client.login('token'); //ここに先ほどメモしたTokenを入力する
```

## 説明

1. `client.login('token');` = `token`には[セットアップ編](https://djs-jpn.tk/make/setp1)でメモしたtoeknを入力してください。
1. デスクトップに`bot`というフォルダを生成
1. `bot` フォルダの中に `index.js` で保存

## BOTを起動する。

1. コンソールを開きます
1. `cd Desktop\bot` と入力
1. `node index.js` と入力すればBOTが起動します。

エラーが出た場合はコードを見直しましょう
