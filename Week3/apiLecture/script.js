async function getMoney(){
    // console.log('get money get money')
    // get information from an api
    var response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')


    // convert the raw data we get back into JSON

    var jsonCoinData = await response.json();


    let div = document.querySelector('#coinList')
    // console.log(jsonCoinData)
    // put that information into the div with the id of coinlist
        div.replaceChildren()
    //jsonCountData is an array of objects
    //FOR every coin, I want to create a paragraph tag
    for(let i = 0; i<jsonCoinData.length; i++){
    let currentCoin = jsonCoinData[i];
    let pTag = document.createElement('p')

        pTag.innerText = `${currentCoin.name} - $ ${currentCoin.current_price}`;
        



        div.appendChild(pTag)
}

}