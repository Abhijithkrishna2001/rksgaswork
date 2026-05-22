import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change ✅
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Indian phone validation ✅
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      return setStatus("❌ All fields required");
    }

    if (!validatePhone(form.phone)) {
      return setStatus("❌ Enter valid Indian phone number");
    }

    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data = {};

      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (!res.ok) {
        throw new Error(data.error || "Server error");
      }

      setStatus("✅ Message sent successfully!");
      setForm({
        name: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus(err.message || "❌ Email failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
        />

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p>{status}</p>}
      </form>
    </section>
  );
}
