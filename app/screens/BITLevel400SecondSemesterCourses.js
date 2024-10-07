import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Colors from '../utils/Colors';

// Svg components for the individual courses

const ComputerSecurityComponent = () => {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 478 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M25.6667 418.133H153.667V419.422C153.667 426.479 150.168 433.033 144.297 436.949L126.607 448.76C124.443 450.201 122.669 452.157 121.445 454.451C120.221 456.746 119.584 459.309 119.593 461.909H119.533V494.933C119.533 504.346 127.188 512 136.6 512H341.4C350.812 512 358.467 504.346 358.467 494.933V461.909H358.407C358.407 456.713 355.907 451.772 351.384 448.751L333.711 436.949C330.824 435.027 328.457 432.421 326.821 429.363C325.185 426.305 324.33 422.89 324.333 419.422V418.133H452.333C466.447 418.133 477.933 406.648 477.933 392.533V68.2667C477.933 54.1526 466.447 42.6667 452.333 42.6667H367.111C366.669 41.6249 366.199 40.5949 365.703 39.5776C364.314 36.8371 362.087 34.6107 359.347 33.2219C356.606 31.8331 353.494 31.3543 350.462 31.855C290.985 41.0539 260.129 15.855 249.607 4.59098C244.154 -1.24582 233.854 -1.24582 228.41 4.59098C217.897 15.8464 187.066 41.0454 127.563 31.8464C121.214 30.8907 115.087 33.9712 112.314 39.5776C111.818 40.5949 111.348 41.6249 110.906 42.6667H25.6667C11.5525 42.6667 0.0666504 54.1526 0.0666504 68.2667V392.533C0.0666504 406.648 11.5525 418.133 25.6667 418.133ZM136.6 494.933V477.867H341.4V494.933H136.6ZM324.231 451.149L338.686 460.8H139.305L153.769 451.149C158.991 447.667 163.271 442.949 166.229 437.414C169.187 431.878 170.732 425.698 170.725 419.422V418.133H307.258V419.422C307.258 432.196 313.607 444.058 324.231 451.149ZM452.333 401.067H25.6667C23.4035 401.067 21.233 400.168 19.6327 398.567C18.0324 396.967 17.1333 394.797 17.1333 392.533V366.933H460.867V392.533C460.867 394.797 459.968 396.967 458.367 398.567C456.767 400.168 454.597 401.067 452.333 401.067ZM426.733 93.8667V315.733H51.2667V93.8667H102.467C102.552 251.503 221.071 293.692 234.639 298.001C237.496 298.896 240.559 298.89 243.412 297.984C252.653 295.049 285.191 283.102 315.8 252.501C355.395 212.932 375.491 159.556 375.525 93.8667H426.733ZM126.753 48.9899C190.027 58.1974 225.244 32.0086 239 18.1846C252.764 32.0171 288.041 58.1803 351.247 48.9899C353.935 55.1936 358.467 69.2651 358.467 93.696C358.467 109.005 355.105 244.079 239 281.481C122.887 244.036 119.533 109.005 119.533 93.696C119.533 69.2651 124.056 55.1851 126.753 48.9899ZM25.6667 59.7334H105.718C104.685 64.5974 103.823 70.2891 103.243 76.8001H42.7333C40.4701 76.8001 38.2997 77.6991 36.6993 79.2994C35.099 80.8997 34.2 83.0702 34.2 85.3334V324.267C34.2 326.53 35.099 328.7 36.6993 330.301C38.2997 331.901 40.4701 332.8 42.7333 332.8H435.267C437.53 332.8 439.7 331.901 441.301 330.301C442.901 328.7 443.8 326.53 443.8 324.267V85.3334C443.8 83.0702 442.901 80.8997 441.301 79.2994C439.7 77.6991 437.53 76.8001 435.267 76.8001H374.757C374.273 71.0669 373.446 65.3679 372.282 59.7334H452.333C457.044 59.7334 460.867 63.5648 460.867 68.2667V349.867H17.1333V68.2667C17.1333 63.5648 20.9563 59.7334 25.6667 59.7334Z"
        fill="white"
      />
      <Path
        d="M213.4 221.867H264.6C278.714 221.867 290.2 210.381 290.2 196.267V153.6C290.2 139.486 278.714 128 264.6 128H221.933V102.4C221.933 92.9878 229.588 85.3334 239 85.3334C248.412 85.3334 256.067 92.9878 256.067 102.4C256.067 104.663 256.966 106.834 258.566 108.434C260.166 110.034 262.337 110.933 264.6 110.933C266.863 110.933 269.034 110.034 270.634 108.434C272.234 106.834 273.133 104.663 273.133 102.4C273.133 83.5755 257.825 68.2667 239 68.2667C220.175 68.2667 204.867 83.5755 204.867 102.4V129.57C199.89 131.324 195.578 134.576 192.522 138.878C189.466 143.181 187.817 148.323 187.8 153.6V196.267C187.8 210.381 199.286 221.867 213.4 221.867ZM204.867 153.6C204.867 148.898 208.69 145.067 213.4 145.067H264.6C269.31 145.067 273.133 148.898 273.133 153.6V196.267C273.133 200.969 269.31 204.8 264.6 204.8H213.4C208.69 204.8 204.867 200.969 204.867 196.267V153.6Z"
        fill="white"
      />
    </Svg>
  );
};

const ManagementInformationSystemsComponent = () => {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 242 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M231.12 0.420044H10.88C5.155 0.420044 0.5 5.07504 0.5 10.8V178.92C0.5 184.645 5.155 189.3 10.88 189.3H93.69V205.615L82.025 211.675C81.68 211.855 81.34 212.025 80.995 212.2C77.74 213.845 73.285 216.095 73.285 221.455C73.285 227.035 77.825 231.575 83.405 231.575H158.59C164.17 231.575 168.71 227.035 168.71 221.455C168.71 216.09 164.255 213.84 161 212.2C160.66 212.025 160.315 211.855 159.97 211.675L148.305 205.615V189.3H231.115C236.84 189.3 241.495 184.645 241.495 178.92V10.8C241.5 5.07504 236.845 0.420044 231.12 0.420044ZM10.88 6.42004H231.12C233.535 6.42004 235.5 8.38504 235.5 10.8V152.745H6.5V10.8C6.5 8.38504 8.465 6.42004 10.88 6.42004ZM143.925 210.1L157.21 217.005C157.575 217.195 157.935 217.38 158.3 217.56C161.665 219.26 162.715 220.02 162.715 221.46C162.715 223.73 160.865 225.58 158.595 225.58H83.41C81.14 225.58 79.29 223.73 79.29 221.46C79.29 220.02 80.34 219.26 83.705 217.56C84.07 217.375 84.43 217.195 84.795 217.005L98.08 210.1C98.5674 209.848 98.9759 209.466 99.2608 208.997C99.5457 208.528 99.6959 207.989 99.695 207.44V189.3H142.31V207.44C142.309 207.989 142.459 208.528 142.744 208.997C143.029 209.466 143.438 209.848 143.925 210.1ZM231.12 183.3H10.88C8.465 183.3 6.5 181.335 6.5 178.92V158.745H235.5V178.92C235.5 181.335 233.535 183.3 231.12 183.3ZM92.845 66.82H95.305C96.78 72.905 100.365 78.155 105.445 81.925V92.23L73.8 108.05C65.855 110.845 60.535 118.335 60.535 126.745V146.395C60.535 148.05 61.88 149.395 63.535 149.395H178.455C180.11 149.395 181.455 148.05 181.455 146.395V126.745C181.455 118.335 176.135 110.85 168.19 108.05L136.545 92.23V82.19C141.78 78.45 145.405 73.13 146.855 66.82H149.15C153.405 66.82 156.865 63.36 156.865 59.11V56.615C156.865 52.865 154.17 49.73 150.615 49.045C152.265 39.71 149.395 28.29 143.34 21.48C140.383 18.1574 136.756 15.4979 132.698 13.6762C128.64 11.8545 124.243 10.9118 119.795 10.91C110.81 10.91 102.23 14.765 96.26 21.48C89.895 28.64 86.455 40.765 89.85 49.51C87.085 50.68 85.135 53.425 85.135 56.615V59.11C85.135 63.36 88.595 66.82 92.845 66.82ZM92.845 60.82C91.915 60.82 91.13 60.035 91.13 59.11V56.615C91.13 55.685 91.915 54.905 92.845 54.905H94.13C94.27 54.93 94.41 54.945 94.555 54.955V60.49C94.555 60.605 94.56 60.715 94.565 60.83H92.845V60.82ZM134.07 97.7L138.52 99.925L131.245 112.635L124.875 106.265L134.07 97.7ZM116.755 106.635L110.755 112.635L103.48 99.925L107.86 97.735L116.755 106.635ZM166.06 113.66C171.68 115.575 175.46 120.83 175.46 126.745V143.395H157.025V130.185C157.025 128.53 155.68 127.185 154.025 127.185C152.37 127.185 151.025 128.53 151.025 130.185V143.395H90.975V130.185C90.975 128.53 89.63 127.185 87.975 127.185C86.32 127.185 84.975 128.53 84.975 130.185V143.395H66.54V126.745C66.54 120.83 70.315 115.575 75.94 113.66C76.07 113.615 76.195 113.565 76.315 113.505L98.105 102.61L107.5 119.02C107.729 119.42 108.047 119.762 108.43 120.019C108.812 120.277 109.248 120.443 109.705 120.505C109.84 120.525 109.97 120.53 110.1 120.53C110.89 120.53 111.655 120.22 112.22 119.65L121 110.875L129.775 119.65C130.101 119.976 130.497 120.223 130.933 120.371C131.369 120.519 131.833 120.565 132.29 120.505C132.747 120.444 133.184 120.278 133.566 120.021C133.949 119.763 134.267 119.421 134.495 119.02L143.89 102.61L165.68 113.505C165.81 113.565 165.935 113.62 166.06 113.66ZM130.55 92.78L120.63 102.02L111.45 92.84V85.365C114.21 86.56 117.235 87.4 120.465 87.825L120.825 87.87L121.185 87.83C124.56 87.45 127.695 86.65 130.545 85.48V92.78H130.55ZM120.885 81.825C108.9 80.105 100.56 71.37 100.56 60.48V53.03C102.775 51.575 104.33 49.355 105.195 46.36C112.28 49.11 118.99 47.16 124.545 45.54C131.91 43.395 136.795 41.98 141.57 48.795V60.48C141.57 71.755 133.27 80.295 120.885 81.825ZM150.865 59.11C150.865 60.04 150.08 60.82 149.15 60.82H147.555C147.555 60.705 147.565 60.595 147.565 60.48V54.9H149.15C150.08 54.9 150.865 55.685 150.865 56.61V59.11ZM100.745 25.465C103.137 22.7754 106.071 20.6225 109.354 19.148C112.637 17.6735 116.196 16.9108 119.795 16.91C127.075 16.91 134.025 20.03 138.855 25.465C142.805 29.91 145.1 37.03 145.09 43.59C138.1 35.345 130.085 37.68 122.865 39.785C116.64 41.6 110.76 43.31 104.555 39.33C104.118 39.0493 103.615 38.8869 103.096 38.8588C102.577 38.8307 102.06 38.9378 101.594 39.1696C101.129 39.4014 100.732 39.75 100.442 40.1813C100.152 40.6126 99.9792 41.1118 99.94 41.63C99.6 46.11 98.16 47.89 96.02 48.615C92.535 42.315 95.41 31.465 100.745 25.465ZM41.89 85.09C59.03 85.09 72.97 71.145 72.97 54C72.97 52.345 71.625 51.005 69.97 51.005C69.91 51.005 69.855 51.005 69.8 51.01H44.89V26.175C44.895 26.095 44.9 26.015 44.9 25.93C44.9 24.275 43.555 22.93 41.9 22.93H41.89C24.75 22.93 10.81 36.875 10.81 54.01C10.81 71.145 24.75 85.09 41.89 85.09ZM38.89 29.105V54.01C38.89 55.665 40.235 57.01 41.89 57.01H66.795C65.31 69.43 54.705 79.09 41.89 79.09C28.06 79.09 16.81 67.84 16.81 54.01C16.81 41.195 26.47 30.595 38.89 29.105ZM52.175 46.725H80.255C81.05 46.725 81.815 46.405 82.375 45.84C82.654 45.561 82.8754 45.2297 83.0264 44.8651C83.1773 44.5005 83.255 44.1097 83.255 43.715C83.25 26.59 69.31 12.65 52.185 12.645H52.175C50.52 12.645 49.175 13.99 49.175 15.645V43.725C49.175 45.38 50.52 46.725 52.175 46.725ZM55.175 18.82C66.605 20.19 75.705 29.285 77.075 40.725H55.175V18.82ZM196.745 69.515C210.38 69.515 221.475 58.42 221.475 44.785C221.475 31.15 210.38 20.05 196.745 20.05C183.11 20.05 172.015 31.145 172.015 44.78C172.015 58.415 183.11 69.515 196.745 69.515ZM196.745 26.05C207.075 26.05 215.475 34.455 215.475 44.78C215.475 55.105 207.07 63.51 196.745 63.51C186.42 63.51 178.015 55.105 178.015 44.78C178.015 34.455 186.415 26.05 196.745 26.05ZM196.745 80.935C216.68 80.935 232.9 64.715 232.9 44.78C232.9 24.845 216.68 8.62504 196.745 8.62504C176.81 8.62504 160.59 24.845 160.59 44.78C160.59 64.715 176.81 80.935 196.745 80.935ZM196.745 14.63C213.37 14.63 226.9 28.155 226.9 44.785C226.9 61.415 213.375 74.94 196.745 74.94C180.12 74.94 166.59 61.415 166.59 44.785C166.59 28.155 180.12 14.63 196.745 14.63ZM193.745 44.78V31.965C193.745 30.31 195.09 28.965 196.745 28.965C198.4 28.965 199.745 30.31 199.745 31.965V41.78H205.52C207.175 41.78 208.52 43.125 208.52 44.78C208.52 46.435 207.175 47.78 205.52 47.78H196.745C195.09 47.78 193.745 46.44 193.745 44.78ZM10.66 98.925C10.66 97.27 12.005 95.925 13.66 95.925H63.005C64.66 95.925 66.005 97.27 66.005 98.925C66.005 100.58 64.66 101.925 63.005 101.925H13.66C12.005 101.925 10.66 100.58 10.66 98.925ZM10.66 113.995C10.66 112.34 12.005 110.995 13.66 110.995H46.16C47.815 110.995 49.16 112.34 49.16 113.995C49.16 115.65 47.815 116.995 46.16 116.995H13.66C12.005 116.995 10.66 115.65 10.66 113.995ZM10.66 129.06C10.66 127.405 12.005 126.06 13.66 126.06H53.55C55.205 126.06 56.55 127.405 56.55 129.06C56.55 130.715 55.205 132.06 53.55 132.06H13.66C12.005 132.06 10.66 130.72 10.66 129.06ZM10.66 144.13C10.66 142.475 12.005 141.13 13.66 141.13H38.33C39.985 141.13 41.33 142.475 41.33 144.13C41.33 145.785 39.985 147.13 38.33 147.13H13.66C12.005 147.13 10.66 145.79 10.66 144.13ZM227.925 101.63C227.925 103.285 226.58 104.63 224.925 104.63H181.49C179.835 104.63 178.49 103.285 178.49 101.63C178.49 99.975 179.835 98.63 181.49 98.63H224.925C226.585 98.63 227.925 99.975 227.925 101.63ZM227.925 114.895C227.925 116.55 226.58 117.895 224.925 117.895H196.315C194.66 117.895 193.315 116.55 193.315 114.895C193.315 113.24 194.66 111.895 196.315 111.895H224.925C226.585 111.895 227.925 113.24 227.925 114.895ZM227.925 128.16C227.925 129.815 226.58 131.16 224.925 131.16H189.81C188.155 131.16 186.81 129.815 186.81 128.16C186.81 126.505 188.155 125.16 189.81 125.16H224.925C226.585 125.16 227.925 126.505 227.925 128.16ZM227.925 141.425C227.925 143.08 226.58 144.425 224.925 144.425H203.205C201.55 144.425 200.205 143.08 200.205 141.425C200.205 139.77 201.55 138.425 203.205 138.425H224.925C226.585 138.425 227.925 139.77 227.925 141.425Z"
        fill="white"
      />
    </Svg>
  );
};

const ElectronicCommerceComponent = () => {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M469.332 76.8038H388.824C361.475 29.2873 310.824 0 256 0C201.179 0 150.53 29.2873 123.179 76.8038H42.668C19.1183 76.8326 0.0303867 95.9162 0.00158691 119.47V366.935C0.0303867 390.485 19.1183 409.573 42.668 409.602H175.9L164.517 443.735H136.534C112.984 443.764 93.8965 462.847 93.8677 486.401V512.001H418.132V486.401C418.108 462.847 399.02 443.764 375.466 443.735H347.487L336.104 409.602H469.332C492.886 409.573 511.974 390.485 511.998 366.935V119.47C511.974 95.9162 492.886 76.8326 469.332 76.8038ZM133.422 93.8703H177.155C173.414 110.694 171.32 127.841 170.901 145.07H119.905C120.993 127.28 125.587 109.88 133.422 93.8703ZM247.467 230.403V288.89C228.038 283.77 210.871 261.661 199.979 230.403H247.467ZM194.955 213.336C190.817 196.566 188.471 179.403 187.958 162.137H247.467V213.336H194.955ZM264.533 288.89V230.403H312.024C301.134 261.661 283.967 283.777 264.533 288.89ZM264.533 213.336V162.137H324.045C323.532 179.403 321.187 196.566 317.049 213.336H264.533ZM264.533 145.07V93.8703H317.049C321.187 110.641 323.532 127.804 324.045 145.07H264.533ZM264.533 76.8038V18.3167C283.967 23.4367 301.133 45.5453 312.024 76.8038H264.533ZM247.467 18.3167V76.8038H199.979C210.871 45.5453 228.038 23.4281 247.467 18.3167ZM247.467 93.8703V145.07H187.958C188.471 127.804 190.817 110.641 194.955 93.8703H247.467ZM170.901 162.137C171.32 179.366 173.415 196.513 177.155 213.336H133.422C125.587 197.327 120.993 179.927 119.905 162.137H170.901ZM181.83 230.403C187.217 248.844 196.068 266.09 207.91 281.219C181.65 271.301 159.067 253.564 143.209 230.403H181.83ZM330.174 230.403H368.795C352.938 253.564 330.355 271.301 304.096 281.219C315.937 266.09 324.788 248.844 330.176 230.403H330.174ZM378.583 213.336H334.85C338.588 196.513 340.682 179.365 341.103 162.137H392.099C391.011 179.927 386.417 197.327 378.583 213.336ZM341.103 145.07C340.682 127.841 338.588 110.694 334.85 93.8703H378.583C386.417 109.88 391.011 127.28 392.099 145.07H341.103ZM368.795 76.8038H330.176C324.788 58.3627 315.937 41.1168 304.096 25.9881C330.355 35.9053 352.939 53.6423 368.796 76.8038H368.795ZM207.909 25.9881C196.067 41.1168 187.216 58.3627 181.829 76.8038H143.209C159.066 53.6425 181.649 35.9055 207.909 25.9881ZM42.668 93.8693H114.493C87.3589 158.153 106.959 232.652 162.221 275.252C217.484 317.855 294.52 317.855 349.779 275.252C405.041 232.651 424.644 158.153 397.507 93.8693H469.332C483.474 93.8693 494.932 105.332 494.932 119.469V323.943H17.0681V119.47C17.0681 105.333 28.5305 93.8693 42.668 93.8693ZM375.466 460.8C389.608 460.8 401.066 472.263 401.066 486.4V494.933H110.934V486.4C110.934 472.263 122.397 460.8 136.534 460.8H375.466ZM329.499 443.734H182.505L193.888 409.601H318.116L329.499 443.734ZM469.332 392.534H42.668C28.5305 392.534 17.0681 381.072 17.0681 366.934V341.009H494.932V366.934C494.932 381.072 483.474 392.534 469.332 392.534Z"
        fill="white"
      />
      <Path
        d="M213.334 358.402H230.4V375.469H213.334V358.402ZM247.467 358.402H264.533V375.469H247.467V358.402ZM281.6 358.402H298.666V375.469H281.6V358.402ZM51.2013 128.003H93.8677V110.937H34.1347V307.202H51.2013V128.003ZM460.799 307.202H477.865V110.937H418.132V128.003H460.799V307.202Z"
        fill="white"
      />
    </Svg>
  );
};

const SystemsAdministrationComponent = () => {
  return (
    <Svg
      width="65"
      height="65"
      viewBox="0 0 242 242"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M241.125 73.663V44.337L230.298 41.6749C229.813 40.3685 229.275 39.0823 228.686 37.8193L234.468 28.2674L213.729 7.52838L204.181 13.3138C202.918 12.7248 201.631 12.187 200.325 11.7017L197.663 0.875H168.337L165.675 11.7017C164.369 12.187 163.082 12.7248 161.819 13.3138L152.267 7.53225L131.528 28.2712L137.31 37.8231C136.721 39.0861 136.183 40.3724 135.698 41.6787L124.875 44.337V70.625H20.25C9.56663 70.625 0.875 79.3166 0.875 90V183C0.875 193.683 9.56663 202.375 20.25 202.375H51.25V217.875H35.75C31.4759 217.875 28 221.351 28 225.625V233.375C28 237.649 31.4759 241.125 35.75 241.125H241.125V225.625C241.125 197.43 222.188 173.611 196.373 166.117C200.603 163.285 204.07 159.456 206.469 154.966C208.868 150.477 210.123 145.465 210.125 140.375C210.125 130.265 205.239 121.298 197.729 115.637L198.124 115.253L200.325 106.298C201.612 105.822 202.898 105.283 204.181 104.686L213.733 110.468L234.472 89.7288L228.69 80.1769C229.287 78.8943 229.826 77.6077 230.302 76.3212L241.125 73.663ZM20.25 78.375H152C158.409 78.375 163.625 83.5907 163.625 90V113.568C160.715 115.259 158.098 117.41 155.875 119.938V93.875C155.875 89.6009 152.399 86.125 148.125 86.125H24.125C19.8509 86.125 16.375 89.6009 16.375 93.875V171.375H8.625V90C8.625 83.5907 13.8407 78.375 20.25 78.375ZM155.875 59C155.875 44.0464 168.046 31.875 183 31.875C197.954 31.875 210.125 44.0464 210.125 59C210.125 73.9536 197.954 86.125 183 86.125C178.422 86.1115 173.923 84.9341 169.926 82.7034C168.947 80.3148 167.503 78.1449 165.678 76.32C163.852 74.4952 161.682 73.0519 159.293 72.0743C157.066 68.0752 155.891 63.577 155.875 59ZM197.981 210.005L184.627 233.375H184.225L200.255 175.661C201.91 176.362 203.522 177.153 205.091 178.009L202.635 192.761L193.788 201.608L197.981 210.005ZM173.623 233.375L160.269 210.005L164.466 201.612L155.619 192.765L153.162 178.013C154.728 177.157 156.34 176.366 157.999 175.665L174.025 233.375H173.623ZM132.625 171.375H124.875V109.375H132.625V171.375ZM155.875 168.19V160.812C157.642 162.823 159.645 164.621 161.877 166.117C159.842 166.703 157.838 167.395 155.875 168.19ZM148.125 171.375H140.375V101.625H117.125V171.375H109.375V117.125H86.125V171.375H78.375V132.625H55.125V171.375H24.125V93.875H148.125V171.375ZM101.625 171.375H93.875V124.875H101.625V171.375ZM70.625 171.375H62.875V140.375H70.625V171.375ZM8.625 183V179.125H138.255C133.2 183.57 128.897 188.804 125.514 194.625H20.25C13.8407 194.625 8.625 189.409 8.625 183ZM59 202.375H121.69C119.676 207.344 118.323 212.555 117.664 217.875H59V202.375ZM35.75 233.375V225.625H117.125V233.375H35.75ZM124.875 233.375V225.625C124.875 208.149 133.214 192.622 146.087 182.694L148.385 196.485L155.038 203.138L151.485 210.245L164.698 233.375H144.25V202.375H136.5V233.375H125.03H124.875ZM233.375 225.625V233.375H221.75V202.375H214V233.375H193.552L206.769 210.245L203.216 203.138L209.869 196.485L212.167 182.694C225.036 192.622 233.375 208.149 233.375 225.625ZM192.889 173.212L179.125 222.765L165.361 173.212C169.767 172.053 174.363 171.375 179.125 171.375C183.887 171.375 188.483 172.053 192.889 173.212ZM202.375 140.375C202.375 153.197 191.947 163.625 179.125 163.625C166.303 163.625 155.875 153.197 155.875 140.375C155.875 127.553 166.303 117.125 179.125 117.125C191.947 117.125 202.375 127.553 202.375 140.375ZM224.691 88.5507L212.551 100.691L204.514 95.828L202.584 96.8316C200.364 97.9864 198.112 98.928 195.9 99.6294L193.823 100.284L191.13 111.25L190.719 111.65C187.038 110.148 183.1 109.376 179.125 109.375C176.444 109.375 173.859 109.751 171.375 110.394V91.798C175.095 93.1155 179.005 93.875 183 93.875C202.232 93.875 217.875 78.2316 217.875 59C217.875 39.7684 202.232 24.125 183 24.125C163.768 24.125 148.125 39.7684 148.125 59C148.125 62.9951 148.884 66.905 150.202 70.625H132.625V50.413L141.72 48.1771L142.374 46.1001C143.076 43.8914 144.017 41.64 145.172 39.4158L146.176 37.486L141.313 29.4492L153.453 17.3089L161.49 22.172L163.42 21.1684C165.563 20.0459 167.8 19.1099 170.104 18.3706L172.181 17.7158L174.413 8.625H191.587L193.823 17.7196L195.9 18.3745C198.109 19.0759 200.36 20.0175 202.584 21.1722L204.514 22.1759L212.551 17.3128L224.691 29.4531L219.828 37.4899L220.832 39.4196C221.986 41.64 222.928 43.8914 223.629 46.104L224.284 48.181L233.375 50.413V67.587L224.28 69.8229L223.626 71.896C222.886 74.2012 221.95 76.4388 220.828 78.5843L219.824 80.514L224.691 88.5507Z"
        fill="white"
      />
      <Path
        d="M183 78.375C193.683 78.375 202.375 69.6834 202.375 59C202.375 48.3166 193.683 39.625 183 39.625C172.317 39.625 163.625 48.3166 163.625 59C163.625 69.6834 172.317 78.375 183 78.375ZM183 47.375C189.409 47.375 194.625 52.5907 194.625 59C194.625 65.4093 189.409 70.625 183 70.625C176.591 70.625 171.375 65.4093 171.375 59C171.375 52.5907 176.591 47.375 183 47.375ZM31.875 101.625H39.625V109.375H31.875V101.625ZM47.375 101.625H55.125V109.375H47.375V101.625ZM62.875 101.625H70.625V109.375H62.875V101.625ZM31.875 117.125H70.625V124.875H31.875V117.125Z"
        fill="white"
      />
    </Svg>
  );
};

function BITLevel400SecondSemesterCourses() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.background}>
          <View style={styles.courseOverviewContainer}>
            <View style={styles.courseRow}>
              <TouchableOpacity
                style={styles.course}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Computer Security')}
              >
                <ComputerSecurityComponent />
                <Text style={styles.courseName}>Computer Security</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.course}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Management Information Systems')
                }
              >
                <ManagementInformationSystemsComponent />
                <Text style={styles.courseName}>
                  Management Information Systems
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.courseRow}>
              <TouchableOpacity
                style={styles.course}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Electronic Commerce')}
              >
                <ElectronicCommerceComponent />
                <Text style={styles.courseName}>Electronic Commerce</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.course}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Systems Administration')}
              >
                <SystemsAdministrationComponent />
                <Text style={styles.courseName}>Systems Administration</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default BITLevel400SecondSemesterCourses;

const styles = StyleSheet.create({
  background: {
    //marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    marginTop: 15,
    marginBottom: 35,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  course: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 160,
    padding: 10,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    shadowColor: 'grey',

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  courseOverviewContainer: {
    marginTop: 10,
    paddingBottom: 15,
  },

  courseName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: 'center',
    paddingTop: 10,
  },

  courseRow: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },
});
