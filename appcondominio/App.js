//console.disableYellowBox = true;

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  //'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  //'Module RCTImageLoader requires',
]);

export default from './src/CondominioApp';