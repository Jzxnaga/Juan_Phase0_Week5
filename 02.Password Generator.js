function changeVocals (str) {
    var abc = '';
    for(var i=0 ; i<str.length ; i ++){
        if(str[i] == 'a'){
            abc+='b'
        }else if (str[i] == 'i'){
            abc+='j'
        }else if (str[i] == 'u'){
            abc+='v'
        }else if (str[i] == 'e'){
            abc+='f'
        }else if (str[i] == 'o'){
            abc+='p'
        }else if (str[i] == 'A'){
            abc+='B'
        }else if (str[i] == 'I'){
            abc+='J'
        }else if (str[i] == 'U'){
            abc+='V'
        }else if (str[i] == 'E'){
            abc+='F'
        }else if (str[i] == 'O'){
            abc+='P'
        }else{
            abc +=str[i]
            }
        }
    return abc
    }
  
  function reverseWord (str) {
    //code di sini
    var reverse = '';
    for (var i = str.length -1 ; i>=0 ; i--){
        reverse += str[i]
    }

    return reverse
  }
  
  function setLowerUpperCase (str) {
    //code di sini
var kalimatbaru = ''
var temp = str.toLowerCase()
for(var i = 0 ; i < str.length ; i ++){
    if(temp[i]==str[i]){
        kalimatbaru+=str[i].toUpperCase()
    }else{
        kalimatbaru+=str[i].toLowerCase()
    }

}
return kalimatbaru
}
  
  function removeSpaces (str) {
    //code di sini
var nospace = ''

for(var i = 0 ; i < str.length ; i ++){
    if(str[i]!== ' ')
    nospace += str[i]
    }

    return nospace
  }
  
  function passwordGenerator (name) {
    //code di sini
    var rara = changeVocals (name)
    var strnew = reverseWord (rara)
    var strnew2 = setLowerUpperCase (strnew)
    var strnew3 = removeSpaces (strnew2)
    return strnew3
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
//   (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)