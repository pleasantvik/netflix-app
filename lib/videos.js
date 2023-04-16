import VideoData from "@/data/vidoes.json";

export const getVidoes = () => {
  return VideoData.items.map((item) => {
    return {
      title: item?.snippet?.title,
      imgUrl: item?.snippet?.thumbnails?.high?.url,
      id: item?.id?.videoId,
    };
  });
};
