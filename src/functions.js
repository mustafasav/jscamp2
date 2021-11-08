
function addToCart(quantity,productName="Elma") {
//fonksiyona değer gönderilmezse  "Elma" default değerini alır.
    
    console.log("Sepete Eklendi: Ürün: "+productName + " ve Adet: "+quantity)
    
}


//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2 = function (isim) {
    console.log("Hello World 2: " + isim)
}

sayHello2("Mustafa")


