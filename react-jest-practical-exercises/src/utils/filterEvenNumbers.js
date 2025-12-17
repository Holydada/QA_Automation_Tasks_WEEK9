export function filterEvenNumbers(arr){ if(!Array.isArray(arr)) throw new Error('Expected an array'); return arr.filter(n=> typeof n==='number' && n%2===0); }
