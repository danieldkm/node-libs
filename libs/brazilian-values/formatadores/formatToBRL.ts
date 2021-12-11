import {formatToBRL} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToBRL');

log(formatToBRL(1928.93))
//=> 'R$ 1.928,93'
 
log(formatToBRL('9211928.18203'))
//=> 'R$ 9.211.928,18'
 
log(formatToBRL(-18.49))
//=> 'R$ -18,49'