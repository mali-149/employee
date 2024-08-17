const express = require("express");
const router = express.Router();
const { sendWhatsAppNotification } = require("../controllers/whatsappController");

router.post("/send", sendWhatsAppNotification);

module.exports = router;
