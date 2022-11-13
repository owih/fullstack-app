import { host } from "@/http/index";

export const fetchProfiles = async (page, limit) => {
  const { data } = await host.get('api/profile', { params: { page, limit } });
  return data;
}

export const fetchProfile = async (id) => {
  const { data } = await host.get('api/profile/' + id);
  return data;
}

export const fetchProfilesPerName = async (page, limit, name) => {
  const { data } = await host.get('api/profile/search', { params: { page, limit, name } });
  return data;
}

export const putNewProfileData = async (id, profileData) => {
  const { data } = await host.put('api/profile/' + id, profileData);
  return data;
}
