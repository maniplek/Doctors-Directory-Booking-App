import * as actionType from "./actionTypes"
import { v4 as uuid } from 'uuid'


const initialState: DoctorState = {
doctors: [
    {
         profilePicture: "https://img.freepik.com/free-photo/portrait-successful-young-doctor-with-folder-stethoscope_1262-12410.jpg?w=1380&t=st=1655336202~exp=1655336802~hmac=6f736560764297358349751eddccb19c27fdea8da4761fdc9f4e42fb6db01285",
        name: "Dr Djohn",
        id: uuid(),
        doctorTitle: "MD",
        bio: "classic medical textbook on the history of medicine with a focus on the biographies of individuals who have made revolutionary advances in the field.",
        phoneNumber: 250788917179 ,
        fax: 925-274-9000,
        location: "KIGALI",
        depertment: "Urology",
    },
    {
        profilePicture: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1655336187~exp=1655336787~hmac=d98889763bc83172d7b5afb8e07e30719f2d50d14980c1880d0b4f28e386cb00&w=1380",
       name: "Emly",
       id: uuid(),
       doctorTitle: "MD",
       bio: "JAKSDADKHAKDHAKDAKDKAD",
       phoneNumber: 250788917179 ,
       fax: 925-274-9000,
       location: "KIGALI",
       depertment: "Urology",
   },
   {
    profilePicture: "https://img.freepik.com/free-photo/black-woman-with-stethoscope_1157-15563.jpg?t=st=1655339487~exp=1655340087~hmac=4321e68168f63dc24f1c848ce97c78e397b58257b3561a2cda2849327d34ecba&w=1380",
   name: "Dr Raissa",
   id: uuid(),
   doctorTitle: "MD",
   bio: "classic medical textbook on the history of medicine with a focus on the biographies of individuals who have made revolutionary advances in the field.",
   phoneNumber: 250788917179 ,
   fax: 925-274-9000,
   location: "KIGALI",
   depertment: "Urology",
},
    
    {
        profilePicture: "https://img.freepik.com/free-photo/portrait-friendly-male-doctor-dressed-uniform_171337-105.jpg?t=st=1655339528~exp=1655340128~hmac=286200679b868c09a945d8a479e8bb3172b7378202959c5ed8ae33a3a118a0e7&w=1380",
       name: "Dr Flank",
       id: uuid(),
       doctorTitle: "MD",
       bio: "classic medical textbook on the history of medicine with a focus on the biographies of individuals who have made revolutionary advances in the field.",
       phoneNumber: 250788917179 ,
       fax: 925-274-9000,
       location: "KIGALI",
       depertment: "Urology",
   },
   {
    profilePicture: "https://img.freepik.com/free-photo/portrait-friendly-male-doctor-dressed-uniform_171337-105.jpg?t=st=1655339528~exp=1655340128~hmac=286200679b868c09a945d8a479e8bb3172b7378202959c5ed8ae33a3a118a0e7&w=1380",
   name: "Dr Flank",
   id: uuid(),
   doctorTitle: "MD",
   bio: "classic medical textbook on the history of medicine with a focus on the biographies of individuals who have made revolutionary advances in the field.",
   phoneNumber: 250788917179 ,
   fax: 925-274-9000,
   location: "KIGALI",
   depertment: "Urology",
},
{
    profilePicture: "https://img.freepik.com/free-photo/portrait-friendly-male-doctor-dressed-uniform_171337-105.jpg?t=st=1655339528~exp=1655340128~hmac=286200679b868c09a945d8a479e8bb3172b7378202959c5ed8ae33a3a118a0e7&w=1380",
   name: "Dr Flank",
   id: uuid(),
   doctorTitle: "MD",
   bio: "classic medical textbook on the history of medicine with a focus on the biographies of individuals who have made revolutionary advances in the field.",
   phoneNumber: 250788917179 ,
   fax: 925-274-9000,
   location: "KIGALI",
   depertment: "Urology",
},
{
    profilePicture: "https://img.freepik.com/free-photo/portrait-friendly-male-doctor-dressed-uniform_171337-105.jpg?t=st=1655339528~exp=1655340128~hmac=286200679b868c09a945d8a479e8bb3172b7378202959c5ed8ae33a3a118a0e7&w=1380",
   name: "Dr Flank",
   id: uuid(),
   doctorTitle: "MD",
   bio: "classic medical textbook on the history of medicine with a focus on the biographies of individuals who have made revolutionary advances in the field.",
   phoneNumber: 250788917179 ,
   fax: 925-274-9000,
   location: "KIGALI",
   depertment: "Urology",
},
{
    profilePicture: "https://img.freepik.com/free-photo/portrait-friendly-male-doctor-dressed-uniform_171337-105.jpg?t=st=1655339528~exp=1655340128~hmac=286200679b868c09a945d8a479e8bb3172b7378202959c5ed8ae33a3a118a0e7&w=1380",
   name: "Dr Flank",
   id: uuid(),
   doctorTitle: "MD",
   bio: "classic medical textbook on the history of medicine with a focus on the biographies of individuals who have made revolutionary advances in the field.",
   phoneNumber: 250788917179 ,
   fax: 925-274-9000,
   location: "KIGALI",
   depertment: "Urology",
},
]
}
const reducer = (
    state: DoctorState = initialState,
    action: DoctorAction
):DoctorState => {
    switch (action.type){
      case actionType.ADD_DOCTOR:
        const newDoctor : IDoctors ={
            id: uuid(),
            name: action.doctor.name,
            doctorTitle: action.doctor.doctorTitle,
            bio: action.doctor.bio,
            phoneNumber: action.doctor.phoneNumber,
            fax: action.doctor.fax,
            location: action.doctor.location,
            depertment: action.doctor.depertment,
            profilePicture: action.doctor.profilePicture
        }
        return {
            ...state,
            doctors: state.doctors.concat(newDoctor),
        }
        

        case actionType.REMOVE_DOCTOR:
            const updateDoctors: IDoctors[] = state.doctors.filter(
                doctor => doctor.id !== action.doctor.id
            )
            return{
                ...state,
                doctors: updateDoctors,
            }

    }
    return state;
}

export default reducer;