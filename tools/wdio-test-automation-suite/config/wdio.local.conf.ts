import mergeWith from 'lodash/mergeWith';
import { config as baseConfig } from './wdio.conf';
import { customizer } from './runner-helpers/config-customizer';
import { chromeCapabilities } from './runner-helpers/browser-capabilities';
export const config = mergeWith({
    maxinstances: 1,
    capabilities: [chromeCapabilities],

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
    ],
}, baseConfig, customizer);