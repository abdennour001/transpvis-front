const fs = require("fs");
const { component, barrel } = require("./component_templates.js");

// grab component name from terminal argument
const type = process.argv[2];
const name = process.argv[3];

console.log(`\n🏗  Creating component ${name} ...\n`);

if (!name) throw new Error("You must include a component name.");

const dir = `./src/components/${type}/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir))
    throw new Error("A component with that name already exists.");

console.log(`   📗 Creating component folder in ${dir}\n`);
// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
    if (err) throw err;
}

// component.jsx
console.log(`   ✏️  Creating ${name}.jsx file\n`);
fs.writeFile(`${dir}/${name}.jsx`, component(name), writeFileErrorHandler);
// component.scss
console.log(`   ✏️  Creating _${name.toLocaleLowerCase()}.scss file\n`);
fs.writeFile(
    `${dir}/_${name.toLocaleLowerCase()}.scss`,
    "",
    writeFileErrorHandler
);
// index.js
console.log(`   ✏️  Creating index.js file\n`);
fs.writeFile(`${dir}/index.js`, barrel(name), writeFileErrorHandler);

console.log("✅ 🎉 Done\n");
