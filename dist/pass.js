/**!
*** Pass.js 1.0.1
*** Passed events with Debounce or Throttle.
*** http://pass-js.github.io
***
*** @version 1.0.1
*** @author Onur Boz <hi.bozdev@gmail.com>
*** @copyright (c) Copyright 2020 Pass JS, Bozdev, Onur Boz, (https://onurboz.com)
*** @license Released under the MIT License, (https://github.com/bozdev/pass.js/blob/main/LICENSE)
**/

(function (global, factory) 
{
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.pass = factory());
}(this, (function () 
{ 
  'use strict';

  var pass = {}; // Object for public APIs

  /**
  *** Method debounce, pass.debounce()
  *** @public
  *** @param   {Function}  callback  The callback to run
  *** @param   {number}    wait      The waiting time in (ms), [optional], default: 200
  *** @param   {Object}    options   The settings object, structure is: { leading: true, trailing: true }
  ***                                leading:  {boolean} Trigger at the leading edge, [optional], default: true
  ***                                trailing: {boolean} Trigger on the last trailing edge, [optional], default: true
  ***                                Note: If both are set to false, the last edge is triggered by default.
  *** @return  {Function}            Returns null if not apply callback
  **/
  pass.debounce = function(callback, wait, options) 
  {
    var context, args, result, call;
    var timeout = null;

    wait || (wait = 200);
    options || (options = {});

    function later()
    {
      timeout = null;
      (options.leading === false || options.trailing !== false) && (result = callback.apply(context, args));
      !timeout && (context = args = null);      
    }

    return function() 
    {
      args = arguments;
      context = this;
      call = options.leading !== false && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      call && (result = callback.apply(context, args));
      return result;
    }
  };

  /**
  *** Method throttle, pass.throttle()
  *** @public
  *** @param   {Function}  callback  The callback to run
  *** @param   {number}    wait      The waiting time in ms, [optional], default: 200
  *** @param   {Object}    options   The settings object, structure is: { leading: true, trailing: true }
  ***                                leading:  {boolean} Trigger at the leading edge, [optional], default: true
  ***                                trailing: {boolean} Trigger on the trailing edge, [optional], default: true
  ***                                Note: If both are set to false, the last edge is triggered by default.
  *** @return  {Function}            Returns null if not apply callback
  **/
  pass.throttle = function(callback, wait, options) 
  {
    var context, args, result;
    var timeout = null;
    var previous = 0;

    wait || (wait = 200);
    options || (options = {});

    function later()
    {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = callback.apply(context, args);
      !timeout && (context = args = null);
    }

    return function()
    {
      var now = Date.now();

      args = arguments;
      context = this;
      !previous && options.leading === false && (previous = now);

      var remaining = wait - (now - previous);

      if(remaining <= 0 || remaining > wait)
      {
        if(timeout)
        {
          clearTimeout(timeout);
          timeout = null;
        }

        previous = now;
        result = callback.apply(context, args);
        !timeout && (context = args = null);
      }

      else if(!timeout && options.trailing !== false)
      {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };    
  };

  // return public APIs
  return pass;

})));
