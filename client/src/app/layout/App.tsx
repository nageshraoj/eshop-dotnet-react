import { useState } from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import { Container, CssBaseline, createTheme } from '@mui/material'
import Catalog from '../../components/Catalogs/Catalog'
import { ThemeProvider } from '@emotion/react'
import HomePage from '../../components/home/HomePage'
import ContactPage from '../../components/contact/ContactPage'
import AboutPage from '../../components/about/AboutPage'
import ProductsPage from '../../components/Catalogs/ProductsPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#efefef',
      },
    },
  })

  function screenTheme() {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header screenTheme={screenTheme} />
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/products/:id' element={<ProductsPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
