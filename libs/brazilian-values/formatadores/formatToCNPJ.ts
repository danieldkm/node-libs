import {formatToCNPJ} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToCNPJ');
log(formatToCNPJ('128781'))
//=> '12.878.1'
 
log(formatToCNPJ('32284981000138'))
//=> '32.284.981/0001-38'
 
log(formatToCNPJ('00.0.000.00.00--00-00'))
//=> '00.000.000/0000-00'