import isArray from 'lodash/isArray';

export const customizer = (
    objValue: string | string[], 
    srcValue: string | string[]
): string | string[] => {
    if( isArray(objValue)){
        return objValue.concat(srcValue);
    }
    return objValue;
};