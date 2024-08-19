// WhatsApp Service Module
const sendWhatsAppMessage = async (phone, message) => {
  console.log(`Sending WhatsApp message to ${phone}: ${message}`);
  return { success: true, phone, message };
};

module.exports = {
  sendWhatsAppMessage,
};
