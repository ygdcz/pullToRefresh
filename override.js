export const rules = {
    "dot-notation": "off",
    "default-case-last": "off",
    "no-await-in-loop": "off",
    "no-template-curly-in-string": "warn",
    "class-methods-use-this": "off",
    "no-cond-assign": [
        "error",
        "except-parens"
    ],
    "no-constant-condition": [
        "error",
        {
            "checkLoops": false
        }
    ],
    "require-atomic-updates": "off",
    "curly": [
        "error",
        "all"
    ],
    "eqeqeq": [
        "error",
        "always",
        {
            "null": "always"
        }
    ],
    "no-bitwise": "warn",
    "no-empty-function": [
        "error",
        {
            "allow": []
        }
    ],
    "no-param-reassign": "warn",
    "no-useless-call": "error",
    "vars-on-top": "off",
    "no-unused-vars": "off",
    "array-bracket-newline": [
        "error",
        {
            "multiline": true
        }
    ],
    "array-element-newline": [
        "error",
        "consistent"
    ],
    "comma-dangle": [
        "error",
        "only-multiline"
    ],
    "consistent-this": "off",
    "func-style": [
        "error",
        "expression"
    ],
    "func-names": "error",
    "function-paren-newline": [
        "error",
        "consistent"
    ],
    "function-call-argument-newline": [
        "error",
        "consistent"
    ],
    "jsx-quotes": "error",
    "max-depth": [
        "error",
        5
    ],
    "max-len": [
        "error",
        140,
        4,
        {
            "ignoreUrls": true,
            "ignoreComments": false,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }
    ],
    "max-lines": [
        "warn",
        {
            "max": 1000,
            "skipBlankLines": true,
            "skipComments": true
        }
    ],
    "max-lines-per-function": [
        "warn",
        {
            "max": 300,
            "skipBlankLines": true,
            "skipComments": true,
            "IIFEs": true
        }
    ],
    "max-nested-callbacks": [
        "error",
        3
    ],
    "max-statements-per-line": [
        "error",
        {
            "max": 1
        }
    ],
    "multiline-ternary": [
        "error",
        "always-multiline"
    ],
    "no-mixed-operators": [
        "error",
        {}
    ],
    "no-multiple-empty-lines": [
        "error",
        {
            "max": 3,
            "maxBOF": 0,
            "maxEOF": 1
        }
    ],
    "no-plusplus": "off",
    "object-curly-newline": [
        "error",
        {
            "consistent": true
        }
    ],
    "object-curly-spacing": [
        "error",
        "never"
    ],
    "@typescript-eslint/dot-notation": [
        "error"
    ],
    "@typescript-eslint/array-type": [
        "error",
        {
            "default": "array"
        }
    ],
    "@typescript-eslint/ban-types": [
        "error",
        {
            "types": {
                "Array": "use []",
                "Object": "use {}",
                "String": {
                    "message": "use string",
                    "fixWith": "string"
                },
                "Number": {
                    "message": "use number",
                    "fixWith": "number"
                },
                "Boolean": {
                    "message": "use boolean",
                    "fixWith": "boolean"
                }
            }
        }
    ],
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
        "error",
        "1tbs",
        {
            "allowSingleLine": true
        }
    ],
    "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
            "assertionStyle": "as",
            "objectLiteralTypeAssertions": "allow-as-parameter"
        }
    ],
    "@typescript-eslint/consistent-type-definitions": [
        "error",
        "interface"
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": [
        "error",
        "never"
    ],
    "indent": "off",
    "@typescript-eslint/indent": [
        "error",
        4,
        {
            "SwitchCase": 1,
            "ignoredNodes": [
                "TSTypeAliasDeclaration TSIntersectionType",
                "TSTypeAliasDeclaration TSUnionType"
            ]
        }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-explicit-any": [
        "warn",
        {
            "fixToUnknown": false,
            "ignoreRestArgs": true
        }
    ],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": [
        "error",
        "all",
        {
            "ignoreJSX": "multi-line",
            "nestedBinaryExpressions": false,
            "enforceForArrowConditionals": false
        }
    ],
    "@typescript-eslint/no-extraneous-class": [
        "error",
        {
            "allowConstructorOnly": false,
            "allowEmpty": false,
            "allowStaticOnly": false
        }
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/promise-function-async": [
        "error",
        {
            "allowedPromiseNames": [],
            "allowAny": true,
            "checkArrowFunctions": true,
            "checkFunctionDeclarations": true,
            "checkFunctionExpressions": true,
            "checkMethodDeclarations": true
        }
    ],
    "quotes": "off",
    "@typescript-eslint/quotes": [
        "error",
        "double",
        {
            "avoidEscape": false
        }
    ],
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "semi": "off",
    "@typescript-eslint/semi": [
        "error",
        "always"
    ],
    "@typescript-eslint/strict-boolean-expressions": [
        "error",
    ],
    "@typescript-eslint/unified-signatures": "error",
    "consistent-return": "off",
    "import/extensions": [
        "error",
        "ignorePackages",
        {
            js: "never",
            mjs: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
        }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
        "error",
        {
            functions: true,
            classes: true,
            variables: true,
            enums: true,
            typedefs: true,
            ignoreTypeReferences: true,
        }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-void": [
        "error",
        {
            allowAsStatement: true,
        },
    ],
    "react/require-default-props": "off",
};
