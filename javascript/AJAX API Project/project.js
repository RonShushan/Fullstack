let baseUrl = 'https://api.coingecko.com/api/v3/coins'
let coins = []
let currentCoin = {}

callAjax(printCoinsToHtml, 0)

function callAjax(_function, id = 0) {
    //let url = id == 0 ? baseUrl : baseUrl + '/' + id
    let url

    if (id == 0) {
        url = baseUrl
    } else {
        url = baseUrl
    }


    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        success: function (data) {
            _function(data)
        },
        error: function (error) {
            console.log('error : ', error)
        },
    })
}

function searchBtn(val) {
    userInputValue = showInputDV.value

    coinContainer.innerHTML = ''


    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: 'https://api.coingecko.com/api/v3/coins/' + val,
        success: function (data) {
            coins = data
            printCoins()
        },
        error: function (error) {
            console.log('error : ', error)
        },
    })
}

function printCoinsToHtml(data) {
    coins = data
    coins.map((coin) => {
        let str = `
        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
        <div class="card" style='margin-top: 70px; width:320px; height:190px;'>
        <div class="card-body">
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck">
        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        <div class="card-title" id="cardTitle">${coin.symbol} <img class="card-img" id="coinImg" src="${coin.image.thumb}" style="width:50px; height:50px;">
        </div>
        </div>
        <div>
        <div class="card-text">${coin.name}</div><br>
        <div>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">more info</button>
        <div class="collapse" id="collapseExample">
        <div class="card card-body">details</div>
        </div>
        </div>
        </div>
        </div>

        
    `

        coinContainer.innerHTML += str
    })

    console.log('coins : ', coins)
}



function printCoins() {
    for (var i = 0; i < coins.length; i++) {
        printCoin(coins[i].coin)
    }
}
function printCoin(coin) {
    coinContainer1.innerHTML += `
    <div class="card" style='margin-top: 70px; width:320px; height:190px;'>
    <div class="card-body">
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck">
    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
    <div class="card-title" id="cardTitle">${coin.symbol} <img class="card-img" id="coinImg" src="${coin.image.thumb}" style="width:50px; height:50px;">
    </div>
    </div>
    <div>
    <div class="card-text">${coin.name}</div><br>
    <div>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">more info</button>
    <div class="collapse" id="collapseExample">
    <div class="card card-body">details</div>
    </div>
    </div>
    </div>
    </div>

    
`


}


// function printToHtml() {
//     coinContainer.innerHTML = ("my name is Ron Shushan and this in my Ajax project")
//     coinContainer.className = "mainDvClass"
//     document.body.appendChild(coinContainer)

// }