import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { listDebts } from  '../src/graphql/queries'

const handleListDebts = async () => {
    const debts = await API.graphql(graphqlOperation(listDebts))
    .then(obj => {
        console.log(obj)
        return(obj)
      })
    .catch(err => console.log(err))

    return debts.data.listDebts.items
}

export default handleListDebts