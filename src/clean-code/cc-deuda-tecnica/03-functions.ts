(() => {
  // función para obtener información de una película por Id
  function getMovieById(movieId: string) {
    console.log(movieId);
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCast(movieId: string) {
    console.log(movieId);
  }

  // funcion para obtener el bio del actor por el id
  function getActorById(ActorId: string) {
    console.log(ActorId);
  }

  interface MovieProps {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }

  // Crear una película
  function createMovie({ cast, description, rating, title }: MovieProps) {
    console.log({ cast, description, rating, title });
  }

  interface ActorProps {
    fullName: string;
    birthdate: Date;
  }

  // Crea un nuevo actor
  function createActor({ fullName, birthdate }: ActorProps): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  // Continuacion
  interface PayAmoutProps {
    isDead?: boolean;
    isSeparated?: boolean;
    isRetired?: boolean;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }: PayAmoutProps): number => {
    if (isDead) return 1500;
    if (isSeparated) return 2500;
    if (isRetired) return 3000;
    return 4000;

    // if ( isDead ) {
    //     result = 1500;
    // } else {
    //     if ( isSeparated ) {
    //         result = 2500;
    //     } else {
    //         if ( isRetired ) {
    //             result = 3000;
    //         } else {
    //             result = 4000;
    //         }
    //     }
    // }

    // return result;
  };
})();
