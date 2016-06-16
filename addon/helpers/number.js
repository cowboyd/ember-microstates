/*jshint -W053 */
import { MicroState } from 'ember-microstates';
import assign from '../utils/assign';

export default MicroState.extend({

  wrap: function(value) {
    return assign(new Number(value), {
      toString() { return String(value); },
      valueOf() { return Number(value); }
    });
  },

  actions: {
    add(current, amount) {
      return current + amount;
    },
    subtract(current, amount) {
      return current - amount;
    }
  }
});
