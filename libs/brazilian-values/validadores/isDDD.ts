import {isDDD} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:validadores:isDDD');

log('81', isDDD('81'))
//=> true
 
log('10', isDDD('10'))
//=> false
 
log('555', isDDD('555'))
//=> false