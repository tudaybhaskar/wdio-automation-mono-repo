import allureReporter from "@wdio/allure-reporter";
import { HomePage } from "../../../page-objects/herokuapp/homePage";

describe('Home Page validations', ()=>{

    it('Validation home page header', async()=>{
        await allureReporter.addDescription('Validation home page header');
        await allureReporter.addOwner('Herokuapp Website');
        await allureReporter.addSeverity('Critical');

        const homePage = HomePage.create();
        const splitTestingPage = (await homePage).clickOnSplitTesting();
        (await splitTestingPage).assertHeading();
    });
});