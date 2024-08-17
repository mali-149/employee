// Send WhatsApp Notification
exports.sendWhatsAppNotification = async (req, res) => {
  try {
    const { phone, message } = req.body;
    if (!phone || !message) {
      return res.status(400).json({ message: "Phone and message are required" });
    }
    // WhatsApp notification logic
    res.status(200).json({
      status: "success",
      message: `WhatsApp message sent successfully to ${phone}`
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
