import { useEffect } from 'react';
import {SEND_MAIL_FAILED, SEND_MAIL_SUCCESS} from '../constants/GeneralMessages';
import emailjs, { init } from 'emailjs-com';

const useMail = ( apiKey ) => {

    useEffect(() => {
        init(apiKey.USER_ID);
    }, [])

    const sendEmail = (e) => {
        emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
            .then((result) => {
                alert(SEND_MAIL_SUCCESS, result.text);
            },
                (error) => {
                    alert(SEND_MAIL_FAILED, error.text);
                }
            )
    }
    return { sendEmail };
}

export default useMail;
