var express = require('express');
var router = express.Router();

// 1. MongoDBモジュールを読み込み、接続を設定します
const { MongoClient } = require("mongodb");
// ★ここには、前回設定したあなたの「シンプルなパスワード」入りのURIを貼り付けてください
const uri = "";
const client = new MongoClient(uri);

// 2. /notes にアクセスがあったときの処理
router.get('/', async (req, res) => {
  // データベースとコレクション（notes）を指定します
  const database = client.db('notes');
  const notes = database.collection('notes');
  
  // idが1のドキュメントを取得します（資料の指示通り）
  const query = { id: 1 };
  const note = await notes.findOne(query);
  
  // ブラウザへJSON形式でデータを返します
  res.json(note);
});

module.exports = router;