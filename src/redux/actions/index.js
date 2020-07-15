export const setCount = function (num) {
    return {
        type: 'setCount',
        num,
    };
}

export const reduceCount = function () {
    return {
        type: 'reduceCount',
    };
}

export const delayAdd = function () {
    return {
        type: 'delayAdd',
    };
};

export const setText = function (text) {
    return {
        type: 'setText',
        text,
    };
}