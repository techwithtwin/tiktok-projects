/*
Js Template literals
- Also known as Backticks, String templates or template string

Use case:
- when you want to embend a quote or double quote inside a string.
e.g `His name is "TechWithTwn"`
- Multiline strings
e.g 
`A long time ago, there lived a man
called Mulongo and his wife Nambuya.
They had two children, Mukhwana and 
Namono. There was ...
`
- Interpolation
They allow embending variables to a string using 
a special syntax ${}

- Expression subsitution
They allow interpolation of expressions in strings.
Basically evaluating expressions

- Templating HTML
let title = "The Raid"
let users = ["Mad Dog", "Iko Uwais", "Eka Rahmadia", "Tegar Satrya"]

let html = `<h2>${title}</h2>`
users.forEach((user)=>{
    html += `<li>${user}</li>`
    })
*/
