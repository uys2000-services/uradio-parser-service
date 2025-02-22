import { Router } from "express";
import { getAudioFormats, getInfo } from "../service/ytdl";

const router = Router();

router.post("/", async (req, res) => {
  const { url, token } = req.body as { url?: string; token?: string };
  if (!url || !token) {
    res.status(400).json({ message: "Missing url or token" });
    return;
  }

  const info = await getInfo.uLog(url);
  const formats = getAudioFormats(info);
  res.status(200).json(formats);
});

export default router;
