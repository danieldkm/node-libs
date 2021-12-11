import {formatToCEP} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToCEP');
log(formatToCEP('15998030'))
//=> '15998-030'
 
log(formatToCEP('02999'))
//=> '02999'