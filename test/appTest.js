const assert = require('chai').assert;
const {add, sub, mul, div} = require("../app");

describe('App',()=>{

    it('expected result 7 PASS',()=>{
        let result = add(5, 2);
        assert.equal(result, 7);
    })

    it('expected result 8 FAIL',()=>{
        let result = add(5, 2);
        assert.equal(result, 8);
    })

    it('expected result 3 PASS',()=>{
        let result = sub(5, 2);
        assert.equal(result, 3);
    })

    it('expected result 5 FAIL',()=>{
        let result = sub(5, 2);
        assert.equal(result, 5);
    })

    it('expected result 10 PASS',()=>{
        let result = mul(5, 2);
        assert.equal(result, 10);
    })

    it(' expected result 12 FAIL',()=>{
        let result = mul(5, 2);
        assert.equal(result, 12);
    })

    it(' expected result 5 PASS',()=>{
        let result = div(10, 2);
        assert.equal(result, 5);
    })

    it(' expected result 5 PASS',()=>{
        let result = div(10, 2);
        assert.equal(result, 2);
    })



})