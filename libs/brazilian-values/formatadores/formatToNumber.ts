import {formatToNumber} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToNumber');

log(formatToNumber(0))
//=> '0'
 
log(formatToNumber(-1299))
//=> '-1.299'
 
log(formatToNumber(.981))
//=> '0,981'
 
log(formatToNumber('19898.1298'))
//=> '19.898,1298'