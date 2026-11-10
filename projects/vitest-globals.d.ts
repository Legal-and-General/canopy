type VitestImplementation = NonNullable<Parameters<typeof vi.fn>[0]>;
type VitestFunction = Extract<VitestImplementation, (...args: never[]) => unknown>;

declare global {
  type Mock<T extends VitestImplementation = VitestFunction> = import('vitest').Mock<T>;
  type MockInstance<T extends VitestImplementation = VitestFunction> =
    import('vitest').MockInstance<T>;
  type Mocked<T> = import('vitest').Mocked<T>;
}

export {};
