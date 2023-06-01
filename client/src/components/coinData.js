import React from 'react';







const getCoinData=()=>{

// const url = 'https://coingecko.p.rapidapi.com/coins/53/market_chart?vs_currency=usd&days=1';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ee67d9fec1msh44d6fc1a5c11407p173dc1jsn4e0fac7f0c4e',
// 		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
return(
    <>
    <h1>Fetched Data</h1>
    </>
)
}

export default getCoinData;