// component
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BarChartIcon from '@mui/icons-material/BarChart';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/counsellorDB',
    icon: icon('ic_analytics'),
  },
  {
    title: 'dashboard',
    path: '/dashboard/FinancialDB',
    icon: <BarChartIcon />,
  },
  {
    title: 'Student Info',
    path: '/dashboard/student',
    icon: <AccountBoxIcon />,
  },
  {
    title: 'Admission',
    path: '/dashboard/admission',
    icon: <SensorOccupiedIcon />,
  },
  // -------------------------------------------------------
  {
    title: 'Master',
    path: '/dashboard/master',
    icon: <WidgetsIcon />,
  },
  // -------------------------------------------------------
  {
    title: 'question',
    path: '/dashboard/question',
    icon: <QuestionAnswerIcon />,
  },
  {
    title: 'Online Inquiry',
    path: '/dashboard/onlineinquiry',
    icon: <ImportContactsIcon />,
  },
  {
    title: 'event',
    path: '/dashboard/blog',
    icon: <PendingActionsIcon />,
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
