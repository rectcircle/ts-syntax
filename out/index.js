"use strict";
/**
 * **元组有类型的数组**
 */
let xcatliu = ['Xcat Liu', 25];
const i0 = {};
/**
 * **获取一个类的类型（也就是构造函数类型）（不是实例）**
 */
class A {
    constructor(a) {
        this.a = a;
    }
}
function factory(c) {
    return new c(1);
}
/**
 * **any规则**
 * * any是任意类型的父类型，所以任意类型都可以赋值给any
 * * any是任意类型的子类型，所以any变量可以传递给任意函数参数
 * * 慎用any，相当于退化成了JS
 * * 在确定any类型是可以使用，用于规避类型检查，与第三方库交互
 */
let any = 1;
any = '123';
(function (num) { })(any); // 运行时可能报错，编译期间不报错
/**
 * **类型强转**
 * * 使用 `<类型>变量名` 在TSX不能使用
 * * 使用 `变量名 as 类型`
 */
let someValue = "this is a string";
let strLength = someValue.length;
strLength = someValue.length;
const ab = {
    a: 'a',
    b: 2,
    // b: 'b', 
    c: 3,
};
let aOrB = {
    a: 'a',
    b: 2,
};
function handleAOrB(aOrb) {
    // 只能读取IA和IB共有的值
    // aOrb.
    // 如果需要使用，最好要进行类型判断
    if (aOrb.a !== undefined) {
        // do something
    }
    if (aOrb.c !== undefined) {
        // do something
    }
    // 或者使用typeof 或者 instanceof进行类型判断
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
/**
 * **可空类型**
 */
let allowNull = null;
allowNull = 1;
allowNull = null;
(function (easing) {
    // do something
})("ease-in");
/**
 * **1. keyof 提取一个类型的key**
 */
const s = Symbol('s');
// type KeyOfD1 = Extract<keyof ID, string>
let key = s;
/**
 * **2. `K extends KeyOfT`**
 * * KeyOfT 是联合类型
 * * 那么K将约束为KeyOfT中的任意一个
 * * 一般用法为`K extends keyof T`
 */
function extendsKeyOfT(k) {
}
extendsKeyOfT('d');
extendsKeyOfT(1);
extendsKeyOfT(s);
/**
 * **结合以上123的一个例子**
 * 提取一个对象的属性
 */
function getProperty(o, name) {
    return o[name]; // o[name] is of type T[K]
}
getProperty({ a: 1 }, 'a');
let keys; // string
let value; // number
/**
 * **例子给一个对象创建代理**
 */
function proxify(o) {
    const result = {};
    for (const key in o) {
        result[key] = {
            get() {
                console.log(`[get] key=${key} value=${o[key]}`);
                return o[key];
            },
            set(value) {
                console.log(`[set] key=${key} oldKey=${o[key]} newValue=${value}`);
                o[key] = value;
            }
        };
    }
    return result;
}
const props = {
    a: 1
};
let proxyProps = proxify(props);
console.log(proxyProps.a.get());
proxyProps.a.set(2);
console.log(props.a);
function updateProps(obj, update) {
    Object.assign(obj, update);
}
updateProps({ a: 1, b: 2, c: 3 }, {
    a: 3,
    // b: 4,
    c: 5,
});
function f1(s) {
    return { a: 1, b: s };
}
class C {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
// type T23 = InstanceType<string>;  // Error
// type T24 = InstanceType<Function>;  // Error
//# sourceMappingURL=index.js.map