import ytdl from "@distube/ytdl-core";

export const getInfo = (url: string) => {
  return ytdl.getInfo(url, {});
};

export const getAudioFormats = (info: ytdl.videoInfo) => {
  return info.formats.filter((format) => !format.hasVideo && format.hasAudio);
};
