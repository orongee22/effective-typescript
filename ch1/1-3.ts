// 런타임 타입 체크

interface Square {
  width: number
}

interface Rectangle extends Square {
  height: number
}

type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
  // 아래와 같이 사용 불가능
  // if (shape instanceof Rectangle) {
  //   // ...
  //   return shape.width * shape.height
  // } else {
  //   return shape.width * shape.width
  // }

  // 타입을 명시적으로 체크하지 않고, 속성 체크를 통해 간접적으로 체크할 수 있다.
  if ('height' in shape) {
    shape // 타입이 Rectangle
    return shape.width * shape.height
  } else {
    shape // 타입이 Square
    return shape.width * shape.width
  }
}
