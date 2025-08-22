const appVersionService = require("../services/appVersionService");

class VersionController {
  async getVersion(req, res) {
    try {
      const { appId } = req.query;
      const appInfo = await appVersionService.getAppInfo(appId);

      res.json({
        title: appInfo.title,
        version: appInfo.version,
      });
    } catch (err) {
      res.status(500).json({
        error: "Versiyon alınamadı",
        details: err.message,
      });
    }
  }
}

module.exports = new VersionController();
