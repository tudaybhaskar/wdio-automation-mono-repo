import allureReporter from '@wdio/allure-reporter';
export class FramesPage{

    rootElement: ChainablePromiseElement;
    private constructor(rootElement: ChainablePromiseElement){
        this.rootElement = rootElement;
    }

    static async create(rootElement: ChainablePromiseElement = $('[href="#Single"]')){
        const page = new FramesPage(rootElement);
        await expect(rootElement).toBeEnabled();
        return page;
    }

    /*
    await browser.switchFrame(()=> document.URL.includes('MultipleFrames'));
        await expect($('h5')).toHaveText('Nested iFrames');
        console.log('Multiple Frames');

        await browser.switchFrame(()=> document.URL.includes('SingleFrame'));
        await browser.waitUntil(async()=>{
            return await $('input[type="text"]').waitForEnabled();
        },{timeout: IMPLICIT_WAIT_1_MIN});
        await $('input[type="text"]').setValue('Entered into IFrame');
        await browser.pause(IMPLICIT_WAIT_10_SECS);
        await expect($('h5')).toHaveText('iFrame Demo');
    */

    get nestedFramesLink(){
        return $('a=Iframe with in an Iframe');
    }

    get singleFrameLink(){
        return $('[href="#Single"]');
    }

    async clickOnSingleFrame(){
        await allureReporter.step('Click on Single Frame link', async()=>{
            await this.singleFrameLink.click();
        });
        return this;
    };

    async clickOnNestedFrames(){
        await allureReporter.step('Click on Nested Frames link', async()=>{
            await this.nestedFramesLink.click();
        });
        return this;
    }

    async switchToSingleFrame(url: string = 'Single'){
        await allureReporter.step('Switch to Single frame', async()=>{
            await this.switchToSingleFrameUrl(url);
        });
        return this;
    }

    private async switchToSingleFrameUrl(url: string | RegExp){
        await allureReporter.step(`Switch to a frame based on url: ${url}`, async()=>{
            await browser.switchFrame('SingleFrame');
        });
    }

    async switchToParentFrame(){
        await allureReporter.step('Switch back to parent frame', async()=>{
            await browser.switchFrame(null);
        });
        return this;
    }

    async assertFrameSwitchSingleFrame(){
        await allureReporter.step('Assert Frame is switched to Single Frame', async()=>{
            await expect($('h5')).toHaveText('iFrame Demo');
        });
        return this;
    }
}