async function sayJoke(apiUrl, jokeId){
    try{
      let jokeId = await fetch(apiUrl)
   let response = jokeId.json()
   return response
    }catch(error){
      new Error(`No jokes found id:${jokeId}`)
    }
   
  }