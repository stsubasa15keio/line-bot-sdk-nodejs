const express = require('express');
const { middleware, Client } = require('@line/bot-sdk');
const timeout = require('connect-timeout'); // タイムアウト処理用

// LINEの設定
const config = {
    channelAccessToken: 'EKMjYXnYFNwR0DTm4eYyaY0R9RhqchdVgc0hth9zxU5B97sphTXUumeBe5CSp91DYSYGm/LRVy9i0YXZ/Hzd/1aWX3h2qqnC+3vYGB+fl7DqlLd7Rf+s8MmAYM4OLJApnkBhOKvSjH54hcdfpoiPawdB04t89/1O/w1cDnyilFU=',  // チャネルアクセストークン
    channelSecret: 'c89dcec5e58ec0f9ff32bf6363c0e836'  // チャネルシークレット
};

const app = express();
const client = new Client(config);

// タイムアウト設定（5秒）
app.use(timeout(5000)); // 5秒以内に応答がない場合タイムアウト

// Webhookエンドポイント
app.post('/webhook', middleware(config), async (req, res) => {
    console.log('Webhook called');
    try {
        await Promise.all(req.body.events.map(handleEvent)); // イベント処理を非同期で実行
        res.status(200).end(); // 速やかに応答
    } catch (err) {
        console.error(`Error: ${err}`);
        res.status(500).end(); // エラーの場合は500エラーを返す
    }
});

// イベント処理関数
async function handleEvent(event) {
    console.log(`Event received: ${JSON.stringify(event)}`);

    // メッセージタイプが「テキスト」の場合
    if (event.type !== 'message' || event.message.type !== 'text') {
        return null;
    }

    const echo = { type: 'text', text: `You said: ${event.message.text}` };
    return client.replyMessage(event.replyToken, echo); // メッセージを返信
}

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// タイムアウトエラーハンドリング
app.use(function (req, res, next) {
    if (req.timedOut) {
        console.error('Request timed out');
        res.status(503).send('Service Unavailable');  // サービスが利用できないエラーを返す
    } else {
        next();
    }
});
