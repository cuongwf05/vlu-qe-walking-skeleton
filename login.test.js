const { login } = require('./login');

describe('Hàm login', () => {
  test('đăng nhập đúng admin/123 trả về true', () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('sai mật khẩu trả về false', () => {
    expect(login('admin', '1234')).toBe(false);
  });

  test('sai username trả về false', () => {
    expect(login('user', '123')).toBe(false);
  });

  test('username và password rỗng trả về false', () => {
    expect(login('', '')).toBe(false);
  });
});
