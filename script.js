
var allProducts = document.querySelectorAll(".container  .products-items")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var div = document.querySelector("#output")

var totalPrice = 0



allProducts.forEach(function (item){
    item.onclick = function (){
        div.innerHTML += item.textContent + " "
        totalPrice +=  +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
            btn.style.width = "200px";
             btn.style.height = "50px";
             btn.style.backgroundColor = "green"
             btn.style.color = "white";
        }
    }
})

btn.onclick = function (){
    console.log(totalPrice)
  

}
btn.addEventListener('click', function() {
    
    output.textContent = totalPrice;
  });