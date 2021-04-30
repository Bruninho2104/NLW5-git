import '../pages/styles/global.scss'
import styles from '../pages/styles/app.module.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'
import { PlayerContextProvider } from '../components/contexts/playerContexts'

function MyApp({ Component, pageProps }) {
  
  return (
    <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header/>
            <Component {...pageProps} />
          </main>
          <Player />
        </div> 
      </PlayerContextProvider>
  )
}

export default MyApp
