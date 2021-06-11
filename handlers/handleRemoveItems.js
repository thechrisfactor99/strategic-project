const handleRemoveItems = (items, removeList) => {
    const removeKeys = removeList.map(it => it.id)
    const remainingItems = items.map(it => {
      if(!removeKeys.includes(it.id)){
        return it
      }
    }).filter(it => it != undefined)

    return remainingItems
}

export default handleRemoveItems