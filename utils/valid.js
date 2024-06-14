/**
 * 检测邮箱
 * @param email
 * @returns {boolean}
 */
export function IsEmail(rule, value, callback) {
    //邮箱 通用正则
    if (value != '' && value != null) {
        let emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!emailReg.test(value)) {
            callback(new Error('请输入正确的邮箱地址'));
        } else {
            callback();
        }
    } else {
        callback();
    }
}

//验证密码
export function validatePwd(rule, value, callback) {
    const reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,16}$/; // 首字母大写+数字+小写字母+特殊符号
    if (value == '' || value == undefined || value == null) {
        callback();
    } else {
        if (reg.test(value)) {
            callback();
        } else {
            callback(new Error('字母+数字+特殊符号的密码8~16位'));
        }
    }
}
