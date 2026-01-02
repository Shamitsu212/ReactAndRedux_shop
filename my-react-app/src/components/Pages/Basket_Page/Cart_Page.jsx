import styles from "./Cart_Page.module.css"

import UnitCard from "../../UI/UnitCard/UnitCard"
import Footer from "../../Layout/Footer/Footer"
import Header from "../../Layout/Header/Header"

import { useSelector } from "react-redux"


function Basket_Page() {

  const units = useSelector(state => state.cart.items)

  return (
    <main className={styles.Page}>
      <Header text="Корзина"/>
      
      <div className={styles.Page__mappedList}>
        {units.map(unit =>(
          <UnitCard key={unit.id} unit={unit} showDelete={true}/>
        ))}
      </div>

      <Footer/>
    </main>
  )
}

export default Basket_Page
