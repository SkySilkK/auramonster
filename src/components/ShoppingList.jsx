

function ShoppingList() {
const fruits = [
  {id: 1, title: "Cabbage", isFruit: false},
  {id: 2, title: "Garlice", isFruit: false},
  {id: 3, title: "Apple", isFruit: true},
]


  return(
    <ul>
  {fruits.map( ({id ,isFruit, title})  => 
    <li
      key={id}
      style={{
          color: isFruit ? "darkgreen" : "magenta"
      }}
    >
      {title}
  </li>
  )
      }
    </ul>
  )
}

export default ShoppingList
