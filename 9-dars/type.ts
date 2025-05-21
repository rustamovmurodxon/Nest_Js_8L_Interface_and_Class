//1 Class decorator
console.log('-------------------------------------');

function Logger(constructor: Function) {
    console.log(`Class name: ${constructor.name}`);
}

@Logger
class Bootcamp_Result {
    constructor(public name: string) { }

    getInfo(){
        console.log(this.name)
    }
}

//2 Method decorator 
console.log('-------------------------------------');

function LogMethod(target:any,methodName:string,descriptor:PropertyDescriptor){
    console.log(`menthod :${methodName}`);
    console.log(`Target:`,target);
    console.log(`Descriptor:`,descriptor);
}
class Result{
    @LogMethod
    senior(){
        console.log('FullStack development');
        
    }
}

//3 Property decorator 
console.log('-------------------------------------');

function LogProperty(target:any,propertyname:string){
    console.log(`Property name: ${propertyname}`);    
}
class FullStack_Senior{
    @LogProperty
    title:string;
    constructor(t:string){
        this.title=t;
    }
}

//4 LogAccessor
console.log('-------------------------------------');


function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor){
    console.log(`Accessor ${name}`);
}

class Accessor {
    private _nest: number = 0;

    @LogAccessor
    get nest(){
        return this._nest;
    }

    set nest(value: number){
        this._nest = value;
    }
}
//5 Parametr decorator
console.log('-------------------------------------');

function LogParam(target: Object, methodName: string | symbol, parameterIndex: number) {
    console.log(`@LogParam ishladi - Method: ${String(methodName)}, Param index: ${parameterIndex}`);
  }
  
  class MyService {
    greet(@LogParam name: string, age: number) {
      console.log(`Hello, ${name}. Age: ${age}`);
    }
  }
console.log('-------------------------------------');
  