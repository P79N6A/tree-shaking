

async function print() {
    await setTimeout(() => {
        console.log(1)
    }, 1000);
}

export default {
    data: [],

    async loadavg() {
        print();
    }
}

@annotation
class MyClass { }

function annotation(target) {
   target.annotated = true;
}