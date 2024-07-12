import nodemailer from 'nodemailer'

export const sendEmail = async (
	subject,
	message,
	sent_from,
	reply_to,
	send_to
) => {
	// Create Email Transporter
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 587,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	})

	// Option for sending email
	const options = {
		from: sent_from,
		replyTo: reply_to,
		to: send_to,
		subject: subject,
		html: message,
	}

	// send email
	transporter.sendMail(options, function (err, info) {
		if (err) {
			console.log(err)
		} else {
			console.log(info)
		}
	})
}
