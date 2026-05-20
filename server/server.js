import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

/* ===================================================
   🔥 FORCE LOAD server/.env ONLY (very important)
=================================================== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, "./.env");

dotenv.config({ path: envPath });

console.log("📂 ENV PATH:", envPath);
console.log("📧 EMAIL:", process.env.EMAIL);
console.log("🔑 PASS:", process.env.PASS ? "Loaded ✅" : "Missing ❌");

/* ===================================================
   🚨 STOP SERVER if ENV missing
=================================================== */
if (!process.env.EMAIL || !process.env.PASS) {
  console.error("❌ Gmail ENV variables missing. Fix server/.env file");
  process.exit(1);
}

/* ===================================================
   🚀 EXPRESS APP
=================================================== */
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running ✅");
});

/* ===================================================
   📧 MAIL TRANSPORTER (created once)
=================================================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS, // Gmail App Password
  },
});

/* Verify transporter on server start */
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Gmail connection failed:");
    console.error(err);
  } else {
    console.log("✅ Gmail transporter ready!");
  }
});

/* ===================================================
   📩 CONTACT API
=================================================== */
app.post("/contact", async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    // 🔎 Validate input
    if (!name || !phone || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: "📩 New Contact Form Message",
      replyTo: process.env.EMAIL,
      text: `
Name: ${name}
Phone: ${phone}
Message: ${message}
      `,
    });

    console.log("📨 Email sent from:", name);
    res.json({ success: true });

  } catch (err) {
    console.error("🔥 MAIL ERROR FULL:", err);
    res.status(500).json({ error: "Email failed" });
  }
});

/* ===================================================
   🟢 START SERVER
=================================================== */
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});