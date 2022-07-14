## class 선언
class를 선언하기 위해서 클래스 이름과 ```class``` 키워드를 사용해야 합니다.

```javascript
class Uer {
 	constructor(name, age) {
     	this.name = name; 
      	this.age = age;
    }
}
```

클래스는 위와 같이 선언할 수 있습니다.

constructor 메소드는 class로 생성된 객체를 생성하고 초기화하기 위한 특수한 메소드 입니다. constructor 메소드는 클래스 안에 한개만 선언할 수 있습니다.

constructor() 메소드는 객체 생성될 때 객체의 초기상태를 지정합니다.
객체가 만들어지기 직전에 실행되는 함수라고 이해할 수 있습니다.

또한, 함수 선언은 호이스팅이 일어나지만 클래스는 호이스팅이 일어나지 않습니다. 따라서 호출 전 클래스를 먼저 선언해야 합니다.

## class 상속
상속은 부모 기능을 받아 사용하는 것으로 이해할 수 있습니다.
상속을 위해선 extends 키워드를 사용하여 생성합니다. 상속을 통해 코드의 중복을 제거할 수 있습니다.

```javascript
class User{
 	constructor(name,age) {
     	this.name = name;
      	this.age = age;
    }
  	pritf() {
    	console.log(`내이름은 : ${this.name} 입니다`);
    }
}

class Address extends User {
	...
}
```

위와 같이 ```extends``` 키워드로 Address 클래스는 User 클래스를 상속받아 printf() 메소드를 재정의 할 필요없이 사용할 수 있게됩니다.





