const functions = require('firebase-functions')
const nodemailer = require('nodemailer')

const cors = require('cors')({
  origin: true
})

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

exports.submit = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', '*')
  res.set('Access-Control-Max-Age', '86400')
  res.set('Access-Control-Allow-Origin', 'localhost')


  if (req.method === 'OPTIONS') {
    res.end()
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.fullname} from your website`,
        text: req.body.msg,
        html: `<p>${req.body.msg}</p> <p>Phone number: ${req.body.phone}</p>`,
      }

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail)
        res.status(200).send({
          isEmailSend: true
        })
        return
      })
    })
  }
})