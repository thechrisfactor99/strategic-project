import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { deleteDebt } from  '../src/graphql/mutations'

const handleDeleteDebt = async (recordId) => {

	const deleteParams = {id: recordId}

    const debt = await API.graphql(graphqlOperation(deleteDebt, {input: deleteParams}))
    .then(obj => {
        return(obj)
      })
    .catch(err => {return err})

    return debt
}

export default handleDeleteDebt