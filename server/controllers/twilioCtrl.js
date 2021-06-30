require('dotenv').config();
const twilio = require('twilio');
const { TWILIO_ACCOUNT_SID, TWILIO_API_KEY, TWILIO_API_SECRET, TWILIO_SYNC_SERVICE_SID} = process.env
const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_API_KEY)

module.exports = {
    sendText: async (req, res) => {
        const {message, phone, name} = req.body;
        
        client.messages.create({
            body: `My name is ${name}. ${message} My phone number is ${phone}.`,
            to: phone,
            from: '+18016163712' // # from twilio
        }).then((message)=> {
            console.log(message.body)
            res.status(200).send('Message Sent! You will hear from us soon!')
        }).catch(err => {
            console.log(err)
            res.status(400).send('Message failed to send!')
        })
    }
}