import { CssBaseline, Grid } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import { themeColors } from './utils/theme'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ProductsPage from './pages/ProductsPage'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'


const App = () => {
  const theme = createTheme({
    palette: themeColors,
    typography: {
      Roboto: {
        fontFamily: ['Roboto', 'sans-serif'].join(', ')
      },
      RedHatDisplay: {
        fontFamily: ['Red Hat Display', 'monospace'].join(', ')
      },
      Quicksand: {
        fontFamily: ['Quicksand'].join(', ')
      },
      fontFamily: ['Inter', 'sans-serif'].join(', ')
    },
    components: {
      MuiRating: {
        styleOverrides: {
          root: {
            color: '#FB8200',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <CssBaseline />
        <Grid container justifyContent='center' padding={2}>
          <Grid item style={{ maxWidth: 1400, width: '100%' }}>
            <Navbar />

            <Routes>
              <Route path='/' exact element={<ProductsPage />} />
              <Route path='/watchlist' exact element={<ProductsPage onlyWatchlist />} />
            </Routes>
          </Grid>
        </Grid>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App
