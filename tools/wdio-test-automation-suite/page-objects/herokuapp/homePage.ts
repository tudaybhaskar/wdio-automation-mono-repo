import { TestVariation } from "./testVariation";

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
        await this.splitTestingLink.click();
        return TestVariation.create();
    };

    

}