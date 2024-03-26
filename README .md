#### README.md FILE For <CYPRESS_BDD_PPPT> Project #####

### STEP BY STEP PROJECT SETUP ###

Step 1: Setting up the Project
1. Create a new directory for your project and navigate into it.
2. Initialize a new npm project by running:
   
   npm init -y
   
3. Install Cypress and TypeScript dependencies:
   
   npm install cypress @cypress/instrument-cra typescript @cypress/webpack-preprocessor --save-dev
   npm install @types/cypress @types/node @types/jest --save-dev
   
4. Initialize a TypeScript configuration file by running:
   
   npx tsc --init
   
   
### Step 2: Configure Cypress with TypeScript
1. Update the "scripts" section in your package.json file to include the following:
   json
   "scripts": {
       "cypress:open": "cypress open",
       "cypress:run": "cypress run",
       "test": "npm run cypress:open"
   }
   
2. Create a tsconfig.json file in the root of your project with the following configuration:
   json
   {
       "compilerOptions": {
           "target": "es5",
           "lib": ["es6", "dom"],
           "types": ["cypress"]
       }
   }
   
3. Update your cypress/plugins/index.js file to include the TypeScript preprocessor:
   javascript
   module.exports = (on) => {
       on('file:preprocessor', require('@cypress/webpack-preprocessor'))
   }
   

### Step 3: Setting up BDD with Cucumber
1. Install Cucumber dependencies:
   
   npm install cucumber cypress-cucumber-preprocessor --save-dev
   
2. Update your cypress/plugins/index.js file to include the Cucumber preprocessor:
   javascript
   const cucumber = require('cypress-cucumber-preprocessor').default;

   module.exports = (on) => {
       on('file:preprocessor', cucumber());
   };
   
3. Create a cypress.json file in the root of your project and add the following configuration:
   json
   {
       "testFiles": "**/*.feature"
   }
   

### Step 4: Writing Your First BDD Test
1. Create files with feature extention in e2e folder  (e.g., example.feature) and write your Cucumber test scenarios.
2. Create a corresponding step definitions file (e.g., example.ts) in the e2e directory to define your step definitions in TypeScript.

### Step 5: Running Your Tests
1. Run Cypress in interactive mode to see and run your tests:
   
   npm run cypress:open
   
2. You can also run your tests in headless mode using:
   
   npm run cypress:run


   ### Project Structure

cypress-cucumber-typescript
│- CYPRESS_BDD_PPPT
├── cypress/
│   ├── fixtures/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── example.feature
│   │   │   └── step_definitions/
│   ├── plugins/
│   ├── support/
│   │   ├── commands.ts
│   │   └── index.ts
│   └── tsconfig.json
│   |
|   |
│   ├── pages/
│   │   ├── BasePage.ts
│   │   └── HomePage.ts
│   ├── tests/
│   │   └── example.spec.ts
│   └── utilities/
│       └── config.ts
│
├── package.json
└── tsconfig.json


#### GENERATING MULTIPLE HTML REPORTING #####

To generate multiple HTML reports in a Cypress TypeScript testing framework with Cucumber, you can follow the steps outlined below:

1. *Install necessary dependencies*: Make sure you have the required dependencies installed. You will likely need the following npm packages:
   - cypress: The main Cypress package for end-to-end testing.
   - cypress-cucumber-preprocessor: To use Cucumber with Cypress.
   - cypress-multi-reporters: To generate multiple HTML reports.

   Install them by running:
   bash
   npm install cypress cypress-cucumber-preprocessor cypress-multi-reporters
   

2. *Update cypress.json configuration file*: Update your cypress.json configuration file to include the Cucumber preprocessor and multi-reporter settings. Here is an example configuration:
   json
   {
     "reporter": "cypress-multi-reporters",
     "reporterOptions": {
       "configFile": "reporter-options.json"
     },
     "ignoreTestFiles": "*.js",
     "testFiles": "**/*.feature"
   }
   

3. *Create cypress/plugins/index.ts file*: Create a cypress/plugins/index.ts file to configure the Cypress plugins. Add the following code to set up the Cucumber preprocessor:
   typescript
   import cucumber from 'cypress-cucumber-preprocessor';
   import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

   module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
     on('file:preprocessor', cucumber());
     addMatchImageSnapshotPlugin(on, config);
   };
   

4. *Create cypress/support/index.ts file*: Create a cypress/support/index.ts file and add any necessary custom commands or configuration.

5. *Configure Cucumber options*: Create a cypress-cucumber-preprocessor configuration file, typically named cypress/plugins/index.ts, to configure the Cucumber options. Here is an example configuration:
   json
   {
     "nonGlobalStepDefinitions": true,
     "stepDefinitions": "cypress/e2e/**/*.steps.ts",
     "commonPath": "cypress/e2e"
   }
   

6. *Create Cucumber feature files*: Create your Cucumber feature files with scenarios and steps in the cypress/integration directory.

7. *Run the tests*: Run your Cypress tests with the following command:
   bash
   npx cypress run
   

8. *View the reports*: After running the tests, the multiple HTML reports should be generated based on the configuration you provided.

#### HOW TO RUN THE PROJECT ###

1. To run tests headlessly
   
Run script line 8 in package.json

2. To run tests headed

Run script line 9 package.json

3. To run tests with HTML Multi report
   
 a. Run script line 8 or 9 in package.json
 
 b. copy cucumber.json file in the pine
 
 c. paste the file in cucumber-json folder
 
 d. Run script line 10
 
 e. expand the report folder
 
 f. html report is in the feature file in the report folder

4. To run tests with tags
   
Run script line 11 in package.json

#### HOW TO SEE THE HTML MULTI REPORT ####

a. Run script line 8 or 9 in package.json

 b. copy cucumber.json file in the pine
 
 c. paste the file in cucumber-json folder
 
 d. Run script line 10
 
 e. expand the report folder
 
 f. html report is in the feature file in the report folder
