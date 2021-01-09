
const greetings = ['Hi', 'Hello', "What's up"];
const people = ['Jim', 'George', 'Kelvin'];
const predicates = ["how's the wife?", "how's the kids?", "please give me back the sugar you keep taking from my house this is the tenth time I've had to ask you this has got to stop."]

const message = {
    greetings: greetings,
    people: people,
    predicates: predicates
};

const getRandString = (arr) => arr[arr.length * Math.random() << 0];

const mixedMessage = () => {
    console.log('mixed');
};

mixedMessage();
console.log(getRandString(greetings));