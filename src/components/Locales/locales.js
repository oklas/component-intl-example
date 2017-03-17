import en from './locales/en.intl'
import de from './locales/de.intl'
import ru from './locales/ru.intl'
import zh from './locales/zh.intl'

const locales = { de, en, ru, zh }


import {addLocaleData} from 'react-intl';
import de1 from 'react-intl/locale-data/de';
import en1 from 'react-intl/locale-data/en';
import ru1 from 'react-intl/locale-data/ru';
import zh1 from 'react-intl/locale-data/zh';

addLocaleData([...de1, ...en1, ...ru1, ...zh1]);

export default locales