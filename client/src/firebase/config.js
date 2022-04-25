import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIM,
  projectId: process.env.REACT_APP_FB_PROJECTID,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDERID,
  storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
  appId: process.env.REACT_APP_FB_APPID,
};
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);

export { storage, firebaseApp };
