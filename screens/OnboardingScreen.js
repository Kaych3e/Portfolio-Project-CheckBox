import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('Home');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
        
    }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            // bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal: 15}}
            pages={[
                {
                    backgroundColor: '#a7f3d0',
                    image: (
                        <View style={styles.lottie}>
                           <Image style={{ width: 280, height: 280 }} source={require('../assets/images/rest.png')} />
                        </View>
                    ),
                    title: 'Boost Productivity',
                    subtitle: 'Leverage the power of CheckBox for Seamless workflow and productivity at your fingertips',
                },
                {
                    backgroundColor: '#fef3c7',
                    image: (
                        <View style={styles.lottie}>
                           <Image style={{ width: 280, height: 280 }} source={require('../assets/images/stand.png')} />
                        </View>
                    ),
                    title: 'Work Seamlessly',
                    subtitle: 'With CheckBox your tasks are perfectly arranged for a stress-free day',
                },
                {
                    backgroundColor: '#fef8e0',
                    image: (
                        <View style={styles.lottie}>
                            <Image style={{ width: 280, height: 280 }} source={require('../assets/images/task.png')} />
                        </View>
                    ),
                    title: 'Achieve Higher Goals',
                    subtitle: 'CheckBox allows you to conquer ambitions effortlessly with proper planning',
                },
            ]}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width,
        alignItems: 'center',     // Center the content horizontally
        justifyContent: 'flex-start', // Align content to the top
        marginTop: 20           // Add some top margin for space
    },
    doneButton: {
        padding: 20,
        // backgroundColor: 'white',
        // borderTopLeftRadius: '100%',
        // borderBottomLeftRadius: '100%'
    }
})