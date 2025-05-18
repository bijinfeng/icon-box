import pkg from '@/../package.json';

export const CURRENT_VERSION = pkg.version;

export const isDesktop = process.env.NEXT_PUBLIC_IS_DESKTOP_APP === '1';
