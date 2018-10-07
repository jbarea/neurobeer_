/* function ordenarPorTipo(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
    });
}

function ordenarPorPrecio(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
    })
}

function ordenarPorNombre(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
    })
} */

export var ordenarPor = function (field, reverse, primer) {
    var key = function (x) { return primer ? primer(x[field]) : x[field] };

    return function (a, b) {
        var A = key(a), B = key(b);
        return ((A < B) ? -1 : ((A > B) ? 1 : 0)) * [-1, 1][+!!reverse];
    }
}

/* module.exports = ordenarPorTipo;
module.exports = ordenarPorPrecio;
module.exports = ordenarPorNombre; */