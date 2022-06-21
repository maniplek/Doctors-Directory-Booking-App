import * as actionType from "./actionTypes"
import { v4 as uuid } from 'uuid'

const initialState: AppointmentState = {
appointment: []
}
const reducer = (
    state: AppointmentState = initialState,
    action: AppointmentAction
):AppointmentState => {
    switch (action.type){
      case actionType.ADD_APPOINTMENT:
        const newAppointment : IApoint ={
            id: uuid(),
            patientName: action.appointment.patientName,
            date: action.appointment.date,
            time: action.appointment.time,
            status: action.appointment.status,
            doctorName: action.appointment.doctorName
        }
        return {
            ...state,
            appointment: state.appointment.concat(newAppointment),
        }
    }
    return state;
}

export default reducer;

function newAppointment(newAppoint: any) {
    throw new Error("Function not implemented.")
}
