import { instance } from "./axios";

// OAuth2 Test
export const getOauth2TestConfig = async () => {
  return await instance.get("/api/oauth2/test/config");
};

// Word
export const getWordSearch = async (query: string) => {
  return await instance.get("/api/word/search", { params: { query } });
};

// User
export const patchUserNickname = async (name: string) => {
  return await instance.patch("/user/nickname", { name: name });
};

export const getUserFeeds = async () => {
  return await instance.get("/user");
}

// Statistics
export const getStatistics = async () => {
  return await instance.get(`/api/statistics/overall`);
}

// Feed
export const postFeed = async (wordId: string, feed: { description: string }) => {
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

export const getWordFeeds = async (id: string) => {
  return await instance.get(`/api/feed/${id}/all`);
}

// like
export const getLikes = async (id: string) => {
  return await instance.post(`likes/${id}`);
}