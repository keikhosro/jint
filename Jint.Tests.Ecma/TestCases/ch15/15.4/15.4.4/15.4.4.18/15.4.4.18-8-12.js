/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.18/15.4.4.18-8-12.js
 * @description Array.prototype.forEach doesn't visit expandos
 */


function testcase() {

  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    callCnt++;
  }
  var arr = [1,2,3,4,5];
  arr["i"] = 10;
  arr[true] = 11;

  arr.forEach(callbackfn);
  if(callCnt == 5)
  {
    return true;
  }

 }
runTestCase(testcase);
