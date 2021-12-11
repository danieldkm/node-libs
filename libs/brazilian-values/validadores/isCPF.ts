import {isCPF} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:validadores:isCPF');
log('366.418.768-70',isCPF('366.418.768-70'))
//=> true
 
log('36641876870',isCPF('36641876870'))
//=> true
 
log('213.198.013-20',isCPF('213.198.013-20'))
//=> false
 
log('2131201872781',isCPF('2131201872781'))
//=> false
 
log('11111111111',isCPF('11111111111'))
//=> false