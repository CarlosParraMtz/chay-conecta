import style from '../styles/navbar.module.css';

export default function NavBar() {
    return (
        <div className={style.navbar}>
            <div className={style.contenedor} >

                <p>Aquí logo</p>

                <ul>
                    <li className={style.botonLi} ><a className={style.enlaces} href="#">Redes</a></li>
                    <li className={style.botonLi} ><a className={style.enlaces} href="#">Contacto</a></li>
                    <li className={style.botonLi} ><a className={style.enlaces} href="#">¿Cómo funciona?</a></li>
                </ul>

                <button className={style.btncotizacion} >Solicitar cotización</button>

            </div>

        </div>
    )
}