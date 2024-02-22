/* Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */


 const names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette"]

function show_magicians(magicians: string[]): void {
    const names = magicians.map(magician => {
        console.log(magician)
    })
}

show_magicians(names)

// ---------------------------------------------------
// The Great Magician’s names

// Define a function called make_great that modifies the array of magicians

function make_great(magicians: string[]): string[]{
    const names = magicians.map( magician => "The Great " + magician)
    return names;
}

// Example

const greatmagicians:string [] = make_great(names);
console.log(greatmagicians)