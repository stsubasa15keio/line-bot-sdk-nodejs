const express = require('express');
const { middleware, Client } = require('@line/bot-sdk');

// LINE Botの設定
const config = {
    channelAccessToken: 'EKMjYXnYFNwR0DTm4eYyaY0R9RhqchdVgc0hth9zxU5B97sphTXUumeBe5CSp91DYSYGm/LRVy9i0YXZ/Hzd/1aWX3h2qqnC+3vYGB+fl7DqlLd7Rf+s8MmAYM4OLJApnkBhOKvSjH54hcdfpoiPawdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'c89dcec5e58ec0f9ff32bf6363c0e836'
};

// Expressアプリケーションの作成
const app = express();
const client = new Client(config);

// Webhookエンドポイント
app.post('/webhook', middleware(config), (req, res) => {
    console.log('Webhook called');
    Promise
        .all(req.body.events.map(handleEvent))
        .then(() => res.status(200).end())
        .catch((err) => {
            console.error(`Error: ${err}`);
            res.status(500).end();
        });
});

// イベント処理
async function handleEvent(event) {
    console.log(`Event received: ${JSON.stringify(event)}`);

    // メッセージ以外のイベントは無視
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    // メッセージをそのまま返信
    const reply = { type: 'text', text: `You said: ${event.message.text}` };

    // LINEに返信を送信
    return client.replyMessage(event.replyToken, reply);
}

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
