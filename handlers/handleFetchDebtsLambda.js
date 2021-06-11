import Amplify, { Auth, Analytics, API, graphqlOperation } from 'aws-amplify';


const handleFetchDebtsLambda = async () => {
    const response = await API.get('apidf955fa5', '/debts')
    console.log(response)
    return response   
  }

 export default handleFetchDebtsLambda	