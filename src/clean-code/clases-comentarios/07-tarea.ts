(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';
 
  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes {
      constructor(
          public value: string,
          public placeholder: string,
      ) {}
  }

  class InputEvents {
      setFocus() {};
      getValue() {};
      isActive() {};
      removeValue() {};
  }

  //? Idea para la nueva clase InputElement
  class InputElement {
    constructor(
      public htmlElement: HtmlElement,
      public inputAttributes: InputAttributes,
      public inputEvents: InputEvents,
    ){
      console.log(`Creado con placeholder: ${inputAttributes.placeholder}`);
    }

    getPlaceholder(){
      console.log(inputAttributes.placeholder);
    }
  }

  let htmlElement     = new HtmlElement("txtName", 'input');
  let inputAttributes = new InputAttributes('Fernando', 'Enter first name');
  let inputEvents     = new InputEvents();

  let nameField = new InputElement(htmlElement, inputAttributes, inputEvents);
  console.log(nameField);

})()