
// import { AAA } from "../src/AAA";
// import { BBB } from "../src/BBB";

// tslint:disable-next-line:no-var-requires
const AA = require("../src/AAA");
const BB = require("../src/BBB");

import sinon from "sinon";

describe("Hello Sinon", () => {
    describe("#hello", () => {
        it("#hello", async () => {
            const stub = sinon.stub().callsFake(() => { });
            Object.setPrototypeOf(AA, stub);
            let a = new AA();
            const say = sinon.spy(a.__proto__.__proto__, "say");

            sinon.spy(a, "hello");

            a.hello();
            a.hello();

            sinon.assert.calledTwice(a.hello);
            sinon.assert.calledOnce(stub);
            sinon.assert.calledTwice(say);
        });
    });
});
