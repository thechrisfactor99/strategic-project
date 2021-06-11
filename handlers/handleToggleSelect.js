const handleToggleSelect = (listItems, key) => {
    let newSelect
    const selectedItems = listItems.map(it => {
      if(key == it.id){
        newSelect = !it.checked
        return {...it, checked: newSelect}
      }
      else{
        return it
      }
    })

    return selectedItems
}

export default handleToggleSelect 