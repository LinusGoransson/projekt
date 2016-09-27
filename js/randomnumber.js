/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function randomNumber() {
    var i = Math.floor((Math.random() * 10) + 1);
     var j = Math.floor((Math.random() * 10) + 1);
    document.getElementById("nummer1").innerHTML = i;
    document.getElementById("nummer2").innerHTML = j;
}
