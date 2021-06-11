import {useState, useEffect} from 'react'

import handleFilterList from '../handlers/handleFilterList'
import handleRemoveItems from '../handlers/handleRemoveItems'
import handleSumBalance from '../handlers/handleSumBalance'
import handleToggleSelect from '../handlers/handleToggleSelect'

import handleListDebts from '../handlers/handleListDebts'
import handleDeleteDebt from '../handlers/handleDeleteDebt'

const useList = (listItems) => {
	const [items, setItems] = useState([])

  const filterList = (list) => {
    const filteredItems = handleFilterList(list)
    return filteredItems
  }

  const sumBalance = (list) => {
    const balance = handleSumBalance(list)
    return balance
  }

  const toggleSelect = (key) => {
    const selectedItems = handleToggleSelect(items, key)
    setItems(selectedItems)
  }

  const removeItems = async (removeList) => {
    const removedItems = handleRemoveItems(items, removeList)
    
    let deletedDebt
    for(let i=0;i<removeList.length; i++){
        deletedDebt = await handleDeleteDebt(removeList[i]['id'])
    }

    setItems(removedItems)
  }

	useEffect(async () => {

      const fetchedItems = await handleListDebts()
			const checkedItems = fetchedItems.map(it => {return({...it, checked:false})})
			setItems(checkedItems)
		}, [])


    useEffect(async () => {
      const newItems = await handleListDebts()
      console.log(newItems)

    }, [])


	return {items, toggleSelect, filterList, sumBalance, removeItems}
}

export default useList