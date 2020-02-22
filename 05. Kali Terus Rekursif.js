function kaliTerusRekursif(angka) {
    // you can only write your code here!

    
var number = angka.toString() ;
var total = 1 ;


while (number.length != 1){

    for ( var i = 0 ; i < number.length ; i ++){
        total = total * Number(number[i])
       
    } 
    number = total
}





    // for ( var i = 0 ; i < number.length ; i ++){
    //     if(number.length==i){
    //         return done
    //     } else if (number.length>0){
    //         var total = 1
    //         total = total * Number(number[i])
    //         var temp = total
    //     }
            
    // }





return number

}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
//   console.log(kaliTerusRekursif(3)); // 3
//   console.log(kaliTerusRekursif(24)); // 8
//   console.log(kaliTerusRekursif(654)); // 0
//   console.log(kaliTerusRekursif(1231)); // 6