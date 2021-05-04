# this


render内でのthis.state => thisはclassを指すのでok <br>

- https://stephengrider.github.io/JSPlaygrounds/
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
car.drive();
```
