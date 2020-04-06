import * as Yup from 'yup';
import YouInfo from './forms/you';
import ShowsInfo from './forms/shows';
import MerchInfo from './forms/merch';
import DigitalInfo from './forms/digital';
//import SignupInfo from './forms/signup';
import StartInfo from './forms/start';

export default [
    {
      component: StartInfo,
      id: 'startInfo',
      initialValues: {
        email: '' , 
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .max(80, ' Must be 80 characters or less')
          .email(' Invalid email address')
          .required(' Required')
      })
    },
    {
      component: YouInfo,
      id: 'youInfo',
      initialValues: {
        firstName: '', 
        lastName: '', 
        artistName: ''
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(25, ' Must be 25 characters or less')
          .required(' Required'),
        lastName: Yup.string()
          .max(25, ' Must be 25 characters or less')
          .required(' Required'),
        artistName: Yup.string()
          .max(80, ' Must be 80 characters or less')
          .required(' Required'), 
      })
    },
    {
      component: ShowsInfo,
      id: 'showsInfo',
      initialValues: {
          liveShowAttendance: '',
          liveShowFrequency: '',
          liveShowTixPrice: ''
      },
      validationSchema: Yup.object({
        liveShowAttendance: Yup.string()
          .required(' Required'),
        liveShowFrequency: Yup.string() 
          .required(' Required'),
        liveShowTixPrice: Yup.string()
          .required(' Required'),
      })
    },
    {
      component: MerchInfo,
      id: 'MerchInfo',
      initialValues: {
        merchDollars: ''
      },
      validationSchema: Yup.object({
        merchDollars: Yup.string()
          .required(' Required'),
      })
    },
    {
      component: DigitalInfo,
      id: 'DigitalInfo',
      initialValues: {

      },
      validationSchema: Yup.object({
        monthlyListenersSpotify: Yup.string()
          .required(' Required'),
        youtubeUrl: Yup.string()
          .required(' Required')
      })
    }/*,
    {
      component: SignupInfo,
      id: 'SignupInfo',
      initialValues: {
        password: ''
      },
      validationSchema: Yup.object({
        password: Yup.string()
          .required(' Required')
          .matches(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/, " Password must contain 1 letter, 1 number, 1 special character and be at least 8 characters long.")
      }),
    }*/
]