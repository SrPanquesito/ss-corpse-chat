module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/no-unescaped-entities": "off",
        "quotes": [2, "single", { "avoidEscape": true }]
    },
    "ignorePatterns": [
        "tailwind.config.js",
        "postcss.config.js",
        "node_modules/*",
        "build/*",
        "dist/*",
        ".husky/*"
    ]
}
