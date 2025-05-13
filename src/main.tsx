
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM loaded in main.tsx - attempting to mount React app");
  
  // Make sure we're finding the root element
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    console.error("Failed to find the root element");
  } else {
    try {
      const root = createRoot(rootElement);
      root.render(<App />);
      console.log("React app successfully mounted");
    } catch (error) {
      console.error("Error rendering React app:", error);
    }
  }
});
