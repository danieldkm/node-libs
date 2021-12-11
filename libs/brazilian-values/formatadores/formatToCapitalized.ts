import {formatToCapitalized} from 'brazilian-values';
import Debug from 'debug';

const log = Debug('lib:brasilian-values:formatadores:formatToCapitalized');

log(formatToCapitalized('SERVIDOR PÚBLICO MUNICIPAL'))
//=> 'Servidor Público Municipal'
 
log(formatToCapitalized('   os PrimEIROS  HOMens da tERra', {
  wordsToKeepLowerCase: ['os', 'da']
}))
//=> 'Os Primeiros Homens da Terra'
 
log(formatToCapitalized('nova tv foi lançada', {
  wordsToKeepUpperCase: ['tv']
}))
//=> 'Nova TV Foi Lançada'
 
log(formatToCapitalized(' com espaços antes e depois ', {
  trimTrailingWhiteSpaces: false
}))
//=> ' Com Espaços Antes e Depois '