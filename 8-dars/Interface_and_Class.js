var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log('---------------------------------------------------');
console.log('1-Interface and  Class\n');
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " started."));
    };
    return Car;
}());
var car1 = new Car("Mersades", "S-Class", 2020);
var car2 = new Car("BMW", "X7", 2022);
car1.start();
car2.start();
console.log('---------------------------------------------------');
console.log('Enum\n');
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["EDITOR"] = 1] = "EDITOR";
    UserRole[UserRole["VIEWER"] = 2] = "VIEWER";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role === UserRole.ADMIN || role === UserRole.EDITOR;
}
function canDelete(role) {
    return role === UserRole.ADMIN;
}
console.log("Admin edit:", canEdit(UserRole.ADMIN));
console.log("Editor delete:", canDelete(UserRole.EDITOR));
console.log('---------------------------------------------------');
console.log('Generic\n');
function identity(value) {
    return value;
}
console.log(identity(42));
console.log(identity("Hello\n"));
console.log(identity({ name: "Ali" }));
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop());
console.log('---------------------------------------------------');
console.log('OOP\n');
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this._ownerName = ownerName;
    }
    Object.defineProperty(BankAccount.prototype, "ownerName", {
        get: function () {
            return this._ownerName;
        },
        set: function (name) {
            if (name.length > 2)
                this._ownerName = name;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0)
            this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance)
            this.balance -= amount;
    };
    BankAccount.bankName = "National Bank\n";
    return BankAccount;
}());
var PremiumAccount = /** @class */ (function (_super) {
    __extends(PremiumAccount, _super);
    function PremiumAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PremiumAccount.prototype.withdraw = function (amount) {
        console.log("Premium user withdraw...");
        _super.prototype.withdraw.call(this, amount);
    };
    return PremiumAccount;
}(BankAccount));
console.log('---------------------------------------------------');
console.log('Abstract\n');
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle(5);
console.log("Circle area:", circle.getArea());
var rect = new Rectangle(4, 6);
console.log("Rectangle area:", rect.getArea());
console.log('---------------------------------------------------');
console.log('Utility Types\n');
function updateProduct(product, updates) {
    return __assign(__assign({}, product), updates);
}
var prod = { id: 1, name: "Phone", price: 1000 };
var updated = updateProduct(prod, { name: "New Phone", price: 900 });
console.log(updated);
function showBasicInfo(product) {
    console.log("ID: ".concat(product.id, ", Name: ").concat(product.name));
}
showBasicInfo({ id: 2, name: "Laptop" });
var readOnlyProduct = {
    id: 3,
    name: "TV",
    price: 500,
};
