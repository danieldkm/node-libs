import {isCEP} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:validadores:isCEP');

log('50.833-000',isCEP('50.833-000'))
//=> true
 
log('02998-050',isCEP('02998-050'))
//=> true
 
log('00000000',isCEP('00000000'))
//=> true
 
log('0',isCEP('0'))
//=> false
 
log('1982891928981982198',isCEP('1982891928981982198'))
//=> false