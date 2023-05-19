import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import FinancialDB from './pages/FinancialDB';
import Admission from './pages/Admission';
import Questionpage from './pages/Questionpage';
import Master from './pages/Master';
import Course from './pages/Course';
import FeesPackage from './pages/FeesPackage';
import Subject from './pages/Subject';
import Questiontype from './pages/Questiontype';
import AcademicYear from './pages/AcademicYear';
import TakenBy from './pages/TakenBy';
import Facultyregistration from './pages/Facultyregistration';
import OnlineInquiry from './pages/OnlineInquiry';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/counsellorDB" />, index: true },
        { path: 'counsellorDB', element: <DashboardAppPage /> },
        { path: 'financialDB', element: <FinancialDB /> },
        { path: 'student', element: <UserPage /> },
        { path: 'admission', element: <Admission /> },
        { path: 'master', element: <Master /> },
        { path: 'question', element: <Questionpage /> },
        { path: 'onlineinquiry', element: <OnlineInquiry /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },

    {
      path: 'login',
      element: <LoginPage />,
    },
    // ----------------------------------------------

    {
      path: 'subject',
      element: <Subject />,
    },
    {
      path: 'course',
      element: <Course />,
    },
    {
      path: 'fees',
      element: <FeesPackage />,
    },
    {
      path: 'questiontype',
      element: <Questiontype />,
    },
    {
      path: 'academicyear',
      element: <AcademicYear />,
    },
    {
      path: 'takenby',
      element: <TakenBy />,
    },
    {
      path: 'facultyregistration',
      element: <Facultyregistration />,
    },
    // ----------------------------------------------
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/counsellorDB" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
