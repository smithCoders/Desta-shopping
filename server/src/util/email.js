const catchAsync=require("./catchAsync")
const path=require("path");
const nodemailer=require("nodemailer");
const ejs=require("ejs");
const  sendEmail = catchAsync(async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        service:process.env.EMAIIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    const { email,  template, data } = options;
    const templatePath = path.join(__dirname, `../emails/${template}`);
    const html = await ejs.renderFile(templatePath, data);

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        html,
       

    }

    await transporter.sendMail(mailOptions);
});
module.exports = sendEmail;