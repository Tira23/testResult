const obj = {
    from: 1,
    to: 5
}

obj[Symbol.iterator] = () => {
    let result = this.from;
    let last = this.to;

    return {
        next() {
            if (result <= last) {
                return {
                    done: false,
                    value: result++
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }
};

