import * as actionType from "./actionTypes"



const initialState: DoctorState = {
doctors: [
    {
         profilePicture: "pic",
        name: "Maniple",
        id: 1,
        doctorTitle: "MD",
        bio: "JAKSDADKHAKDHAKDAKDKAD",
        phoneNumber: 250788917179 ,
        fax: 925-274-9000,
        location: "KIGALI",
        depertment: "Urology",
    },
    {
        profilePicture: "pic",
       name: "Maniple",
       id: 2,
       doctorTitle: "MD",
       bio: "JAKSDADKHAKDHAKDAKDKAD",
       phoneNumber: 250788917179 ,
       fax: 925-274-9000,
       location: "KIGALI",
       depertment: "Urology",
   },
   {
    profilePicture: "pic",
   name: "Maniple",
   id: 3,
   doctorTitle: "MD",
   bio: "JAKSDADKHAKDHAKDAKDKAD",
   phoneNumber: 250788917179 ,
   fax: 925-274-9000,
   location: "KIGALI",
   depertment: "Urology",
},
    
    {
        profilePicture: "pic",
       name: "KWIZERA",
       id: 4,
       doctorTitle: "MD",
       bio: "JAKSDADKHAKDHAKDAKDKAD",
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
            id: Math.random() * 10,
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
        
        // case actionType.ADD_APPOINTMENT:
        //     const newApointment : 

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