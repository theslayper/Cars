const deltaS1 = document.getElementById('s1');
const deltaS2 = document.getElementById('s2');
const v1 = document.getElementById('v1');
const v2 = document.getElementById('v2');
const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const btn = document.getElementById('btn');
const res = document.getElementById('res');


const countTime = (deltaS1, deltaS2, v1, v2, l1, l2) => {
    if (v1 === v2 || v1 < v2) return 'Обгон не произойдет';
    const D = (deltaS1 + l2 + deltaS2 + l1) / 1000;
    const V = v1 - v2;
    return D * 3600 / V;
}

btn.addEventListener('click',() => {
    res.innerText = '';
    res.innerText = countTime(+deltaS1.value, +deltaS2.value, +v1.value, +v2.value, +l1.value, +l2.value);
});