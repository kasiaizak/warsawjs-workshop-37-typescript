export class Vector2 {
  constructor(
    private x: number,
    private y: number,
  ) {}

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  set length(newLength: number) {
    const length = this.length
    this.x = this.x * newLength / length
    this.y = this.y * newLength / length
  }

  add(other: Vector2): Vector2 {
    return new Vector2(this.x + other.x, this.y + other.y)
  }
}

let v = new Vector2(3, 4)
console.log(v)
v.length *= 2
console.log(v) // -> (6, 8)

// let u = new Vector2(0, 1)
// v.phi += Math.PI / 2
// console.log(u) // -> (1, 0)

let z = new Vector2(2, 5)
console.log(z.add(v))