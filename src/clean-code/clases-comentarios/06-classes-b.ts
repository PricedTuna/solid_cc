(() => {
  // No aplicando el principio de de responsabilidad única

  console.log("Hola!");

  type Gender = 'M'|'F';


  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name;
    public gender;
    public birthdate;

    constructor( {name, gender, birthdate }: PersonProps ){
      this.name       = name;
      this.gender     = gender;
      this.birthdate  = birthdate
    }
  }

  interface UserProps {
    email:string;
    role:string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email;
    public role;

    constructor(
      { name, gender, birthdate, email, role}: UserProps
    ){
      super({name, gender, birthdate});
      this.lastAccess = new Date();
      this.email      = email;
      this.role       = role;
    }

    checkCredentials() {
      return true;
    }
  }


  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birthdate: Date;

    email:string;
    role:string;

    workingDirectory : string;
    lastOpenFolder   : string;
  }

  class UserSettings extends User {
    public workingDirectory;
    public lastOpenFolder;

    constructor({name, gender, birthdate, email, role, workingDirectory, lastOpenFolder}: UserSettingsProps){
      super( {name, gender, birthdate, email, role} );
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

})() 