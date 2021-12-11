import {isPhone} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:validadores:isPhone');

log('+55 (11) 9 8273-1182', isPhone('+55 (11) 9 8273-1182'))
//=> true
 
log('11 9 8273 1182', isPhone('11 9 8273 1182'))
//=> true
 
log('1139723768', isPhone('1139723768'))
//=> true
 
log('(23) 3972-3768', isPhone('(23) 3972-3768'))
//=> false
 
log('(13) 6 5093-2093', isPhone('(13) 6 5093-2093'))
//=> false
 
log('(81) 555 178', isPhone('(81) 555 178'))
//=> false