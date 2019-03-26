import tab from './components/tab';

function v6Engine() {
    console.log(1);
}


function v8Engine() {
    const a = 1;
    return a;

    let n = 2;
    return n;
}

v8Engine();

class Person {
    sayHello() {
        console.log('hello');
    }

    hello = () => {
        return 1
    }
}