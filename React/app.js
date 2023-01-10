const element = <h1>Hello, world!</h1>;

//Detta är JSX. En blandning mellan markup (HTML) och logik (JS).

//Element = minsta beståndsdelen av en react app.

const name = 'Pablo Picasso';
const element2 = <h1>Hello, {name} </h1>; 

//vi deklarerar en variabel som vi döper till 'name'. Sedan lägger vi in JS genom att skriva den mellan måsvingar. 

function formatName(user) {
    return.user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Pablo',
    lastName: 'Picasso'
};

const element3 = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
)

//JS functions mellan måsvingar i element (html) går bra!

const image = <img src= {user.profilePic}></img>;

function getGreeting(user) {
    if (user){
        return <h1>Hello, {formatName(user)!}</h1>;
    }
    return <h1>Hello, Stranger!</h1>;
}

//JSX inuti if statment, mellan måsvingar. 