
import { BBB } from "./BBB";

export class AAA
    extends BBB {
    public hello(): string {
        return super.say("Hello!");
    }
}
// module.exports = AAA;
