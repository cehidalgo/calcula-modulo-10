const calculoModulo10 = (body: string, reverse: boolean = true): string => {
  if (!body || !body.length) throw 'Tamanho insuficiente para cálculo do digito verificador.';

  let numberSequence: string = '',
    sum = 0;

  /** 1° - Monta a sequencia para o Modulo 10 - Ex.: "212121212..." */
  for (let i = 0; i < body.length; i++) {
    if (i % 2 === 0) numberSequence += String(reverse ? 1 : 2);
    if (i % 2 !== 0) numberSequence += String(reverse ? 2 : 1);
  }

  /** 2° - Multiplica cada item do barcode pelo item na mesma posição do numberSequence e
   * em seguida soma o valor na soma total (sum) */
  for (let i = 0; i < numberSequence.length; i++) {
    let num: number = Number(body[i]) * Number(numberSequence[i]);
    let numToString = String(num);
    let sumNum = num > 9 ? Number(numToString[0]) + Number(numToString[1]) : Number(numToString[0]);
    sum += sumNum;
  }

  /** 3° -  Divide a soma por 10 e devolve o resto da divisão */
  let remnant = sum % 10;
  /** 4° -  Por fim, calcula o DV. OBS: Caso o remnant seja 10, o DV deve ser 0. */
  let digit = remnant === 0 ? remnant : 10 - remnant;
  return String(digit);
};

export default calculoModulo10;
