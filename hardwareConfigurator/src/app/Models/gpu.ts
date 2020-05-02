import { UniqueObject } from './uniqueObject';

export class Gpu extends UniqueObject {
  name: string;
  price: number;
  manufacturer: string;
  frequency: string;
  videoMemory: number;
  videoMemoryType: string;
  monitors: number;

  public static gpus(): Gpu[] {
    return Array.of({
      id: 1,
      name: 'GeForce RTX 2070S Gaming OC',
      price: 579,
      frequency: '1785 MHz',
      videoMemory: 8,
      videoMemoryType: 'GDDR6',
      monitors: 4,
      manufacturer: 'Gigabyte'
    },{
      id: 2,
      name: 'GeForce RTX 2080 Ti GAMING X TRIO',
      price: 1249,
      frequency: '1755 MHz',
      videoMemory: 11,
      videoMemoryType: 'GDDR6',
      monitors: 4,
      manufacturer: 'MSI'
    },{
      id: 3,
      name: 'Nitro+ Radeon RX 5700 XT',
      price: 486,
      frequency: '1770 MHz',
      videoMemory: 8,
      videoMemoryType: 'GDDR6',
      monitors: 4,
      manufacturer: 'Sapphire'
    },{
      id: 4,
      name: 'GeForce RTX 2060S GAMING X',
      price: 476,
      frequency: '1500 MHz',
      videoMemory: 8,
      videoMemoryType: 'GDDR6',
      monitors: 4,
      manufacturer: 'MSI'
    },{
      id: 5,
      name: 'RTX Titan',
      price: 2999,
      frequency: '1350 MHz',
      videoMemory: 24,
      videoMemoryType: 'GDDR6',
      monitors: 3,
      manufacturer: 'NVIDIA'
    })
  }
}
