import { UniqueObject } from './uniqueObject';

export class Mainboard extends UniqueObject {
  formFaktor: string;
  name: string;
  hersteller: string;
  sockel: string;
  ramType: string;
  ramSlots: number;
  ramMaxOC: number;
  ramMax: number;
  preis: number;

  public static mainboards(): Mainboard[] {
    return Array.of({
      id: 1,
      name: 'B450 TOMAHAWK MAX',
      hersteller: 'MSI',
      formFaktor: 'ATX',
      ramMaxOC: 4000,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      ramMax: 64,
      sockel: 'AM4',
      preis: 131
    },{
      id: 2,
      name: 'ROG Strix Z390-E Gaming',
      hersteller: 'ASUS',
      formFaktor: 'ATX',
      ramMaxOC: 4133,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      ramMax: 64,
      sockel: 'LGA 1151',
      preis: 250
    },{
      id: 3,
      name: 'MPG X570 Gaming Edge Wifi',
      hersteller: 'MSI',
      formFaktor: 'ATX',
      ramMaxOC: 4400,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      sockel: 'AM4',
      ramMax: 128,
      preis: 219
    },{
      id: 4,
      name: 'ROG Strix Z390-F Gaming',
      hersteller: 'ASUS',
      formFaktor: 'ATX',
      ramMaxOC: 4400,
      ramSlots: 4,
      ramType: 'DDR4-RAM',
      sockel: 'LGA 1151',
      ramMax: 64,
      preis: 230
    });
  }
}
