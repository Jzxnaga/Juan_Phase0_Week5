function rekursif(number) {
    if(number>0){
        console.log(number)
        return number + " "+rekursif(number-2)
    }else{
        return 100
    }


}

console.log(rekursif(20))