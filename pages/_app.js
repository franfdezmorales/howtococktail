import { AppLayout } from '../components/AppLayout'
import '../styles/globals.css'
import { CocktailProvider } from '../context/CocktailProvider'

function MyApp({ Component, pageProps }) {

  return (
    <CocktailProvider>
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    </CocktailProvider>
  )
}

export default MyApp
