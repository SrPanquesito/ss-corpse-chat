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
                "node": true,
                "jest": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/*.test.{js,jsx}"
            ],
            "parserOptions": {
                "sourceType": "module"
            },
            "plugins": ["jest"]
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
        "jest.config.js",
        "node_modules/*",
        "build/*",
        "dist/*",
        ".husky/*",
        "coverage/*"
    ]
}
