import {formatToCPF} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToCPF');

log(formatToCPF('00000000'))
//=> '000.000.00'
 
log(formatToCPF('00000000000'))
//=> '000.000.000-00'
 
log(formatToCPF('366.418.768-70'))
//=> '366.418.768-70'