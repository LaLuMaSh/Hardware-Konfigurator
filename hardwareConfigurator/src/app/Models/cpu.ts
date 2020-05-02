import { UniqueObject } from './uniqueObject';
export class Cpu extends UniqueObject {
  name: string;
  platform: string;
  benchmark: number;
  cores: number;
  frequency: number;
  price: number;
  socket: string;

  public static cpus(): Cpu[] {
    return Array.of(
      {
        id: 1,
        frequency: 3.60,
        platform: 'amd',
        name: 'Ryzen 7 3700X',
        cores: 8,
        benchmark: 22708,
        price: 327,
        socket: 'AM4'
      },
      {
        id: 2,
        frequency: 3.60,
        platform: 'intel',
        name: 'Core i7-9700K',
        cores: 8,
        benchmark: 14718,
        price: 417,
        socket: 'LGA 1151'
      },
      {
        id: 3,
        frequency: 3.60,
        platform: 'amd',
        name: 'Ryzen 5 2600X',
        cores: 6,
        benchmark: 22708,
        price: 166,
        socket: 'AM4'
      },
      {
        id: 4,
        frequency: 3.60,
        platform: 'intel',
        name: 'Core i9-9900K',
        cores: 8,
        benchmark: 18941,
        price: 543,
        socket: 'LGA 1151'
      },
    );
  }
}
