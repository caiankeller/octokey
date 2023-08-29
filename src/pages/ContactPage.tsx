import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  message: string
  file: File | null
}

function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    file: null
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log('Form Data:', formData)
    setFormData({
      name: '',
      email: '',
      message: '',
      file: null
    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setFormData({
        ...formData,
        file: file
      })
    } else {
      console.log('Invalid file format. Please choose a PDF file.')
    }
  }

  return (
    <div className="flex flex-col justify-end w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 justify-end items-end p-2 text-sm normal-case"
      >
        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
            className="flex-grow p-2 py-1 text-xs rounded mix-blend-multiply sm:text-sm outline-1 outline outline-neutral-700 selection:bg-rose-500 selection:mix-blend-multiply selection:text-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="flex-grow p-2 py-1 text-xs rounded mix-blend-multiply sm:text-sm outline-1 outline outline-neutral-700 selection:bg-rose-500 selection:mix-blend-multiply selection:text-white"
            required
          />
        </div>

        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className="p-2 w-full rounded border mix-blend-multiply outline-1 outline outline-neutral-700 selection:bg-rose-500 selection:mix-blend-multiply selection:text-white"
          required
        />
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="p-2 rounded border mix-blend-multiply outline-1 outline outline-neutral-700 selection:bg-rose-500 selection:mix-blend-multiply selection:text-white"
        />
        <button
          className="text-lg text-rose-500 uppercase bg-none border-none font-title sm:text-3xl disabled:text-black hover:mix-blend-multiply hover:underline active:underline active:text-black"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ContactPage
