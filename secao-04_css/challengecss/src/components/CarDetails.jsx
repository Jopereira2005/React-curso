import styles from "./CarDetails.module.css";

const CarDetails = ({name, brand, color, usageState}) => {
  return (
    <div className={ styles.container  }>
      <h1 className={ styles.title }>Nome: { name }</h1>
      <ul className={ styles.list }>  
        <li className={ styles.list_item }>Marca : {brand}</li>
        <li className={ styles.list_item }>Cor : {color}</li>
        <li className={ styles.list_item }>Estado : {usageState}</li>
      </ul>
    </div>
  )
}

export default CarDetails