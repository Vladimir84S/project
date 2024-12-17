'use stricyt';

const persone = {
  name: 'Alex',
  tel: '+744444444',
  parents: {
    mom: 'Olga',
    dad: 'Mike'
  }
};

// console.log(JSON.parse(JSON.stringify(person)));
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);