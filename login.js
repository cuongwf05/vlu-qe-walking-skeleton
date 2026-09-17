function login(username, password) {
  return username === 'admin' && password === '123';
}

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

if (typeof module !== 'undefined') {
  module.exports = { login };
}
