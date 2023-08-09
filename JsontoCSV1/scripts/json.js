"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module provides a typed alternative for global
 * [JSON][JSON MDN] object by exporting typed versions of `JSON.parse` and
 * JSON.stringify` functions for parsing [JavaScript Object Notation][JSON]
 * (JSON) and converting values to JSON. In addition it exports types for JSON
 * values.
 *
 * [JSON MDN]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
 * [JSON]:http://json.org/
 */
const array = require("./Array");
const result_ts_1 = require("result.ts");
const { parse: parseJSON, stringify: stringifyJSON } = JSON;
/**
 * Type predicate to refines given `value` type to `null`
 *
 * ```ts
 * var data = JSON.parse('null')
 * // Line below won't type check
 * var x:null = data // => [ts]: Type 'Value' is not assignable to type 'null'
 *
 * // Line below works due to type refinement with type predicate
 * if (JSON.isNull(data)) {
 *    var x:null = data
 * }
 * ```
 */
exports.isNull = (value) => value === null;
/**
 * Type predicate to refine given `value` type to `boolean`
 *
 * ```ts
 * var data = JSON.parse('true')
 * // Line below won't type check
 * var x:boolean = data // => [ts]: Type 'Value' is not assignable to type 'boolean'
 *
 * // Line below works due to type refinement with type predicate
 * if (JSON.isBoolean(data)) {
 *    var x:boolean = data
 * }
 * ```
 */
exports.isBoolean = (value) => typeof value === 'boolean';
/**
 * Type predicate to refine given `value` type to `number`
 *
 * ```ts
 * var data = JSON.parse('5.4')
 * // Line below won't type check
 * data.toFixed() // => [ts]: Property 'toFixed' does not exist on type 'Value'
 *
 * // Line below works due to type refinement with type predicate
 * if (JSON.isNumber(data)) {
 *    data.toFixed() // => <string>'5'
 * }
 * ```
 */
exports.isNumber = (value) => typeof value === 'number';
/**
 * Type predicate to refine given `value` type to `string`
 *
 * ```ts
 * var data = JSON.parse('"Hi"')
 * // Line below won't type check
 * data.toUpperCase() // => [ts]: Property 'toUpperCase' does not exist on type 'Value'
 *
 * // Line below works due to type refinement with type predicate
 * if (JSON.isString(data)) {
 *    data.toUpperCase() // => <string>'HI'
 * }
 * ```
 */
exports.isString = (value) => typeof value === 'string';
/**
 * Type predicate to refine given `value` type to `JSON.Array`
 *
 * ```ts
 * var data = JSON.parse('[1, 2, 3]')
 * // Line below won't type check
 * data.map(String) // => [ts]: Property 'map' does not exist on type 'Value'
 *
 * // Line below works due to type refinement with type predicate
 * if (JSON.isArray(data)) {
 *    data.map(String) // => <Array<string>>['1','2','3']
 * }
 * ```
 */
exports.isArray = (value) => array.is(value);
/**
 * Type predicate to refine given `value` type to `JSON.Object`
 *
 * ```ts
 * var data = JSON.parse('{a:{b:{c:3}}}')
 * // Line below won't type check
 * data.a // => [ts]: Property 'a' does not exist on type 'Value'
 *
 * // Line below works due to type refinement with type predicate
 * if (JSON.isObject(data)) {
 *    data.a // => <JSON.Value>{b:{c:3}}
 * }
 * ```
 */
exports.isObject = (value) => value != null && value.constructor.name === 'Object';
/**
 * Parse a `input` string as `JSON`, optionally transform the produced value
 * and its properties, and return the value.
 *
 * #### Difference from built-in `JSON.parse`
 *
 * Unlike built-in this returns `Result<SyntaxError, Value>` where `SyntaxError`
 * is error that built-in throws on invalid JSON input and `Value` is typed
 * JSON instead of `any`.
 *
 * If optional `reviever` is used and it omits everything built-in version
 * returns `undefined` which is not valid JSON. This implementation returns
 * `Result<SyntaxError, null>` instead.
 *
 * @param input The string to parse as JSON.
 * @param reviver If argument is passed, this prescribes how the `value`
 * originally produced by parsing is transformed, before being returned.
 * @return Result that is either `ok` containing JSON value corresponding to
 * the given JSON text or `error` containing `SyntaxError` describing why
 * input is not a valid JSON.
 */
exports.parse = (input, reviver) => {
    try {
        const json = parseJSON(input, reviver);
        if (json == null) {
            return result_ts_1.ok(null);
        }
        else {
            return result_ts_1.ok(json);
        }
    }
    catch (exception) {
        return result_ts_1.error(exception);
    }
};
/**
 * Function serializes a JSON.Value to a string.
 *
 * #### Difference from built-in `JSON.stringify`
 *
 * Unlike built-in version this function returns `SerializationResult` which is
 * either `ok` containing serialized string or an `error` containing an `Error`
 * that built-in version would have thrown.
 *
 * Unlike built-in version if this function succeeds (returns ok) it's result
 * value is guaranteed to parse. There is a catch though built-in returns
 * `undefined` if `replacer` omits everything. In such case this function
 * returns string `"null"` which would parse to `null` which seems to better
 * capture the fact that `JSON.Value` got serailzed to nothing.
 *
 * @param value JSON value to be serialized.
 * @param whiteList An array of strings and numbers that serve as a whitelist
 * for selecting/filtering the properties of the value object to be included
 * in the JSON string.
 * @param replacer Replacing values of members by results of calling given
 * `replacer` function with member name and value.
 * @param replacerOrWhiteList A function that alters the behavior of the
 * stringification process, or an array of string and number objects that
 * serve as a whitelist for selecting/filtering the properties of the value
 * object to be included in the JSON string. If this value is null or not
 * provided, all properties of the object are included in the resulting JSON
 * string.
 * @param space A `string` used to insert white space into the output JSON
 * string for readability purposes. Geven string (or the first 10 characters
 * of the string, if it's longer than that) is used as white space.
 * @param spaceSize A `number` that's used to insert white space into the output
 * JSON string for readability purposes. Number indicates the number of space
 * characters to use as white space; this number is capped at 10 (if it is
 * greater, the value is just 10). Values less than 1 indicate that no space
 * should be used.
 * @param spaceOrSize A string or number that's used to insert white space into the
 * output JSON string for readability purposes. If this is a number, it
 * indicates the number of space characters to use as white space; this number
 * is capped at 10 (if it is greater, the value is just 10). Values less than 1
 * indicate that no space should be used. If this is a string, the string
 * (or the first 10 characters of the string, if it's longer than that) is used
 * as white space. If this parameter is not provided (or is null), no white
 * space is used.
 */
function stringify(value, replacerOrWhiteList, spaceOrSize) {
    try {
        const json = stringifyJSON(value, replacerOrWhiteList, spaceOrSize);
        const result = json == null
            ? result_ts_1.ok('null')
            : result_ts_1.ok(json);
        return result;
    }
    catch (exception) {
        let reason;
        if (exception instanceof Error) {
            reason = exception;
        }
        else {
            reason = new Error(`JSON.stringify has thrown non Error exception: ${exception}`);
            reason.coughtError = exception;
        }
        return result_ts_1.error(reason);
    }
}
exports.stringify = stringify;
/**
 * Function provides a means to pattern match over the `JSON.Value` with very
 * little overhead. It takes a **"mapper"** function for each `JSON.Value`
 * type and returns a **"composite mapper"** function that takes `JSON.Value`,
 * refines it to a concrete type and then maps it with corresponding "mapper".
 *
 * ```ts
 * const show = match
 * ( _ => 'null'
 *   boolean => boolean.toString(),
 *   number => number.toFixed(),
 *   string => string.toUpperCase(),
 *   array => array.forEach(String),
 *   object => JSON.stringify(object))
 *
 * show(JSON.parse('null')) // => null
 * show(JSON.parse('true')) // => true
 * show(JSON.parse('"Hi"')) // => "HI"
 * show(JSON.parse('{name: "Jack"}')) // => {name: "Jack"}
 * ```
 *
 * Please note that this implies that all "mapper" functions return value of
 * the same type. In practice this means that often return type of the
 * "composite mapper" function will be a [type union][] or rather a
 * [discriminated union][] that you'd have to either match over or refine
 * further. If that is too cumbersome for your use case consider using
 * `isArray`, `isObject` and other type predicates provided instead.
 *
 * #### Known limitation
 *
 * As of writing Typescript (2.3.3) has trouble infering return type of the
 * "composite mapper" function created by `match` if it is recursive - If any
 * of the "mapper" functions refer to "composite mapper" directly or indirectly.
 * In order to overcome this limitation you'd have to type manually anotate
 * either "mapper" functions passed to `match` or anotate resulting "composite
 * mapper" instead & that's where exported `Match` type alias comes handy:
 *
 * ```ts
 * const toTypedString = match
 * ( _ => '<null>null',
 *
 * ```
 *
 * [type union]:https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
 * [discriminated union]:https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
exports.match = (/**
       * Function is invoked with a `null` if `Value` matched over is `null`.
       */ Null, 
    /**
     * Function is invoked with a boolean value if `Value` matched is a boolean.
     */
    Boolean, 
    /**
     * Function is invoked with a number value if `Value` matched is a number.
     */
    Number, 
    /**
     * Function is invoked with a string value if `Value` matched is a number.
     */
    String, 
    /**
     * Function is invoked with a `JSON.Array` if `Value` matched is a
     * `JSON.Array`.
     */
    Array, 
    /**
     * Function is invoked with a `JSON.Object` if `Value` matched is a
     * `JSON.Object`.
     */
    Object) => (value) => {
    switch (typeof value) {
        case 'number':
            return Number(value);
        case 'boolean':
            return Boolean(value);
        case 'string':
            return String(value);
        case 'object':
        default:
            if (value == null) {
                return Null(value);
            }
            else if (exports.isArray(value)) {
                return Array(value);
            }
            else {
                return Object(value);
            }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9KU09OLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7OztHQVNHO0FBQ0gsaUNBQWdDO0FBQ2hDLHlDQUEyQztBQUUzQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsYUFBYSxFQUFDLEdBQUcsSUFBSSxDQUFBO0FBOEJ2RDs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ1UsUUFBQSxNQUFNLEdBQUcsQ0FBQyxLQUFTLEtBQzlCLEtBQUssS0FBSyxJQUFJLENBQUE7QUFFaEI7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsS0FBUyxLQUNqQyxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUE7QUFFNUI7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNVLFFBQUEsUUFBUSxHQUFHLENBQUMsS0FBUyxLQUNoQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUE7QUFFM0I7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNVLFFBQUEsUUFBUSxHQUFHLENBQUMsS0FBUyxLQUNoQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUE7QUFFM0I7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNVLFFBQUEsT0FBTyxHQUFHLENBQUMsS0FBVyxLQUNqQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBRWpCOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDVSxRQUFBLFFBQVEsR0FBRyxDQUFDLEtBQVcsS0FDbEMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUE7QUFPdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ1UsUUFBQSxLQUFLLEdBQUcsQ0FBQyxLQUFZLEVBQUUsT0FBZ0I7SUFDbEQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtR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