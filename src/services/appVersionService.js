import gplay from "google-play-scraper";

class AppVersionService {
  async getAppInfo(appId) {
    if (!appId) {
      throw new Error("appId is required");
    }
    return await gplay.app({ appId });
  }
}

export default new AppVersionService();