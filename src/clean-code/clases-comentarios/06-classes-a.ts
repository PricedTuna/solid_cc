(() => {
  // No aplicando el principio de de responsabilidad única

  console.log("Hola!");

  type Gender = 'M'|'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ){}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,

      public email:string,
      public role:string,
    ){
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,

      public email:string,
      public role:string,

      public workingDirectory : string,
      public lastOpenFolder   : string
    ){
      super( name, gender, birthdate, email, role );
    }
  }

})()