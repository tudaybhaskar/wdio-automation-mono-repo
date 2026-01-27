import type { Options } from '@wdio/types';
import { IMPLICIT_WAIT_1_MIN, IMPLICIT_WAIT_3_MIN } from '../utility/test-util';
import { envConfig } from './env-config';

export const config: Options.Testrunner = {
    baseUrl: envConfig.baseUrl,
    tsConfigPath: './tsconfig.path',
    specs: ['../__tests__/**/*.test.ts'],
    logLevel: 'error',
    bail: 0,
    waitforTimeout: IMPLICIT_WAIT_1_MIN ,
    waitforInterval: IMPLICIT_WAIT_1_MIN,

    framework: 'mocha',
    mochaOpts:{
        'ui': 'bdd',
        'timeout': IMPLICIT_WAIT_3_MIN,
        'retries': 0
    },

    specFileRetries: 0,
    services: ['shared-store'],

    reporters: [
        ['spec',{
            showPreface: false,
            addConsoleLogs: true,
            realtimeReporting: false,
            onlyFailures: true
        }],
    ],

    async beforeTest(test){
        console.log('-- Wdio.config -- Test title: ', test.title);
        await browser.url(envConfig.baseUrl);
    },

    async afterTest(test, {passed }){
        console.log('Execution completed for ', test.title);
        if( passed){
            await browser.takeScreenshot();
        }else{
            await browser.takeScreenshot();
        }
    }
};