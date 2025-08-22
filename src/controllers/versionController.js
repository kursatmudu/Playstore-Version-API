import appVersionService from "../services/appVersionService.js";

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
        error: "Failed to fetch version",
        details: err.message,
      });
    }
  }
}

export default new VersionController();
