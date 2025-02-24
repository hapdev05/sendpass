import { useEffect, useState } from "react";

function Login() {
  const [, setIp] = useState("Đang lấy...");

  useEffect(() => {
    fetch("http://160.191.87.152:5000/get-ip-log") // Thay "your-domain.com" bằng domain của bạn
      .then((response) => response.json())
      .then((data) => {
        console.log("IP của bạn:", data.ip);
        setIp(data.ip);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
        setIp("Không thể lấy IP");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Chào mừng bạn đến với Website!</h1>
    </div>
  );
}

export default Login;
