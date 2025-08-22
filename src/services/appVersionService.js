const gplay = require("google-play-scraper").default;

class AppVersionService {
  async getAppInfo(appId) {
    if (!appId) {
      throw new Error("appId is required");
    }
    const gplay = await import("google-play-scraper");
    return gplay.default.app({ appId });
  }
}
module.exports = new AppVersionService();
