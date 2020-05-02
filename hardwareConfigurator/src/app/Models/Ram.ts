import { UniqueObject } from './uniqueObject';

export class Ram extends UniqueObject {
  name: string;
  price: number;
  capacity: number;
  amount: number;
  chip: string;
  formFactor: string;
  manufacturer: string;

  public static rams(): Ram[] {
    return Array.of({
      id: 1,
      name: 'Vengeance LPX',
      manufacturer: 'Corsair',
      price: 174,
      capacity: 16,
      amount: 2,
      chip: 'DDR4-3200',
      formFactor: 'DIMM 288 pin'
    },{
      id: 2,
      name: 'Trident Z RGB',
      manufacturer: 'G.Skill',
      price: 222,
      capacity: 16,
      amount: 2,
      chip: 'DDR4-3600',
      formFactor: 'DIMM 288 pin'
    },{
      id: 3,
      name: 'Impact',
      manufacturer: 'HyperX',
      price: 157,
      capacity: 16,
      amount: 2,
      chip: 'DDR4-2400',
      formFactor: 'SO-DIMM 260 pin'
    },{
      id: 4,
      name: 'Vengeance RGB PRO',
      manufacturer: 'Corsair',
      price: 248,
      capacity: 8,
      amount: 4,
      chip: 'DDR4-3600',
      formFactor: 'DIMM 288 pin'
    })
  }
}
