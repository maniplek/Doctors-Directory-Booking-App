interface IApoint{
    patientName: string
    date:Date
    time: Date
    status:boolean
    doctorName: string
    id: string
}
type AppointmentState = {
    appointment: IApoint[]
}

type AppointmentAction = {
    type: string
    appointment: IApoint
}

type DispatchType =  (args: AppointmentAction) => AppointmentAction



interface IDoctors{
    profilePicture: string
    name: string
    id: string
    doctorTitle: string
    bio: string
    phoneNumber: number 
    fax: number
    location: string
    depertment: string

}

type DoctorState = {
    doctors: IDoctors[]
}

type DoctorAction = {
    type: string
    doctor: IDoctors
}

type DispatchType =  (args: DoctorAction) => DoctorAction