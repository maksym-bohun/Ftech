const nodemailer = require("nodemailer");

module.exports = async ({
  name = "",
  email = "",
  projectInfo = "",
  interests = [],
}) => {
  "INTERESTS", interests;

  const html = `
  <h1 style="color: #333;">FTECH</h1>
  <hr />
  <p><strong>New lead!</strong></p>
  
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Interests:</strong> ${interests}</p>
  <p><strong>About project:</strong></p>
  <div>${projectInfo.replace(/\n/g, "<br>")}</div>
`;

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: "ptxuhszgvkpotgah",
    },
  });

  const mailOptions = {
    from: "ftech2023@outlook.com",
    to: "INFO@FTECH.COMPANY",
    html,
    subject: "New lead!",
  };

  try {
    // Используем await для дожидания завершения отправки письма
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("There was an error sending the email, try again later!");
  }
};
