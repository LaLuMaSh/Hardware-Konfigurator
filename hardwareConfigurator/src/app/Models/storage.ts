import { UniqueObject } from './uniqueObject';

export class Storage extends UniqueObject {
  name: string;
  manufacturer: string;
  price: number;
  capacity: number;
  interface: string;
  amount: number;
  type: string;
  formFactor: string;

  public static storage(): Storage[] {
    return Array.of({
      id: 1,
      name: 'Blue',
      manufacturer: 'WD',
      price: 148,
      type: 'hdd',
      amount: 1,
      capacity: 6,
      interface: 'SATA III',
      formFactor: '3.5"'
    },{
      id: 2,
      name: 'BarraCuda',
      manufacturer: 'Seagate',
      price: 181,
      type: 'hdd',
      amount: 1,
      capacity: 8,
      interface: 'SATA III',
      formFactor: '3.5"'
    },{
      id: 3,
      name: '970 EVO Plus',
      manufacturer: 'Samsung',
      price: 231,
      type: 'ssd',
      amount: 1,
      capacity: 1,
      interface: 'M.2 M Key',
      formFactor: 'M.2 2280'
    },{
      id: 4,
      name: 'P1',
      manufacturer: 'Crucial',
      price: 124,
      type: 'ssd',
      amount: 1,
      capacity: 1,
      interface: 'M.2 M Key',
      formFactor: 'M.2 2280'
    },{
      id: 5,
      name: 'MP600',
      manufacturer: 'Corsair',
      price: 447,
      type: 'ssd',
      amount: 1,
      capacity: 2,
      interface: 'M.2 M Key',
      formFactor: 'M.2 2280'
    })
  }
}
