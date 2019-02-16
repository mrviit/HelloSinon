
// import { BBB } from "./BBB";
// tslint:disable-next-line:no-var-requires
const BB = require("../src/BBB");

class AAA
    extends BB {
    public hello(): string {
        console.log(super.say);
        console.log(this.prototype);
        return super.say("Hello!");
    }
}
module.exports = AAA;
