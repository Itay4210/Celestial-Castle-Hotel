function newOrder(){
    var inputOrder= document.getElementById("inputOrder");
    var names= inputOrder.value;
    if(names!==""){
    var saveOrders= JSON.parse(localStorage.getItem("names"))||[];
    saveOrders.unshift(names);
    if(saveOrders.length>2){
        alert("full");
    }else{
        localStorage.setItem('names',JSON.stringify(saveOrders));
        window.location.href="http://127.0.0.1:5500/payment.html";
    }
   console.log(inputOrder.innerText);
    inputOrder.value="";
    
    }else{
        alert("empty");
    }

}

 function payment(){
            var creditCardNumber=document.getElementById("creditCardNumber").value;
            var regex=/^\d{16}$/;
            if(regex.test(creditCardNumber)){
             alert("payed");
            }else{
             alert("not payed");
            }
            lastResult();
        }



function lastResult(){
    saveOrders= JSON.parse(localStorage.getItem("names"));
    const updateData=[...saveOrders];
    updateData.forEach(saveOrders=>{
console.log(updateData);
    })
}