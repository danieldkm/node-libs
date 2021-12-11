import {formatToRG} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToRG');

log(formatToRG('00000000A', 'SP'))
//=> '00.000.000-A'
 
log(formatToRG('00.00.0000-0', 'RJ'))
//=> '00.000.000-0'
 
log(formatToRG('MG-14.808.688', 'MG'))
//=> 'MG-14.808.688'