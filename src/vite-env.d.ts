/// <reference types="vite/client" />


type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? DeepPartial<U>[]
        : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepPartial<U>>
            : DeepPartial<T[P]>;
};
type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};