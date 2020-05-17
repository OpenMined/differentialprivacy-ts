import {
    Result,
    StatusCode,
    PerturbationMechanism,
} from './perturbation-mechanism';

class LaplaceMechanism<T extends number> extends PerturbationMechanism<T> {
  get Epsilon(): number {
    return this._epsilon;
  }

  get CurrentStatus(): StatusCode {
    return this._currentStatus;
  }

  protected _delta: number;
  protected _epsilon: number;
  protected _currentStatus: StatusCode;

  constructor() {
    super();
    this._epsilon = 0.3; // Kritika to very this
    this._delta = 0;
  }

  addNoise(sensitivity: number, queryResult: T): Result<T> {
        // 1) sample from laplace distribution
    const noise =
            this.exponentialSample(sensitivity) -
            this.exponentialSample(sensitivity);

        // 2) add that noise to the query result
    const result = queryResult as number + noise;

        // 3) Validate result is within bounds
    if (result < this.getLowerBounds() || result > this.getUpperBounds()) {
      this._currentStatus = StatusCode.OutOfRange;

      return this._currentStatus;
    }

        // 4) if bounds not exceeded:
        // 4.1) Update privacy budget,

        // 4.1) set CurrentStatus to SuccessfullyPerturbed
    this._currentStatus = StatusCode.SuccessfullyPerturbed;
        // 4.2) update privacy budget

        // 5.3) if privacy budget exceeded set CurrentStatus to RunOutOfBudget and return that value

        // 5.4) return result
    return result;
  }

    // Ria to research best approach
  protected getLowerBounds = (): number => {
    return 0;
  }

    // Ria to research best approach
  protected getUpperBounds = (): number => {
    return 0;
  }

  private readonly exponentialSample = (mean: number): number => {
    return mean * -1 * Math.log(Math.random());
  }
}

export { LaplaceMechanism };
