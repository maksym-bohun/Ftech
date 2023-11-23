const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer(); // create an instance of multer
const app = express();
const sendEmail = require("./utils/email");
const contactUsEmail = require("./utils/contactUsEmail");
const AppError = require("./utils/appError");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const allowedOrigins = ["http://127.0.0.1:5173"]; // Add your front-end origin

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (!allowedOrigins.includes(origin)) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(express.json());
app.use(upload.any()); // Use multer for handling files

app.post("/api/sendMailContactUs", async (req, res, next) => {
  console.log("BODY1111", req.body);
  const { name, email, projectInfo, interests } = req.body;

  try {
    await contactUsEmail({ name, email, projectInfo, interests });

    res
      .status(200)
      .json({ status: "success", message: "Message was sent to email." });
  } catch (err) {
    return next(new AppError(err.message, 500));
  }
});

app.post("/api/sendMailCV", async (req, res, next) => {
  console.log("BODY", req.body);
  const { name, email, phone, coverLetter } = req.body;
  const file = req.files[0];

  try {
    await sendEmail({ name, email, phone, coverLetter, file });
    res
      .status(200)
      .json({ status: "success", message: "Message was sent to email." });
  } catch (err) {
    return next(new AppError(err.message, 500));
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
