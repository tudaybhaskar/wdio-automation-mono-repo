import { HomePage } from "../../../page-objects/herokuapp/homePage";

describe('Home Page validations', ()=>{

    it('Validation home page header', async()=>{

        const homePage = HomePage.create();
        const splitTestingPage = (await homePage).clickOnSplitTesting();
        (await splitTestingPage).assertHeading();
    });
});