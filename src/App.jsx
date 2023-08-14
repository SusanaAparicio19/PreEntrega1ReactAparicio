import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/NavBar'
import classes from './App.module.css'


function App() {
 
  return (
    <>
      <div className={classes.ContainerGeneral}>
        <div className={classes.ContainerArriba}>
          <div className={classes.Arriba}>
            <Navbar/>
          </div>      
        </div>
        <div className={classes.ContainerMedio}>
          <div className={classes.Texto}>
            <ItemListContainer greeting = "46 Soles Te da la Bienvenida!!!"/>
          </div>
        </div>
      </div>
    </>
) 

}

export default App

