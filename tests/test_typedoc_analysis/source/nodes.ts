export class Superclass {
  method() {
  }
}

export interface SuperInterface {
}

export interface Interface extends SuperInterface {
}

export interface InterfaceWithMembers {
  callableProperty(): void;
}

/**
 * An empty subclass
 */
export abstract class EmptySubclass extends Superclass implements Interface {
}

export const topLevelConst = 3;

/**
 * @param a Some number
 * @param b Some strings
 * @return The best number
 */
export function func(a: number = 1, ...b: string[]): number {
  return 4;
}

export class ClassWithProperties {
  static someStatic: number;
  someOptional?: number;
  private somePrivate: number;
  /**
   * This is totally normal!
   */
  someNormal: number;

  constructor(a: number) {
  }

  get gettable(): number {
    return 5;
  }

  set settable(value: string) {
  }
}

export class Indexable {
  [id:string]: any;  // smoketest
}
