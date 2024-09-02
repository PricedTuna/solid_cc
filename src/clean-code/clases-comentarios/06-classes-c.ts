(() => {
  // SI aplicando el principio de de responsabilidad única
  // Priorizar la composición frente a la herenia 

  console.log("06-classes-c.ts");

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
  }

  class User {
    public lastAccess: Date;
    public email;
    public role;

    constructor(
      {email, role}: UserProps
    ){
      this.lastAccess = new Date();
      this.email      = email;
      this.role       = role;
    }
  }


  interface SettingsProps {
    workingDirectory : string;
    lastOpenFolder   : string;
  }

  class Settings {
    public workingDirectory;
    public lastOpenFolder;

    constructor({workingDirectory, lastOpenFolder}: SettingsProps){
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    person: Person;
    user: User;
    settings: Settings;
  }

  class UserSettings {
    public person;
    public settings;
    public user;

    constructor(
      { person, settings, user }: UserSettingsProps
    ){
      this.person = person;
      this.settings = settings;
      this.user = user;
    }
  }


  // Probarlo

  const userSettings = new UserSettings({
    person: new Person({birthdate: new Date("2024-12-29"), gender: "M", name: "Edgar"}),
    user: new User({ email: "edgar@edgar.com", role: "admin"}),
    settings: new Settings({ lastOpenFolder: "/home", workingDirectory: "/src/views" })
  })

  console.log(userSettings);


})() 