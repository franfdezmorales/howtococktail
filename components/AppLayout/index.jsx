import styles from '../../styles/AppLayout.module.css'
import { TopBar } from '../TopBar'

export const AppLayout = ({children}) => {

    return (
        <div className={styles.appLayout}>
            <TopBar />
            {children}
        </div>
    )
}