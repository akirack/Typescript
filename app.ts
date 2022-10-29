class Validator{
    data : string | number | boolean | undefined;

    constructor(data : any) {
        this.data = data;
    }

}

class StringValidator extends Validator{
    data : string;

    constructor(data : string) {
        try {
            super(data);
            this.data = data;
        } catch {
            throw new Error("O tipo está errado");
        }
    }
}

class NumberValidator extends Validator{
    data : number;

    constructor(data : number) {
        try {
            super(data);
            this.data = data;
        } catch {
            throw new Error("O tipo está errado");
        }
    }
}

class BoolenValidator extends Validator{
    data : boolean;

    constructor(data : boolean) {
        try {
            super(data);
            this.data = data;
        } catch {
            throw new Error("O tipo está errado");
        }
    }
}
