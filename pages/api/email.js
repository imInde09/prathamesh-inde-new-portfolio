import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)
const resend = new Resend(re_eMhuMrtn_JNzkiCc6cCUB4397mu7dfPBL)

//
import EmailTemplate from '../../components/EmailTemplate'

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.sendEmail({
      from: 'prathamesh.inde <website@prathamesh.inde>',
      to: 'prathameshinde86@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via Prathamesh Inde`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
