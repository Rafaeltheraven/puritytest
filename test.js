const YES = "yes";
const NO = "no";
const regex = /http(:?s)?:\/\/(.*)\/test\/([0-9]+)/gm;

document.onload = on_load

function on_load() {
    var {yes, no} = get_yes_no();
    var score = document.getElementById("current-score");
    var total = window.location.href.matchAll(regex)[1];
    score.innerText = `With ${yes + no} questions down, you're ${calc_score(no, total)}% pure`;
}

function calc_score(n, total) {
    return n / (total / 100)
}

function get_yes_no() {
    var params = new URLSearchParams(window.location.search);
    var y = 0;
    if (params.has(YES)) {
        y = params.get(YES);
    }
    var n = 0;
    if (params.has(NO)) {
        n = params.get(NO);
    }
    return {
        yes: Number(y),
        no: Number(n)
    }
}

function t(o, f, c) {
    var inc = new Array;
    var {yes, no} = get_yes_no();

    for (i = f; i < f + c; i++) {
        var y_s = document.getElementById('q' + i + '_y').checked;
        var n_s = document.getElementById('q' + i + '_n').checked;

        if (y_s == false && n_s == false) {
            inc.push(i);
        } else if (y_s == true) {
            yes++;
        } else if (n_s == true) {
            no++;
        }
    }

    if (inc.length) {
        alert(inc.length + ' question(s) have not been answered:\n\n' + inc.join(', '));
    } else {
        top.location.href = o.action + "?" + YES + "=" + yes + "&" + NO + "=" + no;
    }

    return false;
}
