import 'dotenv/config';
export default {
  "expo": {

    "name": "Apptienda",
    "slug": "Apptienda",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./img/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "bundleIdentifier": 'com.maucastillo.apptienda',
      "supportsTablet": true
    },
    "android": {
      "package": 'com.maucastillo.apptienda',
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      "eas": {
        "projectId": "deddac94-16fb-4557-bf17-1383ec9375a6"
      },
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    },
    
  }
}
