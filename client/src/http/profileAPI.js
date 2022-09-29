import { host } from "@/http/index";

export const createPost = async (description, img, profileId) => {
  const { data } = await host.post('api/post', { description, img, profileId });
  console.log(data)
  return data;
}

export const fetchPosts = async (page, limit) => {
  const { data } = await host.get('api/post', { params: { page, limit } });
  return data;
}

export const fetchPost = async (id) => {
  const { data } = await host.get('api/user/auth', { params: { id } });
  return data;
}
