function makanTerusRekursif(waktu) {
   // you can only write your code here!
   var temp = 0
   var sisa = 100
   var dibagi = 100

   for(var i = 0 ; i < dibagi ; i++){
      if(sisa > 0 && waktu > 0){
         temp ++
         sisa = waktu - 15
         waktu = sisa
   } else if (waktu = 0){
         temp = 0
         sisa = 0
      }
   }
return temp
 }
 
 // TEST CASES
 console.log(makanTerusRekursif(66)); // 5
 console.log(makanTerusRekursif(100)); // 7
 console.log(makanTerusRekursif(90)); // 6
 console.log(makanTerusRekursif(10)); // 1
 console.log(makanTerusRekursif(0)); // 0