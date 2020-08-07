import Circulo from './Circulo.js'
import Triangulo from './Triangulo.js'
import Octagono from './octagono.js'
import Decagono from './decagono'
import Cuadrado from './cuadrado'



document.getElementsByTagName('select')[0].addEventListener('change', function (e) {
  let poligono = e.target.value
  
  if (poligono === 'circulo') {
    let circulo = new Circulo()
    console.log(`Perimetro del Circulo ===> ${circulo.perimetro()}`)
    console.log(`Area del Circulo ===> ${circulo.area()}`)
  }

  if (poligono === 'triangulo') {
    let triangulo = new Triangulo()
    console.log(`Perimetro del Triangulo ===> ${triangulo.perimetro()}`)
    console.log(`Area del Triangulo ===> ${triangulo.area()}`)
  }


  if (poligono === 'octagono') {
    let octagono = new Octagono()
    console.log(`Perimetro del Octagono ===> ${octagono.perimetro()}`)
    console.log(`Area del Octagono ===> ${octagono.area()}`)
  }

  if (poligono === 'decagono') {
    let decagono = new Decagono()
    console.log(`Perimetro del Decagono ===> ${decagono.perimetro()}`)
    console.log(`Area del Decagono ===> ${decagono.area()}`)
  }


  if (poligono === 'cuadrado') {
    let cuadrado = new Cuadrado()
    console.log(`Perimetro del Cuadrado ===> ${cuadrado.perimetro()}`)
    console.log(`Area del Cuadrado ===> ${cuadrado.area()}`)
  }


})
