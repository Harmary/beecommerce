
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const TELEGRAM_BOT_TOKEN = '7714564597:AAHA1_lTI6tyyW6wf35lhw0q7HaT3awcd2s';
const TELEGRAM_CHAT_ID = '-4654902560';

app.use(cors());

app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    const text = `<b>Новая заявка</b>\nИмя: ${name}\nПочта: ${email}\nСообщение: ${message}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            }),
        });

        if (response.ok) {
            res.status(200).send('Message sent successfully');
        } else {
            res.status(500).send(response);
        }
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
