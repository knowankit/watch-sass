const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')

const args = process.argv.slice(2)

if (args.length === 0) {
    throw new Error('No sass file to compile!')
}
const sassFile = path.basename(args[0])
console.log(sassFile)
// if (/^_/.test(sassFile)) {
//     // compile all files that contain that file
//     const regex = new RegExp(sassFile, 's')
//     const files = glob.sync(['src/sass/**/*.scss'])
//     files.forEach(f => {
//         const fileName = path.basename(f)
//         if (!/^_/.test(fileName)) {
//             const contents = fs.readFileSync(f, 'utf8')
//             const matches = contents.match(regex)
//             if (matches) {
//                 matchedFiles.push(f)
//             }
//         }
//     })
// }

exec(`node node_modules/node-sass/bin/node-sass --source-map true --importer node_modules/node-sass-tilde-importer --output ./tmp/css sass/"${sassFile}"`)
