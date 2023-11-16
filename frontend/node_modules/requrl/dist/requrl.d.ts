import { IncomingMessage } from 'http';

declare function getURL(req?: IncomingMessage, includePath?: boolean): string;

export default getURL;
