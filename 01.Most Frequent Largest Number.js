function sorting(arrNumber) {
    // code di sini // var listSort // sortir // penamaan arrNumber hanya berpengaruh di dalam
    // fungsi sorting
    for (var i = 0 ; i<arrNumber.length ; i++){
      for(var j = i+1 ; j<arrNumber.length ; j++){
        if(arrNumber[i]<arrNumber[j]){
          var temp = arrNumber[i]
          arrNumber[i] = arrNumber[j]
          arrNumber[j] = temp
        }
      }
    }
    return arrNumber
  }


  function getTotal(arr) {
    var count = 0

    for (var i = 0 ; i<arr.length ; i++){
        if(arr[0]==arr[i]){
          count++
        }
      }
    return count
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    
    var listSort = sorting(arrNumber); // list sort berisi fungsi sorting
    var countHighest = getTotal(listSort); // count highest berisi fungsi getTotal

    
    return  `angka paling besar adalah ${listSort[0]} dan jumlah kemunculan sebanyak ${countHighest}`
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  // console.log(mostFrequentLargestNumbers([]));
  // //''