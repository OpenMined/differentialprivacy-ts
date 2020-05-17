"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perturbation_mechanism_1 = require("./perturbation-mechanism");
class LaplaceMechanism extends perturbation_mechanism_1.PerturbationMechanism {
    constructor() {
        super();
        // Ria to research best approach
        this.getLowerBounds = () => {
            return 0;
        };
        // Ria to research best approach
        this.getUpperBounds = () => {
            return 0;
        };
        this.exponentialSample = (mean) => {
            return mean * -1 * Math.log(Math.random());
        };
        this._epsilon = 0.3; // Kritika to very this
        this._delta = 0;
    }
    get Epsilon() {
        return this._epsilon;
    }
    get CurrentStatus() {
        return this._currentStatus;
    }
    addNoise(sensitivity, queryResult) {
        // 1) sample from laplace distribution
        const noise = this.exponentialSample(sensitivity) -
            this.exponentialSample(sensitivity);
        // 2) add that noise to the query result
        const result = queryResult + noise;
        // 3) Validate result is within bounds
        if (result < this.getLowerBounds() || result > this.getUpperBounds()) {
            this._currentStatus = perturbation_mechanism_1.StatusCode.OutOfRange;
            return this._currentStatus;
        }
        // 4) if bounds not exceeded:
        // 4.1) Update privacy budget,
        // 4.1) set CurrentStatus to SuccessfullyPerturbed
        this._currentStatus = perturbation_mechanism_1.StatusCode.SuccessfullyPerturbed;
        // 4.2) update privacy budget
        // 5.3) if privacy budget exceeded set CurrentStatus to RunOutOfBudget and return that value
        // 5.4) return result
        return result;
    }
}
exports.LaplaceMechanism = LaplaceMechanism;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFwbGFjZS1tZWNoYW5pc20uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVjaGFuaXNtcy9sYXBsYWNlLW1lY2hhbmlzbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFFQUlrQztBQUVsQyxNQUFNLGdCQUFtQyxTQUFRLDhDQUF3QjtJQWF2RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBa0NSLGdDQUFnQztRQUN4QixtQkFBYyxHQUFHLEdBQVcsRUFBRTtZQUN0QyxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQTtRQUVDLGdDQUFnQztRQUN4QixtQkFBYyxHQUFHLEdBQVcsRUFBRTtZQUN0QyxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQTtRQUVnQixzQkFBaUIsR0FBRyxDQUFDLElBQVksRUFBVSxFQUFFO1lBQzVELE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFBO1FBN0NDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsdUJBQXVCO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFoQkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQVlELFFBQVEsQ0FBQyxXQUFtQixFQUFFLFdBQWM7UUFDdEMsc0NBQXNDO1FBQzFDLE1BQU0sS0FBSyxHQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7WUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhDLHdDQUF3QztRQUM1QyxNQUFNLE1BQU0sR0FBRyxXQUFxQixHQUFHLEtBQUssQ0FBQztRQUV6QyxzQ0FBc0M7UUFDMUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxtQ0FBVSxDQUFDLFVBQVUsQ0FBQztZQUU1QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUI7UUFFRyw2QkFBNkI7UUFDN0IsOEJBQThCO1FBRTlCLGtEQUFrRDtRQUN0RCxJQUFJLENBQUMsY0FBYyxHQUFHLG1DQUFVLENBQUMscUJBQXFCLENBQUM7UUFDbkQsNkJBQTZCO1FBRTdCLDRGQUE0RjtRQUU1RixxQkFBcUI7UUFDekIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQWVGO0FBRVEsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBSZXN1bHQsXG4gICAgU3RhdHVzQ29kZSxcbiAgICBQZXJ0dXJiYXRpb25NZWNoYW5pc20sXG59IGZyb20gJy4vcGVydHVyYmF0aW9uLW1lY2hhbmlzbSc7XG5cbmNsYXNzIExhcGxhY2VNZWNoYW5pc208VCBleHRlbmRzIG51bWJlcj4gZXh0ZW5kcyBQZXJ0dXJiYXRpb25NZWNoYW5pc208VD4ge1xuICBnZXQgRXBzaWxvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9lcHNpbG9uO1xuICB9XG5cbiAgZ2V0IEN1cnJlbnRTdGF0dXMoKTogU3RhdHVzQ29kZSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0dXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2RlbHRhOiBudW1iZXI7XG4gIHByb3RlY3RlZCBfZXBzaWxvbjogbnVtYmVyO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRTdGF0dXM6IFN0YXR1c0NvZGU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9lcHNpbG9uID0gMC4zOyAvLyBLcml0aWthIHRvIHZlcnkgdGhpc1xuICAgIHRoaXMuX2RlbHRhID0gMDtcbiAgfVxuXG4gIGFkZE5vaXNlKHNlbnNpdGl2aXR5OiBudW1iZXIsIHF1ZXJ5UmVzdWx0OiBUKTogUmVzdWx0PFQ+IHtcbiAgICAgICAgLy8gMSkgc2FtcGxlIGZyb20gbGFwbGFjZSBkaXN0cmlidXRpb25cbiAgICBjb25zdCBub2lzZSA9XG4gICAgICAgICAgICB0aGlzLmV4cG9uZW50aWFsU2FtcGxlKHNlbnNpdGl2aXR5KSAtXG4gICAgICAgICAgICB0aGlzLmV4cG9uZW50aWFsU2FtcGxlKHNlbnNpdGl2aXR5KTtcblxuICAgICAgICAvLyAyKSBhZGQgdGhhdCBub2lzZSB0byB0aGUgcXVlcnkgcmVzdWx0XG4gICAgY29uc3QgcmVzdWx0ID0gcXVlcnlSZXN1bHQgYXMgbnVtYmVyICsgbm9pc2U7XG5cbiAgICAgICAgLy8gMykgVmFsaWRhdGUgcmVzdWx0IGlzIHdpdGhpbiBib3VuZHNcbiAgICBpZiAocmVzdWx0IDwgdGhpcy5nZXRMb3dlckJvdW5kcygpIHx8IHJlc3VsdCA+IHRoaXMuZ2V0VXBwZXJCb3VuZHMoKSkge1xuICAgICAgdGhpcy5fY3VycmVudFN0YXR1cyA9IFN0YXR1c0NvZGUuT3V0T2ZSYW5nZTtcblxuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0dXM7XG4gICAgfVxuXG4gICAgICAgIC8vIDQpIGlmIGJvdW5kcyBub3QgZXhjZWVkZWQ6XG4gICAgICAgIC8vIDQuMSkgVXBkYXRlIHByaXZhY3kgYnVkZ2V0LFxuXG4gICAgICAgIC8vIDQuMSkgc2V0IEN1cnJlbnRTdGF0dXMgdG8gU3VjY2Vzc2Z1bGx5UGVydHVyYmVkXG4gICAgdGhpcy5fY3VycmVudFN0YXR1cyA9IFN0YXR1c0NvZGUuU3VjY2Vzc2Z1bGx5UGVydHVyYmVkO1xuICAgICAgICAvLyA0LjIpIHVwZGF0ZSBwcml2YWN5IGJ1ZGdldFxuXG4gICAgICAgIC8vIDUuMykgaWYgcHJpdmFjeSBidWRnZXQgZXhjZWVkZWQgc2V0IEN1cnJlbnRTdGF0dXMgdG8gUnVuT3V0T2ZCdWRnZXQgYW5kIHJldHVybiB0aGF0IHZhbHVlXG5cbiAgICAgICAgLy8gNS40KSByZXR1cm4gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gICAgLy8gUmlhIHRvIHJlc2VhcmNoIGJlc3QgYXBwcm9hY2hcbiAgcHJvdGVjdGVkIGdldExvd2VyQm91bmRzID0gKCk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAgIC8vIFJpYSB0byByZXNlYXJjaCBiZXN0IGFwcHJvYWNoXG4gIHByb3RlY3RlZCBnZXRVcHBlckJvdW5kcyA9ICgpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBleHBvbmVudGlhbFNhbXBsZSA9IChtZWFuOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiBtZWFuICogLTEgKiBNYXRoLmxvZyhNYXRoLnJhbmRvbSgpKTtcbiAgfVxufVxuXG5leHBvcnQgeyBMYXBsYWNlTWVjaGFuaXNtIH07XG4iXX0=