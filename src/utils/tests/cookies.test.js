import { setCookie, getCookie, deleteCookie } from '../cookies';

describe('src/utils/cookies.js', () => {
    let cname = 'cookie_name';
    let cvalue = 'cookie_value';

    beforeEach(() => {
        // Clear all cookies before each test
        document.cookie.split(';').forEach((c) => {
            document.cookie = c
                .replace(/^ +/, '')
                .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
        });
    });

    test('setCookie is defined', () => {
        setCookie(cname, cvalue, 1);
        expect(setCookie).toBeDefined();
    });

    test('getCookie is defined', () => {
        setCookie(cname, cvalue, 1);
        const cookie = getCookie(cname);
        expect(getCookie).toBeDefined();
        expect(cookie).toBe('cookie_value');
    });

    test('getCookie returns empty string when cookie does not exist', () => {
        const cookie = getCookie('non_existent_cookie');
        expect(cookie).toBe('');
    });

    test('getCookie returns correct value when multiple cookies are set', () => {
        setCookie('cookie1', 'value1', 1);
        setCookie('cookie2', 'value2', 1);
        const cookie = getCookie('cookie2');
        expect(cookie).toBe('value2');
    });

    test('deleteCookie is defined', () => {
        setCookie(cname, cvalue, 1);
        deleteCookie(cname);
        const cookie = getCookie(cname);
        expect(deleteCookie).toBeDefined();
        expect(cookie).toBe('');
    });
});