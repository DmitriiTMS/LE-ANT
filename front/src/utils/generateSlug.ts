/* eslint-disable no-useless-escape */
export const generateSlug = (input: string) => {
    if (!input) return ''; 

    return input
        .toLowerCase() 
        .replace(/\s+/g, '-') 
        .replace(/[^\w\-]+/g, '') 
        .replace(/\-\-+/g, '-') 
        .replace(/^-+/, '') 
        .replace(/-+$/, ''); 
}