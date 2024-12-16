const line = require('@line/bot-sdk');
const express = require('express');

// LINEのアクセストークンとシークレットを設定
const config = {
  channelAccessToken: 'EKMjYXnYFNwR0DTm4eYyaY0R9RhqchdVgc0hth9zxU5B97sphTXUumeBe5CSp91DYSYGm/LRVy9i0YXZ/Hzd/1aWX3h2qqnC+3vYGB+fl7DqlLd7Rf+s8MmAYM4OLJApnkBhOKvSjH54hcdfpoiPawdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'c89dcec5e58ec0f9ff32bf6363c0e836',
};

const app = express();

// Webhookエンドポイント
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error('Error handling event:', err);
      res.status(500).end();
    });
});

// LINEクライアント
const client = new line.Client(config);

// メッセージ処理ロジック
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const replyMessage = {
    type: 'text',
    text: `あなたのメッセージ: ${event.message.text}`,
  };

  return client.replyMessage(event.replyToken, replyMessage);
}

// サーバーを起動（ポートは環境変数から取得）
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
