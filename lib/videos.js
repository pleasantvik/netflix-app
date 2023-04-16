import VideoData from "@/data/vidoes.json";
import axios from "axios";

export const getVidoes = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=${YOUTUBE_API_KEY}`;

  const { data } = await axios.get(URL);
  console.log(data, "myyyy");

  return data?.items.map((item) => {
    return {
      title: item?.snippet?.title,
      imgUrl: item?.snippet?.thumbnails?.high?.url,
      id: item?.id?.videoId,
    };
  });
};
