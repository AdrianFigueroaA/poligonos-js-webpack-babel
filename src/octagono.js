import Poligono from './Poligono'

class Octagono extends Poligono{

constructor(){
  super()
}

area(){

  return (this.lado * this.apotema) / 2

}
perimetro (){
return this.lado * 8

}


}
export default Octagono

