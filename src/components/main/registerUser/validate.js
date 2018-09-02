const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.socialNumber) {
    errors.socialNumber = 'Required'
  } else if (isNaN(Number(values.socialNumber))) {
    errors.socialNumber = 'Must be a number'
  } 
  if (!values.PhoneNumber) {
    errors.PhoneNumber = 'Required'
  } else if (isNaN(Number(values.PhoneNumber))) {
    errors.PhoneNumber = 'Must be a number'
  }
  if (!values.Password) {
    errors.Password = 'Required'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  }
  return errors
}

export default validate;