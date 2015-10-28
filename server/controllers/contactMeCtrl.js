var nodemailer = require('nodemailer');
var smtpTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'devtest1989to1990@gmail.com',    // your email here
    pass: 'Aajkfhadkfh22'        // your password here
  }
});


module.exports = { 
  sendMail: function(req,res){
  var mailOptions = {
    from: req.body.name + ' <' + req.body.from + '>',
    replyTo: req.body.from,
    to: 'devtest1989to1990@gmail.com',                  // your email here
    subject: 'New message from ' + req.body.name,
    sender: req.body.from,
    text: req.body.text
  };
  smtpTransporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
    }else{
      console.log('Message sent: ' + info.response);
      return res.json(201, info);
    }
  });
}
}






