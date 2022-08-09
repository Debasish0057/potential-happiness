import { FiFolderPlus } from 'react-icons/fi';
import { BsDoorClosedFill, BsFile } from 'react-icons/bs';

export const userProfileData = [
  {
    icon: <BsDoorClosedFill />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  // {
  //   icon: <BsShield />,
  //   title: 'My Inbox',
  //   desc: 'Messages & Emails',
  //   iconColor: 'rgb(0, 194, 146)',
  //   iconBg: 'rgb(235, 250, 242)',
  // },
  {
    icon: <FiFolderPlus />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];