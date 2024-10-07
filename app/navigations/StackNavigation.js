import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigation from './TabNavigation';
import ChatScreen from '../screens/ChatScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
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

import PdfViewerScreen from '../Components/PdfViewerScreen ';

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
import useAuth from '../../hooks/useAuth';

const Stack = createStackNavigator();

function StackNavigation() {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Bottom Tab Navigation"
            component={TabNavigation}
          />
          <Stack.Screen name="Document Reader" component={PdfViewerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome Screen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen
            name="Forgot Password Screen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavigation;
