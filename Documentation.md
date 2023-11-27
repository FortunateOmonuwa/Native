# This documentation is for the installation of eslint and prettier to a react-native expo-app

## **To Add Eslint**

### **1. First, you need to have eslint installed on your editor and then... Open the terminal of your IDE and enter:**

```
npm install eslint --save-dev
```

### Example Response:

```
added 67 packages, and audited 1281 packages in 32s

84 packages are looking for funding
  run `npm fund` for details

5 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```

##

### **2.**

```
npx eslint --init
```

### Example Response:

```
  You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing eslint-plugin-react@latest

added 73 packages, and audited 1354 packages in 20s

140 packages are looking for funding
  run `npm fund` for details


To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
Successfully created .eslintrc.js file in C:\Source\Mobile-Folder\My-First-App
```

##

### **3.**

```
npm install @react-native-community/eslint-confiq --save-dev
```

### Example Response:

```
  added 44 packages, and audited 1398 packages in 31s

150 packages are looking for funding
  run `npm fund` for details

5 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```

##

### **4. You can add some rules to your Eslint file (Optional)**

### Example:

```
rules: {
    semi: ["error", "never"],
    "comma-dangle": [2, "never"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": [
      "error",
      { function: true, classes: true, variable: false },
    ],
  },
```

##

### **5** Add lint to your project's package.json file

### Example

```
"scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint ."
  },
```

**It should be added in the script section**

##

### By now, eslint should be successfully added to your react-native project.

## **To Add Prettier**

### **1).** First you need to install prettier in your Editor and then open in your project, go to the terminal of your editor and enter:

```
npm install --save-dev --save-exact prettier

```

### Example Response

```
up to date, audited 1398 packages in 8s

150 packages are looking for funding
  run `npm fund` for details

5 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

##

### **2.)** Next, create the prettierrc.js extension in your project using:

```
touch prettierrc.js
```

### This command will create a prettierrc.js file in your project

##

### **3.)** Add some configurations into your prettierrc.js file

### Example

```
module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  traillingComma: "none",
  semi: false,
};


```

### By now, you should have prettier running perfectly on your project
