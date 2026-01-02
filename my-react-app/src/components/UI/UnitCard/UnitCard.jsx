import Button_UI from "../Button/Button_UI"
import styles from "./UnitCard.module.css"

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";

import { addItem, removeItem  } from "../../../store/cartSlice"



function UnitCard({unit, showDelete=false }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToUnit = (id) => navigate(`/${id}`)


  return (
    <article className={styles.card}>

      <picture className={styles.card__wrapper}>
        <source/>
        <img className={styles.wrapper__img} src={unit.pic} onClick={() => goToUnit(unit.id)}/>
      </picture>

      <div className={styles.card__content}>

        <div className={styles.content__text}>

            <p className={styles.text__price}>
                <strong className={styles.price__strong}>{unit.price}</strong>
            </p>

            <h4 className={styles.text__name}>
                {unit.name}
            </h4>

        </div>

        <div className={styles.content__buttons}>

            <div onClick={() => goToUnit(unit.id)} style={{marginTop: "28px", width: "110px", height: "29px"}}>
                <Button_UI text="Подробнее" colorType="blue" />
            </div>
          
            {showDelete == false && (
              <div onClick={() => dispatch(addItem(unit))} style={{marginTop: "8px", width: "110px", height: "29px"}}>
                <Button_UI text="В корзину" colorType="pink"/>
              </div>
            )}

            {showDelete && (
              <div
                onClick={() => dispatch(removeItem(unit.id))} style={{ marginTop: "8px", width: "110px", height: "29px" }}>
                <Button_UI text="Удалить" colorType="red" />
              </div>
            )}
            
        </div>
        

      </div>

    </article>
  )
}

export default UnitCard
