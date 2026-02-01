import allureReporter from "@wdio/allure-reporter";
import { HomePage } from "../../../page-objects/herokuapp/homePage";

describe('Home Page validations', ()=>{

    it.skip('Validation home page header', async()=>{
        await allureReporter.addDescription('Validation home page header');
        await allureReporter.addOwner('Herokuapp Website');
        await allureReporter.addSeverity('Critical');

        const homePage = HomePage.create();
        const splitTestingPage = (await homePage).clickOnSplitTesting();
        (await splitTestingPage).assertHeading();
    });

    it.only('Validate ShadowDom header & Text', async()=>{
        await allureReporter.addDescription('Validate ShadowDom header');
        await allureReporter.addOwner('Herokuapp Website');
        await allureReporter.addSeverity('Critical');

        const homePage = await HomePage.create();
        const shadowDomPage = await homePage.clickOnShadowDom();
        await shadowDomPage.assertHeader();
    });
});