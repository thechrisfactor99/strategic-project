import {useState} from 'react'
import handleFormatBalance from '../handlers/handleFormatBalance'
import handleValidateDebt from '../handlers/handleValidateDebt'

import handleAddDebt from '../handlers/handleAddDebt'

const useRecord = (item) => {
  const [record, setRecord] = useState(item)
  const [count, setCount] = useState(0)

  const [status, setStatus] = useState({status: 'ready', message: ''})

  const formatBalance = (input) => {
    const balance = handleFormatBalance(input)
    return balance
  }

  const input = (e) => {

    let newRecord = record
    if((e.target.name != "balance") && (e.target.name != "minPay")){
      newRecord[e.target.name] = e.target.value
    }
    else{
      newRecord[e.target.name] = formatBalance(e.target.value)
    }

    setRecord(newRecord)
    const newCount = count + 1
    setCount(newCount)
  }

  const resetRecord = () => {
    setRecord(item)
  }

  const submit = async () => {

    const validation = handleValidateDebt(record)

    const addDebt = await handleAddDebt(record)
    console.log(addDebt)

    setStatus(validation)
    setRecord(item)
    
  }

  return {record, input, submit, status}
}

export default useRecord