import { host } from "@/http/index";

export const createPost = async (postData) => {
  const { data } = await host.post('api/post', postData);
  return data;
}

export const fetchPosts = async (page, limit, profileId) => {
  const { data } = await host.get('api/post', { params: { page, limit, profileId } });
  return data;
}

export const fetchPost = async (id) => {
  const { data } = await host.get('api/post/' + id);
  return data;
}
