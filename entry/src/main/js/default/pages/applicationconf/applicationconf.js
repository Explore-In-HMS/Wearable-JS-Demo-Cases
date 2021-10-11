import configuration from '@system.configuration';
export default {
    data: {
        language : '--',
        region : '--',
        dir : '--',
    },
    onInit(){
        this.getLocale();
    },
    getLocale(){
        const localeInfo = configuration.getLocale();
        this.language = localeInfo.language;
        this.region = localeInfo.countryOrRegion;
        this.dir = localeInfo.dir;
    }
}
