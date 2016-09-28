/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function randomNumber() {
    var i = Math.floor((Math.random() * 10) + 1); //genererar ett random nummer till variabeln i;
     var j = Math.floor((Math.random() * 10) + 1); //genererar ett random nummer till variabeln j;
    document.getElementById("nummer1").innerHTML = i; 
    document.getElementById("nummer2").innerHTML = j;//gör så att man kan kalla på innehållet i j via id nummer2 inne i html
}
