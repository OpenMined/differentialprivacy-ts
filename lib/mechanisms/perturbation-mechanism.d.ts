/**
 * Status code for results returns by pertubation addNoise method
 */
declare enum StatusCode {
    SuccessfullyPerturbed = 0,
    PrivacyBudgetExceeded = 1,
    OutOfRange = 2,
    Error = 3
}
declare type Result<T> = T | StatusCode;
declare abstract class PerturbationMechanism<T extends number> {
    readonly Epsilon: number;
    readonly CurrentStatus: StatusCode;
    protected _epsilon: number;
    protected _delta: number;
    protected _currentStatus: StatusCode;
    abstract addNoise(sensitivity: number, queryResult: T): Result<T>;
    protected abstract getLowerBounds(): number;
    protected abstract getUpperBounds(): number;
}
export { StatusCode, Result, PerturbationMechanism };
