import {formatToDateTime} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToDateTime');

//Formata uma instância de Date para o data e horário no formato brasileiro, DD/MM/YYYY HH:mm.

log(formatToDateTime(new Date(2002, 7, 21, 18, 30)))
//=> '21/08/2002 18:30'