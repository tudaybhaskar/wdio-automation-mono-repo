import allureReporter from "@wdio/allure-reporter";
import { waitForText } from "../../utility/test-util";

export class ShadowDomPage{

    private rootElement: ChainablePromiseElement;

    private constructor(rootElement: ChainablePromiseElement){
        this.rootElement = rootElement;
    };

    static async create(rootElement: ChainablePromiseElement = $('#content h1')){
        const page = new ShadowDomPage(rootElement);
        await expect(rootElement).toBeDisplayed();
        return page;
    };

    public assertHeader = async()=>{
        await allureReporter.step('Assert ShadowDomText', async()=>{
            await browser.waitUntil(waitForText('my-paragraph', 'some different text'));
            await expect($('my-paragraph')).toHaveText(expect.stringContaining('some different text!'));
        });
        return this;
    };
}