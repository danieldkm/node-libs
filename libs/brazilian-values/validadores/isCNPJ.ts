import {isCNPJ} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:validadores:isCNPJ');
log('41142260000189',isCNPJ('41142260000189'))
//=> true
 
log('45.723.174/0001-10',isCNPJ('45.723.174/0001-10'))
//=> true
 
log('411407182',isCNPJ('411407182'))
//=> false
 
log('11.111.111/1111-11',isCNPJ('11.111.111/1111-11'))
//=> false