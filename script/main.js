// My api key
const apikey = {
    key: '05844e15-ebb1-4e70-a2de-659d2e8a1a99'
}

// Get fetch requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then( response => {
        if (!response.ok) {
            throw new Error('Erro ao executar a requisição, status: ' + response.status)
        }
        return response.json()
    } )
    .then( api => {
        console.log(api);

        // Add data in to page
        let text = ''

        // Get 10 coins and symbols
        for(let i = 0; i < 10; i++){
            text = text + `
                <div class="media">
                    <img src="coin.png" class="align-self-center mr-3" alt="coin" width="100" height="60">
                    <div class="media-body">
                        <h5 class="mt-2"> ${api.data[i].name} </h5>
                        <p> ${api.data[i].first_historical_data} </p>
                        <p> ${api.data[i].symbol} </p>
                    </div>
                </div>
            `;

            document.getElementById('coins').innerHTML = text
        }
    } )
    .catch( error => {
        console.error(error.message);
    })


