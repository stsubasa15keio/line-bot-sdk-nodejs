const express = require('express');
const { middleware, Client } = require('@line/bot-sdk');

// チャネルアクセストークンとチャネルシークレットを直接コードに埋め込む
const config = {
    channelAccessToken: 'EKMjYXnYFNwR0DTm4eYyaY0R9RhqchdVgc0hth9zxU5B97sphTXUumeBe5CSp91DYSYGm/LRVy9i0YXZ/Hzd/1aWX3h2qqnC+3vYGB+fl7DqlLd7Rf+s8MmAYM4OLJApnkBhOKvSjH54hcdfpoiPawdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'c89dcec5e58ec0f9ff32bf6363c0e836'
};

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

    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    const echo = { type: 'text', text: `You said: ${event.message.text}` };

    return client.replyMessage(event.replyToken, echo);
}

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
