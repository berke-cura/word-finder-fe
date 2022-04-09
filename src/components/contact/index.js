import * as Styled from './style'
import { 
    Formik, 
    Form, 
    Field,
    ErrorMessage
  } from 'formik'


const Contact = () => {

    return(
        <Styled.Container>
        <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          console.log("-----------")
        }}
        validate={values => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if(!values.name) {
              errors.name = 'Name Required'
            }
            if(!values.email || !emailRegex.test(values.email)) {
              errors.email = 'Valid Email Required'
            }
            if(!values.message) {
              errors.message = 'Message Required'
            }
            return errors;
          }}
      >
      {() => (
        <Form>
          <Styled.Label>Name: </Styled.Label>
          <Styled.Input name="name" />
          <Styled.ErrorMessage>
          <ErrorMessage name="name" />
          </Styled.ErrorMessage>
          

    
          <Styled.Label>Email: </Styled.Label>
          <Styled.Input name="email" />
          <Styled.ErrorMessage>
          <ErrorMessage name="email" />
          </Styled.ErrorMessage>

    
          <Styled.Label>Message: </Styled.Label>
          <Field name="message" component="textarea"/>
          <Styled.ErrorMessage>
          <ErrorMessage name="message" />
          </Styled.ErrorMessage>


    
          <button type="submit">Send</button>
        </Form>
      )}
      </Formik>
      </Styled.Container>
        )
        
}
export default Contact