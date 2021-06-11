const handleFetchDebts = async (url) => {
  const fetchedItem = await fetch(url,
    {
      headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json',
      },
      method: "GET"
    } ).
  then(responseData => {
    return responseData.json()})
  .then(objs => {return (objs)})

  console.log(fetchedList)
  return fetchedList
}

export default handleFetchDebts