import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import UnitCard from '../../UI/UnitCard/UnitCard'

import styles from "./Catalog_Page.module.css"

import { units } from '../../../utils/units'

function Catalog_Page({}) {

  return (
    <div className={styles.Page}>

      <Header text="Каталог" />

      <div className={styles.Page__mappedList}>
        {units.map(unit =>(
        <UnitCard key={unit.id} unit={unit} />
      ))}
      </div>
      
      
      <Footer/>
    </div>
  )
}

export default Catalog_Page
