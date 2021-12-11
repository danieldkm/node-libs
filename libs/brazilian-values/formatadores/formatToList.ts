import {formatToList} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToList');

log(formatToList(['Vitor', 'William', 'Fernando']))
//=> 'Vitor, William e Fernando'
 
log(formatToList([]))
// => ''
 
log(formatToList(['1', '2']))
// => '1 e 2'
 
log(formatToList(['Direito Civil']))
//=> 'Direito Civil'