function foo (obj) {
    if (Array.isArray(obj)){
        return !obj.length
    } else {
        const recurse = Object.entries(obj)
        return foo(recurse)
    }
}
