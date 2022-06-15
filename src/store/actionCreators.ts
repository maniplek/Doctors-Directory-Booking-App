import * as actionTypes from "./actionTypes";

export const addDoctor =(doctor: IDoctors)=>{
    const action: DoctorAction = {
        type: actionTypes.ADD_DOCTOR,
        doctor,
    }
    return simulateHttpRequest(action)
}

export const addAppointment =(doctor: IDoctors)=>{
    const action: DoctorAction = {
        type: actionTypes.ADD_APPOINTMENT,
        doctor,
    }
    return simulateHttpRequest(action)
}

export const removeDoctors = (doctor: IDoctors) =>{
    const action: DoctorAction= { 
        type: actionTypes.REMOVE_DOCTOR,
        doctor
    }
    return simulateHttpRequest(action)

}
export const simulateHttpRequest = (action: DoctorAction)=>{
    return (dispatch: DispatchType) => {
        setTimeout(()=>{
            dispatch(action)
        },500)
    }
}