const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: `85.17.65.249`,
  port: 25,
  secure: false,
  tls: {
    rejectUnauthorized: false
  },
  auth: {
    user: "info@closedigit.com",
    pass: "Info@Closedigit2020"
  }
})

export default function handler(req, res) {
  const mailOptions = {
    from: 'info@closedigit.com',
    to: req.body.email,
    subject: `New Message from ${req.body.email}`,
    text: `name:${req.body.name}, phone:${req.body.phoneNumber}, email: ${req.body.email}, subject: ${req.body.subject}, description: ${req.body.description}`
  }
  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send(error)
      } else {
        res.send(info.response)
      }
    })
  }catch(e) {
    res.send(e)
  }
}
