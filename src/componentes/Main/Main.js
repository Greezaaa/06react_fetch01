import styles from './style.module.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
const Main = (data) => {
    return (
        <div className={styles['charecter_wrapper']}>
            {data.data.map((personaje, i) => {
                return (
                    <div className={styles.personaje} key={i}>
                        <h3>{personaje.name}</h3>
                        <LazyLoadImage
                            src={personaje.image}
                            alt={personaje.name}
                            width="200"
                            referrerPolicy='no-referrer' />
                    </div>
                )
            })}
        </div>

    )
}

export default Main