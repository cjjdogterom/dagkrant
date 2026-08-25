// Firebase-initialisatie. De config komt uit Vite-omgevingsvariabelen
// (VITE_FIREBASE_*), lokaal via .env en op Vercel via de project-instellingen.
// Zonder config blijft `firebaseIngesteld` false en werkt de app lokaal-only.

import { initializeApp, type FirebaseApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
}

export const firebaseIngesteld = Boolean(cfg.apiKey && cfg.projectId && cfg.appId)

let app: FirebaseApp | null = null
export let auth: Auth | null = null
export let db: Firestore | null = null
export const googleProvider = new GoogleAuthProvider()

if (firebaseIngesteld) {
  app = initializeApp(cfg as Required<typeof cfg>)
  auth = getAuth(app)
  db = getFirestore(app)
}
