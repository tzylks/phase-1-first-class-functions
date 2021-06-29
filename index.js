function receivesAFunction (spy) {
    return spy();
}

function returnsANamedFunction () {
    return function hello () {
        return 'hello'
    };
}

function returnsAnAnonymousFunction () {
    return function(){return 'Hello'}
}