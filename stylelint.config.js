module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order', // https://www.npmjs.com/package/stylelint-config-rational-order
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-line-length': null, // max文字数を無視
    'no-descending-specificity': null, // セレクタの詳細度に関する警告を出さない
    'font-family-no-missing-generic-family-keyword': null, // sans-serif / serifを必須にするか。object-fitでエラーださないようにする。
    'at-rule-no-unknown': null, // scssで使える @include などにエラーがでないように
    'scss/at-rule-no-unknown': true, // scssでもサポートしていない @ルールにはエラーを出す
    'declaration-empty-line-before': 'never' // 宣言の前の空行を必須にしない
  },
}