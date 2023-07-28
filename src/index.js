import express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from './routes/index.js'
import nodemailer from 'nodemailer';
import mail_data from './mail_data.js';

const transporter = nodemailer.createTransport({
  service: 'gmail', //Your email host here
  auth: {
    user: mail_data.user,
    pass: mail_data.pass,
  },
});

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
//Middlwware for form data analizer (mail)
app.use(express.urlencoded({ extended: true }));
//use all routes
app.use(indexRoutes)
//CSS files
app.use(express.static(join(__dirname, 'public')))

//Send mail with nodemailer
app.post('/send-mail', (req, res) => {
    const { mail, name, subject, message } = req.body;
    const mailOptions = {
        from: mail_data.user, // must be the same configured in nodemailer transporter
        to: mail_data.to_mail, 
        subject: subject,
        text: name + ":\n" + message + ".\nPlease contact me: " + mail // Contenido del correo en texto plano
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) 
            console.log('Error al enviar el correo:', error);
        else {
            console.log('Correo enviado:', info.response);
            res.redirect('/contact?success=true');
        }
    });
});

const port = 4000
app.listen(port, () => {
    console.log("Server is listening on port", port);
  });