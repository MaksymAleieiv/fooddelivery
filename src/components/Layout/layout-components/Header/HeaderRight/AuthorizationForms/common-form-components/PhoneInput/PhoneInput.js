import React from 'react'
import isPhoneNumber from '../../../../../../../../utils/isPhoneNumber'

function PhoneInput({phoneNumber, setPhoneNumber, phoneNumberError, setPhoneNumberError}) {
    const selectionStartRef = React.useRef(0)
    const phoneInputRef = React.useRef()

    function addSpaces(target){
        let { value, selectionStart } = target
        selectionStartRef.current = selectionStart
        if(value.length < 12){
            let newPhone = value.replaceAll(/[^0-9 ]/g, '');
            if((selectionStartRef.current === 3 && !!newPhone[2]) || (selectionStartRef.current === 8 && !!newPhone[7])){

                if((selectionStartRef.current === 3 && !!newPhone[3]) || (selectionStartRef.current === 8  && !!newPhone[8])){
                    console.log(newPhone)
                    selectionStartRef.current = selectionStartRef.current - 2
                }
                selectionStartRef.current = selectionStartRef.current + 1
            }
            newPhone = newPhone.replaceAll(/\s/g, '')
            let charArray = newPhone.split('')
            if(charArray[2] && charArray[2] !== ' ') charArray.splice(2, 0, ' ');
            if(charArray[7] && charArray[7] !== ' ') charArray.splice(7, 0, ' ')
            newPhone = charArray.join('')
            setPhoneNumber(newPhone)
        }
    }

    React.useEffect(() => {
        phoneInputRef.current.selectionStart = selectionStartRef.current
        phoneInputRef.current.selectionEnd = selectionStartRef.current
    }, [phoneNumber])

    const onFocus = () => {
        setPhoneNumberError('')
    }

    const onBlur = () => {
        if(!isPhoneNumber(phoneNumber)) setPhoneNumberError('Wrong phone format')
    }

    return (
        <>
            <div className='phone-input-box'>
                <div>+380 </div>
                <input placeholder='00 0000 000' ref={phoneInputRef} className={!!phoneNumberError ? 'error' : ''} value={phoneNumber} onChange={e => addSpaces(e.target)} onFocus={onFocus} onBlur={onBlur}/>
            </div>
            <span className='errorText'>{phoneNumberError}</span>
        </>
    )
}

export default PhoneInput
