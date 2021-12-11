import {formatToDate} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToDate');
//Formata uma instância de Date para o estilo brasileiro, DD/MM/YYYY.

log(formatToDate(new Date(2002, 7, 21)))
//=> '21/08/2002'
 
log(formatToDate(new Date()))
//=> '08/09/2018'