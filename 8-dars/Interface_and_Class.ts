console.log('---------------------------------------------------');
console.log('1-Interface and  Class\n');
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car implements Vehicle {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}
  
    start(): void {
      console.log(`${this.brand} ${this.model} started.`);
    }
  }
  
  const car1 = new Car("Mersades", "S-Class", 2020);
  const car2 = new Car("BMW", "X7", 2022);
  car1.start();
  car2.start();
  

console.log('---------------------------------------------------');
console.log('Enum\n');

  enum UserRole {
    ADMIN,
    EDITOR,
    VIEWER,
  }
  
  function canEdit(role: UserRole): boolean {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
  }
  
  function canDelete(role: UserRole): boolean {
    return role === UserRole.ADMIN;
  }
  
  console.log("Admin edit:", canEdit(UserRole.ADMIN));
  console.log("Editor delete:", canDelete(UserRole.EDITOR));
  
console.log('---------------------------------------------------');  
console.log('Generic\n');
  
  function identity<T>(value: T): T {
    return value;
  }
  
  console.log(identity<number>(42));
  console.log(identity<string>("Hello\n"));
  console.log(identity<{ name: string }>({ name: "Ali" }));
  
  class Stack<T> {
    private items: T[] = [];
  
    push(item: T): void {
      this.items.push(item);
    }
  
    pop(): T | undefined {
      return this.items.pop();
    }
  }
  
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  console.log(numberStack.pop());
console.log('---------------------------------------------------');
console.log('OOP\n');
  
  class BankAccount {
    static bankName = "National Bank\n";
    private _ownerName: string;
  
    constructor(
      public readonly accountNumber: string,
      ownerName: string,
      private balance: number
    ) {
      this._ownerName = ownerName;
    }
  
    get ownerName(): string {
      return this._ownerName;
    }
  
    set ownerName(name: string) {
      if (name.length > 2) this._ownerName = name;
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) this.balance += amount;
    }
  
    withdraw(amount: number): void {
      if (amount <= this.balance) this.balance -= amount;
    }
  }
  
  class PremiumAccount extends BankAccount {
    withdraw(amount: number): void {
      console.log("Premium user withdraw...");
      super.withdraw(amount);
    }
  }
  console.log('---------------------------------------------------');
console.log('Abstract\n');

  abstract class Shape {
    abstract getArea(): number;
  }
  
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  console.log("Circle area:", circle.getArea());
  
  const rect = new Rectangle(4, 6);
  console.log("Rectangle area:", rect.getArea());
  
console.log('---------------------------------------------------');
console.log('Utility Types\n');
  
  interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
  }
  
  function updateProduct(product: Product, updates: Partial<Product>): Product {
    return { ...product, ...updates };
  }
  const prod: Product = { id: 1, name: "Phone", price: 1000 };
  const updated = updateProduct(prod, { name: "New Phone", price: 900 });
  console.log(updated);
  
  function showBasicInfo(product: Pick<Product, 'id' | 'name'>) {
    console.log(`ID: ${product.id}, Name: ${product.name}`);
  }
  
  showBasicInfo({ id: 2, name: "Laptop" });
  
  const readOnlyProduct: Readonly<Product> = {
    id: 3,
    name: "TV",
    price: 500,
  };