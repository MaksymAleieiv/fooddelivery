export default function isPhoneNumber(phone) {
    let p = phone.replaceAll(' ', '')
    return /[0-9{9}]/.test(p) && p.length === 9
}
