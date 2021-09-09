# Carnival

# Deliverables

The test cases generated in phase A and the test results of phase B and Bugs report are located in the folder `Functional tests`.

Test results report from automation: Placed on `cypress/multiple-reporter`.

Video of test execution: Placed on `cypress/videos`.

## Configuration

To install the necessary dependencies of this project it is necessary to have nodejs and npm.

If you have mac use this commands:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
 brew install node
 npm install
```

When the installation is complete you can run these commands to execute the tests:

```
npm run cypress:test
// Headless browser
```

```
npm run cypress:open
// Cypress UI
```

If you use the graphical interface, you must click on the .feature file. It is also possible to change the browser to chrome, firefox or electron.