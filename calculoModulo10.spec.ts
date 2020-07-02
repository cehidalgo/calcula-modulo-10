import calculoModulo10 from './calculoModulo10';

describe('Método calculoModulo10', () => {
  it('Calcula o módulo 10 da string "00571234511012345678", que deve ser 8.', () => {
    expect(calculoModulo10('00571234511012345678')).toEqual('8');
  });

  it('Calcula o módulo 10 da string "00571234510912345678", que deve ser 0.', () => {
    expect(calculoModulo10('00571234510912345678')).toEqual('0');
  });

  it('Calcula o módulo 10 da string "0000132323321091", que deve ser 8.', () => {
    expect(calculoModulo10('0000132323321091')).toEqual('8');
  });
});
