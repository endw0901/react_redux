# this


render内でのthis.state => thisはclassを指すのでok <br>

- https://stephengrider.github.io/JSPlaygrounds/


## コンテキスト問題

- 例1：this = car.drive()のcarを指す(呼び出し時の親を指す)
- 例2：関数を変数に格納してから呼ぶと、undefinedとなりエラー
```
class Car {
  setDriveSound(sound) {
    this.sound = sound;
  }
  
  drive() {
    return this.sound;
  }
}

const car = new Car();
car.setDriveSound('vroom');
// 例1：this = car.drive()のcarを指す(呼び出し時の親を指す)
car.drive();

// 例2：関数を変数に格納してから呼ぶと、undefinedとなりエラー
const drive = car.drive;

// thisがundefined扱いとなる
drive()
```

### arrow functionでコンテキストの問題を解決
- [サンプル：検索バー](https://github.com/endw0901/react_typescript/tree/main/searchbar/src)

### constructorのbindでコンテキスト問題を解決した例（レガシー）

```
class Car {
  
  constructor() {
  	this.drive = this.drive.bind(this);  
  }
  
  setDriveSound(sound) {
    this.sound = sound;
  }
  
  drive() {
    return this.sound;
  }
}

const car = new Car();
car.setDriveSound('vroom');
// car.drive();

const drive = car.drive;

drive()
```
