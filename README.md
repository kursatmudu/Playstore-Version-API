# Playstore Version API

[![Node.js CI](https://github.com/<your-username>/playstore-version-api/actions/workflows/node.js.yml/badge.svg)](https://github.com/<your-username>/playstore-version-api/actions)

A simple REST API to fetch **Android app version information** from the Google Play Store.  
Built with `google-play-scraper` and structured following **SOLID principles** for clean, maintainable code.  

---

## 🚀 Features
- Fetch the **latest version** of any Android app using its `appId`.
- Based on **Express.js**, easily extensible.
- `.env` support for environment configuration.
- Layered architecture with clear separation of concerns (Controller, Service, Routes, Config).
---

---

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/playstore-version-api.git
   cd playstore-version-api
   ```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file:
```bash
PORT=3388 (Default port: 3000)
```
4. Start the server:
```bash
node server.js
```
## 📡 API Usage
Endpoint:
```bash
GET /api/version?appId=<package_name>
```
Example:
```bash
curl "http://localhost:3111/api/version?appId=org.telegram.messenger"
```
Reponse
```bash
{
  "title": "Telegram",
  "version": "11.14.0"
}
```
### 🧪 Tests (Optional)
If you add jest + supertest, run tests with:
```bash
npm test
```