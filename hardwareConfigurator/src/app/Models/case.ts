import { UniqueObject } from './uniqueObject';

export class Case extends UniqueObject {
  price: number;
  name: string;
  manufacturer : string;
  formFactor: string;
  color: string;
  material: string;

  public static cases(): Case[] {
    return Array.of({
      id: 1,
      price: 243,
      color: 'black',
      manufacturer:'Lian-Li',
      formFactor: 'ATX, Micro ATX',
      material: 'Aluminium',
      name: 'O11Dynamic XL'
    },{
      id: 2,
      price: 108,
      color: 'black',
      manufacturer:'Phanteks',
      formFactor: 'ATX, Micro ATX (mATX), Mini ITX, E-ATX',
      material: 'Metal, Glass',
      name: 'Eclipse P400A'
    })
  }
}
