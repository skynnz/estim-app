import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider} from "@heroui/react";
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import ThemeSwitch from '../components/ui/themeSwitch';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
        <Router>
          <main className='text-foreground bg-background'>
            
              <ThemeSwitch />
            
            <App />
          </main>
        </Router>
    </HeroUIProvider>
  </StrictMode>,
)
