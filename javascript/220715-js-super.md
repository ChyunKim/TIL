## super

상속을 통해 자식클래스에서 부모 클래스의 값을 가져다 사용할 수 있습니다. 

부모 클래스에게 상속받아 자식클래스를 만들었는데 자식클래스에서 속성을 추가하려고 할때 constructor 재정의가 필요로 합니다.

이러한 과정에서 중복되는 코드가 발생해 error 발생확률이 증가하며 메모리 낭비 등 비효율적인 낭비가 생기게 됩니다.

이러한 부분을 super로 해결할 수 있게 됩니다.

### super 키워드 사용방법

**super()**
부모클래스의 생성자가 호출

**super.**
부모의 메소드에 접근


```javascript
class Person {
	constructor(name, age) {
     	this.name = name; 
      	this.age = age;
    }
  	introduce() {
     	return `My name is ${this.name}. I'm ${this.age}.`; 
    } 
}
```

위와 같은 Person 클래스가 있다고 가정해봅시다.

위의 Person 클래스를 상속받아 성별만을 추가하고자 할때 super를 사용할 수 있습니다.

```javascript
class PersonPlus extends Person {
 	constructor(name, age, genther) {
     	super(name, age);
      	this.genther = genther;
    }
}
```

위와 같이 ```super()```를 활용하여 기존의 부모클래스의 constructor 를 호출할 수 있게 됩니다.

추가로, ```super.``` 를 활용하여 부모클래스의 메소드의 접근하여 추가해보도록 합시다.

```javascript
class PersonPlus extends Person {
 	constructor(name, age, genther) {
     	super(name, age);
      	this.genther = genther;
    }
	introplus(){
     	return super.introduce()+`My sex is ${this.genther}.`; 
    }
}

const person = new Person('kim', 22);
const personplus = new PersonPlus('lee', 25, 'female');

console.log(person.introduce()); 	
// My name is kim. I'm 22.

console.log(personplus.introplus()); 	
// My name is lee. I'm 22. My sex is female.

```

위와 같이 간단하게 부모클래스의 메소드에 genther의 내용을 추가할 수 있습니다.











