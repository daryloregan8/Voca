# Voca

A new kind of expressive communication tool for people who are deaf, hard-of-hearing, or non-speaking.

## What is Voca?

Most assistive apps today focus on utility — transcription, captions, basic text-to-speech. They help you communicate the content of what you want to say, but not the feeling. Voice is more than words. It carries warmth, humour, intent, personality, softness, drama. For people who rely only on text, that emotional range often gets lost, leaving conversations feeling flat or limited. **Voca gives that expression back.**

With Voca, you can write what you want to say, choose the tone, choose the voice — even clone your own — and generate a message that sounds exactly the way you intend. Gentle for a friend, professional at work, playful for your kids, flirty for a date. You can save it, play it aloud in person, or share it instantly as a voice note on WhatsApp, Instagram, iMessage, LinkedIn, and more.

### Core Features

**Two Modes:**
- **Voice Note Mode** - Create expressive voice messages to share anywhere
- **Real-time Conversation Mode** - Live back-and-forth where you speak through Voca and receive transcribed voice replies

**Expression Tools:**
- Text-to-speech with tone and emotion selection
- Voice cloning for personalized expression
- Video lip-sync/dubbing with your chosen voice
- Voice presets (gentle, professional, playful, flirty, and more)
- Save and share across all platforms

**Coming Soon:**
- Sign-to-speech input — sign to the camera and Voca speaks for you in real time

Voca is built on the belief that everyone deserves the ability to express themselves fully — not just clearly, but beautifully, authentically, and emotionally. Voice is our most natural instrument. Voca makes it accessible to everyone.

## System Architecture

### Root domain (myvoca.io)
- Public marketing surface (Lovable)
- Fully static, cacheable, SEO-optimized
- No authentication or app state

### Application subdomain (app.myvoca.io)
- All authenticated experiences
- Expo web app
- PWA manifest + service worker
- Separate origin for clean cookie scoping and CSP

### User Flow
1. Landing page CTA → `app.myvoca.io`
2. Sign-up/sign-in occurs entirely on `app.myvoca.io`

This minimizes cross-origin redirects and aligns with Google's best practice for app boundary separation.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

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
