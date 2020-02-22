/**
 * ============
 * Tinder match
 * ============
 *
 *
 * Buatlah sebuah fungsi yang akan menerima input array of object sebagai berikut
 * [
 *  { name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
 *  { name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan'] },
 *  { name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar'] },
 *  { name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur'] },
 *  { name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik'] }
 * ]
 *
 * Dan fungsi ini akan mengeluarkan output sebuah object match yang didapatkan oleh setiap orang.
 *
 * {
 *  Andre: {
 *    match: []
 *  },
 *  Marsya: {
 *     match: [ 'Dimas' ]
 *  },
 *  Dimas: {
 *     match: [ 'Marsya', 'Bella', 'Derpina' ]
 *  },
 *  Bella: {
 *     match: [ 'Dimas' ]
 *  },
 *  Derpina: {
 *    match: [ 'Dimas' ]
 *  }
 * }
 *
 * Match didapatkan dengan mencocokan expectation dari setiap orangnya dengan trait orang lain
 * Contoh Marsya match dengan Dimas karena
 * Marsya memiliki Expectation Kaya dan Olahragawan
 * dan Dimas memiliki Traits Pintar dan kaya
 *
 * Karena Dimas memiliki traits Kaya dan Marsya Expectations nya juga kaya mereka adalah pasangan yang match
 *
 * Asumsi
 * =====
 *
 * Setiap orang dianggap match ketika setidaknya memilki satu kesamaan antara expectations dan trait
 *
 */
function tinderMatch(people) {




var obj = {}
var match = []

for(var i = 0 ; i < people.length ; i ++){
    match = []
    for (var j = 0 ; j < people.length ; j ++){
        if(people[i].gender == 'Men' && people[j].gender == 'Women'
         || people[i].gender == 'Man' && people[j].gender == 'Women'){
            // ini kudu looping trait sama expectation trus di if disini
            // for(var k = 0 ; k < people[i].expectation.length ; k ++){
            //     for(var l = 0 ; l < people[j].traits.length ; l ++){
            //         if(people[i].expectation[k] == people[j].traits[l]){
            //             check = true
            //         }
                    match.push(people[j].name)
                }

        else if (people[i].gender == 'Women' && people[j].gender == 'Man'
        || people[i].gender == 'Women' && people[j].gender == 'Men'){
            // ini kudu looping trait sama expectation trus di if disini






            match.push(people[j].name)
            }
        }
    obj[people[i].name]={match}
    }

console.log (obj)
}

 
    console.log(tinderMatch([
    {name: 'Andre', gender: 'Men', traits: ['Dewasa', 'Tampan'], expectation: ['Cantik', 'Jujur', 'Kaya']},
    {name: 'Marsya', gender: 'Women', traits: ['Cantik', 'Kaya'], expectation: ['Kaya', 'Olahragawan']},
    {name: 'Dimas', gender: 'Men', traits: ['Pintar', 'Kaya'], expectation: ['Cantik', 'Pintar']},
    {name: 'Bella', gender: 'Women', traits: ['Cantik', 'Pintar'], expectation: ['Pintar', 'Jujur']},
    {name: 'Derpina', gender: 'Women', traits: ['Cantik', 'Sederhana', 'Rajin'], expectation: ['Pintar', 'Jujur', 'Baik']},
    {name: 'Hitler', gender: 'Man', traits: ['Tampan', 'Kaya'], expectation: ['Cantik']}
    ]))
    /**
     * {
     *  Andre: {
     *    match: []
     *  },
     *  Marsya: {
     *     match: [ 'Dimas' ]
     *  },
     *  Dimas: {
     *     match: [ 'Marsya', 'Bella', 'Derpina' ]
     *  },
     *  Bella: {
     *     match: [ 'Dimas' ]
     *  },
     *  Derpina: {
     *    match: [ 'Dimas' ]
     *  }
     * }
     */