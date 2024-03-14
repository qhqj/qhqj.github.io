
function getCookieValue(cookieName) {
    // 返回指定名称的cookie,如果没有找到，则返回Alice
    const cookies = document.cookie.split(';');

    // 遍历所有的Cookie
    for (let cookie of cookies) {
        // 分割每个Cookie成键值对
        const parts = cookie.split('=');
        const name = parts[0].trim(); // 获取Cookie的名称
        if (name === cookieName) { // 如果找到了指定的Cookie
            // 返回Cookie的值
            return decodeURIComponent(parts[1]);
        }
    }
    return "Alice";
}
