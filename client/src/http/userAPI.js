import { host, authHost } from "@/http/index";
import jwtDecode from "jwt-decode";

export const registration = async (email, login, password) => {
  console.log('reg')
  const { data } = await host.post('api/user/registration', { email, login, password });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}

export const login = async (email, login, password) => {
  console.log('auth')
  const { data } = await host.post('api/user/login', { email, login, password });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}

export const check = async () => {
  const { data } = await authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}
