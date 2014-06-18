function PrintArray(array) {
    for (var i = 0, len = array.length; i < len; i++) {
        jsConsole.writeLine('index: ' + i + ' => element: ' + array[i]);
    }
}

function selectionSort(array) {
    var min = array[0];
    var temp = 0;
    for (var i = 0, len = array.length ; i < len; i++) {
        for (var j = i; j < len; j++) {
            if (parseInt(array[j]) < parseInt(array[i])) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

function binarySearch(array, key, min, max) {
    if (parseInt(max) < parseInt(min)) {
        return -1;
    }
    else {
        var mid = Math.floor((min + max) / 2);
        if (parseInt(array[mid]) > parseInt(key)) {
            return binarySearch(array, key, min, mid - 1);
        }
        else if (parseInt(array[mid]) < parseInt(key)) {
            return binarySearch(array, key, mid + 1, max);
        }
        else {
            return mid;
        }
    }
}