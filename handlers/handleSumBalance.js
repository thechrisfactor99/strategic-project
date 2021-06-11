const sumValues = (accumulator, currentValue) => accumulator + currentValue;

const handleSumBalance = (list) => {

    const balances = list.map(it => it.balance)
    
    let balance = 0
    if(balances.length > 0){
      balance = balances.reduce(sumValues)
    }
    return balance
  }

export default handleSumBalance