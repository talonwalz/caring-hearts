// require('dotenv').config();
// const express = require('express');
// const app = express();
// const massive = require('massive');
// const path = require('path')
// // const twilio = require('twilio')

// const session = require('express-session');

// const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// const authCtrl = require('./controllers/authCtrl');
// const feedbackCtrl = require('./controllers/feedbackCtrl');
// const testimonialsCtrl = require('./controllers/testimonialsCtrl');
// const requestCtrl = require('./controllers/requestInfoCtrl')
// const twilioCtrl = require('./controllers/twilioCtrl')


// app.use(express.json());

// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 7
//     }
// }))

// // Auth Endpoints
// app.post('/auth/register', authCtrl.register); 
// app.post('/auth/login', authCtrl.login); 
// app.delete('/auth/logout', authCtrl.logout); 
// app.get('/auth/session', authCtrl.getSession); 

// // Feedback Endpoints
// app.get('/api/feedback', feedbackCtrl.getFeedback); 
// app.post('/api/feedback', feedbackCtrl.addFeedback); 
// app.delete('/api/feedback/:feedback_id', feedbackCtrl.deleteFeedback); 

// // Testimonials Endpoints
// app.get('/api/testimonials', testimonialsCtrl.getTestimonials); 
// app.post('/api/testimonials', testimonialsCtrl.addTestimonial); 
// app.put('/api/testimonials/:post_id', testimonialsCtrl.editTestimonial); 
// app.delete('/api/testimonials/:post_id', testimonialsCtrl.deleteTestimonial);

// // RequestInfo Endpoints
// app.post('/api/request-info', requestCtrl.addRequest); 
// app.get('/api/request-info', requestCtrl.getRequests); 
// app.delete('/api/request-info/:question_id', requestCtrl.deleteRequest);

// // Twilio Endpoint
// app.post('/api/send-text', twilioCtrl.sendText)

// // STEP 2 & 3
// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })


// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false
//     }
// }).then((dbInstance) => {
//     app.set('db', dbInstance)
//     app.listen(SERVER_PORT, () => console.log(`Server and db are running on ${SERVER_PORT}`))
// })
// .catch(err => console.log(err));