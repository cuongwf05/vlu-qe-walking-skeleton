function login(username, password) {
  return username === 'admin' && password === '123';
}

// Chỉ chạy phần giao diện khi file được mở trong trình duyệt.
if (typeof document !== 'undefined') {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('message');

  if (form && message) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      message.textContent = login(username, password)
        ? 'Đăng nhập thành công!'
        : 'Sai tài khoản hoặc mật khẩu.';
    });
  }
}

// Cho Jest dùng hàm login khi chạy trong Node.js.
if (typeof module !== 'undefined') {
  module.exports = { login };
}
