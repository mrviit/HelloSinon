
export class BBB {
    constructor() {
        throw new Error("BBB");
    }
    public say(msg: string): string {
        return msg;
    }
}

// module.exports = BBB;
