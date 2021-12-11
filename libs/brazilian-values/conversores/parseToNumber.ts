import {parseToNumber} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:conversores:parseToNumber');

log(parseToNumber('10'))
//=> 10
 
log(parseToNumber('-1.299'))
//=> -1299
 
log(parseToNumber('0,981'))
//=> 0.981
 
log(parseToNumber('19.898,1298'))
//=> 19898.1298