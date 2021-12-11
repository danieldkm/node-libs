import {isDate} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:validadores:isDate');

log('03/08/2017', isDate('03/08/2017'))
//=> true
 
log('28/13/2017', isDate('28/13/2017'))
//=> false
 
log('03-08-2017', isDate('03-08-2017'))
//=> false
 
log('31/03/18', isDate('31/03/18'))
//=> false