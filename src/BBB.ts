
class BBB {
    constructor() {
        throw new Error("BBB");
    }
    public say(msg: string): string {
        console.log(msg);
        return msg;
    }
}

module.exports = BBB;
