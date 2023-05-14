import VideoData from "@/data/vidoes.json";
import axios from "axios";

export const getCommonVidoes = async (url) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const BASE_URL = "https://youtube.googleapis.com/youtube/v3";
  //   &key=[YOUR_API_KEY]
  const URL = `${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`;

  try {
    const { data } = await axios.get(URL);

    return data?.items.map((item) => {
      const id = item?.id?.videoId || item?.id;
      return {
        title: item?.snippet?.title,
        imgUrl: item?.snippet?.thumbnails?.high?.url,
        id,
      };
    });
  } catch (error) {
    console.error("Something went wrong", error);

    return [];
  }
};

export const getVidoes = (searchQuery) => {
  const URL = `search?part=snippet&type=video&q=${searchQuery}`;
  return getCommonVidoes(URL);
};

export const getPopularVideos = () => {
  const URL = `videos?part=snippet&chart=mostPopular&regionCode=us`;
  return getCommonVidoes(URL);
};
