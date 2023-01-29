/** @type {import('eslint').Linter.Config} */
module.exports = {
    plugins: [
        "@typescript-eslint",
        "solid",
        //"jsx-a11y"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:solid/typescript",
        "plugin:astro/recommended",
        //"plugin:jsx-a11y/strict",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: ".",
        project: ["tsconfig.json"],
    },
    root: true,

    overrides: [
        {
            // Config for `.astro` files
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
        },
    ],
    // (jsx-a11y) To enable your custom components to be checked as
    // DOM elements, you can set global settings in your configuration file by
    // mapping each custom component name to a DOM element type.
    // settings: {
    // 	"jsx-a11y": {
    // 		components: {
    // 			CityInput: "input",
    // 			CustomButton: "button",
    // 			MyButton: "button",
    // 			RoundButton: "button",
    // 		},
    // 	},
    // },
};
