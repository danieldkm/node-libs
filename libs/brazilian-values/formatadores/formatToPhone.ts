import {formatToPhone} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToPhone');

log(formatToPhone('11'))
//=> '(11'
 
log(formatToPhone('11971626'))
//=> '(11) 9716-26'
 
log(formatToPhone('11971626799'))
//=> '(11) 9 7162-6799'