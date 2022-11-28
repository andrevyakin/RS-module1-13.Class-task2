class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(Person) {
        //Если у одного Person количество лет больше ЛИБО РАВНО, чем у другого,
        //то выводи сообщение через alert(): “name1 старше, чем name2”
        //Странное условие. Если равно, то нужно выводить "name1 и name2 одногодки".
        //Но делаю, как в условии задания.
        this.age >= Person.age
            ? alert(`${this.name} старше, чем ${Person.name}`)
            : alert(`${this.name} мдадше, чем ${Person.name}`);
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим