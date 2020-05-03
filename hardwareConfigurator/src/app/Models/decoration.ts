import { UniqueObject } from './uniqueObject';

export class Decoration extends UniqueObject {
  name: string;
  price: number;
  manufacturer: string;
  length: number;
  material: string;
  color: string;
  lightColor: string;

  public static decorations() {
    return Array.of({
      id: 1,
      price: 48.2,
      name: 'Yeelight Lightstrip Plus',
      manufacturer: 'Xiaomi',
      length: 200,
      material: 'plastic',
      color: 'white',
      lightColor: 'Multicoloured'
    },{
      id: 2,
      price: 40,
      name: 'SimpLED Strip',
      manufacturer: 'Paulmann',
      length: 750,
      material: 'plastic',
      color: 'white',
      lightColor: 'RGB'
    },{
      id: 3,
      price: 164,
      name: 'White and Color Ambiance',
      manufacturer: 'Philips',
      length: 500,
      material: 'plastic',
      color: 'white',
      lightColor: 'RGBW'
    })
  }
}
