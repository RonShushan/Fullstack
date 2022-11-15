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

    //"http://api.tvmaze.com/coins"
    //"http://api.tvmaze.com/coins/9"

    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        success: function(data) {
            _function(data)
        },
        error: function(error) {
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
        <div href="#"class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck">
        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
        <div class="card-title" id="cardTitle">${coin.symbol} <img class="card-img" id="coinImg" src="${coin.image.thumb}" style=width:50px; height:50px;>
        </div>
        <p class="card-text">${coin.name}</p>
        <a href="#" class="btn btn-primary" onClick="SingleCoin()">Go somewhere</a>
        </div>
        </div>

        
    `

        coinDV.innerHTML += str
    })

    console.log('coins : ', coins)
}




function printToHtml() {
    coinDV.innerHTML = ("my name is Ron Shushan and this in my Ajax project")
    coinDV.className = "mainDvClass"
    document.body.appendChild(coinDV)

}

function productsTable1() {
    window.onload = function() {
        var chart = new CanvasJS.Chart('chartContainer', {
            animationEnabled: true,
            title: {
                text: 'My Coins',
            },
            axisX: {
                valueFormatString: 'DD MMM,YY',
            },
            axisY: {
                title: 'Coin value',
                suffix: '$',
            },
            legend: {
                cursor: 'pointer',
                fontSize: 16,
                itemclick: toggleDataSeries,
            },
            toolTip: {
                shared: true,
            },
            data: [{
                name: 'OB1',
                type: 'spline',
                yValueFormatString: '#0.## $',
                showInLegend: true,
                dataPoints: [{
                    x: new Date(2017, 6, 4),
                    y: 1800
                }, {
                    x: new Date(2017, 6, 5),
                    y: 1800
                }, {
                    x: new Date(2017, 6, 6),
                    y: 1825
                }, {
                    x: new Date(2017, 6, 7),
                    y: 1827
                }, {
                    x: new Date(2017, 6, 8),
                    y: 1835
                }, {
                    x: new Date(2017, 6, 9),
                    y: 1845
                }, {
                    x: new Date(2017, 6, 10),
                    y: 1857
                }, ],
            }, ],
        })
        chart.render()
        addToGraph()

        function toggleDataSeries(e) {
            if (
                typeof e.dataSeries.visible === 'undefined' ||
                e.dataSeries.visible
            ) {
                e.dataSeries.visible = false
            } else {
                e.dataSeries.visible = true
            }
            chart.render()
        }

        function addToGraph() {
            let Y = 1900
            let Day = 11

            setInterval(function() {
                var date = new Date()
                var minutes = date.getMinutes()
                var hour = date.getHours()

                let ob = {
                    x: new Date(2017, 6, Day),
                    y: Y,
                }

                chart.data[0].dataPoints.push(ob)
                chart.render()
                Y += 100
                Day++
                console.log('C : ', chart.data[0].dataPoints)
            }, 2000)
        }
    }
}