module.exports = [
"[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deprecate",
    ()=>deprecate,
    "equal",
    ()=>equal,
    "ok",
    ()=>ok,
    "unreachable",
    ()=>unreachable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/dequal/dist/index.mjs [app-ssr] (ecmascript)");
;
/**
 * @type {Set<string>}
 */ const codesWarned = new Set();
class AssertionError extends Error {
    name = 'Assertion';
    code = 'ERR_ASSERTION';
    /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */ // eslint-disable-next-line max-params
    constructor(message, actual, expected, operator, generated){
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
        /**
     * @type {unknown}
     */ this.actual = actual;
        /**
     * @type {unknown}
     */ this.expected = expected;
        /**
     * @type {boolean}
     */ this.generated = generated;
        /**
     * @type {string}
     */ this.operator = operator;
    }
}
class DeprecationError extends Error {
    name = 'DeprecationWarning';
    /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */ constructor(message, code){
        super(message);
        /**
     * @type {string | undefined}
     */ this.code = code;
    }
}
function deprecate(fn, message, code) {
    let warned = false;
    // The wrapper will keep the same prototype as fn to maintain prototype chain
    Object.setPrototypeOf(deprecated, fn);
    // @ts-expect-error: it’s perfect, typescript…
    return deprecated;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */ function deprecated(...args) {
        if (!warned) {
            warned = true;
            if (typeof code === 'string' && codesWarned.has(code)) {
            // Empty.
            } else {
                console.error(new DeprecationError(message, code || undefined));
                if (typeof code === 'string') codesWarned.add(code);
            }
        }
        return new.target ? Reflect.construct(fn, args, new.target) : Reflect.apply(fn, this, args);
    }
}
function equal(actual, expected, message) {
    assert((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$dequal$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dequal"])(actual, expected), actual, expected, 'equal', 'Expected values to be deeply equal', message);
}
function ok(value, message) {
    assert(Boolean(value), false, true, 'ok', 'Expected value to be truthy', message);
}
function unreachable(message) {
    assert(false, false, true, 'ok', 'Unreachable', message);
}
/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */ // eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
    if (!bool) {
        throw userMessage instanceof Error ? userMessage : new AssertionError(userMessage || defaultMessage, actual, expected, operator, !userMessage);
    }
}
}),
"[project]/PREFECT-10/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */ /**
 * @typedef {Options} StringifyOptions
 *   Please use `StringifyOptions` instead.
 */ /**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value
 *   Comma-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    /** @type {Array<string>} */ const tokens = [];
    const input = String(value || '');
    let index = input.indexOf(',');
    let start = 0;
    /** @type {boolean} */ let end = false;
    while(!end){
        if (index === -1) {
            index = input.length;
            end = true;
        }
        const token = input.slice(start, index).trim();
        if (token || !end) {
            tokens.push(token);
        }
        start = index + 1;
        index = input.indexOf(',', start);
    }
    return tokens;
}
function stringify(values, options) {
    const settings = options || {};
    // Ensure the last empty entry is seen.
    const input = values[values.length - 1] === '' ? [
        ...values,
        ''
    ] : values;
    return input.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}
}),
"[project]/PREFECT-10/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [jsx=false]
 *   Support JSX identifiers (default: `false`).
 */ __turbopack_context__.s([
    "cont",
    ()=>cont,
    "name",
    ()=>name,
    "start",
    ()=>start
]);
const startRe = /[$_\p{ID_Start}]/u;
const contRe = /[$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const contReJsx = /[-$_\u{200C}\u{200D}\p{ID_Continue}]/u;
const nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
const nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u;
/** @type {Options} */ const emptyOptions = {};
function start(code) {
    return code ? startRe.test(String.fromCodePoint(code)) : false;
}
function cont(code, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? contReJsx : contRe;
    return code ? re.test(String.fromCodePoint(code)) : false;
}
function name(name, options) {
    const settings = options || emptyOptions;
    const re = settings.jsx ? nameReJsx : nameRe;
    return re.test(name);
}
}),
"[project]/PREFECT-10/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} Nodes
 */ // HTML whitespace expression.
// See <https://infra.spec.whatwg.org/#ascii-whitespace>.
__turbopack_context__.s([
    "whitespace",
    ()=>whitespace
]);
const re = /[ \t\n\f\r]/g;
function whitespace(thing) {
    return typeof thing === 'object' ? thing.type === 'text' ? empty(thing.value) : false : empty(thing);
}
/**
 * @param {string} value
 * @returns {boolean}
 */ function empty(value) {
    return value.replace(re, '') === '';
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info as InfoType} from 'property-information'
 */ /** @type {InfoType} */ __turbopack_context__.s([
    "Info",
    ()=>Info
]);
class Info {
    /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */ constructor(property, attribute){
        this.attribute = attribute;
        this.property = property;
    }
}
Info.prototype.attribute = '';
Info.prototype.booleanish = false;
Info.prototype.boolean = false;
Info.prototype.commaOrSpaceSeparated = false;
Info.prototype.commaSeparated = false;
Info.prototype.defined = false;
Info.prototype.mustUseProperty = false;
Info.prototype.number = false;
Info.prototype.overloadedBoolean = false;
Info.prototype.property = '';
Info.prototype.spaceSeparated = false;
Info.prototype.space = undefined;
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boolean",
    ()=>boolean,
    "booleanish",
    ()=>booleanish,
    "commaOrSpaceSeparated",
    ()=>commaOrSpaceSeparated,
    "commaSeparated",
    ()=>commaSeparated,
    "number",
    ()=>number,
    "overloadedBoolean",
    ()=>overloadedBoolean,
    "spaceSeparated",
    ()=>spaceSeparated
]);
let powers = 0;
const boolean = increment();
const booleanish = increment();
const overloadedBoolean = increment();
const number = increment();
const spaceSeparated = increment();
const commaSeparated = increment();
const commaOrSpaceSeparated = increment();
function increment() {
    return 2 ** ++powers;
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Space} from 'property-information'
 */ __turbopack_context__.s([
    "DefinedInfo",
    ()=>DefinedInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
const checks = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
class DefinedInfo extends __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"] {
    /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */ constructor(property, attribute, mask, space){
        let index = -1;
        super(property, attribute);
        mark(this, 'space', space);
        if (typeof mask === 'number') {
            while(++index < checks.length){
                const check = checks[index];
                mark(this, checks[index], (mask & __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[check]) === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[check]);
            }
        }
    }
}
DefinedInfo.prototype.defined = true;
/**
 * @template {keyof DefinedInfo} Key
 *   Key type.
 * @param {DefinedInfo} values
 *   Info.
 * @param {Key} key
 *   Key.
 * @param {DefinedInfo[Key]} value
 *   Value.
 * @returns {undefined}
 *   Nothing.
 */ function mark(values, key, value) {
    if (value) {
        values[key] = value;
    }
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get the cleaned case insensitive form of an attribute or property.
 *
 * @param {string} value
 *   An attribute-like or property-like name.
 * @returns {string}
 *   Value that can be used to look up the properly cased property on a
 *   `Schema`.
 */ __turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
function normalize(value) {
    return value.toLowerCase();
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/find.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Schema} from 'property-information'
 */ __turbopack_context__.s([
    "find",
    ()=>find
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)");
;
;
;
const cap = /[A-Z]/g;
const dash = /-[a-z]/g;
const valid = /^data[-\w.:]+$/i;
function find(schema, value) {
    const normal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(value);
    let property = value;
    let Type = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Info"];
    if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
    }
    if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
        // Attribute or property.
        if (value.charAt(4) === '-') {
            // Turn it into a property.
            const rest = value.slice(5).replace(dash, camelcase);
            property = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1);
        } else {
            // Turn it into an attribute.
            const rest = value.slice(4);
            if (!dash.test(rest)) {
                let dashes = rest.replace(cap, kebab);
                if (dashes.charAt(0) !== '-') {
                    dashes = '-' + dashes;
                }
                value = 'data' + dashes;
            }
        }
        Type = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefinedInfo"];
    }
    return new Type(property, value);
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Kebab.
 */ function kebab($0) {
    return '-' + $0.toLowerCase();
}
/**
 * @param {string} $0
 *   Value.
 * @returns {string}
 *   Camel.
 */ function camelcase($0) {
    return $0.charAt(1).toUpperCase();
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/hast-to-react.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Special cases for React (`Record<string, string>`).
 *
 * `hast` is close to `React` but differs in a couple of cases.
 * To get a React property from a hast property,
 * check if it is in `hastToReact`.
 * If it is, use the corresponding value;
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "hastToReact",
    ()=>hastToReact
]);
const hastToReact = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink'
};
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Schema as SchemaType, Space} from 'property-information'
 */ /** @type {SchemaType} */ __turbopack_context__.s([
    "Schema",
    ()=>Schema
]);
class Schema {
    /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */ constructor(property, normal, space){
        this.normal = normal;
        this.property = property;
        if (space) {
            this.space = space;
        }
    }
}
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = undefined;
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/merge.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, Space} from 'property-information'
 */ __turbopack_context__.s([
    "merge",
    ()=>merge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)");
;
function merge(definitions, space) {
    /** @type {Record<string, Info>} */ const property = {};
    /** @type {Record<string, string>} */ const normal = {};
    for (const definition of definitions){
        Object.assign(property, definition.property);
        Object.assign(normal, definition.normal);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"](property, normal, space);
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Info, Space} from 'property-information'
 */ /**
 * @typedef Definition
 *   Definition of a schema.
 * @property {Record<string, string> | undefined} [attributes]
 *   Normalzed names to special attribute case.
 * @property {ReadonlyArray<string> | undefined} [mustUseProperty]
 *   Normalized names that must be set as properties.
 * @property {Record<string, number | null>} properties
 *   Property names to their types.
 * @property {Space | undefined} [space]
 *   Space.
 * @property {Transform} transform
 *   Transform a property name.
 */ /**
 * @callback Transform
 *   Transform.
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} property
 *   Property.
 * @returns {string}
 *   Attribute.
 */ __turbopack_context__.s([
    "create",
    ()=>create
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/normalize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/defined-info.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/schema.js [app-ssr] (ecmascript)");
;
;
;
function create(definition) {
    /** @type {Record<string, Info>} */ const properties = {};
    /** @type {Record<string, string>} */ const normals = {};
    for (const [property, value] of Object.entries(definition.properties)){
        const info = new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$defined$2d$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefinedInfo"](property, definition.transform(definition.attributes || {}, property), value, definition.space);
        if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) {
            info.mustUseProperty = true;
        }
        properties[property] = info;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(property)] = property;
        normals[(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$normalize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalize"])(info.attribute)] = property;
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Schema"](properties, normals, definition.space);
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/aria.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aria",
    ()=>aria
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
const aria = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaAutoComplete: null,
        ariaBusy: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaChecked: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaColCount: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaColIndex: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaColSpan: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaControls: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaCurrent: null,
        ariaDescribedBy: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaDetails: null,
        ariaDisabled: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaDropEffect: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaErrorMessage: null,
        ariaExpanded: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaFlowTo: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaGrabbed: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaHasPopup: null,
        ariaHidden: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaLevel: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaLive: null,
        ariaModal: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiLine: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaMultiSelectable: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaOrientation: null,
        ariaOwns: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaPlaceholder: null,
        ariaPosInSet: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaPressed: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaReadOnly: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRelevant: null,
        ariaRequired: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaRoleDescription: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        ariaRowCount: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaRowIndex: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaRowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaSelected: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        ariaSetSize: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaSort: null,
        ariaValueMax: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueMin: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueNow: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        ariaValueText: null,
        role: null
    },
    transform (_, property) {
        return property === 'role' ? property : 'aria-' + property.slice(4).toLowerCase();
    }
});
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {Record<string, string>} attributes
 *   Attributes.
 * @param {string} attribute
 *   Attribute.
 * @returns {string}
 *   Transformed attribute.
 */ __turbopack_context__.s([
    "caseSensitiveTransform",
    ()=>caseSensitiveTransform
]);
function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseInsensitiveTransform",
    ()=>caseInsensitiveTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)");
;
function caseInsensitiveTransform(attributes, property) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseSensitiveTransform"])(attributes, property.toLowerCase());
}
}),
"[project]/PREFECT-10/node_modules/property-information/lib/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "html",
    ()=>html
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        acceptcharset: 'accept-charset',
        classname: 'class',
        htmlfor: 'for',
        httpequiv: 'http-equiv'
    },
    mustUseProperty: [
        'checked',
        'multiple',
        'muted',
        'selected'
    ],
    properties: {
        // Standard Properties.
        abbr: null,
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        acceptCharset: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        accessKey: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        action: null,
        allow: null,
        allowFullScreen: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        allowPaymentRequest: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        allowUserMedia: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        alt: null,
        as: null,
        async: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        autoCapitalize: null,
        autoComplete: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        autoFocus: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        autoPlay: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        blocking: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        capture: null,
        charSet: null,
        checked: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        cite: null,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        cols: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        colSpan: null,
        content: null,
        contentEditable: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        controls: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        controlsList: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        coords: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"] | __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        defer: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        dir: null,
        dirName: null,
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        download: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["overloadedBoolean"],
        draggable: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        formTarget: null,
        headers: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        height: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        hidden: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        high: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        href: null,
        hrefLang: null,
        htmlFor: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        httpEquiv: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        inputMode: null,
        integrity: null,
        is: null,
        isMap: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        itemId: null,
        itemProp: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemRef: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        itemScope: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        itemType: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        low: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        manifest: null,
        max: null,
        maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        media: null,
        method: null,
        min: null,
        minLength: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        multiple: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        muted: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        name: null,
        nonce: null,
        noModule: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noValidate: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        optimum: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pattern: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        placeholder: null,
        playsInline: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        referrerPolicy: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        required: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        reversed: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        rows: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        rowSpan: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        sandbox: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        scope: null,
        scoped: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        seamless: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        selected: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootClonable: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootDelegatesFocus: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        shadowRootMode: null,
        shape: null,
        size: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        sizes: null,
        slot: null,
        span: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        spellCheck: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        step: null,
        style: null,
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        useMap: null,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        width: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        wrap: null,
        writingSuggestions: null,
        // Legacy.
        // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
        align: null,
        aLink: null,
        archive: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        axis: null,
        background: null,
        bgColor: null,
        border: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        borderColor: null,
        bottomMargin: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        declare: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        leftMargin: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        marginWidth: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        noResize: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noHref: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noShade: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        noWrap: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        rules: null,
        scheme: null,
        scrolling: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["booleanish"],
        standby: null,
        summary: null,
        text: null,
        topMargin: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        // Non-standard Properties.
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        disableRemotePlayback: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        prefix: null,
        property: null,
        results: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        security: null,
        unselectable: null
    },
    space: 'html',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/PREFECT-10/node_modules/property-information/lib/svg.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "svg",
    ()=>svg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/case-sensitive-transform.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/types.js [app-ssr] (ecmascript)");
;
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        accentHeight: 'accent-height',
        alignmentBaseline: 'alignment-baseline',
        arabicForm: 'arabic-form',
        baselineShift: 'baseline-shift',
        capHeight: 'cap-height',
        className: 'class',
        clipPath: 'clip-path',
        clipRule: 'clip-rule',
        colorInterpolation: 'color-interpolation',
        colorInterpolationFilters: 'color-interpolation-filters',
        colorProfile: 'color-profile',
        colorRendering: 'color-rendering',
        crossOrigin: 'crossorigin',
        dataType: 'datatype',
        dominantBaseline: 'dominant-baseline',
        enableBackground: 'enable-background',
        fillOpacity: 'fill-opacity',
        fillRule: 'fill-rule',
        floodColor: 'flood-color',
        floodOpacity: 'flood-opacity',
        fontFamily: 'font-family',
        fontSize: 'font-size',
        fontSizeAdjust: 'font-size-adjust',
        fontStretch: 'font-stretch',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        glyphName: 'glyph-name',
        glyphOrientationHorizontal: 'glyph-orientation-horizontal',
        glyphOrientationVertical: 'glyph-orientation-vertical',
        hrefLang: 'hreflang',
        horizAdvX: 'horiz-adv-x',
        horizOriginX: 'horiz-origin-x',
        horizOriginY: 'horiz-origin-y',
        imageRendering: 'image-rendering',
        letterSpacing: 'letter-spacing',
        lightingColor: 'lighting-color',
        markerEnd: 'marker-end',
        markerMid: 'marker-mid',
        markerStart: 'marker-start',
        navDown: 'nav-down',
        navDownLeft: 'nav-down-left',
        navDownRight: 'nav-down-right',
        navLeft: 'nav-left',
        navNext: 'nav-next',
        navPrev: 'nav-prev',
        navRight: 'nav-right',
        navUp: 'nav-up',
        navUpLeft: 'nav-up-left',
        navUpRight: 'nav-up-right',
        onAbort: 'onabort',
        onActivate: 'onactivate',
        onAfterPrint: 'onafterprint',
        onBeforePrint: 'onbeforeprint',
        onBegin: 'onbegin',
        onCancel: 'oncancel',
        onCanPlay: 'oncanplay',
        onCanPlayThrough: 'oncanplaythrough',
        onChange: 'onchange',
        onClick: 'onclick',
        onClose: 'onclose',
        onCopy: 'oncopy',
        onCueChange: 'oncuechange',
        onCut: 'oncut',
        onDblClick: 'ondblclick',
        onDrag: 'ondrag',
        onDragEnd: 'ondragend',
        onDragEnter: 'ondragenter',
        onDragExit: 'ondragexit',
        onDragLeave: 'ondragleave',
        onDragOver: 'ondragover',
        onDragStart: 'ondragstart',
        onDrop: 'ondrop',
        onDurationChange: 'ondurationchange',
        onEmptied: 'onemptied',
        onEnd: 'onend',
        onEnded: 'onended',
        onError: 'onerror',
        onFocus: 'onfocus',
        onFocusIn: 'onfocusin',
        onFocusOut: 'onfocusout',
        onHashChange: 'onhashchange',
        onInput: 'oninput',
        onInvalid: 'oninvalid',
        onKeyDown: 'onkeydown',
        onKeyPress: 'onkeypress',
        onKeyUp: 'onkeyup',
        onLoad: 'onload',
        onLoadedData: 'onloadeddata',
        onLoadedMetadata: 'onloadedmetadata',
        onLoadStart: 'onloadstart',
        onMessage: 'onmessage',
        onMouseDown: 'onmousedown',
        onMouseEnter: 'onmouseenter',
        onMouseLeave: 'onmouseleave',
        onMouseMove: 'onmousemove',
        onMouseOut: 'onmouseout',
        onMouseOver: 'onmouseover',
        onMouseUp: 'onmouseup',
        onMouseWheel: 'onmousewheel',
        onOffline: 'onoffline',
        onOnline: 'ononline',
        onPageHide: 'onpagehide',
        onPageShow: 'onpageshow',
        onPaste: 'onpaste',
        onPause: 'onpause',
        onPlay: 'onplay',
        onPlaying: 'onplaying',
        onPopState: 'onpopstate',
        onProgress: 'onprogress',
        onRateChange: 'onratechange',
        onRepeat: 'onrepeat',
        onReset: 'onreset',
        onResize: 'onresize',
        onScroll: 'onscroll',
        onSeeked: 'onseeked',
        onSeeking: 'onseeking',
        onSelect: 'onselect',
        onShow: 'onshow',
        onStalled: 'onstalled',
        onStorage: 'onstorage',
        onSubmit: 'onsubmit',
        onSuspend: 'onsuspend',
        onTimeUpdate: 'ontimeupdate',
        onToggle: 'ontoggle',
        onUnload: 'onunload',
        onVolumeChange: 'onvolumechange',
        onWaiting: 'onwaiting',
        onZoom: 'onzoom',
        overlinePosition: 'overline-position',
        overlineThickness: 'overline-thickness',
        paintOrder: 'paint-order',
        panose1: 'panose-1',
        pointerEvents: 'pointer-events',
        referrerPolicy: 'referrerpolicy',
        renderingIntent: 'rendering-intent',
        shapeRendering: 'shape-rendering',
        stopColor: 'stop-color',
        stopOpacity: 'stop-opacity',
        strikethroughPosition: 'strikethrough-position',
        strikethroughThickness: 'strikethrough-thickness',
        strokeDashArray: 'stroke-dasharray',
        strokeDashOffset: 'stroke-dashoffset',
        strokeLineCap: 'stroke-linecap',
        strokeLineJoin: 'stroke-linejoin',
        strokeMiterLimit: 'stroke-miterlimit',
        strokeOpacity: 'stroke-opacity',
        strokeWidth: 'stroke-width',
        tabIndex: 'tabindex',
        textAnchor: 'text-anchor',
        textDecoration: 'text-decoration',
        textRendering: 'text-rendering',
        transformOrigin: 'transform-origin',
        typeOf: 'typeof',
        underlinePosition: 'underline-position',
        underlineThickness: 'underline-thickness',
        unicodeBidi: 'unicode-bidi',
        unicodeRange: 'unicode-range',
        unitsPerEm: 'units-per-em',
        vAlphabetic: 'v-alphabetic',
        vHanging: 'v-hanging',
        vIdeographic: 'v-ideographic',
        vMathematical: 'v-mathematical',
        vectorEffect: 'vector-effect',
        vertAdvY: 'vert-adv-y',
        vertOriginX: 'vert-origin-x',
        vertOriginY: 'vert-origin-y',
        wordSpacing: 'word-spacing',
        writingMode: 'writing-mode',
        xHeight: 'x-height',
        // These were camelcased in Tiny. Now lowercased in SVG 2
        playbackOrder: 'playbackorder',
        timelineBegin: 'timelinebegin'
    },
    properties: {
        about: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        accentHeight: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        amplitude: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        arabicForm: null,
        ascent: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        attributeName: null,
        attributeType: null,
        azimuth: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        by: null,
        calcMode: null,
        capHeight: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        className: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        diffuseConstant: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        direction: null,
        display: null,
        dur: null,
        divisor: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        dominantBaseline: null,
        download: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["boolean"],
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        enableBackground: null,
        end: null,
        event: null,
        exponent: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        g2: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphName: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaSeparated"],
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        horizOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        horizOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        id: null,
        ideographic: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k1: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k2: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k3: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        k4: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        kernelMatrix: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        overlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spaceSeparated"],
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pointsAtY: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        pointsAtZ: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        rev: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFeatures: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFonts: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        requiredFormats: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        specularExponent: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strikethroughThickness: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        string: null,
        stroke: null,
        strokeDashArray: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strokeOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        strokeWidth: null,
        style: null,
        surfaceScale: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        tabIndex: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        tableValues: null,
        target: null,
        targetX: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        targetY: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["commaOrSpaceSeparated"],
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        underlineThickness: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        values: null,
        vAlphabetic: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vMathematical: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vectorEffect: null,
        vHanging: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vIdeographic: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        version: null,
        vertAdvY: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vertOriginX: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        vertOriginY: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"],
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    },
    space: 'svg',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$sensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseSensitiveTransform"]
});
}),
"[project]/PREFECT-10/node_modules/property-information/lib/xlink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xlink",
    ()=>xlink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
;
const xlink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    },
    space: 'xlink',
    transform (_, property) {
        return 'xlink:' + property.slice(5).toLowerCase();
    }
});
}),
"[project]/PREFECT-10/node_modules/property-information/lib/xmlns.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xmlns",
    ()=>xmlns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/case-insensitive-transform.js [app-ssr] (ecmascript)");
;
;
const xmlns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    attributes: {
        xmlnsxlink: 'xmlns:xlink'
    },
    properties: {
        xmlnsXLink: null,
        xmlns: null
    },
    space: 'xmlns',
    transform: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$case$2d$insensitive$2d$transform$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["caseInsensitiveTransform"]
});
}),
"[project]/PREFECT-10/node_modules/property-information/lib/xml.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xml",
    ()=>xml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/create.js [app-ssr] (ecmascript)");
;
const xml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$create$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])({
    properties: {
        xmlBase: null,
        xmlLang: null,
        xmlSpace: null
    },
    space: 'xml',
    transform (_, property) {
        return 'xml:' + property.slice(3).toLowerCase();
    }
});
}),
"[project]/PREFECT-10/node_modules/property-information/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Note: types exposed from `index.d.ts`.
__turbopack_context__.s([
    "html",
    ()=>html,
    "svg",
    ()=>svg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/util/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/aria.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/svg.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/xlink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/xmlns.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/xml.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xml"]
], 'html');
;
;
const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$util$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])([
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$aria$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aria"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$svg$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svg"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xlink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xlink"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xmlns$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlns"],
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xml"]
], 'svg');
}),
"[project]/PREFECT-10/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */ __turbopack_context__.s([
    "parse",
    ()=>parse,
    "stringify",
    ()=>stringify
]);
function parse(value) {
    const input = String(value || '').trim();
    return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
    return values.join(' ').trim();
}
}),
"[project]/PREFECT-10/node_modules/inline-style-parser/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;
// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;
// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;
// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';
// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */ module.exports = function(style, options) {
    if (typeof style !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    if (!style) return [];
    options = options || {};
    /**
   * Positional.
   */ var lineno = 1;
    var column = 1;
    /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */ function updatePosition(str) {
        var lines = str.match(NEWLINE_REGEX);
        if (lines) lineno += lines.length;
        var i = str.lastIndexOf(NEWLINE);
        column = ~i ? str.length - i : column + str.length;
    }
    /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */ function position() {
        var start = {
            line: lineno,
            column: column
        };
        return function(node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */ function Position(start) {
        this.start = start;
        this.end = {
            line: lineno,
            column: column
        };
        this.source = options.source;
    }
    /**
   * Non-enumerable source string.
   */ Position.prototype.content = style;
    var errorsList = [];
    /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */ function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = style;
        if (options.silent) {
            errorsList.push(err);
        } else {
            throw err;
        }
    }
    /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */ function match(re) {
        var m = re.exec(style);
        if (!m) return;
        var str = m[0];
        updatePosition(str);
        style = style.slice(str.length);
        return m;
    }
    /**
   * Parse whitespace.
   */ function whitespace() {
        match(WHITESPACE_REGEX);
    }
    /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */ function comments(rules) {
        var c;
        rules = rules || [];
        while(c = comment()){
            if (c !== false) {
                rules.push(c);
            }
        }
        return rules;
    }
    /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */ function comment() {
        var pos = position();
        if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
        var i = 2;
        while(EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))){
            ++i;
        }
        i += 2;
        if (EMPTY_STRING === style.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = style.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        style = style.slice(i);
        column += 2;
        return pos({
            type: TYPE_COMMENT,
            comment: str
        });
    }
    /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */ function declaration() {
        var pos = position();
        // prop
        var prop = match(PROPERTY_REGEX);
        if (!prop) return;
        comment();
        // :
        if (!match(COLON_REGEX)) return error("property missing ':'");
        // val
        var val = match(VALUE_REGEX);
        var ret = pos({
            type: TYPE_DECLARATION,
            property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
            value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
        });
        // ;
        match(SEMICOLON_REGEX);
        return ret;
    }
    /**
   * Parse declarations.
   *
   * @return {Object[]}
   */ function declarations() {
        var decls = [];
        comments(decls);
        // declarations
        var decl;
        while(decl = declaration()){
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
        }
        return decls;
    }
    whitespace();
    return declarations();
};
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */ function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}
}),
"[project]/PREFECT-10/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = StyleToObject;
var inline_style_parser_1 = __importDefault(__turbopack_context__.r("[project]/PREFECT-10/node_modules/inline-style-parser/index.js [app-ssr] (ecmascript)"));
/**
 * Parses inline style to object.
 *
 * @param style - Inline style.
 * @param iterator - Iterator.
 * @returns - Style object or null.
 *
 * @example Parsing inline style to object:
 *
 * ```js
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */ function StyleToObject(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== 'string') {
        return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === 'function';
    declarations.forEach(function(declaration) {
        if (declaration.type !== 'declaration') {
            return;
        }
        var property = declaration.property, value = declaration.value;
        if (hasIterator) {
            iterator(property, value, declaration);
        } else if (value) {
            styleObject = styleObject || {};
            styleObject[property] = value;
        }
    });
    return styleObject;
} //# sourceMappingURL=index.js.map
}),
"[project]/PREFECT-10/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9_-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
/**
 * Checks whether to skip camelCase.
 */ var skipCamelCase = function(property) {
    return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};
/**
 * Replacer that capitalizes first character.
 */ var capitalize = function(match, character) {
    return character.toUpperCase();
};
/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */ var trimHyphen = function(match, prefix) {
    return "".concat(prefix, "-");
};
/**
 * CamelCases a CSS property.
 */ var camelCase = function(property, options) {
    if (options === void 0) {
        options = {};
    }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        // `-ms` vendor prefix should not be capitalized
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    } else {
        // for non-React, remove first hyphen so vendor prefix is not capitalized
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase; //# sourceMappingURL=utilities.js.map
}),
"[project]/PREFECT-10/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var style_to_object_1 = __importDefault(__turbopack_context__.r("[project]/PREFECT-10/node_modules/style-to-object/cjs/index.js [app-ssr] (ecmascript)"));
var utilities_1 = __turbopack_context__.r("[project]/PREFECT-10/node_modules/style-to-js/cjs/utilities.js [app-ssr] (ecmascript)");
/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */ function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1.default)(style, function(property, value) {
        // skip CSS comment
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
StyleToJS.default = StyleToJS;
module.exports = StyleToJS; //# sourceMappingURL=index.js.map
}),
"[project]/PREFECT-10/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 */ /**
 * Get the ending point of `node`.
 *
 * @param node
 *   Node.
 * @returns
 *   Point.
 */ __turbopack_context__.s([
    "pointEnd",
    ()=>pointEnd,
    "pointStart",
    ()=>pointStart,
    "position",
    ()=>position
]);
const pointEnd = point('end');
const pointStart = point('start');
/**
 * Get the positional info of `node`.
 *
 * @param {'end' | 'start'} type
 *   Side.
 * @returns
 *   Getter.
 */ function point(type) {
    return point;
    //TURBOPACK unreachable
    ;
    /**
   * Get the point info of `node` at a bound side.
   *
   * @param {Node | NodeLike | null | undefined} [node]
   * @returns {Point | undefined}
   */ function point(node) {
        const point = node && node.position && node.position[type] || {};
        if (typeof point.line === 'number' && point.line > 0 && typeof point.column === 'number' && point.column > 0) {
            return {
                line: point.line,
                column: point.column,
                offset: typeof point.offset === 'number' && point.offset > -1 ? point.offset : undefined
            };
        }
    }
}
function position(node) {
    const start = pointStart(node);
    const end = pointEnd(node);
    if (start && end) {
        return {
            start,
            end
        };
    }
}
}),
"[project]/PREFECT-10/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 */ /**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */ __turbopack_context__.s([
    "stringifyPosition",
    ()=>stringifyPosition
]);
function stringifyPosition(value) {
    // Nothing.
    if (!value || typeof value !== 'object') {
        return '';
    }
    // Node.
    if ('position' in value || 'type' in value) {
        return position(value.position);
    }
    // Position.
    if ('start' in value || 'end' in value) {
        return position(value);
    }
    // Point.
    if ('line' in value || 'column' in value) {
        return point(value);
    }
    // ?
    return '';
}
/**
 * @param {Point | PointLike | null | undefined} point
 * @returns {string}
 */ function point(point) {
    return index(point && point.line) + ':' + index(point && point.column);
}
/**
 * @param {Position | PositionLike | null | undefined} pos
 * @returns {string}
 */ function position(pos) {
    return point(pos && pos.start) + '-' + point(pos && pos.end);
}
/**
 * @param {number | null | undefined} value
 * @returns {number}
 */ function index(value) {
    return value && typeof value === 'number' ? value : 1;
}
}),
"[project]/PREFECT-10/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */ /**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 *
 * @typedef Options
 *   Configuration.
 * @property {Array<Node> | null | undefined} [ancestors]
 *   Stack of (inclusive) ancestor nodes surrounding the message (optional).
 * @property {Error | null | undefined} [cause]
 *   Original error cause of the message (optional).
 * @property {Point | Position | null | undefined} [place]
 *   Place of message (optional).
 * @property {string | null | undefined} [ruleId]
 *   Category of message (optional, example: `'my-rule'`).
 * @property {string | null | undefined} [source]
 *   Namespace of who sent the message (optional, example: `'my-package'`).
 */ __turbopack_context__.s([
    "VFileMessage",
    ()=>VFileMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)");
;
class VFileMessage extends Error {
    /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */ // eslint-disable-next-line complexity
    constructor(causeOrReason, optionsOrParentOrPlace, origin){
        super();
        if (typeof optionsOrParentOrPlace === 'string') {
            origin = optionsOrParentOrPlace;
            optionsOrParentOrPlace = undefined;
        }
        /** @type {string} */ let reason = '';
        /** @type {Options} */ let options = {};
        let legacyCause = false;
        if (optionsOrParentOrPlace) {
            // Point.
            if ('line' in optionsOrParentOrPlace && 'column' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('start' in optionsOrParentOrPlace && 'end' in optionsOrParentOrPlace) {
                options = {
                    place: optionsOrParentOrPlace
                };
            } else if ('type' in optionsOrParentOrPlace) {
                options = {
                    ancestors: [
                        optionsOrParentOrPlace
                    ],
                    place: optionsOrParentOrPlace.position
                };
            } else {
                options = {
                    ...optionsOrParentOrPlace
                };
            }
        }
        if (typeof causeOrReason === 'string') {
            reason = causeOrReason;
        } else if (!options.cause && causeOrReason) {
            legacyCause = true;
            reason = causeOrReason.message;
            options.cause = causeOrReason;
        }
        if (!options.ruleId && !options.source && typeof origin === 'string') {
            const index = origin.indexOf(':');
            if (index === -1) {
                options.ruleId = origin;
            } else {
                options.source = origin.slice(0, index);
                options.ruleId = origin.slice(index + 1);
            }
        }
        if (!options.place && options.ancestors && options.ancestors) {
            const parent = options.ancestors[options.ancestors.length - 1];
            if (parent) {
                options.place = parent.position;
            }
        }
        const start = options.place && 'start' in options.place ? options.place.start : options.place;
        /* eslint-disable no-unused-expressions */ /**
     * Stack of ancestor nodes surrounding the message.
     *
     * @type {Array<Node> | undefined}
     */ this.ancestors = options.ancestors || undefined;
        /**
     * Original error cause of the message.
     *
     * @type {Error | undefined}
     */ this.cause = options.cause || undefined;
        /**
     * Starting column of message.
     *
     * @type {number | undefined}
     */ this.column = start ? start.column : undefined;
        /**
     * State of problem.
     *
     * * `true` — error, file not usable
     * * `false` — warning, change may be needed
     * * `undefined` — change likely not needed
     *
     * @type {boolean | null | undefined}
     */ this.fatal = undefined;
        /**
     * Path of a file (used throughout the `VFile` ecosystem).
     *
     * @type {string | undefined}
     */ this.file;
        // Field from `Error`.
        /**
     * Reason for message.
     *
     * @type {string}
     */ this.message = reason;
        /**
     * Starting line of error.
     *
     * @type {number | undefined}
     */ this.line = start ? start.line : undefined;
        // Field from `Error`.
        /**
     * Serialized positional info of message.
     *
     * On normal errors, this would be something like `ParseError`, buit in
     * `VFile` messages we use this space to show where an error happened.
     */ this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])(options.place) || '1:1';
        /**
     * Place of message.
     *
     * @type {Point | Position | undefined}
     */ this.place = options.place || undefined;
        /**
     * Reason for message, should use markdown.
     *
     * @type {string}
     */ this.reason = this.message;
        /**
     * Category of message (example: `'my-rule'`).
     *
     * @type {string | undefined}
     */ this.ruleId = options.ruleId || undefined;
        /**
     * Namespace of message (example: `'my-package'`).
     *
     * @type {string | undefined}
     */ this.source = options.source || undefined;
        // Field from `Error`.
        /**
     * Stack of message.
     *
     * This is used by normal errors to show where something happened in
     * programming code, irrelevant for `VFile` messages,
     *
     * @type {string}
     */ this.stack = legacyCause && options.cause && typeof options.cause.stack === 'string' ? options.cause.stack : '';
        // The following fields are “well known”.
        // Not standard.
        // Feel free to add other non-standard fields to your messages.
        /**
     * Specify the source value that’s being reported, which is deemed
     * incorrect.
     *
     * @type {string | undefined}
     */ this.actual;
        /**
     * Suggest acceptable values that can be used instead of `actual`.
     *
     * @type {Array<string> | undefined}
     */ this.expected;
        /**
     * Long form description of the message (you should use markdown).
     *
     * @type {string | undefined}
     */ this.note;
        /**
     * Link to docs for the message.
     *
     * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
     * > to `new URL(x)`.
     *
     * @type {string | undefined}
     */ this.url;
    /* eslint-enable no-unused-expressions */ }
}
VFileMessage.prototype.file = '';
VFileMessage.prototype.name = '';
VFileMessage.prototype.reason = '';
VFileMessage.prototype.message = '';
VFileMessage.prototype.stack = '';
VFileMessage.prototype.column = undefined;
VFileMessage.prototype.line = undefined;
VFileMessage.prototype.ancestors = undefined;
VFileMessage.prototype.cause = undefined;
VFileMessage.prototype.fatal = undefined;
VFileMessage.prototype.place = undefined;
VFileMessage.prototype.ruleId = undefined;
VFileMessage.prototype.source = undefined;
}),
"[project]/PREFECT-10/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Identifier, Literal, MemberExpression} from 'estree'
 * @import {Jsx, JsxDev, Options, Props} from 'hast-util-to-jsx-runtime'
 * @import {Element, Nodes, Parents, Root, Text} from 'hast'
 * @import {MdxFlowExpressionHast, MdxTextExpressionHast} from 'mdast-util-mdx-expression'
 * @import {MdxJsxFlowElementHast, MdxJsxTextElementHast} from 'mdast-util-mdx-jsx'
 * @import {MdxjsEsmHast} from 'mdast-util-mdxjs-esm'
 * @import {Position} from 'unist'
 * @import {Child, Create, Field, JsxElement, State, Style} from './types.js'
 */ __turbopack_context__.s([
    "toJsxRuntime",
    ()=>toJsxRuntime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/comma-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/estree-util-is-identifier-name/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/hast-util-whitespace/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/find.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/lib/hast-to-react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/property-information/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/space-separated-tokens/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/style-to-js/cjs/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// To do: next major: `Object.hasOwn`.
const own = {}.hasOwnProperty;
/** @type {Map<string, number>} */ const emptyMap = new Map();
const cap = /[A-Z]/g;
// `react-dom` triggers a warning for *any* white space in tables.
// To follow GFM, `mdast-util-to-hast` injects line endings between elements.
// Other tools might do so too, but they don’t do here, so we remove all of
// that.
// See: <https://github.com/facebook/react/pull/7081>.
// See: <https://github.com/facebook/react/pull/7515>.
// See: <https://github.com/remarkjs/remark-react/issues/64>.
// See: <https://github.com/rehypejs/rehype-react/pull/29>.
// See: <https://github.com/rehypejs/rehype-react/pull/32>.
// See: <https://github.com/rehypejs/rehype-react/pull/45>.
const tableElements = new Set([
    'table',
    'tbody',
    'thead',
    'tfoot',
    'tr'
]);
const tableCellElement = new Set([
    'td',
    'th'
]);
const docs = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function toJsxRuntime(tree, options) {
    if (!options || options.Fragment === undefined) {
        throw new TypeError('Expected `Fragment` in options');
    }
    const filePath = options.filePath || undefined;
    /** @type {Create} */ let create;
    if (options.development) {
        if (typeof options.jsxDEV !== 'function') {
            throw new TypeError('Expected `jsxDEV` in options when `development: true`');
        }
        create = developmentCreate(filePath, options.jsxDEV);
    } else {
        if (typeof options.jsx !== 'function') {
            throw new TypeError('Expected `jsx` in production options');
        }
        if (typeof options.jsxs !== 'function') {
            throw new TypeError('Expected `jsxs` in production options');
        }
        create = productionCreate(filePath, options.jsx, options.jsxs);
    }
    /** @type {State} */ const state = {
        Fragment: options.Fragment,
        ancestors: [],
        components: options.components || {},
        create,
        elementAttributeNameCase: options.elementAttributeNameCase || 'react',
        evaluater: options.createEvaluater ? options.createEvaluater() : undefined,
        filePath,
        ignoreInvalidStyle: options.ignoreInvalidStyle || false,
        passKeys: options.passKeys !== false,
        passNode: options.passNode || false,
        schema: options.space === 'svg' ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"] : __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["html"],
        stylePropertyNameCase: options.stylePropertyNameCase || 'dom',
        tableCellAlignToStyle: options.tableCellAlignToStyle !== false
    };
    const result = one(state, tree, undefined);
    // JSX element.
    if (result && typeof result !== 'string') {
        return result;
    }
    // Text node or something that turned into nothing.
    return state.create(tree, state.Fragment, {
        children: result || undefined
    }, undefined);
}
/**
 * Transform a node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Nodes} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function one(state, node, key) {
    if (node.type === 'element') {
        return element(state, node, key);
    }
    if (node.type === 'mdxFlowExpression' || node.type === 'mdxTextExpression') {
        return mdxExpression(state, node);
    }
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
        return mdxJsxElement(state, node, key);
    }
    if (node.type === 'mdxjsEsm') {
        return mdxEsm(state, node);
    }
    if (node.type === 'root') {
        return root(state, node, key);
    }
    if (node.type === 'text') {
        return text(state, node);
    }
}
/**
 * Handle element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function element(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.tagName.toLowerCase() === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = findComponentFromName(state, node.tagName, false);
    const props = createElementProps(state, node);
    let children = createChildren(state, node);
    if (tableElements.has(node.tagName)) {
        children = children.filter(function(child) {
            return typeof child === 'string' ? !(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$hast$2d$util$2d$whitespace$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["whitespace"])(child) : true;
        });
    }
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle MDX expression.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxFlowExpressionHast | MdxTextExpressionHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxExpression(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        const program = node.data.estree;
        const expression = program.body[0];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
        // Assume result is a child.
        return state.evaluater.evaluateExpression(expression.expression);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX ESM.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxjsEsmHast} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxEsm(state, node) {
    if (node.data && node.data.estree && state.evaluater) {
        // Assume result is a child.
        return state.evaluater.evaluateProgram(node.data.estree);
    }
    crashEstree(state, node.position);
}
/**
 * Handle MDX JSX.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function mdxJsxElement(state, node, key) {
    const parentSchema = state.schema;
    let schema = parentSchema;
    if (node.name === 'svg' && parentSchema.space === 'html') {
        schema = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["svg"];
        state.schema = schema;
    }
    state.ancestors.push(node);
    const type = node.name === null ? state.Fragment : findComponentFromName(state, node.name, true);
    const props = createJsxElementProps(state, node);
    const children = createChildren(state, node);
    addNode(state, props, type, node);
    addChildren(props, children);
    // Restore.
    state.ancestors.pop();
    state.schema = parentSchema;
    return state.create(node, type, props, key);
}
/**
 * Handle root.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Root} node
 *   Current node.
 * @param {string | undefined} key
 *   Key.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function root(state, node, key) {
    /** @type {Props} */ const props = {};
    addChildren(props, createChildren(state, node));
    return state.create(node, state.Fragment, props, key);
}
/**
 * Handle text.
 *
 * @param {State} _
 *   Info passed around.
 * @param {Text} node
 *   Current node.
 * @returns {Child | undefined}
 *   Child, optional.
 */ function text(_, node) {
    return node.value;
}
/**
 * Add `node` to props.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Props} props
 *   Props.
 * @param {unknown} type
 *   Type.
 * @param {Element | MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Node.
 * @returns {undefined}
 *   Nothing.
 */ function addNode(state, props, type, node) {
    // If this is swapped out for a component:
    if (typeof type !== 'string' && type !== state.Fragment && state.passNode) {
        props.node = node;
    }
}
/**
 * Add children to props.
 *
 * @param {Props} props
 *   Props.
 * @param {Array<Child>} children
 *   Children.
 * @returns {undefined}
 *   Nothing.
 */ function addChildren(props, children) {
    if (children.length > 0) {
        const value = children.length > 1 ? children : children[0];
        if (value) {
            props.children = value;
        }
    }
}
/**
 * @param {string | undefined} _
 *   Path to file.
 * @param {Jsx} jsx
 *   Dynamic.
 * @param {Jsx} jsxs
 *   Static.
 * @returns {Create}
 *   Create a production element.
 */ function productionCreate(_, jsx, jsxs) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(_, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const fn = isStaticChildren ? jsxs : jsx;
        return key ? fn(type, props, key) : fn(type, props);
    }
}
/**
 * @param {string | undefined} filePath
 *   Path to file.
 * @param {JsxDev} jsxDEV
 *   Development.
 * @returns {Create}
 *   Create a development element.
 */ function developmentCreate(filePath, jsxDEV) {
    return create;
    //TURBOPACK unreachable
    ;
    /** @type {Create} */ function create(node, type, props, key) {
        // Only an array when there are 2 or more children.
        const isStaticChildren = Array.isArray(props.children);
        const point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointStart"])(node);
        return jsxDEV(type, props, key, isStaticChildren, {
            columnNumber: point ? point.column - 1 : undefined,
            fileName: filePath,
            lineNumber: point ? point.line : undefined
        }, undefined);
    }
}
/**
 * Create props from an element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Element} node
 *   Current element.
 * @returns {Props}
 *   Props.
 */ function createElementProps(state, node) {
    /** @type {Props} */ const props = {};
    /** @type {string | undefined} */ let alignValue;
    /** @type {string} */ let prop;
    for(prop in node.properties){
        if (prop !== 'children' && own.call(node.properties, prop)) {
            const result = createProperty(state, prop, node.properties[prop]);
            if (result) {
                const [key, value] = result;
                if (state.tableCellAlignToStyle && key === 'align' && typeof value === 'string' && tableCellElement.has(node.tagName)) {
                    alignValue = value;
                } else {
                    props[key] = value;
                }
            }
        }
    }
    if (alignValue) {
        // Assume style is an object.
        const style = props.style || (props.style = {});
        style[state.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = alignValue;
    }
    return props;
}
/**
 * Create props from a JSX element.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdxJsxFlowElementHast | MdxJsxTextElementHast} node
 *   Current JSX element.
 * @returns {Props}
 *   Props.
 */ function createJsxElementProps(state, node) {
    /** @type {Props} */ const props = {};
    for (const attribute of node.attributes){
        if (attribute.type === 'mdxJsxExpressionAttribute') {
            if (attribute.data && attribute.data.estree && state.evaluater) {
                const program = attribute.data.estree;
                const expression = program.body[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                const objectExpression = expression.expression;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(objectExpression.type === 'ObjectExpression');
                const property = objectExpression.properties[0];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(property.type === 'SpreadElement');
                Object.assign(props, state.evaluater.evaluateExpression(property.argument));
            } else {
                crashEstree(state, node.position);
            }
        } else {
            // For JSX, the author is responsible of passing in the correct values.
            const name = attribute.name;
            /** @type {unknown} */ let value;
            if (attribute.value && typeof attribute.value === 'object') {
                if (attribute.value.data && attribute.value.data.estree && state.evaluater) {
                    const program = attribute.value.data.estree;
                    const expression = program.body[0];
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(expression.type === 'ExpressionStatement');
                    value = state.evaluater.evaluateExpression(expression.expression);
                } else {
                    crashEstree(state, node.position);
                }
            } else {
                value = attribute.value === null ? true : attribute.value;
            }
            // Assume a prop.
            props[name] = value;
        }
    }
    return props;
}
/**
 * Create children.
 *
 * @param {State} state
 *   Info passed around.
 * @param {Parents} node
 *   Current element.
 * @returns {Array<Child>}
 *   Children.
 */ function createChildren(state, node) {
    /** @type {Array<Child>} */ const children = [];
    let index = -1;
    /** @type {Map<string, number>} */ // Note: test this when Solid doesn’t want to merge my upcoming PR.
    /* c8 ignore next */ const countsByName = state.passKeys ? new Map() : emptyMap;
    while(++index < node.children.length){
        const child = node.children[index];
        /** @type {string | undefined} */ let key;
        if (state.passKeys) {
            const name = child.type === 'element' ? child.tagName : child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement' ? child.name : undefined;
            if (name) {
                const count = countsByName.get(name) || 0;
                key = name + '-' + count;
                countsByName.set(name, count + 1);
            }
        }
        const result = one(state, child, key);
        if (result !== undefined) children.push(result);
    }
    return children;
}
/**
 * Handle a property.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} prop
 *   Key.
 * @param {Array<number | string> | boolean | number | string | null | undefined} value
 *   hast property value.
 * @returns {Field | undefined}
 *   Field for runtime, optional.
 */ function createProperty(state, prop, value) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$find$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"])(state.schema, prop);
    // Ignore nullish and `NaN` values.
    if (value === null || value === undefined || typeof value === 'number' && Number.isNaN(value)) {
        return;
    }
    if (Array.isArray(value)) {
        // Accept `array`.
        // Most props are space-separated.
        value = info.commaSeparated ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$comma$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$space$2d$separated$2d$tokens$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])(value);
    }
    // React only accepts `style` as object.
    if (info.property === 'style') {
        let styleObject = typeof value === 'object' ? value : parseStyle(state, String(value));
        if (state.stylePropertyNameCase === 'css') {
            styleObject = transformStylesToCssCasing(styleObject);
        }
        return [
            'style',
            styleObject
        ];
    }
    return [
        state.elementAttributeNameCase === 'react' && info.space ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$property$2d$information$2f$lib$2f$hast$2d$to$2d$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hastToReact"][info.property] || info.property : info.attribute,
        value
    ];
}
/**
 * Parse a CSS declaration to an object.
 *
 * @param {State} state
 *   Info passed around.
 * @param {string} value
 *   CSS declarations.
 * @returns {Style}
 *   Properties.
 * @throws
 *   Throws `VFileMessage` when CSS cannot be parsed.
 */ function parseStyle(state, value) {
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$style$2d$to$2d$js$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value, {
            reactCompat: true
        });
    } catch (error) {
        if (state.ignoreInvalidStyle) {
            return {};
        }
        const cause = error;
        const message = new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot parse `style` attribute', {
            ancestors: state.ancestors,
            cause,
            ruleId: 'style',
            source: 'hast-util-to-jsx-runtime'
        });
        message.file = state.filePath || undefined;
        message.url = docs + '#cannot-parse-style-attribute';
        throw message;
    }
}
/**
 * Create a JSX name from a string.
 *
 * @param {State} state
 *   To do.
 * @param {string} name
 *   Name.
 * @param {boolean} allowExpression
 *   Allow member expressions and identifiers.
 * @returns {unknown}
 *   To do.
 */ function findComponentFromName(state, name, allowExpression) {
    /** @type {Identifier | Literal | MemberExpression} */ let result;
    if (!allowExpression) {
        result = {
            type: 'Literal',
            value: name
        };
    } else if (name.includes('.')) {
        const identifiers = name.split('.');
        let index = -1;
        /** @type {Identifier | Literal | MemberExpression | undefined} */ let node;
        while(++index < identifiers.length){
            /** @type {Identifier | Literal} */ const prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(identifiers[index]) ? {
                type: 'Identifier',
                name: identifiers[index]
            } : {
                type: 'Literal',
                value: identifiers[index]
            };
            node = node ? {
                type: 'MemberExpression',
                object: node,
                property: prop,
                computed: Boolean(index && prop.type === 'Literal'),
                optional: false
            } : prop;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'always a result');
        result = node;
    } else {
        result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$estree$2d$util$2d$is$2d$identifier$2d$name$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["name"])(name) && !/^[a-z]/.test(name) ? {
            type: 'Identifier',
            name
        } : {
            type: 'Literal',
            value: name
        };
    }
    // Only literals can be passed in `components` currently.
    // No identifiers / member expressions.
    if (result.type === 'Literal') {
        const name = result.value;
        return own.call(state.components, name) ? state.components[name] : name;
    }
    // Assume component.
    if (state.evaluater) {
        return state.evaluater.evaluateExpression(result);
    }
    crashEstree(state);
}
/**
 * @param {State} state
 * @param {Position | undefined} [place]
 * @returns {never}
 */ function crashEstree(state, place) {
    const message = new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"]('Cannot handle MDX estrees without `createEvaluater`', {
        ancestors: state.ancestors,
        place,
        ruleId: 'mdx-estree',
        source: 'hast-util-to-jsx-runtime'
    });
    message.file = state.filePath || undefined;
    message.url = docs + '#cannot-handle-mdx-estrees-without-createevaluater';
    throw message;
}
/**
 * Transform a DOM casing style object to a CSS casing style object.
 *
 * @param {Style} domCasing
 * @returns {Style}
 */ function transformStylesToCssCasing(domCasing) {
    /** @type {Style} */ const cssCasing = {};
    /** @type {string} */ let from;
    for(from in domCasing){
        if (own.call(domCasing, from)) {
            cssCasing[transformStyleToCssCasing(from)] = domCasing[from];
        }
    }
    return cssCasing;
}
/**
 * Transform a DOM casing style field to a CSS casing style field.
 *
 * @param {string} from
 * @returns {string}
 */ function transformStyleToCssCasing(from) {
    let to = from.replace(cap, toDash);
    // Handle `ms-xxx` -> `-ms-xxx`.
    if (to.slice(0, 3) === 'ms-') to = '-' + to;
    return to;
}
/**
 * Make `$0` dash cased.
 *
 * @param {string} $0
 *   Capitalized ASCII leter.
 * @returns {string}
 *   Dash and lower letter.
 */ function toDash($0) {
    return '-' + $0.toLowerCase();
}
}),
"[project]/PREFECT-10/node_modules/html-url-attributes/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * HTML URL properties.
 *
 * Each key is a property name and each value is a list of tag names it applies
 * to or `null` if it applies to all elements.
 *
 * @type {Record<string, Array<string> | null>}
 */ __turbopack_context__.s([
    "urlAttributes",
    ()=>urlAttributes
]);
const urlAttributes = {
    action: [
        'form'
    ],
    cite: [
        'blockquote',
        'del',
        'ins',
        'q'
    ],
    data: [
        'object'
    ],
    formAction: [
        'button',
        'input'
    ],
    href: [
        'a',
        'area',
        'base',
        'link'
    ],
    icon: [
        'menuitem'
    ],
    itemId: null,
    manifest: [
        'html'
    ],
    ping: [
        'a',
        'area'
    ],
    poster: [
        'video'
    ],
    src: [
        'audio',
        'embed',
        'iframe',
        'img',
        'input',
        'script',
        'source',
        'track',
        'video'
    ]
};
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-string/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('mdast').Nodes} Nodes
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [includeImageAlt=true]
 *   Whether to use `alt` for `image`s (default: `true`).
 * @property {boolean | null | undefined} [includeHtml=true]
 *   Whether to use `value` of HTML (default: `true`).
 */ /** @type {Options} */ __turbopack_context__.s([
    "toString",
    ()=>toString
]);
const emptyOptions = {};
function toString(value, options) {
    const settings = options || emptyOptions;
    const includeImageAlt = typeof settings.includeImageAlt === 'boolean' ? settings.includeImageAlt : true;
    const includeHtml = typeof settings.includeHtml === 'boolean' ? settings.includeHtml : true;
    return one(value, includeImageAlt, includeHtml);
}
/**
 * One node or several nodes.
 *
 * @param {unknown} value
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized node.
 */ function one(value, includeImageAlt, includeHtml) {
    if (node(value)) {
        if ('value' in value) {
            return value.type === 'html' && !includeHtml ? '' : value.value;
        }
        if (includeImageAlt && 'alt' in value && value.alt) {
            return value.alt;
        }
        if ('children' in value) {
            return all(value.children, includeImageAlt, includeHtml);
        }
    }
    if (Array.isArray(value)) {
        return all(value, includeImageAlt, includeHtml);
    }
    return '';
}
/**
 * Serialize a list of nodes.
 *
 * @param {Array<unknown>} values
 *   Thing to serialize.
 * @param {boolean} includeImageAlt
 *   Include image `alt`s.
 * @param {boolean} includeHtml
 *   Include HTML.
 * @returns {string}
 *   Serialized nodes.
 */ function all(values, includeImageAlt, includeHtml) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    while(++index < values.length){
        result[index] = one(values[index], includeImageAlt, includeHtml);
    }
    return result.join('');
}
/**
 * Check if `value` looks like a node.
 *
 * @param {unknown} value
 *   Thing.
 * @returns {value is Nodes}
 *   Whether `value` is a node.
 */ function node(value) {
    return Boolean(value && typeof value === 'object');
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Parsing markdown comes with a couple of constants, such as minimum or maximum
 * sizes of certain sequences.
 * Additionally, there are a couple symbols used inside micromark.
 * These are all defined here, but compiled away by scripts.
 */ __turbopack_context__.s([
    "constants",
    ()=>constants
]);
const constants = {
    attentionSideAfter: 2,
    attentionSideBefore: 1,
    atxHeadingOpeningFenceSizeMax: 6,
    autolinkDomainSizeMax: 63,
    autolinkSchemeSizeMax: 32,
    cdataOpeningString: 'CDATA[',
    characterGroupPunctuation: 2,
    characterGroupWhitespace: 1,
    characterReferenceDecimalSizeMax: 7,
    characterReferenceHexadecimalSizeMax: 6,
    characterReferenceNamedSizeMax: 31,
    codeFencedSequenceSizeMin: 3,
    contentTypeContent: 'content',
    contentTypeDocument: 'document',
    contentTypeFlow: 'flow',
    contentTypeString: 'string',
    contentTypeText: 'text',
    hardBreakPrefixSizeMin: 2,
    htmlBasic: 6,
    htmlCdata: 5,
    htmlComment: 2,
    htmlComplete: 7,
    htmlDeclaration: 4,
    htmlInstruction: 3,
    htmlRawSizeMax: 8,
    htmlRaw: 1,
    linkResourceDestinationBalanceMax: 32,
    linkReferenceSizeMax: 999,
    listItemValueSizeMax: 10,
    numericBaseDecimal: 10,
    numericBaseHexadecimal: 0x10,
    tabSize: 4,
    thematicBreakMarkerCountMin: 3,
    v8MaxSafeChunkSize: 10_000 // V8 (and potentially others) have problems injecting giant arrays into other arrays, hence we operate in chunks.
};
}),
"[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Character codes.
 *
 * This module is compiled away!
 *
 * micromark works based on character codes.
 * This module contains constants for the ASCII block and the replacement
 * character.
 * A couple of them are handled in a special way, such as the line endings
 * (CR, LF, and CR+LF, commonly known as end-of-line: EOLs), the tab (horizontal
 * tab) and its expansion based on what column it’s at (virtual space),
 * and the end-of-file (eof) character.
 * As values are preprocessed before handling them, the actual characters LF,
 * CR, HT, and NUL (which is present as the replacement character), are
 * guaranteed to not exist.
 *
 * Unicode basic latin block.
 */ __turbopack_context__.s([
    "codes",
    ()=>codes
]);
const codes = {
    carriageReturn: -5,
    lineFeed: -4,
    carriageReturnLineFeed: -3,
    horizontalTab: -2,
    virtualSpace: -1,
    eof: null,
    nul: 0,
    soh: 1,
    stx: 2,
    etx: 3,
    eot: 4,
    enq: 5,
    ack: 6,
    bel: 7,
    bs: 8,
    ht: 9,
    lf: 10,
    vt: 11,
    ff: 12,
    cr: 13,
    so: 14,
    si: 15,
    dle: 16,
    dc1: 17,
    dc2: 18,
    dc3: 19,
    dc4: 20,
    nak: 21,
    syn: 22,
    etb: 23,
    can: 24,
    em: 25,
    sub: 26,
    esc: 27,
    fs: 28,
    gs: 29,
    rs: 30,
    us: 31,
    space: 32,
    exclamationMark: 33,
    quotationMark: 34,
    numberSign: 35,
    dollarSign: 36,
    percentSign: 37,
    ampersand: 38,
    apostrophe: 39,
    leftParenthesis: 40,
    rightParenthesis: 41,
    asterisk: 42,
    plusSign: 43,
    comma: 44,
    dash: 45,
    dot: 46,
    slash: 47,
    digit0: 48,
    digit1: 49,
    digit2: 50,
    digit3: 51,
    digit4: 52,
    digit5: 53,
    digit6: 54,
    digit7: 55,
    digit8: 56,
    digit9: 57,
    colon: 58,
    semicolon: 59,
    lessThan: 60,
    equalsTo: 61,
    greaterThan: 62,
    questionMark: 63,
    atSign: 64,
    uppercaseA: 65,
    uppercaseB: 66,
    uppercaseC: 67,
    uppercaseD: 68,
    uppercaseE: 69,
    uppercaseF: 70,
    uppercaseG: 71,
    uppercaseH: 72,
    uppercaseI: 73,
    uppercaseJ: 74,
    uppercaseK: 75,
    uppercaseL: 76,
    uppercaseM: 77,
    uppercaseN: 78,
    uppercaseO: 79,
    uppercaseP: 80,
    uppercaseQ: 81,
    uppercaseR: 82,
    uppercaseS: 83,
    uppercaseT: 84,
    uppercaseU: 85,
    uppercaseV: 86,
    uppercaseW: 87,
    uppercaseX: 88,
    uppercaseY: 89,
    uppercaseZ: 90,
    leftSquareBracket: 91,
    backslash: 92,
    rightSquareBracket: 93,
    caret: 94,
    underscore: 95,
    graveAccent: 96,
    lowercaseA: 97,
    lowercaseB: 98,
    lowercaseC: 99,
    lowercaseD: 100,
    lowercaseE: 101,
    lowercaseF: 102,
    lowercaseG: 103,
    lowercaseH: 104,
    lowercaseI: 105,
    lowercaseJ: 106,
    lowercaseK: 107,
    lowercaseL: 108,
    lowercaseM: 109,
    lowercaseN: 110,
    lowercaseO: 111,
    lowercaseP: 112,
    lowercaseQ: 113,
    lowercaseR: 114,
    lowercaseS: 115,
    lowercaseT: 116,
    lowercaseU: 117,
    lowercaseV: 118,
    lowercaseW: 119,
    lowercaseX: 120,
    lowercaseY: 121,
    lowercaseZ: 122,
    leftCurlyBrace: 123,
    verticalBar: 124,
    rightCurlyBrace: 125,
    tilde: 126,
    del: 127,
    // Unicode Specials block.
    byteOrderMarker: 65_279,
    // Unicode Specials block.
    replacementCharacter: 65_533 // `�`
};
}),
"[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * Here is the list of all types of tokens exposed by micromark, with a short
 * explanation of what they include and where they are found.
 * In picking names, generally, the rule is to be as explicit as possible
 * instead of reusing names.
 * For example, there is a `definitionDestination` and a `resourceDestination`,
 * instead of one shared name.
 */ // Note: when changing the next record, you must also change `TokenTypeMap`
// in `micromark-util-types/index.d.ts`.
__turbopack_context__.s([
    "types",
    ()=>types
]);
const types = {
    // Generic type for data, such as in a title, a destination, etc.
    data: 'data',
    // Generic type for syntactic whitespace (tabs, virtual spaces, spaces).
    // Such as, between a fenced code fence and an info string.
    whitespace: 'whitespace',
    // Generic type for line endings (line feed, carriage return, carriage return +
    // line feed).
    lineEnding: 'lineEnding',
    // A line ending, but ending a blank line.
    lineEndingBlank: 'lineEndingBlank',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the start of a
    // line.
    linePrefix: 'linePrefix',
    // Generic type for whitespace (tabs, virtual spaces, spaces) at the end of a
    // line.
    lineSuffix: 'lineSuffix',
    // Whole ATX heading:
    //
    // ```markdown
    // #
    // ## Alpha
    // ### Bravo ###
    // ```
    //
    // Includes `atxHeadingSequence`, `whitespace`, `atxHeadingText`.
    atxHeading: 'atxHeading',
    // Sequence of number signs in an ATX heading (`###`).
    atxHeadingSequence: 'atxHeadingSequence',
    // Content in an ATX heading (`alpha`).
    // Includes text.
    atxHeadingText: 'atxHeadingText',
    // Whole autolink (`<https://example.com>` or `<admin@example.com>`)
    // Includes `autolinkMarker` and `autolinkProtocol` or `autolinkEmail`.
    autolink: 'autolink',
    // Email autolink w/o markers (`admin@example.com`)
    autolinkEmail: 'autolinkEmail',
    // Marker around an `autolinkProtocol` or `autolinkEmail` (`<` or `>`).
    autolinkMarker: 'autolinkMarker',
    // Protocol autolink w/o markers (`https://example.com`)
    autolinkProtocol: 'autolinkProtocol',
    // A whole character escape (`\-`).
    // Includes `escapeMarker` and `characterEscapeValue`.
    characterEscape: 'characterEscape',
    // The escaped character (`-`).
    characterEscapeValue: 'characterEscapeValue',
    // A whole character reference (`&amp;`, `&#8800;`, or `&#x1D306;`).
    // Includes `characterReferenceMarker`, an optional
    // `characterReferenceMarkerNumeric`, in which case an optional
    // `characterReferenceMarkerHexadecimal`, and a `characterReferenceValue`.
    characterReference: 'characterReference',
    // The start or end marker (`&` or `;`).
    characterReferenceMarker: 'characterReferenceMarker',
    // Mark reference as numeric (`#`).
    characterReferenceMarkerNumeric: 'characterReferenceMarkerNumeric',
    // Mark reference as numeric (`x` or `X`).
    characterReferenceMarkerHexadecimal: 'characterReferenceMarkerHexadecimal',
    // Value of character reference w/o markers (`amp`, `8800`, or `1D306`).
    characterReferenceValue: 'characterReferenceValue',
    // Whole fenced code:
    //
    // ````markdown
    // ```js
    // alert(1)
    // ```
    // ````
    codeFenced: 'codeFenced',
    // A fenced code fence, including whitespace, sequence, info, and meta
    // (` ```js `).
    codeFencedFence: 'codeFencedFence',
    // Sequence of grave accent or tilde characters (` ``` `) in a fence.
    codeFencedFenceSequence: 'codeFencedFenceSequence',
    // Info word (`js`) in a fence.
    // Includes string.
    codeFencedFenceInfo: 'codeFencedFenceInfo',
    // Meta words (`highlight="1"`) in a fence.
    // Includes string.
    codeFencedFenceMeta: 'codeFencedFenceMeta',
    // A line of code.
    codeFlowValue: 'codeFlowValue',
    // Whole indented code:
    //
    // ```markdown
    //     alert(1)
    // ```
    //
    // Includes `lineEnding`, `linePrefix`, and `codeFlowValue`.
    codeIndented: 'codeIndented',
    // A text code (``` `alpha` ```).
    // Includes `codeTextSequence`, `codeTextData`, `lineEnding`, and can include
    // `codeTextPadding`.
    codeText: 'codeText',
    codeTextData: 'codeTextData',
    // A space or line ending right after or before a tick.
    codeTextPadding: 'codeTextPadding',
    // A text code fence (` `` `).
    codeTextSequence: 'codeTextSequence',
    // Whole content:
    //
    // ```markdown
    // [a]: b
    // c
    // =
    // d
    // ```
    //
    // Includes `paragraph` and `definition`.
    content: 'content',
    // Whole definition:
    //
    // ```markdown
    // [micromark]: https://github.com/micromark/micromark
    // ```
    //
    // Includes `definitionLabel`, `definitionMarker`, `whitespace`,
    // `definitionDestination`, and optionally `lineEnding` and `definitionTitle`.
    definition: 'definition',
    // Destination of a definition (`https://github.com/micromark/micromark` or
    // `<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteral` or `definitionDestinationRaw`.
    definitionDestination: 'definitionDestination',
    // Enclosed destination of a definition
    // (`<https://github.com/micromark/micromark>`).
    // Includes `definitionDestinationLiteralMarker` and optionally
    // `definitionDestinationString`.
    definitionDestinationLiteral: 'definitionDestinationLiteral',
    // Markers of an enclosed definition destination (`<` or `>`).
    definitionDestinationLiteralMarker: 'definitionDestinationLiteralMarker',
    // Unenclosed destination of a definition
    // (`https://github.com/micromark/micromark`).
    // Includes `definitionDestinationString`.
    definitionDestinationRaw: 'definitionDestinationRaw',
    // Text in an destination (`https://github.com/micromark/micromark`).
    // Includes string.
    definitionDestinationString: 'definitionDestinationString',
    // Label of a definition (`[micromark]`).
    // Includes `definitionLabelMarker` and `definitionLabelString`.
    definitionLabel: 'definitionLabel',
    // Markers of a definition label (`[` or `]`).
    definitionLabelMarker: 'definitionLabelMarker',
    // Value of a definition label (`micromark`).
    // Includes string.
    definitionLabelString: 'definitionLabelString',
    // Marker between a label and a destination (`:`).
    definitionMarker: 'definitionMarker',
    // Title of a definition (`"x"`, `'y'`, or `(z)`).
    // Includes `definitionTitleMarker` and optionally `definitionTitleString`.
    definitionTitle: 'definitionTitle',
    // Marker around a title of a definition (`"`, `'`, `(`, or `)`).
    definitionTitleMarker: 'definitionTitleMarker',
    // Data without markers in a title (`z`).
    // Includes string.
    definitionTitleString: 'definitionTitleString',
    // Emphasis (`*alpha*`).
    // Includes `emphasisSequence` and `emphasisText`.
    emphasis: 'emphasis',
    // Sequence of emphasis markers (`*` or `_`).
    emphasisSequence: 'emphasisSequence',
    // Emphasis text (`alpha`).
    // Includes text.
    emphasisText: 'emphasisText',
    // The character escape marker (`\`).
    escapeMarker: 'escapeMarker',
    // A hard break created with a backslash (`\\n`).
    // Note: does not include the line ending.
    hardBreakEscape: 'hardBreakEscape',
    // A hard break created with trailing spaces (`  \n`).
    // Does not include the line ending.
    hardBreakTrailing: 'hardBreakTrailing',
    // Flow HTML:
    //
    // ```markdown
    // <div
    // ```
    //
    // Inlcudes `lineEnding`, `htmlFlowData`.
    htmlFlow: 'htmlFlow',
    htmlFlowData: 'htmlFlowData',
    // HTML in text (the tag in `a <i> b`).
    // Includes `lineEnding`, `htmlTextData`.
    htmlText: 'htmlText',
    htmlTextData: 'htmlTextData',
    // Whole image (`![alpha](bravo)`, `![alpha][bravo]`, `![alpha][]`, or
    // `![alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    image: 'image',
    // Whole link label (`[*alpha*]`).
    // Includes `labelLink` or `labelImage`, `labelText`, and `labelEnd`.
    label: 'label',
    // Text in an label (`*alpha*`).
    // Includes text.
    labelText: 'labelText',
    // Start a link label (`[`).
    // Includes a `labelMarker`.
    labelLink: 'labelLink',
    // Start an image label (`![`).
    // Includes `labelImageMarker` and `labelMarker`.
    labelImage: 'labelImage',
    // Marker of a label (`[` or `]`).
    labelMarker: 'labelMarker',
    // Marker to start an image (`!`).
    labelImageMarker: 'labelImageMarker',
    // End a label (`]`).
    // Includes `labelMarker`.
    labelEnd: 'labelEnd',
    // Whole link (`[alpha](bravo)`, `[alpha][bravo]`, `[alpha][]`, or `[alpha]`).
    // Includes `label` and an optional `resource` or `reference`.
    link: 'link',
    // Whole paragraph:
    //
    // ```markdown
    // alpha
    // bravo.
    // ```
    //
    // Includes text.
    paragraph: 'paragraph',
    // A reference (`[alpha]` or `[]`).
    // Includes `referenceMarker` and an optional `referenceString`.
    reference: 'reference',
    // A reference marker (`[` or `]`).
    referenceMarker: 'referenceMarker',
    // Reference text (`alpha`).
    // Includes string.
    referenceString: 'referenceString',
    // A resource (`(https://example.com "alpha")`).
    // Includes `resourceMarker`, an optional `resourceDestination` with an optional
    // `whitespace` and `resourceTitle`.
    resource: 'resource',
    // A resource destination (`https://example.com`).
    // Includes `resourceDestinationLiteral` or `resourceDestinationRaw`.
    resourceDestination: 'resourceDestination',
    // A literal resource destination (`<https://example.com>`).
    // Includes `resourceDestinationLiteralMarker` and optionally
    // `resourceDestinationString`.
    resourceDestinationLiteral: 'resourceDestinationLiteral',
    // A resource destination marker (`<` or `>`).
    resourceDestinationLiteralMarker: 'resourceDestinationLiteralMarker',
    // A raw resource destination (`https://example.com`).
    // Includes `resourceDestinationString`.
    resourceDestinationRaw: 'resourceDestinationRaw',
    // Resource destination text (`https://example.com`).
    // Includes string.
    resourceDestinationString: 'resourceDestinationString',
    // A resource marker (`(` or `)`).
    resourceMarker: 'resourceMarker',
    // A resource title (`"alpha"`, `'alpha'`, or `(alpha)`).
    // Includes `resourceTitleMarker` and optionally `resourceTitleString`.
    resourceTitle: 'resourceTitle',
    // A resource title marker (`"`, `'`, `(`, or `)`).
    resourceTitleMarker: 'resourceTitleMarker',
    // Resource destination title (`alpha`).
    // Includes string.
    resourceTitleString: 'resourceTitleString',
    // Whole setext heading:
    //
    // ```markdown
    // alpha
    // bravo
    // =====
    // ```
    //
    // Includes `setextHeadingText`, `lineEnding`, `linePrefix`, and
    // `setextHeadingLine`.
    setextHeading: 'setextHeading',
    // Content in a setext heading (`alpha\nbravo`).
    // Includes text.
    setextHeadingText: 'setextHeadingText',
    // Underline in a setext heading, including whitespace suffix (`==`).
    // Includes `setextHeadingLineSequence`.
    setextHeadingLine: 'setextHeadingLine',
    // Sequence of equals or dash characters in underline in a setext heading (`-`).
    setextHeadingLineSequence: 'setextHeadingLineSequence',
    // Strong (`**alpha**`).
    // Includes `strongSequence` and `strongText`.
    strong: 'strong',
    // Sequence of strong markers (`**` or `__`).
    strongSequence: 'strongSequence',
    // Strong text (`alpha`).
    // Includes text.
    strongText: 'strongText',
    // Whole thematic break:
    //
    // ```markdown
    // * * *
    // ```
    //
    // Includes `thematicBreakSequence` and `whitespace`.
    thematicBreak: 'thematicBreak',
    // A sequence of one or more thematic break markers (`***`).
    thematicBreakSequence: 'thematicBreakSequence',
    // Whole block quote:
    //
    // ```markdown
    // > a
    // >
    // > b
    // ```
    //
    // Includes `blockQuotePrefix` and flow.
    blockQuote: 'blockQuote',
    // The `>` or `> ` of a block quote.
    blockQuotePrefix: 'blockQuotePrefix',
    // The `>` of a block quote prefix.
    blockQuoteMarker: 'blockQuoteMarker',
    // The optional ` ` of a block quote prefix.
    blockQuotePrefixWhitespace: 'blockQuotePrefixWhitespace',
    // Whole ordered list:
    //
    // ```markdown
    // 1. a
    //    b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listOrdered: 'listOrdered',
    // Whole unordered list:
    //
    // ```markdown
    // - a
    //   b
    // ```
    //
    // Includes `listItemPrefix`, flow, and optionally  `listItemIndent` on further
    // lines.
    listUnordered: 'listUnordered',
    // The indent of further list item lines.
    listItemIndent: 'listItemIndent',
    // A marker, as in, `*`, `+`, `-`, `.`, or `)`.
    listItemMarker: 'listItemMarker',
    // The thing that starts a list item, such as `1. `.
    // Includes `listItemValue` if ordered, `listItemMarker`, and
    // `listItemPrefixWhitespace` (unless followed by a line ending).
    listItemPrefix: 'listItemPrefix',
    // The whitespace after a marker.
    listItemPrefixWhitespace: 'listItemPrefixWhitespace',
    // The numerical value of an ordered item.
    listItemValue: 'listItemValue',
    // Internal types used for subtokenizers, compiled away
    chunkDocument: 'chunkDocument',
    chunkContent: 'chunkContent',
    chunkFlow: 'chunkFlow',
    chunkText: 'chunkText',
    chunkString: 'chunkString'
};
}),
"[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This module is compiled away!
 *
 * While micromark works based on character codes, this module includes the
 * string versions of ’em.
 * The C0 block, except for LF, CR, HT, and w/ the replacement character added,
 * are available here.
 */ __turbopack_context__.s([
    "values",
    ()=>values
]);
const values = {
    ht: '\t',
    lf: '\n',
    cr: '\r',
    space: ' ',
    exclamationMark: '!',
    quotationMark: '"',
    numberSign: '#',
    dollarSign: '$',
    percentSign: '%',
    ampersand: '&',
    apostrophe: "'",
    leftParenthesis: '(',
    rightParenthesis: ')',
    asterisk: '*',
    plusSign: '+',
    comma: ',',
    dash: '-',
    dot: '.',
    slash: '/',
    digit0: '0',
    digit1: '1',
    digit2: '2',
    digit3: '3',
    digit4: '4',
    digit5: '5',
    digit6: '6',
    digit7: '7',
    digit8: '8',
    digit9: '9',
    colon: ':',
    semicolon: ';',
    lessThan: '<',
    equalsTo: '=',
    greaterThan: '>',
    questionMark: '?',
    atSign: '@',
    uppercaseA: 'A',
    uppercaseB: 'B',
    uppercaseC: 'C',
    uppercaseD: 'D',
    uppercaseE: 'E',
    uppercaseF: 'F',
    uppercaseG: 'G',
    uppercaseH: 'H',
    uppercaseI: 'I',
    uppercaseJ: 'J',
    uppercaseK: 'K',
    uppercaseL: 'L',
    uppercaseM: 'M',
    uppercaseN: 'N',
    uppercaseO: 'O',
    uppercaseP: 'P',
    uppercaseQ: 'Q',
    uppercaseR: 'R',
    uppercaseS: 'S',
    uppercaseT: 'T',
    uppercaseU: 'U',
    uppercaseV: 'V',
    uppercaseW: 'W',
    uppercaseX: 'X',
    uppercaseY: 'Y',
    uppercaseZ: 'Z',
    leftSquareBracket: '[',
    backslash: '\\',
    rightSquareBracket: ']',
    caret: '^',
    underscore: '_',
    graveAccent: '`',
    lowercaseA: 'a',
    lowercaseB: 'b',
    lowercaseC: 'c',
    lowercaseD: 'd',
    lowercaseE: 'e',
    lowercaseF: 'f',
    lowercaseG: 'g',
    lowercaseH: 'h',
    lowercaseI: 'i',
    lowercaseJ: 'j',
    lowercaseK: 'k',
    lowercaseL: 'l',
    lowercaseM: 'm',
    lowercaseN: 'n',
    lowercaseO: 'o',
    lowercaseP: 'p',
    lowercaseQ: 'q',
    lowercaseR: 'r',
    lowercaseS: 's',
    lowercaseT: 't',
    lowercaseU: 'u',
    lowercaseV: 'v',
    lowercaseW: 'w',
    lowercaseX: 'x',
    lowercaseY: 'y',
    lowercaseZ: 'z',
    leftCurlyBrace: '{',
    verticalBar: '|',
    rightCurlyBrace: '}',
    tilde: '~',
    replacementCharacter: '�'
};
}),
"[project]/PREFECT-10/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "push",
    ()=>push,
    "splice",
    ()=>splice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
function splice(list, start, remove, items) {
    const end = list.length;
    let chunkStart = 0;
    /** @type {Array<unknown>} */ let parameters;
    // Make start between zero and `end` (included).
    if (start < 0) {
        start = -start > end ? 0 : end + start;
    } else {
        start = start > end ? end : start;
    }
    remove = remove > 0 ? remove : 0;
    // No need to chunk the items if there’s only a couple (10k) items.
    if (items.length < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize) {
        parameters = Array.from(items);
        parameters.unshift(start, remove);
        // @ts-expect-error Hush, it’s fine.
        list.splice(...parameters);
    } else {
        // Delete `remove` items starting from `start`
        if (remove) list.splice(start, remove);
        // Insert the items in chunks to not cause stack overflows.
        while(chunkStart < items.length){
            parameters = items.slice(chunkStart, chunkStart + __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize);
            parameters.unshift(start, 0);
            // @ts-expect-error Hush, it’s fine.
            list.splice(...parameters);
            chunkStart += __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
            start += __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
        }
    }
}
function push(list, items) {
    if (list.length > 0) {
        splice(list, list.length, 0, items);
        return list;
    }
    return items;
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-combine-extensions/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Extension,
 *   Handles,
 *   HtmlExtension,
 *   NormalizedExtension
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "combineExtensions",
    ()=>combineExtensions,
    "combineHtmlExtensions",
    ()=>combineHtmlExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
;
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
    /** @type {NormalizedExtension} */ const all = {};
    let index = -1;
    while(++index < extensions.length){
        syntaxExtension(all, extensions[index]);
    }
    return all;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {NormalizedExtension} all
 *   Extension to merge into.
 * @param {Extension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function syntaxExtension(all, extension) {
    /** @type {keyof Extension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        /** @type {Record<string, unknown>} */ const left = maybe || (all[hook] = {});
        /** @type {Record<string, unknown> | undefined} */ const right = extension[hook];
        /** @type {string} */ let code;
        if (right) {
            for(code in right){
                if (!hasOwnProperty.call(left, code)) left[code] = [];
                const value = right[code];
                constructs(// @ts-expect-error Looks like a list.
                left[code], Array.isArray(value) ? value : value ? [
                    value
                ] : []);
            }
        }
    }
}
/**
 * Merge `list` into `existing` (both lists of constructs).
 * Mutates `existing`.
 *
 * @param {Array<unknown>} existing
 *   List of constructs to merge into.
 * @param {Array<unknown>} list
 *   List of constructs to merge.
 * @returns {undefined}
 *   Nothing.
 */ function constructs(existing, list) {
    let index = -1;
    /** @type {Array<unknown>} */ const before = [];
    while(++index < list.length){
        // @ts-expect-error Looks like an object.
        ;
        (list[index].add === 'after' ? existing : before).push(list[index]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(existing, 0, 0, before);
}
function combineHtmlExtensions(htmlExtensions) {
    /** @type {HtmlExtension} */ const handlers = {};
    let index = -1;
    while(++index < htmlExtensions.length){
        htmlExtension(handlers, htmlExtensions[index]);
    }
    return handlers;
}
/**
 * Merge `extension` into `all`.
 *
 * @param {HtmlExtension} all
 *   Extension to merge into.
 * @param {HtmlExtension} extension
 *   Extension to merge.
 * @returns {undefined}
 *   Nothing.
 */ function htmlExtension(all, extension) {
    /** @type {keyof HtmlExtension} */ let hook;
    for(hook in extension){
        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;
        const left = maybe || (all[hook] = {});
        const right = extension[hook];
        /** @type {keyof Handles} */ let type;
        if (right) {
            for(type in right){
                // @ts-expect-error assume document vs regular handler are managed correctly.
                left[type] = right[type];
            }
        }
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Code} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "asciiAlpha",
    ()=>asciiAlpha,
    "asciiAlphanumeric",
    ()=>asciiAlphanumeric,
    "asciiAtext",
    ()=>asciiAtext,
    "asciiControl",
    ()=>asciiControl,
    "asciiDigit",
    ()=>asciiDigit,
    "asciiHexDigit",
    ()=>asciiHexDigit,
    "asciiPunctuation",
    ()=>asciiPunctuation,
    "markdownLineEnding",
    ()=>markdownLineEnding,
    "markdownLineEndingOrSpace",
    ()=>markdownLineEndingOrSpace,
    "markdownSpace",
    ()=>markdownSpace,
    "unicodePunctuation",
    ()=>unicodePunctuation,
    "unicodeWhitespace",
    ()=>unicodeWhitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
;
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code) {
    return(// Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].del));
}
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code) {
    return code !== null && code < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab;
}
function markdownLineEndingOrSpace(code) {
    return code !== null && (code < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].nul || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space);
}
function markdownSpace(code) {
    return code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space;
}
const unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
const unicodeWhitespace = regexCheck(/\s/);
/**
 * Create a code check from a regex.
 *
 * @param {RegExp} regex
 *   Expression.
 * @returns {(code: Code) => boolean}
 *   Check.
 */ function regexCheck(regex) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * Check whether a code matches the bound regex.
   *
   * @param {Code} code
   *   Character code.
   * @returns {boolean}
   *   Whether the character code matches the bound regex.
   */ function check(code) {
        return code !== null && code > -1 && regex.test(String.fromCharCode(code));
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factorySpace",
    ()=>factorySpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
;
function factorySpace(effects, ok, type, max) {
    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
    let size = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            effects.enter(type);
            return prefix(code);
        }
        return ok(code);
    }
    /** @type {State} */ function prefix(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code) && size++ < limit) {
            effects.consume(code);
            return prefix;
        }
        effects.exit(type);
        return ok(code);
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/content.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   InitialConstruct,
 *   Initializer,
 *   State,
 *   TokenizeContext,
 *   Token
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "content",
    ()=>content
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
;
const content = {
    tokenize: initializeContent
};
/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Initializer}
 *   Content.
 */ function initializeContent(effects) {
    const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
    /** @type {Token} */ let previous;
    return contentStart;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function afterContentStartConstruct(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code), 'expected eol or eof');
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            effects.consume(code);
            return;
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
        effects.consume(code);
        effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, contentStart, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix);
    }
    /** @type {State} */ function paragraphInitial(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code !== __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code), 'expected anything other than a line ending or EOF');
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].paragraph);
        return lineStart(code);
    }
    /** @type {State} */ function lineStart(code) {
        const token = effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkText, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeText,
            previous
        });
        if (previous) {
            previous.next = token;
        }
        previous = token;
        return data(code);
    }
    /** @type {State} */ function data(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkText);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].paragraph);
            effects.consume(code);
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkText);
            return lineStart;
        }
        // Data.
        effects.consume(code);
        return data;
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/document.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Construct,
 *   ContainerState,
 *   InitialConstruct,
 *   Initializer,
 *   Point,
 *   State,
 *   TokenizeContext,
 *   Tokenizer,
 *   Token
 * } from 'micromark-util-types'
 */ /**
 * @typedef {[Construct, ContainerState]} StackItem
 *   Construct and its state.
 */ __turbopack_context__.s([
    "document",
    ()=>document
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
;
;
const document = {
    tokenize: initializeDocument
};
/** @type {Construct} */ const containerConstruct = {
    tokenize: tokenizeContainer
};
/**
 * @this {TokenizeContext}
 *   Self.
 * @type {Initializer}
 *   Initializer.
 */ function initializeDocument(effects) {
    const self = this;
    /** @type {Array<StackItem>} */ const stack = [];
    let continued = 0;
    /** @type {TokenizeContext | undefined} */ let childFlow;
    /** @type {Token | undefined} */ let childToken;
    /** @type {number} */ let lineStartOffset;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        // First we iterate through the open blocks, starting with the root
        // document, and descending through last children down to the last open
        // block.
        // Each block imposes a condition that the line must satisfy if the block is
        // to remain open.
        // For example, a block quote requires a `>` character.
        // A paragraph requires a non-blank line.
        // In this phase we may match all or just some of the open blocks.
        // But we cannot close unmatched blocks yet, because we may have a lazy
        // continuation line.
        if (continued < stack.length) {
            const item = stack[continued];
            self.containerState = item[1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(item[0].continuation, 'expected `continuation` to be defined on container construct');
            return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
        }
        // Done.
        return checkNewContainers(code);
    }
    /** @type {State} */ function documentContinue(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(self.containerState, 'expected `containerState` to be defined after continuation');
        continued++;
        // Note: this field is called `_closeFlow` but it also closes containers.
        // Perhaps a good idea to rename it but it’s already used in the wild by
        // extensions.
        if (self.containerState._closeFlow) {
            self.containerState._closeFlow = undefined;
            if (childFlow) {
                closeFlow();
            }
            // Note: this algorithm for moving events around is similar to the
            // algorithm when dealing with lazy lines in `writeToChild`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {Point | undefined} */ let point;
            // Find the flow chunk.
            while(indexBeforeFlow--){
                if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow) {
                    point = self.events[indexBeforeFlow][1].end;
                    break;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(point, 'could not find previous flow chunk');
            exitContainers(continued);
            // Fix positions.
            let index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = {
                    ...point
                };
                index++;
            }
            // Inject the exits earlier (they’re still also at the end).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
            // Discard the duplicate exits.
            self.events.length = index;
            return checkNewContainers(code);
        }
        return start(code);
    }
    /** @type {State} */ function checkNewContainers(code) {
        // Next, after consuming the continuation markers for existing blocks, we
        // look for new block starts (e.g. `>` for a block quote).
        // If we encounter a new block start, we close any blocks unmatched in
        // step 1 before creating the new block as a child of the last matched
        // block.
        if (continued === stack.length) {
            // No need to `check` whether there’s a container, of `exitContainers`
            // would be moot.
            // We can instead immediately `attempt` to parse one.
            if (!childFlow) {
                return documentContinued(code);
            }
            // If we have concrete content, such as block HTML or fenced code,
            // we can’t have containers “pierce” into them, so we can immediately
            // start.
            if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
                return flowStart(code);
            }
            // If we do have flow, it could still be a blank line,
            // but we’d be interrupting it w/ a new container if there’s a current
            // construct.
            // To do: next major: remove `_gfmTableDynamicInterruptHack` (no longer
            // needed in micromark-extension-gfm-table@1.0.6).
            self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
        }
        // Check if there is a new container.
        self.containerState = {};
        return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
    }
    /** @type {State} */ function thereIsANewContainer(code) {
        if (childFlow) closeFlow();
        exitContainers(continued);
        return documentContinued(code);
    }
    /** @type {State} */ function thereIsNoNewContainer(code) {
        self.parser.lazy[self.now().line] = continued !== stack.length;
        lineStartOffset = self.now().offset;
        return flowStart(code);
    }
    /** @type {State} */ function documentContinued(code) {
        // Try new containers.
        self.containerState = {};
        return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
    }
    /** @type {State} */ function containerContinue(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(self.currentConstruct, 'expected `currentConstruct` to be defined on tokenizer');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(self.containerState, 'expected `containerState` to be defined on tokenizer');
        continued++;
        stack.push([
            self.currentConstruct,
            self.containerState
        ]);
        // Try another.
        return documentContinued(code);
    }
    /** @type {State} */ function flowStart(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            if (childFlow) closeFlow();
            exitContainers(0);
            effects.consume(code);
            return;
        }
        childFlow = childFlow || self.parser.flow(self.now());
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow, {
            _tokenizer: childFlow,
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeFlow,
            previous: childToken
        });
        return flowContinue(code);
    }
    /** @type {State} */ function flowContinue(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            writeToChild(effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow), true);
            exitContainers(0);
            effects.consume(code);
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.consume(code);
            writeToChild(effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow));
            // Get ready for the next line.
            continued = 0;
            self.interrupt = undefined;
            return start;
        }
        effects.consume(code);
        return flowContinue;
    }
    /**
   * @param {Token} token
   *   Token.
   * @param {boolean | undefined} [endOfFile]
   *   Whether the token is at the end of the file (default: `false`).
   * @returns {undefined}
   *   Nothing.
   */ function writeToChild(token, endOfFile) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(childFlow, 'expected `childFlow` to be defined when continuing');
        const stream = self.sliceStream(token);
        if (endOfFile) stream.push(null);
        token.previous = childToken;
        if (childToken) childToken.next = token;
        childToken = token;
        childFlow.defineSkip(token.start);
        childFlow.write(stream);
        // Alright, so we just added a lazy line:
        //
        // ```markdown
        // > a
        // b.
        //
        // Or:
        //
        // > ~~~c
        // d
        //
        // Or:
        //
        // > | e |
        // f
        // ```
        //
        // The construct in the second example (fenced code) does not accept lazy
        // lines, so it marked itself as done at the end of its first line, and
        // then the content construct parses `d`.
        // Most constructs in markdown match on the first line: if the first line
        // forms a construct, a non-lazy line can’t “unmake” it.
        //
        // The construct in the third example is potentially a GFM table, and
        // those are *weird*.
        // It *could* be a table, from the first line, if the following line
        // matches a condition.
        // In this case, that second line is lazy, which “unmakes” the first line
        // and turns the whole into one content block.
        //
        // We’ve now parsed the non-lazy and the lazy line, and can figure out
        // whether the lazy line started a new flow block.
        // If it did, we exit the current containers between the two flow blocks.
        if (self.parser.lazy[token.start.line]) {
            let index = childFlow.events.length;
            while(index--){
                if (// The token starts before the line ending…
                childFlow.events[index][1].start.offset < lineStartOffset && // …and either is not ended yet…
                (!childFlow.events[index][1].end || // …or ends after it.
                childFlow.events[index][1].end.offset > lineStartOffset)) {
                    // Exit: there’s still something open, which means it’s a lazy line
                    // part of something.
                    return;
                }
            }
            // Note: this algorithm for moving events around is similar to the
            // algorithm when closing flow in `documentContinue`.
            const indexBeforeExits = self.events.length;
            let indexBeforeFlow = indexBeforeExits;
            /** @type {boolean | undefined} */ let seen;
            /** @type {Point | undefined} */ let point;
            // Find the previous chunk (the one before the lazy line).
            while(indexBeforeFlow--){
                if (self.events[indexBeforeFlow][0] === 'exit' && self.events[indexBeforeFlow][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow) {
                    if (seen) {
                        point = self.events[indexBeforeFlow][1].end;
                        break;
                    }
                    seen = true;
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(point, 'could not find previous flow chunk');
            exitContainers(continued);
            // Fix positions.
            index = indexBeforeExits;
            while(index < self.events.length){
                self.events[index][1].end = {
                    ...point
                };
                index++;
            }
            // Inject the exits earlier (they’re still also at the end).
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
            // Discard the duplicate exits.
            self.events.length = index;
        }
    }
    /**
   * @param {number} size
   *   Size.
   * @returns {undefined}
   *   Nothing.
   */ function exitContainers(size) {
        let index = stack.length;
        // Exit open containers.
        while(index-- > size){
            const entry = stack[index];
            self.containerState = entry[1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(entry[0].exit, 'expected `exit` to be defined on container construct');
            entry[0].exit.call(self, effects);
        }
        stack.length = size;
    }
    function closeFlow() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(self.containerState, 'expected `containerState` to be defined when closing flow');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(childFlow, 'expected `childFlow` to be defined when closing it');
        childFlow.write([
            __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof
        ]);
        childToken = undefined;
        childFlow = undefined;
        self.containerState._closeFlow = undefined;
    }
}
/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 *   Tokenizer.
 */ function tokenizeContainer(effects, ok, nok) {
    // Always populated by defaults.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(this.parser.constructs.disable.null, 'expected `disable.null` to be populated');
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, effects.attempt(this.parser.constructs.document, ok, nok), __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix, this.parser.constructs.disable.null.includes('codeIndented') ? undefined : __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].tabSize);
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/flow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   InitialConstruct,
 *   Initializer,
 *   State,
 *   TokenizeContext
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "flow",
    ()=>flow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$blank$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/blank-line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/content.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
;
;
const flow = {
    tokenize: initializeFlow
};
/**
 * @this {TokenizeContext}
 *   Self.
 * @type {Initializer}
 *   Initializer.
 */ function initializeFlow(effects) {
    const self = this;
    const initial = effects.attempt(// Try to parse a blank line.
    __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$blank$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blankLine"], atBlankEnding, // Try to parse initial flow (essentially, only code).
    effects.attempt(this.parser.constructs.flowInitial, afterConstruct, (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["content"], afterConstruct)), __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix)));
    return initial;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function atBlankEnding(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code), 'expected eol or eof');
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            effects.consume(code);
            return;
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank);
        effects.consume(code);
        effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank);
        self.currentConstruct = undefined;
        return initial;
    }
    /** @type {State} */ function afterConstruct(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code), 'expected eol or eof');
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            effects.consume(code);
            return;
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
        effects.consume(code);
        effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
        self.currentConstruct = undefined;
        return initial;
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Code,
 *   InitialConstruct,
 *   Initializer,
 *   Resolver,
 *   State,
 *   TokenizeContext
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "resolver",
    ()=>resolver,
    "string",
    ()=>string,
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
const resolver = {
    resolveAll: createResolver()
};
const string = initializeFactory('string');
const text = initializeFactory('text');
/**
 * @param {'string' | 'text'} field
 *   Field.
 * @returns {InitialConstruct}
 *   Construct.
 */ function initializeFactory(field) {
    return {
        resolveAll: createResolver(field === 'text' ? resolveAllLineSuffixes : undefined),
        tokenize: initializeText
    };
    //TURBOPACK unreachable
    ;
    /**
   * @this {TokenizeContext}
   *   Context.
   * @type {Initializer}
   */ function initializeText(effects) {
        const self = this;
        const constructs = this.parser.constructs[field];
        const text = effects.attempt(constructs, start, notText);
        return start;
        //TURBOPACK unreachable
        ;
        /** @type {State} */ function start(code) {
            return atBreak(code) ? text(code) : notText(code);
        }
        /** @type {State} */ function notText(code) {
            if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
                effects.consume(code);
                return;
            }
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].data);
            effects.consume(code);
            return data;
        }
        /** @type {State} */ function data(code) {
            if (atBreak(code)) {
                effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].data);
                return text(code);
            }
            // Data.
            effects.consume(code);
            return data;
        }
        /**
     * @param {Code} code
     *   Code.
     * @returns {boolean}
     *   Whether the code is a break.
     */ function atBreak(code) {
            if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
                return true;
            }
            const list = constructs[code];
            let index = -1;
            if (list) {
                // Always populated by defaults.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(Array.isArray(list), 'expected `disable.null` to be populated');
                while(++index < list.length){
                    const item = list[index];
                    if (!item.previous || item.previous.call(self, self.previous)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
/**
 * @param {Resolver | undefined} [extraResolver]
 *   Resolver.
 * @returns {Resolver}
 *   Resolver.
 */ function createResolver(extraResolver) {
    return resolveAllText;
    //TURBOPACK unreachable
    ;
    /** @type {Resolver} */ function resolveAllText(events, context) {
        let index = -1;
        /** @type {number | undefined} */ let enter;
        // A rather boring computation (to merge adjacent `data` events) which
        // improves mm performance by 29%.
        while(++index <= events.length){
            if (enter === undefined) {
                if (events[index] && events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].data) {
                    enter = index;
                    index++;
                }
            } else if (!events[index] || events[index][1].type !== __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].data) {
                // Don’t do anything if there is one data token.
                if (index !== enter + 2) {
                    events[enter][1].end = events[index - 1][1].end;
                    events.splice(enter + 2, index - enter - 2);
                    index = enter + 2;
                }
                enter = undefined;
            }
        }
        return extraResolver ? extraResolver(events, context) : events;
    }
}
/**
 * A rather ugly set of instructions which again looks at chunks in the input
 * stream.
 * The reason to do this here is that it is *much* faster to parse in reverse.
 * And that we can’t hook into `null` to split the line suffix before an EOF.
 * To do: figure out if we can make this into a clean utility, or even in core.
 * As it will be useful for GFMs literal autolink extension (and maybe even
 * tables?)
 *
 * @type {Resolver}
 */ function resolveAllLineSuffixes(events, context) {
    let eventIndex = 0 // Skip first.
    ;
    while(++eventIndex <= events.length){
        if ((eventIndex === events.length || events[eventIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding) && events[eventIndex - 1][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].data) {
            const data = events[eventIndex - 1][1];
            const chunks = context.sliceStream(data);
            let index = chunks.length;
            let bufferIndex = -1;
            let size = 0;
            /** @type {boolean | undefined} */ let tabs;
            while(index--){
                const chunk = chunks[index];
                if (typeof chunk === 'string') {
                    bufferIndex = chunk.length;
                    while(chunk.charCodeAt(bufferIndex - 1) === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space){
                        size++;
                        bufferIndex--;
                    }
                    if (bufferIndex) break;
                    bufferIndex = -1;
                } else if (chunk === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab) {
                    tabs = true;
                    size++;
                } else if (chunk === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace) {
                // Empty
                } else {
                    // Replacement character, exit.
                    index++;
                    break;
                }
            }
            // Allow final trailing whitespace.
            if (context._contentTypeTextTrailing && eventIndex === events.length) {
                size = 0;
            }
            if (size) {
                const token = {
                    type: eventIndex === events.length || tabs || size < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].hardBreakPrefixSizeMin ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineSuffix : __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].hardBreakTrailing,
                    start: {
                        _bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex,
                        _index: data.start._index + index,
                        line: data.end.line,
                        column: data.end.column - size,
                        offset: data.end.offset - size
                    },
                    end: {
                        ...data.end
                    }
                };
                data.end = {
                    ...token.start
                };
                if (data.start.offset === data.end.offset) {
                    Object.assign(data, token);
                } else {
                    events.splice(eventIndex, 0, [
                        'enter',
                        token,
                        context
                    ], [
                        'exit',
                        token,
                        context
                    ]);
                    eventIndex += 2;
                }
            }
            eventIndex++;
        }
    }
    return events;
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/constructs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Extension} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "attentionMarkers",
    ()=>attentionMarkers,
    "contentInitial",
    ()=>contentInitial,
    "disable",
    ()=>disable,
    "document",
    ()=>document,
    "flow",
    ()=>flow,
    "flowInitial",
    ()=>flowInitial,
    "insideSpan",
    ()=>insideSpan,
    "string",
    ()=>string,
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$attention$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/attention.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$autolink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/autolink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$block$2d$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/block-quote.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$character$2d$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/character-escape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$character$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/character-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$fenced$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/code-fenced.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$indented$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/code-indented.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/code-text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$definition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/definition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$hard$2d$break$2d$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/hard-break-escape.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$heading$2d$atx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/heading-atx.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$html$2d$flow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/html-flow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$html$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/html-text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$label$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/label-end.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$label$2d$start$2d$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/label-start-image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$label$2d$start$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/label-start-link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$line$2d$ending$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/line-ending.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$setext$2d$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/setext-underline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-core-commonmark/dev/lib/thematic-break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/text.js [app-ssr] (ecmascript)");
;
;
;
const document = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].asterisk]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].plusSign]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].dash]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit0]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit1]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit2]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit3]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit4]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit5]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit6]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit7]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit8]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].digit9]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$block$2d$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockQuote"]
};
const contentInitial = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$definition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["definition"]
};
const flowInitial = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$indented$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeIndented"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$indented$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeIndented"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$indented$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeIndented"]
};
const flow = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].numberSign]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$heading$2d$atx$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["headingAtx"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].asterisk]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thematicBreak"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].dash]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$setext$2d$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setextUnderline"],
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thematicBreak"]
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$html$2d$flow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["htmlFlow"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].equalsTo]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$setext$2d$underline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setextUnderline"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].underscore]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thematicBreak"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].graveAccent]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$fenced$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeFenced"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].tilde]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$fenced$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeFenced"]
};
const string = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].ampersand]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$character$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterReference"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$character$2d$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEscape"]
};
const text = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturn]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$line$2d$ending$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lineEnding"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lineFeed]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$line$2d$ending$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lineEnding"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturnLineFeed]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$line$2d$ending$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lineEnding"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].exclamationMark]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$label$2d$start$2d$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelStartImage"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].ampersand]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$character$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterReference"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].asterisk]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$attention$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attention"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$autolink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["autolink"],
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$html$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["htmlText"]
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$label$2d$start$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelStartLink"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash]: [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$hard$2d$break$2d$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hardBreakEscape"],
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$character$2d$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEscape"]
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$label$2d$end$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelEnd"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].underscore]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$attention$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attention"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].graveAccent]: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$code$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codeText"]
};
const insideSpan = {
    null: [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$core$2d$commonmark$2f$dev$2f$lib$2f$attention$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attention"],
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolver"]
    ]
};
const attentionMarkers = {
    null: [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].asterisk,
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].underscore
    ]
};
const disable = {
    null: []
};
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/create-tokenizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Chunk,
 *   Code,
 *   ConstructRecord,
 *   Construct,
 *   Effects,
 *   InitialConstruct,
 *   ParseContext,
 *   Point,
 *   State,
 *   TokenizeContext,
 *   Token
 * } from 'micromark-util-types'
 */ /**
 * @callback Restore
 *   Restore the state.
 * @returns {undefined}
 *   Nothing.
 *
 * @typedef Info
 *   Info.
 * @property {Restore} restore
 *   Restore.
 * @property {number} from
 *   From.
 *
 * @callback ReturnHandle
 *   Handle a successful run.
 * @param {Construct} construct
 *   Construct.
 * @param {Info} info
 *   Info.
 * @returns {undefined}
 *   Nothing.
 */ __turbopack_context__.s([
    "createTokenizer",
    ()=>createTokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/debug/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$resolve$2d$all$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-resolve-all/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$debug$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('micromark');
function createTokenizer(parser, initialize, from) {
    /** @type {Point} */ let point = {
        _bufferIndex: -1,
        _index: 0,
        line: from && from.line || 1,
        column: from && from.column || 1,
        offset: from && from.offset || 0
    };
    /** @type {Record<string, number>} */ const columnStart = {};
    /** @type {Array<Construct>} */ const resolveAllConstructs = [];
    /** @type {Array<Chunk>} */ let chunks = [];
    /** @type {Array<Token>} */ let stack = [];
    /** @type {boolean | undefined} */ let consumed = true;
    /**
   * Tools used for tokenizing.
   *
   * @type {Effects}
   */ const effects = {
        attempt: constructFactory(onsuccessfulconstruct),
        check: constructFactory(onsuccessfulcheck),
        consume,
        enter,
        exit,
        interrupt: constructFactory(onsuccessfulcheck, {
            interrupt: true
        })
    };
    /**
   * State and tools for resolving and serializing.
   *
   * @type {TokenizeContext}
   */ const context = {
        code: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof,
        containerState: {},
        defineSkip,
        events: [],
        now,
        parser,
        previous: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof,
        sliceSerialize,
        sliceStream,
        write
    };
    /**
   * The state function.
   *
   * @type {State | undefined}
   */ let state = initialize.tokenize.call(context, effects);
    /**
   * Track which character we expect to be consumed, to catch bugs.
   *
   * @type {Code}
   */ let expectedCode;
    if (initialize.resolveAll) {
        resolveAllConstructs.push(initialize);
    }
    return context;
    //TURBOPACK unreachable
    ;
    /** @type {TokenizeContext['write']} */ function write(slice) {
        chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["push"])(chunks, slice);
        main();
        // Exit if we’re not done, resolve might change stuff.
        if (chunks[chunks.length - 1] !== __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            return [];
        }
        addResult(initialize, 0);
        // Otherwise, resolve, and exit.
        context.events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$resolve$2d$all$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveAll"])(resolveAllConstructs, context.events, context);
        return context.events;
    }
    //
    // Tools.
    //
    /** @type {TokenizeContext['sliceSerialize']} */ function sliceSerialize(token, expandTabs) {
        return serializeChunks(sliceStream(token), expandTabs);
    }
    /** @type {TokenizeContext['sliceStream']} */ function sliceStream(token) {
        return sliceChunks(chunks, token);
    }
    /** @type {TokenizeContext['now']} */ function now() {
        // This is a hot path, so we clone manually instead of `Object.assign({}, point)`
        const { _bufferIndex, _index, line, column, offset } = point;
        return {
            _bufferIndex,
            _index,
            line,
            column,
            offset
        };
    }
    /** @type {TokenizeContext['defineSkip']} */ function defineSkip(value) {
        columnStart[value.line] = value.column;
        accountForPotentialSkip();
        debug('position: define skip: `%j`', point);
    }
    //
    // State management.
    //
    /**
   * Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
   * `consume`).
   * Here is where we walk through the chunks, which either include strings of
   * several characters, or numerical character codes.
   * The reason to do this in a loop instead of a call is so the stack can
   * drain.
   *
   * @returns {undefined}
   *   Nothing.
   */ function main() {
        /** @type {number} */ let chunkIndex;
        while(point._index < chunks.length){
            const chunk = chunks[point._index];
            // If we’re in a buffer chunk, loop through it.
            if (typeof chunk === 'string') {
                chunkIndex = point._index;
                if (point._bufferIndex < 0) {
                    point._bufferIndex = 0;
                }
                while(point._index === chunkIndex && point._bufferIndex < chunk.length){
                    go(chunk.charCodeAt(point._bufferIndex));
                }
            } else {
                go(chunk);
            }
        }
    }
    /**
   * Deal with one code.
   *
   * @param {Code} code
   *   Code.
   * @returns {undefined}
   *   Nothing.
   */ function go(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(consumed === true, 'expected character to be consumed');
        consumed = undefined;
        debug('main: passing `%s` to %s', code, state && state.name);
        expectedCode = code;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof state === 'function', 'expected state');
        state = state(code);
    }
    /** @type {Effects['consume']} */ function consume(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === expectedCode, 'expected given code to equal expected code');
        debug('consume: `%s`', code);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(consumed === undefined, 'expected code to not have been consumed: this might be because `return x(code)` instead of `return x` was used');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === null ? context.events.length === 0 || context.events[context.events.length - 1][0] === 'exit' : context.events[context.events.length - 1][0] === 'enter', 'expected last token to be open');
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            point.line++;
            point.column = 1;
            point.offset += code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturnLineFeed ? 2 : 1;
            accountForPotentialSkip();
            debug('position: after eol: `%j`', point);
        } else if (code !== __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace) {
            point.column++;
            point.offset++;
        }
        // Not in a string chunk.
        if (point._bufferIndex < 0) {
            point._index++;
        } else {
            point._bufferIndex++;
            // At end of string chunk.
            if (point._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
            // strings.
            /** @type {string} */ chunks[point._index].length) {
                point._bufferIndex = -1;
                point._index++;
            }
        }
        // Expose the previous character.
        context.previous = code;
        // Mark as consumed.
        consumed = true;
    }
    /** @type {Effects['enter']} */ function enter(type, fields) {
        /** @type {Token} */ // @ts-expect-error Patch instead of assign required fields to help GC.
        const token = fields || {};
        token.type = type;
        token.start = now();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof type === 'string', 'expected string type');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(type.length > 0, 'expected non-empty string');
        debug('enter: `%s`', type);
        context.events.push([
            'enter',
            token,
            context
        ]);
        stack.push(token);
        return token;
    }
    /** @type {Effects['exit']} */ function exit(type) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof type === 'string', 'expected string type');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(type.length > 0, 'expected non-empty string');
        const token = stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(token, 'cannot close w/o open tokens');
        token.end = now();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(type === token.type, 'expected exit token to match current token');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!(token.start._index === token.end._index && token.start._bufferIndex === token.end._bufferIndex), 'expected non-empty token (`' + type + '`)');
        debug('exit: `%s`', token.type);
        context.events.push([
            'exit',
            token,
            context
        ]);
        return token;
    }
    /**
   * Use results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulconstruct(construct, info) {
        addResult(construct, info.from);
    }
    /**
   * Discard results.
   *
   * @type {ReturnHandle}
   */ function onsuccessfulcheck(_, info) {
        info.restore();
    }
    /**
   * Factory to attempt/check/interrupt.
   *
   * @param {ReturnHandle} onreturn
   *   Callback.
   * @param {{interrupt?: boolean | undefined} | undefined} [fields]
   *   Fields.
   */ function constructFactory(onreturn, fields) {
        return hook;
        //TURBOPACK unreachable
        ;
        /**
     * Handle either an object mapping codes to constructs, a list of
     * constructs, or a single construct.
     *
     * @param {Array<Construct> | ConstructRecord | Construct} constructs
     *   Constructs.
     * @param {State} returnState
     *   State.
     * @param {State | undefined} [bogusState]
     *   State.
     * @returns {State}
     *   State.
     */ function hook(constructs, returnState, bogusState) {
            /** @type {ReadonlyArray<Construct>} */ let listOfConstructs;
            /** @type {number} */ let constructIndex;
            /** @type {Construct} */ let currentConstruct;
            /** @type {Info} */ let info;
            return Array.isArray(constructs) ? /* c8 ignore next 1 */ handleListOfConstructs(constructs) : 'tokenize' in constructs ? handleListOfConstructs([
                constructs
            ]) : handleMapOfConstructs(constructs);
            //TURBOPACK unreachable
            ;
            /**
       * Handle a list of construct.
       *
       * @param {ConstructRecord} map
       *   Constructs.
       * @returns {State}
       *   State.
       */ function handleMapOfConstructs(map) {
                return start;
                //TURBOPACK unreachable
                ;
                /** @type {State} */ function start(code) {
                    const left = code !== null && map[code];
                    const all = code !== null && map.null;
                    const list = [
                        // To do: add more extension tests.
                        /* c8 ignore next 2 */ ...Array.isArray(left) ? left : left ? [
                            left
                        ] : [],
                        ...Array.isArray(all) ? all : all ? [
                            all
                        ] : []
                    ];
                    return handleListOfConstructs(list)(code);
                }
            }
            /**
       * Handle a list of construct.
       *
       * @param {ReadonlyArray<Construct>} list
       *   Constructs.
       * @returns {State}
       *   State.
       */ function handleListOfConstructs(list) {
                listOfConstructs = list;
                constructIndex = 0;
                if (list.length === 0) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(bogusState, 'expected `bogusState` to be given');
                    return bogusState;
                }
                return handleConstruct(list[constructIndex]);
            }
            /**
       * Handle a single construct.
       *
       * @param {Construct} construct
       *   Construct.
       * @returns {State}
       *   State.
       */ function handleConstruct(construct) {
                return start;
                //TURBOPACK unreachable
                ;
                /** @type {State} */ function start(code) {
                    // To do: not needed to store if there is no bogus state, probably?
                    // Currently doesn’t work because `inspect` in document does a check
                    // w/o a bogus, which doesn’t make sense. But it does seem to help perf
                    // by not storing.
                    info = store();
                    currentConstruct = construct;
                    if (!construct.partial) {
                        context.currentConstruct = construct;
                    }
                    // Always populated by defaults.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(context.parser.constructs.disable.null, 'expected `disable.null` to be populated');
                    if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
                        return nok(code);
                    }
                    return construct.tokenize.call(// If we do have fields, create an object w/ `context` as its
                    // prototype.
                    // This allows a “live binding”, which is needed for `interrupt`.
                    fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
                }
            }
            /** @type {State} */ function ok(code) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === expectedCode, 'expected code');
                consumed = true;
                onreturn(currentConstruct, info);
                return returnState;
            }
            /** @type {State} */ function nok(code) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === expectedCode, 'expected code');
                consumed = true;
                info.restore();
                if (++constructIndex < listOfConstructs.length) {
                    return handleConstruct(listOfConstructs[constructIndex]);
                }
                return bogusState;
            }
        }
    }
    /**
   * @param {Construct} construct
   *   Construct.
   * @param {number} from
   *   From.
   * @returns {undefined}
   *   Nothing.
   */ function addResult(construct, from) {
        if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
            resolveAllConstructs.push(construct);
        }
        if (construct.resolve) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
        }
        if (construct.resolveTo) {
            context.events = construct.resolveTo(context.events, context);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(construct.partial || context.events.length === 0 || context.events[context.events.length - 1][0] === 'exit', 'expected last token to end');
    }
    /**
   * Store state.
   *
   * @returns {Info}
   *   Info.
   */ function store() {
        const startPoint = now();
        const startPrevious = context.previous;
        const startCurrentConstruct = context.currentConstruct;
        const startEventsIndex = context.events.length;
        const startStack = Array.from(stack);
        return {
            from: startEventsIndex,
            restore
        };
        //TURBOPACK unreachable
        ;
        /**
     * Restore state.
     *
     * @returns {undefined}
     *   Nothing.
     */ function restore() {
            point = startPoint;
            context.previous = startPrevious;
            context.currentConstruct = startCurrentConstruct;
            context.events.length = startEventsIndex;
            stack = startStack;
            accountForPotentialSkip();
            debug('position: restore: `%j`', point);
        }
    }
    /**
   * Move the current point a bit forward in the line when it’s on a column
   * skip.
   *
   * @returns {undefined}
   *   Nothing.
   */ function accountForPotentialSkip() {
        if (point.line in columnStart && point.column < 2) {
            point.column = columnStart[point.line];
            point.offset += columnStart[point.line] - 1;
        }
    }
}
/**
 * Get the chunks from a slice of chunks in the range of a token.
 *
 * @param {ReadonlyArray<Chunk>} chunks
 *   Chunks.
 * @param {Pick<Token, 'end' | 'start'>} token
 *   Token.
 * @returns {Array<Chunk>}
 *   Chunks.
 */ function sliceChunks(chunks, token) {
    const startIndex = token.start._index;
    const startBufferIndex = token.start._bufferIndex;
    const endIndex = token.end._index;
    const endBufferIndex = token.end._bufferIndex;
    /** @type {Array<Chunk>} */ let view;
    if (startIndex === endIndex) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(endBufferIndex > -1, 'expected non-negative end buffer index');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(startBufferIndex > -1, 'expected non-negative start buffer index');
        // @ts-expect-error `_bufferIndex` is used on string chunks.
        view = [
            chunks[startIndex].slice(startBufferIndex, endBufferIndex)
        ];
    } else {
        view = chunks.slice(startIndex, endIndex);
        if (startBufferIndex > -1) {
            const head = view[0];
            if (typeof head === 'string') {
                view[0] = head.slice(startBufferIndex);
            /* c8 ignore next 4 -- used to be used, no longer */ } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(startBufferIndex === 0, 'expected `startBufferIndex` to be `0`');
                view.shift();
            }
        }
        if (endBufferIndex > 0) {
            // @ts-expect-error `_bufferIndex` is used on string chunks.
            view.push(chunks[endIndex].slice(0, endBufferIndex));
        }
    }
    return view;
}
/**
 * Get the string value of a slice of chunks.
 *
 * @param {ReadonlyArray<Chunk>} chunks
 *   Chunks.
 * @param {boolean | undefined} [expandTabs=false]
 *   Whether to expand tabs (default: `false`).
 * @returns {string}
 *   Result.
 */ function serializeChunks(chunks, expandTabs) {
    let index = -1;
    /** @type {Array<string>} */ const result = [];
    /** @type {boolean | undefined} */ let atTab;
    while(++index < chunks.length){
        const chunk = chunks[index];
        /** @type {string} */ let value;
        if (typeof chunk === 'string') {
            value = chunk;
        } else switch(chunk){
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturn:
                {
                    value = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].cr;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lineFeed:
                {
                    value = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].lf;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturnLineFeed:
                {
                    value = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].cr + __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].lf;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab:
                {
                    value = expandTabs ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].space : __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].ht;
                    break;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace:
                {
                    if (!expandTabs && atTab) continue;
                    value = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].space;
                    break;
                }
            default:
                {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof chunk === 'number', 'expected number');
                    // Currently only replacement character.
                    value = String.fromCharCode(chunk);
                }
        }
        atTab = chunk === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab;
        result.push(value);
    }
    return result.join('');
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Create,
 *   FullNormalizedExtension,
 *   InitialConstruct,
 *   ParseContext,
 *   ParseOptions
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$combine$2d$extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-combine-extensions/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/content.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$document$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/document.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$flow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/flow.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/initialize/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$constructs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/constructs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$create$2d$tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/create-tokenizer.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function parse(options) {
    const settings = options || {};
    const constructs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$combine$2d$extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineExtensions"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$constructs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
        ...settings.extensions || []
    ]);
    /** @type {ParseContext} */ const parser = {
        constructs,
        content: create(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$content$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["content"]),
        defined: [],
        document: create(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$document$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["document"]),
        flow: create(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$flow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flow"]),
        lazy: {},
        string: create(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["string"]),
        text: create(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$initialize$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"])
    };
    return parser;
    //TURBOPACK unreachable
    ;
    /**
   * @param {InitialConstruct} initial
   *   Construct to start with.
   * @returns {Create}
   *   Create a tokenizer.
   */ function create(initial) {
        return creator;
        //TURBOPACK unreachable
        ;
        /** @type {Create} */ function creator(from) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$create$2d$tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTokenizer"])(parser, initial, from);
        }
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/postprocess.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Event} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "postprocess",
    ()=>postprocess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-subtokenize/dev/index.js [app-ssr] (ecmascript) <locals>");
;
function postprocess(events) {
    while(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subtokenize"])(events)){
    // Empty
    }
    return events;
}
}),
"[project]/PREFECT-10/node_modules/micromark/dev/lib/preprocess.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Chunk, Code, Encoding, Value} from 'micromark-util-types'
 */ /**
 * @callback Preprocessor
 *   Preprocess a value.
 * @param {Value} value
 *   Value.
 * @param {Encoding | null | undefined} [encoding]
 *   Encoding when `value` is a typed array (optional).
 * @param {boolean | null | undefined} [end=false]
 *   Whether this is the last chunk (default: `false`).
 * @returns {Array<Chunk>}
 *   Chunks.
 */ __turbopack_context__.s([
    "preprocess",
    ()=>preprocess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
const search = /[\0\t\n\r]/g;
function preprocess() {
    let column = 1;
    let buffer = '';
    /** @type {boolean | undefined} */ let start = true;
    /** @type {boolean | undefined} */ let atCarriageReturn;
    return preprocessor;
    //TURBOPACK unreachable
    ;
    /** @type {Preprocessor} */ // eslint-disable-next-line complexity
    function preprocessor(value, encoding, end) {
        /** @type {Array<Chunk>} */ const chunks = [];
        /** @type {RegExpMatchArray | null} */ let match;
        /** @type {number} */ let next;
        /** @type {number} */ let startPosition;
        /** @type {number} */ let endPosition;
        /** @type {Code} */ let code;
        value = buffer + (typeof value === 'string' ? value.toString() : new TextDecoder(encoding || undefined).decode(value));
        startPosition = 0;
        buffer = '';
        if (start) {
            // To do: `markdown-rs` actually parses BOMs (byte order mark).
            if (value.charCodeAt(0) === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].byteOrderMarker) {
                startPosition++;
            }
            start = undefined;
        }
        while(startPosition < value.length){
            search.lastIndex = startPosition;
            match = search.exec(value);
            endPosition = match && match.index !== undefined ? match.index : value.length;
            code = value.charCodeAt(endPosition);
            if (!match) {
                buffer = value.slice(startPosition);
                break;
            }
            if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lf && startPosition === endPosition && atCarriageReturn) {
                chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturnLineFeed);
                atCarriageReturn = undefined;
            } else {
                if (atCarriageReturn) {
                    chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturn);
                    atCarriageReturn = undefined;
                }
                if (startPosition < endPosition) {
                    chunks.push(value.slice(startPosition, endPosition));
                    column += endPosition - startPosition;
                }
                switch(code){
                    case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].nul:
                        {
                            chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].replacementCharacter);
                            column++;
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].ht:
                        {
                            next = Math.ceil(column / __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].tabSize) * __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].tabSize;
                            chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].horizontalTab);
                            while(column++ < next)chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].virtualSpace);
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lf:
                        {
                            chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lineFeed);
                            column = 1;
                            break;
                        }
                    default:
                        {
                            atCarriageReturn = true;
                            column = 1;
                        }
                }
            }
            startPosition = endPosition + 1;
        }
        if (end) {
            if (atCarriageReturn) chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].carriageReturn);
            if (buffer) chunks.push(buffer);
            chunks.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof);
        }
        return chunks;
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-subtokenize/dev/lib/splice-buffer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpliceBuffer",
    ()=>SpliceBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
class SpliceBuffer {
    /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */ constructor(initial){
        /** @type {Array<T>} */ this.left = initial ? [
            ...initial
        ] : [];
        /** @type {Array<T>} */ this.right = [];
    }
    /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */ get(index) {
        if (index < 0 || index >= this.left.length + this.right.length) {
            throw new RangeError('Cannot access index `' + index + '` in a splice buffer of size `' + (this.left.length + this.right.length) + '`');
        }
        if (index < this.left.length) return this.left[index];
        return this.right[this.right.length - index + this.left.length - 1];
    }
    /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */ get length() {
        return this.left.length + this.right.length;
    }
    /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */ shift() {
        this.setCursor(0);
        return this.right.pop();
    }
    /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */ slice(start, end) {
        /** @type {number} */ const stop = end === null || end === undefined ? Number.POSITIVE_INFINITY : end;
        if (stop < this.left.length) {
            return this.left.slice(start, stop);
        }
        if (start > this.left.length) {
            return this.right.slice(this.right.length - stop + this.left.length, this.right.length - start + this.left.length).reverse();
        }
        return this.left.slice(start).concat(this.right.slice(this.right.length - stop + this.left.length).reverse());
    }
    /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */ splice(start, deleteCount, items) {
        /** @type {number} */ const count = deleteCount || 0;
        this.setCursor(Math.trunc(start));
        const removed = this.right.splice(this.right.length - count, Number.POSITIVE_INFINITY);
        if (items) chunkedPush(this.left, items);
        return removed.reverse();
    }
    /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */ pop() {
        this.setCursor(Number.POSITIVE_INFINITY);
        return this.left.pop();
    }
    /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */ push(item) {
        this.setCursor(Number.POSITIVE_INFINITY);
        this.left.push(item);
    }
    /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */ pushMany(items) {
        this.setCursor(Number.POSITIVE_INFINITY);
        chunkedPush(this.left, items);
    }
    /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */ unshift(item) {
        this.setCursor(0);
        this.right.push(item);
    }
    /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */ unshiftMany(items) {
        this.setCursor(0);
        chunkedPush(this.right, items.reverse());
    }
    /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */ setCursor(n) {
        if (n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0) return;
        if (n < this.left.length) {
            // Move cursor to the this.left
            const removed = this.left.splice(n, Number.POSITIVE_INFINITY);
            chunkedPush(this.right, removed.reverse());
        } else {
            // Move cursor to the this.right
            const removed = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
            chunkedPush(this.left, removed.reverse());
        }
    }
}
/**
 * Avoid stack overflow by pushing items onto the stack in segments
 *
 * @template T
 *   Item type.
 * @param {Array<T>} list
 *   List to inject into.
 * @param {ReadonlyArray<T>} right
 *   Items to inject.
 * @return {undefined}
 *   Nothing.
 */ function chunkedPush(list, right) {
    /** @type {number} */ let chunkStart = 0;
    if (right.length < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize) {
        list.push(...right);
    } else {
        while(chunkStart < right.length){
            list.push(...right.slice(chunkStart, chunkStart + __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize));
            chunkStart += __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].v8MaxSafeChunkSize;
        }
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-subtokenize/dev/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Chunk, Event, Token} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "subtokenize",
    ()=>subtokenize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-chunked/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$lib$2f$splice$2d$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-subtokenize/dev/lib/splice-buffer.js [app-ssr] (ecmascript)");
;
;
;
;
;
function subtokenize(eventsArray) {
    /** @type {Record<string, number>} */ const jumps = {};
    let index = -1;
    /** @type {Event} */ let event;
    /** @type {number | undefined} */ let lineIndex;
    /** @type {number} */ let otherIndex;
    /** @type {Event} */ let otherEvent;
    /** @type {Array<Event>} */ let parameters;
    /** @type {Array<Event>} */ let subevents;
    /** @type {boolean | undefined} */ let more;
    const events = new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$subtokenize$2f$dev$2f$lib$2f$splice$2d$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpliceBuffer"](eventsArray);
    while(++index < events.length){
        while(index in jumps){
            index = jumps[index];
        }
        event = events.get(index);
        // Add a hook for the GFM tasklist extension, which needs to know if text
        // is in the first content of a list item.
        if (index && event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkFlow && events.get(index - 1)[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(event[1]._tokenizer, 'expected `_tokenizer` on subtokens');
            subevents = event[1]._tokenizer.events;
            otherIndex = 0;
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                otherIndex += 2;
            }
            if (otherIndex < subevents.length && subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].content) {
                while(++otherIndex < subevents.length){
                    if (subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].content) {
                        break;
                    }
                    if (subevents[otherIndex][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkText) {
                        subevents[otherIndex][1]._isInFirstContentOfListItem = true;
                        otherIndex++;
                    }
                }
            }
        }
        // Enter.
        if (event[0] === 'enter') {
            if (event[1].contentType) {
                Object.assign(jumps, subcontent(events, index));
                index = jumps[index];
                more = true;
            }
        } else if (event[1]._container) {
            otherIndex = index;
            lineIndex = undefined;
            while(otherIndex--){
                otherEvent = events.get(otherIndex);
                if (otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding || otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                    if (otherEvent[0] === 'enter') {
                        if (lineIndex) {
                            events.get(lineIndex)[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank;
                        }
                        otherEvent[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding;
                        lineIndex = otherIndex;
                    }
                } else if (otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix || otherEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemIndent) {
                // Move past.
                } else {
                    break;
                }
            }
            if (lineIndex) {
                // Fix position.
                event[1].end = {
                    ...events.get(lineIndex)[1].start
                };
                // Switch container exit w/ line endings.
                parameters = events.slice(lineIndex, index);
                parameters.unshift(event);
                events.splice(lineIndex, index - lineIndex + 1, parameters);
            }
        }
    }
    // The changes to the `events` buffer must be copied back into the eventsArray
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$chunked$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splice"])(eventsArray, 0, Number.POSITIVE_INFINITY, events.slice(0));
    return !more;
}
/**
 * Tokenize embedded tokens.
 *
 * @param {SpliceBuffer<Event>} events
 *   Events.
 * @param {number} eventIndex
 *   Index.
 * @returns {Record<string, number>}
 *   Gaps.
 */ function subcontent(events, eventIndex) {
    const token = events.get(eventIndex)[1];
    const context = events.get(eventIndex)[2];
    let startPosition = eventIndex - 1;
    /** @type {Array<number>} */ const startPositions = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(token.contentType, 'expected `contentType` on subtokens');
    let tokenizer = token._tokenizer;
    if (!tokenizer) {
        tokenizer = context.parser[token.contentType](token.start);
        if (token._contentTypeTextTrailing) {
            tokenizer._contentTypeTextTrailing = true;
        }
    }
    const childEvents = tokenizer.events;
    /** @type {Array<[number, number]>} */ const jumps = [];
    /** @type {Record<string, number>} */ const gaps = {};
    /** @type {Array<Chunk>} */ let stream;
    /** @type {Token | undefined} */ let previous;
    let index = -1;
    /** @type {Token | undefined} */ let current = token;
    let adjust = 0;
    let start = 0;
    const breaks = [
        start
    ];
    // Loop forward through the linked tokens to pass them in order to the
    // subtokenizer.
    while(current){
        // Find the position of the event for this token.
        while(events.get(++startPosition)[1] !== current){
        // Empty.
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!previous || current.previous === previous, 'expected previous to match');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!previous || previous.next === current, 'expected next to match');
        startPositions.push(startPosition);
        if (!current._tokenizer) {
            stream = context.sliceStream(current);
            if (!current.next) {
                stream.push(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof);
            }
            if (previous) {
                tokenizer.defineSkip(current.start);
            }
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = true;
            }
            tokenizer.write(stream);
            if (current._isInFirstContentOfListItem) {
                tokenizer._gfmTasklistFirstContentOfListItem = undefined;
            }
        }
        // Unravel the next token.
        previous = current;
        current = current.next;
    }
    // Now, loop back through all events (and linked tokens), to figure out which
    // parts belong where.
    current = token;
    while(++index < childEvents.length){
        if (// Find a void token that includes a break.
        childEvents[index][0] === 'exit' && childEvents[index - 1][0] === 'enter' && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(current, 'expected a current token');
            start = index + 1;
            breaks.push(start);
            // Help GC.
            current._tokenizer = undefined;
            current.previous = undefined;
            current = current.next;
        }
    }
    // Help GC.
    tokenizer.events = [];
    // If there’s one more token (which is the cases for lines that end in an
    // EOF), that’s perfect: the last point we found starts it.
    // If there isn’t then make sure any remaining content is added to it.
    if (current) {
        // Help GC.
        current._tokenizer = undefined;
        current.previous = undefined;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(!current.next, 'expected no next token');
    } else {
        breaks.pop();
    }
    // Now splice the events from the subtokenizer into the current events,
    // moving back to front so that splice indices aren’t affected.
    index = breaks.length;
    while(index--){
        const slice = childEvents.slice(breaks[index], breaks[index + 1]);
        const start = startPositions.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(start !== undefined, 'expected a start position when splicing');
        jumps.push([
            start,
            start + slice.length - 1
        ]);
        events.splice(start, 2, slice);
    }
    jumps.reverse();
    index = -1;
    while(++index < jumps.length){
        gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
        adjust += jumps[index][1] - jumps[index][0] - 1;
    }
    return gaps;
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-classify-character/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Code} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "classifyCharacter",
    ()=>classifyCharacter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
;
function classifyCharacter(code) {
    if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unicodeWhitespace"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].characterGroupWhitespace;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unicodePunctuation"])(code)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].characterGroupPunctuation;
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-resolve-all/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Event, Resolver, TokenizeContext} from 'micromark-util-types'
 */ /**
 * Call all `resolveAll`s.
 *
 * @param {ReadonlyArray<{resolveAll?: Resolver | undefined}>} constructs
 *   List of constructs, optionally with `resolveAll`s.
 * @param {Array<Event>} events
 *   List of events.
 * @param {TokenizeContext} context
 *   Context used by `tokenize`.
 * @returns {Array<Event>}
 *   Changed events.
 */ __turbopack_context__.s([
    "resolveAll",
    ()=>resolveAll
]);
function resolveAll(constructs, events, context) {
    /** @type {Array<Resolver>} */ const called = [];
    let index = -1;
    while(++index < constructs.length){
        const resolve = constructs[index].resolveAll;
        if (resolve && !called.includes(resolve)) {
            events = resolve(events, context);
            called.push(resolve);
        }
    }
    return events;
}
}),
"[project]/PREFECT-10/node_modules/character-entities/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "characterEntities",
    ()=>characterEntities
]);
const characterEntities = {
    AElig: 'Æ',
    AMP: '&',
    Aacute: 'Á',
    Abreve: 'Ă',
    Acirc: 'Â',
    Acy: 'А',
    Afr: '𝔄',
    Agrave: 'À',
    Alpha: 'Α',
    Amacr: 'Ā',
    And: '⩓',
    Aogon: 'Ą',
    Aopf: '𝔸',
    ApplyFunction: '⁡',
    Aring: 'Å',
    Ascr: '𝒜',
    Assign: '≔',
    Atilde: 'Ã',
    Auml: 'Ä',
    Backslash: '∖',
    Barv: '⫧',
    Barwed: '⌆',
    Bcy: 'Б',
    Because: '∵',
    Bernoullis: 'ℬ',
    Beta: 'Β',
    Bfr: '𝔅',
    Bopf: '𝔹',
    Breve: '˘',
    Bscr: 'ℬ',
    Bumpeq: '≎',
    CHcy: 'Ч',
    COPY: '©',
    Cacute: 'Ć',
    Cap: '⋒',
    CapitalDifferentialD: 'ⅅ',
    Cayleys: 'ℭ',
    Ccaron: 'Č',
    Ccedil: 'Ç',
    Ccirc: 'Ĉ',
    Cconint: '∰',
    Cdot: 'Ċ',
    Cedilla: '¸',
    CenterDot: '·',
    Cfr: 'ℭ',
    Chi: 'Χ',
    CircleDot: '⊙',
    CircleMinus: '⊖',
    CirclePlus: '⊕',
    CircleTimes: '⊗',
    ClockwiseContourIntegral: '∲',
    CloseCurlyDoubleQuote: '”',
    CloseCurlyQuote: '’',
    Colon: '∷',
    Colone: '⩴',
    Congruent: '≡',
    Conint: '∯',
    ContourIntegral: '∮',
    Copf: 'ℂ',
    Coproduct: '∐',
    CounterClockwiseContourIntegral: '∳',
    Cross: '⨯',
    Cscr: '𝒞',
    Cup: '⋓',
    CupCap: '≍',
    DD: 'ⅅ',
    DDotrahd: '⤑',
    DJcy: 'Ђ',
    DScy: 'Ѕ',
    DZcy: 'Џ',
    Dagger: '‡',
    Darr: '↡',
    Dashv: '⫤',
    Dcaron: 'Ď',
    Dcy: 'Д',
    Del: '∇',
    Delta: 'Δ',
    Dfr: '𝔇',
    DiacriticalAcute: '´',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    DiacriticalGrave: '`',
    DiacriticalTilde: '˜',
    Diamond: '⋄',
    DifferentialD: 'ⅆ',
    Dopf: '𝔻',
    Dot: '¨',
    DotDot: '⃜',
    DotEqual: '≐',
    DoubleContourIntegral: '∯',
    DoubleDot: '¨',
    DoubleDownArrow: '⇓',
    DoubleLeftArrow: '⇐',
    DoubleLeftRightArrow: '⇔',
    DoubleLeftTee: '⫤',
    DoubleLongLeftArrow: '⟸',
    DoubleLongLeftRightArrow: '⟺',
    DoubleLongRightArrow: '⟹',
    DoubleRightArrow: '⇒',
    DoubleRightTee: '⊨',
    DoubleUpArrow: '⇑',
    DoubleUpDownArrow: '⇕',
    DoubleVerticalBar: '∥',
    DownArrow: '↓',
    DownArrowBar: '⤓',
    DownArrowUpArrow: '⇵',
    DownBreve: '̑',
    DownLeftRightVector: '⥐',
    DownLeftTeeVector: '⥞',
    DownLeftVector: '↽',
    DownLeftVectorBar: '⥖',
    DownRightTeeVector: '⥟',
    DownRightVector: '⇁',
    DownRightVectorBar: '⥗',
    DownTee: '⊤',
    DownTeeArrow: '↧',
    Downarrow: '⇓',
    Dscr: '𝒟',
    Dstrok: 'Đ',
    ENG: 'Ŋ',
    ETH: 'Ð',
    Eacute: 'É',
    Ecaron: 'Ě',
    Ecirc: 'Ê',
    Ecy: 'Э',
    Edot: 'Ė',
    Efr: '𝔈',
    Egrave: 'È',
    Element: '∈',
    Emacr: 'Ē',
    EmptySmallSquare: '◻',
    EmptyVerySmallSquare: '▫',
    Eogon: 'Ę',
    Eopf: '𝔼',
    Epsilon: 'Ε',
    Equal: '⩵',
    EqualTilde: '≂',
    Equilibrium: '⇌',
    Escr: 'ℰ',
    Esim: '⩳',
    Eta: 'Η',
    Euml: 'Ë',
    Exists: '∃',
    ExponentialE: 'ⅇ',
    Fcy: 'Ф',
    Ffr: '𝔉',
    FilledSmallSquare: '◼',
    FilledVerySmallSquare: '▪',
    Fopf: '𝔽',
    ForAll: '∀',
    Fouriertrf: 'ℱ',
    Fscr: 'ℱ',
    GJcy: 'Ѓ',
    GT: '>',
    Gamma: 'Γ',
    Gammad: 'Ϝ',
    Gbreve: 'Ğ',
    Gcedil: 'Ģ',
    Gcirc: 'Ĝ',
    Gcy: 'Г',
    Gdot: 'Ġ',
    Gfr: '𝔊',
    Gg: '⋙',
    Gopf: '𝔾',
    GreaterEqual: '≥',
    GreaterEqualLess: '⋛',
    GreaterFullEqual: '≧',
    GreaterGreater: '⪢',
    GreaterLess: '≷',
    GreaterSlantEqual: '⩾',
    GreaterTilde: '≳',
    Gscr: '𝒢',
    Gt: '≫',
    HARDcy: 'Ъ',
    Hacek: 'ˇ',
    Hat: '^',
    Hcirc: 'Ĥ',
    Hfr: 'ℌ',
    HilbertSpace: 'ℋ',
    Hopf: 'ℍ',
    HorizontalLine: '─',
    Hscr: 'ℋ',
    Hstrok: 'Ħ',
    HumpDownHump: '≎',
    HumpEqual: '≏',
    IEcy: 'Е',
    IJlig: 'Ĳ',
    IOcy: 'Ё',
    Iacute: 'Í',
    Icirc: 'Î',
    Icy: 'И',
    Idot: 'İ',
    Ifr: 'ℑ',
    Igrave: 'Ì',
    Im: 'ℑ',
    Imacr: 'Ī',
    ImaginaryI: 'ⅈ',
    Implies: '⇒',
    Int: '∬',
    Integral: '∫',
    Intersection: '⋂',
    InvisibleComma: '⁣',
    InvisibleTimes: '⁢',
    Iogon: 'Į',
    Iopf: '𝕀',
    Iota: 'Ι',
    Iscr: 'ℐ',
    Itilde: 'Ĩ',
    Iukcy: 'І',
    Iuml: 'Ï',
    Jcirc: 'Ĵ',
    Jcy: 'Й',
    Jfr: '𝔍',
    Jopf: '𝕁',
    Jscr: '𝒥',
    Jsercy: 'Ј',
    Jukcy: 'Є',
    KHcy: 'Х',
    KJcy: 'Ќ',
    Kappa: 'Κ',
    Kcedil: 'Ķ',
    Kcy: 'К',
    Kfr: '𝔎',
    Kopf: '𝕂',
    Kscr: '𝒦',
    LJcy: 'Љ',
    LT: '<',
    Lacute: 'Ĺ',
    Lambda: 'Λ',
    Lang: '⟪',
    Laplacetrf: 'ℒ',
    Larr: '↞',
    Lcaron: 'Ľ',
    Lcedil: 'Ļ',
    Lcy: 'Л',
    LeftAngleBracket: '⟨',
    LeftArrow: '←',
    LeftArrowBar: '⇤',
    LeftArrowRightArrow: '⇆',
    LeftCeiling: '⌈',
    LeftDoubleBracket: '⟦',
    LeftDownTeeVector: '⥡',
    LeftDownVector: '⇃',
    LeftDownVectorBar: '⥙',
    LeftFloor: '⌊',
    LeftRightArrow: '↔',
    LeftRightVector: '⥎',
    LeftTee: '⊣',
    LeftTeeArrow: '↤',
    LeftTeeVector: '⥚',
    LeftTriangle: '⊲',
    LeftTriangleBar: '⧏',
    LeftTriangleEqual: '⊴',
    LeftUpDownVector: '⥑',
    LeftUpTeeVector: '⥠',
    LeftUpVector: '↿',
    LeftUpVectorBar: '⥘',
    LeftVector: '↼',
    LeftVectorBar: '⥒',
    Leftarrow: '⇐',
    Leftrightarrow: '⇔',
    LessEqualGreater: '⋚',
    LessFullEqual: '≦',
    LessGreater: '≶',
    LessLess: '⪡',
    LessSlantEqual: '⩽',
    LessTilde: '≲',
    Lfr: '𝔏',
    Ll: '⋘',
    Lleftarrow: '⇚',
    Lmidot: 'Ŀ',
    LongLeftArrow: '⟵',
    LongLeftRightArrow: '⟷',
    LongRightArrow: '⟶',
    Longleftarrow: '⟸',
    Longleftrightarrow: '⟺',
    Longrightarrow: '⟹',
    Lopf: '𝕃',
    LowerLeftArrow: '↙',
    LowerRightArrow: '↘',
    Lscr: 'ℒ',
    Lsh: '↰',
    Lstrok: 'Ł',
    Lt: '≪',
    Map: '⤅',
    Mcy: 'М',
    MediumSpace: ' ',
    Mellintrf: 'ℳ',
    Mfr: '𝔐',
    MinusPlus: '∓',
    Mopf: '𝕄',
    Mscr: 'ℳ',
    Mu: 'Μ',
    NJcy: 'Њ',
    Nacute: 'Ń',
    Ncaron: 'Ň',
    Ncedil: 'Ņ',
    Ncy: 'Н',
    NegativeMediumSpace: '​',
    NegativeThickSpace: '​',
    NegativeThinSpace: '​',
    NegativeVeryThinSpace: '​',
    NestedGreaterGreater: '≫',
    NestedLessLess: '≪',
    NewLine: '\n',
    Nfr: '𝔑',
    NoBreak: '⁠',
    NonBreakingSpace: ' ',
    Nopf: 'ℕ',
    Not: '⫬',
    NotCongruent: '≢',
    NotCupCap: '≭',
    NotDoubleVerticalBar: '∦',
    NotElement: '∉',
    NotEqual: '≠',
    NotEqualTilde: '≂̸',
    NotExists: '∄',
    NotGreater: '≯',
    NotGreaterEqual: '≱',
    NotGreaterFullEqual: '≧̸',
    NotGreaterGreater: '≫̸',
    NotGreaterLess: '≹',
    NotGreaterSlantEqual: '⩾̸',
    NotGreaterTilde: '≵',
    NotHumpDownHump: '≎̸',
    NotHumpEqual: '≏̸',
    NotLeftTriangle: '⋪',
    NotLeftTriangleBar: '⧏̸',
    NotLeftTriangleEqual: '⋬',
    NotLess: '≮',
    NotLessEqual: '≰',
    NotLessGreater: '≸',
    NotLessLess: '≪̸',
    NotLessSlantEqual: '⩽̸',
    NotLessTilde: '≴',
    NotNestedGreaterGreater: '⪢̸',
    NotNestedLessLess: '⪡̸',
    NotPrecedes: '⊀',
    NotPrecedesEqual: '⪯̸',
    NotPrecedesSlantEqual: '⋠',
    NotReverseElement: '∌',
    NotRightTriangle: '⋫',
    NotRightTriangleBar: '⧐̸',
    NotRightTriangleEqual: '⋭',
    NotSquareSubset: '⊏̸',
    NotSquareSubsetEqual: '⋢',
    NotSquareSuperset: '⊐̸',
    NotSquareSupersetEqual: '⋣',
    NotSubset: '⊂⃒',
    NotSubsetEqual: '⊈',
    NotSucceeds: '⊁',
    NotSucceedsEqual: '⪰̸',
    NotSucceedsSlantEqual: '⋡',
    NotSucceedsTilde: '≿̸',
    NotSuperset: '⊃⃒',
    NotSupersetEqual: '⊉',
    NotTilde: '≁',
    NotTildeEqual: '≄',
    NotTildeFullEqual: '≇',
    NotTildeTilde: '≉',
    NotVerticalBar: '∤',
    Nscr: '𝒩',
    Ntilde: 'Ñ',
    Nu: 'Ν',
    OElig: 'Œ',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Ocy: 'О',
    Odblac: 'Ő',
    Ofr: '𝔒',
    Ograve: 'Ò',
    Omacr: 'Ō',
    Omega: 'Ω',
    Omicron: 'Ο',
    Oopf: '𝕆',
    OpenCurlyDoubleQuote: '“',
    OpenCurlyQuote: '‘',
    Or: '⩔',
    Oscr: '𝒪',
    Oslash: 'Ø',
    Otilde: 'Õ',
    Otimes: '⨷',
    Ouml: 'Ö',
    OverBar: '‾',
    OverBrace: '⏞',
    OverBracket: '⎴',
    OverParenthesis: '⏜',
    PartialD: '∂',
    Pcy: 'П',
    Pfr: '𝔓',
    Phi: 'Φ',
    Pi: 'Π',
    PlusMinus: '±',
    Poincareplane: 'ℌ',
    Popf: 'ℙ',
    Pr: '⪻',
    Precedes: '≺',
    PrecedesEqual: '⪯',
    PrecedesSlantEqual: '≼',
    PrecedesTilde: '≾',
    Prime: '″',
    Product: '∏',
    Proportion: '∷',
    Proportional: '∝',
    Pscr: '𝒫',
    Psi: 'Ψ',
    QUOT: '"',
    Qfr: '𝔔',
    Qopf: 'ℚ',
    Qscr: '𝒬',
    RBarr: '⤐',
    REG: '®',
    Racute: 'Ŕ',
    Rang: '⟫',
    Rarr: '↠',
    Rarrtl: '⤖',
    Rcaron: 'Ř',
    Rcedil: 'Ŗ',
    Rcy: 'Р',
    Re: 'ℜ',
    ReverseElement: '∋',
    ReverseEquilibrium: '⇋',
    ReverseUpEquilibrium: '⥯',
    Rfr: 'ℜ',
    Rho: 'Ρ',
    RightAngleBracket: '⟩',
    RightArrow: '→',
    RightArrowBar: '⇥',
    RightArrowLeftArrow: '⇄',
    RightCeiling: '⌉',
    RightDoubleBracket: '⟧',
    RightDownTeeVector: '⥝',
    RightDownVector: '⇂',
    RightDownVectorBar: '⥕',
    RightFloor: '⌋',
    RightTee: '⊢',
    RightTeeArrow: '↦',
    RightTeeVector: '⥛',
    RightTriangle: '⊳',
    RightTriangleBar: '⧐',
    RightTriangleEqual: '⊵',
    RightUpDownVector: '⥏',
    RightUpTeeVector: '⥜',
    RightUpVector: '↾',
    RightUpVectorBar: '⥔',
    RightVector: '⇀',
    RightVectorBar: '⥓',
    Rightarrow: '⇒',
    Ropf: 'ℝ',
    RoundImplies: '⥰',
    Rrightarrow: '⇛',
    Rscr: 'ℛ',
    Rsh: '↱',
    RuleDelayed: '⧴',
    SHCHcy: 'Щ',
    SHcy: 'Ш',
    SOFTcy: 'Ь',
    Sacute: 'Ś',
    Sc: '⪼',
    Scaron: 'Š',
    Scedil: 'Ş',
    Scirc: 'Ŝ',
    Scy: 'С',
    Sfr: '𝔖',
    ShortDownArrow: '↓',
    ShortLeftArrow: '←',
    ShortRightArrow: '→',
    ShortUpArrow: '↑',
    Sigma: 'Σ',
    SmallCircle: '∘',
    Sopf: '𝕊',
    Sqrt: '√',
    Square: '□',
    SquareIntersection: '⊓',
    SquareSubset: '⊏',
    SquareSubsetEqual: '⊑',
    SquareSuperset: '⊐',
    SquareSupersetEqual: '⊒',
    SquareUnion: '⊔',
    Sscr: '𝒮',
    Star: '⋆',
    Sub: '⋐',
    Subset: '⋐',
    SubsetEqual: '⊆',
    Succeeds: '≻',
    SucceedsEqual: '⪰',
    SucceedsSlantEqual: '≽',
    SucceedsTilde: '≿',
    SuchThat: '∋',
    Sum: '∑',
    Sup: '⋑',
    Superset: '⊃',
    SupersetEqual: '⊇',
    Supset: '⋑',
    THORN: 'Þ',
    TRADE: '™',
    TSHcy: 'Ћ',
    TScy: 'Ц',
    Tab: '\t',
    Tau: 'Τ',
    Tcaron: 'Ť',
    Tcedil: 'Ţ',
    Tcy: 'Т',
    Tfr: '𝔗',
    Therefore: '∴',
    Theta: 'Θ',
    ThickSpace: '  ',
    ThinSpace: ' ',
    Tilde: '∼',
    TildeEqual: '≃',
    TildeFullEqual: '≅',
    TildeTilde: '≈',
    Topf: '𝕋',
    TripleDot: '⃛',
    Tscr: '𝒯',
    Tstrok: 'Ŧ',
    Uacute: 'Ú',
    Uarr: '↟',
    Uarrocir: '⥉',
    Ubrcy: 'Ў',
    Ubreve: 'Ŭ',
    Ucirc: 'Û',
    Ucy: 'У',
    Udblac: 'Ű',
    Ufr: '𝔘',
    Ugrave: 'Ù',
    Umacr: 'Ū',
    UnderBar: '_',
    UnderBrace: '⏟',
    UnderBracket: '⎵',
    UnderParenthesis: '⏝',
    Union: '⋃',
    UnionPlus: '⊎',
    Uogon: 'Ų',
    Uopf: '𝕌',
    UpArrow: '↑',
    UpArrowBar: '⤒',
    UpArrowDownArrow: '⇅',
    UpDownArrow: '↕',
    UpEquilibrium: '⥮',
    UpTee: '⊥',
    UpTeeArrow: '↥',
    Uparrow: '⇑',
    Updownarrow: '⇕',
    UpperLeftArrow: '↖',
    UpperRightArrow: '↗',
    Upsi: 'ϒ',
    Upsilon: 'Υ',
    Uring: 'Ů',
    Uscr: '𝒰',
    Utilde: 'Ũ',
    Uuml: 'Ü',
    VDash: '⊫',
    Vbar: '⫫',
    Vcy: 'В',
    Vdash: '⊩',
    Vdashl: '⫦',
    Vee: '⋁',
    Verbar: '‖',
    Vert: '‖',
    VerticalBar: '∣',
    VerticalLine: '|',
    VerticalSeparator: '❘',
    VerticalTilde: '≀',
    VeryThinSpace: ' ',
    Vfr: '𝔙',
    Vopf: '𝕍',
    Vscr: '𝒱',
    Vvdash: '⊪',
    Wcirc: 'Ŵ',
    Wedge: '⋀',
    Wfr: '𝔚',
    Wopf: '𝕎',
    Wscr: '𝒲',
    Xfr: '𝔛',
    Xi: 'Ξ',
    Xopf: '𝕏',
    Xscr: '𝒳',
    YAcy: 'Я',
    YIcy: 'Ї',
    YUcy: 'Ю',
    Yacute: 'Ý',
    Ycirc: 'Ŷ',
    Ycy: 'Ы',
    Yfr: '𝔜',
    Yopf: '𝕐',
    Yscr: '𝒴',
    Yuml: 'Ÿ',
    ZHcy: 'Ж',
    Zacute: 'Ź',
    Zcaron: 'Ž',
    Zcy: 'З',
    Zdot: 'Ż',
    ZeroWidthSpace: '​',
    Zeta: 'Ζ',
    Zfr: 'ℨ',
    Zopf: 'ℤ',
    Zscr: '𝒵',
    aacute: 'á',
    abreve: 'ă',
    ac: '∾',
    acE: '∾̳',
    acd: '∿',
    acirc: 'â',
    acute: '´',
    acy: 'а',
    aelig: 'æ',
    af: '⁡',
    afr: '𝔞',
    agrave: 'à',
    alefsym: 'ℵ',
    aleph: 'ℵ',
    alpha: 'α',
    amacr: 'ā',
    amalg: '⨿',
    amp: '&',
    and: '∧',
    andand: '⩕',
    andd: '⩜',
    andslope: '⩘',
    andv: '⩚',
    ang: '∠',
    ange: '⦤',
    angle: '∠',
    angmsd: '∡',
    angmsdaa: '⦨',
    angmsdab: '⦩',
    angmsdac: '⦪',
    angmsdad: '⦫',
    angmsdae: '⦬',
    angmsdaf: '⦭',
    angmsdag: '⦮',
    angmsdah: '⦯',
    angrt: '∟',
    angrtvb: '⊾',
    angrtvbd: '⦝',
    angsph: '∢',
    angst: 'Å',
    angzarr: '⍼',
    aogon: 'ą',
    aopf: '𝕒',
    ap: '≈',
    apE: '⩰',
    apacir: '⩯',
    ape: '≊',
    apid: '≋',
    apos: "'",
    approx: '≈',
    approxeq: '≊',
    aring: 'å',
    ascr: '𝒶',
    ast: '*',
    asymp: '≈',
    asympeq: '≍',
    atilde: 'ã',
    auml: 'ä',
    awconint: '∳',
    awint: '⨑',
    bNot: '⫭',
    backcong: '≌',
    backepsilon: '϶',
    backprime: '‵',
    backsim: '∽',
    backsimeq: '⋍',
    barvee: '⊽',
    barwed: '⌅',
    barwedge: '⌅',
    bbrk: '⎵',
    bbrktbrk: '⎶',
    bcong: '≌',
    bcy: 'б',
    bdquo: '„',
    becaus: '∵',
    because: '∵',
    bemptyv: '⦰',
    bepsi: '϶',
    bernou: 'ℬ',
    beta: 'β',
    beth: 'ℶ',
    between: '≬',
    bfr: '𝔟',
    bigcap: '⋂',
    bigcirc: '◯',
    bigcup: '⋃',
    bigodot: '⨀',
    bigoplus: '⨁',
    bigotimes: '⨂',
    bigsqcup: '⨆',
    bigstar: '★',
    bigtriangledown: '▽',
    bigtriangleup: '△',
    biguplus: '⨄',
    bigvee: '⋁',
    bigwedge: '⋀',
    bkarow: '⤍',
    blacklozenge: '⧫',
    blacksquare: '▪',
    blacktriangle: '▴',
    blacktriangledown: '▾',
    blacktriangleleft: '◂',
    blacktriangleright: '▸',
    blank: '␣',
    blk12: '▒',
    blk14: '░',
    blk34: '▓',
    block: '█',
    bne: '=⃥',
    bnequiv: '≡⃥',
    bnot: '⌐',
    bopf: '𝕓',
    bot: '⊥',
    bottom: '⊥',
    bowtie: '⋈',
    boxDL: '╗',
    boxDR: '╔',
    boxDl: '╖',
    boxDr: '╓',
    boxH: '═',
    boxHD: '╦',
    boxHU: '╩',
    boxHd: '╤',
    boxHu: '╧',
    boxUL: '╝',
    boxUR: '╚',
    boxUl: '╜',
    boxUr: '╙',
    boxV: '║',
    boxVH: '╬',
    boxVL: '╣',
    boxVR: '╠',
    boxVh: '╫',
    boxVl: '╢',
    boxVr: '╟',
    boxbox: '⧉',
    boxdL: '╕',
    boxdR: '╒',
    boxdl: '┐',
    boxdr: '┌',
    boxh: '─',
    boxhD: '╥',
    boxhU: '╨',
    boxhd: '┬',
    boxhu: '┴',
    boxminus: '⊟',
    boxplus: '⊞',
    boxtimes: '⊠',
    boxuL: '╛',
    boxuR: '╘',
    boxul: '┘',
    boxur: '└',
    boxv: '│',
    boxvH: '╪',
    boxvL: '╡',
    boxvR: '╞',
    boxvh: '┼',
    boxvl: '┤',
    boxvr: '├',
    bprime: '‵',
    breve: '˘',
    brvbar: '¦',
    bscr: '𝒷',
    bsemi: '⁏',
    bsim: '∽',
    bsime: '⋍',
    bsol: '\\',
    bsolb: '⧅',
    bsolhsub: '⟈',
    bull: '•',
    bullet: '•',
    bump: '≎',
    bumpE: '⪮',
    bumpe: '≏',
    bumpeq: '≏',
    cacute: 'ć',
    cap: '∩',
    capand: '⩄',
    capbrcup: '⩉',
    capcap: '⩋',
    capcup: '⩇',
    capdot: '⩀',
    caps: '∩︀',
    caret: '⁁',
    caron: 'ˇ',
    ccaps: '⩍',
    ccaron: 'č',
    ccedil: 'ç',
    ccirc: 'ĉ',
    ccups: '⩌',
    ccupssm: '⩐',
    cdot: 'ċ',
    cedil: '¸',
    cemptyv: '⦲',
    cent: '¢',
    centerdot: '·',
    cfr: '𝔠',
    chcy: 'ч',
    check: '✓',
    checkmark: '✓',
    chi: 'χ',
    cir: '○',
    cirE: '⧃',
    circ: 'ˆ',
    circeq: '≗',
    circlearrowleft: '↺',
    circlearrowright: '↻',
    circledR: '®',
    circledS: 'Ⓢ',
    circledast: '⊛',
    circledcirc: '⊚',
    circleddash: '⊝',
    cire: '≗',
    cirfnint: '⨐',
    cirmid: '⫯',
    cirscir: '⧂',
    clubs: '♣',
    clubsuit: '♣',
    colon: ':',
    colone: '≔',
    coloneq: '≔',
    comma: ',',
    commat: '@',
    comp: '∁',
    compfn: '∘',
    complement: '∁',
    complexes: 'ℂ',
    cong: '≅',
    congdot: '⩭',
    conint: '∮',
    copf: '𝕔',
    coprod: '∐',
    copy: '©',
    copysr: '℗',
    crarr: '↵',
    cross: '✗',
    cscr: '𝒸',
    csub: '⫏',
    csube: '⫑',
    csup: '⫐',
    csupe: '⫒',
    ctdot: '⋯',
    cudarrl: '⤸',
    cudarrr: '⤵',
    cuepr: '⋞',
    cuesc: '⋟',
    cularr: '↶',
    cularrp: '⤽',
    cup: '∪',
    cupbrcap: '⩈',
    cupcap: '⩆',
    cupcup: '⩊',
    cupdot: '⊍',
    cupor: '⩅',
    cups: '∪︀',
    curarr: '↷',
    curarrm: '⤼',
    curlyeqprec: '⋞',
    curlyeqsucc: '⋟',
    curlyvee: '⋎',
    curlywedge: '⋏',
    curren: '¤',
    curvearrowleft: '↶',
    curvearrowright: '↷',
    cuvee: '⋎',
    cuwed: '⋏',
    cwconint: '∲',
    cwint: '∱',
    cylcty: '⌭',
    dArr: '⇓',
    dHar: '⥥',
    dagger: '†',
    daleth: 'ℸ',
    darr: '↓',
    dash: '‐',
    dashv: '⊣',
    dbkarow: '⤏',
    dblac: '˝',
    dcaron: 'ď',
    dcy: 'д',
    dd: 'ⅆ',
    ddagger: '‡',
    ddarr: '⇊',
    ddotseq: '⩷',
    deg: '°',
    delta: 'δ',
    demptyv: '⦱',
    dfisht: '⥿',
    dfr: '𝔡',
    dharl: '⇃',
    dharr: '⇂',
    diam: '⋄',
    diamond: '⋄',
    diamondsuit: '♦',
    diams: '♦',
    die: '¨',
    digamma: 'ϝ',
    disin: '⋲',
    div: '÷',
    divide: '÷',
    divideontimes: '⋇',
    divonx: '⋇',
    djcy: 'ђ',
    dlcorn: '⌞',
    dlcrop: '⌍',
    dollar: '$',
    dopf: '𝕕',
    dot: '˙',
    doteq: '≐',
    doteqdot: '≑',
    dotminus: '∸',
    dotplus: '∔',
    dotsquare: '⊡',
    doublebarwedge: '⌆',
    downarrow: '↓',
    downdownarrows: '⇊',
    downharpoonleft: '⇃',
    downharpoonright: '⇂',
    drbkarow: '⤐',
    drcorn: '⌟',
    drcrop: '⌌',
    dscr: '𝒹',
    dscy: 'ѕ',
    dsol: '⧶',
    dstrok: 'đ',
    dtdot: '⋱',
    dtri: '▿',
    dtrif: '▾',
    duarr: '⇵',
    duhar: '⥯',
    dwangle: '⦦',
    dzcy: 'џ',
    dzigrarr: '⟿',
    eDDot: '⩷',
    eDot: '≑',
    eacute: 'é',
    easter: '⩮',
    ecaron: 'ě',
    ecir: '≖',
    ecirc: 'ê',
    ecolon: '≕',
    ecy: 'э',
    edot: 'ė',
    ee: 'ⅇ',
    efDot: '≒',
    efr: '𝔢',
    eg: '⪚',
    egrave: 'è',
    egs: '⪖',
    egsdot: '⪘',
    el: '⪙',
    elinters: '⏧',
    ell: 'ℓ',
    els: '⪕',
    elsdot: '⪗',
    emacr: 'ē',
    empty: '∅',
    emptyset: '∅',
    emptyv: '∅',
    emsp13: ' ',
    emsp14: ' ',
    emsp: ' ',
    eng: 'ŋ',
    ensp: ' ',
    eogon: 'ę',
    eopf: '𝕖',
    epar: '⋕',
    eparsl: '⧣',
    eplus: '⩱',
    epsi: 'ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    eqcirc: '≖',
    eqcolon: '≕',
    eqsim: '≂',
    eqslantgtr: '⪖',
    eqslantless: '⪕',
    equals: '=',
    equest: '≟',
    equiv: '≡',
    equivDD: '⩸',
    eqvparsl: '⧥',
    erDot: '≓',
    erarr: '⥱',
    escr: 'ℯ',
    esdot: '≐',
    esim: '≂',
    eta: 'η',
    eth: 'ð',
    euml: 'ë',
    euro: '€',
    excl: '!',
    exist: '∃',
    expectation: 'ℰ',
    exponentiale: 'ⅇ',
    fallingdotseq: '≒',
    fcy: 'ф',
    female: '♀',
    ffilig: 'ﬃ',
    fflig: 'ﬀ',
    ffllig: 'ﬄ',
    ffr: '𝔣',
    filig: 'ﬁ',
    fjlig: 'fj',
    flat: '♭',
    fllig: 'ﬂ',
    fltns: '▱',
    fnof: 'ƒ',
    fopf: '𝕗',
    forall: '∀',
    fork: '⋔',
    forkv: '⫙',
    fpartint: '⨍',
    frac12: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄',
    frown: '⌢',
    fscr: '𝒻',
    gE: '≧',
    gEl: '⪌',
    gacute: 'ǵ',
    gamma: 'γ',
    gammad: 'ϝ',
    gap: '⪆',
    gbreve: 'ğ',
    gcirc: 'ĝ',
    gcy: 'г',
    gdot: 'ġ',
    ge: '≥',
    gel: '⋛',
    geq: '≥',
    geqq: '≧',
    geqslant: '⩾',
    ges: '⩾',
    gescc: '⪩',
    gesdot: '⪀',
    gesdoto: '⪂',
    gesdotol: '⪄',
    gesl: '⋛︀',
    gesles: '⪔',
    gfr: '𝔤',
    gg: '≫',
    ggg: '⋙',
    gimel: 'ℷ',
    gjcy: 'ѓ',
    gl: '≷',
    glE: '⪒',
    gla: '⪥',
    glj: '⪤',
    gnE: '≩',
    gnap: '⪊',
    gnapprox: '⪊',
    gne: '⪈',
    gneq: '⪈',
    gneqq: '≩',
    gnsim: '⋧',
    gopf: '𝕘',
    grave: '`',
    gscr: 'ℊ',
    gsim: '≳',
    gsime: '⪎',
    gsiml: '⪐',
    gt: '>',
    gtcc: '⪧',
    gtcir: '⩺',
    gtdot: '⋗',
    gtlPar: '⦕',
    gtquest: '⩼',
    gtrapprox: '⪆',
    gtrarr: '⥸',
    gtrdot: '⋗',
    gtreqless: '⋛',
    gtreqqless: '⪌',
    gtrless: '≷',
    gtrsim: '≳',
    gvertneqq: '≩︀',
    gvnE: '≩︀',
    hArr: '⇔',
    hairsp: ' ',
    half: '½',
    hamilt: 'ℋ',
    hardcy: 'ъ',
    harr: '↔',
    harrcir: '⥈',
    harrw: '↭',
    hbar: 'ℏ',
    hcirc: 'ĥ',
    hearts: '♥',
    heartsuit: '♥',
    hellip: '…',
    hercon: '⊹',
    hfr: '𝔥',
    hksearow: '⤥',
    hkswarow: '⤦',
    hoarr: '⇿',
    homtht: '∻',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    hopf: '𝕙',
    horbar: '―',
    hscr: '𝒽',
    hslash: 'ℏ',
    hstrok: 'ħ',
    hybull: '⁃',
    hyphen: '‐',
    iacute: 'í',
    ic: '⁣',
    icirc: 'î',
    icy: 'и',
    iecy: 'е',
    iexcl: '¡',
    iff: '⇔',
    ifr: '𝔦',
    igrave: 'ì',
    ii: 'ⅈ',
    iiiint: '⨌',
    iiint: '∭',
    iinfin: '⧜',
    iiota: '℩',
    ijlig: 'ĳ',
    imacr: 'ī',
    image: 'ℑ',
    imagline: 'ℐ',
    imagpart: 'ℑ',
    imath: 'ı',
    imof: '⊷',
    imped: 'Ƶ',
    in: '∈',
    incare: '℅',
    infin: '∞',
    infintie: '⧝',
    inodot: 'ı',
    int: '∫',
    intcal: '⊺',
    integers: 'ℤ',
    intercal: '⊺',
    intlarhk: '⨗',
    intprod: '⨼',
    iocy: 'ё',
    iogon: 'į',
    iopf: '𝕚',
    iota: 'ι',
    iprod: '⨼',
    iquest: '¿',
    iscr: '𝒾',
    isin: '∈',
    isinE: '⋹',
    isindot: '⋵',
    isins: '⋴',
    isinsv: '⋳',
    isinv: '∈',
    it: '⁢',
    itilde: 'ĩ',
    iukcy: 'і',
    iuml: 'ï',
    jcirc: 'ĵ',
    jcy: 'й',
    jfr: '𝔧',
    jmath: 'ȷ',
    jopf: '𝕛',
    jscr: '𝒿',
    jsercy: 'ј',
    jukcy: 'є',
    kappa: 'κ',
    kappav: 'ϰ',
    kcedil: 'ķ',
    kcy: 'к',
    kfr: '𝔨',
    kgreen: 'ĸ',
    khcy: 'х',
    kjcy: 'ќ',
    kopf: '𝕜',
    kscr: '𝓀',
    lAarr: '⇚',
    lArr: '⇐',
    lAtail: '⤛',
    lBarr: '⤎',
    lE: '≦',
    lEg: '⪋',
    lHar: '⥢',
    lacute: 'ĺ',
    laemptyv: '⦴',
    lagran: 'ℒ',
    lambda: 'λ',
    lang: '⟨',
    langd: '⦑',
    langle: '⟨',
    lap: '⪅',
    laquo: '«',
    larr: '←',
    larrb: '⇤',
    larrbfs: '⤟',
    larrfs: '⤝',
    larrhk: '↩',
    larrlp: '↫',
    larrpl: '⤹',
    larrsim: '⥳',
    larrtl: '↢',
    lat: '⪫',
    latail: '⤙',
    late: '⪭',
    lates: '⪭︀',
    lbarr: '⤌',
    lbbrk: '❲',
    lbrace: '{',
    lbrack: '[',
    lbrke: '⦋',
    lbrksld: '⦏',
    lbrkslu: '⦍',
    lcaron: 'ľ',
    lcedil: 'ļ',
    lceil: '⌈',
    lcub: '{',
    lcy: 'л',
    ldca: '⤶',
    ldquo: '“',
    ldquor: '„',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    ldsh: '↲',
    le: '≤',
    leftarrow: '←',
    leftarrowtail: '↢',
    leftharpoondown: '↽',
    leftharpoonup: '↼',
    leftleftarrows: '⇇',
    leftrightarrow: '↔',
    leftrightarrows: '⇆',
    leftrightharpoons: '⇋',
    leftrightsquigarrow: '↭',
    leftthreetimes: '⋋',
    leg: '⋚',
    leq: '≤',
    leqq: '≦',
    leqslant: '⩽',
    les: '⩽',
    lescc: '⪨',
    lesdot: '⩿',
    lesdoto: '⪁',
    lesdotor: '⪃',
    lesg: '⋚︀',
    lesges: '⪓',
    lessapprox: '⪅',
    lessdot: '⋖',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    lessgtr: '≶',
    lesssim: '≲',
    lfisht: '⥼',
    lfloor: '⌊',
    lfr: '𝔩',
    lg: '≶',
    lgE: '⪑',
    lhard: '↽',
    lharu: '↼',
    lharul: '⥪',
    lhblk: '▄',
    ljcy: 'љ',
    ll: '≪',
    llarr: '⇇',
    llcorner: '⌞',
    llhard: '⥫',
    lltri: '◺',
    lmidot: 'ŀ',
    lmoust: '⎰',
    lmoustache: '⎰',
    lnE: '≨',
    lnap: '⪉',
    lnapprox: '⪉',
    lne: '⪇',
    lneq: '⪇',
    lneqq: '≨',
    lnsim: '⋦',
    loang: '⟬',
    loarr: '⇽',
    lobrk: '⟦',
    longleftarrow: '⟵',
    longleftrightarrow: '⟷',
    longmapsto: '⟼',
    longrightarrow: '⟶',
    looparrowleft: '↫',
    looparrowright: '↬',
    lopar: '⦅',
    lopf: '𝕝',
    loplus: '⨭',
    lotimes: '⨴',
    lowast: '∗',
    lowbar: '_',
    loz: '◊',
    lozenge: '◊',
    lozf: '⧫',
    lpar: '(',
    lparlt: '⦓',
    lrarr: '⇆',
    lrcorner: '⌟',
    lrhar: '⇋',
    lrhard: '⥭',
    lrm: '‎',
    lrtri: '⊿',
    lsaquo: '‹',
    lscr: '𝓁',
    lsh: '↰',
    lsim: '≲',
    lsime: '⪍',
    lsimg: '⪏',
    lsqb: '[',
    lsquo: '‘',
    lsquor: '‚',
    lstrok: 'ł',
    lt: '<',
    ltcc: '⪦',
    ltcir: '⩹',
    ltdot: '⋖',
    lthree: '⋋',
    ltimes: '⋉',
    ltlarr: '⥶',
    ltquest: '⩻',
    ltrPar: '⦖',
    ltri: '◃',
    ltrie: '⊴',
    ltrif: '◂',
    lurdshar: '⥊',
    luruhar: '⥦',
    lvertneqq: '≨︀',
    lvnE: '≨︀',
    mDDot: '∺',
    macr: '¯',
    male: '♂',
    malt: '✠',
    maltese: '✠',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    mapstoleft: '↤',
    mapstoup: '↥',
    marker: '▮',
    mcomma: '⨩',
    mcy: 'м',
    mdash: '—',
    measuredangle: '∡',
    mfr: '𝔪',
    mho: '℧',
    micro: 'µ',
    mid: '∣',
    midast: '*',
    midcir: '⫰',
    middot: '·',
    minus: '−',
    minusb: '⊟',
    minusd: '∸',
    minusdu: '⨪',
    mlcp: '⫛',
    mldr: '…',
    mnplus: '∓',
    models: '⊧',
    mopf: '𝕞',
    mp: '∓',
    mscr: '𝓂',
    mstpos: '∾',
    mu: 'μ',
    multimap: '⊸',
    mumap: '⊸',
    nGg: '⋙̸',
    nGt: '≫⃒',
    nGtv: '≫̸',
    nLeftarrow: '⇍',
    nLeftrightarrow: '⇎',
    nLl: '⋘̸',
    nLt: '≪⃒',
    nLtv: '≪̸',
    nRightarrow: '⇏',
    nVDash: '⊯',
    nVdash: '⊮',
    nabla: '∇',
    nacute: 'ń',
    nang: '∠⃒',
    nap: '≉',
    napE: '⩰̸',
    napid: '≋̸',
    napos: 'ŉ',
    napprox: '≉',
    natur: '♮',
    natural: '♮',
    naturals: 'ℕ',
    nbsp: ' ',
    nbump: '≎̸',
    nbumpe: '≏̸',
    ncap: '⩃',
    ncaron: 'ň',
    ncedil: 'ņ',
    ncong: '≇',
    ncongdot: '⩭̸',
    ncup: '⩂',
    ncy: 'н',
    ndash: '–',
    ne: '≠',
    neArr: '⇗',
    nearhk: '⤤',
    nearr: '↗',
    nearrow: '↗',
    nedot: '≐̸',
    nequiv: '≢',
    nesear: '⤨',
    nesim: '≂̸',
    nexist: '∄',
    nexists: '∄',
    nfr: '𝔫',
    ngE: '≧̸',
    nge: '≱',
    ngeq: '≱',
    ngeqq: '≧̸',
    ngeqslant: '⩾̸',
    nges: '⩾̸',
    ngsim: '≵',
    ngt: '≯',
    ngtr: '≯',
    nhArr: '⇎',
    nharr: '↮',
    nhpar: '⫲',
    ni: '∋',
    nis: '⋼',
    nisd: '⋺',
    niv: '∋',
    njcy: 'њ',
    nlArr: '⇍',
    nlE: '≦̸',
    nlarr: '↚',
    nldr: '‥',
    nle: '≰',
    nleftarrow: '↚',
    nleftrightarrow: '↮',
    nleq: '≰',
    nleqq: '≦̸',
    nleqslant: '⩽̸',
    nles: '⩽̸',
    nless: '≮',
    nlsim: '≴',
    nlt: '≮',
    nltri: '⋪',
    nltrie: '⋬',
    nmid: '∤',
    nopf: '𝕟',
    not: '¬',
    notin: '∉',
    notinE: '⋹̸',
    notindot: '⋵̸',
    notinva: '∉',
    notinvb: '⋷',
    notinvc: '⋶',
    notni: '∌',
    notniva: '∌',
    notnivb: '⋾',
    notnivc: '⋽',
    npar: '∦',
    nparallel: '∦',
    nparsl: '⫽⃥',
    npart: '∂̸',
    npolint: '⨔',
    npr: '⊀',
    nprcue: '⋠',
    npre: '⪯̸',
    nprec: '⊀',
    npreceq: '⪯̸',
    nrArr: '⇏',
    nrarr: '↛',
    nrarrc: '⤳̸',
    nrarrw: '↝̸',
    nrightarrow: '↛',
    nrtri: '⋫',
    nrtrie: '⋭',
    nsc: '⊁',
    nsccue: '⋡',
    nsce: '⪰̸',
    nscr: '𝓃',
    nshortmid: '∤',
    nshortparallel: '∦',
    nsim: '≁',
    nsime: '≄',
    nsimeq: '≄',
    nsmid: '∤',
    nspar: '∦',
    nsqsube: '⋢',
    nsqsupe: '⋣',
    nsub: '⊄',
    nsubE: '⫅̸',
    nsube: '⊈',
    nsubset: '⊂⃒',
    nsubseteq: '⊈',
    nsubseteqq: '⫅̸',
    nsucc: '⊁',
    nsucceq: '⪰̸',
    nsup: '⊅',
    nsupE: '⫆̸',
    nsupe: '⊉',
    nsupset: '⊃⃒',
    nsupseteq: '⊉',
    nsupseteqq: '⫆̸',
    ntgl: '≹',
    ntilde: 'ñ',
    ntlg: '≸',
    ntriangleleft: '⋪',
    ntrianglelefteq: '⋬',
    ntriangleright: '⋫',
    ntrianglerighteq: '⋭',
    nu: 'ν',
    num: '#',
    numero: '№',
    numsp: ' ',
    nvDash: '⊭',
    nvHarr: '⤄',
    nvap: '≍⃒',
    nvdash: '⊬',
    nvge: '≥⃒',
    nvgt: '>⃒',
    nvinfin: '⧞',
    nvlArr: '⤂',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvltrie: '⊴⃒',
    nvrArr: '⤃',
    nvrtrie: '⊵⃒',
    nvsim: '∼⃒',
    nwArr: '⇖',
    nwarhk: '⤣',
    nwarr: '↖',
    nwarrow: '↖',
    nwnear: '⤧',
    oS: 'Ⓢ',
    oacute: 'ó',
    oast: '⊛',
    ocir: '⊚',
    ocirc: 'ô',
    ocy: 'о',
    odash: '⊝',
    odblac: 'ő',
    odiv: '⨸',
    odot: '⊙',
    odsold: '⦼',
    oelig: 'œ',
    ofcir: '⦿',
    ofr: '𝔬',
    ogon: '˛',
    ograve: 'ò',
    ogt: '⧁',
    ohbar: '⦵',
    ohm: 'Ω',
    oint: '∮',
    olarr: '↺',
    olcir: '⦾',
    olcross: '⦻',
    oline: '‾',
    olt: '⧀',
    omacr: 'ō',
    omega: 'ω',
    omicron: 'ο',
    omid: '⦶',
    ominus: '⊖',
    oopf: '𝕠',
    opar: '⦷',
    operp: '⦹',
    oplus: '⊕',
    or: '∨',
    orarr: '↻',
    ord: '⩝',
    order: 'ℴ',
    orderof: 'ℴ',
    ordf: 'ª',
    ordm: 'º',
    origof: '⊶',
    oror: '⩖',
    orslope: '⩗',
    orv: '⩛',
    oscr: 'ℴ',
    oslash: 'ø',
    osol: '⊘',
    otilde: 'õ',
    otimes: '⊗',
    otimesas: '⨶',
    ouml: 'ö',
    ovbar: '⌽',
    par: '∥',
    para: '¶',
    parallel: '∥',
    parsim: '⫳',
    parsl: '⫽',
    part: '∂',
    pcy: 'п',
    percnt: '%',
    period: '.',
    permil: '‰',
    perp: '⊥',
    pertenk: '‱',
    pfr: '𝔭',
    phi: 'φ',
    phiv: 'ϕ',
    phmmat: 'ℳ',
    phone: '☎',
    pi: 'π',
    pitchfork: '⋔',
    piv: 'ϖ',
    planck: 'ℏ',
    planckh: 'ℎ',
    plankv: 'ℏ',
    plus: '+',
    plusacir: '⨣',
    plusb: '⊞',
    pluscir: '⨢',
    plusdo: '∔',
    plusdu: '⨥',
    pluse: '⩲',
    plusmn: '±',
    plussim: '⨦',
    plustwo: '⨧',
    pm: '±',
    pointint: '⨕',
    popf: '𝕡',
    pound: '£',
    pr: '≺',
    prE: '⪳',
    prap: '⪷',
    prcue: '≼',
    pre: '⪯',
    prec: '≺',
    precapprox: '⪷',
    preccurlyeq: '≼',
    preceq: '⪯',
    precnapprox: '⪹',
    precneqq: '⪵',
    precnsim: '⋨',
    precsim: '≾',
    prime: '′',
    primes: 'ℙ',
    prnE: '⪵',
    prnap: '⪹',
    prnsim: '⋨',
    prod: '∏',
    profalar: '⌮',
    profline: '⌒',
    profsurf: '⌓',
    prop: '∝',
    propto: '∝',
    prsim: '≾',
    prurel: '⊰',
    pscr: '𝓅',
    psi: 'ψ',
    puncsp: ' ',
    qfr: '𝔮',
    qint: '⨌',
    qopf: '𝕢',
    qprime: '⁗',
    qscr: '𝓆',
    quaternions: 'ℍ',
    quatint: '⨖',
    quest: '?',
    questeq: '≟',
    quot: '"',
    rAarr: '⇛',
    rArr: '⇒',
    rAtail: '⤜',
    rBarr: '⤏',
    rHar: '⥤',
    race: '∽̱',
    racute: 'ŕ',
    radic: '√',
    raemptyv: '⦳',
    rang: '⟩',
    rangd: '⦒',
    range: '⦥',
    rangle: '⟩',
    raquo: '»',
    rarr: '→',
    rarrap: '⥵',
    rarrb: '⇥',
    rarrbfs: '⤠',
    rarrc: '⤳',
    rarrfs: '⤞',
    rarrhk: '↪',
    rarrlp: '↬',
    rarrpl: '⥅',
    rarrsim: '⥴',
    rarrtl: '↣',
    rarrw: '↝',
    ratail: '⤚',
    ratio: '∶',
    rationals: 'ℚ',
    rbarr: '⤍',
    rbbrk: '❳',
    rbrace: '}',
    rbrack: ']',
    rbrke: '⦌',
    rbrksld: '⦎',
    rbrkslu: '⦐',
    rcaron: 'ř',
    rcedil: 'ŗ',
    rceil: '⌉',
    rcub: '}',
    rcy: 'р',
    rdca: '⤷',
    rdldhar: '⥩',
    rdquo: '”',
    rdquor: '”',
    rdsh: '↳',
    real: 'ℜ',
    realine: 'ℛ',
    realpart: 'ℜ',
    reals: 'ℝ',
    rect: '▭',
    reg: '®',
    rfisht: '⥽',
    rfloor: '⌋',
    rfr: '𝔯',
    rhard: '⇁',
    rharu: '⇀',
    rharul: '⥬',
    rho: 'ρ',
    rhov: 'ϱ',
    rightarrow: '→',
    rightarrowtail: '↣',
    rightharpoondown: '⇁',
    rightharpoonup: '⇀',
    rightleftarrows: '⇄',
    rightleftharpoons: '⇌',
    rightrightarrows: '⇉',
    rightsquigarrow: '↝',
    rightthreetimes: '⋌',
    ring: '˚',
    risingdotseq: '≓',
    rlarr: '⇄',
    rlhar: '⇌',
    rlm: '‏',
    rmoust: '⎱',
    rmoustache: '⎱',
    rnmid: '⫮',
    roang: '⟭',
    roarr: '⇾',
    robrk: '⟧',
    ropar: '⦆',
    ropf: '𝕣',
    roplus: '⨮',
    rotimes: '⨵',
    rpar: ')',
    rpargt: '⦔',
    rppolint: '⨒',
    rrarr: '⇉',
    rsaquo: '›',
    rscr: '𝓇',
    rsh: '↱',
    rsqb: ']',
    rsquo: '’',
    rsquor: '’',
    rthree: '⋌',
    rtimes: '⋊',
    rtri: '▹',
    rtrie: '⊵',
    rtrif: '▸',
    rtriltri: '⧎',
    ruluhar: '⥨',
    rx: '℞',
    sacute: 'ś',
    sbquo: '‚',
    sc: '≻',
    scE: '⪴',
    scap: '⪸',
    scaron: 'š',
    sccue: '≽',
    sce: '⪰',
    scedil: 'ş',
    scirc: 'ŝ',
    scnE: '⪶',
    scnap: '⪺',
    scnsim: '⋩',
    scpolint: '⨓',
    scsim: '≿',
    scy: 'с',
    sdot: '⋅',
    sdotb: '⊡',
    sdote: '⩦',
    seArr: '⇘',
    searhk: '⤥',
    searr: '↘',
    searrow: '↘',
    sect: '§',
    semi: ';',
    seswar: '⤩',
    setminus: '∖',
    setmn: '∖',
    sext: '✶',
    sfr: '𝔰',
    sfrown: '⌢',
    sharp: '♯',
    shchcy: 'щ',
    shcy: 'ш',
    shortmid: '∣',
    shortparallel: '∥',
    shy: '­',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    sim: '∼',
    simdot: '⩪',
    sime: '≃',
    simeq: '≃',
    simg: '⪞',
    simgE: '⪠',
    siml: '⪝',
    simlE: '⪟',
    simne: '≆',
    simplus: '⨤',
    simrarr: '⥲',
    slarr: '←',
    smallsetminus: '∖',
    smashp: '⨳',
    smeparsl: '⧤',
    smid: '∣',
    smile: '⌣',
    smt: '⪪',
    smte: '⪬',
    smtes: '⪬︀',
    softcy: 'ь',
    sol: '/',
    solb: '⧄',
    solbar: '⌿',
    sopf: '𝕤',
    spades: '♠',
    spadesuit: '♠',
    spar: '∥',
    sqcap: '⊓',
    sqcaps: '⊓︀',
    sqcup: '⊔',
    sqcups: '⊔︀',
    sqsub: '⊏',
    sqsube: '⊑',
    sqsubset: '⊏',
    sqsubseteq: '⊑',
    sqsup: '⊐',
    sqsupe: '⊒',
    sqsupset: '⊐',
    sqsupseteq: '⊒',
    squ: '□',
    square: '□',
    squarf: '▪',
    squf: '▪',
    srarr: '→',
    sscr: '𝓈',
    ssetmn: '∖',
    ssmile: '⌣',
    sstarf: '⋆',
    star: '☆',
    starf: '★',
    straightepsilon: 'ϵ',
    straightphi: 'ϕ',
    strns: '¯',
    sub: '⊂',
    subE: '⫅',
    subdot: '⪽',
    sube: '⊆',
    subedot: '⫃',
    submult: '⫁',
    subnE: '⫋',
    subne: '⊊',
    subplus: '⪿',
    subrarr: '⥹',
    subset: '⊂',
    subseteq: '⊆',
    subseteqq: '⫅',
    subsetneq: '⊊',
    subsetneqq: '⫋',
    subsim: '⫇',
    subsub: '⫕',
    subsup: '⫓',
    succ: '≻',
    succapprox: '⪸',
    succcurlyeq: '≽',
    succeq: '⪰',
    succnapprox: '⪺',
    succneqq: '⪶',
    succnsim: '⋩',
    succsim: '≿',
    sum: '∑',
    sung: '♪',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    sup: '⊃',
    supE: '⫆',
    supdot: '⪾',
    supdsub: '⫘',
    supe: '⊇',
    supedot: '⫄',
    suphsol: '⟉',
    suphsub: '⫗',
    suplarr: '⥻',
    supmult: '⫂',
    supnE: '⫌',
    supne: '⊋',
    supplus: '⫀',
    supset: '⊃',
    supseteq: '⊇',
    supseteqq: '⫆',
    supsetneq: '⊋',
    supsetneqq: '⫌',
    supsim: '⫈',
    supsub: '⫔',
    supsup: '⫖',
    swArr: '⇙',
    swarhk: '⤦',
    swarr: '↙',
    swarrow: '↙',
    swnwar: '⤪',
    szlig: 'ß',
    target: '⌖',
    tau: 'τ',
    tbrk: '⎴',
    tcaron: 'ť',
    tcedil: 'ţ',
    tcy: 'т',
    tdot: '⃛',
    telrec: '⌕',
    tfr: '𝔱',
    there4: '∴',
    therefore: '∴',
    theta: 'θ',
    thetasym: 'ϑ',
    thetav: 'ϑ',
    thickapprox: '≈',
    thicksim: '∼',
    thinsp: ' ',
    thkap: '≈',
    thksim: '∼',
    thorn: 'þ',
    tilde: '˜',
    times: '×',
    timesb: '⊠',
    timesbar: '⨱',
    timesd: '⨰',
    tint: '∭',
    toea: '⤨',
    top: '⊤',
    topbot: '⌶',
    topcir: '⫱',
    topf: '𝕥',
    topfork: '⫚',
    tosa: '⤩',
    tprime: '‴',
    trade: '™',
    triangle: '▵',
    triangledown: '▿',
    triangleleft: '◃',
    trianglelefteq: '⊴',
    triangleq: '≜',
    triangleright: '▹',
    trianglerighteq: '⊵',
    tridot: '◬',
    trie: '≜',
    triminus: '⨺',
    triplus: '⨹',
    trisb: '⧍',
    tritime: '⨻',
    trpezium: '⏢',
    tscr: '𝓉',
    tscy: 'ц',
    tshcy: 'ћ',
    tstrok: 'ŧ',
    twixt: '≬',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    uArr: '⇑',
    uHar: '⥣',
    uacute: 'ú',
    uarr: '↑',
    ubrcy: 'ў',
    ubreve: 'ŭ',
    ucirc: 'û',
    ucy: 'у',
    udarr: '⇅',
    udblac: 'ű',
    udhar: '⥮',
    ufisht: '⥾',
    ufr: '𝔲',
    ugrave: 'ù',
    uharl: '↿',
    uharr: '↾',
    uhblk: '▀',
    ulcorn: '⌜',
    ulcorner: '⌜',
    ulcrop: '⌏',
    ultri: '◸',
    umacr: 'ū',
    uml: '¨',
    uogon: 'ų',
    uopf: '𝕦',
    uparrow: '↑',
    updownarrow: '↕',
    upharpoonleft: '↿',
    upharpoonright: '↾',
    uplus: '⊎',
    upsi: 'υ',
    upsih: 'ϒ',
    upsilon: 'υ',
    upuparrows: '⇈',
    urcorn: '⌝',
    urcorner: '⌝',
    urcrop: '⌎',
    uring: 'ů',
    urtri: '◹',
    uscr: '𝓊',
    utdot: '⋰',
    utilde: 'ũ',
    utri: '▵',
    utrif: '▴',
    uuarr: '⇈',
    uuml: 'ü',
    uwangle: '⦧',
    vArr: '⇕',
    vBar: '⫨',
    vBarv: '⫩',
    vDash: '⊨',
    vangrt: '⦜',
    varepsilon: 'ϵ',
    varkappa: 'ϰ',
    varnothing: '∅',
    varphi: 'ϕ',
    varpi: 'ϖ',
    varpropto: '∝',
    varr: '↕',
    varrho: 'ϱ',
    varsigma: 'ς',
    varsubsetneq: '⊊︀',
    varsubsetneqq: '⫋︀',
    varsupsetneq: '⊋︀',
    varsupsetneqq: '⫌︀',
    vartheta: 'ϑ',
    vartriangleleft: '⊲',
    vartriangleright: '⊳',
    vcy: 'в',
    vdash: '⊢',
    vee: '∨',
    veebar: '⊻',
    veeeq: '≚',
    vellip: '⋮',
    verbar: '|',
    vert: '|',
    vfr: '𝔳',
    vltri: '⊲',
    vnsub: '⊂⃒',
    vnsup: '⊃⃒',
    vopf: '𝕧',
    vprop: '∝',
    vrtri: '⊳',
    vscr: '𝓋',
    vsubnE: '⫋︀',
    vsubne: '⊊︀',
    vsupnE: '⫌︀',
    vsupne: '⊋︀',
    vzigzag: '⦚',
    wcirc: 'ŵ',
    wedbar: '⩟',
    wedge: '∧',
    wedgeq: '≙',
    weierp: '℘',
    wfr: '𝔴',
    wopf: '𝕨',
    wp: '℘',
    wr: '≀',
    wreath: '≀',
    wscr: '𝓌',
    xcap: '⋂',
    xcirc: '◯',
    xcup: '⋃',
    xdtri: '▽',
    xfr: '𝔵',
    xhArr: '⟺',
    xharr: '⟷',
    xi: 'ξ',
    xlArr: '⟸',
    xlarr: '⟵',
    xmap: '⟼',
    xnis: '⋻',
    xodot: '⨀',
    xopf: '𝕩',
    xoplus: '⨁',
    xotime: '⨂',
    xrArr: '⟹',
    xrarr: '⟶',
    xscr: '𝓍',
    xsqcup: '⨆',
    xuplus: '⨄',
    xutri: '△',
    xvee: '⋁',
    xwedge: '⋀',
    yacute: 'ý',
    yacy: 'я',
    ycirc: 'ŷ',
    ycy: 'ы',
    yen: '¥',
    yfr: '𝔶',
    yicy: 'ї',
    yopf: '𝕪',
    yscr: '𝓎',
    yucy: 'ю',
    yuml: 'ÿ',
    zacute: 'ź',
    zcaron: 'ž',
    zcy: 'з',
    zdot: 'ż',
    zeetrf: 'ℨ',
    zeta: 'ζ',
    zfr: '𝔷',
    zhcy: 'ж',
    zigrarr: '⇝',
    zopf: '𝕫',
    zscr: '𝓏',
    zwj: '‍',
    zwnj: '‌'
};
}),
"[project]/PREFECT-10/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeNamedCharacterReference",
    ()=>decodeNamedCharacterReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/character-entities/index.js [app-ssr] (ecmascript)");
;
// To do: next major: use `Object.hasOwn`.
const own = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
    return own.call(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEntities"], value) ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$character$2d$entities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterEntities"][value] : false;
}
}),
"[project]/PREFECT-10/node_modules/micromark-factory-destination/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State, TokenType} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryDestination",
    ()=>factoryDestination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
    const limit = max || Number.POSITIVE_INFINITY;
    let balance = 0;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of destination.
   *
   * ```markdown
   * > | <aa>
   *     ^
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan) {
            effects.enter(type);
            effects.enter(literalType);
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            return enclosedBefore;
        }
        // ASCII control, space, closing paren.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiControl"])(code)) {
            return nok(code);
        }
        effects.enter(type);
        effects.enter(rawType);
        effects.enter(stringType);
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return raw(code);
    }
    /**
   * After `<`, at an enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosedBefore(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan) {
            effects.enter(literalMarkerType);
            effects.consume(code);
            effects.exit(literalMarkerType);
            effects.exit(literalType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return enclosed(code);
    }
    /**
   * In enclosed destination.
   *
   * ```markdown
   * > | <aa>
   *      ^
   * ```
   *
   * @type {State}
   */ function enclosed(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            effects.exit(stringType);
            return enclosedBefore(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? enclosedEscape : enclosed;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | <a\*a>
   *        ^
   * ```
   *
   * @type {State}
   */ function enclosedEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lessThan || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].greaterThan || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return enclosed;
        }
        return enclosed(code);
    }
    /**
   * In raw destination.
   *
   * ```markdown
   * > | aa
   *     ^
   * ```
   *
   * @type {State}
   */ function raw(code) {
        if (!balance && (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEndingOrSpace"])(code))) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            effects.exit(stringType);
            effects.exit(rawType);
            effects.exit(type);
            return ok(code);
        }
        if (balance < limit && code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis) {
            effects.consume(code);
            balance++;
            return raw;
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis) {
            effects.consume(code);
            balance--;
            return raw;
        }
        // ASCII control (but *not* `\0`) and space and `(`.
        // Note: in `markdown-rs`, `\0` exists in codes, in `micromark-js` it
        // doesn’t.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiControl"])(code)) {
            return nok(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? rawEscape : raw;
    }
    /**
   * After `\`, at special character.
   *
   * ```markdown
   * > | a\*a
   *       ^
   * ```
   *
   * @type {State}
   */ function rawEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return raw;
        }
        return raw(code);
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-factory-label/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Effects,
 *   State,
 *   TokenizeContext,
 *   TokenType
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryLabel",
    ()=>factoryLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
    const self = this;
    let size = 0;
    /** @type {boolean} */ let seen;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of label.
   *
   * ```markdown
   * > | [a]
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket, 'expected `[`');
        effects.enter(type);
        effects.enter(markerType);
        effects.consume(code);
        effects.exit(markerType);
        effects.enter(stringType);
        return atBreak;
    }
    /**
   * In label, at something, before something else.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (size > __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket && !seen || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].caret && !size && '_hiddenFootnoteSupport' in self.parser.constructs) {
            return nok(code);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.exit(stringType);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        // To do: indent? Link chunks and EOLs together?
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            return atBreak;
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return labelInside(code);
    }
    /**
   * In label, in text.
   *
   * ```markdown
   * > | [a]
   *      ^
   * ```
   *
   * @type {State}
   */ function labelInside(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code) || size++ > __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].linkReferenceSizeMax) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            return atBreak(code);
        }
        effects.consume(code);
        if (!seen) seen = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? labelEscape : labelInside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | [a\*a]
   *        ^
   * ```
   *
   * @type {State}
   */ function labelEscape(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftSquareBracket || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightSquareBracket) {
            effects.consume(code);
            size++;
            return labelInside;
        }
        return labelInside(code);
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-factory-title/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Code,
 *   Effects,
 *   State,
 *   TokenType
 * } from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryTitle",
    ()=>factoryTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
    /** @type {NonNullable<Code>} */ let marker;
    return start;
    //TURBOPACK unreachable
    ;
    /**
   * Start of title.
   *
   * ```markdown
   * > | "a"
   *     ^
   * ```
   *
   * @type {State}
   */ function start(code) {
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].quotationMark || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].apostrophe || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis) {
            effects.enter(type);
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            marker = code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].leftParenthesis ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].rightParenthesis : code;
            return begin;
        }
        return nok(code);
    }
    /**
   * After opening marker.
   *
   * This is also used at the closing marker.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function begin(code) {
        if (code === marker) {
            effects.enter(markerType);
            effects.consume(code);
            effects.exit(markerType);
            effects.exit(type);
            return ok;
        }
        effects.enter(stringType);
        return atBreak(code);
    }
    /**
   * At something, before something else.
   *
   * ```markdown
   * > | "a"
   *      ^
   * ```
   *
   * @type {State}
   */ function atBreak(code) {
        if (code === marker) {
            effects.exit(stringType);
            return begin(marker);
        }
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof) {
            return nok(code);
        }
        // Note: blank lines can’t exist in content.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            // To do: use `space_or_tab_eol_with_options`, connect.
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, atBreak, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix);
        }
        effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString, {
            contentType: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].contentTypeString
        });
        return inside(code);
    }
    /**
   *
   *
   * @type {State}
   */ function inside(code) {
        if (code === marker || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].eof || (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].chunkString);
            return atBreak(code);
        }
        effects.consume(code);
        return code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash ? escape : inside;
    }
    /**
   * After `\`, at a special character.
   *
   * ```markdown
   * > | "a\*b"
   *      ^
   * ```
   *
   * @type {State}
   */ function escape(code) {
        if (code === marker || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].backslash) {
            effects.consume(code);
            return inside;
        }
        return inside(code);
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-factory-whitespace/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Effects, State} from 'micromark-util-types'
 */ __turbopack_context__.s([
    "factoryWhitespace",
    ()=>factoryWhitespace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-factory-space/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
;
;
;
function factoryWhitespace(effects, ok) {
    /** @type {boolean} */ let seen;
    return start;
    //TURBOPACK unreachable
    ;
    /** @type {State} */ function start(code) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownLineEnding"])(code)) {
            effects.enter(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            effects.consume(code);
            effects.exit(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding);
            seen = true;
            return start;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["markdownSpace"])(code)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$factory$2d$space$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["factorySpace"])(effects, start, seen ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix : __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineSuffix)(code);
        }
        return ok(code);
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-normalize-identifier/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeIdentifier",
    ()=>normalizeIdentifier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
function normalizeIdentifier(value) {
    return value// Collapse markdown whitespace.
    .replace(/[\t\n\r ]+/g, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].space)// Trim.
    .replace(/^ | $/g, '')// Some characters are considered “uppercase”, but if their lowercase
    // counterpart is uppercased will result in a different uppercase
    // character.
    // Hence, to get that form, we perform both lower- and uppercase.
    // Upper case makes sure keys will not interact with default prototypal
    // methods: no method is uppercase.
    .toLowerCase().toUpperCase();
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-html-tag-name/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * List of lowercase HTML “block” tag names.
 *
 * The list, when parsing HTML (flow), results in more relaxed rules (condition
 * 6).
 * Because they are known blocks, the HTML-like syntax doesn’t have to be
 * strictly parsed.
 * For tag names not in this list, a more strict algorithm (condition 7) is used
 * to detect whether the HTML-like syntax is seen as HTML (flow) or not.
 *
 * This is copied from:
 * <https://spec.commonmark.org/0.30/#html-blocks>.
 *
 * > 👉 **Note**: `search` was added in `CommonMark@0.31`.
 */ __turbopack_context__.s([
    "htmlBlockNames",
    ()=>htmlBlockNames,
    "htmlRawNames",
    ()=>htmlRawNames
]);
const htmlBlockNames = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul'
];
const htmlRawNames = [
    'pre',
    'script',
    'style',
    'textarea'
];
}),
"[project]/PREFECT-10/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeNumericCharacterReference",
    ()=>decodeNumericCharacterReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
function decodeNumericCharacterReference(value, base) {
    const code = Number.parseInt(value, base);
    if (// C0 except for HT, LF, FF, CR, space.
    code < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].ht || code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].vt || code > __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].cr && code < __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].space || code > __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].tilde && code < 160 || code > 55_295 && code < 57_344 || code > 64_975 && code < 65_008 || /* eslint-disable no-bitwise */ (code & 65_535) === 65_535 || (code & 65_535) === 65_534 || /* eslint-enable no-bitwise */ // Out of range
    code > 1_114_111) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].replacementCharacter;
    }
    return String.fromCodePoint(code);
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-decode-string/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decodeString",
    ()=>decodeString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
;
;
;
const characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
    return value.replace(characterEscapeOrReference, decode);
}
/**
 * @param {string} $0
 *   Match.
 * @param {string} $1
 *   Character escape.
 * @param {string} $2
 *   Character reference.
 * @returns {string}
 *   Decoded value
 */ function decode($0, $1, $2) {
    if ($1) {
        // Escape.
        return $1;
    }
    // Reference.
    const head = $2.charCodeAt(0);
    if (head === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].numberSign) {
        const head = $2.charCodeAt(1);
        const hex = head === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].lowercaseX || head === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].uppercaseX;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumericCharacterReference"])($2.slice(hex ? 2 : 1), hex ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseHexadecimal : __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])($2) || $0;
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-from-markdown/dev/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {
 *   Break,
 *   Blockquote,
 *   Code,
 *   Definition,
 *   Emphasis,
 *   Heading,
 *   Html,
 *   Image,
 *   InlineCode,
 *   Link,
 *   ListItem,
 *   List,
 *   Nodes,
 *   Paragraph,
 *   PhrasingContent,
 *   ReferenceType,
 *   Root,
 *   Strong,
 *   Text,
 *   ThematicBreak
 * } from 'mdast'
 * @import {
 *   Encoding,
 *   Event,
 *   Token,
 *   Value
 * } from 'micromark-util-types'
 * @import {Point} from 'unist'
 * @import {
 *   CompileContext,
 *   CompileData,
 *   Config,
 *   Extension,
 *   Handle,
 *   OnEnterError,
 *   Options
 * } from './types.js'
 */ __turbopack_context__.s([
    "fromMarkdown",
    ()=>fromMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-string/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$postprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/postprocess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$preprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark/dev/lib/preprocess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$string$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-decode-string/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-normalize-identifier/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/decode-named-character-reference/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-stringify-position/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const own = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
    if (typeof encoding !== 'string') {
        options = encoding;
        encoding = undefined;
    }
    return compiler(options)((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$postprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postprocess"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(options).document().write((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2f$dev$2f$lib$2f$preprocess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preprocess"])()(value, encoding, true))));
}
/**
 * Note this compiler only understand complete buffering, not streaming.
 *
 * @param {Options | null | undefined} [options]
 */ function compiler(options) {
    /** @type {Config} */ const config = {
        transforms: [],
        canContainEols: [
            'emphasis',
            'fragment',
            'heading',
            'paragraph',
            'strong'
        ],
        enter: {
            autolink: opener(link),
            autolinkProtocol: onenterdata,
            autolinkEmail: onenterdata,
            atxHeading: opener(heading),
            blockQuote: opener(blockQuote),
            characterEscape: onenterdata,
            characterReference: onenterdata,
            codeFenced: opener(codeFlow),
            codeFencedFenceInfo: buffer,
            codeFencedFenceMeta: buffer,
            codeIndented: opener(codeFlow, buffer),
            codeText: opener(codeText, buffer),
            codeTextData: onenterdata,
            data: onenterdata,
            codeFlowValue: onenterdata,
            definition: opener(definition),
            definitionDestinationString: buffer,
            definitionLabelString: buffer,
            definitionTitleString: buffer,
            emphasis: opener(emphasis),
            hardBreakEscape: opener(hardBreak),
            hardBreakTrailing: opener(hardBreak),
            htmlFlow: opener(html, buffer),
            htmlFlowData: onenterdata,
            htmlText: opener(html, buffer),
            htmlTextData: onenterdata,
            image: opener(image),
            label: buffer,
            link: opener(link),
            listItem: opener(listItem),
            listItemValue: onenterlistitemvalue,
            listOrdered: opener(list, onenterlistordered),
            listUnordered: opener(list),
            paragraph: opener(paragraph),
            reference: onenterreference,
            referenceString: buffer,
            resourceDestinationString: buffer,
            resourceTitleString: buffer,
            setextHeading: opener(heading),
            strong: opener(strong),
            thematicBreak: opener(thematicBreak)
        },
        exit: {
            atxHeading: closer(),
            atxHeadingSequence: onexitatxheadingsequence,
            autolink: closer(),
            autolinkEmail: onexitautolinkemail,
            autolinkProtocol: onexitautolinkprotocol,
            blockQuote: closer(),
            characterEscapeValue: onexitdata,
            characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
            characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
            characterReferenceValue: onexitcharacterreferencevalue,
            characterReference: onexitcharacterreference,
            codeFenced: closer(onexitcodefenced),
            codeFencedFence: onexitcodefencedfence,
            codeFencedFenceInfo: onexitcodefencedfenceinfo,
            codeFencedFenceMeta: onexitcodefencedfencemeta,
            codeFlowValue: onexitdata,
            codeIndented: closer(onexitcodeindented),
            codeText: closer(onexitcodetext),
            codeTextData: onexitdata,
            data: onexitdata,
            definition: closer(),
            definitionDestinationString: onexitdefinitiondestinationstring,
            definitionLabelString: onexitdefinitionlabelstring,
            definitionTitleString: onexitdefinitiontitlestring,
            emphasis: closer(),
            hardBreakEscape: closer(onexithardbreak),
            hardBreakTrailing: closer(onexithardbreak),
            htmlFlow: closer(onexithtmlflow),
            htmlFlowData: onexitdata,
            htmlText: closer(onexithtmltext),
            htmlTextData: onexitdata,
            image: closer(onexitimage),
            label: onexitlabel,
            labelText: onexitlabeltext,
            lineEnding: onexitlineending,
            link: closer(onexitlink),
            listItem: closer(),
            listOrdered: closer(),
            listUnordered: closer(),
            paragraph: closer(),
            referenceString: onexitreferencestring,
            resourceDestinationString: onexitresourcedestinationstring,
            resourceTitleString: onexitresourcetitlestring,
            resource: onexitresource,
            setextHeading: closer(onexitsetextheading),
            setextHeadingLineSequence: onexitsetextheadinglinesequence,
            setextHeadingText: onexitsetextheadingtext,
            strong: closer(),
            thematicBreak: closer()
        }
    };
    configure(config, (options || {}).mdastExtensions || []);
    /** @type {CompileData} */ const data = {};
    return compile;
    //TURBOPACK unreachable
    ;
    /**
   * Turn micromark events into an mdast tree.
   *
   * @param {Array<Event>} events
   *   Events.
   * @returns {Root}
   *   mdast tree.
   */ function compile(events) {
        /** @type {Root} */ let tree = {
            type: 'root',
            children: []
        };
        /** @type {Omit<CompileContext, 'sliceSerialize'>} */ const context = {
            stack: [
                tree
            ],
            tokenStack: [],
            config,
            enter,
            exit,
            buffer,
            resume,
            data
        };
        /** @type {Array<number>} */ const listStack = [];
        let index = -1;
        while(++index < events.length){
            // We preprocess lists to add `listItem` tokens, and to infer whether
            // items the list itself are spread out.
            if (events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered || events[index][1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered) {
                if (events[index][0] === 'enter') {
                    listStack.push(index);
                } else {
                    const tail = listStack.pop();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof tail === 'number', 'expected list ot be open');
                    index = prepareList(events, tail, index);
                }
            }
        }
        index = -1;
        while(++index < events.length){
            const handler = config[events[index][0]];
            if (own.call(handler, events[index][1].type)) {
                handler[events[index][1].type].call(Object.assign({
                    sliceSerialize: events[index][2].sliceSerialize
                }, context), events[index][1]);
            }
        }
        // Handle tokens still being open.
        if (context.tokenStack.length > 0) {
            const tail = context.tokenStack[context.tokenStack.length - 1];
            const handler = tail[1] || defaultOnError;
            handler.call(context, undefined, tail[0]);
        }
        // Figure out `root` position.
        tree.position = {
            start: point(events.length > 0 ? events[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: point(events.length > 0 ? events[events.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        };
        // Call transforms.
        index = -1;
        while(++index < config.transforms.length){
            tree = config.transforms[index](tree) || tree;
        }
        return tree;
    }
    /**
   * @param {Array<Event>} events
   * @param {number} start
   * @param {number} length
   * @returns {number}
   */ function prepareList(events, start, length) {
        let index = start - 1;
        let containerBalance = -1;
        let listSpread = false;
        /** @type {Token | undefined} */ let listItem;
        /** @type {number | undefined} */ let lineIndex;
        /** @type {number | undefined} */ let firstBlankLineIndex;
        /** @type {boolean | undefined} */ let atMarker;
        while(++index <= length){
            const event = events[index];
            switch(event[1].type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered:
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered:
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuote:
                    {
                        if (event[0] === 'enter') {
                            containerBalance++;
                        } else {
                            containerBalance--;
                        }
                        atMarker = undefined;
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank:
                    {
                        if (event[0] === 'enter') {
                            if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) {
                                firstBlankLineIndex = index;
                            }
                            atMarker = undefined;
                        }
                        break;
                    }
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix:
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemValue:
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemMarker:
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix:
                case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefixWhitespace:
                    {
                        break;
                    }
                default:
                    {
                        atMarker = undefined;
                    }
            }
            if (!containerBalance && event[0] === 'enter' && event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix || containerBalance === -1 && event[0] === 'exit' && (event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listUnordered || event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listOrdered)) {
                if (listItem) {
                    let tailIndex = index;
                    lineIndex = undefined;
                    while(tailIndex--){
                        const tailEvent = events[tailIndex];
                        if (tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank) {
                            if (tailEvent[0] === 'exit') continue;
                            if (lineIndex) {
                                events[lineIndex][1].type = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEndingBlank;
                                listSpread = true;
                            }
                            tailEvent[1].type = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].lineEnding;
                            lineIndex = tailIndex;
                        } else if (tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].linePrefix || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuotePrefix || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuotePrefixWhitespace || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].blockQuoteMarker || tailEvent[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemIndent) {
                        // Empty
                        } else {
                            break;
                        }
                    }
                    if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
                        listItem._spread = true;
                    }
                    // Fix position.
                    listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
                    events.splice(lineIndex || index, 0, [
                        'exit',
                        listItem,
                        event[2]
                    ]);
                    index++;
                    length++;
                }
                // Create a new list item.
                if (event[1].type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].listItemPrefix) {
                    /** @type {Token} */ const item = {
                        type: 'listItem',
                        _spread: false,
                        start: Object.assign({}, event[1].start),
                        // @ts-expect-error: we’ll add `end` in a second.
                        end: undefined
                    };
                    listItem = item;
                    events.splice(index, 0, [
                        'enter',
                        item,
                        event[2]
                    ]);
                    index++;
                    length++;
                    firstBlankLineIndex = undefined;
                    atMarker = true;
                }
            }
        }
        events[start][1]._spread = listSpread;
        return length;
    }
    /**
   * Create an opener handle.
   *
   * @param {(token: Token) => Nodes} create
   *   Create a node.
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function opener(create, and) {
        return open;
        //TURBOPACK unreachable
        ;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */ function open(token) {
            enter.call(this, create(token), token);
            if (and) and.call(this, token);
        }
    }
    /**
   * @type {CompileContext['buffer']}
   */ function buffer() {
        this.stack.push({
            type: 'fragment',
            children: []
        });
    }
    /**
   * @type {CompileContext['enter']}
   */ function enter(node, token, errorHandler) {
        const parent = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(parent, 'expected `parent`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in parent, 'expected `parent`');
        /** @type {Array<Nodes>} */ const siblings = parent.children;
        siblings.push(node);
        this.stack.push(node);
        this.tokenStack.push([
            token,
            errorHandler || undefined
        ]);
        node.position = {
            start: point(token.start),
            // @ts-expect-error: `end` will be patched later.
            end: undefined
        };
    }
    /**
   * Create a closer handle.
   *
   * @param {Handle | undefined} [and]
   *   Optional function to also run.
   * @returns {Handle}
   *   Handle.
   */ function closer(and) {
        return close;
        //TURBOPACK unreachable
        ;
        /**
     * @this {CompileContext}
     * @param {Token} token
     * @returns {undefined}
     */ function close(token) {
            if (and) and.call(this, token);
            exit.call(this, token);
        }
    }
    /**
   * @type {CompileContext['exit']}
   */ function exit(token, onExitError) {
        const node = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected `node`');
        const open = this.tokenStack.pop();
        if (!open) {
            throw new Error('Cannot close `' + token.type + '` (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
                start: token.start,
                end: token.end
            }) + '): it’s not open');
        } else if (open[0].type !== token.type) {
            if (onExitError) {
                onExitError.call(this, token, open[0]);
            } else {
                const handler = open[1] || defaultOnError;
                handler.call(this, token, open[0]);
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type !== 'fragment', 'unexpected fragment `exit`ed');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.position, 'expected `position` to be defined');
        node.position.end = point(token.end);
    }
    /**
   * @type {CompileContext['resume']}
   */ function resume() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$string$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toString"])(this.stack.pop());
    }
    //
    // Handlers.
    //
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistordered() {
        this.data.expectingFirstListItemValue = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterlistitemvalue(token) {
        if (this.data.expectingFirstListItemValue) {
            const ancestor = this.stack[this.stack.length - 2];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor, 'expected nodes on stack');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor.type === 'list', 'expected list on stack');
            ancestor.start = Number.parseInt(this.sliceSerialize(token), __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal);
            this.data.expectingFirstListItemValue = undefined;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfenceinfo() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.lang = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfencemeta() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.meta = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefencedfence() {
        // Exit if this is the closing fence.
        if (this.data.flowCodeInside) return;
        this.buffer();
        this.data.flowCodeInside = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodefenced() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '');
        this.data.flowCodeInside = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodeindented() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'code', 'expected code on stack');
        node.value = data.replace(/(\r?\n|\r)$/g, '');
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitionlabelstring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.label = label;
        node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiontitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdefinitiondestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'definition', 'expected definition on stack');
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitatxheadingsequence(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'heading', 'expected heading on stack');
        if (!node.depth) {
            const depth = this.sliceSerialize(token).length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(depth === 1 || depth === 2 || depth === 3 || depth === 4 || depth === 5 || depth === 6, 'expected `depth` between `1` and `6`');
            node.depth = depth;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadingtext() {
        this.data.setextHeadingSlurpLineEnding = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheadinglinesequence(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'heading', 'expected heading on stack');
        node.depth = this.sliceSerialize(token).codePointAt(0) === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].equalsTo ? 1 : 2;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitsetextheading() {
        this.data.setextHeadingSlurpLineEnding = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterdata(token) {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in node, 'expected parent on stack');
        /** @type {Array<Nodes>} */ const siblings = node.children;
        let tail = siblings[siblings.length - 1];
        if (!tail || tail.type !== 'text') {
            // Add a new text node.
            tail = text();
            tail.position = {
                start: point(token.start),
                // @ts-expect-error: we’ll add `end` later.
                end: undefined
            };
            siblings.push(tail);
        }
        this.stack.push(tail);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitdata(token) {
        const tail = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected a `node` to be on the stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('value' in tail, 'expected a `literal` to be on the stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected `node` to have an open position');
        tail.value += this.sliceSerialize(token);
        tail.position.end = point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlineending(token) {
        const context = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(context, 'expected `node`');
        // If we’re at a hard break, include the line ending in there.
        if (this.data.atHardBreak) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in context, 'expected `parent`');
            const tail = context.children[context.children.length - 1];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected tail to have a starting position');
            tail.position.end = point(token.end);
            this.data.atHardBreak = undefined;
            return;
        }
        if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
            onenterdata.call(this, token);
            onexitdata.call(this, token);
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithardbreak() {
        this.data.atHardBreak = true;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmlflow() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'html', 'expected html on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexithtmltext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'html', 'expected html on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcodetext() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'inlineCode', 'expected inline code on stack');
        node.value = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlink() {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (this.data.inReference) {
            /** @type {ReferenceType} */ const referenceType = this.data.referenceType || 'shortcut';
            node.type += 'Reference';
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        this.data.referenceType = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitimage() {
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image', 'expected image on stack');
        // Note: there are also `identifier` and `label` fields on this link node!
        // These are used / cleaned here.
        // To do: clean.
        if (this.data.inReference) {
            /** @type {ReferenceType} */ const referenceType = this.data.referenceType || 'shortcut';
            node.type += 'Reference';
            // @ts-expect-error: mutate.
            node.referenceType = referenceType;
            // @ts-expect-error: mutate.
            delete node.url;
            delete node.title;
        } else {
            // @ts-expect-error: mutate.
            delete node.identifier;
            // @ts-expect-error: mutate.
            delete node.label;
        }
        this.data.referenceType = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabeltext(token) {
        const string = this.sliceSerialize(token);
        const ancestor = this.stack[this.stack.length - 2];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor, 'expected ancestor on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(ancestor.type === 'image' || ancestor.type === 'link', 'expected image or link on stack');
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        ancestor.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$string$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeString"])(string);
        // @ts-expect-error: same as above.
        ancestor.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(string).toLowerCase();
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitlabel() {
        const fragment = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(fragment, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(fragment.type === 'fragment', 'expected fragment on stack');
        const value = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        // Assume a reference.
        this.data.inReference = true;
        if (node.type === 'link') {
            /** @type {Array<PhrasingContent>} */ const children = fragment.children;
            node.children = children;
        } else {
            node.alt = value;
        }
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcedestinationstring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        node.url = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresourcetitlestring() {
        const data = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image or link on stack');
        node.title = data;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitresource() {
        this.data.inReference = undefined;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onenterreference() {
        this.data.referenceType = 'collapsed';
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitreferencestring(token) {
        const label = this.resume();
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'image' || node.type === 'link', 'expected image reference or link reference on stack');
        // @ts-expect-error: stash this on the node, as it might become a reference
        // later.
        node.label = label;
        // @ts-expect-error: same as above.
        node.identifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$normalize$2d$identifier$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeIdentifier"])(this.sliceSerialize(token)).toLowerCase();
        this.data.referenceType = 'full';
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencemarker(token) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(token.type === 'characterReferenceMarkerNumeric' || token.type === 'characterReferenceMarkerHexadecimal');
        this.data.characterReferenceType = token.type;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreferencevalue(token) {
        const data = this.sliceSerialize(token);
        const type = this.data.characterReferenceType;
        /** @type {string} */ let value;
        if (type) {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$decode$2d$numeric$2d$character$2d$reference$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNumericCharacterReference"])(data, type === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["types"].characterReferenceMarkerNumeric ? __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseDecimal : __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constants"].numericBaseHexadecimal);
            this.data.characterReferenceType = undefined;
        } else {
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$decode$2d$named$2d$character$2d$reference$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeNamedCharacterReference"])(data);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(result !== false, 'expected reference to decode');
            value = result;
        }
        const tail = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected `node`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('value' in tail, 'expected `node.value`');
        tail.value += value;
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitcharacterreference(token) {
        const tail = this.stack.pop();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail, 'expected `node`');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(tail.position, 'expected `node.position`');
        tail.position.end = point(token.end);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkprotocol(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        node.url = this.sliceSerialize(token);
    }
    /**
   * @this {CompileContext}
   * @type {Handle}
   */ function onexitautolinkemail(token) {
        onexitdata.call(this, token);
        const node = this.stack[this.stack.length - 1];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node, 'expected node on stack');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(node.type === 'link', 'expected link on stack');
        node.url = 'mailto:' + this.sliceSerialize(token);
    }
    //
    // Creaters.
    //
    /** @returns {Blockquote} */ function blockQuote() {
        return {
            type: 'blockquote',
            children: []
        };
    }
    /** @returns {Code} */ function codeFlow() {
        return {
            type: 'code',
            lang: null,
            meta: null,
            value: ''
        };
    }
    /** @returns {InlineCode} */ function codeText() {
        return {
            type: 'inlineCode',
            value: ''
        };
    }
    /** @returns {Definition} */ function definition() {
        return {
            type: 'definition',
            identifier: '',
            label: null,
            title: null,
            url: ''
        };
    }
    /** @returns {Emphasis} */ function emphasis() {
        return {
            type: 'emphasis',
            children: []
        };
    }
    /** @returns {Heading} */ function heading() {
        return {
            type: 'heading',
            // @ts-expect-error `depth` will be set later.
            depth: 0,
            children: []
        };
    }
    /** @returns {Break} */ function hardBreak() {
        return {
            type: 'break'
        };
    }
    /** @returns {Html} */ function html() {
        return {
            type: 'html',
            value: ''
        };
    }
    /** @returns {Image} */ function image() {
        return {
            type: 'image',
            title: null,
            url: '',
            alt: null
        };
    }
    /** @returns {Link} */ function link() {
        return {
            type: 'link',
            title: null,
            url: '',
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {List}
   */ function list(token) {
        return {
            type: 'list',
            ordered: token.type === 'listOrdered',
            start: null,
            spread: token._spread,
            children: []
        };
    }
    /**
   * @param {Token} token
   * @returns {ListItem}
   */ function listItem(token) {
        return {
            type: 'listItem',
            spread: token._spread,
            checked: null,
            children: []
        };
    }
    /** @returns {Paragraph} */ function paragraph() {
        return {
            type: 'paragraph',
            children: []
        };
    }
    /** @returns {Strong} */ function strong() {
        return {
            type: 'strong',
            children: []
        };
    }
    /** @returns {Text} */ function text() {
        return {
            type: 'text',
            value: ''
        };
    }
    /** @returns {ThematicBreak} */ function thematicBreak() {
        return {
            type: 'thematicBreak'
        };
    }
}
/**
 * Copy a point-like value.
 *
 * @param {Point} d
 *   Point-like value.
 * @returns {Point}
 *   unist point.
 */ function point(d) {
    return {
        line: d.line,
        column: d.column,
        offset: d.offset
    };
}
/**
 * @param {Config} combined
 * @param {Array<Array<Extension> | Extension>} extensions
 * @returns {undefined}
 */ function configure(combined, extensions) {
    let index = -1;
    while(++index < extensions.length){
        const value = extensions[index];
        if (Array.isArray(value)) {
            configure(combined, value);
        } else {
            extension(combined, value);
        }
    }
}
/**
 * @param {Config} combined
 * @param {Extension} extension
 * @returns {undefined}
 */ function extension(combined, extension) {
    /** @type {keyof Extension} */ let key;
    for(key in extension){
        if (own.call(extension, key)) {
            switch(key){
                case 'canContainEols':
                    {
                        const right = extension[key];
                        if (right) {
                            combined[key].push(...right);
                        }
                        break;
                    }
                case 'transforms':
                    {
                        const right = extension[key];
                        if (right) {
                            combined[key].push(...right);
                        }
                        break;
                    }
                case 'enter':
                case 'exit':
                    {
                        const right = extension[key];
                        if (right) {
                            Object.assign(combined[key], right);
                        }
                        break;
                    }
            }
        }
    }
}
/** @type {OnEnterError} */ function defaultOnError(left, right) {
    if (left) {
        throw new Error('Cannot close `' + left.type + '` (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: left.start,
            end: left.end
        }) + '): a different token (`' + right.type + '`, ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: right.start,
            end: right.end
        }) + ') is open');
    } else {
        throw new Error('Cannot close document, a token (`' + right.type + '`, ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$stringify$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyPosition"])({
            start: right.start,
            end: right.end
        }) + ') is still open');
    }
}
}),
"[project]/PREFECT-10/node_modules/remark-parse/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast-util-from-markdown').Options} FromMarkdownOptions
 * @typedef {import('unified').Parser<Root>} Parser
 * @typedef {import('unified').Processor<Root>} Processor
 */ /**
 * @typedef {Omit<FromMarkdownOptions, 'extensions' | 'mdastExtensions'>} Options
 */ __turbopack_context__.s([
    "default",
    ()=>remarkParse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$from$2d$markdown$2f$dev$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-from-markdown/dev/lib/index.js [app-ssr] (ecmascript)");
;
function remarkParse(options) {
    /** @type {Processor} */ // @ts-expect-error: TS in JSDoc generates wrong types if `this` is typed regularly.
    const self = this;
    self.parser = parser;
    /**
   * @type {Parser}
   */ function parser(doc) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$from$2d$markdown$2f$dev$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromMarkdown"])(doc, {
            ...self.data('settings'),
            ...options,
            // Note: these options are not in the readme.
            // The goal is for them to be set by plugins on `data` instead of being
            // passed by users.
            extensions: self.data('micromarkExtensions') || [],
            mdastExtensions: self.data('fromMarkdownExtensions') || []
        });
    }
}
}),
"[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARRAY",
    ()=>ARRAY,
    "BIGINT",
    ()=>BIGINT,
    "DATE",
    ()=>DATE,
    "ERROR",
    ()=>ERROR,
    "MAP",
    ()=>MAP,
    "OBJECT",
    ()=>OBJECT,
    "PRIMITIVE",
    ()=>PRIMITIVE,
    "REGEXP",
    ()=>REGEXP,
    "SET",
    ()=>SET,
    "VOID",
    ()=>VOID
]);
const VOID = -1;
const PRIMITIVE = 0;
const ARRAY = 1;
const OBJECT = 2;
const DATE = 3;
const REGEXP = 4;
const MAP = 5;
const SET = 6;
const ERROR = 7;
const BIGINT = 8; // export const SYMBOL = 9;
}),
"[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/deserialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserialize",
    ()=>deserialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)");
;
const env = typeof self === 'object' ? self : globalThis;
const deserializer = ($, _)=>{
    const as = (out, index)=>{
        $.set(index, out);
        return out;
    };
    const unpair = (index)=>{
        if ($.has(index)) return $.get(index);
        const [type, value] = _[index];
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"]:
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOID"]:
                return as(value, index);
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"]:
                {
                    const arr = as([], index);
                    for (const index of value)arr.push(unpair(index));
                    return arr;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"]:
                {
                    const object = as({}, index);
                    for (const [key, index] of value)object[unpair(key)] = unpair(index);
                    return object;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"]:
                return as(new Date(value), index);
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"]:
                {
                    const { source, flags } = value;
                    return as(new RegExp(source, flags), index);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"]:
                {
                    const map = as(new Map, index);
                    for (const [key, index] of value)map.set(unpair(key), unpair(index));
                    return map;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"]:
                {
                    const set = as(new Set, index);
                    for (const index of value)set.add(unpair(index));
                    return set;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR"]:
                {
                    const { name, message } = value;
                    return as(new env[name](message), index);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIGINT"]:
                return as(BigInt(value), index);
            case 'BigInt':
                return as(Object(BigInt(value)), index);
            case 'ArrayBuffer':
                return as(new Uint8Array(value).buffer, value);
            case 'DataView':
                {
                    const { buffer } = new Uint8Array(value);
                    return as(new DataView(buffer), value);
                }
        }
        return as(new env[type](value), index);
    };
    return unpair;
};
const deserialize = (serialized)=>deserializer(new Map, serialized)(0);
}),
"[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/serialize.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serialize",
    ()=>serialize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/types.js [app-ssr] (ecmascript)");
;
const EMPTY = '';
const { toString } = {};
const { keys } = Object;
const typeOf = (value)=>{
    const type = typeof value;
    if (type !== 'object' || !value) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"],
        type
    ];
    const asString = toString.call(value).slice(8, -1);
    switch(asString){
        case 'Array':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
                EMPTY
            ];
        case 'Object':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"],
                EMPTY
            ];
        case 'Date':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"],
                EMPTY
            ];
        case 'RegExp':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"],
                EMPTY
            ];
        case 'Map':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"],
                EMPTY
            ];
        case 'Set':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"],
                EMPTY
            ];
        case 'DataView':
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
                asString
            ];
    }
    if (asString.includes('Array')) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"],
        asString
    ];
    if (asString.includes('Error')) return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ERROR"],
        asString
    ];
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"],
        asString
    ];
};
const shouldSkip = ([TYPE, type])=>TYPE === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"] && (type === 'function' || type === 'symbol');
const serializer = (strict, json, $, _)=>{
    const as = (out, value)=>{
        const index = _.push(out) - 1;
        $.set(value, index);
        return index;
    };
    const pair = (value)=>{
        if ($.has(value)) return $.get(value);
        let [TYPE, type] = typeOf(value);
        switch(TYPE){
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMITIVE"]:
                {
                    let entry = value;
                    switch(type){
                        case 'bigint':
                            TYPE = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BIGINT"];
                            entry = value.toString();
                            break;
                        case 'function':
                        case 'symbol':
                            if (strict) throw new TypeError('unable to serialize ' + type);
                            entry = null;
                            break;
                        case 'undefined':
                            return as([
                                __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VOID"]
                            ], value);
                    }
                    return as([
                        TYPE,
                        entry
                    ], value);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ARRAY"]:
                {
                    if (type) {
                        let spread = value;
                        if (type === 'DataView') {
                            spread = new Uint8Array(value.buffer);
                        } else if (type === 'ArrayBuffer') {
                            spread = new Uint8Array(value);
                        }
                        return as([
                            type,
                            [
                                ...spread
                            ]
                        ], value);
                    }
                    const arr = [];
                    const index = as([
                        TYPE,
                        arr
                    ], value);
                    for (const entry of value)arr.push(pair(entry));
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OBJECT"]:
                {
                    if (type) {
                        switch(type){
                            case 'BigInt':
                                return as([
                                    type,
                                    value.toString()
                                ], value);
                            case 'Boolean':
                            case 'Number':
                            case 'String':
                                return as([
                                    type,
                                    value.valueOf()
                                ], value);
                        }
                    }
                    if (json && 'toJSON' in value) return pair(value.toJSON());
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const key of keys(value)){
                        if (strict || !shouldSkip(typeOf(value[key]))) entries.push([
                            pair(key),
                            pair(value[key])
                        ]);
                    }
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATE"]:
                return as([
                    TYPE,
                    value.toISOString()
                ], value);
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGEXP"]:
                {
                    const { source, flags } = value;
                    return as([
                        TYPE,
                        {
                            source,
                            flags
                        }
                    ], value);
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAP"]:
                {
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const [key, entry] of value){
                        if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry)))) entries.push([
                            pair(key),
                            pair(entry)
                        ]);
                    }
                    return index;
                }
            case __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET"]:
                {
                    const entries = [];
                    const index = as([
                        TYPE,
                        entries
                    ], value);
                    for (const entry of value){
                        if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry));
                    }
                    return index;
                }
        }
        const { message } = value;
        return as([
            TYPE,
            {
                name: type,
                message
            }
        ], value);
    };
    return pair;
};
const serialize = (value, { json, lossy } = {})=>{
    const _ = [];
    return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};
}),
"[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/deserialize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/serialize.js [app-ssr] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = typeof structuredClone === "function" ? /* c8 ignore start */ (any, options)=>options && ('json' in options || 'lossy' in options) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(any, options)) : structuredClone(any) : (any, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$deserialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserialize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$serialize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(any, options));
;
}),
"[project]/PREFECT-10/node_modules/micromark-util-encode/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encode",
    ()=>encode
]);
const characterReferences = {
    '"': 'quot',
    '&': 'amp',
    '<': 'lt',
    '>': 'gt'
};
function encode(value) {
    return value.replace(/["&<>]/g, replace);
    //TURBOPACK unreachable
    ;
    /**
   * @param {string} value
   *   Value to replace.
   * @returns {string}
   *   Encoded value.
   */ function replace(value) {
        return '&' + characterReferences[value] + ';';
    }
}
}),
"[project]/PREFECT-10/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeUri",
    ()=>normalizeUri,
    "sanitizeUri",
    ()=>sanitizeUri
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-character/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-encode/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/codes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-symbol/lib/values.js [app-ssr] (ecmascript)");
;
;
;
function sanitizeUri(url, protocol) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$encode$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encode"])(normalizeUri(url || ''));
    if (!protocol) {
        return value;
    }
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || // It is a protocol, it should be allowed.
    protocol.test(value.slice(0, colon))) {
        return value;
    }
    return '';
}
function normalizeUri(value) {
    /** @type {Array<string>} */ const result = [];
    let index = -1;
    let start = 0;
    let skip = 0;
    while(++index < value.length){
        const code = value.charCodeAt(index);
        /** @type {string} */ let replace = '';
        // A correct percent encoded value.
        if (code === __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$codes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["codes"].percentSign && (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 1)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$character$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asciiAlphanumeric"])(value.charCodeAt(index + 2))) {
            skip = 2;
        } else if (code < 128) {
            if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
                replace = String.fromCharCode(code);
            }
        } else if (code > 55_295 && code < 57_344) {
            const next = value.charCodeAt(index + 1);
            // A correct surrogate pair.
            if (code < 56_320 && next > 56_319 && next < 57_344) {
                replace = String.fromCharCode(code, next);
                skip = 1;
            } else {
                replace = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$symbol$2f$lib$2f$values$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["values"].replacementCharacter;
            }
        } else {
            replace = String.fromCharCode(code);
        }
        if (replace) {
            result.push(value.slice(start, index), encodeURIComponent(replace));
            start = index + skip + 1;
            replace = '';
        }
        if (skip) {
            index += skip;
            skip = 0;
        }
    }
    return result.join('') + value.slice(start);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('./state.js').State} State
 */ /**
 * @callback FootnoteBackContentTemplate
 *   Generate content for the backreference dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {Array<ElementContent> | ElementContent | string}
 *   Content for the backreference when linking back from definitions to their
 *   reference.
 *
 * @callback FootnoteBackLabelTemplate
 *   Generate a back label dynamically.
 *
 *   For the following markdown:
 *
 *   ```markdown
 *   Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 *   [^remark]: things about remark
 *   [^micromark]: things about micromark
 *   ```
 *
 *   This function will be called with:
 *
 *   *  `0` and `0` for the backreference from `things about micromark` to
 *      `alpha`, as it is the first used definition, and the first call to it
 *   *  `0` and `1` for the backreference from `things about micromark` to
 *      `bravo`, as it is the first used definition, and the second call to it
 *   *  `1` and `0` for the backreference from `things about remark` to
 *      `charlie`, as it is the second used definition
 * @param {number} referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param {number} rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns {string}
 *   Back label to use when linking back from definitions to their reference.
 */ __turbopack_context__.s([
    "defaultFootnoteBackContent",
    ()=>defaultFootnoteBackContent,
    "defaultFootnoteBackLabel",
    ()=>defaultFootnoteBackLabel,
    "footer",
    ()=>footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
;
function defaultFootnoteBackContent(_, rereferenceIndex) {
    /** @type {Array<ElementContent>} */ const result = [
        {
            type: 'text',
            value: '↩'
        }
    ];
    if (rereferenceIndex > 1) {
        result.push({
            type: 'element',
            tagName: 'sup',
            properties: {},
            children: [
                {
                    type: 'text',
                    value: String(rereferenceIndex)
                }
            ]
        });
    }
    return result;
}
function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
    return 'Back to reference ' + (referenceIndex + 1) + (rereferenceIndex > 1 ? '-' + rereferenceIndex : '');
}
function footer(state) {
    const clobberPrefix = typeof state.options.clobberPrefix === 'string' ? state.options.clobberPrefix : 'user-content-';
    const footnoteBackContent = state.options.footnoteBackContent || defaultFootnoteBackContent;
    const footnoteBackLabel = state.options.footnoteBackLabel || defaultFootnoteBackLabel;
    const footnoteLabel = state.options.footnoteLabel || 'Footnotes';
    const footnoteLabelTagName = state.options.footnoteLabelTagName || 'h2';
    const footnoteLabelProperties = state.options.footnoteLabelProperties || {
        className: [
            'sr-only'
        ]
    };
    /** @type {Array<ElementContent>} */ const listItems = [];
    let referenceIndex = -1;
    while(++referenceIndex < state.footnoteOrder.length){
        const definition = state.footnoteById.get(state.footnoteOrder[referenceIndex]);
        if (!definition) {
            continue;
        }
        const content = state.all(definition);
        const id = String(definition.identifier).toUpperCase();
        const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(id.toLowerCase());
        let rereferenceIndex = 0;
        /** @type {Array<ElementContent>} */ const backReferences = [];
        const counts = state.footnoteCounts.get(id);
        // eslint-disable-next-line no-unmodified-loop-condition
        while(counts !== undefined && ++rereferenceIndex <= counts){
            if (backReferences.length > 0) {
                backReferences.push({
                    type: 'text',
                    value: ' '
                });
            }
            let children = typeof footnoteBackContent === 'string' ? footnoteBackContent : footnoteBackContent(referenceIndex, rereferenceIndex);
            if (typeof children === 'string') {
                children = {
                    type: 'text',
                    value: children
                };
            }
            backReferences.push({
                type: 'element',
                tagName: 'a',
                properties: {
                    href: '#' + clobberPrefix + 'fnref-' + safeId + (rereferenceIndex > 1 ? '-' + rereferenceIndex : ''),
                    dataFootnoteBackref: '',
                    ariaLabel: typeof footnoteBackLabel === 'string' ? footnoteBackLabel : footnoteBackLabel(referenceIndex, rereferenceIndex),
                    className: [
                        'data-footnote-backref'
                    ]
                },
                children: Array.isArray(children) ? children : [
                    children
                ]
            });
        }
        const tail = content[content.length - 1];
        if (tail && tail.type === 'element' && tail.tagName === 'p') {
            const tailTail = tail.children[tail.children.length - 1];
            if (tailTail && tailTail.type === 'text') {
                tailTail.value += ' ';
            } else {
                tail.children.push({
                    type: 'text',
                    value: ' '
                });
            }
            tail.children.push(...backReferences);
        } else {
            content.push(...backReferences);
        }
        /** @type {Element} */ const listItem = {
            type: 'element',
            tagName: 'li',
            properties: {
                id: clobberPrefix + 'fn-' + safeId
            },
            children: state.wrap(content, true)
        };
        state.patch(definition, listItem);
        listItems.push(listItem);
    }
    if (listItems.length === 0) {
        return;
    }
    return {
        type: 'element',
        tagName: 'section',
        properties: {
            dataFootnotes: true,
            className: [
                'footnotes'
            ]
        },
        children: [
            {
                type: 'element',
                tagName: footnoteLabelTagName,
                properties: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(footnoteLabelProperties),
                    id: 'footnote-label'
                },
                children: [
                    {
                        type: 'text',
                        value: footnoteLabel
                    }
                ]
            },
            {
                type: 'text',
                value: '\n'
            },
            {
                type: 'element',
                tagName: 'ol',
                properties: {},
                children: state.wrap(listItems, true)
            },
            {
                type: 'text',
                value: '\n'
            }
        ]
    };
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Blockquote} Blockquote
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "blockquote",
    ()=>blockquote
]);
'';
function blockquote(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'blockquote',
        properties: {},
        children: state.wrap(state.all(node), true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/break.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').Break} Break
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "hardBreak",
    ()=>hardBreak
]);
'';
function hardBreak(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'br',
        properties: {},
        children: []
    };
    state.patch(node, result);
    return [
        state.applyData(node, result),
        {
            type: 'text',
            value: '\n'
        }
    ];
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/code.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Code} Code
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "code",
    ()=>code
]);
'';
function code(state, node) {
    const value = node.value ? node.value + '\n' : '';
    /** @type {Properties} */ const properties = {};
    if (node.lang) {
        properties.className = [
            'language-' + node.lang
        ];
    }
    // Create `<code>`.
    /** @type {Element} */ let result = {
        type: 'element',
        tagName: 'code',
        properties,
        children: [
            {
                type: 'text',
                value
            }
        ]
    };
    if (node.meta) {
        result.data = {
            meta: node.meta
        };
    }
    state.patch(node, result);
    result = state.applyData(node, result);
    // Create `<pre>`.
    result = {
        type: 'element',
        tagName: 'pre',
        properties: {},
        children: [
            result
        ]
    };
    state.patch(node, result);
    return result;
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/delete.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Delete} Delete
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "strikethrough",
    ()=>strikethrough
]);
'';
function strikethrough(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'del',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Emphasis} Emphasis
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "emphasis",
    ()=>emphasis
]);
'';
function emphasis(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'em',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').FootnoteReference} FootnoteReference
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "footnoteReference",
    ()=>footnoteReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function footnoteReference(state, node) {
    const clobberPrefix = typeof state.options.clobberPrefix === 'string' ? state.options.clobberPrefix : 'user-content-';
    const id = String(node.identifier).toUpperCase();
    const safeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(id.toLowerCase());
    const index = state.footnoteOrder.indexOf(id);
    /** @type {number} */ let counter;
    let reuseCounter = state.footnoteCounts.get(id);
    if (reuseCounter === undefined) {
        reuseCounter = 0;
        state.footnoteOrder.push(id);
        counter = state.footnoteOrder.length;
    } else {
        counter = index + 1;
    }
    reuseCounter += 1;
    state.footnoteCounts.set(id, reuseCounter);
    /** @type {Element} */ const link = {
        type: 'element',
        tagName: 'a',
        properties: {
            href: '#' + clobberPrefix + 'fn-' + safeId,
            id: clobberPrefix + 'fnref-' + safeId + (reuseCounter > 1 ? '-' + reuseCounter : ''),
            dataFootnoteRef: true,
            ariaDescribedBy: [
                'footnote-label'
            ]
        },
        children: [
            {
                type: 'text',
                value: String(counter)
            }
        ]
    };
    state.patch(node, link);
    /** @type {Element} */ const sup = {
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [
            link
        ]
    };
    state.patch(node, sup);
    return state.applyData(node, sup);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/heading.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Heading} Heading
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "heading",
    ()=>heading
]);
'';
function heading(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'h' + node.depth,
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/html.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Html} Html
 * @typedef {import('../state.js').State} State
 * @typedef {import('../../index.js').Raw} Raw
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "html",
    ()=>html
]);
'';
function html(state, node) {
    if (state.options.allowDangerousHtml) {
        /** @type {Raw} */ const result = {
            type: 'raw',
            value: node.value
        };
        state.patch(node, result);
        return state.applyData(node, result);
    }
    return undefined;
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').ElementContent} ElementContent
 *
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').Reference} Reference
 *
 * @typedef {import('./state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "revert",
    ()=>revert
]);
'';
function revert(state, node) {
    const subtype = node.referenceType;
    let suffix = ']';
    if (subtype === 'collapsed') {
        suffix += '[]';
    } else if (subtype === 'full') {
        suffix += '[' + (node.label || node.identifier) + ']';
    }
    if (node.type === 'imageReference') {
        return [
            {
                type: 'text',
                value: '![' + node.alt + suffix
            }
        ];
    }
    const contents = state.all(node);
    const head = contents[0];
    if (head && head.type === 'text') {
        head.value = '[' + head.value;
    } else {
        contents.unshift({
            type: 'text',
            value: '['
        });
    }
    const tail = contents[contents.length - 1];
    if (tail && tail.type === 'text') {
        tail.value += suffix;
    } else {
        contents.push({
            type: 'text',
            value: suffix
        });
    }
    return contents;
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').ImageReference} ImageReference
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "imageReference",
    ()=>imageReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)");
;
;
function imageReference(state, node) {
    const id = String(node.identifier).toUpperCase();
    const definition = state.definitionById.get(id);
    if (!definition) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revert"])(state, node);
    }
    /** @type {Properties} */ const properties = {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(definition.url || ''),
        alt: node.alt
    };
    if (definition.title !== null && definition.title !== undefined) {
        properties.title = definition.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'img',
        properties,
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/image.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Image} Image
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "image",
    ()=>image
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function image(state, node) {
    /** @type {Properties} */ const properties = {
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(node.url)
    };
    if (node.alt !== null && node.alt !== undefined) {
        properties.alt = node.alt;
    }
    if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'img',
        properties,
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {import('mdast').InlineCode} InlineCode
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "inlineCode",
    ()=>inlineCode
]);
'';
function inlineCode(state, node) {
    /** @type {Text} */ const text = {
        type: 'text',
        value: node.value.replace(/\r?\n|\r/g, ' ')
    };
    state.patch(node, text);
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'code',
        properties: {},
        children: [
            text
        ]
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').LinkReference} LinkReference
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "linkReference",
    ()=>linkReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/revert.js [app-ssr] (ecmascript)");
;
;
function linkReference(state, node) {
    const id = String(node.identifier).toUpperCase();
    const definition = state.definitionById.get(id);
    if (!definition) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$revert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["revert"])(state, node);
    }
    /** @type {Properties} */ const properties = {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(definition.url || '')
    };
    if (definition.title !== null && definition.title !== undefined) {
        properties.title = definition.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/link.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Link} Link
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "link",
    ()=>link
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/micromark-util-sanitize-uri/dev/index.js [app-ssr] (ecmascript)");
;
function link(state, node) {
    /** @type {Properties} */ const properties = {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$micromark$2d$util$2d$sanitize$2d$uri$2f$dev$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeUri"])(node.url)
    };
    if (node.title !== null && node.title !== undefined) {
        properties.title = node.title;
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'a',
        properties,
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/list-item.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').ListItem} ListItem
 * @typedef {import('mdast').Parents} Parents
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "listItem",
    ()=>listItem
]);
'';
function listItem(state, node, parent) {
    const results = state.all(node);
    const loose = parent ? listLoose(parent) : listItemLoose(node);
    /** @type {Properties} */ const properties = {};
    /** @type {Array<ElementContent>} */ const children = [];
    if (typeof node.checked === 'boolean') {
        const head = results[0];
        /** @type {Element} */ let paragraph;
        if (head && head.type === 'element' && head.tagName === 'p') {
            paragraph = head;
        } else {
            paragraph = {
                type: 'element',
                tagName: 'p',
                properties: {},
                children: []
            };
            results.unshift(paragraph);
        }
        if (paragraph.children.length > 0) {
            paragraph.children.unshift({
                type: 'text',
                value: ' '
            });
        }
        paragraph.children.unshift({
            type: 'element',
            tagName: 'input',
            properties: {
                type: 'checkbox',
                checked: node.checked,
                disabled: true
            },
            children: []
        });
        // According to github-markdown-css, this class hides bullet.
        // See: <https://github.com/sindresorhus/github-markdown-css>.
        properties.className = [
            'task-list-item'
        ];
    }
    let index = -1;
    while(++index < results.length){
        const child = results[index];
        // Add eols before nodes, except if this is a loose, first paragraph.
        if (loose || index !== 0 || child.type !== 'element' || child.tagName !== 'p') {
            children.push({
                type: 'text',
                value: '\n'
            });
        }
        if (child.type === 'element' && child.tagName === 'p' && !loose) {
            children.push(...child.children);
        } else {
            children.push(child);
        }
    }
    const tail = results[results.length - 1];
    // Add a final eol.
    if (tail && (loose || tail.type !== 'element' || tail.tagName !== 'p')) {
        children.push({
            type: 'text',
            value: '\n'
        });
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'li',
        properties,
        children
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
/**
 * @param {Parents} node
 * @return {Boolean}
 */ function listLoose(node) {
    let loose = false;
    if (node.type === 'list') {
        loose = node.spread || false;
        const children = node.children;
        let index = -1;
        while(!loose && ++index < children.length){
            loose = listItemLoose(children[index]);
        }
    }
    return loose;
}
/**
 * @param {ListItem} node
 * @return {Boolean}
 */ function listItemLoose(node) {
    const spread = node.spread;
    return spread === null || spread === undefined ? node.children.length > 1 : spread;
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/list.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').List} List
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "list",
    ()=>list
]);
'';
function list(state, node) {
    /** @type {Properties} */ const properties = {};
    const results = state.all(node);
    let index = -1;
    if (typeof node.start === 'number' && node.start !== 1) {
        properties.start = node.start;
    }
    // Like GitHub, add a class for custom styling.
    while(++index < results.length){
        const child = results[index];
        if (child.type === 'element' && child.tagName === 'li' && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes('task-list-item')) {
            properties.className = [
                'contains-task-list'
            ];
            break;
        }
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: node.ordered ? 'ol' : 'ul',
        properties,
        children: state.wrap(results, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Paragraph} Paragraph
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "paragraph",
    ()=>paragraph
]);
'';
function paragraph(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'p',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/root.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Parents} HastParents
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "root",
    ()=>root
]);
'';
function root(state, node) {
    /** @type {HastRoot} */ const result = {
        type: 'root',
        children: state.wrap(state.all(node))
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/strong.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Strong} Strong
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "strong",
    ()=>strong
]);
'';
function strong(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'strong',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/table.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').Table} Table
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "table",
    ()=>table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
;
function table(state, node) {
    const rows = state.all(node);
    const firstRow = rows.shift();
    /** @type {Array<Element>} */ const tableContent = [];
    if (firstRow) {
        /** @type {Element} */ const head = {
            type: 'element',
            tagName: 'thead',
            properties: {},
            children: state.wrap([
                firstRow
            ], true)
        };
        state.patch(node.children[0], head);
        tableContent.push(head);
    }
    if (rows.length > 0) {
        /** @type {Element} */ const body = {
            type: 'element',
            tagName: 'tbody',
            properties: {},
            children: state.wrap(rows, true)
        };
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointStart"])(node.children[1]);
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pointEnd"])(node.children[node.children.length - 1]);
        if (start && end) body.position = {
            start,
            end
        };
        tableContent.push(body);
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'table',
        properties: {},
        children: state.wrap(tableContent, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/table-row.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('mdast').Parents} Parents
 * @typedef {import('mdast').TableRow} TableRow
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "tableRow",
    ()=>tableRow
]);
'';
function tableRow(state, node, parent) {
    const siblings = parent ? parent.children : undefined;
    // Generate a body row when without parent.
    const rowIndex = siblings ? siblings.indexOf(node) : 1;
    const tagName = rowIndex === 0 ? 'th' : 'td';
    // To do: option to use `style`?
    const align = parent && parent.type === 'table' ? parent.align : undefined;
    const length = align ? align.length : node.children.length;
    let cellIndex = -1;
    /** @type {Array<ElementContent>} */ const cells = [];
    while(++cellIndex < length){
        // Note: can also be undefined.
        const cell = node.children[cellIndex];
        /** @type {Properties} */ const properties = {};
        const alignValue = align ? align[cellIndex] : undefined;
        if (alignValue) {
            properties.align = alignValue;
        }
        /** @type {Element} */ let result = {
            type: 'element',
            tagName,
            properties,
            children: []
        };
        if (cell) {
            result.children = state.all(cell);
            state.patch(cell, result);
            result = state.applyData(cell, result);
        }
        cells.push(result);
    }
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'tr',
        properties: {},
        children: state.wrap(cells, true)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "tableCell",
    ()=>tableCell
]);
'';
function tableCell(state, node) {
    // Note: this function is normally not called: see `table-row` for how rows
    // and their cells are compiled.
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'td',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/text.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').Text} HastText
 * @typedef {import('mdast').Text} MdastText
 * @typedef {import('../state.js').State} State
 */ __turbopack_context__.s([
    "text",
    ()=>text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$trim$2d$lines$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/trim-lines/index.js [app-ssr] (ecmascript)");
;
function text(state, node) {
    /** @type {HastText} */ const result = {
        type: 'text',
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$trim$2d$lines$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trimLines"])(String(node.value))
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('mdast').ThematicBreak} ThematicBreak
 * @typedef {import('../state.js').State} State
 */ // Make VS Code show references to the above types.
__turbopack_context__.s([
    "thematicBreak",
    ()=>thematicBreak
]);
'';
function thematicBreak(state, node) {
    /** @type {Element} */ const result = {
        type: 'element',
        tagName: 'hr',
        properties: {},
        children: []
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handlers",
    ()=>handlers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$blockquote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/break.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/delete.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$emphasis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$footnote$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$heading$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/heading.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$inline$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/list-item.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/list.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$root$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/root.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/strong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/table.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/table-row.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const handlers = {
    blockquote: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$blockquote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockquote"],
    break: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hardBreak"],
    code: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["code"],
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$delete$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strikethrough"],
    emphasis: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$emphasis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emphasis"],
    footnoteReference: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$footnote$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footnoteReference"],
    heading: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$heading$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heading"],
    html: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["html"],
    imageReference: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageReference"],
    image: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["image"],
    inlineCode: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$inline$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inlineCode"],
    linkReference: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2d$reference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linkReference"],
    link: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["link"],
    listItem: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2d$item$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listItem"],
    list: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["list"],
    paragraph: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$paragraph$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paragraph"],
    // @ts-expect-error: root is different, but hard to type.
    root: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$root$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["root"],
    strong: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$strong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["strong"],
    table: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["table"],
    tableCell: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$cell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableCell"],
    tableRow: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$table$2d$row$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableRow"],
    text: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["text"],
    thematicBreak: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$thematic$2d$break$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["thematicBreak"],
    toml: ignore,
    yaml: ignore,
    definition: ignore,
    footnoteDefinition: ignore
};
// Return nothing for nodes that are ignored.
function ignore() {
    return undefined;
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').ElementContent} HastElementContent
 * @typedef {import('hast').Nodes} HastNodes
 * @typedef {import('hast').Properties} HastProperties
 * @typedef {import('hast').RootContent} HastRootContent
 * @typedef {import('hast').Text} HastText
 *
 * @typedef {import('mdast').Definition} MdastDefinition
 * @typedef {import('mdast').FootnoteDefinition} MdastFootnoteDefinition
 * @typedef {import('mdast').Nodes} MdastNodes
 * @typedef {import('mdast').Parents} MdastParents
 *
 * @typedef {import('vfile').VFile} VFile
 *
 * @typedef {import('./footer.js').FootnoteBackContentTemplate} FootnoteBackContentTemplate
 * @typedef {import('./footer.js').FootnoteBackLabelTemplate} FootnoteBackLabelTemplate
 */ /**
 * @callback Handler
 *   Handle a node.
 * @param {State} state
 *   Info passed around.
 * @param {any} node
 *   mdast node to handle.
 * @param {MdastParents | undefined} parent
 *   Parent of `node`.
 * @returns {Array<HastElementContent> | HastElementContent | undefined}
 *   hast node.
 *
 * @typedef {Partial<Record<MdastNodes['type'], Handler>>} Handlers
 *   Handle nodes.
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {boolean | null | undefined} [allowDangerousHtml=false]
 *   Whether to persist raw HTML in markdown in the hast tree (default:
 *   `false`).
 * @property {string | null | undefined} [clobberPrefix='user-content-']
 *   Prefix to use before the `id` property on footnotes to prevent them from
 *   *clobbering* (default: `'user-content-'`).
 *
 *   Pass `''` for trusted markdown and when you are careful with
 *   polyfilling.
 *   You could pass a different prefix.
 *
 *   DOM clobbering is this:
 *
 *   ```html
 *   <p id="x"></p>
 *   <script>alert(x) // `x` now refers to the `p#x` DOM element</script>
 *   ```
 *
 *   The above example shows that elements are made available by browsers, by
 *   their ID, on the `window` object.
 *   This is a security risk because you might be expecting some other variable
 *   at that place.
 *   It can also break polyfills.
 *   Using a prefix solves these problems.
 * @property {VFile | null | undefined} [file]
 *   Corresponding virtual file representing the input document (optional).
 * @property {FootnoteBackContentTemplate | string | null | undefined} [footnoteBackContent]
 *   Content of the backreference back to references (default: `defaultFootnoteBackContent`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackContent(_, rereferenceIndex) {
 *     const result = [{type: 'text', value: '↩'}]
 *
 *     if (rereferenceIndex > 1) {
 *       result.push({
 *         type: 'element',
 *         tagName: 'sup',
 *         properties: {},
 *         children: [{type: 'text', value: String(rereferenceIndex)}]
 *       })
 *     }
 *
 *     return result
 *   }
 *   ```
 *
 *   This content is used in the `a` element of each backreference (the `↩`
 *   links).
 * @property {FootnoteBackLabelTemplate | string | null | undefined} [footnoteBackLabel]
 *   Label to describe the backreference back to references (default:
 *   `defaultFootnoteBackLabel`).
 *
 *   The default value is:
 *
 *   ```js
 *   function defaultFootnoteBackLabel(referenceIndex, rereferenceIndex) {
 *    return (
 *      'Back to reference ' +
 *      (referenceIndex + 1) +
 *      (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
 *    )
 *   }
 *   ```
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is used in the `ariaLabel` property on each backreference
 *   (the `↩` links).
 *   It affects users of assistive technology.
 * @property {string | null | undefined} [footnoteLabel='Footnotes']
 *   Textual label to use for the footnotes section (default: `'Footnotes'`).
 *
 *   Change it when the markdown is not in English.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {HastProperties | null | undefined} [footnoteLabelProperties={className: ['sr-only']}]
 *   Properties to use on the footnote label (default: `{className:
 *   ['sr-only']}`).
 *
 *   Change it to show the label and add other properties.
 *
 *   This label is typically hidden visually (assuming an `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass an empty string.
 *   You can also add different properties.
 *
 *   > **Note**: `id: 'footnote-label'` is always added, because footnote
 *   > calls use it with `aria-describedby` to provide an accessible label.
 * @property {string | null | undefined} [footnoteLabelTagName='h2']
 *   HTML tag name to use for the footnote label element (default: `'h2'`).
 *
 *   Change it to match your document structure.
 *
 *   This label is typically hidden visually (assuming a `sr-only` CSS class
 *   is defined that does that) and so affects screen readers only.
 *   If you do have such a class, but want to show this section to everyone,
 *   pass different properties with the `footnoteLabelProperties` option.
 * @property {Handlers | null | undefined} [handlers]
 *   Extra handlers for nodes (optional).
 * @property {Array<MdastNodes['type']> | null | undefined} [passThrough]
 *   List of custom mdast node types to pass through (keep) in hast (note that
 *   the node itself is passed, but eventual children are transformed)
 *   (optional).
 * @property {Handler | null | undefined} [unknownHandler]
 *   Handler for all unknown nodes (optional).
 *
 * @typedef State
 *   Info passed around.
 * @property {(node: MdastNodes) => Array<HastElementContent>} all
 *   Transform the children of an mdast parent to hast.
 * @property {<Type extends HastNodes>(from: MdastNodes, to: Type) => HastElement | Type} applyData
 *   Honor the `data` of `from`, and generate an element instead of `node`.
 * @property {Map<string, MdastDefinition>} definitionById
 *   Definitions by their identifier.
 * @property {Map<string, MdastFootnoteDefinition>} footnoteById
 *   Footnote definitions by their identifier.
 * @property {Map<string, number>} footnoteCounts
 *   Counts for how often the same footnote was called.
 * @property {Array<string>} footnoteOrder
 *   Identifiers of order when footnote calls first appear in tree order.
 * @property {Handlers} handlers
 *   Applied handlers.
 * @property {(node: MdastNodes, parent: MdastParents | undefined) => Array<HastElementContent> | HastElementContent | undefined} one
 *   Transform an mdast node to hast.
 * @property {Options} options
 *   Configuration.
 * @property {(from: MdastNodes, node: HastNodes) => undefined} patch
 *   Copy a node’s positional info.
 * @property {<Type extends HastRootContent>(nodes: Array<Type>, loose?: boolean | undefined) => Array<HastText | Type>} wrap
 *   Wrap `nodes` with line endings between each node, adds initial/final line endings when `loose`.
 */ __turbopack_context__.s([
    "createState",
    ()=>createState,
    "wrap",
    ()=>wrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/@ungap/structured-clone/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-position/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/handlers/index.js [app-ssr] (ecmascript)");
;
;
;
;
const own = {}.hasOwnProperty;
/** @type {Options} */ const emptyOptions = {};
function createState(tree, options) {
    const settings = options || emptyOptions;
    /** @type {Map<string, MdastDefinition>} */ const definitionById = new Map();
    /** @type {Map<string, MdastFootnoteDefinition>} */ const footnoteById = new Map();
    /** @type {Map<string, number>} */ const footnoteCounts = new Map();
    /** @type {Handlers} */ // @ts-expect-error: the root handler returns a root.
    // Hard to type.
    const handlers = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$handlers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handlers"],
        ...settings.handlers
    };
    /** @type {State} */ const state = {
        all,
        applyData,
        definitionById,
        footnoteById,
        footnoteCounts,
        footnoteOrder: [],
        handlers,
        one,
        options: settings,
        patch,
        wrap
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, function(node) {
        if (node.type === 'definition' || node.type === 'footnoteDefinition') {
            const map = node.type === 'definition' ? definitionById : footnoteById;
            const id = String(node.identifier).toUpperCase();
            // Mimick CM behavior of link definitions.
            // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/9032189/lib/index.js#L20-L21>.
            if (!map.has(id)) {
                // @ts-expect-error: node type matches map.
                map.set(id, node);
            }
        }
    });
    return state;
    //TURBOPACK unreachable
    ;
    /**
   * Transform an mdast node into a hast node.
   *
   * @param {MdastNodes} node
   *   mdast node.
   * @param {MdastParents | undefined} [parent]
   *   Parent of `node`.
   * @returns {Array<HastElementContent> | HastElementContent | undefined}
   *   Resulting hast node.
   */ function one(node, parent) {
        const type = node.type;
        const handle = state.handlers[type];
        if (own.call(state.handlers, type) && handle) {
            return handle(state, node, parent);
        }
        if (state.options.passThrough && state.options.passThrough.includes(type)) {
            if ('children' in node) {
                const { children, ...shallow } = node;
                const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(shallow);
                // @ts-expect-error: TS doesn’t understand…
                result.children = state.all(node);
                // @ts-expect-error: TS doesn’t understand…
                return result;
            }
            // @ts-expect-error: it’s custom.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(node);
        }
        const unknown = state.options.unknownHandler || defaultUnknownHandler;
        return unknown(state, node, parent);
    }
    /**
   * Transform the children of an mdast node into hast nodes.
   *
   * @param {MdastNodes} parent
   *   mdast node to compile
   * @returns {Array<HastElementContent>}
   *   Resulting hast nodes.
   */ function all(parent) {
        /** @type {Array<HastElementContent>} */ const values = [];
        if ('children' in parent) {
            const nodes = parent.children;
            let index = -1;
            while(++index < nodes.length){
                const result = state.one(nodes[index], parent);
                // To do: see if we van clean this? Can we merge texts?
                if (result) {
                    if (index && nodes[index - 1].type === 'break') {
                        if (!Array.isArray(result) && result.type === 'text') {
                            result.value = trimMarkdownSpaceStart(result.value);
                        }
                        if (!Array.isArray(result) && result.type === 'element') {
                            const head = result.children[0];
                            if (head && head.type === 'text') {
                                head.value = trimMarkdownSpaceStart(head.value);
                            }
                        }
                    }
                    if (Array.isArray(result)) {
                        values.push(...result);
                    } else {
                        values.push(result);
                    }
                }
            }
        }
        return values;
    }
}
/**
 * Copy a node’s positional info.
 *
 * @param {MdastNodes} from
 *   mdast node to copy from.
 * @param {HastNodes} to
 *   hast node to copy into.
 * @returns {undefined}
 *   Nothing.
 */ function patch(from, to) {
    if (from.position) to.position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$position$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["position"])(from);
}
/**
 * Honor the `data` of `from` and maybe generate an element instead of `to`.
 *
 * @template {HastNodes} Type
 *   Node type.
 * @param {MdastNodes} from
 *   mdast node to use data from.
 * @param {Type} to
 *   hast node to change.
 * @returns {HastElement | Type}
 *   Nothing.
 */ function applyData(from, to) {
    /** @type {HastElement | Type} */ let result = to;
    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (from && from.data) {
        const hName = from.data.hName;
        const hChildren = from.data.hChildren;
        const hProperties = from.data.hProperties;
        if (typeof hName === 'string') {
            // Transforming the node resulted in an element with a different name
            // than wanted:
            if (result.type === 'element') {
                result.tagName = hName;
            } else {
                /** @type {Array<HastElementContent>} */ // @ts-expect-error: assume no doctypes in `root`.
                const children = 'children' in result ? result.children : [
                    result
                ];
                result = {
                    type: 'element',
                    tagName: hName,
                    properties: {},
                    children
                };
            }
        }
        if (result.type === 'element' && hProperties) {
            Object.assign(result.properties, (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f40$ungap$2f$structured$2d$clone$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(hProperties));
        }
        if ('children' in result && result.children && hChildren !== null && hChildren !== undefined) {
            result.children = hChildren;
        }
    }
    return result;
}
/**
 * Transform an unknown node.
 *
 * @param {State} state
 *   Info passed around.
 * @param {MdastNodes} node
 *   Unknown mdast node.
 * @returns {HastElement | HastText}
 *   Resulting hast node.
 */ function defaultUnknownHandler(state, node) {
    const data = node.data || {};
    /** @type {HastElement | HastText} */ const result = 'value' in node && !(own.call(data, 'hProperties') || own.call(data, 'hChildren')) ? {
        type: 'text',
        value: node.value
    } : {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: state.all(node)
    };
    state.patch(node, result);
    return state.applyData(node, result);
}
function wrap(nodes, loose) {
    /** @type {Array<HastText | Type>} */ const result = [];
    let index = -1;
    if (loose) {
        result.push({
            type: 'text',
            value: '\n'
        });
    }
    while(++index < nodes.length){
        if (index) result.push({
            type: 'text',
            value: '\n'
        });
        result.push(nodes[index]);
    }
    if (loose && nodes.length > 0) {
        result.push({
            type: 'text',
            value: '\n'
        });
    }
    return result;
}
/**
 * Trim spaces and tabs at the start of `value`.
 *
 * @param {string} value
 *   Value to trim.
 * @returns {string}
 *   Result.
 */ function trimMarkdownSpaceStart(value) {
    let index = 0;
    let code = value.charCodeAt(index);
    while(code === 9 || code === 32){
        index++;
        code = value.charCodeAt(index);
    }
    return value.slice(index);
}
}),
"[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('hast').Nodes} HastNodes
 * @typedef {import('mdast').Nodes} MdastNodes
 * @typedef {import('./state.js').Options} Options
 */ __turbopack_context__.s([
    "toHast",
    ()=>toHast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/footer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/state.js [app-ssr] (ecmascript)");
;
;
;
function toHast(tree, options) {
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createState"])(tree, options);
    const node = state.one(tree, undefined);
    const foot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["footer"])(state);
    /** @type {HastNodes} */ const result = Array.isArray(node) ? {
        type: 'root',
        children: node
    } : node || {
        type: 'root',
        children: []
    };
    if (foot) {
        // If there’s a footer, there were definitions, meaning block
        // content.
        // So `result` is a parent node.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])('children' in result);
        result.children.push({
            type: 'text',
            value: '\n'
        }, foot);
    }
    return result;
}
}),
"[project]/PREFECT-10/node_modules/unist-util-is/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */ /**
 * @template Fn
 * @template Fallback
 * @typedef {Fn extends (value: any) => value is infer Thing ? Thing : Fallback} Predicate
 */ /**
 * @callback Check
 *   Check that an arbitrary value is a node.
 * @param {unknown} this
 *   The given context.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is a node and passes a test.
 *
 * @typedef {Record<string, unknown> | Node} Props
 *   Object to check for equivalence.
 *
 *   Note: `Node` is included as it is common but is not indexable.
 *
 * @typedef {Array<Props | TestFunction | string> | Props | TestFunction | string | null | undefined} Test
 *   Check for an arbitrary node.
 *
 * @callback TestFunction
 *   Check if a node passes a test.
 * @param {unknown} this
 *   The given context.
 * @param {Node} node
 *   A node.
 * @param {number | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean | undefined | void}
 *   Whether this node passes the test.
 *
 *   Note: `void` is included until TS sees no return as `undefined`.
 */ /**
 * Check if `node` is a `Node` and whether it passes the given test.
 *
 * @param {unknown} node
 *   Thing to check, typically `Node`.
 * @param {Test} test
 *   A check for a specific node.
 * @param {number | null | undefined} index
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} parent
 *   The node’s parent.
 * @param {unknown} context
 *   Context object (`this`) to pass to `test` functions.
 * @returns {boolean}
 *   Whether `node` is a node and passes a test.
 */ __turbopack_context__.s([
    "convert",
    ()=>convert,
    "is",
    ()=>is
]);
const is = /**
     * @param {unknown} [node]
     * @param {Test} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function(node, test, index, parent, context) {
    const check = convert(test);
    if (index !== undefined && index !== null && (typeof index !== 'number' || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error('Expected positive finite index');
    }
    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
        throw new Error('Expected parent node');
    }
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
        throw new Error('Expected both parent and index');
    }
    return looksLikeANode(node) ? check.call(context, node, index, parent) : false;
};
const convert = /**
     * @param {Test} [test]
     * @returns {Check}
     */ function(test) {
    if (test === null || test === undefined) {
        return ok;
    }
    if (typeof test === 'function') {
        return castFactory(test);
    }
    if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === 'string') {
        return typeFactory(test);
    }
    throw new Error('Expected function, string, or object as test');
};
/**
 * @param {Array<Props | TestFunction | string>} tests
 * @returns {Check}
 */ function anyFactory(tests) {
    /** @type {Array<Check>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convert(tests[index]);
    }
    return castFactory(any);
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {TestFunction}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].apply(this, parameters)) return true;
        }
        return false;
    }
}
/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {Check}
 */ function propsFactory(check) {
    const checkAsRecord = check;
    return castFactory(all);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        const nodeAsRecord = node;
        /** @type {string} */ let key;
        for(key in check){
            if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
        }
        return true;
    }
}
/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {Check}
 */ function typeFactory(check) {
    return castFactory(type);
    //TURBOPACK unreachable
    ;
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunction} testFunction
 * @returns {Check}
 */ function castFactory(testFunction) {
    return check;
    //TURBOPACK unreachable
    ;
    /**
   * @this {unknown}
   * @type {Check}
   */ function check(value, index, parent) {
        return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index === 'number' ? index : undefined, parent || undefined));
    }
}
function ok() {
    return true;
}
/**
 * @param {unknown} value
 * @returns {value is Node}
 */ function looksLikeANode(value) {
    return value !== null && typeof value === 'object' && 'type' in value;
}
}),
"[project]/PREFECT-10/node_modules/unist-util-visit-parents/lib/color.node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @param {string} d
 * @returns {string}
 */ __turbopack_context__.s([
    "color",
    ()=>color
]);
function color(d) {
    return '\u001B[33m' + d + '\u001B[39m';
}
}),
"[project]/PREFECT-10/node_modules/unist-util-visit-parents/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ /**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends Array<any>
 *   ? MatchesOne<Value, Check[keyof Check]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {'skip' | boolean} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<VisitedParents>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [VisitedParents=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Tree type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ __turbopack_context__.s([
    "CONTINUE",
    ()=>CONTINUE,
    "EXIT",
    ()=>EXIT,
    "SKIP",
    ()=>SKIP,
    "visitParents",
    ()=>visitParents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-is/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-visit-parents/lib/color.node.js [app-ssr] (ecmascript)");
;
;
/** @type {Readonly<ActionTuple>} */ const empty = [];
const CONTINUE = true;
const EXIT = false;
const SKIP = 'skip';
function visitParents(tree, test, visitor, reverse) {
    /** @type {Test} */ let check;
    if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
    } else {
        // @ts-expect-error visitor given, so `test` isn’t a visitor.
        check = test;
    }
    const is = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$is$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convert"])(check);
    const step = reverse ? -1 : 1;
    factory(tree, undefined, [])();
    /**
   * @param {UnistNode} node
   * @param {number | undefined} index
   * @param {Array<UnistParent>} parents
   */ function factory(node, index, parents) {
        const value = node && typeof node === 'object' ? node : {};
        if (typeof value.type === 'string') {
            const name = // `hast`
            typeof value.tagName === 'string' ? value.tagName : typeof value.name === 'string' ? value.name : undefined;
            Object.defineProperty(visit, 'name', {
                value: 'node (' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$color$2e$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["color"])(node.type + (name ? '<' + name + '>' : '')) + ')'
            });
        }
        return visit;
        //TURBOPACK unreachable
        ;
        function visit() {
            /** @type {Readonly<ActionTuple>} */ let result = empty;
            /** @type {Readonly<ActionTuple>} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array<UnistParent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || undefined)) {
                // @ts-expect-error: `visitor` is now a visitor.
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            if ('children' in node && node.children) {
                const nodeAsParent = node;
                if (nodeAsParent.children && result[0] !== SKIP) {
                    offset = (reverse ? nodeAsParent.children.length : -1) + step;
                    grandparents = parents.concat(nodeAsParent);
                    while(offset > -1 && offset < nodeAsParent.children.length){
                        const child = nodeAsParent.children[offset];
                        subresult = factory(child, offset, grandparents)();
                        if (subresult[0] === EXIT) {
                            return subresult;
                        }
                        offset = typeof subresult[1] === 'number' ? subresult[1] : offset + step;
                    }
                }
            }
            return result;
        }
    }
}
/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {Readonly<ActionTuple>}
 *   Clean result.
 */ function toResult(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === 'number') {
        return [
            CONTINUE,
            value
        ];
    }
    return value === null || value === undefined ? empty : [
        value
    ];
}
}),
"[project]/PREFECT-10/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('unist').Node} UnistNode
 * @typedef {import('unist').Parent} UnistParent
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */ /**
 * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test
 *   Test from `unist-util-is`.
 *
 *   Note: we have remove and add `undefined`, because otherwise when generating
 *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,
 *   which doesn’t work when publishing on npm.
 */ // To do: use types from `unist-util-visit-parents` when it’s released.
/**
 * @typedef {(
 *   Fn extends (value: any) => value is infer Thing
 *   ? Thing
 *   : Fallback
 * )} Predicate
 *   Get the value of a type guard `Fn`.
 * @template Fn
 *   Value; typically function that is a type guard (such as `(x): x is Y`).
 * @template Fallback
 *   Value to yield if `Fn` is not a type guard.
 */ /**
 * @typedef {(
 *   Check extends null | undefined // No test.
 *   ? Value
 *   : Value extends {type: Check} // String (type) test.
 *   ? Value
 *   : Value extends Check // Partial test.
 *   ? Value
 *   : Check extends Function // Function test.
 *   ? Predicate<Check, Value> extends Value
 *     ? Predicate<Check, Value>
 *     : never
 *   : never // Some other test?
 * )} MatchesOne
 *   Check whether a node matches a primitive check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test, but not arrays.
 */ /**
 * @typedef {(
 *   Check extends Array<any>
 *   ? MatchesOne<Value, Check[keyof Check]>
 *   : MatchesOne<Value, Check>
 * )} Matches
 *   Check whether a node matches a check in the type system.
 * @template Value
 *   Value; typically unist `Node`.
 * @template Check
 *   Value; typically `unist-util-is`-compatible test.
 */ /**
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint
 *   Number; capped reasonably.
 */ /**
 * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment
 *   Increment a number in the type system.
 * @template {Uint} [I=0]
 *   Index.
 */ /**
 * @typedef {(
 *   Node extends UnistParent
 *   ? Node extends {children: Array<infer Children>}
 *     ? Child extends Children ? Node : never
 *     : never
 *   : never
 * )} InternalParent
 *   Collect nodes that can be parents of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent
 *   Collect nodes in `Tree` that can be parents of `Child`.
 * @template {UnistNode} Tree
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 */ /**
 * @typedef {(
 *   Depth extends Max
 *   ? never
 *   :
 *     | InternalParent<Node, Child>
 *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>
 * )} InternalAncestor
 *   Collect nodes in `Tree` that can be ancestors of `Child`.
 * @template {UnistNode} Node
 *   All node types in a tree.
 * @template {UnistNode} Child
 *   Node to search for.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @typedef {(
 *   Tree extends UnistParent
 *     ? Depth extends Max
 *       ? Tree
 *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>
 *     : Tree
 * )} InclusiveDescendant
 *   Collect all (inclusive) descendants of `Tree`.
 *
 *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to
 *   > recurse without actually running into an infinite loop, which the
 *   > previous version did.
 *   >
 *   > Practically, a max of `2` is typically enough assuming a `Root` is
 *   > passed, but it doesn’t improve performance.
 *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.
 *   > Using up to `10` doesn’t hurt or help either.
 * @template {UnistNode} Tree
 *   Tree type.
 * @template {Uint} [Max=10]
 *   Max; searches up to this depth.
 * @template {Uint} [Depth=0]
 *   Current depth.
 */ /**
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends UnistNode ? number | undefined : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 * @template {UnistNode} [Visited=UnistNode]
 *   Visited node type.
 * @template {UnistParent} [Ancestor=UnistParent]
 *   Ancestor type.
 */ /**
 * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch
 *   Build a typed `Visitor` function from a node and all possible parents.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Visited
 *   Node type.
 * @template {UnistParent} Ancestor
 *   Parent type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     Matches<Descendant, Check>,
 *     Extract<Descendant, UnistParent>
 *   >
 * )} BuildVisitorFromDescendants
 *   Build a typed `Visitor` function from a list of descendants and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 */ /**
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parent`.
 * @template {UnistNode} [Tree=UnistNode]
 *   Node type.
 * @template {Test} [Check=Test]
 *   Test type.
 */ __turbopack_context__.s([
    "visit",
    ()=>visit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-visit-parents/lib/index.js [app-ssr] (ecmascript)");
;
;
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
    /** @type {boolean | null | undefined} */ let reverse;
    /** @type {Test} */ let test;
    /** @type {Visitor} */ let visitor;
    if (typeof testOrVisitor === 'function' && typeof visitorOrReverse !== 'function') {
        test = undefined;
        visitor = testOrVisitor;
        reverse = visitorOrReverse;
    } else {
        // @ts-expect-error: assume the overload with test was given.
        test = testOrVisitor;
        // @ts-expect-error: assume the overload with test was given.
        visitor = visitorOrReverse;
        reverse = maybeReverse;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2d$parents$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visitParents"])(tree, test, overload, reverse);
    /**
   * @param {UnistNode} node
   * @param {Array<UnistParent>} parents
   */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        const index = parent ? parent.children.indexOf(node) : undefined;
        return visitor(node, index, parent);
    }
}
}),
"[project]/PREFECT-10/node_modules/trim-lines/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trimLines",
    ()=>trimLines
]);
const tab = 9 /* `\t` */ ;
const space = 32 /* ` ` */ ;
function trimLines(value) {
    const source = String(value);
    const search = /\r?\n|\r/g;
    let match = search.exec(source);
    let last = 0;
    /** @type {Array<string>} */ const lines = [];
    while(match){
        lines.push(trimLine(source.slice(last, match.index), last > 0, true), match[0]);
        last = match.index + match[0].length;
        match = search.exec(source);
    }
    lines.push(trimLine(source.slice(last), last > 0, false));
    return lines.join('');
}
/**
 * @param {string} value
 *   Line to trim.
 * @param {boolean} start
 *   Whether to trim the start of the line.
 * @param {boolean} end
 *   Whether to trim the end of the line.
 * @returns {string}
 *   Trimmed line.
 */ function trimLine(value, start, end) {
    let startIndex = 0;
    let endIndex = value.length;
    if (start) {
        let code = value.codePointAt(startIndex);
        while(code === tab || code === space){
            startIndex++;
            code = value.codePointAt(startIndex);
        }
    }
    if (end) {
        let code = value.codePointAt(endIndex - 1);
        while(code === tab || code === space){
            endIndex--;
            code = value.codePointAt(endIndex - 1);
        }
    }
    return endIndex > startIndex ? value.slice(startIndex, endIndex) : '';
}
}),
"[project]/PREFECT-10/node_modules/remark-rehype/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Include `data` fields in mdast and `raw` nodes in hast.
/// <reference types="mdast-util-to-hast" />
/**
 * @import {Root as HastRoot} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {Options as ToHastOptions} from 'mdast-util-to-hast'
 * @import {Processor} from 'unified'
 * @import {VFile} from 'vfile'
 */ /**
 * @typedef {Omit<ToHastOptions, 'file'>} Options
 *
 * @callback TransformBridge
 *   Bridge-mode.
 *
 *   Runs the destination with the new hast tree.
 *   Discards result.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {Promise<undefined>}
 *   Nothing.
 *
 * @callback TransformMutate
 *  Mutate-mode.
 *
 *  Further transformers run on the hast tree.
 * @param {MdastRoot} tree
 *   Tree.
 * @param {VFile} file
 *   File.
 * @returns {HastRoot}
 *   Tree (hast).
 */ __turbopack_context__.s([
    "default",
    ()=>remarkRehype
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/mdast-util-to-hast/lib/index.js [app-ssr] (ecmascript)");
;
function remarkRehype(destination, options) {
    if (destination && 'run' in destination) {
        /**
     * @type {TransformBridge}
     */ return async function(tree, file) {
            // Cast because root in -> root out.
            const hastTree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHast"])(tree, {
                file,
                ...options
            });
            await destination.run(hastTree, file);
        };
    }
    /**
   * @type {TransformMutate}
   */ return function(tree, file) {
        // Cast because root in -> root out.
        // To do: in the future, disallow ` || options` fallback.
        // With `unified-engine`, `destination` can be `undefined` but
        // `options` will be the file set.
        // We should not pass that as `options`.
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$mdast$2d$util$2d$to$2d$hast$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHast"])(tree, {
            file,
            ...destination || options
        });
    };
}
}),
"[project]/PREFECT-10/node_modules/bail/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Throw a given error.
 *
 * @param {Error|null|undefined} [error]
 *   Maybe error.
 * @returns {asserts error is null|undefined}
 */ __turbopack_context__.s([
    "bail",
    ()=>bail
]);
function bail(error) {
    if (error) {
        throw error;
    }
}
}),
"[project]/PREFECT-10/node_modules/extend/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(arr);
    }
    return toStr.call(arr) === '[object Array]';
};
var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== '[object Object]') {
        return false;
    }
    var hasOwnConstructor = hasOwn.call(obj, 'constructor');
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
    }
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj){}
    return typeof key === 'undefined' || hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
    if (defineProperty && options.name === '__proto__') {
        defineProperty(target, options.name, {
            enumerable: true,
            configurable: true,
            value: options.newValue,
            writable: true
        });
    } else {
        target[options.name] = options.newValue;
    }
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
    if (name === '__proto__') {
        if (!hasOwn.call(obj, name)) {
            return void 0;
        } else if (gOPD) {
            // In early versions of node, obj['__proto__'] is buggy when obj has
            // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
            return gOPD(obj, name).value;
        }
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== 'object' && typeof target !== 'function') {
        target = {};
    }
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) {
            // Extend the base object
            for(name in options){
                src = getProperty(target, name);
                copy = getProperty(options, name);
                // Prevent never-ending loop
                if (target !== copy) {
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        setProperty(target, {
                            name: name,
                            newValue: extend(deep, clone, copy)
                        });
                    // Don't bring in undefined values
                    } else if (typeof copy !== 'undefined') {
                        setProperty(target, {
                            name: name,
                            newValue: copy
                        });
                    }
                }
            }
        }
    }
    // Return the modified object
    return target;
};
}),
"[project]/PREFECT-10/node_modules/is-plain-obj/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>isPlainObject
]);
function isPlainObject(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
}),
"[project]/PREFECT-10/node_modules/trough/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// To do: remove `void`s
// To do: remove `null` from output of our APIs, allow it as user APIs.
/**
 * @typedef {(error?: Error | null | undefined, ...output: Array<any>) => void} Callback
 *   Callback.
 *
 * @typedef {(...input: Array<any>) => any} Middleware
 *   Ware.
 *
 * @typedef Pipeline
 *   Pipeline.
 * @property {Run} run
 *   Run the pipeline.
 * @property {Use} use
 *   Add middleware.
 *
 * @typedef {(...input: Array<any>) => void} Run
 *   Call all middleware.
 *
 *   Calls `done` on completion with either an error or the output of the
 *   last middleware.
 *
 *   > 👉 **Note**: as the length of input defines whether async functions get a
 *   > `next` function,
 *   > it’s recommended to keep `input` at one value normally.

 *
 * @typedef {(fn: Middleware) => Pipeline} Use
 *   Add middleware.
 */ /**
 * Create new middleware.
 *
 * @returns {Pipeline}
 *   Pipeline.
 */ __turbopack_context__.s([
    "trough",
    ()=>trough,
    "wrap",
    ()=>wrap
]);
function trough() {
    /** @type {Array<Middleware>} */ const fns = [];
    /** @type {Pipeline} */ const pipeline = {
        run,
        use
    };
    return pipeline;
    //TURBOPACK unreachable
    ;
    /** @type {Run} */ function run(...values) {
        let middlewareIndex = -1;
        /** @type {Callback} */ const callback = values.pop();
        if (typeof callback !== 'function') {
            throw new TypeError('Expected function as last argument, not ' + callback);
        }
        next(null, ...values);
        /**
     * Run the next `fn`, or we’re done.
     *
     * @param {Error | null | undefined} error
     * @param {Array<any>} output
     */ function next(error, ...output) {
            const fn = fns[++middlewareIndex];
            let index = -1;
            if (error) {
                callback(error);
                return;
            }
            // Copy non-nullish input into values.
            while(++index < values.length){
                if (output[index] === null || output[index] === undefined) {
                    output[index] = values[index];
                }
            }
            // Save the newly created `output` for the next call.
            values = output;
            // Next or done.
            if (fn) {
                wrap(fn, next)(...output);
            } else {
                callback(null, ...output);
            }
        }
    }
    /** @type {Use} */ function use(middelware) {
        if (typeof middelware !== 'function') {
            throw new TypeError('Expected `middelware` to be a function, not ' + middelware);
        }
        fns.push(middelware);
        return pipeline;
    }
}
function wrap(middleware, callback) {
    /** @type {boolean} */ let called;
    return wrapped;
    //TURBOPACK unreachable
    ;
    /**
   * Call `middleware`.
   * @this {any}
   * @param {Array<any>} parameters
   * @returns {void}
   */ function wrapped(...parameters) {
        const fnExpectsCallback = middleware.length > parameters.length;
        /** @type {any} */ let result;
        if (fnExpectsCallback) {
            parameters.push(done);
        }
        try {
            result = middleware.apply(this, parameters);
        } catch (error) {
            const exception = error;
            // Well, this is quite the pickle.
            // `middleware` received a callback and called it synchronously, but that
            // threw an error.
            // The only thing left to do is to throw the thing instead.
            if (fnExpectsCallback && called) {
                throw exception;
            }
            return done(exception);
        }
        if (!fnExpectsCallback) {
            if (result && result.then && typeof result.then === 'function') {
                result.then(then, done);
            } else if (result instanceof Error) {
                done(result);
            } else {
                then(result);
            }
        }
    }
    /**
   * Call `callback`, only once.
   *
   * @type {Callback}
   */ function done(error, ...output) {
        if (!called) {
            called = true;
            callback(error, ...output);
        }
    }
    /**
   * Call `done` with one value.
   *
   * @param {any} [value]
   */ function then(value) {
        done(null, value);
    }
}
}),
"[project]/PREFECT-10/node_modules/vfile/lib/minurl.shared.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a value has the shape of a WHATWG URL object.
 *
 * Using a symbol or instanceof would not be able to recognize URL objects
 * coming from other implementations (e.g. in Electron), so instead we are
 * checking some well known properties for a lack of a better test.
 *
 * We use `href` and `protocol` as they are the only properties that are
 * easy to retrieve and calculate due to the lazy nature of the getters.
 *
 * We check for auth attribute to distinguish legacy url instance with
 * WHATWG URL instance.
 *
 * @param {unknown} fileUrlOrPath
 *   File path or URL.
 * @returns {fileUrlOrPath is URL}
 *   Whether it’s a URL.
 */ // From: <https://github.com/nodejs/node/blob/6a3403c/lib/internal/url.js#L720>
__turbopack_context__.s([
    "isUrl",
    ()=>isUrl
]);
function isUrl(fileUrlOrPath) {
    return Boolean(fileUrlOrPath !== null && typeof fileUrlOrPath === 'object' && 'href' in fileUrlOrPath && fileUrlOrPath.href && 'protocol' in fileUrlOrPath && fileUrlOrPath.protocol && // @ts-expect-error: indexing is fine.
    fileUrlOrPath.auth === undefined);
}
}),
"[project]/PREFECT-10/node_modules/vfile/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Node, Point, Position} from 'unist'
 * @import {Options as MessageOptions} from 'vfile-message'
 * @import {Compatible, Data, Map, Options, Value} from 'vfile'
 */ /**
 * @typedef {object & {type: string, position?: Position | undefined}} NodeLike
 */ __turbopack_context__.s([
    "VFile",
    ()=>VFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/vfile-message/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs) <export default as minpath>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__$3c$export__default__as__minproc$3e$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs) <export default as minproc>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__$3c$export__fileURLToPath__as__urlToPath$3e$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2f$lib$2f$minurl$2e$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/vfile/lib/minurl.shared.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Order of setting (least specific to most), we need this because otherwise
 * `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
 * stem can be set.
 */ const order = [
    'history',
    'path',
    'basename',
    'stem',
    'extname',
    'dirname'
];
class VFile {
    /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */ constructor(value){
        /** @type {Options | VFile} */ let options;
        if (!value) {
            options = {};
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2f$lib$2f$minurl$2e$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUrl"])(value)) {
            options = {
                path: value
            };
        } else if (typeof value === 'string' || isUint8Array(value)) {
            options = {
                value
            };
        } else {
            options = value;
        }
        /* eslint-disable no-unused-expressions */ /**
     * Base of `path` (default: `process.cwd()` or `'/'` in browsers).
     *
     * @type {string}
     */ // Prevent calling `cwd` (which could be expensive) if it’s not needed;
        // the empty string will be overridden in the next block.
        this.cwd = 'cwd' in options ? '' : __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__$3c$export__default__as__minproc$3e$__["minproc"].cwd();
        /**
     * Place to store custom info (default: `{}`).
     *
     * It’s OK to store custom data directly on the file but moving it to
     * `data` is recommended.
     *
     * @type {Data}
     */ this.data = {};
        /**
     * List of file paths the file moved between.
     *
     * The first is the original path and the last is the current path.
     *
     * @type {Array<string>}
     */ this.history = [];
        /**
     * List of messages associated with the file.
     *
     * @type {Array<VFileMessage>}
     */ this.messages = [];
        /**
     * Raw value.
     *
     * @type {Value}
     */ this.value;
        // The below are non-standard, they are “well-known”.
        // As in, used in several tools.
        /**
     * Source map.
     *
     * This type is equivalent to the `RawSourceMap` type from the `source-map`
     * module.
     *
     * @type {Map | null | undefined}
     */ this.map;
        /**
     * Custom, non-string, compiled, representation.
     *
     * This is used by unified to store non-string results.
     * One example is when turning markdown into React nodes.
     *
     * @type {unknown}
     */ this.result;
        /**
     * Whether a file was saved to disk.
     *
     * This is used by vfile reporters.
     *
     * @type {boolean}
     */ this.stored;
        /* eslint-enable no-unused-expressions */ // Set path related properties in the correct order.
        let index = -1;
        while(++index < order.length){
            const field = order[index];
            // Note: we specifically use `in` instead of `hasOwnProperty` to accept
            // `vfile`s too.
            if (field in options && options[field] !== undefined && options[field] !== null) {
                // @ts-expect-error: TS doesn’t understand basic reality.
                this[field] = field === 'history' ? [
                    ...options[field]
                ] : options[field];
            }
        }
        /** @type {string} */ let field;
        // Set non-path related properties.
        for(field in options){
            // @ts-expect-error: fine to set other things.
            if (!order.includes(field)) {
                // @ts-expect-error: fine to set other things.
                this[field] = options[field];
            }
        }
    }
    /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */ get basename() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].basename(this.path) : undefined;
    }
    /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */ set basename(basename) {
        assertNonEmpty(basename, 'basename');
        assertPart(basename, 'basename');
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(this.dirname || '', basename);
    }
    /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */ get dirname() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].dirname(this.path) : undefined;
    }
    /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */ set dirname(dirname) {
        assertPath(this.basename, 'dirname');
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(dirname || '', this.basename);
    }
    /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */ get extname() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].extname(this.path) : undefined;
    }
    /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */ set extname(extname) {
        assertPart(extname, 'extname');
        assertPath(this.dirname, 'extname');
        if (extname) {
            if (extname.codePointAt(0) !== 46 /* `.` */ ) {
                throw new Error('`extname` must start with `.`');
            }
            if (extname.includes('.', 1)) {
                throw new Error('`extname` cannot contain multiple dots');
            }
        }
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(this.dirname, this.stem + (extname || ''));
    }
    /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */ get path() {
        return this.history[this.history.length - 1];
    }
    /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */ set path(path) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2f$lib$2f$minurl$2e$shared$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isUrl"])(path)) {
            path = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__$3c$export__fileURLToPath__as__urlToPath$3e$__["urlToPath"])(path);
        }
        assertNonEmpty(path, 'path');
        if (this.path !== path) {
            this.history.push(path);
        }
    }
    /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */ get stem() {
        return typeof this.path === 'string' ? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].basename(this.path, this.extname) : undefined;
    }
    /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */ set stem(stem) {
        assertNonEmpty(stem, 'stem');
        assertPart(stem, 'stem');
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].join(this.dirname || '', stem + (this.extname || ''));
    }
    // Normal prototypal methods.
    /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */ fail(causeOrReason, optionsOrParentOrPlace, origin) {
        // @ts-expect-error: the overloads are fine.
        const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
        message.fatal = true;
        throw message;
    }
    /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */ info(causeOrReason, optionsOrParentOrPlace, origin) {
        // @ts-expect-error: the overloads are fine.
        const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
        message.fatal = undefined;
        return message;
    }
    /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */ message(causeOrReason, optionsOrParentOrPlace, origin) {
        const message = new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2d$message$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFileMessage"](// @ts-expect-error: the overloads are fine.
        causeOrReason, optionsOrParentOrPlace, origin);
        if (this.path) {
            message.name = this.path + ':' + message.name;
            message.file = this.path;
        }
        message.fatal = false;
        this.messages.push(message);
        return message;
    }
    /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */ toString(encoding) {
        if (this.value === undefined) {
            return '';
        }
        if (typeof this.value === 'string') {
            return this.value;
        }
        const decoder = new TextDecoder(encoding || undefined);
        return decoder.decode(this.value);
    }
}
/**
 * Assert that `part` is not a path (as in, does not contain `path.sep`).
 *
 * @param {string | null | undefined} part
 *   File path part.
 * @param {string} name
 *   Part name.
 * @returns {undefined}
 *   Nothing.
 */ function assertPart(part, name) {
    if (part && part.includes(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].sep)) {
        throw new Error('`' + name + '` cannot be a path: did not expect `' + __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__$3c$export__default__as__minpath$3e$__["minpath"].sep + '`');
    }
}
/**
 * Assert that `part` is not empty.
 *
 * @param {string | undefined} part
 *   Thing.
 * @param {string} name
 *   Part name.
 * @returns {asserts part is string}
 *   Nothing.
 */ function assertNonEmpty(part, name) {
    if (!part) {
        throw new Error('`' + name + '` cannot be empty');
    }
}
/**
 * Assert `path` exists.
 *
 * @param {string | undefined} path
 *   Path.
 * @param {string} name
 *   Dependency name.
 * @returns {asserts path is string}
 *   Nothing.
 */ function assertPath(path, name) {
    if (!path) {
        throw new Error('Setting `' + name + '` requires `path` to be set too');
    }
}
/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */ function isUint8Array(value) {
    return Boolean(value && typeof value === 'object' && 'byteLength' in value && 'byteOffset' in value);
}
}),
"[project]/PREFECT-10/node_modules/unified/lib/callable-instance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallableInstance",
    ()=>CallableInstance
]);
const CallableInstance = /**
       * @this {Function}
       * @param {string | symbol} property
       * @returns {(...parameters: Array<unknown>) => unknown}
       */ function(property) {
    const self = this;
    const constr = self.constructor;
    const proto = // Prototypes do exist.
    // type-coverage:ignore-next-line
    constr.prototype;
    const value = proto[property];
    /** @type {(...parameters: Array<unknown>) => unknown} */ const apply = function() {
        return value.apply(apply, arguments);
    };
    Object.setPrototypeOf(apply, proto);
    // Not needed for us in `unified`: we only call this on the `copy`
    // function,
    // and we don't need to add its fields (`length`, `name`)
    // over.
    // See also: GH-246.
    // const names = Object.getOwnPropertyNames(value)
    //
    // for (const p of names) {
    //   const descriptor = Object.getOwnPropertyDescriptor(value, p)
    //   if (descriptor) Object.defineProperty(apply, p, descriptor)
    // }
    return apply;
};
}),
"[project]/PREFECT-10/node_modules/unified/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @typedef {import('trough').Pipeline} Pipeline
 *
 * @typedef {import('unist').Node} Node
 *
 * @typedef {import('vfile').Compatible} Compatible
 * @typedef {import('vfile').Value} Value
 *
 * @typedef {import('../index.js').CompileResultMap} CompileResultMap
 * @typedef {import('../index.js').Data} Data
 * @typedef {import('../index.js').Settings} Settings
 */ /**
 * @typedef {CompileResultMap[keyof CompileResultMap]} CompileResults
 *   Acceptable results from compilers.
 *
 *   To register custom results, add them to
 *   {@linkcode CompileResultMap}.
 */ /**
 * @template {Node} [Tree=Node]
 *   The node that the compiler receives (default: `Node`).
 * @template {CompileResults} [Result=CompileResults]
 *   The thing that the compiler yields (default: `CompileResults`).
 * @callback Compiler
 *   A **compiler** handles the compiling of a syntax tree to something else
 *   (in most cases, text) (TypeScript type).
 *
 *   It is used in the stringify phase and called with a {@linkcode Node}
 *   and {@linkcode VFile} representation of the document to compile.
 *   It should return the textual representation of the given tree (typically
 *   `string`).
 *
 *   > **Note**: unified typically compiles by serializing: most compilers
 *   > return `string` (or `Uint8Array`).
 *   > Some compilers, such as the one configured with
 *   > [`rehype-react`][rehype-react], return other values (in this case, a
 *   > React tree).
 *   > If you’re using a compiler that doesn’t serialize, expect different
 *   > result values.
 *   >
 *   > To register custom results in TypeScript, add them to
 *   > {@linkcode CompileResultMap}.
 *
 *   [rehype-react]: https://github.com/rehypejs/rehype-react
 * @param {Tree} tree
 *   Tree to compile.
 * @param {VFile} file
 *   File associated with `tree`.
 * @returns {Result}
 *   New content: compiled text (`string` or `Uint8Array`, for `file.value`) or
 *   something else (for `file.result`).
 */ /**
 * @template {Node} [Tree=Node]
 *   The node that the parser yields (default: `Node`)
 * @callback Parser
 *   A **parser** handles the parsing of text to a syntax tree.
 *
 *   It is used in the parse phase and is called with a `string` and
 *   {@linkcode VFile} of the document to parse.
 *   It must return the syntax tree representation of the given file
 *   ({@linkcode Node}).
 * @param {string} document
 *   Document to parse.
 * @param {VFile} file
 *   File associated with `document`.
 * @returns {Tree}
 *   Node representing the given file.
 */ /**
 * @typedef {(
 *   Plugin<Array<any>, any, any> |
 *   PluginTuple<Array<any>, any, any> |
 *   Preset
 * )} Pluggable
 *   Union of the different ways to add plugins and settings.
 */ /**
 * @typedef {Array<Pluggable>} PluggableList
 *   List of plugins and presets.
 */ // Note: we can’t use `callback` yet as it messes up `this`:
//  <https://github.com/microsoft/TypeScript/issues/55197>.
/**
 * @template {Array<unknown>} [PluginParameters=[]]
 *   Arguments passed to the plugin (default: `[]`, the empty tuple).
 * @template {Node | string | undefined} [Input=Node]
 *   Value that is expected as input (default: `Node`).
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node it expects.
 *   *   If the plugin sets a {@linkcode Parser}, this should be
 *       `string`.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be the
 *       node it expects.
 * @template [Output=Input]
 *   Value that is yielded as output (default: `Input`).
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node that that yields.
 *   *   If the plugin sets a {@linkcode Parser}, this should be the
 *       node that it yields.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be
 *       result it yields.
 * @typedef {(
 *   (this: Processor, ...parameters: PluginParameters) =>
 *     Input extends string ? // Parser.
 *        Output extends Node | undefined ? undefined | void : never :
 *     Output extends CompileResults ? // Compiler.
 *        Input extends Node | undefined ? undefined | void : never :
 *     Transformer<
 *       Input extends Node ? Input : Node,
 *       Output extends Node ? Output : Node
 *     > | undefined | void
 * )} Plugin
 *   Single plugin.
 *
 *   Plugins configure the processors they are applied on in the following
 *   ways:
 *
 *   *   they change the processor, such as the parser, the compiler, or by
 *       configuring data
 *   *   they specify how to handle trees and files
 *
 *   In practice, they are functions that can receive options and configure the
 *   processor (`this`).
 *
 *   > **Note**: plugins are called when the processor is *frozen*, not when
 *   > they are applied.
 */ /**
 * Tuple of a plugin and its configuration.
 *
 * The first item is a plugin, the rest are its parameters.
 *
 * @template {Array<unknown>} [TupleParameters=[]]
 *   Arguments passed to the plugin (default: `[]`, the empty tuple).
 * @template {Node | string | undefined} [Input=undefined]
 *   Value that is expected as input (optional).
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node it expects.
 *   *   If the plugin sets a {@linkcode Parser}, this should be
 *       `string`.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be the
 *       node it expects.
 * @template [Output=undefined] (optional).
 *   Value that is yielded as output.
 *
 *   *   If the plugin returns a {@linkcode Transformer}, this
 *       should be the node that that yields.
 *   *   If the plugin sets a {@linkcode Parser}, this should be the
 *       node that it yields.
 *   *   If the plugin sets a {@linkcode Compiler}, this should be
 *       result it yields.
 * @typedef {(
 *   [
 *     plugin: Plugin<TupleParameters, Input, Output>,
 *     ...parameters: TupleParameters
 *   ]
 * )} PluginTuple
 */ /**
 * @typedef Preset
 *   Sharable configuration.
 *
 *   They can contain plugins and settings.
 * @property {PluggableList | undefined} [plugins]
 *   List of plugins and presets (optional).
 * @property {Settings | undefined} [settings]
 *   Shared settings for parsers and compilers (optional).
 */ /**
 * @template {VFile} [File=VFile]
 *   The file that the callback receives (default: `VFile`).
 * @callback ProcessCallback
 *   Callback called when the process is done.
 *
 *   Called with either an error or a result.
 * @param {Error | undefined} [error]
 *   Fatal error (optional).
 * @param {File | undefined} [file]
 *   Processed file (optional).
 * @returns {undefined}
 *   Nothing.
 */ /**
 * @template {Node} [Tree=Node]
 *   The tree that the callback receives (default: `Node`).
 * @callback RunCallback
 *   Callback called when transformers are done.
 *
 *   Called with either an error or results.
 * @param {Error | undefined} [error]
 *   Fatal error (optional).
 * @param {Tree | undefined} [tree]
 *   Transformed tree (optional).
 * @param {VFile | undefined} [file]
 *   File (optional).
 * @returns {undefined}
 *   Nothing.
 */ /**
 * @template {Node} [Output=Node]
 *   Node type that the transformer yields (default: `Node`).
 * @callback TransformCallback
 *   Callback passed to transforms.
 *
 *   If the signature of a `transformer` accepts a third argument, the
 *   transformer may perform asynchronous operations, and must call it.
 * @param {Error | undefined} [error]
 *   Fatal error to stop the process (optional).
 * @param {Output | undefined} [tree]
 *   New, changed, tree (optional).
 * @param {VFile | undefined} [file]
 *   New, changed, file (optional).
 * @returns {undefined}
 *   Nothing.
 */ /**
 * @template {Node} [Input=Node]
 *   Node type that the transformer expects (default: `Node`).
 * @template {Node} [Output=Input]
 *   Node type that the transformer yields (default: `Input`).
 * @callback Transformer
 *   Transformers handle syntax trees and files.
 *
 *   They are functions that are called each time a syntax tree and file are
 *   passed through the run phase.
 *   When an error occurs in them (either because it’s thrown, returned,
 *   rejected, or passed to `next`), the process stops.
 *
 *   The run phase is handled by [`trough`][trough], see its documentation for
 *   the exact semantics of these functions.
 *
 *   > **Note**: you should likely ignore `next`: don’t accept it.
 *   > it supports callback-style async work.
 *   > But promises are likely easier to reason about.
 *
 *   [trough]: https://github.com/wooorm/trough#function-fninput-next
 * @param {Input} tree
 *   Tree to handle.
 * @param {VFile} file
 *   File to handle.
 * @param {TransformCallback<Output>} next
 *   Callback.
 * @returns {(
 *   Promise<Output | undefined | void> |
 *   Promise<never> | // For some reason this is needed separately.
 *   Output |
 *   Error |
 *   undefined |
 *   void
 * )}
 *   If you accept `next`, nothing.
 *   Otherwise:
 *
 *   *   `Error` — fatal error to stop the process
 *   *   `Promise<undefined>` or `undefined` — the next transformer keeps using
 *       same tree
 *   *   `Promise<Node>` or `Node` — new, changed, tree
 */ /**
 * @template {Node | undefined} ParseTree
 *   Output of `parse`.
 * @template {Node | undefined} HeadTree
 *   Input for `run`.
 * @template {Node | undefined} TailTree
 *   Output for `run`.
 * @template {Node | undefined} CompileTree
 *   Input of `stringify`.
 * @template {CompileResults | undefined} CompileResult
 *   Output of `stringify`.
 * @template {Node | string | undefined} Input
 *   Input of plugin.
 * @template Output
 *   Output of plugin (optional).
 * @typedef {(
 *   Input extends string
 *     ? Output extends Node | undefined
 *       ? // Parser.
 *         Processor<
 *           Output extends undefined ? ParseTree : Output,
 *           HeadTree,
 *           TailTree,
 *           CompileTree,
 *           CompileResult
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : Output extends CompileResults
 *     ? Input extends Node | undefined
 *       ? // Compiler.
 *         Processor<
 *           ParseTree,
 *           HeadTree,
 *           TailTree,
 *           Input extends undefined ? CompileTree : Input,
 *           Output extends undefined ? CompileResult : Output
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : Input extends Node | undefined
 *     ? Output extends Node | undefined
 *       ? // Transform.
 *         Processor<
 *           ParseTree,
 *           HeadTree extends undefined ? Input : HeadTree,
 *           Output extends undefined ? TailTree : Output,
 *           CompileTree,
 *           CompileResult
 *         >
 *       : // Unknown.
 *         Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 *     : // Unknown.
 *       Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>
 * )} UsePlugin
 *   Create a processor based on the input/output of a {@link Plugin plugin}.
 */ /**
 * @template {CompileResults | undefined} Result
 *   Node type that the transformer yields.
 * @typedef {(
 *   Result extends Value | undefined ?
 *     VFile :
 *     VFile & {result: Result}
 *   )} VFileWithOutput
 *   Type to generate a {@linkcode VFile} corresponding to a compiler result.
 *
 *   If a result that is not acceptable on a `VFile` is used, that will
 *   be stored on the `result` field of {@linkcode VFile}.
 */ __turbopack_context__.s([
    "Processor",
    ()=>Processor,
    "unified",
    ()=>unified
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$bail$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/bail/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/extend/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/is-plain-obj/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$trough$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/trough/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/vfile/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unified$2f$lib$2f$callable$2d$instance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unified/lib/callable-instance.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// To do: next major: drop `Compiler`, `Parser`: prefer lowercase.
// To do: we could start yielding `never` in TS when a parser is missing and
// `parse` is called.
// Currently, we allow directly setting `processor.parser`, which is untyped.
const own = {}.hasOwnProperty;
class Processor extends __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unified$2f$lib$2f$callable$2d$instance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallableInstance"] {
    /**
   * Create a processor.
   */ constructor(){
        // If `Processor()` is called (w/o new), `copy` is called instead.
        super('copy');
        /**
     * Compiler to use (deprecated).
     *
     * @deprecated
     *   Use `compiler` instead.
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */ this.Compiler = undefined;
        /**
     * Parser to use (deprecated).
     *
     * @deprecated
     *   Use `parser` instead.
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */ this.Parser = undefined;
        // Note: the following fields are considered private.
        // However, they are needed for tests, and TSC generates an untyped
        // `private freezeIndex` field for, which trips `type-coverage` up.
        // Instead, we use `@deprecated` to visualize that they shouldn’t be used.
        /**
     * Internal list of configured plugins.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Array<PluginTuple<Array<unknown>>>}
     */ this.attachers = [];
        /**
     * Compiler to use.
     *
     * @type {(
     *   Compiler<
     *     CompileTree extends undefined ? Node : CompileTree,
     *     CompileResult extends undefined ? CompileResults : CompileResult
     *   > |
     *   undefined
     * )}
     */ this.compiler = undefined;
        /**
     * Internal state to track where we are while freezing.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {number}
     */ this.freezeIndex = -1;
        /**
     * Internal state to track whether we’re frozen.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {boolean | undefined}
     */ this.frozen = undefined;
        /**
     * Internal state.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Data}
     */ this.namespace = {};
        /**
     * Parser to use.
     *
     * @type {(
     *   Parser<ParseTree extends undefined ? Node : ParseTree> |
     *   undefined
     * )}
     */ this.parser = undefined;
        /**
     * Internal list of configured transformers.
     *
     * @deprecated
     *   This is a private internal property and should not be used.
     * @type {Pipeline}
     */ this.transformers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$trough$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trough"])();
    }
    /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */ copy() {
        // Cast as the type parameters will be the same after attaching.
        const destination = new Processor();
        let index = -1;
        while(++index < this.attachers.length){
            const attacher = this.attachers[index];
            destination.use(...attacher);
        }
        destination.data((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(true, {}, this.namespace));
        return destination;
    }
    /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */ data(key, value) {
        if (typeof key === 'string') {
            // Set `key`.
            if (arguments.length === 2) {
                assertUnfrozen('data', this.frozen);
                this.namespace[key] = value;
                return this;
            }
            // Get `key`.
            return own.call(this.namespace, key) && this.namespace[key] || undefined;
        }
        // Set space.
        if (key) {
            assertUnfrozen('data', this.frozen);
            this.namespace = key;
            return this;
        }
        // Get space.
        return this.namespace;
    }
    /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */ freeze() {
        if (this.frozen) {
            return this;
        }
        // Cast so that we can type plugins easier.
        // Plugins are supposed to be usable on different processors, not just on
        // this exact processor.
        const self = this;
        while(++this.freezeIndex < this.attachers.length){
            const [attacher, ...options] = this.attachers[this.freezeIndex];
            if (options[0] === false) {
                continue;
            }
            if (options[0] === true) {
                options[0] = undefined;
            }
            const transformer = attacher.call(self, ...options);
            if (typeof transformer === 'function') {
                this.transformers.use(transformer);
            }
        }
        this.frozen = true;
        this.freezeIndex = Number.POSITIVE_INFINITY;
        return this;
    }
    /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */ parse(file) {
        this.freeze();
        const realFile = vfile(file);
        const parser = this.parser || this.Parser;
        assertParser('parse', parser);
        return parser(String(realFile), realFile);
    }
    /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */ process(file, done) {
        const self = this;
        this.freeze();
        assertParser('process', this.parser || this.Parser);
        assertCompiler('process', this.compiler || this.Compiler);
        return done ? executor(undefined, done) : new Promise(executor);
        //TURBOPACK unreachable
        ;
        // Note: `void`s needed for TS.
        /**
     * @param {((file: VFileWithOutput<CompileResult>) => undefined | void) | undefined} resolve
     * @param {(error: Error | undefined) => undefined | void} reject
     * @returns {undefined}
     */ function executor(resolve, reject) {
            const realFile = vfile(file);
            // Assume `ParseTree` (the result of the parser) matches `HeadTree` (the
            // input of the first transform).
            const parseTree = self.parse(realFile);
            self.run(parseTree, realFile, function(error, tree, file) {
                if (error || !tree || !file) {
                    return realDone(error);
                }
                // Assume `TailTree` (the output of the last transform) matches
                // `CompileTree` (the input of the compiler).
                const compileTree = tree;
                const compileResult = self.stringify(compileTree, file);
                if (looksLikeAValue(compileResult)) {
                    file.value = compileResult;
                } else {
                    file.result = compileResult;
                }
                realDone(error, file);
            });
            /**
       * @param {Error | undefined} error
       * @param {VFileWithOutput<CompileResult> | undefined} [file]
       * @returns {undefined}
       */ function realDone(error, file) {
                if (error || !file) {
                    reject(error);
                } else if (resolve) {
                    resolve(file);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(done, '`done` is defined if `resolve` is not');
                    done(undefined, file);
                }
            }
        }
    }
    /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */ processSync(file) {
        /** @type {boolean} */ let complete = false;
        /** @type {VFileWithOutput<CompileResult> | undefined} */ let result;
        this.freeze();
        assertParser('processSync', this.parser || this.Parser);
        assertCompiler('processSync', this.compiler || this.Compiler);
        this.process(file, realDone);
        assertDone('processSync', 'process', complete);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(result, 'we either bailed on an error or have a tree');
        return result;
        //TURBOPACK unreachable
        ;
        /**
     * @type {ProcessCallback<VFileWithOutput<CompileResult>>}
     */ function realDone(error, file) {
            complete = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$bail$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bail"])(error);
            result = file;
        }
    }
    /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */ run(tree, file, done) {
        assertNode(tree);
        this.freeze();
        const transformers = this.transformers;
        if (!done && typeof file === 'function') {
            done = file;
            file = undefined;
        }
        return done ? executor(undefined, done) : new Promise(executor);
        //TURBOPACK unreachable
        ;
        // Note: `void`s needed for TS.
        /**
     * @param {(
     *   ((tree: TailTree extends undefined ? Node : TailTree) => undefined | void) |
     *   undefined
     * )} resolve
     * @param {(error: Error) => undefined | void} reject
     * @returns {undefined}
     */ function executor(resolve, reject) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(typeof file !== 'function', '`file` can’t be a `done` anymore, we checked');
            const realFile = vfile(file);
            transformers.run(tree, realFile, realDone);
            /**
       * @param {Error | undefined} error
       * @param {Node} outputTree
       * @param {VFile} file
       * @returns {undefined}
       */ function realDone(error, outputTree, file) {
                const resultingTree = outputTree || tree;
                if (error) {
                    reject(error);
                } else if (resolve) {
                    resolve(resultingTree);
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(done, '`done` is defined if `resolve` is not');
                    done(undefined, resultingTree, file);
                }
            }
        }
    }
    /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */ runSync(tree, file) {
        /** @type {boolean} */ let complete = false;
        /** @type {(TailTree extends undefined ? Node : TailTree) | undefined} */ let result;
        this.run(tree, file, realDone);
        assertDone('runSync', 'run', complete);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ok"])(result, 'we either bailed on an error or have a tree');
        return result;
        //TURBOPACK unreachable
        ;
        /**
     * @type {RunCallback<TailTree extends undefined ? Node : TailTree>}
     */ function realDone(error, tree) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$bail$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bail"])(error);
            result = tree;
            complete = true;
        }
    }
    /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */ stringify(tree, file) {
        this.freeze();
        const realFile = vfile(file);
        const compiler = this.compiler || this.Compiler;
        assertCompiler('stringify', compiler);
        assertNode(tree);
        return compiler(tree, realFile);
    }
    /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */ use(value, ...parameters) {
        const attachers = this.attachers;
        const namespace = this.namespace;
        assertUnfrozen('use', this.frozen);
        if (value === null || value === undefined) {
        // Empty.
        } else if (typeof value === 'function') {
            addPlugin(value, parameters);
        } else if (typeof value === 'object') {
            if (Array.isArray(value)) {
                addList(value);
            } else {
                addPreset(value);
            }
        } else {
            throw new TypeError('Expected usable value, not `' + value + '`');
        }
        return this;
        //TURBOPACK unreachable
        ;
        /**
     * @param {Pluggable} value
     * @returns {undefined}
     */ function add(value) {
            if (typeof value === 'function') {
                addPlugin(value, []);
            } else if (typeof value === 'object') {
                if (Array.isArray(value)) {
                    const [plugin, ...parameters] = value;
                    addPlugin(plugin, parameters);
                } else {
                    addPreset(value);
                }
            } else {
                throw new TypeError('Expected usable value, not `' + value + '`');
            }
        }
        /**
     * @param {Preset} result
     * @returns {undefined}
     */ function addPreset(result) {
            if (!('plugins' in result) && !('settings' in result)) {
                throw new Error('Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither');
            }
            addList(result.plugins);
            if (result.settings) {
                namespace.settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(true, namespace.settings, result.settings);
            }
        }
        /**
     * @param {PluggableList | null | undefined} plugins
     * @returns {undefined}
     */ function addList(plugins) {
            let index = -1;
            if (plugins === null || plugins === undefined) {
            // Empty.
            } else if (Array.isArray(plugins)) {
                while(++index < plugins.length){
                    const thing = plugins[index];
                    add(thing);
                }
            } else {
                throw new TypeError('Expected a list of plugins, not `' + plugins + '`');
            }
        }
        /**
     * @param {Plugin} plugin
     * @param {Array<unknown>} parameters
     * @returns {undefined}
     */ function addPlugin(plugin, parameters) {
            let index = -1;
            let entryIndex = -1;
            while(++index < attachers.length){
                if (attachers[index][0] === plugin) {
                    entryIndex = index;
                    break;
                }
            }
            if (entryIndex === -1) {
                attachers.push([
                    plugin,
                    ...parameters
                ]);
            } else if (parameters.length > 0) {
                let [primary, ...rest] = parameters;
                const currentPrimary = attachers[entryIndex][1];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(currentPrimary) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(primary)) {
                    primary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$extend$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(true, currentPrimary, primary);
                }
                attachers[entryIndex] = [
                    plugin,
                    primary,
                    ...rest
                ];
            }
        }
    }
}
const unified = new Processor().freeze();
/**
 * Assert a parser is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Parser}
 */ function assertParser(name, value) {
    if (typeof value !== 'function') {
        throw new TypeError('Cannot `' + name + '` without `parser`');
    }
}
/**
 * Assert a compiler is available.
 *
 * @param {string} name
 * @param {unknown} value
 * @returns {asserts value is Compiler}
 */ function assertCompiler(name, value) {
    if (typeof value !== 'function') {
        throw new TypeError('Cannot `' + name + '` without `compiler`');
    }
}
/**
 * Assert the processor is not frozen.
 *
 * @param {string} name
 * @param {unknown} frozen
 * @returns {asserts frozen is false}
 */ function assertUnfrozen(name, frozen) {
    if (frozen) {
        throw new Error('Cannot call `' + name + '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.');
    }
}
/**
 * Assert `node` is a unist node.
 *
 * @param {unknown} node
 * @returns {asserts node is Node}
 */ function assertNode(node) {
    // `isPlainObj` unfortunately uses `any` instead of `unknown`.
    // type-coverage:ignore-next-line
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$is$2d$plain$2d$obj$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node) || typeof node.type !== 'string') {
        throw new TypeError('Expected node, got `' + node + '`');
    // Fine.
    }
}
/**
 * Assert that `complete` is `true`.
 *
 * @param {string} name
 * @param {string} asyncName
 * @param {unknown} complete
 * @returns {asserts complete is true}
 */ function assertDone(name, asyncName, complete) {
    if (!complete) {
        throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
    }
}
/**
 * @param {Compatible | undefined} [value]
 * @returns {VFile}
 */ function vfile(value) {
    return looksLikeAVFile(value) ? value : new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFile"](value);
}
/**
 * @param {Compatible | undefined} [value]
 * @returns {value is VFile}
 */ function looksLikeAVFile(value) {
    return Boolean(value && typeof value === 'object' && 'message' in value && 'messages' in value);
}
/**
 * @param {unknown} [value]
 * @returns {value is Value}
 */ function looksLikeAValue(value) {
    return typeof value === 'string' || isUint8Array(value);
}
/**
 * Assert `value` is an `Uint8Array`.
 *
 * @param {unknown} value
 *   thing.
 * @returns {value is Uint8Array}
 *   Whether `value` is an `Uint8Array`.
 */ function isUint8Array(value) {
    return Boolean(value && typeof value === 'object' && 'byteLength' in value && 'byteOffset' in value);
}
}),
"[project]/PREFECT-10/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @import {Element, Nodes, Parents, Root} from 'hast'
 * @import {Root as MdastRoot} from 'mdast'
 * @import {ComponentType, JSX, ReactElement, ReactNode} from 'react'
 * @import {Options as RemarkRehypeOptions} from 'remark-rehype'
 * @import {BuildVisitor} from 'unist-util-visit'
 * @import {PluggableList, Processor} from 'unified'
 */ /**
 * @callback AllowElement
 *   Filter elements.
 * @param {Readonly<Element>} element
 *   Element to check.
 * @param {number} index
 *   Index of `element` in `parent`.
 * @param {Readonly<Parents> | undefined} parent
 *   Parent of `element`.
 * @returns {boolean | null | undefined}
 *   Whether to allow `element` (default: `false`).
 */ /**
 * @typedef ExtraProps
 *   Extra fields we pass.
 * @property {Element | undefined} [node]
 *   passed when `passNode` is on.
 */ /**
 * @typedef {{
 *   [Key in keyof JSX.IntrinsicElements]?: ComponentType<JSX.IntrinsicElements[Key] & ExtraProps> | keyof JSX.IntrinsicElements
 * }} Components
 *   Map tag names to components.
 */ /**
 * @typedef Deprecation
 *   Deprecation.
 * @property {string} from
 *   Old field.
 * @property {string} id
 *   ID in readme.
 * @property {keyof Options} [to]
 *   New field.
 */ /**
 * @typedef Options
 *   Configuration.
 * @property {AllowElement | null | undefined} [allowElement]
 *   Filter elements (optional);
 *   `allowedElements` / `disallowedElements` is used first.
 * @property {ReadonlyArray<string> | null | undefined} [allowedElements]
 *   Tag names to allow (default: all tag names);
 *   cannot combine w/ `disallowedElements`.
 * @property {string | null | undefined} [children]
 *   Markdown.
 * @property {Components | null | undefined} [components]
 *   Map tag names to components.
 * @property {ReadonlyArray<string> | null | undefined} [disallowedElements]
 *   Tag names to disallow (default: `[]`);
 *   cannot combine w/ `allowedElements`.
 * @property {PluggableList | null | undefined} [rehypePlugins]
 *   List of rehype plugins to use.
 * @property {PluggableList | null | undefined} [remarkPlugins]
 *   List of remark plugins to use.
 * @property {Readonly<RemarkRehypeOptions> | null | undefined} [remarkRehypeOptions]
 *   Options to pass through to `remark-rehype`.
 * @property {boolean | null | undefined} [skipHtml=false]
 *   Ignore HTML in markdown completely (default: `false`).
 * @property {boolean | null | undefined} [unwrapDisallowed=false]
 *   Extract (unwrap) what’s in disallowed elements (default: `false`);
 *   normally when say `strong` is not allowed, it and it’s children are dropped,
 *   with `unwrapDisallowed` the element itself is replaced by its children.
 * @property {UrlTransform | null | undefined} [urlTransform]
 *   Change URLs (default: `defaultUrlTransform`)
 */ /**
 * @typedef HooksOptionsOnly
 *   Configuration specifically for {@linkcode MarkdownHooks}.
 * @property {ReactNode | null | undefined} [fallback]
 *   Content to render while the processor processing the markdown (optional).
 */ /**
 * @typedef {Options & HooksOptionsOnly} HooksOptions
 *   Configuration for {@linkcode MarkdownHooks};
 *   extends the regular {@linkcode Options} with a `fallback` prop.
 */ /**
 * @callback UrlTransform
 *   Transform all URLs.
 * @param {string} url
 *   URL.
 * @param {string} key
 *   Property name (example: `'href'`).
 * @param {Readonly<Element>} node
 *   Node.
 * @returns {string | null | undefined}
 *   Transformed URL (optional).
 */ __turbopack_context__.s([
    "Markdown",
    ()=>Markdown,
    "MarkdownAsync",
    ()=>MarkdownAsync,
    "MarkdownHooks",
    ()=>MarkdownHooks,
    "defaultUrlTransform",
    ()=>defaultUrlTransform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/devlop/lib/development.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/hast-util-to-jsx-runtime/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/html-url-attributes/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/remark-parse/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/remark-rehype/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unified/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/unist-util-visit/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/vfile/lib/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const changelog = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md';
/** @type {PluggableList} */ const emptyPlugins = [];
/** @type {Readonly<RemarkRehypeOptions>} */ const emptyRemarkRehypeOptions = {
    allowDangerousHtml: true
};
const safeProtocol = /^(https?|ircs?|mailto|xmpp)$/i;
// Mutable because we `delete` any time it’s used and a message is sent.
/** @type {ReadonlyArray<Readonly<Deprecation>>} */ const deprecations = [
    {
        from: 'astPlugins',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'allowDangerousHtml',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'allowNode',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'allowElement'
    },
    {
        from: 'allowedTypes',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'allowedElements'
    },
    {
        from: 'className',
        id: 'remove-classname'
    },
    {
        from: 'disallowedTypes',
        id: 'replace-allownode-allowedtypes-and-disallowedtypes',
        to: 'disallowedElements'
    },
    {
        from: 'escapeHtml',
        id: 'remove-buggy-html-in-markdown-parser'
    },
    {
        from: 'includeElementIndex',
        id: '#remove-includeelementindex'
    },
    {
        from: 'includeNodeIndex',
        id: 'change-includenodeindex-to-includeelementindex'
    },
    {
        from: 'linkTarget',
        id: 'remove-linktarget'
    },
    {
        from: 'plugins',
        id: 'change-plugins-to-remarkplugins',
        to: 'remarkPlugins'
    },
    {
        from: 'rawSourcePos',
        id: '#remove-rawsourcepos'
    },
    {
        from: 'renderers',
        id: 'change-renderers-to-components',
        to: 'components'
    },
    {
        from: 'source',
        id: 'change-source-to-children',
        to: 'children'
    },
    {
        from: 'sourcePos',
        id: '#remove-sourcepos'
    },
    {
        from: 'transformImageUri',
        id: '#add-urltransform',
        to: 'urlTransform'
    },
    {
        from: 'transformLinkUri',
        id: '#add-urltransform',
        to: 'urlTransform'
    }
];
function Markdown(options) {
    const processor = createProcessor(options);
    const file = createFile(options);
    return post(processor.runSync(processor.parse(file), file), options);
}
async function MarkdownAsync(options) {
    const processor = createProcessor(options);
    const file = createFile(options);
    const tree = await processor.run(processor.parse(file), file);
    return post(tree, options);
}
function MarkdownHooks(options) {
    const processor = createProcessor(options);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [tree, setTree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        let cancelled = false;
        const file = createFile(options);
        processor.run(processor.parse(file), file, function(error, tree) {
            if (!cancelled) {
                setError(error);
                setTree(tree);
            }
        });
        /**
       * @returns {undefined}
       *   Nothing.
       */ return function() {
            cancelled = true;
        };
    }, [
        options.children,
        options.rehypePlugins,
        options.remarkPlugins,
        options.remarkRehypeOptions
    ]);
    if (error) throw error;
    return tree ? post(tree, options) : options.fallback;
}
/**
 * Set up the `unified` processor.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {Processor<MdastRoot, MdastRoot, Root, undefined, undefined>}
 *   Result.
 */ function createProcessor(options) {
    const rehypePlugins = options.rehypePlugins || emptyPlugins;
    const remarkPlugins = options.remarkPlugins || emptyPlugins;
    const remarkRehypeOptions = options.remarkRehypeOptions ? {
        ...options.remarkRehypeOptions,
        ...emptyRemarkRehypeOptions
    } : emptyRemarkRehypeOptions;
    const processor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unified$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unified"])().use(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$remark$2d$parse$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]).use(remarkPlugins).use(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$remark$2d$rehype$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], remarkRehypeOptions).use(rehypePlugins);
    return processor;
}
/**
 * Set up the virtual file.
 *
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {VFile}
 *   Result.
 */ function createFile(options) {
    const children = options.children || '';
    const file = new __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$vfile$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VFile"]();
    if (typeof children === 'string') {
        file.value = children;
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected value `' + children + '` for `children` prop, expected `string`');
    }
    return file;
}
/**
 * Process the result from unified some more.
 *
 * @param {Nodes} tree
 *   Tree.
 * @param {Readonly<Options>} options
 *   Props.
 * @returns {ReactElement}
 *   React element.
 */ function post(tree, options) {
    const allowedElements = options.allowedElements;
    const allowElement = options.allowElement;
    const components = options.components;
    const disallowedElements = options.disallowedElements;
    const skipHtml = options.skipHtml;
    const unwrapDisallowed = options.unwrapDisallowed;
    const urlTransform = options.urlTransform || defaultUrlTransform;
    for (const deprecation of deprecations){
        if (Object.hasOwn(options, deprecation.from)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected `' + deprecation.from + '` prop, ' + (deprecation.to ? 'use `' + deprecation.to + '` instead' : 'remove it') + ' (see <' + changelog + '#' + deprecation.id + '> for more info)');
        }
    }
    if (allowedElements && disallowedElements) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$devlop$2f$lib$2f$development$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unreachable"])('Unexpected combined `allowedElements` and `disallowedElements`, expected one or the other');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, transform);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$hast$2d$util$2d$to$2d$jsx$2d$runtime$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJsxRuntime"])(tree, {
        Fragment: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"],
        components,
        ignoreInvalidStyle: true,
        jsx: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"],
        jsxs: __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"],
        passKeys: true,
        passNode: true
    });
    //TURBOPACK unreachable
    ;
    /** @type {BuildVisitor<Root>} */ function transform(node, index, parent) {
        if (node.type === 'raw' && parent && typeof index === 'number') {
            if (skipHtml) {
                parent.children.splice(index, 1);
            } else {
                parent.children[index] = {
                    type: 'text',
                    value: node.value
                };
            }
            return index;
        }
        if (node.type === 'element') {
            /** @type {string} */ let key;
            for(key in __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlAttributes"]){
                if (Object.hasOwn(__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlAttributes"], key) && Object.hasOwn(node.properties, key)) {
                    const value = node.properties[key];
                    const test = __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$html$2d$url$2d$attributes$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlAttributes"][key];
                    if (test === null || test.includes(node.tagName)) {
                        node.properties[key] = urlTransform(String(value || ''), key, node);
                    }
                }
            }
        }
        if (node.type === 'element') {
            let remove = allowedElements ? !allowedElements.includes(node.tagName) : disallowedElements ? disallowedElements.includes(node.tagName) : false;
            if (!remove && allowElement && typeof index === 'number') {
                remove = !allowElement(node, index, parent);
            }
            if (remove && parent && typeof index === 'number') {
                if (unwrapDisallowed && node.children) {
                    parent.children.splice(index, 1, ...node.children);
                } else {
                    parent.children.splice(index, 1);
                }
                return index;
            }
        }
    }
}
function defaultUrlTransform(value) {
    // Same as:
    // <https://github.com/micromark/micromark/blob/929275e/packages/micromark-util-sanitize-uri/dev/index.js#L34>
    // But without the `encode` part.
    const colon = value.indexOf(':');
    const questionMark = value.indexOf('?');
    const numberSign = value.indexOf('#');
    const slash = value.indexOf('/');
    if (// If there is no protocol, it’s relative.
    colon === -1 || slash !== -1 && colon > slash || questionMark !== -1 && colon > questionMark || numberSign !== -1 && colon > numberSign || // It is a protocol, it should be allowed.
    safeProtocol.test(value.slice(0, colon))) {
        return value;
    }
    return '';
}
}),
"[project]/PREFECT-10/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Markdown"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$PREFECT$2d$10$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/PREFECT-10/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript)");
}),
"[project]/PREFECT-10/node_modules/prismjs/prism.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* **********************************************
     Begin prism-core.js
********************************************** */ /// <reference lib="WebWorker"/>
var _self = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" // if in browser
 : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
 : {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */ var Prism = function(_self) {
    // Private helper vars
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;
    // The grammar object for plaintext
    var plainTextGrammar = {};
    var _ = {
        /**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */ manual: _self.Prism && _self.Prism.manual,
        /**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */ disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        /**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */ util: {
            encode: function encode(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, encode(tokens.content), tokens.alias);
                } else if (Array.isArray(tokens)) {
                    return tokens.map(encode);
                } else {
                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                }
            },
            /**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */ type: function(o) {
                return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */ objId: function(obj) {
                if (!obj['__id']) {
                    Object.defineProperty(obj, '__id', {
                        value: ++uniqueId
                    });
                }
                return obj['__id'];
            },
            /**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */ clone: function deepClone(o, visited) {
                visited = visited || {};
                var clone;
                var id;
                switch(_.util.type(o)){
                    case 'Object':
                        id = _.util.objId(o);
                        if (visited[id]) {
                            return visited[id];
                        }
                        clone = {};
                        visited[id] = clone;
                        for(var key in o){
                            if (o.hasOwnProperty(key)) {
                                clone[key] = deepClone(o[key], visited);
                            }
                        }
                        return clone;
                    case 'Array':
                        id = _.util.objId(o);
                        if (visited[id]) {
                            return visited[id];
                        }
                        clone = [];
                        visited[id] = clone;
                        o.forEach(function(v, i) {
                            clone[i] = deepClone(v, visited);
                        });
                        return clone;
                    default:
                        return o;
                }
            },
            /**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */ getLanguage: function(element) {
                while(element){
                    var m = lang.exec(element.className);
                    if (m) {
                        return m[1].toLowerCase();
                    }
                    element = element.parentElement;
                }
                return 'none';
            },
            /**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */ setLanguage: function(element, language) {
                // remove all `language-xxxx` classes
                // (this might leave behind a leading space)
                element.className = element.className.replace(RegExp(lang, 'gi'), '');
                // add the new `language-xxxx` class
                // (using `classList` will automatically clean up spaces for us)
                element.classList.add('language-' + language);
            },
            /**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */ currentScript: function() {
                if (typeof document === 'undefined') {
                    return null;
                }
                if (document.currentScript && document.currentScript.tagName === 'SCRIPT' && 1 < 2 /* hack to trip TS' flow analysis */ ) {
                    return document.currentScript;
                }
                // IE11 workaround
                // we'll get the src of the current script by parsing IE11's error stack trace
                // this will not work for inline scripts
                try {
                    throw new Error();
                } catch (err) {
                    // Get file src url from stack. Specifically works with the format of stack traces in IE.
                    // A stack will look like this:
                    //
                    // Error
                    //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                    //    at Global code (http://localhost/components/prism-core.js:606:1)
                    var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                    if (src) {
                        var scripts = document.getElementsByTagName('script');
                        for(var i in scripts){
                            if (scripts[i].src == src) {
                                return scripts[i];
                            }
                        }
                    }
                    return null;
                }
            },
            /**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */ isActive: function(element, className, defaultActivation) {
                var no = 'no-' + className;
                while(element){
                    var classList = element.classList;
                    if (classList.contains(className)) {
                        return true;
                    }
                    if (classList.contains(no)) {
                        return false;
                    }
                    element = element.parentElement;
                }
                return !!defaultActivation;
            }
        },
        /**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */ languages: {
            /**
			 * The grammar for plain, unformatted text.
			 */ plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */ extend: function(id, redef) {
                var lang = _.util.clone(_.languages[id]);
                for(var key in redef){
                    lang[key] = redef[key];
                }
                return lang;
            },
            /**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */ insertBefore: function(inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];
                /** @type {Grammar} */ var ret = {};
                for(var token in grammar){
                    if (grammar.hasOwnProperty(token)) {
                        if (token == before) {
                            for(var newToken in insert){
                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken];
                                }
                            }
                        }
                        // Do not insert token which also occur in insert. See #1525
                        if (!insert.hasOwnProperty(token)) {
                            ret[token] = grammar[token];
                        }
                    }
                }
                var old = root[inside];
                root[inside] = ret;
                // Update references in other language definitions
                _.languages.DFS(_.languages, function(key, value) {
                    if (value === old && key != inside) {
                        this[key] = ret;
                    }
                });
                return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};
                var objId = _.util.objId;
                for(var i in o){
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);
                        var property = o[i];
                        var propertyType = _.util.type(property);
                        if (propertyType === 'Object' && !visited[objId(property)]) {
                            visited[objId(property)] = true;
                            DFS(property, callback, null, visited);
                        } else if (propertyType === 'Array' && !visited[objId(property)]) {
                            visited[objId(property)] = true;
                            DFS(property, callback, i, visited);
                        }
                    }
                }
            }
        },
        plugins: {},
        /**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */ highlightAll: function(async, callback) {
            _.highlightAllUnder(document, async, callback);
        },
        /**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */ highlightAllUnder: function(container, async, callback) {
            var env = {
                callback: callback,
                container: container,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run('before-highlightall', env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run('before-all-elements-highlight', env);
            for(var i = 0, element; element = env.elements[i++];){
                _.highlightElement(element, async === true, env.callback);
            }
        },
        /**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */ highlightElement: function(element, async, callback) {
            // Find language
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];
            // Set language on the element, if not present
            _.util.setLanguage(element, language);
            // Set language on the parent, for styling
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre') {
                _.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };
            function insertHighlightedCode(highlightedCode) {
                env.highlightedCode = highlightedCode;
                _.hooks.run('before-insert', env);
                env.element.innerHTML = env.highlightedCode;
                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
            }
            _.hooks.run('before-sanity-check', env);
            // plugins may change/add the parent/element
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
                parent.setAttribute('tabindex', '0');
            }
            if (!env.code) {
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
                return;
            }
            _.hooks.run('before-highlight', env);
            if (!env.grammar) {
                insertHighlightedCode(_.util.encode(env.code));
                return;
            }
            if (async && _self.Worker) {
                var worker = new Worker(_.filename);
                worker.onmessage = function(evt) {
                    insertHighlightedCode(evt.data);
                };
                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: true
                }));
            } else {
                insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
        },
        /**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */ highlight: function(text, grammar, language) {
            var env = {
                code: text,
                grammar: grammar,
                language: language
            };
            _.hooks.run('before-tokenize', env);
            if (!env.grammar) {
                throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run('after-tokenize', env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */ tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
                for(var token in rest){
                    grammar[token] = rest[token];
                }
                delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
        },
        /**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */ hooks: {
            all: {},
            /**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */ add: function(name, callback) {
                var hooks = _.hooks.all;
                hooks[name] = hooks[name] || [];
                hooks[name].push(callback);
            },
            /**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */ run: function(name, env) {
                var callbacks = _.hooks.all[name];
                if (!callbacks || !callbacks.length) {
                    return;
                }
                for(var i = 0, callback; callback = callbacks[i++];){
                    callback(env);
                }
            }
        },
        Token: Token
    };
    _self.Prism = _;
    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token
    /**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */ function Token(type, content, alias, matchedStr) {
        /**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */ this.type = type;
        /**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */ this.content = content;
        /**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */ this.alias = alias;
        // Copy of the full string this token was created from
        this.length = (matchedStr || '').length | 0;
    }
    /**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */ /**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */ Token.stringify = function stringify(o, language) {
        if (typeof o == 'string') {
            return o;
        }
        if (Array.isArray(o)) {
            var s = '';
            o.forEach(function(e) {
                s += stringify(e, language);
            });
            return s;
        }
        var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: 'span',
            classes: [
                'token',
                o.type
            ],
            attributes: {},
            language: language
        };
        var aliases = o.alias;
        if (aliases) {
            if (Array.isArray(aliases)) {
                Array.prototype.push.apply(env.classes, aliases);
            } else {
                env.classes.push(aliases);
            }
        }
        _.hooks.run('wrap', env);
        var attributes = '';
        for(var name in env.attributes){
            attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }
        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };
    /**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */ function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
            // change the match to remove the text matched by the Prism lookbehind group
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
        }
        return match;
    }
    /**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */ function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for(var token in grammar){
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [
                patterns
            ];
            for(var j = 0; j < patterns.length; ++j){
                if (rematch && rematch.cause == token + ',' + j) {
                    return;
                }
                var patternObj = patterns[j];
                var inside = patternObj.inside;
                var lookbehind = !!patternObj.lookbehind;
                var greedy = !!patternObj.greedy;
                var alias = patternObj.alias;
                if (greedy && !patternObj.pattern.global) {
                    // Without the global flag, lastIndex won't work
                    var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                    patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
                }
                /** @type {RegExp} */ var pattern = patternObj.pattern || patternObj;
                for(var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next){
                    if (rematch && pos >= rematch.reach) {
                        break;
                    }
                    var str = currentNode.value;
                    if (tokenList.length > text.length) {
                        // Something went terribly wrong, ABORT, ABORT!
                        return;
                    }
                    if (str instanceof Token) {
                        continue;
                    }
                    var removeCount = 1; // this is the to parameter of removeBetween
                    var match;
                    if (greedy) {
                        match = matchPattern(pattern, pos, text, lookbehind);
                        if (!match || match.index >= text.length) {
                            break;
                        }
                        var from = match.index;
                        var to = match.index + match[0].length;
                        var p = pos;
                        // find the node that contains the match
                        p += currentNode.value.length;
                        while(from >= p){
                            currentNode = currentNode.next;
                            p += currentNode.value.length;
                        }
                        // adjust pos (and p)
                        p -= currentNode.value.length;
                        pos = p;
                        // the current node is a Token, then the match starts inside another Token, which is invalid
                        if (currentNode.value instanceof Token) {
                            continue;
                        }
                        // find the last node which is affected by this match
                        for(var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next){
                            removeCount++;
                            p += k.value.length;
                        }
                        removeCount--;
                        // replace with the new match
                        str = text.slice(pos, p);
                        match.index -= pos;
                    } else {
                        match = matchPattern(pattern, 0, str, lookbehind);
                        if (!match) {
                            continue;
                        }
                    }
                    // eslint-disable-next-line no-redeclare
                    var from = match.index;
                    var matchStr = match[0];
                    var before = str.slice(0, from);
                    var after = str.slice(from + matchStr.length);
                    var reach = pos + str.length;
                    if (rematch && reach > rematch.reach) {
                        rematch.reach = reach;
                    }
                    var removeFrom = currentNode.prev;
                    if (before) {
                        removeFrom = addAfter(tokenList, removeFrom, before);
                        pos += before.length;
                    }
                    removeRange(tokenList, removeFrom, removeCount);
                    var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                    currentNode = addAfter(tokenList, removeFrom, wrapped);
                    if (after) {
                        addAfter(tokenList, currentNode, after);
                    }
                    if (removeCount > 1) {
                        // at least one Token object was removed, so we have to do some rematching
                        // this can only happen if the current pattern is greedy
                        /** @type {RematchOptions} */ var nestedRematch = {
                            cause: token + ',' + j,
                            reach: reach
                        };
                        matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                        // the reach might have been extended because of the rematching
                        if (rematch && nestedRematch.reach > rematch.reach) {
                            rematch.reach = nestedRematch.reach;
                        }
                    }
                }
            }
        }
    }
    /**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */ /**
	 * @template T
	 * @private
	 */ function LinkedList() {
        /** @type {LinkedListNode<T>} */ var head = {
            value: null,
            prev: null,
            next: null
        };
        /** @type {LinkedListNode<T>} */ var tail = {
            value: null,
            prev: head,
            next: null
        };
        head.next = tail;
        /** @type {LinkedListNode<T>} */ this.head = head;
        /** @type {LinkedListNode<T>} */ this.tail = tail;
        this.length = 0;
    }
    /**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */ function addAfter(list, node, value) {
        // assumes that node != list.tail && values.length >= 0
        var next = node.next;
        var newNode = {
            value: value,
            prev: node,
            next: next
        };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
    }
    /**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */ function removeRange(list, node, count) {
        var next = node.next;
        for(var i = 0; i < count && next !== list.tail; i++){
            next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
    }
    /**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */ function toArray(list) {
        var array = [];
        var node = list.head.next;
        while(node !== list.tail){
            array.push(node.value);
            node = node.next;
        }
        return array;
    }
    if (!_self.document) {
        if (!_self.addEventListener) {
            // in Node.js
            return _;
        }
        if (!_.disableWorkerMessageHandler) {
            // In worker
            _self.addEventListener('message', function(evt) {
                var message = JSON.parse(evt.data);
                var lang = message.language;
                var code = message.code;
                var immediateClose = message.immediateClose;
                _self.postMessage(_.highlight(code, _.languages[lang], lang));
                if (immediateClose) {
                    _self.close();
                }
            }, false);
        }
        return _;
    }
    // Get current script and highlight
    var script = _.util.currentScript();
    if (script) {
        _.filename = script.src;
        if (script.hasAttribute('data-manual')) {
            _.manual = true;
        }
    }
    function highlightAutomaticallyCallback() {
        if (!_.manual) {
            _.highlightAll();
        }
    }
    if (!_.manual) {
        // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102
        var readyState = document.readyState;
        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
            document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        } else {
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
                window.setTimeout(highlightAutomaticallyCallback, 16);
            }
        }
    }
    return _;
}(_self);
if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
    module.exports = Prism;
}
// hack for components to work correctly in node.js
if ("TURBOPACK compile-time truthy", 1) {
    /*TURBOPACK member replacement*/ __turbopack_context__.g.Prism = Prism;
}
// some additional documentation/types
/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */ /**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */ /**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */ /**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */ /* **********************************************
     Begin prism-markup.js
********************************************** */ Prism.languages.markup = {
    'comment': {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
    },
    'prolog': {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
    },
    'doctype': {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
            'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: true,
                greedy: true,
                inside: null // see below
            },
            'string': {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
            },
            'punctuation': /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            'name': /[^\s<>'"]+/
        }
    },
    'cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
    },
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'special-attr': [],
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    'punctuation': [
                        {
                            pattern: /^=/,
                            alias: 'attr-equals'
                        },
                        {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: true
                        }
                    ]
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }
        }
    },
    'entity': [
        {
            pattern: /&[\da-z]{1,8};/i,
            alias: 'named-entity'
        },
        /&#x?[\da-f]{1,8};/i
    ]
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;
// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */ value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
            'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: includedCdataInside
            }
        };
        inside['language-' + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[lang]
        };
        var def = {};
        def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                return tagName;
            }), 'i'),
            lookbehind: true,
            greedy: true,
            inside: inside
        };
        Prism.languages.insertBefore('markup', 'cdata', def);
    }
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    /**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */ value: function(attrName, lang) {
        Prism.languages.markup.tag.inside['special-attr'].push({
            pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
            lookbehind: true,
            inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                        'value': {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: true,
                            alias: [
                                lang,
                                'language-' + lang
                            ],
                            inside: Prism.languages[lang]
                        },
                        'punctuation': [
                            {
                                pattern: /^=/,
                                alias: 'attr-equals'
                            },
                            /"|'/
                        ]
                    }
                }
            }
        });
    }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
/* **********************************************
     Begin prism-css.js
********************************************** */ (function(Prism) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
            pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
            inside: {
                'rule': /^@[\w-]+/,
                'selector-function-argument': {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: true,
                    alias: 'selector'
                },
                'keyword': {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: true
                }
            }
        },
        'url': {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
            greedy: true,
            inside: {
                'function': /^url/i,
                'punctuation': /^\(|\)$/,
                'string': {
                    pattern: RegExp('^' + string.source + '$'),
                    alias: 'url'
                }
            }
        },
        'selector': {
            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
            lookbehind: true
        },
        'string': {
            pattern: string,
            greedy: true
        },
        'property': {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
        },
        'important': /!important\b/i,
        'function': {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
        },
        'punctuation': /[(){};:,]/
    };
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
    var markup = Prism.languages.markup;
    if (markup) {
        markup.tag.addInlined('style', 'css');
        markup.tag.addAttribute('style', 'css');
    }
})(Prism);
/* **********************************************
     Begin prism-clike.js
********************************************** */ Prism.languages.clike = {
    'comment': [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
        }
    ],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'class-name': {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
            'punctuation': /[.\\]/
        }
    },
    'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    'boolean': /\b(?:false|true)\b/,
    'function': /\b\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    'punctuation': /[{}[\];(),.:]/
};
/* **********************************************
     Begin prism-javascript.js
********************************************** */ Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
        Prism.languages.clike['class-name'],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
        }
    ],
    'keyword': [
        {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
        },
        {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
        }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'number': {
        pattern: RegExp(/(^|[^\w$])/.source + '(?:' + (// constant
        /NaN|Infinity/.source + '|' + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
        /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
        lookbehind: true
    },
    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: RegExp(// lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
        lookbehind: true,
        greedy: true,
        inside: {
            'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: true,
                alias: 'language-regex',
                inside: Prism.languages.regex
            },
            'regex-delimiter': /^\/|\/$/,
            'regex-flags': /^[a-z]+$/
        }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function'
    },
    'parameter': [
        {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism.languages.javascript
        }
    ],
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
    'hashbang': {
        pattern: /^#!.*/,
        greedy: true,
        alias: 'comment'
    },
    'template-string': {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
            'template-punctuation': {
                pattern: /^`|`$/,
                alias: 'string'
            },
            'interpolation': {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: true,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\$\{|\}$/,
                        alias: 'punctuation'
                    },
                    rest: Prism.languages.javascript
                }
            },
            'string': /[\s\S]+/
        }
    },
    'string-property': {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: 'property'
    }
});
Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: 'property'
    }
});
if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript');
    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}
Prism.languages.js = Prism.languages.javascript;
/* **********************************************
     Begin prism-file-highlight.js
********************************************** */ (function() {
    if (typeof Prism === 'undefined' || typeof document === 'undefined') {
        return;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var LOADING_MESSAGE = 'Loading…';
    var FAILURE_MESSAGE = function(status, message) {
        return '✖ Error ' + status + ' while fetching file: ' + message;
    };
    var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
    var EXTENSIONS = {
        'js': 'javascript',
        'py': 'python',
        'rb': 'ruby',
        'ps1': 'powershell',
        'psm1': 'powershell',
        'sh': 'bash',
        'bat': 'batch',
        'h': 'c',
        'tex': 'latex'
    };
    var STATUS_ATTR = 'data-src-status';
    var STATUS_LOADING = 'loading';
    var STATUS_LOADED = 'loaded';
    var STATUS_FAILED = 'failed';
    var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    /**
	 * Loads the given file.
	 *
	 * @param {string} src The URL or path of the source file to load.
	 * @param {(result: string) => void} success
	 * @param {(reason: string) => void} error
	 */ function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status < 400 && xhr.responseText) {
                    success(xhr.responseText);
                } else {
                    if (xhr.status >= 400) {
                        error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                    } else {
                        error(FAILURE_EMPTY_MESSAGE);
                    }
                }
            }
        };
        xhr.send(null);
    }
    /**
	 * Parses the given range.
	 *
	 * This returns a range with inclusive ends.
	 *
	 * @param {string | null | undefined} range
	 * @returns {[number, number | undefined] | undefined}
	 */ function parseRange(range) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
        if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];
            if (!comma) {
                return [
                    start,
                    start
                ];
            }
            if (!end) {
                return [
                    start,
                    undefined
                ];
            }
            return [
                start,
                Number(end)
            ];
        }
        return undefined;
    }
    Prism.hooks.add('before-highlightall', function(env) {
        env.selector += ', ' + SELECTOR;
    });
    Prism.hooks.add('before-sanity-check', function(env) {
        var pre = env.element;
        if (pre.matches(SELECTOR)) {
            env.code = ''; // fast-path the whole thing and go to complete
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading
            // add code element with loading message
            var code = pre.appendChild(document.createElement('CODE'));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute('data-src');
            var language = env.language;
            if (language === 'none') {
                // the language might be 'none' because there is no language set;
                // in this case, we want to use the extension as the language
                var extension = (/\.(\w+)$/.exec(src) || [
                    ,
                    'none'
                ])[1];
                language = EXTENSIONS[extension] || extension;
            }
            // set language classes
            Prism.util.setLanguage(code, language);
            Prism.util.setLanguage(pre, language);
            // preload the language
            var autoloader = Prism.plugins.autoloader;
            if (autoloader) {
                autoloader.loadLanguages(language);
            }
            // load file
            loadFile(src, function(text) {
                // mark as loaded
                pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                // handle data-range
                var range = parseRange(pre.getAttribute('data-range'));
                if (range) {
                    var lines = text.split(/\r\n?|\n/g);
                    // the range is one-based and inclusive on both ends
                    var start = range[0];
                    var end = range[1] == null ? lines.length : range[1];
                    if (start < 0) {
                        start += lines.length;
                    }
                    start = Math.max(0, Math.min(start - 1, lines.length));
                    if (end < 0) {
                        end += lines.length;
                    }
                    end = Math.max(0, Math.min(end, lines.length));
                    text = lines.slice(start, end).join('\n');
                    // add data-start for line numbers
                    if (!pre.hasAttribute('data-start')) {
                        pre.setAttribute('data-start', String(start + 1));
                    }
                }
                // highlight code
                code.textContent = text;
                Prism.highlightElement(code);
            }, function(error) {
                // mark as failed
                pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                code.textContent = error;
            });
        }
    });
    Prism.plugins.fileHighlight = {
        /**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */ highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for(var i = 0, element; element = elements[i++];){
                Prism.highlightElement(element);
            }
        }
    };
    var logged = false;
    /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */ Prism.fileHighlight = function() {
        if (!logged) {
            console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
            logged = true;
        }
        Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    };
})();
}),
];

//# sourceMappingURL=fb4dd_a5b0632e._.js.map