import User from "@/models/userSchema";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    const updatedUser = await User.findByIdAndUpdate(userId, {
      $set: {
        verifyToken: hashedToken,
        verifyTokenExpiry: new Date(Date.now() + 3600000),
      },
    });

    var transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: "fahad@fahad.ai",
      to: email,
      subject: "Verify Your Email Address",
      html: `
        <div>
          <div style="background-color: #007BFF; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Welcome to EasyLogo</h1>
          </div>
          <div style="padding: 20px; text-align: center;">
            <p style="margin: 0;">Hi there,</p>
            <p style="margin: 20px 0;">Thank you for signing up! To complete your registration, please verify your email address by clicking the button below:</p>
            <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}" 
               style="display: inline-block; padding: 10px 20px; margin-top: 20px; font-size: 16px; color: #ffffff; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
               Verify Your Email
            </a>
            <p style="margin: 20px 0;">If the button above doesn’t work, you can also copy and paste the following link into your browser:</p>
            <p style="margin: 0;">
              <a href="${
                process.env.DOMAIN
              }/verifyemail?token=${hashedToken}" style="color: #007BFF; text-decoration: none;">
                ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
              </a>
            </p>
          </div>
          <div style="background-color: #f1f1f1; color: #777; padding: 10px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">If you have any questions, feel free to <a href="mailto:support@fahad.ai" style="color: #007BFF; text-decoration: none;">contact us</a>.</p>
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} EasyLogo. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
