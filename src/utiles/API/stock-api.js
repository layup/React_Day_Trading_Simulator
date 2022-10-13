const basePath = 'https://finnhub.io/api/v1'

export const searchSymbols = async(query) => {
    const url =`${basePath}/search?q=${query}&token=${process.env.REACT_APP_FINN_API_KEY}`
    const response = await fetch(url)

    if(!response.ok){
        const message = `An error has occured: ${response.status}`; 
        throw new Error(message); 
    }

    const data =  await response.json()
    
  
  //  return data.result.filter((item, index) => {
  //    return item.type !== ""
  //  });
    return data
}

export const fetchStockDetails = async (stockSymbol) => {
    
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_FINN_API_KEY}` 
    const response = await fetch(url)

    if(!response.ok){
        const message = `An error has occured: ${response.status}`; 
        throw new Error(message); 
    }

    return await response.json(); 
}

export const fetchQuote = async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_FINN_API_KEY}`;
    const response = await fetch(url);
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    return await response.json();
};


export const fetchHistoricalData = async (
    stockSymbol,
    resolution,
    from,
    to
  ) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_FINN_API_KEY}`;
    const response = await fetch(url);
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    return await response.json();
};