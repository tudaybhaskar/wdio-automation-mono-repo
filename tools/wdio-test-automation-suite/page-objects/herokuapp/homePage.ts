import { IMPLICIT_WAIT_30_SECS } from "../../utility/test-util";
import { ShadowDomPage } from "./shadowDomPage";
import { TestVariation } from "./testVariation";
import allureReporter from '@wdio/allure-reporter';

export class HomePage{
    rootElement: ChainablePromiseElement;

    private constructor(rootElement: ChainablePromiseElement){
        this.rootElement = rootElement;
    };

    static async create(rootElement: ChainablePromiseElement = $('#content')): Promise<HomePage>{
        const page = new HomePage(rootElement);
        await browser.setTimeout({'pageLoad': IMPLICIT_WAIT_30_SECS * 3});
        await expect(rootElement.$('h1')).toHaveText('Welcome to the-internet');
        return page;
    }

    get splitTestingLink(){
        return this.rootElement.$('a=A/B Testing');
    }

    get shadowDomLink(){
        return this.rootElement.$('a=Shadow DOM');
    }

    clickOnSplitTesting = async()=>{
        await allureReporter.step('click on Split Testing link', async()=>{
            await this.splitTestingLink.click();
        });
        return TestVariation.create();
    };

    clickOnShadowDom = async()=>{
        await allureReporter.step('Click on the Shadow DOM', async()=>{
            await this.shadowDomLink.click();
        });
        return ShadowDomPage.create();
    };

    

}