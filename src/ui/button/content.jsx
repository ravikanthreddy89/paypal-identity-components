/* @flow */
/** @jsx node */
/** @jsxFrag Fragment */

import { node, Fragment, type ChildType } from 'jsx-pragmatic/src';
import { LANG } from '@paypal/sdk-constants/src';
import { PayPalLogo, LOGO_COLOR } from '@paypal/sdk-logos/src';

import { Text } from '../text';

type ButtonContentMap = {
    [ $Values<typeof LANG> ] : {|
        PoweredBy : ({| logoColor : $Values<typeof LOGO_COLOR> |}) => ChildType
    |}
};

export const buttonContent : ButtonContentMap = {
    en: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Powered by </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    fr: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Optimisé par </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    es: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Desarrollado por </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    zh: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>技术支持提供方： </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    ar: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>مدعوم من </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    de: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Abgewickelt durch </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    nl: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Mogelijk gemaakt door </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    pt: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Powered by </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    cs: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Využívá službu </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    da: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Leveret af </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    ru: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Обработано </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    fi: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Palvelun tarjoaa </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    el: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Με την υποστήριξη του </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    hu: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Üzemeltető: </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    id: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Ditunjang teknologi </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    he: {
        PoweredBy: ({ logoColor }) => <Fragment><PayPalLogo logoColor={ logoColor } /> מופעל על-ידי</Fragment>
    },
    it: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Con tecnologia </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    ja: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Powered by </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    ko: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>제공: </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    no: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Leveres av </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    pl: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Powered by </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    sv: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Tillhandahålls av </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    sk: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Používa technológiu </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    th: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>ให้บริการโดย </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    tr: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Çalıştıran </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    vi: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Được hỗ trợ bởi </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    },
    ro: {
        PoweredBy: ({ logoColor }) => <Fragment><Text>Cu tehnologia </Text><PayPalLogo logoColor={ logoColor } /></Fragment>
    }
};
