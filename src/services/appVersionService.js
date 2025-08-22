const gplay = require("google-play-scraper").default;

class AppVersionService {
  async getAppInfo(appId) {
    if (!appId) {
      throw new Error("appId parametresi gerekli");
    }
    return await gplay.app({ appId });
  }
}

module.exports = new AppVersionService();
