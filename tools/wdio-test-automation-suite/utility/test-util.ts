

export const IMPLICIT_WAIT_1_SECS = 1000;
export const IMPLICIT_WAIT_10_SECS = IMPLICIT_WAIT_1_SECS * 10;
export const IMPLICIT_WAIT_30_SECS = IMPLICIT_WAIT_10_SECS * 3;
export const IMPLICIT_WAIT_1_MIN = IMPLICIT_WAIT_30_SECS * 2;
export const IMPLICIT_WAIT_3_MIN = IMPLICIT_WAIT_1_MIN * 3;

export const waitForText = (selector: string, expectedText: string)=>{
    return async()=>{
        const el = await $(selector);
        if(!await el.isExisting()) return false;

        const text = await el.getText();
        return text.includes(expectedText);
    };
};