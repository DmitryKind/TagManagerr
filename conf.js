exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: './specs/tag-manager.spec.js',
    multiCapabilities: [{
        'browserName': 'chrome'
    }],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000
    },
    allScriptsTimeout: 60000,
    onPrepare: function () {
        require('jasmine2-custom-message');
        browser.driver.manage().window().maximize();
        var JasmineConsoleReporter = require('jasmine-console-reporter');
        var reporter = new JasmineConsoleReporter({
            colors: true,           // (0|false)|(1|true)|2
            cleanStack: 3,       // (0|false)|(1|true)|2|3
            verbosity: 4,        // (0|false)|1|2|(3|true)|4
            listStyle: 'indent', // "flat"|"indent"      // // getText())
            activity: false
        });
        jasmine.getEnv().addReporter(reporter);
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'specs',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
            displayFailuresSummary: true, // display summary of all failures after execution
            displayPendingSummary: true,  // display summary of all pending specs after execution
            displaySuccessfulSpec: true,  // display each successful spec
            displayFailedSpec: true,      // display each failed spec
            displayPendingSpec: false,    // display each pending spec
            displaySpecDuration: true,   // display each spec duration
            displaySuiteNumber: true,    // display each suite number (hierarchical)
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '+ ',
                failure: '- ',
                pending: '~ '
            },
            customProcessors: []
        }));
    }
};