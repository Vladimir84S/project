setTimeout(() => console.log('timeout'));

Promise.resolve().then(() => console.log('promise'));

queueMicrotask(() => console.log('wow'));

Promise.resolve().then(() => console.log('promise_2'));

console.log('code');

// () => {}
// microtasks: then/cath/finally/awayit
// render
// () => {}
// microtasks: then/cath/finally/awayit
// render
// () => {}
