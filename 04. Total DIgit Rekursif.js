function totalDigitRekursif(angka) {
  // you can only write your code here!

var str = angka.toString()
var total = 0 

for (var i = 0 ; i < str.length ; i ++){
  total = total + Number(str[i])
}
return total
}
  

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5