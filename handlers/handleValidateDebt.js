const handleValidateDebt = (record) => {
    let newStatus
    for(let key in record){
        if(record[key].length <= 0){
          newStatus = {status: 'Error', message: "Fields can't be empty."}
        }
    }
    if(record.balance <= 0){
      newStatus = {status: 'Error', message: "Balance must be greater than 0."}
    }
    else if(record.minPay <= 0){
      newStatus = {status: 'Error', message: "Minimum Payment % must be greater than 0."}
    }

    if(newStatus == undefined){
      newStatus = {status: 'Success', message: 'Debt added.'}
    }

    return newStatus
  }

export default handleValidateDebt