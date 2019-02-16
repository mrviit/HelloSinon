
// import { AAA } from "../src/AAA";
// import { BBB } from "../src/BBB";

// tslint:disable-next-line:no-var-requires
const AA = require("../src/AAA");

import sinon from "sinon";

describe("Hello Sinon", () => {

    let a: any;
    beforeEach(() => {

        
        // var stub = sinon.stub().throws();
        // How to isolate new AAA from BBB?
        // a = new AA();  // error because of BBB::constructor throws an error
    });

    describe("#hello", () => {
        it("#hello", async () => {
            const stub = sinon.stub().callsFake(() => { });
            Object.setPrototypeOf(AA, stub);
            a = new AA();

            sinon.spy(a, "hello");

            a.hello();

            sinon.assert.calledOnce(a.hello);
            sinon.assert.calledOnce(stub);

            // how to verify that super.say has been called once with string "Hello!"?
        });
    });
});
