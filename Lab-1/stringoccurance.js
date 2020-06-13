function char_count(str, letter) 
{
 let Count = 0;
 for (let i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      Count += 1;
      }
  }
  return Count;
}

console.log(char_count('Hello World', 'l'));