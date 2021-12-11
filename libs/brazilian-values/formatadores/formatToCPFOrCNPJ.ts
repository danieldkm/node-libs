import {formatToCPFOrCNPJ} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToCPFOrCNPJ');

log(formatToCPFOrCNPJ('00000000'))
//=> '000.000.00'
 
log(formatToCPFOrCNPJ('366.418.768-70'))
//=> '366.418.768-70'
 
log(formatToCPFOrCNPJ('32284981000138'))
//=> '32.284.981/0001-38'
 
log(formatToCPFOrCNPJ('00.0.000.00.00--00-00'))
//=> '00.000.000/0000-00'