import { formatMessage } from 'umi-plugin-locale';


export const renderMessage = (s: string) => formatMessage({ id: s })
