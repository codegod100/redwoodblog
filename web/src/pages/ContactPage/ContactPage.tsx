import { MetaTags } from '@redwoodjs/web'
import { Form, TextField } from '@redwoodjs/forms'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form>
        <TextField name="input" />
      </Form>
    </>
  )
}

export default ContactPage