import * as actionTypes from "./actionTypes";

export const addDoctor =(doctor: IDoctors)=>{
    const action: DoctorAction = {
        type: actionTypes.ADD_DOCTOR,
        doctor,
    }
    return simulateHttpRequest(action)
}

export const addAppointment =(appointment: IApoint)=>{
    const action: AppointmentAction = {
        type: actionTypes.ADD_APPOINTMENT,
        appointment,
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
export const simulateHttpRequest = (action:any )=>{
    return (dispatch: DispatchType) => {
        setTimeout(()=>{
            return dispatch(action);
        },500)
    }
}
// |