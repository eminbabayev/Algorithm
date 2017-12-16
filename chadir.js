var a1 = Number(prompt("1ci chadirin cekisi"));
var a2 = Number(prompt("2ci chadirin cekisi"));
var a3 = Number(prompt("3cu chadirin cekisi"));
var b1 = Number(prompt("1ci chadirin tutdugu yer  "));
var b2 = Number(prompt("2ci chadirin tutdugu yer"));
var b3 = Number(prompt("3ci chadirin tutdugu yer"));
var k = Number(prompt("telebelerin sayi"));
var w = Number(prompt("Max chadir cekisi"));
if (a1 <= w && a2 <= w && a3 <= w && b1 >= k && b2 >= k && b3 >= k ) {
    if ((a1 + a2 ) <= w && (b1 + b2 ) >= k) {
        console.log("1ve2 yardim etsin");
    } 
     else if ((a1+a3)<=w && (b1+b3)>=k){
        console.log("1ve3 yardim etsin");
    }
    else if ((a2+a3)<=w && (b2+b3)>=k)
    {console.log("2ve3 yardim etsin");
}
    else if ((a1 + a2 + a3) <= w && (b1 + b2 + b3) >= k) {
    console.log("her ucu yardim etsin");
}
}
    else {
    console.log("istediyiniz chadir yoxdur");
}