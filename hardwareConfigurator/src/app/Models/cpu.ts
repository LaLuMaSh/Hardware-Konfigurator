import { UniqueObject } from './uniqueObject';
export class Cpu extends UniqueObject {
  name: string;
  platform: string;
  benchmark: number;
  cores: number;
  taktfrequenz: number;
  preis: number;
  sockel: string;

  public static cpus(): Cpu[] {
    return Array.of(
      {
        id: 1,
        taktfrequenz: 3.60,
        platform: 'amd',
        name: 'Ryzen 7 3700X',
        cores: 8,
        benchmark: 22708,
        preis: 327,
        sockel: 'AM4'
      },
      {
        id: 2,
        taktfrequenz: 3.60,
        platform: 'intel',
        name: 'Core i7-9700K',
        cores: 8,
        benchmark: 14718,
        preis: 417,
        sockel: 'LGA 1151'
      },
      {
        id: 3,
        taktfrequenz: 3.60,
        platform: 'amd',
        name: 'Ryzen 5 2600X',
        cores: 6,
        benchmark: 22708,
        preis: 166,
        sockel: 'AM4'
      },
      {
        id: 4,
        taktfrequenz: 3.60,
        platform: 'intel',
        name: 'Core i9-9900K',
        cores: 8,
        benchmark: 18941,
        preis: 543,
        sockel: 'LGA 1151'
      },
    );
  }
}
