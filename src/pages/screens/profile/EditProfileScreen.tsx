import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FIREBASE_APP, FIREBASE_AUTH } from '../../../config/firebase/FirebaseConfig';
import { updateProfile } from 'firebase/auth';


interface EditProfileProps{

}

export default function EditProfile(props : EditProfileProps){
    const user = FIREBASE_AUTH.currentUser
    const [formData, setFormData] = useState({displayName: ""});

    const updateUser = () =>{
        updateProfile(user, formData)
    }

    
    return (
        <View>


        </View>
    )
}