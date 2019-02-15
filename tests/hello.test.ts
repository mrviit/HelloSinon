
import { AAA } from "../src/AAA";

import sinon from "sinon";

describe("Hello Sinon", () => {

    let a: any;
    beforeEach(() => {
        // How to isolate new AAA from BBB?
        a = new AAA();  // error because of BBB::constructor throws an error
    });

    describe("#hello", () => {
        it("#hello", async () => {
            sinon.spy(a, "hello");

            a.hello();

            sinon.assert.calledOnce(a.hello);

            // how to verify that super.say has been called once with string "Hello!"?
        });
    });
});
