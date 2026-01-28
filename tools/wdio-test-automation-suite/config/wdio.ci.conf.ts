
import { IMPLICIT_WAIT_1_MIN } from '../utility/test-util';
import { customizer } from './runner-helpers/config-customizer';
import {config as baseConfig } from './wdio.conf';
import mergeWith from 'lodash/mergeWith';
import type { Options } from '@wdio/types';
import { ciChromeCapabilities } from './runner-helpers/browser-capabilities';

export const config : Options.Testrunner = mergeWith({
    capabilities: [ ciChromeCapabilities],

    reporters:[
        [
            'allure',
            {
                outputDir: 'wdio/allure/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                addConsoleLogs:true,
            }
        ],
        [
            'junit',
            {
                outputDir: 'wdio/junit/junit-results',
                outputFileFormat: function(options){
                    return `results-${options.cid}.xml`;
                }
            }
        ]
    ],
    mochaOpts:{
        retries: 1,
        timeout: IMPLICIT_WAIT_1_MIN * 20,
    }

}, baseConfig, customizer);