const fs = require("fs-extra")
const ejs = require("ejs")
const argv = require("yargs-parser")(process.argv.slice(2))
const path = require("path")
const { generate_sprite_width_styles } = require('./iconStyle')
// const generate_sprite_width_styles = () => {
//     console.log('hello')
// }

const main = () => {
    // 1. Welcome log
    console.log("Generating Icons template...")
    try {
        // 2. Destructure args from argv and set _ array to variable "data"
        const { _: leftovers, out, fn } = argv

        // 3. Add the args we want to use in the .ejs template
        // to an object

        let iconsData = generate_sprite_width_styles();

        const data = {
            fn,
            leftovers,
            ...iconsData
        }

        // 4. Create an empty options object to pass to the
        // ejs.renderFile function (we are keeping defaults)
        const options = {}

        // 5. Check that the required flags are in
        if (!out) {
            console.error("--out")
            process.exit(1)
        }

        // 6. Set our ejs template file, nominating it to read the
        // sibling "main.ejs" file sibling in the same directory
        const filename = path.join(__dirname, "./genIcon.ejs")

        // 7. Run the renderFile, passing the required args
        // as outlined on the package docs.
        ejs.renderFile(filename, data, options, function (err, str) {
            // str => Rendered HTML string
            if (err) {
                console.error(err)
            }

            // 8. Write file to --out path
            const outputFile = path.join(process.cwd(), out)
            fs.ensureFileSync(outputFile)
            fs.outputFileSync(outputFile, str)
        })
    } catch (err) {
        console.error(err)
    }
}

main()