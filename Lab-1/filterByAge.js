
function filterByAge(minAge, nameA, ageA, nameB, ageB) {
  var personA = {name: nameA, age: Number(ageA)};
  var personB = {name: nameB, age: Number(ageB)};

  if (personA.age >= minAge) {
      console.log(personA);
  }

  if (personB.age >= minAge) {
      console.log(personB);
  }
}

filterByAge('12','Ivan','15','Asen','9');
 
  
 