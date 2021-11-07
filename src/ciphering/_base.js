class BaseClass {
    constructor() {
        if (this.constructor == BaseClass) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    _upperReformat(code) {
        throw new Error("Method 'upperReformat()' must be implemented.");
    }

    _lowerReformat(code) {
        throw new Error("Method 'lowerReformat()' must be implemented.");
    }
}

module.exports = BaseClass;