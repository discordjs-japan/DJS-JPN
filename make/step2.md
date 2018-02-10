# discord.jsを使ったDiscordBOT作り | コードを書いてみよう
[discord.jsを使ったDiscordBOT作り | セットアップ編](https://djs-jpn.ga/make/setp1)これが出来たらコードを書いて見ましょう
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
`client.on('ready', () => {});` = BOTが起動した時
