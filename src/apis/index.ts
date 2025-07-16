import { instance } from "./axios";

// OAuth2 Test
export const getOauth2TestConfig = async () => {
  return await instance.get("/api/oauth2/test/config", {
    headers: {
      "Content-Type": "application/json"
    }
  });
};

// Word
export const getWordSearch = async (query: string) => {
  return await instance.get("/api/word/search", { params: { query } });
};

// User
export const patchUserNickname = async (nickname: string) => {
  return await instance.patch("/user/nickname", { nickname });
};

// Feed
export const postFeed = async (wordId: string, feed: { content: string }) => {
  return await instance.post(`/api/feed/${wordId}`, feed);
};

export const getFeedById = async (id: string) => {
  return await instance.get(`/api/feed/${id}`);
};

export const deleteFeedById = async (id: string) => {
  return await instance.delete(`/api/feed/${id}`);
};

export const patchFeedById = async (id: string, feed: { content: string }) => {
  return await instance.patch(`/api/feed/${id}`, feed);
};

export const getAllFeeds = async () => {
  return await instance.get("/api/feed");
};

export const getAllUserFeeds = async (id: string) => {
  return await instance.get(`/api/feed/${id}/all`);
};