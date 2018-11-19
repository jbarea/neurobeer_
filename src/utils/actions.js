export var ordenarPor = function (field, reverse, primer) {
    let key = function (x) { return primer ? primer(x[field]) : x[field] };

    return function (a, b) {
        let A = key(a), B = key(b);
        return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1, 1][+!!reverse];
    }
}
