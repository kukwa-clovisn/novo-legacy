// server/api/send-email.ts
export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { email, subject, message } = body;

  const nodemailer = useNodemailer();

  try {
    // Send email
    const info = await nodemailer.sendMail({
      from: process.env.GMAIL_USER, // Your email address
      to: email, // Recipient email
      subject: subject, // Email subject
      text: message, // Email message
    });

    return { success: true, info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
});
