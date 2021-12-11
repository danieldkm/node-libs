import {parseToDate} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:conversores:parseToDate');

log(parseToDate('28/03/1996'))
//=> Date('1996-03-28T03:00:00.000Z')
 
log(parseToDate('28/03/1996 20:00'))
//=> Date('1996-03-28T23:00:00.000Z')
 
log(parseToDate('28/03/1996 20:00:00'))
//=> Date('1996-03-28T23:00:00.000Z')

try {
  log(parseToDate('31/02/2018'))
} catch (error) {
  log(error.message)
}
//=> throws Error('Value "31/02/2018" is an invalid date.')