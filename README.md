# Company Customization Guide - Employee Engagement App

This is a white-label employee engagement and mood tracking application built with Expo and React Native. The app can be customized for different companies by updating configuration files, branding assets, and Firebase backend.

## Current Configuration
- **Company**: DOJO (Mahindra)
- **App Name**: mDojo
- **Package ID**: `com.mdojo.app`
- **Firebase Project**: `dojo-81d05`

---

## Quick Start

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the development server
   ```bash
   npx expo start
   ```

3. Run on platforms
   ```bash
   npm run android    # Android device/emulator
   npm run ios        # iOS simulator
   npm run web        # Web browser
   ```

---

## 🏢 Customizing for a New Company

Follow these steps to rebrand the app for a different company:

### Step 1: Update App Identity

**File: `app.json`**

Update these fields:
```json
{
  "expo": {
    "name": "YOUR_COMPANY_NAME",           // Display name
    "slug": "your-company-slug",           // URL-friendly name
    "scheme": "yourcompany",               // Deep linking scheme
    "android": {
      "package": "com.yourcompany.app"     // Android package ID
    },
    "ios": {
      "bundleIdentifier": "com.yourcompany.app"  // iOS bundle ID
    }
  }
}
```

### Step 2: Configure Firebase Backend

See [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for detailed instructions.

**Quick Summary:**

1. Create a new Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database and Authentication
3. Register Web and Android apps
4. Download configuration files

**Update these 6 files with your Firebase credentials:**

1. ✅ `config/firebase.js` (Main configuration)
2. ✅ `config/firebaseConfig.js`
3. ✅ `firebase.js` (Root directory)
4. ✅ `createAdmin.js`
5. ✅ `google-services.json` (Root directory - Android)
6. ✅ `android/app/google-services.json` (Android build)

**Firebase Config Template:**
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:android:abc123",
  measurementId: "G-XXXXXXXXXX"
};
```

### Step 3: Update Branding & Welcome Messages

**File: `app/chat.js`**

Search and replace welcome messages:
- Line 723: `"Welcome to Dojo! 👋"` → `"Welcome to YourCompany! 👋"`
- Line 731: `"Welcome to Dojo!"` → `"Welcome to YourCompany!"`
- Line 806: `"Welcome to Dojo! 👋"` → `"Welcome to YourCompany! 👋"`
- Line 814: `"Welcome to Dojo!"` → `"Welcome to YourCompany!"`
- Line 1963: `"Welcome to Dojo! 👋"` → `"Welcome to YourCompany! 👋"`

**File: `NOTIFICATION_SETUP.md`**
- Update notification title examples with your company name

### Step 4: Replace Visual Assets

**Required Image Files:**

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `assets/images/adaptive-icon.png` | App icon (Android) | 1024x1024px |
| `assets/images/splash-icon.png` | Splash screen logo | 400x400px |
| `assets/images/mDOJO_tagline+logo_Vector.png` | Company branding | Vector/High-res |
| `assets/icon.png` | Fallback icon | 1024x1024px |

**Android-specific icons** (auto-generated, but can be customized):
- `android/app/src/main/res/drawable-*/splashscreen_logo.png`
- `android/app/src/main/res/drawable-*/notification_icon.png`

**Tip:** Use a tool like https://easyappicon.com/ to generate all icon sizes from one source image.

### Step 5: Initialize Database Collections

After Firebase setup, create these Firestore collections:

1. **`employees`** - Employee profiles and data
2. **`register`** - Admin user accounts
3. **`chatResponses`** - Chat conversation history (auto-created)
4. **`employeeMoods`** - Mood tracking data (auto-created)
5. **`employee_logins`** - Login history (auto-created)

**Create first admin account:**
```bash
node createAdmin.js
```

---

## 📋 Customization Checklist

Before deploying for a new company, verify:

- [ ] Updated `app.json` with company name and package IDs
- [ ] Updated all 6 Firebase configuration files
- [ ] Replaced `google-services.json` for Android
- [ ] Updated welcome messages in `app/chat.js`
- [ ] Replaced all logo/icon images in `assets/`
- [ ] Created Firebase project and enabled Firestore
- [ ] Initialized required Firestore collections
- [ ] Created admin account in Firebase
- [ ] Tested app on Android device/emulator
- [ ] Verified notifications work (see [NOTIFICATION_SETUP.md](NOTIFICATION_SETUP.md))
- [ ] Updated EAS build configuration if deploying

---

## 🏗️ Building for Production

### Android APK/AAB

```bash
# Build APK for testing
eas build -p android --profile preview

# Build AAB for Play Store
eas build -p android --profile production
```

**Important:** After changing package ID, you'll need to submit as a new app to Google Play Store.

### iOS

```bash
# Build for TestFlight/App Store
eas build -p ios --profile production
```

**Important:** After changing bundle identifier, you'll need to create a new app in App Store Connect.

---

## 📁 Project Structure

```
├── app/                    # Main application screens
│   ├── chat.js            # Employee chat interface
│   ├── adminpanel.js      # Admin dashboard
│   ├── login.js           # Login screen
│   └── (tabs)/            # Tab navigation screens
├── assets/                # Images, icons, fonts
├── config/                # Firebase and app configuration
├── android/               # Native Android project
├── services/              # Business logic and services
├── app.json               # Expo app configuration
├── firebase.js            # Firebase initialization
└── google-services.json   # Android Firebase config
```

---

## 🔧 Common Issues

### Firebase Not Connecting
- Verify all 6 config files have matching credentials
- Check Firebase project has Firestore enabled
- Ensure `google-services.json` package name matches `app.json`

### Build Failures
- Clear cache: `npx expo start --clear`
- Rebuild: `cd android && ./gradlew clean && cd ..`
- Check package ID is unique (no conflicts)

### Icons Not Updating
- Clear cache and rebuild
- Verify icon files are PNG format
- Run: `npx expo prebuild --clean`

---

## 📚 Additional Documentation

- [FIREBASE_SETUP.md](FIREBASE_SETUP.md) - Complete Firebase configuration guide
- [NOTIFICATION_SETUP.md](NOTIFICATION_SETUP.md) - Push notification setup instructions

---

## 🆘 Support

For technical issues or questions about customization, review the setup documentation or check the Firebase and Expo documentation:
- https://docs.expo.dev/
- https://firebase.google.com/docs

---

## 📄 License

This is a white-label application template. Customize as needed for your organization

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
