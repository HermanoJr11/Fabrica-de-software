import styles from "./Usuario.module.css"

function Usuario({nome,idade, cargo} ) {

    return(

        <div className={styles.div_user}>
            
            <img alt={nome} src={"foto"}  ></img>
            <h1 className={styles.titulo}>{nome}</h1>
            <h1>{nome}</h1>
            <p>{idade}</p>
            <p>{cargo}</p>


        </div>
    )
}

export default Usuario
