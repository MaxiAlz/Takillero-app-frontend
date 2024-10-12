import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';
import { UserLoginData } from '../types/authTypes';
import { VALIDATION_MESSAGES } from '../../../common/messages';
import { loginUser } from '../../../redux/slices/auth/authThunk';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useLoginFormik = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  return useFormik<UserLoginData>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(VALIDATION_MESSAGES.email)
        .required(VALIDATION_MESSAGES.required),
      password: Yup.string().required(VALIDATION_MESSAGES.required),
    }),
    onSubmit: async (
      values: UserLoginData,
      // { setSubmitting }
      formikHelpers: FormikHelpers<UserLoginData>,
    ) => {
      console.log('values', values);
      formikHelpers.setSubmitting(true);
      const thunkResponse = await dispatch(loginUser(values));
      console.log('thunkresponse', thunkResponse);
      if (thunkResponse.status == 200) navigate('/');
      formikHelpers.setSubmitting(false);
    },
  });
};

export { useLoginFormik };
