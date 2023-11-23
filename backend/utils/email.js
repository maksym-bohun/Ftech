const nodemailer = require("nodemailer");

module.exports = async ({
  name,
  email,
  phone = "",
  coverLetter = "",
  file = null,
}) => {
  console.log(name, email, phone, coverLetter, file);

  const html = `
  <h1 style="color: #333;">FTECH</h1>
  <hr />
  <p><strong>New CV Submitted!</strong></p>
  
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone number:</strong> ${phone}</p>
  <p><strong>Cover letter:</strong></p>
  <div>${coverLetter.replace(/\n/g, "<br>")}</div>
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
    to: "maxim.boggun@gmail.com",
    html,
    subject: "New CV was submitted!",
    attachments: [
      {
        filename: "CV.pdf", // Change the filename as needed
        content: file?.buffer, // Use file.buffer instead of the entire file object
        encoding: "base64", // Add encoding property
      },
    ],
  };

  console.log("Sending");
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("There was an error sending the email, try again later!");
  }
};
