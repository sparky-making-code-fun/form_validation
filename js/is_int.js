/**
 * Created by sparky on 4/15/15.
 */


/**
 * We need a method named isInt
 *
 * isInt takes one value
 *
 * if the value can be converted to a valid integer return -> true
 * if the value can NOT be converted to a valid integer return -> false
 *
 */
function isInt(value){
   var y = parseInt(value, 10);
   return !isNaN(y) && value == y && value.toString() == y.toString();
};