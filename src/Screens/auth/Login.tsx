import {Formik} from 'formik';
import SignIn from '../../components/auth/SignIn';
import {
  loginInitialValues,
  loginValidationSchema,
} from '../../utils/Validation/Validation';
import {signIn} from '../../APIS/API/api';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch} from 'react-redux';
import {setUsers} from '../../store/userSlice';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationStrings from '../../Constant/NavigationStrings';
import {useAppSelector} from '../../store/store';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {longitude} = useAppSelector(state => state.coordinates);
  console.log(longitude);

  const toast = useToast();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(val: any, {resetForm}) => {
        signIn({email: val.email, password: val.password}).then(res => {
          console.log(res);
          if (res?.success === true) {
            toast.show(`Welcome ${res.user.fullname}`, {
              type: 'success',
              placement: 'bottom',
            });
            dispatch(
              setUsers({
                id: res?.user.id,
                token: res?.token,
                name: res?.user.fullname,
                email: res?.user.email,
              }),
            );
            resetForm();
            navigation.replace(NavigationStrings.DRAWER);
          } else {
            toast.show(`${res.error}`, {
              type: 'danger',
              placement: 'bottom',
            });
          }
        });
      }}>
      {({values, errors, handleChange, handleSubmit}) => (
        <SignIn
          values={values}
          handleChange={handleChange}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      )}
    </Formik>
  );
};

export default Login;
