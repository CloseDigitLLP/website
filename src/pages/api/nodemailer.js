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
  res.send({ message: 'success' })
  const mailOptions = {
    from: 'info@closedigit.com',
    to: 'contact@closedigit.com',
    subject: `New Message from ${req.body.email}`,
    html: `
      <div>
        <p><strong>name: </strong> ${req.body.name}</p>
        <p><strong>phone: </strong> ${req.body.phoneNumber}</p>
        <p><strong>email: </strong> ${req.body.email}</p>
        <p><strong>subject: </strong> ${req.body.subject}</p>
        <p><strong>description: </strong> ${req.body.description}</p>
      </div>
    `
  }
  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        // res.send(error)
        console.error(error)
      } else {
        // res.send(info.response)
      }
    })
  }catch(e) {
    console.error(e)
    // res.send(e)
  }
}
