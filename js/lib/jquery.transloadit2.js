/** @license jQuery Easing v1.3: Copyright (c) 2008 George McGinley Smith | BSD License: http://www.opensource.org/licenses/bsd-license.php
*/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( $ ) {

	// ###################### UTILITIES ##

	// Noop
	function noop() {
	}

	// Generic callback
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Call if defined
	function callIfDefined( method , object , parameters ) {
		return method && method.apply( object.context || object , parameters );
	}

	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}

	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_CHARSET = "charset",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_INSERT_BEFORE = "insertBefore",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ON_CLICK = STR_ON + "click",
		STR_ON_ERROR = STR_ON + STR_ERROR,
		STR_ON_LOAD = STR_ON + "load",
		STR_ON_READY_STATE_CHANGE = STR_ON + "readystatechange",
		STR_READY_STATE = "readyState",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",

		// Window
		win = window,
		// Deferred
		Deferred = $.Deferred,
		// Head element
		head = $( "head" )[ 0 ] || document.documentElement,
		// Page cache
		pageCache = {},
		// Counter
		count = 0,
		// Last returned value
		lastValue,

		// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//charset: undefined,
			//complete: undefined,
			//context: undefined,
			//data: "",
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,
			url: location.href
		},

		// opera demands sniffing :/
		opera = win.opera,

		// IE < 10
		oldIE = !!$( "<div>" ).html( "<!--[if IE]><i><![endif]-->" ).find("i").length;

	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {

		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );

		// References to xOptions members (for better minification)
		var successCallback = xOptions.success,
			errorCallback = xOptions.error,
			completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			charset = xOptions.charset,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,

			// Abort/done flag
			done = 0,

			// Life-cycle functions
			cleanUp = noop,

			// Support vars
			supportOnload,
			supportOnreadystatechange,

			// Request execution vars
			firstChild,
			script,
			scriptAfter,
			timeoutTimer;

		// If we have Deferreds:
		// - substitute callbacks
		// - promote xOptions to a promise
		Deferred && Deferred(function( defer ) {
			defer.done( successCallback ).fail( errorCallback );
			successCallback = defer.resolve;
			errorCallback = defer.reject;
		}).promise( xOptions );

		// Create the abort method
		xOptions.abort = function() {
			!( done++ ) && cleanUp();
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( callIfDefined( xOptions.beforeSend , xOptions , [ xOptions ] ) === !1 || done ) {
			return xOptions;
		}

		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;

		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;

		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );

		// Add anticache parameter if needed
		!cacheFlag && !pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );

		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );

		// Success notifier
		function notifySuccess( json ) {

			if ( !( done++ ) ) {

				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( successCallback , xOptions , [ json , STR_SUCCESS, xOptions ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );

			}
		}

		// Error notifier
		function notifyError( type ) {

			if ( !( done++ ) ) {

				// Clean up
				cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( errorCallback , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );

			}
		}

		// Check page cache
		if ( pageCacheFlag && ( pageCached = pageCache[ url ] ) ) {

			pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached );

		} else {

			// Install the generic callback
			// (BEWARE: global namespace pollution ahoy)
			win[ successCallbackName ] = genericCallback;

			// Create the script tag
			script = $( STR_SCRIPT_TAG )[ 0 ];
			script.id = STR_JQUERY_JSONP + count++;

			// Set charset if provided
			if ( charset ) {
				script[ STR_CHARSET ] = charset;
			}

			opera && opera.version() < 11.60 ?
				// onerror is not supported: do not set as async and assume in-order execution.
				// Add a trailing script to emulate the event
				( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + "()" )
			:
				// onerror is supported: set the script as async to avoid requests blocking each others
				( script[ STR_ASYNC ] = STR_ASYNC )

			;

			// Internet Explorer: event/htmlFor trick
			if ( oldIE ) {
				script.htmlFor = script.id;
				script.event = STR_ON_CLICK;
			}

			// Attached event handlers
			script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = script[ STR_ON_READY_STATE_CHANGE ] = function ( result ) {

				// Test readyState if it exists
				if ( !script[ STR_READY_STATE ] || !/i/.test( script[ STR_READY_STATE ] ) ) {

					try {

						script[ STR_ON_CLICK ] && script[ STR_ON_CLICK ]();

					} catch( _ ) {}

					result = lastValue;
					lastValue = 0;
					result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );

				}
			};

			// Set source
			script.src = url;

			// Re-declare cleanUp function
			cleanUp = function( i ) {
				timeoutTimer && clearTimeout( timeoutTimer );
				script[ STR_ON_READY_STATE_CHANGE ] = script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = null;
				head[ STR_REMOVE_CHILD ]( script );
				scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
			};

			// Append main script
			head[ STR_INSERT_BEFORE ]( script , ( firstChild = head.firstChild ) );

			// Append trailing script if needed
			scriptAfter && head[ STR_INSERT_BEFORE ]( scriptAfter , firstChild );

			// If a timeout is needed, install it
			timeoutTimer = timeout > 0 && setTimeout( function() {
				notifyError( STR_TIMEOUT );
			} , timeout );

		}

		return xOptions;
	}

	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;

} )( jQuery );

/** @license json2: Douglas Crockford | Public domain
*/

/*
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/** @license jQuery Tools 1.2.3: Tero Piirainen | Public domain
*/

/**
 * jQuery Tools 1.2.3 / Expose - Dim the lights
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/toolbox/expose.html
 *
 * Since: Mar 2010
 * Date:    Mon Jun 7 13:43:53 2010 +0000
 */

/**
 * This version is by @pekeler as proposed in https://gist.github.com/pekeler/4965712
 * and discussed in https://github.com/transloadit/jquery-sdk/issues/13#issuecomment-13645153
 *
 * https://github.com/jquerytools/jquerytools/blob/master/src/toolbox/toolbox.expose.js
 * simplified, minimally tested in Safari 6.0.2, FF 18.0.2, Chrome 24.0.1312.57,
 * IE9, IE8, IE7. Works with jQuery 1.9
 */

(function($) {
	$.tools = $.tools || {version: '2013-02-15'};
	var tool = $.tools.expose = {
		conf: {
			maskId: 'exposeMask',
			loadSpeed: 'slow',
			closeSpeed: 'fast',
			zIndex: 9998,
			opacity: 0.8,
			startOpacity: 0,
			color: '#fff'
		}
	};
	var mask, exposed, loaded, config, overlayIndex;
	$.mask = {
		load: function(conf, els) {
			if (loaded) { return this; }
			conf = conf || config;
			config = conf = $.extend($.extend({}, tool.conf), conf);
			mask = $("#" + conf.maskId);
			if (!mask.length) {
				mask = $('<div/>').attr("id", conf.maskId);
				$("body").append(mask);
			}
			mask.css({
				position: 'fixed',
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				display: 'block',
				opacity: conf.opacity,
				zIndex: conf.zIndex,
				backgroundColor: conf.color
			});

			if (els && els.length) {
				overlayIndex = els.eq(0).css("zIndex");
				exposed = els.css({ zIndex: Math.max(conf.zIndex + 1, overlayIndex == 'auto' ? 0 : overlayIndex)});
			}

			loaded = true;

			return this;
		},
		close: function() {
			if (loaded) {
				mask.fadeOut(config.closeSpeed, function() {
					if (exposed) {
						exposed.css({zIndex: overlayIndex});
					}
				});
				loaded = false;
			}
			return this;
		}
	};
	$.fn.mask = function(conf) {
		$.mask.load(conf);
		return this;
	};
	$.fn.expose = function(conf) {
		$.mask.load(conf, this);
		return this;
	};
})(jQuery);

/** @license jquery.transloadit2.js: Copyright (c) 2013 Transloadit Ltd | MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Fork this on Github: http://github.com/transloadit/jquery-sdk
 *
 * Transloadit servers allow browsers to cache jquery.transloadit2.js for 1 hour.
 * keep this in mind when rolling out fixes.
 */
!function($) {
  var PROTOCOL = (document.location.protocol == 'https:') ? 'https://' : 'http://';

  var DEFAULT_SERVICE = PROTOCOL + 'api2.transloadit.com/';

  var OPTIONS = {
    service                      : DEFAULT_SERVICE,
    assets                       : PROTOCOL + 'assets.transloadit.com/',
    beforeStart                  : function() {return true;},
    onFileSelect                 : function() {},
    onStart                      : function() {},
    onProgress                   : function() {},
    onUpload                     : function() {},
    onResult                     : function() {},
    onCancel                     : function() {},
    onError                      : function() {},
    onSuccess                    : function() {},
    interval                     : 2500,
    pollTimeout                  : 8000,
    poll404Retries               : 15,
    pollConnectionRetries        : 5,
    wait                         : false,
    processZeroFiles             : true,
    triggerUploadOnFileSelection : false,
    autoSubmit                   : true,
    modal                        : true,
    exclude                      : '',
    fields                       : false,
    params                       : null,
    signature                    : null,
    region                       : 'us-east-1',
    debug                        : true,
    locale                       : 'en'
  };

  var I18N = {
    en : {
      'errors.BORED_INSTANCE_ERROR' : 'Could not find a bored instance.',
      'errors.CONNECTION_ERROR'     : 'There was a problem connecting to the upload server',
      'errors.unknown'              : 'There was an internal error.',
      'errors.tryAgain'             : 'Please try your upload again.',
      'errors.troubleshootDetails'  : 'If you would like our help to troubleshoot this, ' +
          'please email us this information:',
      cancel                        : 'Cancel',
      details                       : 'Details',
      startingUpload                : 'Starting upload ...',
      processingFiles               : 'Upload done, now processing files ...',
      uploadProgress                : '%s / %s MB at %s kB/s | %s left'
    },
    ja : {
      'errors.BORED_INSTANCE_ERROR' : 'サーバー接続に問題があります',
      'errors.CONNECTION_ERROR'     : 'サーバー接続に問題があります',
      'errors.unknown'              : '通信環境に問題があります',
      'errors.tryAgain'             : 'しばらくしてから再度投稿してください',
      'errors.troubleshootDetails'  : '解決できない場合は、こちらにお問い合わせください ' +
          '下記の情報をメールでお送りください:',
      cancel                        : 'キャンセル',
      details                       : '詳細',
      startingUpload                : '投稿中 ...',
      processingFiles               : '接続中',
      uploadProgress                : '%s MB / %s MB (%s kB / 秒)'
    }
  };
  var CSS_LOADED = false;

  function sprintf(str, args) {
    args = args || [];
    return str.replace(/(%[s])/g, function(m, i, s) {
      var arg = args.shift();
      if (!arg && arg !== 0) {
        return '';
      }
      return arg + '';
    });
  }

  $.fn.transloadit = function() {
    var args = Array.prototype.slice.call(arguments);
    var method;
    var uploader;
    var r;

    if (this.length === 0) {
      return;
    }

    if (this.length > 1) {
      this.each(function() {
        $.fn.transloadit.apply($(this), args);
      });
      return;
    }

    if (args.length == 1 && typeof args[0] == 'object' || args[0] === undefined) {
      args.unshift('init');
    }

    method = args.shift();
    if (method == 'init') {
      uploader = new Uploader();
      args.unshift(this);
      this.data('transloadit.uploader', uploader);
    } else {
      uploader = this.data('transloadit.uploader');
    }

    if (!uploader) {
      throw new Error('Element is not initialized for transloadit!');
    }

    r = uploader[method].apply(uploader, args);
    return (r === undefined) ? this : r;
  };

  $.fn.transloadit.i18n = I18N;

  function Uploader() {
    this.assemblyId = null;

    this.instance      = null;
    this.documentTitle = null;
    this.timer         = null;
    this._options      = {};
    this.uploads       = [];
    this.results       = {};
    this.ended         = null;
    this.pollStarted   = null;
    this.pollRetries   = 0;
    this.started       = false;
    this.assembly      = null;
    this.params        = null;

    this.bytesReceivedBefore = 0;
    this.lastPoll            = 0;

    this.$params     = null;
    this.$form       = null;
    this.$files      = null;
    this.$fileClones = null;
    this.$iframe     = null;
    this.$modal      = null;

    this._lastMSecs = 0;
    this._lastNSecs = 0;
    this._clockseq  = 0;

    this._animatedTo100 = false;
    this._uploadFileIds = [];
    this._resultFileIds = [];
  }

  Uploader.prototype.init = function($form, options) {
    this.$form = $form;
    this.options($.extend({}, OPTIONS, options || {}));

    var self = this;
    $form.bind('submit.transloadit', function() {
      self.validate();
      self.detectFileInputs();

      if (!self._options['processZeroFiles'] && self.$files.length === 0) {
        if (self._options.beforeStart()) {
          self.submitForm();
        }
      } else {
        if (self._options.beforeStart()) {
          self.getBoredInstance();
        }
      }

      return false;
    });

    if (this._options['triggerUploadOnFileSelection']) {
      $form.on('change', 'input[type="file"]', function() {
        $form.trigger('submit.transloadit');
      });
    }

    $form.on('change', 'input[type="file"]', function() {
      self._options.onFileSelect($(this).val(), $(this));
    });

    this.includeCss();
  };

  Uploader.prototype.getBoredInstance = function() {
    var self = this;

    this.instance              = null;
    var url                    = this._options['service'] + 'instances/bored';
    var canUseCustomBoredLogic = true;

    function proceed() {
      $.jsonp({
        url               : url,
        timeout           : self._options.pollTimeout,
        callbackParameter : 'callback',
        success           : function(instance) {
          if (instance.error) {
            self.ended   = true;
            instance.url = url;
            self.renderError(instance);
            self._options.onError(instance);
            return;
          }

          self.instance = instance.api2_host;
          self.start();
        },
        error             : function(xhr, status, jsonpErr) {
          if (canUseCustomBoredLogic && self._options['service'] === DEFAULT_SERVICE) {
            canUseCustomBoredLogic = false;

            self._findBoredInstanceUrl(function(err, theUrl) {
              if (err) {
                self.ended = true;
                err = {
                  error   : 'BORED_INSTANCE_ERROR',
                  message : self.i18n('errors.BORED_INSTANCE_ERROR') + ' ' + err.message
                };
                self.renderError(err);
                self._options.onError(err);
                return;
              }

              url = PROTOCOL + 'api2.' + theUrl + '/instances/bored';

              if (PROTOCOL === 'https://') {
                url = PROTOCOL + 'api2-' + theUrl + '/instances/bored';
              }

              proceed();
            });
            return;
          }

          self.ended = true;

          var reason = 'JSONP bored instance request status: ' + status;
          reason += ', err: ' + jsonpErr;

          var err = {
            error   : 'CONNECTION_ERROR',
            message : self.i18n('errors.CONNECTION_ERROR'),
            reason  : reason,
            url     : url
          };
          self.renderError(err);
          self._options.onError(err);
        }
      });
    }

    proceed();

    if (this._options.modal) {
      this.showModal();
    }
  };

  Uploader.prototype._findBoredInstanceUrl = function(cb) {
    var region = this._options.region;
    var domain = 's3';

    if (region !== 'us-east-1') {
      domain = 's3-' + region;
    }

    var url = PROTOCOL + domain + '.amazonaws.com/infra-' + region;
    url    += '.transloadit.com/cached_instances.json';

    var self = this;
    var opts = {
      url      : url,
      timeout  : 5000,
      datatype : 'json',
      success  : function(result) {
        var instances = self._shuffle(result.uploaders);
        self._findResponsiveInstance(instances, 0, cb);
      }
    };

    opts.error = function(xhr, status) {
      // retry from the crm if S3 let us down
      opts.url = PROTOCOL + 'transloadit.com/' + region;
      opts.url += '_cached_instances.json';

      opts.error = function(xhr, status) {
        var msg = 'Could not get cached uploaders from neither S3 or the crm';
        msg += ' for region: ' + region;
        var err = new Error(msg);
        cb(err);
      };

      $.ajax(opts);
    };

    $.ajax(opts);
  };

  Uploader.prototype._findResponsiveInstance = function(instances, index, cb) {
    if (!instances[index]) {
      var err = new Error('No responsive uploaders');
      return cb(err);
    }

    var self = this;
    var url  = instances[index];

    $.jsonp({
      url               : PROTOCOL + url,
      timeout           : 3000,
      callbackParameter : 'callback',
      success           : function(result) {
        cb(null, url);
      },
      error             : function(xhr, status) {
        self._findResponsiveInstance(instances, index + 1, cb);
      }
    });
  };

  Uploader.prototype._shuffle = function(arr) {
    var shuffled = [];
    var rand;
    for (var i = 0; i < arr.length; i++) {
      rand           = Math.floor(Math.random() * (i + 1));
      shuffled[i]    = shuffled[rand];
      shuffled[rand] = arr[i];
    }
    return shuffled;
  };

  Uploader.prototype.start = function() {
    var self = this;

    this.started             = false;
    this.ended               = false;
    this.bytesReceivedBefore = 0;
    this.pollRetries         = 0;
    this.uploads             = [];
    this._animatedTo100      = false;
    this._uploadFileIds      = [];
    this._resultFileIds      = [];
    this.results             = {};

    this.assemblyId = this._genUuid();

    // add a clone, so that we can restore the file input fields
    // when the user hits cancel and so that we can .append(this.$files) to
    // this.$uploadForm, which moves (without a clone!) the file input fields in the dom
    this.$fileClones = $().not(document);

    // We do not need file clones if we do an XHR upload, because we do not
    // have a shadow form submitted to an iframe in that case.
    if (!this._options.formData) {
      this.$files.each(function() {
        var $clone = $(this).clone(true);
        self.$fileClones = self.$fileClones.add($clone);
        $clone.insertAfter(this);
      });
    }

    this.$iframe = $('<iframe id="transloadit-' + this.assemblyId + '" name="transloadit-' + this.assemblyId + '"/>')
      .appendTo('body')
      .hide();

    var url = PROTOCOL + this.instance + '/assemblies/' + this.assemblyId + '?redirect=false';

    if (this._options.formData) {
      var assemblyParams = this._options.params;
      if (this.$params) {
        assemblyParams = this.$params.val();
      }

      if (this._options.formData instanceof FormData) {
        this._options.formData.append("params", assemblyParams);
      } else {
        var formData = new FormData(this.$form.get(0));
        formData.append("params", assemblyParams);

        for (var i = 0; i < this._options.formData.length; i++) {
          var tupel = this._options.formData[i];
          formData.append(tupel[0], tupel[1], tupel[2]);
        }

        this._options.formData = formData;
      }

      var f = new XMLHttpRequest();
      f.open("POST", url);
      f.send(this._options.formData);
    } else {
      this.$uploadForm = $('<form enctype="multipart/form-data" />')
        .attr('action', url)
        .attr('target', 'transloadit-' + this.assemblyId)
        .attr('method', 'POST')

        // using .append(this.$files.clone(true)) does not work here as it does
        // not carry over the selected file value :/
        // hence we need to clone file input fields beforehand and store them
        // in self.$fileClones
        .append(this.$files)
        .appendTo('body')
        .hide();

      var fieldsFilter = '[name=params], [name=signature]';
      if (this._options.fields === true) {
        fieldsFilter = '*';
      } else if (typeof this._options.fields === 'string') {
        fieldsFilter += ', ' + this._options.fields;
      }

      var $fieldsToClone = this.$form.find(':input[type!=file]').filter(fieldsFilter);

      // remove selects from $clones, because we have to clone them as hidden input
      // fields, otherwise their values are not transferred properly
      var $selects = $fieldsToClone.filter('select');

      $fieldsToClone = $fieldsToClone.filter(function() {
        return !$(this).is('select');
      });

      // filter out submit elements as they will cause funny behavior in the
      // shadow form
      $fieldsToClone = $fieldsToClone.filter('[type!=submit]');


      var $clones = this.clone($fieldsToClone);

      if (this._options.params && !this.$params) {
        $clones = $clones.add('<input name="params" value=\'' + JSON.stringify(this._options.params) + '\'>');
      }
      if (this._options.signature) {
        $clones = $clones.add('<input name="signature" value=\'' + this._options.signature + '\'>');
      }

      if (typeof this._options.fields == 'object') {
        for (var fieldName in this._options.fields) {
          var fieldValue = this._options.fields[fieldName];
          $clones = $clones.add('<input name="' + fieldName + '" value=\'' + fieldValue + '\'>');
        }
      }

      $clones.prependTo(this.$uploadForm);


      // now add all selects as hidden fields
      $selects.each(function() {
        $('<input type="hidden"/>')
          .attr('name', $(this).attr('name'))
          .attr('value', $(this).val())
          .prependTo(self.$uploadForm);
      });

      this.$uploadForm.submit();
    }

    this.lastPoll = +new Date();
    setTimeout(function() {
      self._poll();
    }, 300);
  };

  Uploader.prototype.clone = function($obj) {
    var $result         = $obj.clone();
    var myTextareas     = $obj.filter('textarea');
    var resultTextareas = $result.filter('textarea');

    for (var i = 0; i < myTextareas.length; ++i) {
      $(resultTextareas[i]).val($(myTextareas[i]).val());
    }

    return $result;
  };

  Uploader.prototype.detectFileInputs = function() {
    var $files = this.$form
      .find('input[type=file]')
      .not(this._options.exclude);

    if (!this._options['processZeroFiles']) {
      $files = $files.filter(function() {
        return this.value !== '';
      });
    }
    this.$files = $files;
  };

  Uploader.prototype.validate = function() {
    if (!this._options.params) {
      var $params = this.$form.find('input[name=params]');
      if (!$params.length) {
        alert('Could not find input[name=params] in your form.');
        return;
      }

      this.$params = $params;
      try {
        this.params = JSON.parse($params.val());
      } catch (e) {
        alert('Error: input[name=params] seems to contain invalid JSON.');
        return;
      }
    } else {
      this.params = this._options.params;
    }

    if (this.params.redirect_url) {
      this.$form.attr('action', this.params.redirect_url);
    } else if (this._options.autoSubmit && (this.$form.attr('action') == this._options.service + 'assemblies')) {
      alert('Error: input[name=params] does not include a redirect_url');
      return;
    }
  };

  Uploader.prototype._poll = function(query) {
    var self = this;
    if (this.ended) {
      return;
    }

    // Reduce Firefox Title Flickering
    var match = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(navigator.userAgent);
    var isMozilla = match && match[1];
    this.documentTitle = document.title;
    if (isMozilla && !this.documentTitle) {
      document.title = 'Loading...';
    }

    this.pollStarted = +new Date();

    var instance = 'status-' + this.instance;
    var url      = PROTOCOL + instance + '/assemblies/' + this.assemblyId;

    if (query) {
      url += query;
    }

    $.jsonp({
      url               : url,
      timeout           : self._options.pollTimeout,
      callbackParameter : 'callback',
      success           : function(assembly) {
        if (self.ended) {
          return;
        }

        self.assembly = assembly;
        if (assembly.error == 'ASSEMBLY_NOT_FOUND') {
          self.pollRetries++;

          if (self.pollRetries > self._options.poll404Retries) {
            document.title = self.documentTitle;
            self.ended = true;
            self.renderError(assembly);
            self._options.onError(assembly);
            return;
          }

          setTimeout(function() {
            self._poll();
          }, 400);
          return;
        }
        if (assembly.error) {
          self.ended = true;
          self.renderError(assembly);
          document.title = self.documentTitle;
          self._options.onError(assembly);
          return;
        }

        if (!self.started && assembly.bytes_expected > 0) {
          self.started = true;
          self._options.onStart(assembly);
        }

        self.pollRetries = 0;
        var isUploading = assembly.ok === 'ASSEMBLY_UPLOADING';
        var isExecuting = assembly.ok === 'ASSEMBLY_EXECUTING';
        var isCanceled  = assembly.ok === 'ASSEMBLY_CANCELED';
        var isComplete  = assembly.ok === 'ASSEMBLY_COMPLETED';

        if (assembly.bytes_expected > 0) {
          self._options.onProgress(assembly.bytes_received, assembly.bytes_expected, assembly);
        }

        for (var i = 0; i < assembly.uploads.length; i++) {
          var upload = assembly.uploads[i];

          if ($.inArray(upload.id, self._uploadFileIds) === -1) {
            self._options.onUpload(upload, assembly);
            self.uploads.push(upload);
            self._uploadFileIds.push(upload.id);
          }
        }

        for (var step in assembly.results) {
          self.results[step] = self.results[step] || [];

          for (var j = 0; j < assembly.results[step].length; j++) {
            var result   = assembly.results[step][j];
            var resultId = step + '_' + result.id;

            if ($.inArray(resultId, self._resultFileIds) === -1) {
              self._options.onResult(step, result, assembly);
              self.results[step].push(result);
              self._resultFileIds.push(resultId);
            }
          }
        }

        if (isCanceled) {
          self.ended = true;
          document.title = self.documentTitle;
          self._options.onCancel(assembly);
          return;
        }

        var isEnded = isComplete || (!self._options['wait'] && isExecuting);

        if (assembly.bytes_expected > 0) {
          self.renderProgress(assembly, isEnded, self._options['wait']);
        }

        if (isEnded) {
          self.ended = true;
          document.title = self.documentTitle;
          assembly.uploads = self.uploads;
          assembly.results = self.results;
          self._options.onSuccess(assembly);

          // give the progressbar some time to finish to 100%
          setTimeout(function() {
            if (self._options.modal) {
              self.cancel();
            }
            self.submitForm();
          }, 600);
          return;
        }

        var ping    = self.pollStarted - +new Date();
        var timeout = ping < self._options.interval ? self._options.interval : ping;

        self.timer = setTimeout(function() {
          self._poll();
        }, timeout);
        self.lastPoll = +new Date();
      },
      error             : function(xhr, status, jsonpErr) {
        if (self.ended) {
          return;
        }

        self.pollRetries++;
        if (self.pollRetries > self._options.pollConnectionRetries) {
          document.title = self.documentTitle;
          self.ended = true;

          var reason = 'JSONP status poll request status: ' + status;
          reason += ', err: ' + jsonpErr;

          var err = {
            error   : 'CONNECTION_ERROR',
            message : self.i18n('errors.CONNECTION_ERROR'),
            reason  : reason,
            url     : url
          };
          self.renderError(err);
          self._options.onError(err);
          return;
        }

        setTimeout(function() {
          self._poll();
        }, 350);
      }
    });
  };

  Uploader.prototype.stop = function() {
    document.title = this.documentTitle;
    this.ended = true;
  };


  Uploader.prototype.cancel = function() {
    // @todo this has still a race condition if a new upload is started
    // while the cancel request is still being executed. Shouldn't happen
    // in real life, but needs fixing.

    if (!this.ended) {
      var self = this;
      if (this.$params) {
        this.$params.prependTo(this.$form);
      }

      this.$fileClones.each(function(i) {
        var $original = $(self.$files[i]).clone(true);
        var $clone = $(this);
        $original.insertAfter($clone);
        $clone.remove();
      });
      clearTimeout(self.timer);

      this._poll('?method=delete');

      if (navigator.appName == 'Microsoft Internet Explorer') {
        this.$iframe[0].contentWindow.document.execCommand('Stop');
      }

      setTimeout(function() {
        self.$iframe.remove();
      }, 500);
    }

    if (this._options.modal) {
      this.hideModal();
    }
  };

  Uploader.prototype.submitForm = function() {
    // prevent that files are uploaded to the final destination
    // after all that is what we use this plugin for :)
    if (this.$form.attr('enctype') === 'multipart/form-data') {
      this.$form.removeAttr('enctype');
    }

    if (this.assembly !== null) {
      $('<textarea/>')
        .attr('name', 'transloadit')
        .text(JSON.stringify(this.assembly))
        .prependTo(this.$form)
        .hide();
    }

    if (this._options.autoSubmit) {
      this.$form
        .unbind('submit.transloadit')
        .submit();
    }
  };

  Uploader.prototype.hideModal = function() {
    $.mask.close();
    this.$modal.remove();
  };

  Uploader.prototype.showModal = function() {
    this.$modal =
      $('<div id="transloadit">' +
        '<div class="content">' +
          '<a href="#close" class="close">' + this.i18n('cancel') + '</a>' +
          '<p class="status"></p>' +
          '<div class="progress progress-striped">' +
            '<div class="bar"><span class="percent"></span></div>' +
          '</div>' +
          '<label>' + this.i18n('startingUpload') + '</label>' +
          '<p class="error"></p>' +
          '<div class="error-details-toggle"><a href="#">' + this.i18n('details') + '</a></div>' +
          '<p class="error-details"></p>' +
        '</div>' +
      '</div>')
      .appendTo('body');

    $.extend(this.$modal, {
      '$content'            : this.$modal.find('.content'),
      '$close'              : this.$modal.find('.close'),
      '$label'              : this.$modal.find('label'),
      '$progress'           : this.$modal.find('.progress'),
      '$percent'            : this.$modal.find('.progress .percent'),
      '$progressBar'        : this.$modal.find('.progress .bar'),
      '$error'              : this.$modal.find('.error'),
      '$errorDetails'       : this.$modal.find('.error-details'),
      '$errorDetailsToggle' : this.$modal.find('.error-details-toggle')
    });

    var self = this;

    this.$modal.$error.hide();
    this.$modal.$errorDetails.hide();
    this.$modal.$errorDetailsToggle.hide();

    var expose = this.$modal.expose({
      api          : true,
      maskId       : 'transloadit_expose',
      opacity      : 0.9,
      loadSpeed    : 250,
      closeOnEsc   : false,
      closeOnClick : false
    });

    this.$modal.$close.click(function() {
      self.cancel();
      return false;
    });
  };

  Uploader.prototype.renderError = function(err) {
    if (!this._options.modal) {
      return;
    }

    if (!this._options.debug) {
      return this.cancel();
    }

    this.$modal.$content.addClass('content-error');
    this.$modal.$progress.hide();
    this.$modal.$label.hide();

    var errorMsg = err.error + ': ' + err.message + '<br /><br />';
    errorMsg += (err.reason || '');

    var errorsRequiringDetails = [
      'CONNECTION_ERROR',
      'BORED_INSTANCE_ERROR',
      'ASSEMBLY_NOT_FOUND'
    ];
    if ($.inArray(err.error, errorsRequiringDetails) === -1) {
      this.$modal.$error.html(errorMsg).show();
      return;
    }

    var text = this.i18n('errors.unknown') + '<br/>' + this.i18n('errors.tryAgain');
    this.$modal.$error.html(text).show();

    var assemblyId = err.assemblyId ? err.assemblyId : this.assemblyId;
    var self       = this;
    var ip         = null;

    $.getJSON(PROTOCOL + 'jsonip.com/', function(ipData) {
      ip = ipData.ip;
    })
    .always(function() {
      var details = {
        endpoint     : err.url,
        instance     : self.instance,
        assembly_id  : assemblyId,
        ip           : ip,
        time         : self.getUTCDatetime(),
        agent        : navigator.userAgent,
        poll_retries : self.pollRetries,
        error        : errorMsg
      };
      $.post(PROTOCOL + 'status.transloadit.com/client_error', details);

      var detailsArr = [];
      for (var key in details) {
        detailsArr.push(key + ': ' + details[key]);
      }

      var detailsTxt = self.i18n('errors.troubleshootDetails') + '<br /><br />';
      self.$modal.$errorDetails.hide().html(detailsTxt + detailsArr.join('<br />'));

      self.$modal.$errorDetailsToggle.show().find('a')
        .off('click')
        .on('click', function(e) {
          e.preventDefault();
          self.$modal.$errorDetails.toggle();
        });
    });
  };

  Uploader.prototype.renderProgress = function(assembly, isAssemblyComplete, waitIsTrue) {
    if (!this._options.modal) {
      return;
    }

    var progress = assembly.bytes_received / assembly.bytes_expected * 100;
    if (progress > 100) {
      progress = 0;
    }

    var bytesReceived     = assembly.bytes_received - this.bytesReceivedBefore;
    var timeSinceLastPoll = +new Date() - this.lastPoll;
    var duration          = progress === 100 ? 1000 : this._options.interval * 2;

    var mbReceived = (assembly.bytes_received / 1024 / 1024).toFixed(2);
    var mbExpected = (assembly.bytes_expected / 1024 / 1024).toFixed(2);
    var uploadRate = ((bytesReceived / 1024) / (timeSinceLastPoll / 1000)).toFixed(1);

    var outstanding  = assembly.bytes_expected - assembly.bytes_received;
    var speedInBytes = (bytesReceived / (timeSinceLastPoll / 1000)).toFixed(1);

    var durationLeft = '';
    if (speedInBytes > 0) {
      durationLeft = this._duration(outstanding / speedInBytes);
    }

    txt = this.i18n('uploadProgress',
      mbReceived, mbExpected, uploadRate, durationLeft
    );

    if (!this._animatedTo100) {
      this.$modal.$label.text(txt);
    }

    var totalWidth           = parseInt(this.$modal.$progress.css('width'), 10);
    this.bytesReceivedBefore = assembly.bytes_received;

    if (bytesReceived <= 0 && !isAssemblyComplete) {
      return;
    }

    var self = this;

    if (isAssemblyComplete && waitIsTrue) {
      duration = 500;
    }

    this.$modal.$progressBar.stop().animate(
      {width: progress + '%'},
      {
        duration : duration,
        easing   : 'linear',
        progress : function(promise, currPercent, remainingMs) {
          var width = parseInt(self.$modal.$progressBar.css('width'), 10);

          var percent = (width * 100 / totalWidth).toFixed(0);
          if (percent > 100) {
            percent = 100;
          }
          if (percent > 13 && !self._animatedTo100) {
            self.$modal.$percent.text(percent + '%');
          }

          if (percent == 100 && !self._animatedTo100) {
            self._animatedTo100 = true;

            setTimeout(function() {
              self.$modal.$label.text(self.i18n('processingFiles'));
              self.$modal.$progress.addClass('active');
              self.$modal.$percent.text('');
            }, 500);
          }
        }
      }
    );
  };

  Uploader.prototype.includeCss = function() {
    if (CSS_LOADED || !this._options.modal) {
      return;
    }

    CSS_LOADED = true;
    $('<link rel="stylesheet" type="text/css" href="' + this._options.assets + 'css/transloadit2-latest.css" />')
      .appendTo('head');
  };

  Uploader.prototype.getUTCDatetime = function() {
    var now = new Date();
    var d = new Date(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      now.getUTCHours(),
      now.getUTCMinutes(),
      now.getUTCSeconds()
    );

    var pad = function(n) {
      return n < 10 ? '0' + n : n;
    };
    var tz = d.getTimezoneOffset();
    var tzs = (tz > 0 ? "-" : "+") + pad(parseInt(tz / 60, 10));

    if (tz % 60 !== 0) {
      tzs += pad(tz % 60);
    }

    if (tz === 0) {
      tzs = 'Z';
    }

    return d.getFullYear() + '-' +
        pad(d.getMonth() + 1) + '-' +
        pad(d.getDate()) + 'T' +
        pad(d.getHours()) + ':' +
        pad(d.getMinutes()) + ':' +
        pad(d.getSeconds()) + tzs;
  };

  Uploader.prototype._duration = function(t) {
    var min   = 60;
    var h     = 60 * min;
    var hours = Math.floor(t / h);

    t -= hours * h;

    var minutes = Math.floor(t / min);
    t -= minutes * min;

    var r = '';
    if (hours > 0) {
      r += hours + 'h ';
    }
    if (minutes > 0) {
      r += minutes + 'min ';
    }
    if (t > 0) {
      t = t.toFixed(0);
      r += t + 's';
    }

    if (r === '') {
      r = '0s';
    }

    return r;
  };

  Uploader.prototype._genUuid = function(options, buf, offset) {
    options = options || {};

    var i = buf && offset || 0;
    var b = buf || [];

    var _rnds = new Array(16);
    var _rng = function() {
      for (var j = 0, r; j < 16; j++) {
        if ((j & 0x03) === 0) r = Math.random() * 0x100000000;
        _rnds[j] = r >>> ((j & 0x03) << 3) & 0xff;
      }

      return _rnds;
    };
    var _seedBytes = _rng();

    var _nodeId = [
      _seedBytes[0] | 0x01,
      _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
    ];

    this._clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
    var clockseq = options.clockseq != null ? options.clockseq : this._clockseq;

    var _byteToHex = [];
    var _hexToByte = {};
    for (var j = 0; j < 256; j++) {
      _byteToHex[j] = (j + 0x100).toString(16).substr(1);
      _hexToByte[_byteToHex[j]] = j;
    }

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs != null ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs != null ? options.nsecs : this._lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = (msecs - this._lastMSecs) + (nsecs - this._lastNSecs) / 10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq == null) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > this._lastMSecs) && options.nsecs == null) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    this._lastMSecs = msecs;
    this._lastNSecs = nsecs;
    this._clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;

    for (var n = 0; n < 6; n++) {
      b[i + n] = node[n];
    }

    function unparse(_buf, offset) {
      var i = offset || 0, bth = _byteToHex;

      return bth[_buf[i++]] + bth[_buf[i++]] +
              bth[_buf[i++]] + bth[_buf[i++]] +
              bth[_buf[i++]] + bth[_buf[i++]] +
              bth[_buf[i++]] + bth[_buf[i++]] +
              bth[_buf[i++]] + bth[_buf[i++]] +
              bth[_buf[i++]] + bth[_buf[i++]] +
              bth[_buf[i++]] + bth[_buf[i++]] +
              bth[_buf[i++]] + bth[_buf[i++]];
    }

    return buf ? buf : unparse(b);
  };

  Uploader.prototype.options = function(options) {
    if (arguments.length === 0) {
      return this._options;
    }

    $.extend(this._options, options);
  };

  Uploader.prototype.option = function(key, val) {
    if (arguments.length == 1) {
      return this._options[key];
    }

    this._options[key] = val;
  };

  Uploader.prototype.i18n = function() {
    var args = Array.prototype.slice.call(arguments);
    var key  = args.shift();
    var locale = this._options.locale;
    var translated = I18N[locale] && I18N[locale][key] || I18N.en[key];
    if (!translated) {
      throw new Error('Unknown i18n key: ' + key);
    }

    return sprintf(translated, args);
  };

}(jQuery);
