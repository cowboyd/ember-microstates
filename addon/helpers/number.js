/*jshint -W053 */
import { MicroState } from 'ember-microstates';

export default MicroState.extend({

  initialValueFor([value = 0]) {
    return Number(value);
  },

  prototypeFor(value) {
    let wrapped = new Number(value);

    Object.defineProperties(wrapped, {
      toString: {
        value() {
          return String(value);
        }
      },
      valueOf: {
        value() {
          return Number(value);
        }
      },
      isEqual: {
        value(target) {
          return value === target;
        }
      }
    });

    return wrapped;
  },

  transitions: {
    add(current, amount) {
      return current + amount;
    },
    subtract(current, amount) {
      return current - amount;
    },
    increment(current) {
      return current + 1;
    },
    decrement(current) {
      return current - 1;
    },
    divide(current, value) {
      return current / value;
    },
    multiply(current, value) {
      return current * value;
    }
  }
});
