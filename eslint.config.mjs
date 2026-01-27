import myLintRules from "./tools/eslint-rules/index.js";

export default [
    ...myLintRules, // Spread the array of rules
    {
        // Tell ESLint which files to actually check
        files: ["**/*.ts", "**/*.js"],
        ignores: ["**/node_modules/**", "**/dist/**"]
    }
]