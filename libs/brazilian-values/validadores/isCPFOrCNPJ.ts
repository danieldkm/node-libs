import {isCPFOrCNPJ} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:validadores:isCPFOrCNPJ');

log('366.418.768-70',isCPFOrCNPJ('366.418.768-70'))
//=> true
 
log('36641876870',isCPFOrCNPJ('36641876870'))
//=> true
 
log('213.198.013-20',isCPFOrCNPJ('213.198.013-20'))
//=> false
 
log('2131201872781',isCPFOrCNPJ('2131201872781'))
//=> false
 
log('11111111111',isCPFOrCNPJ('11111111111'))
//=> false
 
log('41142260000189',isCPFOrCNPJ('41142260000189'))
//=> true
 
log('45.723.174/0001-10',isCPFOrCNPJ('45.723.174/0001-10'))
//=> true
 
log('411407182',isCPFOrCNPJ('411407182'))
//=> false
 
log('11.111.111/1111-11',isCPFOrCNPJ('11.111.111/1111-11'))
//=> false