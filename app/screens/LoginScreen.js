import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

import { Feather } from '@expo/vector-icons';
import Svg, { ClipPath, Path, Rect } from 'react-native-svg';
import Colors from '../utils/Colors';

function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log('get error: ', err.message);
        Alert.alert(
          'Login Failed',
          'Sorry, your email or password is incorrect. Please try again.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
      }
    } else {
      Alert.alert('Login Failed', 'Please fill in both fields.');
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Svg component for the App Logo
  const AppLogo = () => {
    return (
      <Svg width="230" height="230" viewBox="0 0 2643 2643" fill="none">
        <Path
          d="M1025.54 765.713L1032.42 767.434L1118.46 794.965L1340.43 868.955L1378.28 856.91L1569.28 793.244L1632.95 772.596L1650.15 767.434L1651.88 769.154L1658.76 822.496L1674.24 953.27L1675.96 963.594L1672.52 970.477L1657.04 980.801L1601.97 1018.66L1572.72 1039.3L1545.19 1058.23L1505.62 1085.76L1478.08 1104.69L1448.83 1125.34L1426.46 1140.83L1398.93 1159.75L1359.36 1187.29L1340.43 1201.05L1330.1 1197.61L1300.85 1176.96L1268.16 1154.59L1238.91 1133.94L1206.21 1111.57L1178.68 1092.65L1149.43 1072L1121.9 1053.07L1082.32 1025.54L1054.79 1006.61L1020.38 982.521L1001.45 968.756L999.729 960.152L1015.21 834.541L1023.82 767.434L1025.54 765.713Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1333.54 531.697H1347.31L1373.12 538.58L1701.78 617.732L1755.12 629.777L1796.41 640.102L1798.13 643.543H1402.37L1386.89 633.219L1367.96 626.336L1350.75 622.895H1324.94L1293.97 631.498L1276.76 643.543L1273.32 650.426V665.912L1285.37 679.678L1306.01 690.002L1330.1 695.164H1357.63L1380 688.281L1397.21 679.678L1402.37 674.516H1818.78L1817.06 677.957L1760.28 696.885V779.478L1768.88 784.641L1772.32 789.803V807.01L1765.44 817.334L1768.88 836.262L1787.81 901.648L1789.53 920.576L1784.37 934.342L1774.04 946.387L1763.72 951.549L1756.84 953.27H1743.07L1729.31 948.107L1720.7 941.225L1712.1 924.018V905.09L1734.47 827.658V815.613L1729.31 808.73L1727.59 796.686L1732.75 784.641L1737.91 779.478H1741.35V703.768L1712.1 712.371L1648.43 733.02L1343.87 834.541L1330.1 832.82L1218.26 794.965L1032.42 733.02L958.432 708.93L855.189 674.516L817.334 662.471L815.613 657.309L918.855 631.498L1013.49 609.129L1111.57 585.039L1299.13 540.301L1333.54 531.697Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1646.71 767.434L1651.88 769.154L1658.76 822.496L1674.24 953.27L1675.96 963.594L1672.52 970.477L1657.04 980.801L1601.97 1018.66L1572.72 1039.3L1545.19 1058.23L1505.62 1085.76L1478.08 1104.69L1448.83 1125.34L1426.46 1140.83L1398.93 1159.75L1359.36 1187.29L1347.31 1195.89L1340.43 1197.61V872.396L1342.15 868.955L1569.28 793.244L1632.95 772.596L1646.71 767.434Z"
          fill="#FDFDFD"
        />
        <Path
          d="M1925.47 932.621H1928.91L1930.63 977.359V1010.05L1928.91 1085.76L1923.75 1104.69L1911.7 1121.9L1903.1 1130.5L1887.61 1140.83L1868.68 1149.43L1794.69 1173.52L1741.35 1194.17L1710.38 1207.93L1660.48 1232.02L1631.23 1247.51L1589.93 1271.6L1560.68 1290.53L1527.98 1312.9L1498.73 1335.27L1481.53 1349.03L1457.44 1369.68L1414.42 1412.7L1402.37 1426.46L1381.72 1452.27L1366.24 1472.92L1362.8 1474.64L1364.52 1460.88L1373.12 1428.18L1386.89 1392.05L1407.54 1349.03L1423.02 1323.22L1440.23 1297.41L1460.88 1269.88L1484.97 1240.63L1505.62 1218.26L1517.66 1204.49L1548.63 1173.52L1562.4 1161.47L1586.49 1140.83L1608.86 1121.9L1663.92 1080.6L1696.61 1058.23L1731.03 1035.86L1765.44 1015.21L1842.87 972.197L1872.12 958.432L1896.21 946.387L1925.47 932.621Z"
          fill="#FCFCFC"
        />
        <Path
          d="M748.506 932.621L781.199 948.107L824.217 968.756L863.793 989.404L903.369 1011.77L932.621 1028.98L972.197 1054.79L992.846 1068.56L1018.66 1087.48L1054.79 1115.02L1077.16 1132.22L1096.09 1149.43L1115.02 1164.92L1132.22 1182.12L1135.66 1183.84V1187.29L1142.55 1190.73L1163.2 1211.38L1175.24 1225.14L1195.89 1249.23L1213.1 1269.88L1233.74 1299.13L1250.95 1324.94L1268.16 1355.91L1281.92 1383.45L1293.97 1412.7L1309.46 1459.16L1312.9 1467.76V1472.92L1306.01 1469.48L1293.97 1453.99L1280.2 1436.79L1261.28 1416.14L1249.23 1402.37L1209.65 1362.8L1190.73 1347.31L1170.08 1330.1L1139.11 1307.73L1097.81 1280.2L1054.79 1254.39L1016.94 1233.74L958.432 1204.49L894.766 1178.68L832.82 1158.03L793.244 1144.27L772.596 1132.22L758.83 1116.74L748.506 1096.09L746.785 1090.93V934.342L748.506 932.621Z"
          fill="#FCFCFC"
        />
        <Path
          d="M1885.89 1187.29H1891.05V1297.41L1885.89 1312.9L1873.85 1330.1L1860.08 1342.15L1832.55 1354.19L1786.09 1366.24L1712.1 1385.17L1665.64 1400.65L1596.81 1428.18L1534.87 1459.16L1502.17 1478.08L1472.92 1497.01L1452.27 1512.5L1429.9 1529.71L1410.98 1545.19L1369.68 1586.49H1366.24L1367.96 1576.16L1383.45 1541.75L1402.37 1509.06L1424.74 1478.08L1447.11 1452.27L1466.04 1431.62L1493.57 1404.09L1507.34 1392.05L1531.43 1371.4L1553.79 1354.19L1591.65 1328.38L1631.23 1304.29L1672.52 1280.2L1713.82 1257.83L1758.56 1237.19L1801.58 1218.26L1851.48 1199.33L1885.89 1187.29Z"
          fill="#FCFCFC"
        />
        <Path
          d="M784.641 1187.29L793.244 1189.01L851.748 1209.65L911.973 1235.46L973.918 1264.72L1013.49 1287.09L1037.58 1300.85L1077.16 1324.94L1109.85 1347.31L1130.5 1362.8L1147.71 1376.56L1164.92 1392.05L1189.01 1412.7L1211.38 1435.07L1223.42 1448.83L1242.35 1469.48L1266.44 1502.17L1285.37 1534.87L1300.85 1564.12L1311.18 1584.77V1588.21L1304.29 1584.77L1283.64 1564.12L1269.88 1552.07L1250.95 1534.87L1221.7 1512.5L1199.33 1495.29L1163.2 1472.92L1125.34 1452.27L1070.28 1424.74L1004.89 1398.93L961.873 1385.17L917.135 1373.12L848.307 1355.91L820.775 1345.59L805.289 1333.54L793.244 1319.78L784.641 1300.85L782.92 1283.64V1190.73L784.641 1187.29Z"
          fill="#FCFCFC"
        />
        <Path
          d="M1402.37 674.516H1818.78L1817.06 677.957L1760.28 696.885V779.479L1768.88 784.641L1772.32 789.803V807.01L1765.44 817.334L1768.88 836.262L1787.81 901.648L1789.53 920.576L1784.37 934.342L1774.04 946.387L1763.72 951.549L1756.84 953.27H1743.07L1729.31 948.107L1720.7 941.225L1712.1 924.018V905.09L1734.47 827.658V815.613L1729.31 808.73L1727.59 796.686L1732.75 784.641L1737.91 779.479H1741.35V703.768L1712.1 712.371L1648.43 733.02L1349.03 832.82H1342.15L1340.43 829.379V698.605H1357.63V695.164L1380 688.281L1397.21 679.678L1402.37 674.516Z"
          fill="#FBFBFB"
        />
        <Path
          d="M1925.47 932.621H1928.91L1930.63 977.359V1010.05L1928.91 1085.76L1925.47 1101.25H1923.75V1044.47L1908.26 1046.19L1822.22 1072L1765.44 1090.93L1731.03 1106.41L1689.73 1127.06L1650.15 1149.43L1622.62 1166.64L1595.09 1185.56L1574.44 1201.05L1555.52 1216.54L1533.15 1235.46L1510.78 1256.11L1484.97 1283.64L1471.2 1300.85L1447.11 1331.82L1436.79 1345.59L1417.86 1371.4L1395.49 1409.26L1383.45 1429.9L1378.28 1438.51L1371.4 1448.83L1366.24 1466.04H1369.68L1366.24 1472.92L1362.8 1474.64L1364.52 1460.88L1373.12 1428.18L1386.89 1392.05L1407.54 1349.03L1423.02 1323.22L1440.23 1297.41L1460.88 1269.88L1484.97 1240.63L1505.62 1218.26L1517.66 1204.49L1548.63 1173.52L1562.4 1161.47L1586.49 1140.83L1608.86 1121.9L1663.92 1080.6L1696.61 1058.23L1731.03 1035.86L1765.44 1015.21L1842.87 972.197L1872.12 958.432L1896.21 946.387L1925.47 932.621Z"
          fill="#CCCCCB"
        />
        <Path
          d="M748.506 932.621L781.199 948.107L824.217 968.756L863.793 989.404L903.369 1011.77L932.621 1028.98L972.197 1054.79L992.846 1068.56L1018.66 1087.48L1054.79 1115.02L1077.16 1132.22L1096.09 1149.43L1115.02 1164.92L1132.22 1182.12L1135.66 1183.84V1187.29L1142.55 1190.73L1163.2 1211.38L1175.24 1225.14L1195.89 1249.23L1213.1 1269.88L1233.74 1299.13L1250.95 1324.94L1268.16 1355.91L1281.92 1383.45L1293.97 1412.7L1304.29 1443.67L1302.57 1448.83L1295.69 1435.07L1287.09 1423.02L1276.76 1402.37L1264.72 1383.45L1247.51 1359.36L1235.46 1345.59L1225.14 1330.1L1209.65 1309.46L1190.73 1287.09L1175.24 1268.16L1139.11 1232.02L1120.18 1216.54L1104.69 1202.77L1075.44 1182.12L1039.3 1158.03L994.566 1132.22L944.666 1106.41L901.648 1087.48L839.703 1066.84L791.523 1053.07L765.713 1046.19L750.227 1041.03L748.506 1090.93H746.785V934.342L748.506 932.621Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1340.43 533.418L1366.24 536.859L1500.45 569.553L1608.86 595.363L1731.03 624.615L1791.25 638.381L1798.13 641.822V643.543H1402.37L1386.89 633.219L1367.96 626.336L1340.43 619.453L1338.71 535.139L1340.43 533.418Z"
          fill="#FCFCFC"
        />
        <Path
          d="M784.641 1187.29L793.244 1189.01L851.748 1209.65L911.973 1235.46L973.918 1264.72L1013.49 1287.09L1037.58 1300.85L1077.16 1324.94L1109.85 1347.31L1130.5 1362.8L1147.71 1376.56L1164.92 1392.05L1189.01 1412.7L1211.38 1435.07L1223.42 1448.83L1242.35 1469.48L1266.44 1502.17L1285.37 1534.87L1293.97 1552.07L1292.25 1555.52L1281.92 1536.59H1276.76L1256.11 1510.78L1238.91 1488.41L1226.86 1476.36L1214.82 1462.6L1199.33 1447.11L1194.17 1443.67V1440.23L1187.29 1436.79L1168.36 1421.3L1142.55 1402.37L1092.65 1369.68L1058.23 1349.03L1008.33 1324.94L961.873 1307.73L905.09 1288.81L836.262 1273.32L801.848 1266.44L789.803 1264.72V1309.46L786.361 1306.01L782.92 1283.64V1190.73L784.641 1187.29Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1885.89 1187.29H1891.05V1297.41L1889.33 1306.01H1887.61V1264.72L1868.68 1268.16L1810.18 1280.2L1749.96 1295.69L1694.89 1314.62L1641.55 1336.99L1603.7 1355.91L1562.4 1381.72L1538.31 1398.93L1505.62 1423.02L1481.53 1441.95L1459.16 1462.6L1448.83 1474.64H1445.39L1441.95 1481.53L1421.3 1505.62L1404.09 1527.98L1393.77 1541.75L1392.05 1538.31L1419.58 1497.01L1440.23 1472.92L1452.27 1459.16L1466.04 1441.95H1469.48L1471.2 1435.07L1460.88 1441.95L1452.27 1448.83L1455.71 1441.95L1493.57 1404.09L1507.34 1392.05L1531.43 1371.4L1553.79 1354.19L1591.65 1328.38L1631.23 1304.29L1672.52 1280.2L1713.82 1257.83L1758.56 1237.19L1801.58 1218.26L1851.48 1199.33L1885.89 1187.29Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1674.24 1445.39H1682.85L1684.57 1447.11V1495.29L1679.41 1510.78L1669.08 1526.26L1657.04 1536.59L1629.51 1550.35L1579.61 1564.12L1534.87 1579.61L1493.57 1596.81L1464.32 1612.3L1431.62 1632.95L1404.09 1653.6L1386.89 1667.36L1367.96 1686.29L1364.52 1684.57L1367.96 1674.24L1383.45 1646.71L1397.21 1626.06L1412.7 1607.14L1428.18 1589.93L1445.39 1572.72L1459.16 1560.68L1488.41 1538.31L1517.66 1519.38L1552.07 1498.73L1593.37 1478.08L1650.15 1453.99L1674.24 1445.39Z"
          fill="#FBFBFB"
        />
        <Path
          d="M991.125 1445.39L1004.89 1447.11L1053.07 1466.04L1109.85 1491.85L1140.83 1509.06L1170.08 1527.98L1199.33 1548.63L1218.26 1564.12L1235.46 1579.61L1261.28 1605.42L1278.48 1627.79L1299.13 1660.48L1312.9 1684.57L1307.73 1686.29L1280.2 1660.48L1250.95 1638.11L1218.26 1617.46L1180.4 1596.81L1144.27 1581.33L1096.09 1564.12L1056.51 1553.79L1037.58 1546.91L1015.21 1534.87L1003.17 1522.82L991.125 1498.73V1445.39Z"
          fill="#FBFBFB"
        />
        <Path
          d="M991.125 1445.39L1004.89 1447.11L1053.07 1466.04L1109.85 1491.85L1140.83 1509.06L1170.08 1527.98L1199.33 1548.63L1218.26 1564.12L1235.46 1579.61L1261.28 1605.42L1278.48 1627.79L1290.53 1646.71L1288.81 1650.15L1278.48 1634.67L1275.04 1636.39V1632.95L1268.16 1629.51L1235.46 1596.81L1216.54 1581.33L1190.73 1564.12L1144.27 1540.03L1096.09 1517.66L1039.3 1498.73L996.287 1486.69V1507.34L992.846 1503.89L991.125 1498.73V1445.39Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1674.24 1445.39H1682.85L1684.57 1447.11V1495.29L1682.85 1503.89H1681.13L1682.85 1484.97L1646.71 1495.29L1584.77 1515.94L1550.35 1529.71L1490.13 1558.96L1469.48 1572.72L1450.55 1588.21L1433.35 1603.7L1410.98 1626.06L1404.09 1631.23L1407.54 1624.34L1423.02 1605.42L1438.51 1589.93L1452.27 1577.88V1576.16H1447.11L1460.88 1564.12V1558.96L1488.41 1538.31L1517.66 1519.38L1552.07 1498.73L1593.37 1478.08L1650.15 1453.99L1674.24 1445.39Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1335.27 177.232L1338.71 178.953L1343.87 299.402L1345.59 371.672V455.986L1342.15 459.428L1330.1 457.707L1328.38 455.986V397.482L1331.82 227.133L1333.54 187.557L1335.27 177.232Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1240.63 228.854L1245.79 235.736L1249.23 246.061L1278.48 392.32L1292.25 464.59L1295.69 481.797V492.121L1292.25 493.842H1281.92L1278.48 486.959L1256.11 344.141L1247.51 278.754L1240.63 234.016V228.854Z"
          fill="#F8F8F8"
        />
        <Path
          d="M1429.9 232.295H1431.62L1429.9 261.547L1407.54 406.086L1395.49 483.518L1392.05 492.121H1381.72L1378.28 490.4V478.355L1405.81 340.699L1417.86 283.916L1426.46 244.34L1429.9 232.295Z"
          fill="#F8F8F7"
        />
        <Path
          d="M1522.82 252.943L1524.54 258.105L1498.73 337.258L1476.36 402.645L1460.88 447.383L1441.95 500.725L1440.23 504.166H1428.18L1424.74 497.283L1435.07 473.193L1453.99 421.572L1476.36 364.789L1495.29 318.33L1512.5 275.312L1521.1 254.664L1522.82 252.943Z"
          fill="#EDEDED"
        />
        <Path
          d="M1149.43 252.943L1154.59 258.105L1173.52 304.564L1204.49 383.717L1223.42 433.617L1247.51 495.562L1249.23 502.445L1242.35 505.887H1233.74L1228.58 495.562L1149.43 258.105V252.943Z"
          fill="#F4F4F4"
        />
        <Path
          d="M1607.14 295.961L1608.86 299.402L1583.05 349.303L1562.4 387.158L1534.87 437.059L1514.22 473.193L1491.85 512.77L1488.41 516.211H1478.08L1476.36 507.607L1493.57 478.355L1534.87 409.527L1562.4 364.789L1586.49 326.934L1605.42 297.682L1607.14 295.961Z"
          fill="#EDEDED"
        />
        <Path
          d="M1063.39 292.52L1070.28 299.402L1090.93 332.096L1113.29 368.23L1133.94 402.645L1163.2 450.824L1183.84 485.238L1197.61 507.607L1199.33 516.211L1183.84 517.932L1168.36 490.4L1158.03 471.473L1137.38 431.896L1120.18 400.924L1097.81 359.627L1072 311.447L1063.39 295.961V292.52Z"
          fill="#EEEEEE"
        />
        <Path
          d="M987.684 349.303L999.729 359.627L1015.21 376.834L1035.86 399.203L1056.51 423.293L1073.72 442.221L1089.21 461.148L1109.85 483.518L1125.34 502.445L1140.83 519.652L1144.27 524.814V529.977L1130.5 531.697L1118.46 517.932L1106.41 502.445L1087.48 478.355L1063.39 449.104L1025.54 400.924L1001.45 371.672L987.684 352.744V349.303Z"
          fill="#EDEDED"
        />
        <Path
          d="M1686.29 347.582V352.744L1665.64 380.275L1643.27 407.807L1608.86 450.824L1593.37 469.752L1574.44 493.842L1555.52 516.211L1543.47 529.977H1533.15L1531.43 523.094L1546.91 504.166L1565.84 483.518L1581.33 464.59L1601.97 442.221L1617.46 423.293L1631.23 409.527L1646.71 390.6L1657.04 378.555H1660.48L1663.92 371.672L1686.29 347.582Z"
          fill="#EFEFEF"
        />
        <Path
          d="M913.693 411.248L920.576 414.689L949.828 437.059L977.359 457.707L1004.89 480.076L1042.75 511.049L1066.84 529.977L1078.88 540.301L1077.16 545.463H1063.39L1039.3 524.814L1020.38 507.607L1006.61 495.562L982.521 474.914L961.873 455.986L942.945 440.5L915.414 414.689L913.693 411.248Z"
          fill="#ECECEC"
        />
        <Path
          d="M1749.96 416.41H1753.4L1749.96 423.293L1736.19 435.338L1715.54 454.266L1701.78 466.311L1677.69 486.959L1657.04 505.887L1648.43 512.77H1644.99V516.211L1631.23 528.256L1610.58 545.463L1601.97 547.184L1596.81 543.742L1598.53 536.859L1627.79 512.77L1650.15 495.562L1672.52 476.635L1693.17 461.148L1718.98 440.5L1748.23 418.131L1749.96 416.41Z"
          fill="#EEEEED"
        />
        <Path
          d="M1335.27 239.178H1336.99L1340.43 308.006L1342.15 385.437V455.986L1335.27 457.707L1330.1 455.986V421.572L1333.54 277.033L1335.27 239.178Z"
          fill="#FEFEFE"
        />
        <Path
          d="M936.062 758.83H956.711L972.197 763.992L975.639 770.875L973.918 772.596H844.865L837.982 769.154V765.713L819.055 767.434L815.613 763.992L827.658 762.271H858.631L867.234 760.551L936.062 758.83Z"
          fill="#CCCCCB"
        />
        <Path
          d="M960.152 825.938L967.035 827.658L965.314 837.982L954.99 841.424L922.297 846.586L906.811 848.307L867.234 853.469L862.072 855.189L836.262 856.91L822.496 860.352H798.406V858.631L832.82 851.748L841.424 848.307L913.693 834.541L960.152 825.938Z"
          fill="#CFCFCE"
        />
        <Path
          d="M1240.63 228.854L1245.79 235.736L1249.23 246.061L1278.48 392.32L1281.92 412.969V421.572L1278.48 414.689L1264.72 342.42L1257.83 311.447L1261.28 345.861L1269.88 406.086L1281.92 483.518L1280.2 490.4L1276.76 476.635L1261.28 376.834L1249.23 292.52L1240.63 234.016V228.854Z"
          fill="#CCCCCB"
        />
        <Path
          d="M858.631 490.4L868.955 493.842L917.135 517.932L954.99 538.58L982.521 554.066L994.566 560.949V566.111H979.08L958.432 554.066L922.297 531.697L870.676 500.725L858.631 492.121V490.4Z"
          fill="#CDCDCC"
        />
        <Path
          d="M1806.74 492.121L1810.18 493.842L1792.97 505.887L1760.28 526.535L1734.47 542.021L1694.89 566.111L1686.29 567.832L1681.13 562.67L1688.01 555.787L1720.7 538.58L1760.28 516.211L1786.09 502.445L1806.74 492.121Z"
          fill="#E9E9E9"
        />
        <Path
          d="M1402.37 674.516H1818.78L1817.06 677.957L1808.46 679.678L1805.02 677.957H1400.65L1402.37 674.516Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1429.9 232.295H1431.62L1429.9 261.547L1407.54 406.086L1397.21 471.473H1395.49V457.707L1410.98 361.348L1419.58 301.123L1421.3 295.961H1417.86L1416.14 311.447L1404.09 368.23L1397.21 400.924H1395.49L1397.21 381.996L1416.14 290.799L1426.46 244.34L1429.9 232.295Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1467.76 1435.07H1471.2L1469.48 1441.95H1466.04L1462.6 1448.83L1443.67 1469.48L1428.18 1488.41L1412.7 1509.06L1397.21 1533.15L1390.33 1543.47L1385.17 1541.75L1388.61 1533.15L1402.37 1509.06L1424.74 1478.08L1447.11 1452.27L1464.32 1436.79L1467.76 1435.07Z"
          fill="#F3F3F3"
        />
        <Path
          d="M1760.28 633.219L1777.49 634.939L1796.41 640.102L1798.13 643.543H1402.37V641.822L1779.21 640.102L1760.28 634.939V633.219Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1149.43 252.943L1154.59 258.105L1173.52 304.564L1183.84 330.375L1182.12 335.537L1175.24 318.33L1176.96 325.213L1187.29 359.627L1216.54 447.383L1214.82 452.545L1190.73 381.996L1149.43 258.105V252.943Z"
          fill="#CCCCCB"
        />
        <Path
          d="M913.693 411.248L920.576 414.689L949.828 437.059L977.359 457.707L987.684 466.311L982.521 468.031L979.08 471.473L961.873 455.986L942.945 440.5L915.414 414.689L913.693 411.248Z"
          fill="#CFCFCE"
        />
        <Path
          d="M946.387 538.58L963.594 543.742L989.404 557.508L994.566 560.949V566.111H979.08L958.432 554.066L949.828 543.742L946.387 542.021V538.58Z"
          fill="#F5F5F5"
        />
        <Path
          d="M1063.39 292.52L1070.28 299.402L1090.93 332.096L1108.13 359.627L1106.41 363.068L1099.53 354.465L1109.85 375.113L1108.13 378.555L1087.48 340.699L1063.39 295.961V292.52Z"
          fill="#CDCDCC"
        />
        <Path
          d="M1522.82 252.943L1524.54 258.105L1503.89 320.051H1498.73L1493.57 332.096L1491.85 326.934L1510.78 278.754L1521.1 254.664L1522.82 252.943Z"
          fill="#CECECD"
        />
        <Path
          d="M1607.14 295.961L1608.86 299.402L1583.05 349.303L1577.88 354.465L1581.33 340.699V335.537L1605.42 297.682L1607.14 295.961Z"
          fill="#CCCCCB"
        />
        <Path
          d="M987.684 349.303L999.729 359.627L1015.21 376.834L1020.38 381.996V388.879L1030.7 400.924L1028.98 404.365L1008.33 380.275L987.684 352.744V349.303Z"
          fill="#CDCDCC"
        />
        <Path
          d="M1749.96 416.41H1753.4L1749.96 423.293L1736.19 435.338L1718.98 450.824L1717.26 447.383L1710.38 449.104L1718.98 440.5L1748.23 418.131L1749.96 416.41Z"
          fill="#D0D0CF"
        />
        <Path
          d="M954.99 829.379H961.873L960.152 836.262L951.549 837.982H918.855L924.018 834.541L954.99 829.379Z"
          fill="#FEFEFE"
        />
        <Path
          d="M1252.67 283.916L1254.39 289.078H1257.83L1259.55 306.285H1257.83V330.375L1254.39 328.654L1250.95 308.006V294.24L1252.67 283.916Z"
          fill="#D1D1D0"
        />
        <Path
          d="M1686.29 347.582V352.744L1665.64 380.275L1657.04 388.879L1655.32 381.996L1657.04 378.555H1660.48L1663.92 371.672L1686.29 347.582Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1806.74 492.121L1810.18 493.842L1792.97 505.887L1782.65 512.77L1772.32 514.49L1762 519.652L1758.56 517.932L1786.09 502.445L1806.74 492.121Z"
          fill="#CCCCCB"
        />
        <Path
          d="M936.062 762.271H960.152V769.154H934.342L930.9 765.713L936.062 762.271Z"
          fill="#FEFEFE"
        />
        <Path
          d="M1842.87 579.877L1848.04 581.598L1834.27 588.48L1820.5 593.643H1806.74V590.201L1842.87 579.877Z"
          fill="#CCCCCB"
        />
        <Path
          d="M829.379 581.598L841.424 583.318L865.514 590.201L867.234 595.363L851.748 593.643L829.379 583.318V581.598Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1457.44 1562.4L1462.6 1564.12L1448.83 1576.16L1445.39 1579.61L1433.35 1589.93L1417.86 1605.42V1600.25L1445.39 1572.72L1457.44 1562.4Z"
          fill="#E4E4E4"
        />
        <Path
          d="M1486.69 1410.98L1490.13 1412.7L1476.36 1426.46L1474.64 1433.35L1460.88 1441.95L1452.27 1448.83L1455.71 1441.95L1486.69 1410.98Z"
          fill="#DCDCDB"
        />
        <Path
          d="M1264.72 1510.78L1273.32 1514.22L1287.09 1538.31L1293.97 1552.07L1292.25 1555.52L1281.92 1536.59V1533.15H1278.48L1268.16 1515.94L1264.72 1510.78Z"
          fill="#DEDEDD"
        />
        <Path
          d="M961.873 554.066L970.477 557.508L977.359 560.949L984.242 559.229L979.08 554.066L989.404 557.508L994.566 560.949V566.111H979.08L961.873 555.787V554.066Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1653.6 383.717L1658.76 385.438L1653.6 395.762H1648.43L1634.67 409.527V404.365L1653.6 383.717Z"
          fill="#DEDEDD"
        />
        <Path
          d="M1297.41 1562.4L1300.85 1564.12L1311.18 1584.77V1588.21L1304.29 1584.77L1295.69 1574.44H1300.85L1297.41 1562.4Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1240.63 483.518L1244.07 486.959L1249.23 502.445L1242.35 505.887H1233.74L1228.58 495.562L1230.3 488.68L1233.74 502.445L1244.07 500.725L1240.63 483.518Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1502.17 304.564L1507.34 306.285L1503.89 320.051H1498.73L1493.57 332.096L1491.85 326.934L1500.45 306.285L1502.17 304.564Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1775.77 511.049H1779.21V514.49L1756.84 528.256L1753.4 526.535L1758.56 524.814L1762 517.932L1775.77 511.049Z"
          fill="#E4E4E3"
        />
        <Path
          d="M1300.85 1667.36L1306.01 1672.52L1312.9 1686.29L1306.01 1684.57L1297.41 1674.24H1300.85V1667.36Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1135.66 516.211L1144.27 524.814V529.977L1130.5 531.697L1123.62 524.814L1125.34 521.373L1130.5 526.535H1137.38L1135.66 516.211Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1175.24 499.004L1180.4 504.166L1185.56 514.49H1192.45L1194.17 505.887L1197.61 507.607L1199.33 516.211L1183.84 517.932L1175.24 502.445V499.004Z"
          fill="#CCCCCB"
        />
        <Path
          d="M1583.05 337.258L1584.77 340.699L1579.61 349.303L1577.88 357.906L1571 359.627L1574.44 351.023L1583.05 337.258Z"
          fill="#FAFAFA"
        />
        <Path
          d="M1369.68 1445.39L1371.4 1448.83L1366.24 1466.04H1369.68L1366.24 1472.92L1362.8 1474.64L1364.52 1460.88L1369.68 1445.39Z"
          fill="#D3D3D2"
        />
        <Path
          d="M1373.12 1665.64L1374.84 1669.08L1371.4 1677.69L1374.84 1679.41L1366.24 1686.29L1364.52 1681.13L1373.12 1665.64Z"
          fill="#CDCDCC"
        />
        <Path
          d="M927.213 1980.95H1078.64V1999.85C1078.64 2021.15 1075.04 2041.02 1067.84 2059.47C1060.79 2077.92 1050.66 2094.12 1037.46 2108.07C1024.26 2122.02 1008.51 2132.9 990.213 2140.7C971.913 2148.5 951.663 2152.4 929.463 2152.4C906.513 2152.4 885.663 2148.5 866.913 2140.7C848.313 2132.75 832.263 2121.72 818.763 2107.62C805.263 2093.52 794.913 2077.17 787.713 2058.57C780.513 2039.82 776.913 2019.72 776.913 1998.27C776.913 1976.97 780.513 1957.02 787.713 1938.42C794.913 1919.67 805.263 1903.32 818.763 1889.37C832.263 1875.27 848.313 1864.32 866.913 1856.52C885.663 1848.57 906.513 1844.6 929.463 1844.6C948.213 1844.6 964.713 1846.62 978.963 1850.67C993.363 1854.72 1005.74 1860.12 1016.09 1866.87C1026.44 1873.62 1035.21 1881.05 1042.41 1889.15C1049.61 1897.1 1055.61 1904.9 1060.41 1912.55L996.513 1942.7C990.363 1933.25 981.963 1925 971.313 1917.95C960.813 1910.9 946.863 1907.37 929.463 1907.37C917.313 1907.37 906.138 1909.77 895.938 1914.58C885.888 1919.37 877.188 1925.97 869.838 1934.37C862.488 1942.62 856.788 1952.3 852.738 1963.4C848.838 1974.35 846.888 1985.97 846.888 1998.27C846.888 2010.72 848.838 2022.42 852.738 2033.38C856.788 2044.32 862.488 2054 869.838 2062.4C877.188 2070.8 885.888 2077.4 895.938 2082.2C906.138 2086.85 917.313 2089.18 929.463 2089.18C940.113 2089.18 949.788 2087.82 958.488 2085.12C967.188 2082.42 974.688 2078.52 980.988 2073.42C987.438 2068.32 992.463 2062.32 996.064 2055.42C999.813 2048.37 1002.06 2040.65 1002.81 2032.25H927.213V1980.95ZM1161.2 1908.95H1090.32V1850H1299.12V1908.95H1228.47V2147H1161.2V1908.95ZM1337.04 1850H1404.32V2088.05H1512.09V2147H1337.04V1850ZM1558.32 2147V1962.27H1626.72V2147H1558.32ZM1593.42 1924.25C1582.62 1924.25 1573.47 1920.5 1565.97 1913C1558.47 1905.35 1554.72 1896.27 1554.72 1885.77C1554.72 1875.27 1558.47 1866.2 1565.97 1858.55C1573.62 1850.75 1582.77 1846.85 1593.42 1846.85C1600.47 1846.85 1606.92 1848.65 1612.77 1852.25C1618.62 1855.7 1623.35 1860.35 1626.95 1866.2C1630.55 1872.05 1632.35 1878.57 1632.35 1885.77C1632.35 1896.27 1628.52 1905.35 1620.87 1913C1613.22 1920.5 1604.07 1924.25 1593.42 1924.25ZM1672.72 2147V1837.4H1741.12V1989.27C1742.47 1985.07 1745.92 1980.5 1751.47 1975.55C1757.17 1970.45 1764.59 1966.1 1773.74 1962.5C1783.04 1958.75 1793.54 1956.87 1805.24 1956.87C1823.24 1956.87 1838.84 1961.3 1852.04 1970.15C1865.24 1979 1875.44 1990.85 1882.64 2005.7C1889.84 2020.4 1893.44 2036.75 1893.44 2054.75C1893.44 2072.75 1889.84 2089.17 1882.64 2104.02C1875.44 2118.72 1865.24 2130.5 1852.04 2139.35C1838.84 2148.05 1823.24 2152.4 1805.24 2152.4C1795.34 2152.4 1785.97 2150.6 1777.12 2147C1768.42 2143.55 1760.84 2139.12 1754.39 2133.72C1748.09 2128.17 1743.44 2122.62 1740.44 2117.07V2147H1672.72ZM1826.39 2054.75C1826.39 2046.35 1824.52 2038.85 1820.77 2032.25C1817.17 2025.5 1812.14 2020.25 1805.69 2016.5C1799.39 2012.6 1792.27 2010.65 1784.32 2010.65C1776.07 2010.65 1768.64 2012.6 1762.04 2016.5C1755.59 2020.25 1750.49 2025.5 1746.74 2032.25C1742.99 2038.85 1741.12 2046.35 1741.12 2054.75C1741.12 2063.15 1742.99 2070.72 1746.74 2077.47C1750.49 2084.07 1755.59 2089.25 1762.04 2093C1768.64 2096.75 1776.07 2098.62 1784.32 2098.62C1792.27 2098.62 1799.39 2096.75 1805.69 2093C1812.14 2089.25 1817.17 2084.07 1820.77 2077.47C1824.52 2070.72 1826.39 2063.15 1826.39 2054.75Z"
          fill="white"
        />
        <ClipPath id="clip0_755_85">
          <Rect width="2643" height="2643" fill="white" />
        </ClipPath>
      </Svg>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        behavior="padding"
        style={{ backgroundColor: 'white', flex: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView style={styles.background}>
            <View style={styles.logo}>
              <AppLogo />
            </View>

            <View style={styles.container}>
              <View style={styles.text}>
                <TouchableOpacity
                  style={styles.loginTextContainer}
                  activeOpacity={0.5}
                >
                  <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Signup')}
                >
                  <Text style={styles.signupText}>SIGNUP</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.textboxes}>
                <TextInput
                  value={email}
                  onChangeText={text => setEmail(text)}
                  placeholderTextColor={Colors.LIGHT_PRIMARY}
                  padding={10}
                  placeholder="example@gmail.com"
                  keyboardType="email-address"
                  color={Colors.PRIMARY}
                  style={styles.inputAddress}
                  autoCapitalize="none"
                />

                <View style={styles.passwordRow}>
                  <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholderTextColor={Colors.LIGHT_PRIMARY}
                    placeholder="Password"
                    padding={10}
                    color={Colors.PRIMARY}
                    secureTextEntry={!passwordVisible}
                    style={styles.inputPassword}
                    autoCapitalize="none"
                  />

                  <TouchableOpacity
                    onPress={togglePasswordVisibility}
                    activeOpacity={0.7}
                  >
                    <Feather
                      name={!passwordVisible ? 'eye-off' : 'eye'}
                      size={20}
                      color={Colors.PRIMARY}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.forgotPassword}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Forgot Password Screen')}
                >
                  <Text
                    style={{
                      fontFamily: 'Roboto-Light',
                      fontSize: 16,
                      color: Colors.PRIMARY,
                      textDecorationLine: 'underline',
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.loginContainer}
                  activeOpacity={0.8}
                  onPress={handleLogin}
                >
                  <Text style={styles.loginButton}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
  },

  container: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    height: '75%',
    marginTop: '65%',
    borderRadius: Platform.OS === 'android' ? 70 : 70,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: '12.5%',
  },

  inputAddress: {
    width: '75%',
    height: 45,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 15,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  inputPassword: {
    width: '90%',
    height: 45,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  loginButton: {
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: 'Roboto-Bold',
    color: Colors.WHITE,
  },

  loginContainer: {
    marginTop: 50,
    backgroundColor: Colors.PRIMARY,
    width: '50%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: Platform.OS === 'android' ? 30 : 30,
    overflow: 'hidden',
  },

  loginText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.PRIMARY,
  },

  loginTextContainer: {
    borderBottomWidth: 2.5,
    borderBottomColor: Colors.PRIMARY,
  },

  logo: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '10%',
  },

  passwordRow: {
    borderColor: Colors.PRIMARY,
    width: '75%',
    height: 45,
    backgroundColor: Colors.WHITE,
    marginTop: 25,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },

  signupText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.LIGHT_PRIMARY,
  },

  text: {
    paddingTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  textboxes: {
    alignItems: 'center',
    marginTop: 35,
  },
});
