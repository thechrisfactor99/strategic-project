import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { createDebt } from  '../src/graphql/mutations'

const handleAddDebt = async (debtRecord) => {
	console.log(debtRecord)
    const debt = await API.graphql(graphqlOperation(createDebt, {input: debtRecord}))
    .then(obj => {
        return(obj)
      })
    .catch(err => {return err})

    return debt
}

export default handleAddDebt