import { host } from "@/http/index";

export const fetchProfiles = async (page, limit) => {
  const { data } = await host.get('api/profile', { params: { page, limit } });
  return data;
}

export const fetchProfile = async (id) => {
  const { data } = await host.get('api/profile/' + id);
  return data;
}
