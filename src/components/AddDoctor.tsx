import * as React from "react"

type Props = {
  saveDoctor: (doctor: IDoctors | any) => void
}

export const AddDoctor: React.FC<Props> = ({ saveDoctor }) => {
  const [doctor, setDoctor] = React.useState<IDoctors | {}>()

  const handleDoctorData = (e: React.FormEvent<HTMLInputElement>) => {
    setDoctor({
      ...doctor,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewDoctor= (e: React.FormEvent) => {
    e.preventDefault()
    saveDoctor(doctor)
  }

  return (
    <form onSubmit={addNewDoctor} className="Add-doctor">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleDoctorData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleDoctorData}
      />
      <button disabled={doctor === undefined ? true : false}>
        Add Doctor
      </button>
    </form>
  )
}