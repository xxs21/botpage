
/**
 * 设置cookie
 * @param name
 * @param value
 * @param time
 */
function setCookie(name,value,time) {
    $.cookie(name,value,{ expires: time ,path:'/'});
}

/**
 * 获取cookie
 * @param name
 */
function getCookie(name) {
    return $.cookie(name);
}
