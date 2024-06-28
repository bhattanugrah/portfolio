import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import CustomCursor from './components/customCursor/customCursor'


const PublicLayout = lazy(() => import('./features/layout/publicLayout'))
const HomePage = lazy(() => import('./pages/homePage'))

function App() {

  return (
    <BrowserRouter>
        <ParallaxProvider>
            <Suspense >
                <Routes>
                    <Route 
                        path='/'
                        element={
                            <PublicLayout />
                        }
                    >
                        <Route index element={<HomePage />} />
                    </Route>
                </Routes>
            </Suspense>
        </ParallaxProvider>
        <CustomCursor />
    </BrowserRouter>
  )
}

export default App
