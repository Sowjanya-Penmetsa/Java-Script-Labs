

    class Person
   {
     constructor(firstname,lastname,age,email)
     {
       this.firstname=firstname;
       this.lastname=lastname;
       this.age=age;
       this.email=email;
     }

     toString()
    {
        return  `{ FirstName:${this.firstname},  SecondName:${this.lastname},  Age:${this.age}, Email: ${this.email}} \n\n`;
       
    }

  } 
  function getPerson()
  {  
    var p1=new Person('marica','petterson',22,'mp@gmail.com');
    var p2=new Person('lexicon');
    var p3=new Person('stefan','larsson',25);
    var p4=new Person('peter','jansson',24,'ptr@live.com');
    var persons=[p1,p2,p3,p4];
    
    return persons.toString();
    
  }
console.log(getPerson());

