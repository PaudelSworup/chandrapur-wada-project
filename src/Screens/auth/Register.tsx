import {Formik} from 'formik';
import RegisterComponent from '../../components/auth/RegisterComponent';
import {
  registerInitialValues,
  registerValidationSchema,
} from '../../utils/Validation/Validation';
import {signUp} from '../../APIS/API/api';
import {useToast} from 'react-native-toast-notifications';

const Register = () => {
  const toast = useToast();
  return (
    <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={(val, {resetForm}) => {
        signUp({
          fullname: val.fullname,
          email: val.email,
          password: val.password,
        }).then(res => {
          console.log(res);
          if (res?.success === true) {
            toast.show(res?.message, {
              type: 'success',
              placement: 'bottom',
            });
            resetForm();
          } else {
            toast.show(res?.error, {
              type: 'danger',
              placement: 'bottom',
            });
          }
        });
      }}>
      {({values, errors, handleChange, handleSubmit}) => (
        <RegisterComponent
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      )}
    </Formik>
  );
};

export default Register;
