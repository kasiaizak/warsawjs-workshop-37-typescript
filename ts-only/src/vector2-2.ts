export class Vector2 {
  private _length: number = 0;
  private _phi: number = 0;

  constructor (public x: number, public y: number){
    this.update()
  }

  private update () {
    this._length = Math.sqrt(this.x**2 + this.y**2)
    this._phi = Math.atan2(this.y, this.x)
  }

  set length(newLength: number) {
    this.x = this.x * newLength /this._length;
    this.y = this.y * newLength / this._length;
    this.update()
  }

  get length () {
    return this._length;
  }

  get phi() {
    return this._phi;
  }

  set phi(value: number) {
    this.x = this._length * Math.cos(value)
    this.y = this._length * Math.sin(value)
    this.update()
  }

  add ({x, y}: Vector2): Vector2 {
    return new Vector2(this.x + x, this.y + y)
  }

  sub ({x, y}: Vector2): Vector2 {
    return new Vector2(this.x - x, this.y - y)
  }

  toString() {
    this.y = Math.round(this.y)
    this.x = Math.round(this.x)
    return this
  }
}


let v = new Vector2(3,4)
console.log(v)
v.length *=2
console.log(v);

let u = new Vector2(0,1)
u.phi += Math.PI / 2
console.log(u.toString())

console.log(v.add(u))