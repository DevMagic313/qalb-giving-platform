
import { createRoot } from 'react-dom/client'
import { Suspense, StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Add preconnect for Google Fonts and Unsplash
const head = document.head;
const preconnectGoogle = document.createElement('link');
preconnectGoogle.rel = 'preconnect';
preconnectGoogle.href = 'https://fonts.gstatic.com';
preconnectGoogle.crossOrigin = 'anonymous';
head.appendChild(preconnectGoogle);

const preconnectUnsplash = document.createElement('link');
preconnectUnsplash.rel = 'preconnect';
preconnectUnsplash.href = 'https://images.unsplash.com';
preconnectUnsplash.crossOrigin = 'anonymous';
head.appendChild(preconnectUnsplash);

// Render the app with performance optimizations
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-background">Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
