import { Result, StatusCode, PerturbationMechanism } from './perturbation-mechanism';
declare class LaplaceMechanism<T extends number> extends PerturbationMechanism<T> {
    readonly Epsilon: number;
    readonly CurrentStatus: StatusCode;
    protected _delta: number;
    protected _epsilon: number;
    protected _currentStatus: StatusCode;
    constructor();
    addNoise(sensitivity: number, queryResult: T): Result<T>;
    protected getLowerBounds: () => number;
    protected getUpperBounds: () => number;
    private readonly exponentialSample;
}
export { LaplaceMechanism };
