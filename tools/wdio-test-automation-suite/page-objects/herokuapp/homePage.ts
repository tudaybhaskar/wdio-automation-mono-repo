import { TestVariation } from "./testVariation";
import allureReporter from '@wdio/allure-reporter';

export class HomePage{
    rootElement: ChainablePromiseElement;

    private constructor(rootElement: ChainablePromiseElement){
        this.rootElement = rootElement;
    };

    static async create(rootElement: ChainablePromiseElement = $('#content')): Promise<HomePage>{
        const page = new HomePage(rootElement);
        await expect(rootElement.$('h1')).toHaveText('Welcome to the-internet');
        return page;
    }

    get splitTestingLink(){
        return this.rootElement.$('a=A/B Testing');
    }

    clickOnSplitTesting = async()=>{
        await allureReporter.step('click on Split Testing link', async()=>{
            await this.splitTestingLink.click();
        });
        return TestVariation.create();
    };

    

}