import { host, authHost } from "@/http/index";
import jwtDecode from "jwt-decode";

export const userRegistration = async (email, password, login) => {
  console.log('reg')
  const { data } = await host.post('api/user/registration', { email, password, login });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}

export const userLogin = async (email, password) => {
  console.log('auth')
  const { data } = await host.post('api/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}

export const userCheck = async () => {
  const { data } = await authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
}
