function quote(length, width, pricePerSqMtr, roundUp) {
    let area = length * width;

    if(roundUp)
        area = Math.ceil(area);

    return area * pricePerSqMtr;
}

module.exports = quote;