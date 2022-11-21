import styles from './style.module.css'
const Button = ({ eleClass, func, link, btnText }) => {
    // console.log(eleClass) // respuesta "String con nombre de la clase - correcta"
    return (
        <button
        
            className={styles.btn + " " + eleClass} // devuelve [object object]
            onClick={() => func(link)}>
            {btnText}
        </button>
    )
}

export default Button