import {parseToArray} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:conversores:parseToArray');

log(parseToArray(''))
//=> []
 
log(parseToArray('1'))
//=> ['1']
 
log(parseToArray('1 e 2'))
//=> ['1', '2']
 
log(parseToArray('Fernanda, Luana e Ana Carolina'))
//=> ['Fernanda', 'Luana', 'Ana Carolina']