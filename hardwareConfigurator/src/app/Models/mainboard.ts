import { UniqueObject } from './uniqueObject';

export class Mainboard extends UniqueObject {
  formFactor: string;
  name: string;
  manufacturer : string;
  socket: string;
  ramType: string;
  ramSlots: number;
  ramMaxOC: number;
  ramMax: number;
  price: number;

  public static mainboards(): Mainboard[] {
    return Array.of({
      id: 1,
      name: 'B450 TOMAHAWK MAX',
      manufacturer: 'MSI',
      formFactor: 'ATX',
      ramMaxOC: 4000,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      ramMax: 64,
      socket: 'AM4',
      price: 131
    },{
      id: 2,
      name: 'ROG Strix Z390-E Gaming',
      manufacturer: 'ASUS',
      formFactor: 'ATX',
      ramMaxOC: 4133,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      ramMax: 64,
      socket: 'LGA 1151',
      price: 250
    },{
      id: 3,
      name: 'MPG X570 Gaming Edge Wifi',
      manufacturer: 'MSI',
      formFactor: 'ATX',
      ramMaxOC: 4400,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      socket: 'AM4',
      ramMax: 128,
      price: 219
    },{
      id: 4,
      name: 'ROG Strix Z390-F Gaming',
      manufacturer: 'ASUS',
      formFactor: 'ATX',
      ramMaxOC: 4400,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      socket: 'LGA 1151',
      ramMax: 64,
      price: 230
    });
  }
}
