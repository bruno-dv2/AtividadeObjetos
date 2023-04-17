function charCount(str) {

    let freq = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      freq[char] = freq[char] ? freq[char] + 1 : 1;
    }
  
    return freq;
  }
  
  let frequencias = charCount("Aula de Objetos");
  console.log(frequencias);
  
  