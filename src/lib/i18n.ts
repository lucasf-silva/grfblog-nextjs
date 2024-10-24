import { intl } from '@/config/intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
    if (!intl.locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../langs/${locale}.json`)).default
    };
    
});