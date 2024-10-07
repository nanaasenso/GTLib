import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';

import Svg, { Path } from 'react-native-svg';

import { signOut } from 'firebase/auth';
import { auth, db } from '../../config/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from '../utils/Colors';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ChangePasswordScreen2 from '../screens/ChangePasswordScreen2';
import EditProfileScreen from '../screens/EditProfileScreen';
import EditProfileScreen2 from '../screens/EditProfileScreen2';
import UndergraduateFaculties from '../screens/UndergraduateFaculties';

// Faculty of Computing and Information Systems
import FoCIS from '../screens/FoCIS';
import BIT from '../screens/BIT';
import DiplomaInInformationTechnology from '../screens/DiplomaInInformationTechnology';
import BScMobileComputing from '../screens/BScMobileComputing';
import BScComputerScience from '../screens/BScComputerScience';
import BScSoftwareEngineering from '../screens/BScSoftwareEngineering';
import BScInformationSystems from '../screens/BScInformationSystems';
import BScDataScienceAndAnalytics from '../screens/BScDataScienceAndAnalytics';
import DiplomaInCyberSecurity from '../screens/DiplomaInCyberSecurity';
import DiplomaInComputerScience from '../screens/DiplomaInComputerScience';
import DiplomaInMultimediaTechnology from '../screens/DiplomaInMultimediaTechnology';
import BScComputerScience_CyberSecurity from '../screens/BScComputerScience_CyberSecurity';
import BScNetworkAndSystemAdministration from '../screens/BScNetworkAndSystemAdministration';
import DiplomaInDataScienceAndAnalytics from '../screens/DiplomaInDataScienceAndAnalytics';
import DiplomaInWebApplicationDevelopment from '../screens/DiplomaInWebApplicationDevelopment';
import PrinciplesOfProgramming from '../screens/PrinciplesOfProgramming';
import DiscreteStructures from '../screens/DiscreteStructures';
import ComputationalMathematics from '../screens/ComputationalMathematics';
import MicroComputerSystemsAndApplications from '../screens/MicroComputerSystemsAndApplications';
import MoralAndEthics from '../screens/MoralAndEthics';
import FunctionalFrench_I from '../screens/FunctionalFrench_I';
import SociologyOfTechnology from '../screens/SociologyOfTechnology';
import FunctionalFrench_II from '../screens/FunctionalFrench_II';
import HighLevelLanguageProgramming from '../screens/HighLevelLanguageProgramming';
import IntroductionToInformationSystems from '../screens/IntroductionToInformationSystems';
import IntroductionToInformationTechnologyLaw from '../screens/IntroductionToInformationTechnologyLaw';
import ProbabilityAndStatistics from '../screens/ProbabilityAndStatistics';
import StudySkills from '../screens/StudySkills';
import AfricanStudies from '../screens/AfricanStudies';
import ComputerArchitecture from '../screens/ComputerArchitecture';
import DataCommunicationsAndNetworks_I from '../screens/DataCommunicationsAndNetworks_I';
import FoundationsOfMultimedia from '../screens/FoundationsOfMultimedia';
import OperationalFrench from '../screens/OperationalFrench';
import SystemsAnalysisAndDesign from '../screens/SystemsAnalysisAndDesign';
import TechnicalCommunicationSkills from '../screens/TechnicalCommunicationSkills';

import AlgorithmsAndDataStructures from '../screens/AlgorithmsAndDataStructures';
import BasicEconomics from '../screens/BasicEconomics';
import DataCommunicationsAndNetworks_II from '../screens/DataCommunicationsAndNetworks_II';
import DatabaseDesignAndManagement_I from '../screens/DatabaseDesignAndManagement_I';
import DigitalComputerDesign from '../screens/DigitalComputerDesign';
import JavaProgramming from '../screens/JavaProgramming';
import PrinciplesOfEntrepreneurship from '../screens/PrinciplesOfEntrepreneurship';

import DatabaseDesignAndManagement_II from '../screens/DatabaseDesignAndManagement_II';
import InternetTechnologyAndWebDesign from '../screens/InternetTechnologyAndWebDesign';
import IntroductionToOperatingSystems from '../screens/IntroductionToOperatingSystems';
import PrinciplesOfAccountingAndManagement from '../screens/PrinciplesOfAccountingAndManagement';
import ResearchMethods from '../screens/ResearchMethods';
import SoftwareEngineering from '../screens/SoftwareEngineering';
import VisualBasicProgramming from '../screens/VisualBasicProgramming';

import AdvancedJavaTechnologies from '../screens/AdvancedJavaTechnologies';
import AdvancedVisualBasicNetProgramming from '../screens/AdvancedVisualBasicNetProgramming';
import HumanComputerInteraction from '../screens/HumanComputerInteraction';
import OpenSourceOperatingSystems from '../screens/OpenSourceOperatingSystems';
import SoftwareReliabilityAndQualityAssurance from '../screens/SoftwareReliabilityAndQualityAssurance';

import ArtificialIntelligence from '../screens/ArtificialIntelligence';
import CompilersAndTranslators from '../screens/CompilersAndTranslators';
import HumanResourceDevelopment from '../screens/HumanResourceDevelopment';
import InformationTechnologyProjectManagement from '../screens/InformationTechnologyProjectManagement';
import LegalAndEthicalUseOfInformationTechnology from '../screens/LegalAndEthicalUseOfInformationTechnology';

import ComputerSecurity from '../screens/ComputerSecurity';
import ElectronicCommerce from '../screens/ElectronicCommerce';
import ManagementInformationSystems from '../screens/ManagementInformationSystems';
import SystemsAdministration from '../screens/SystemsAdministration';

// Faculty of Engineering
import FoE from '../screens/FoE';
import BScTelecommunicationsEngineering from '../screens/BScTelecommunicationsEngineering';
import BScComputerEngineering from '../screens/BScComputerEngineering';
import BScMobileComputing_FoE from '../screens/BScMobileComputing_FoE';
import BScComputerScience_FoE from '../screens/BScComputerScience_FoE';
import BScMathematics from '../screens/BScMathematics';
import BScElectricalAndElectronicEngineering from '../screens/BScElectricalAndElectronicEngineering';
import DiplomaInTelecommunicationsEngineering from '../screens/DiplomaInTelecommunicationsEngineering';

// GCTU Business School
import GCTUBusinessSchool from '../screens/GCTUBusinessSchool';
import BScAccountingWithComputing from '../screens/BScAccountingWithComputing';
import BScEconomics from '../screens/BScEconomics';
import BScProcurementAndLogistics from '../screens/BScProcurementAndLogistics';
import BScBankingAndFinance from '../screens/BScBankingAndFinance';
import BScEcommerceAndMarketingManagement from '../screens/BScEcommerceAndMarketingManagement';
import BScBusinessAdministration from '../screens/BScBusinessAdministration';
import DiplomaInPublicRelations from '../screens/DiplomaInPublicRelations';
import DiplomaInManagement from '../screens/DiplomaInManagement';
import DiplomaInAccounting from '../screens/DiplomaInAccounting';
import DiplomaInMarketing from '../screens/DiplomaInMarketing';

// Masters and Postgraduates Programmes
import Masters_PostgraduateProgrammes from '../screens/Masters_PostgraduateProgrammes';

// Professional Programmes
import ProfessionalProgrammes from '../screens/ProfessionalProgrammes';
import PostgraduateCourses from '../screens/PostgraduateCourses';
import InformationTechnologyAndEngineering from '../screens/InformationTechnologyAndEngineering';
import CyberSecurity from '../screens/CyberSecurity';
import ProfessionalTraining from '../screens/ProfessionalTraining';
import SkillsDevelopment from '../screens/SkillsDevelopment';

// Accelerated Certificate Programmes
import AcceleratedCertificateProgrammes from '../screens/AcceleratedCertificateProgrammes';

// Access Programmes and Courses
import AccessProgrammes_Courses from '../screens/AccessProgrammes_Courses';

import BITLevel100FirstSemesterCourses from '../screens/BITLevel100FirstSemesterCourses';
import BITLevel100SecondSemesterCourses from '../screens/BITLevel100SecondSemesterCourses';
import BITLevel200FirstSemesterCourses from '../screens/BITLevel200FirstSemesterCourses';
import BITLevel200SecondSemesterCourses from '../screens/BITLevel200SecondSemesterCourses';
import BITLevel300FirstSemesterCourses from '../screens/BITLevel300FirstSemesterCourses';
import BITLevel300SecondSemesterCourses from '../screens/BITLevel300SecondSemesterCourses';
import BITLevel400FirstSemesterCourses from '../screens/BITLevel400FirstSemesterCourses';
import BITLevel400SecondSemesterCourses from '../screens/BITLevel400SecondSemesterCourses';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

// Svg component for the cap image
const CapImage = () => {
  return (
    <Svg
      width="40"
      height="45"
      fill={Colors.WHITE}
      stroke={Colors.WHITE}
      strokeWidth="0.1"
      viewBox="0 0 16 16"
    >
      <Path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
      <Path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
    </Svg>
  );
};

// Svg component for the hand-wave icon
const HandWaveIcon = () => {
  return (
    <Svg
      width="24"
      height="23"
      viewBox="0 0 199 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22.2632 103.853L68.5307 127.484C69.8988 128.168 72.8838 129.847 74.5628 127.111C76.1175 124.562 73.5057 122.509 72.2619 121.577L18.4075 80.3462C14.4897 77.2369 13.6191 71.2047 16.6041 67.1003C19.5891 62.8094 25.8078 61.5656 30.0366 64.4884L84.7616 103.729C85.7566 104.475 88.4928 106.465 90.4828 104.164C92.4728 101.987 90.2963 99.5 89.4257 98.5672L38.6185 44.9616C34.9494 40.9194 35.1982 34.2031 40.111 29.6634C44.0288 26.0566 50.9316 25.9322 54.6628 29.7878L104.599 81.7766C105.346 82.5228 107.647 84.8859 110.01 83.1447C112.435 81.2791 110.694 78.5428 110.258 77.4856L79.2269 25.9944C77.1125 22.6984 77.0503 15.92 82.7716 12.4997C88.6794 9.01718 94.3385 12.4997 96.515 16.1687L131.029 71.64C135.942 79.8487 143.653 86.7516 150.494 89.9853C155.78 92.4728 159.884 89.3012 160.568 83.7666C161.625 75.1847 163.304 64.5506 166.289 55.5956C169.399 46.2053 180.344 41.5412 189.672 46.2675L186.5 58.7672C183.329 71.4534 182.956 84.7616 185.132 97.6966C186.998 108.517 188.863 122.447 188.615 134.822C188.304 153.479 175.742 161.625 164.486 171.762C115.918 215.853 80.595 155.904 63.3691 147.384L13.3082 119.587C9.07941 117.161 8.1466 111.502 10.6341 107.398C13.0594 103.418 18.0344 101.677 22.2632 103.853Z"
        fill="#FFD700"
      />
      <Path
        d="M175.12 46.0188C176.613 46.3297 178.043 46.765 179.473 47.4491L176.302 59.9488C173.13 72.635 172.757 85.9431 174.933 98.8781C176.799 109.699 178.665 123.629 178.416 136.004C178.105 154.66 165.543 162.807 154.287 172.943C145.083 181.277 136.377 185.878 128.168 187.806C139.238 187.993 151.364 183.702 164.424 171.824C175.68 161.688 188.179 153.541 188.553 134.885C188.801 122.447 186.936 108.517 185.07 97.7588C182.831 84.8238 183.267 71.5156 186.438 58.8294L189.61 46.3297C184.821 43.9044 179.535 44.0288 175.12 46.0188Z"
        fill="#FFD700"
      />
      <Path
        d="M174.996 92.7216C176.861 103.542 178.727 117.472 178.478 129.847C178.167 148.504 165.605 156.65 154.349 166.787C134.947 184.386 117.659 185.381 102.796 179.722C119.711 189.983 140.482 193.652 164.486 171.824C175.742 161.687 188.242 153.541 188.615 134.885C188.863 122.447 186.998 108.517 185.132 97.7587C182.956 84.8237 172.757 79.7866 174.996 92.7216ZM44.4641 30.9072L99.8109 87.9331C100.557 88.6794 102.858 91.0425 105.221 89.3012C107.647 87.4356 105.905 84.6994 105.47 83.6422L103.045 79.6L54.6628 29.85C51.2425 26.3053 45.2725 26.1187 41.2925 28.7928C42.4741 29.2903 43.5313 29.9744 44.4641 30.9072ZM19.3403 65.9809L80.0353 109.45C81.1547 110.258 84.2019 112.435 86.3784 109.885C88.3063 107.833 86.7516 105.47 85.6944 104.226L30.5963 64.7372C26.9272 62.1875 21.7034 62.5606 18.0966 65.2969C18.5319 65.5456 18.9672 65.7322 19.3403 65.9809ZM86.3163 17.2881L120.83 72.7594C125.743 80.9681 133.454 87.8709 140.295 91.1047C143.964 92.8459 147.073 91.7266 148.877 89.0525C142.472 85.57 135.631 79.2269 131.029 71.64L96.515 16.1687C94.3385 12.4997 88.6794 9.01718 82.7716 12.4997C82.3984 12.6862 82.1497 12.935 81.8388 13.1837C83.7666 14.2409 85.3834 15.7334 86.3163 17.2881ZM65.0481 133.268C66.6028 134.076 70.1475 136.004 72.0753 132.832C72.8216 131.589 72.635 130.532 72.1997 129.599L22.8228 104.351C18.905 102.361 14.5519 103.231 11.5047 105.905L65.0481 133.268Z"
        fill="#FFD700"
      />
      <Path
        d="M129.039 190.978C106.652 190.978 88.4306 173.69 75.7444 161.687C70.2719 156.464 65.4834 151.986 62.0009 150.245L11.8156 122.385C9.20376 120.892 7.33813 118.467 6.59188 115.482C5.72126 112.248 6.28094 108.766 7.96001 105.843C11.2559 100.246 17.9722 98.1941 23.6313 101.055L69.8988 124.686C70.3963 124.935 71.5778 125.494 71.9509 125.494C71.7644 125.308 71.2669 124.81 70.3341 124.064L16.4797 82.8337C13.9372 80.7581 12.2695 77.8011 11.8085 74.5515C11.3476 71.3018 12.1272 67.9977 13.9922 65.2969C15.92 62.5606 18.9672 60.5706 22.4497 60.0109C25.8078 59.3891 29.1038 60.1353 31.7156 62.0009L86.5028 101.241C87.6222 102.112 88.0575 102.174 88.1819 102.174C88.1197 102.112 87.9953 101.614 87.1869 100.744L36.3175 47.1381C31.3425 41.5412 32.0266 32.8972 37.9344 27.4247C43.2203 22.6362 52.0509 22.7606 56.8394 27.6734L106.776 79.6622C107.647 80.5328 108.02 80.6572 108.206 80.7194C108.144 80.4084 107.709 79.5378 107.584 79.2269L76.4906 27.6734C74.8116 25.1237 74.2519 21.3925 75.0603 18.0344C75.8688 14.6141 77.9831 11.8156 81.0925 9.95C88.1197 5.78344 95.7688 9.07937 99.1269 14.6762L133.579 70.1475C137.932 77.4234 145.083 84.1397 151.738 87.3734C152.67 87.8087 154.101 88.1819 155.22 87.56C156.339 86.9381 157.148 85.5078 157.397 83.5178C158.392 75.8066 160.008 64.3641 163.242 54.7872C164.983 49.4391 169.026 45.1481 174.312 42.9716C179.66 40.795 185.754 41.0437 191.04 43.6556C192.346 44.3397 193.03 45.77 192.657 47.2003L189.485 59.7C186.438 71.8888 186.003 84.575 188.179 97.3234C190.729 111.937 191.911 124.624 191.724 135.071C191.413 152.67 181.028 161.687 170.953 170.456C169.523 171.7 168.031 173.006 166.6 174.312C153.168 186.376 140.544 190.978 129.039 190.978ZM18.3453 106.03C16.3553 106.03 14.4897 107.087 13.3703 109.015V109.077C12.4997 110.507 12.2509 112.311 12.6241 113.927C12.8728 114.86 13.4947 116.166 14.8628 116.975L64.8616 144.773C69.0903 146.825 74.1275 151.613 79.9731 157.21C99.8109 175.991 126.925 201.736 162.372 169.585C163.864 168.217 165.357 166.973 166.849 165.667C176.675 157.086 185.194 149.748 185.505 134.885C185.692 124.873 184.51 112.559 182.085 98.3184C179.722 84.6994 180.219 71.1425 183.453 58.0831L185.941 48.1953C182.893 47.2625 179.66 47.3869 176.675 48.6306C173.068 50.1231 170.332 53.0459 169.15 56.6528C166.103 65.7944 164.486 76.7394 163.553 84.2019C163.056 88.1197 161.128 91.2912 158.267 92.9081C155.593 94.4006 152.297 94.4006 149.126 92.9081C141.29 89.1769 133.33 81.6522 128.355 73.3191L93.8409 17.8478C92.8459 16.2309 89.0525 12.3753 84.3263 15.2359C82.7997 16.1166 81.6783 17.5595 81.2019 19.2562C80.7254 20.9529 80.9317 22.7687 81.7766 24.3153L112.87 75.8687C115.607 81.2791 113.803 84.0775 111.875 85.57C110.196 86.8137 106.776 88.3062 102.423 84.0153L52.4241 31.9644C49.9366 29.4769 44.9616 29.4769 42.2253 31.9644C38.4319 35.5091 38.5563 40.2975 40.9194 42.9094L91.6644 96.3906C95.4578 100.371 94.7116 104.102 92.7216 106.278C91.8509 107.273 88.4306 110.445 82.8338 106.216L28.1088 67.0381C26.865 66.1675 25.2481 65.7944 23.5069 66.1053C21.7034 66.4162 20.0866 67.4112 19.0916 68.8416C17.1016 71.64 17.6613 75.8066 20.2731 77.9209L74.0653 119.089C79.0403 123.007 78.4806 126.489 77.1125 128.666C75.6822 131.029 72.7594 133.206 67.1003 130.221L20.7706 106.527C20.0244 106.216 19.2159 106.03 18.3453 106.03ZM48.9416 179.473C39.9756 179.455 31.19 176.952 23.5605 172.243C15.9309 167.534 9.75594 160.802 5.72126 152.795C5.36695 152.051 5.31829 151.198 5.5857 150.419C5.85312 149.64 6.41531 148.997 7.15157 148.628C8.70626 147.882 10.5719 148.504 11.3181 149.996C14.9325 157.148 20.5051 163.126 27.3864 167.233C34.2678 171.34 42.1745 173.407 50.1853 173.192C51.9266 173.254 53.3569 174.498 53.3569 176.239C53.3736 176.65 53.3072 177.06 53.1616 177.444C53.016 177.828 52.7942 178.179 52.5096 178.475C52.2249 178.771 51.8833 179.007 51.5053 179.168C51.1272 179.329 50.7205 179.411 50.3097 179.411C49.8744 179.473 49.4391 179.473 48.9416 179.473ZM48.6306 164.051H48.3197C42.4344 163.474 36.7777 161.474 31.8375 158.224C26.8972 154.974 22.8217 150.571 19.9622 145.394C19.7627 145.036 19.6365 144.641 19.5911 144.233C19.5457 143.826 19.582 143.413 19.6977 143.019C19.8135 142.626 20.0065 142.259 20.2654 141.941C20.5244 141.623 20.8441 141.359 21.2059 141.166C22.6984 140.357 24.6263 140.855 25.4347 142.409C30.2231 151.116 39.0538 156.899 48.9416 157.894C50.6206 158.081 51.9266 159.573 51.74 161.314C51.5534 162.869 50.1853 164.051 48.6306 164.051Z"
        fill="#455A64"
      />
      <Path
        d="M153.168 50.8694C151.613 50.8694 150.245 49.6878 150.058 48.0709C149.168 40.1091 146.036 32.5635 141.028 26.3108C136.019 20.0581 129.339 15.3552 121.763 12.7484C121.379 12.6178 121.025 12.4128 120.72 12.1452C120.416 11.8776 120.167 11.5526 119.988 11.1888C119.809 10.825 119.703 10.4295 119.677 10.0249C119.651 9.62027 119.705 9.21446 119.835 8.83063C119.966 8.4468 120.171 8.09247 120.439 7.78786C120.706 7.48325 121.031 7.23433 121.395 7.05532C121.759 6.8763 122.154 6.7707 122.559 6.74453C122.964 6.71837 123.369 6.77215 123.753 6.90282C141.414 12.935 154.163 28.855 156.215 47.4491C156.402 49.1281 155.158 50.6828 153.479 50.8694H153.168ZM138.056 53.9788C136.564 53.9788 135.196 52.8594 135.009 51.3047C134.276 46.4547 132.376 41.8553 129.473 37.9016C126.57 33.9478 122.751 30.758 118.343 28.6063C117.601 28.2434 117.033 27.6006 116.765 26.8192C116.497 26.0378 116.55 25.1819 116.913 24.4397C117.275 23.6975 117.918 23.1299 118.7 22.8616C119.481 22.5934 120.337 22.6465 121.079 23.0094C126.387 25.6111 130.985 29.4586 134.483 34.2234C137.981 38.9882 140.274 44.5287 141.166 50.3719C141.414 52.0509 140.233 53.6678 138.554 53.9166C138.367 53.9166 138.243 53.9788 138.056 53.9788Z"
        fill="#455A64"
      />
    </Svg>
  );
};

function HomeScreenNavigation() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const handleProfile = () => {
    setModalVisible(true);
  };

  // Close the modal when navigating away from the screen
  useFocusEffect(
    useCallback(() => {
      return () => setModalVisible(false);
    }, [])
  );

  // APPLICATION LOGOUT FUNCTION
  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate('Login'); // Redirect to login screen
  };

  // Retrieving the user data from Firestore Database

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);

      // Set up Firestore listener
      const unsubscribe = onSnapshot(userDocRef, doc => {
        if (doc.exists()) {
          const userData = doc.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
        } else {
          console.log('User document does not exist');
        }
        setLoading(false);
      });

      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    } else {
      console.log('No user is signed in');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors.PRIMARY}
        style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
      />
    );
  }

  // Utility function to get initials
  const getInitials = fullName => {
    const names = fullName.split(' ');
    const initials = names.reduce((result, name) => {
      if (name) {
        result += name[0].toUpperCase();
      }
      return result;
    }, '');

    return initials;
  };

  // Example usage of getInitials function
  const fullName = firstName + ' ' + lastName;
  const initials = getInitials(fullName);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            height: 110,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: null,
          headerLeft: () => (
            <View>
              <View style={styles.rowStyleHeader}>
                <View style={styles.headerLeft}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto-BoldItalic',
                        fontSize: 20,
                        color: Colors.BLACK,
                      }}
                    >
                      Welcome
                    </Text>
                    <HandWaveIcon />
                  </View>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 20,
                      color: Colors.BLACK,
                    }}
                  >
                    {firstName} {lastName}
                  </Text>
                </View>
              </View>

              <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <TouchableWithoutFeedback
                  onPress={e => {
                    if (e.target === e.currentTarget) {
                      setModalVisible(false);
                    }
                  }}
                >
                  <View style={styles.modalBackground}>
                    <View style={styles.modalView}>
                      <View>
                        <TouchableOpacity
                          style={styles.closeButton}
                          activeOpacity={0.5}
                          onPress={() => setModalVisible(!modalVisible)}
                        >
                          <Ionicons
                            name="close"
                            size={35}
                            color={Colors.PRIMARY}
                          />
                        </TouchableOpacity>
                      </View>

                      <View style={styles.modalProfileStyle}>
                        <View style={styles.modalProfile}>
                          <Text style={styles.modalProfileInitials}>
                            {initials}
                          </Text>
                        </View>

                        <View
                          style={{ flexDirection: 'column', paddingLeft: 7 }}
                        >
                          <Text
                            style={{
                              fontFamily: 'Roboto-Regular',
                              fontSize: 20,
                              color: Colors.PRIMARY,
                            }}
                          >
                            {firstName} {lastName}
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Roboto-Light',
                              fontSize: 17,
                              color: Colors.PRIMARY,
                            }}
                          >
                            {email}
                          </Text>
                        </View>
                      </View>

                      <View style={styles.line} />

                      <TouchableOpacity
                        style={styles.wrap}
                        activeOpacity={0.7}
                        onPress={() => {
                          setModalVisible(false); // Close modal before navigating
                          navigation.navigate('Edit Profile 2');
                        }}
                      >
                        <FontAwesome5
                          name="user-edit"
                          size={24}
                          color={Colors.PRIMARY}
                        />
                        <Text style={styles.textStyle}>Edit Profile</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.wrap}
                        activeOpacity={0.7}
                        onPress={() => {
                          setModalVisible(false); // Close modal before navigating
                          navigation.navigate('Change Password 2');
                        }}
                      >
                        <FontAwesome5
                          name="user-lock"
                          size={24}
                          color={Colors.PRIMARY}
                        />
                        <Text style={styles.textStyle}>Change Password</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.wrap}
                        activeOpacity={0.7}
                        onPress={async () => {
                          setModalVisible(false); // Close modal before navigating
                          await handleLogout();
                        }}
                      >
                        <Entypo name="log-out" size={24} color="red" />
                        <Text
                          style={{
                            color: 'red',
                            fontFamily: 'Roboto-Regular',
                            fontSize: 18,
                            paddingLeft: 10,
                          }}
                        >
                          Logout
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          ),

          headerRight: () => (
            <TouchableOpacity activeOpacity={0.7} onPress={handleProfile}>
              <View style={styles.profile}>
                <Text style={styles.profileInitials}>{initials}</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Change Password 2"
        component={ChangePasswordScreen2}
        options={{
          headerStyle: {
            height: 95,
            backgroundColor: Colors.WHITE,
          },
          headerTitle: () => (
            <Text style={styles.changePassword}>Change Password</Text>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={styles.backArrowContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Home')}
              >
                <Ionicons
                  name="chevron-back"
                  size={33}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 5,
          },
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Profile 2"
        component={EditProfileScreen2}
        options={{
          headerStyle: {
            height: 90,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => (
            <Text style={styles.editProfileText}>Edit Profile</Text>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={styles.backArrowContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Home')}
              >
                <Ionicons
                  name="chevron-back"
                  size={33}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 5,
          },
        }}
      />
      <Stack.Screen
        name="Undergraduate Faculties"
        component={UndergraduateFaculties}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Undergraduate Faculties</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="FoCIS"
        component={FoCIS}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Undergraduate Faculties')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Faculty of Computing & Information Systems (FoCIS)
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="FoE"
        component={FoE}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Undergraduate Faculties')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Faculty of Engineering (FoE)</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="GCTU Business School"
        component={GCTUBusinessSchool}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Undergraduate Faculties')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>GCTU Business School</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Masters Postgraduate & Programmes"
        component={Masters_PostgraduateProgrammes}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Masters & Postgraduate Programmes
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Professional Programmes"
        component={ProfessionalProgrammes}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Professional Programmes (CSBPD)
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Postgraduate Courses"
        component={PostgraduateCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Professional Programmes')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Postgraduate Courses</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Information Technology and Engineering"
        component={InformationTechnologyAndEngineering}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Professional Programmes')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Information Technology & Engineering
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Cyber Security"
        component={CyberSecurity}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Professional Programmes')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Cyber Security</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Professional Training"
        component={ProfessionalTraining}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Professional Programmes')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Professional Training</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Skills Development"
        component={SkillsDevelopment}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Professional Programmes')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Skills Development</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Accelerated Certificate Programmes"
        component={AcceleratedCertificateProgrammes}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Accelerated Certificate Programmes
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Access Programmes & Courses"
        component={AccessProgrammes_Courses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Access Programmes & Courses</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BIT"
        component={BIT}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Information Technology</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma in Information Technology"
        component={DiplomaInInformationTechnology}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Diploma in Information Technology
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Mobile Computing"
        component={BScMobileComputing}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Mobile Computing</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Computer Science"
        component={BScComputerScience}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Computer Science</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Software Engineering"
        component={BScSoftwareEngineering}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Software Engineering</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Information Systems"
        component={BScInformationSystems}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Information Systems</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Data Science and Analytics"
        component={BScDataScienceAndAnalytics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Data Science and Analytics
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma in CyberSecurity"
        component={DiplomaInCyberSecurity}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Diploma in Cyber Security</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma in Computer Science"
        component={DiplomaInComputerScience}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Diploma in Computer Science</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma in Multimedia Technology"
        component={DiplomaInMultimediaTechnology}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Diploma in Multimedia Technology
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Computer Science_CyberSecurity"
        component={BScComputerScience_CyberSecurity}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Computer Science (CyberSecurity)
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Network and System Administration"
        component={BScNetworkAndSystemAdministration}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Network and System Administration
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma in Data Science and Analytics"
        component={DiplomaInDataScienceAndAnalytics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Diploma in Data Science and Analytics
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma in Web Application Development"
        component={DiplomaInWebApplicationDevelopment}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Diploma in Web Application Development
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Telecommunications Engineering"
        component={BScTelecommunicationsEngineering}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Telecommunications Engineering
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Computer Engineering"
        component={BScComputerEngineering}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Computer Engineering</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Mobile Computing_FoE"
        component={BScMobileComputing_FoE}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Mobile Computing</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Computer Science (FoE)"
        component={BScComputerScience_FoE}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Computer Science</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Mathematics"
        component={BScMathematics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Mathematics</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Electrical And Electronic Engineering"
        component={BScElectricalAndElectronicEngineering}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Electrical And Electronic Engineering
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma In Telecommunications Engineering"
        component={DiplomaInTelecommunicationsEngineering}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Diploma In Telecommunications Engineering
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Accounting With Computing"
        component={BScAccountingWithComputing}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Accounting With Computing
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Economics"
        component={BScEconomics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Economics</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Procurement And Logistics"
        component={BScProcurementAndLogistics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Procurement And Logistics
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Banking And Finance"
        component={BScBankingAndFinance}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Banking And Finance</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Ecommerce And Marketing Management"
        component={BScEcommerceAndMarketingManagement}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  BSc. Ecommerce And Marketing Management
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BSc Business Administration"
        component={BScBusinessAdministration}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>BSc. Business Administration</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma In Public Relations"
        component={DiplomaInPublicRelations}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Diploma In Public Relations</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma In Management"
        component={DiplomaInManagement}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Diploma In Management</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma In Accounting"
        component={DiplomaInAccounting}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Diploma In Accounting</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Diploma In Marketing"
        component={DiplomaInMarketing}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Diploma In Marketing</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="BIT Level 100 First Semester Courses"
        component={BITLevel100FirstSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>First Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BIT Level 100 Second Semester Courses"
        component={BITLevel100SecondSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Second Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BIT Level 200 First Semester Courses"
        component={BITLevel200FirstSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>First Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BIT Level 200 Second Semester Courses"
        component={BITLevel200SecondSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Second Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BIT Level 300 First Semester Courses"
        component={BITLevel300FirstSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>First Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BIT Level 300 Second Semester Courses"
        component={BITLevel300SecondSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Second Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BIT Level 400 First Semester Courses"
        component={BITLevel400FirstSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>First Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="BIT Level 400 Second Semester Courses"
        component={BITLevel400SecondSemesterCourses}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('BIT')}
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Second Semester Courses</Text>
              </View>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Principles of Programming"
        component={PrinciplesOfProgramming}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Principles of Programming</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Discrete Structures"
        component={DiscreteStructures}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Discrete Structures</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Computational Mathematics"
        component={ComputationalMathematics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Computational Mathematics</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Micro-Computer Systems and Applications"
        component={MicroComputerSystemsAndApplications}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Micro-Computer Systems and Applications
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Moral and Ethics"
        component={MoralAndEthics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Moral and Ethics</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Functional French I"
        component={FunctionalFrench_I}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Functional French (I)</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Sociology of Technology"
        component={SociologyOfTechnology}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Sociology of Technology</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Functional French II"
        component={FunctionalFrench_II}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Functional French (II)</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="High Level Language Programming"
        component={HighLevelLanguageProgramming}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  High Level Language Programming
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Introduction to Information Systems"
        component={IntroductionToInformationSystems}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Introduction to Information Systems
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Introduction to Information Technology Law"
        component={IntroductionToInformationTechnologyLaw}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Introduction to Information Technology Law
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Probability and Statistics"
        component={ProbabilityAndStatistics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Probability and Statistics</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Study Skills"
        component={StudySkills}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 100 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Study Skills</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="African Studies"
        component={AfricanStudies}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>African Studies</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Computer Architecture"
        component={ComputerArchitecture}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Computer Architecture</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Data Communications and Networks I"
        component={DataCommunicationsAndNetworks_I}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Data Communications and Networks I
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Foundations of Multimedia"
        component={FoundationsOfMultimedia}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Foundations of Multimedia</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Operational French"
        component={OperationalFrench}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Operational French</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Systems Analysis and Design"
        component={SystemsAnalysisAndDesign}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Systems Analysis and Design</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Technical Communication Skills"
        component={TechnicalCommunicationSkills}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Technical Communication Skills
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Algorithms and Data Structures"
        component={AlgorithmsAndDataStructures}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Algorithms and Data Structures
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Basic Economics"
        component={BasicEconomics}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Basic Economics</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Data Communications and Networks II"
        component={DataCommunicationsAndNetworks_II}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Data Communications and Networks II
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Database Design and Management I"
        component={DatabaseDesignAndManagement_I}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Database Design and Management I
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Digital Computer Design"
        component={DigitalComputerDesign}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Digital Computer Design</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Java Programming"
        component={JavaProgramming}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Java Programming</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Principles of Entrepreneurship"
        component={PrinciplesOfEntrepreneurship}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 200 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Principles of Entrepreneurship
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Database Design and Management II"
        component={DatabaseDesignAndManagement_II}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Database Design and Management II
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Internet Technology and Web Design"
        component={InternetTechnologyAndWebDesign}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Internet Technology and Web Design
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Introduction to Operating Systems"
        component={IntroductionToOperatingSystems}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Introduction to Operating Systems
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Principles of Accounting and Management"
        component={PrinciplesOfAccountingAndManagement}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Principles of Accounting and Management
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Research Methods"
        component={ResearchMethods}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Research Methods</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Software Engineering"
        component={SoftwareEngineering}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Software Engineering</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Visual Basic Programming"
        component={VisualBasicProgramming}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Visual Basic Programming</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Advanced Java Technologies"
        component={AdvancedJavaTechnologies}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Advanced Java Technologies</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Advanced Visual Basic .Net Programming"
        component={AdvancedVisualBasicNetProgramming}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Advanced Visual Basic .Net Programming
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Human Computer Interaction"
        component={HumanComputerInteraction}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Human Computer Interaction</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Open Source Operating Systems"
        component={OpenSourceOperatingSystems}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Open Source Operating Systems
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Software Reliability and Quality Assurance"
        component={SoftwareReliabilityAndQualityAssurance}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 300 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Software Reliability and Quality Assurance
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Artificial Intelligence"
        component={ArtificialIntelligence}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Artificial Intelligence</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Compilers and Translators"
        component={CompilersAndTranslators}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Compilers and Translators</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Human Resource Development"
        component={HumanResourceDevelopment}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Human Resource Development</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Information Technology Project Management"
        component={InformationTechnologyProjectManagement}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Information Technology Project Management
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Legal and Ethical Use of Information Technology"
        component={LegalAndEthicalUseOfInformationTechnology}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 First Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Legal and Ethical Use of Information Technology
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Computer Security"
        component={ComputerSecurity}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Computer Security</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Electronic Commerce"
        component={ElectronicCommerce}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Electronic Commerce</Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Management Information Systems"
        component={ManagementInformationSystems}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>
                  Management Information Systems
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Systems Administration"
        component={SystemsAdministration}
        options={{
          headerStyle: {
            height: 170,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => null,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View>
              <View style={styles.backArrow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    navigation.navigate('BIT Level 400 Second Semester Courses')
                  }
                >
                  <Ionicons
                    name="chevron-back"
                    size={33}
                    color={Colors.BLACK}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.courseProfile}>
                  <CapImage />
                </View>

                <Text style={styles.heading}>Systems Administration</Text>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreenNavigation;

const styles = StyleSheet.create({
  backArrow: {
    marginBottom: 10,
    width: 45,
    height: 45,
    marginLeft: 10,
  },

  backArrowContainer: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  changePassword: {
    marginTop: 15,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.PRIMARY,
  },

  courseProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 60,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginLeft: 15,
  },

  editProfileText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.PRIMARY,
    marginTop: 15,
  },

  headerLeft: {
    marginLeft: 10,
  },

  heading: {
    paddingLeft: 10,
    fontFamily: 'Roboto-Bold',
    color: Colors.BLACK,
    fontSize: 20,
    marginRight: 90,
  },

  profile: {
    backgroundColor: Colors.PRIMARY,
    width: 50,
    height: 50,
    borderRadius: Platform.OS === 'android' ? 25 : 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  profileInitials: {
    color: Colors.WHITE,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },

  rowStyleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // STYLING FOR THE MODAL

  closeButton: {
    alignSelf: 'flex-end',
  },

  line: {
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.PRIMARY,
  },

  modalBackground: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    paddingHorizontal: 15,
  },

  modalProfile: {
    backgroundColor: Colors.PRIMARY,
    width: 50,
    height: 50,
    borderRadius: Platform.OS === 'android' ? 25 : 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalProfileInitials: {
    color: Colors.WHITE,
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },

  modalProfileStyle: {
    padding: 5,
    //justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  modalView: {
    marginTop: 20,
    width: '100%',
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    //justifyContent: 'flex-end',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: Colors.PRIMARY,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    paddingLeft: 10,
  },

  wrap: {
    marginTop: 25,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
