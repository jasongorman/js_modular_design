const assert = require('assert');

function quote(length, width, pricePerSqMtr, roundUp) {
    return 0;
}

describe("Carpet Quote", () => {
    it('is room area * price per sq m un-rounded', () => {
        const length = 10.0;
        const width = 15.0;
        const pricePerSqMtr = 10.0;
        const roundUp = false;
        assert.equal(quote(length, width, pricePerSqMtr, roundUp), 1500.0)
    })
})