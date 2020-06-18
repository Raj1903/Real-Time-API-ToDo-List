const nodemailer = require('nodemailer')



let generateMail = (email, name, bodyMessage) => {

// sending mail after completing main thread
//console.log('signUp mail Credentials obtained, sending message...');

// Create a SMTP transporter object
   const transporter = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
       auth: {
           user: 'palaksinha1903@gmail.com',
           pass: 'palaksinha'
       }
 });

   // Message object
   let message = {
       from: 'palaksinha1903@gmail.com',
       to: email,
       subject: 'To-Do-List Application',
       text: 'Welcome',
       html: "<p>Hii!!"+ name + ".<br>" + bodyMessage
   };

   transporter.sendMail(message, (err, info) => {
       if (err) {
           console.log('Error occurred. ' + err.message);
           return process.exit(1);
       }
       console.log('Message sent: %s', info.messageId);
       
   });
}

let passwordChanged = (email, bodyMessage) => {

   
    console.log('Credentials obtained, password changed sending message...');
    
    
       const transporter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           port: 465,
           secure: true,
           auth: {
               user: 'palaksinha1903@gmail.com',
               pass: 'palaksinha'
           }
     });
    
      
       let message = {
           from: 'tempmailidtempmailid@gmail.com',
           to: email,
           subject: ' To-Do-list Application',
           text: 'Welcome!',
           html: bodyMessage
       };
    
       transporter.sendMail(message, (err, info) => {
           if (err) {
               console.log('Error occurred. ' + err.message);
               return process.exit(1);
           }
           console.log('Message sent: %s', info.messageId);
           console.log("=============================================")
           
       });
    }

    

let generateVerifyCode = (email, name, verificationCode) => {

    
    console.log('verifying code Credentials obtained, sending message...');
    
    
 
       const transporter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           port: 465,
           secure: true,
           auth: {
               user: 'palaksinha1903@gmail.com',
               pass: 'palaksinha'
           }
     });
    
       
       let message = {
           from: 'palaksinha1903@gmail.com',
           to: email,
           subject: 'To-Do List Application',
           text: 'Verification Code for your reset password',
           html: "<p>Hii!!  <b>"+ name + "</b>.<br>" + "Your verification code is "+verificationCode+"</b>."
       };
    
       transporter.sendMail(message, (err, info) => {
           if (err) {
               console.log('Error occurred. ' + err.message);
               return process.exit(1);
           }
           console.log('Message sent: %s', info.messageId);
           
       });
    }



   module.exports = {
       generateMail: generateMail,
       generateVerifyCode: generateVerifyCode,
       passwordChanged: passwordChanged
   }