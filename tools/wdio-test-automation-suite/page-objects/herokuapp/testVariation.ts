
export class TestVariation{
    rootElement: ChainablePromiseElement;
    private constructor(rootElement: ChainablePromiseElement){
        this.rootElement = rootElement;
    }

    static async create(rootElement: ChainablePromiseElement = $('h3=A/B Test Variation 1')):Promise<TestVariation>{
        const page = new TestVariation(rootElement);
        await expect(rootElement).toHaveText('A/B Test Variation 1');
        return page;
    };

    get header(){
        return this.rootElement;
    }

    assertHeading = async()=>{
        await expect(this.header).toHaveText('A/B Test Variation 1');
    };
}