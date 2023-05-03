

const key = "3138d04a6eb88f5521870c77020599a6"

function dadosTela(dados){
    document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json())

    dadosTela(dados)
}

function cliqueBotao () {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}