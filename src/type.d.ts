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