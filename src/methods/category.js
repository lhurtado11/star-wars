export function category (string, number) {
  if( string === 'people' && number <=20 ) {
    return 'Especial'
  } else if ( string === 'starship' && number <= 10) {
    return 'Especial'
  } else {
    return 'regular'
  }
}