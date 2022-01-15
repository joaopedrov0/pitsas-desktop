var global

async function takeRequests() {
    var response = await fetch('https://pitsas.herokuapp.com/pedidos')

    if(response.ok) {
        let pedidos = await response.json()

        let wrap = document.querySelector('.wrap')
        console.log(pedidos)
        global = pedidos
        //array
        for(let pedido of pedidos){
            let pizzasHTML = ''
            pedido.pedido = JSON.parse(pedido.pedido)
            for(let pizza of pedido.pedido){ // pedido.pedido = lista de pedidos stringificada
                if (pizza.sabor0 === pizza.sabor1) {
                    //um sabor
                    pizzasHTML += `
                    <div class="pizza">
                        <div class="sabor">Sabor: ${pizza.sabor0}</div>
                        <div class="borda">Borda: ${pizza.borda}</div>
                        <div class="tamanho">Tamanho: ${pizza.tamanho}</div>
                    </div>
                    `
                } else {
                    //dois sabores
                    pizzasHTML += `
                    <div class="pizza">
                        <div class="sabor">Sabores: ${pizza.sabor0} e ${pizza.sabor1}</div>
                        <div class="borda">Borda: ${pizza.borda}</div>
                        <div class="tamanho">Tamanho: ${pizza.tamanho}</div>
                    </div>
                    `
                }
            }
            wrap.innerHTML += `
            <div class="pedido">
                <div class="pizzas">
                    ${pizzasHTML}
                </div>
                <div class="deliver-data">
                    <div class="address">Endereço de entrega: ${pedido.endereco}</div> <div class="number">Telefone: ${pedido.telefone}</div>
                </div>
            </div>
            `
        }
    }
}
takeRequests()