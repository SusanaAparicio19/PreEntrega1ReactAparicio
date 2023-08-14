import classes from './NavBar.module.css'
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
    return (
        <nav className={classes.NavBar}>
            <img className={classes.imgheader} src="../src/img/marca.png"/>
            <section>
                <button className={classes.button}> Linea Susan </button>
                <button className={classes.button}> Linea Angie </button>
                <button className={classes.button}> Linea Irene </button>
            </section>
            <CartWidget/>
        </nav>
    )
}
export default Navbar