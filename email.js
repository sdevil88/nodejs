//email sent in node js
// plan of actio 

// sent mail to user saying hwllo world 

//send email to multiple user by function 

//email template designed template


const nodemailer = require("nodemailer");
const Mail = require("nodemailer/lib/mailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'wwwghimiresagar88@gmail.com',
      pass: 'qdbmhqptosivcdzb'
    }
  });






  async function main(sender) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"haha" <wwwghimiresagar88@gmail.com>', // sender address
      to: sender.toString(), // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    
}
//   main().catch(console.error);

const sender = ["wwwghimiresagar88@gmail.com", "s.g.devil.88@gmail.com"];
  main(sender) 

