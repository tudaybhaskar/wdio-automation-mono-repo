import { IMPLICIT_WAIT_10_SECS, IMPLICIT_WAIT_1_MIN } from "../../utility/test-util";

describe('IFrame Interactions', ()=>{
    
    it.skip('Switch to an iFrame using URL', async()=>{
        await browser.url('https://demo.automationtesting.in/Frames.html');
        await browser.waitUntil(async()=>{
            return await $('[href="#Single"]').waitForClickable({timeout: IMPLICIT_WAIT_1_MIN});
        }, {timeout: IMPLICIT_WAIT_1_MIN * 2, timeoutMsg: 'Single Iframe is not clickable'});

        const singleFrame = $('[href="#Single"]');
        await singleFrame.click();
        /**
             * By setting 'wdio:enforceWebDriverClassic': true, you are explicitly telling WebdriverIO:
             * "Do not use the new BiDi features. Only use the traditional, 'Classic' WebDriver protocol (W3C)."
             */
        /*
        try{
            await browser.switchFrame('https://demo.automationtesting.in/SingleFrame.html'); // This fails in classic
            flag = true;
        }catch(error){
            console.log('Error at URL:' , error);
        }
        */
        try{
            await browser.switchFrame(()=> document.URL.includes('Single'));
        }catch(error){
            console.log('Error at callback function:', error);
        } 
        console.log(await browser.execute(()=> [document.title, document.URL]));
    });

    it.skip('Switch to an IFrame and Enter text in input field', async()=>{
        await browser.url('https://demo.automationtesting.in/Frames.html');
        await browser.waitUntil(async()=>{
            return await $('[href="#Single"]').waitForClickable({timeout: IMPLICIT_WAIT_1_MIN});
        }, {timeout: IMPLICIT_WAIT_1_MIN * 2, timeoutMsg: 'Single Iframe is not clickable'});

        const singleFrame = $('[href="#Single"]');
        await singleFrame.click();

        try{
            // await browser.switchFrame('https://demo.automationtesting.in/SingleFrame.html');
            await browser.switchFrame(()=> document.URL.includes('Single'));
        }catch(error){
            console.log('Error at callback function:', error);
        }

        await $('input[type="text"]').setValue('Entered into IFrame');
        await browser.pause(IMPLICIT_WAIT_1_MIN);
        await expect($('input[type="text"]')).toHaveAttribute('value', 'Entered into IFrame');
    });

    it.skip('Switch to an IFrame using ID', async()=>{

        await browser.url('https://demo.automationtesting.in/Frames.html');
        await browser.waitUntil(async()=>{
            return await $('[href="#Single"]').waitForClickable({timeout: IMPLICIT_WAIT_1_MIN});
        }, {timeout: IMPLICIT_WAIT_1_MIN * 2, timeoutMsg: 'Single Iframe is not clickable'});

        const singleFrame = $('[href="#Single"]');
        await singleFrame.click();
        await browser.switchFrame($('#singleframe'));
        await $('input[type="text"]').setValue('Entered into IFrame');
        await browser.pause(IMPLICIT_WAIT_10_SECS);
        await expect($('input[type="text"]')).toHaveAttribute('value', 'Entered into IFrame');
    });

    it('Switch to Nested Frames', async()=>{

        await browser.url('https://demo.automationtesting.in/Frames.html');
        await browser.waitUntil(async()=>{
            return await $('[href="#Single"]').waitForClickable({timeout: IMPLICIT_WAIT_1_MIN});
        }, {timeout: IMPLICIT_WAIT_1_MIN * 2, timeoutMsg: 'Single Iframe is not clickable'});

        const nestedFramesLink = $('a=Iframe with in an Iframe');
        await nestedFramesLink.click();

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
    });
});