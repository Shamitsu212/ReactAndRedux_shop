import { useParams, useNavigate } from "react-router-dom"
import styles from "./Unit_Page.module.css"

import { units } from "../../../utils/units";

import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice";

import Button_UI from "../../UI/Button/Button_UI";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";


function Unit_Page({}) {

    const navigate = useNavigate();

    const goToCatalog = (id) => navigate(`/`)

    const { id } = useParams();

    let unit = units.find(u => u.id == id)

    const dispatch = useDispatch()

  return (
    <main className={styles.Page}>

      <Header text="Товар"/>
    
        <div className={styles.Page__Unit}>
            <div className={styles.Unit__card}>
                <picture className={styles.card__wrapper}>
                    <source/>
                    <img className={styles.wrapper__img} src={unit.pic}/>
                </picture>
            </div>

            <div className={styles.Unit__content}>
                  <h1 className={styles.content__name}>
                      {unit.name}
                  </h1>
                  <p className={styles.content__text}>
                      {unit.text}
                  </p>
                  <p className={styles.content__price}>{unit.price}</p>
                  <div style={{width: "110px", height: "59px"}} onClick={() => dispatch(addItem(unit))}>
                      <Button_UI text="В корзину" colorType="pink"/>
                  </div>
                  <div style={{width: "60px", height: "39px"}} onClick={() => goToCatalog()}>
                      <Button_UI text="Назад" colorType="blue"/>
                  </div>
            </div>
        </div>

      <Footer/>

    </main>
  )
}

export default Unit_Page
