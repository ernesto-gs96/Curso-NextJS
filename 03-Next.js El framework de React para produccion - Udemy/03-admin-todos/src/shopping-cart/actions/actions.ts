import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = ():{ [ id:string ]:number } => {
    
    let cookieCart = {};
    if( hasCookie('cart') ){
        cookieCart = JSON.parse( getCookie('cart') as string ?? '{}' );
    }
    return cookieCart;
}

export const addProductToCart = ( id:string ) => {
    const cookieCart = getCookieCart();
    if( cookieCart[id] ){
        cookieCart[id] = cookieCart[id] + 1;
    } else {
        cookieCart[id] = 1;
    }
    setCookie('cart', JSON.stringify(cookieCart));
}

export const removeProductToCart = ( id:string ) => {
    const cookieCart = getCookieCart();
    delete cookieCart[id];
    setCookie('cart', JSON.stringify(cookieCart));
}