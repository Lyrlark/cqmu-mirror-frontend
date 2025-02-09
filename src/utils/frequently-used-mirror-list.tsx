import React from 'react';
import { Icon } from '@iconify/react';
import ubuntuIcon from '@iconify/icons-simple-icons/ubuntu';
import archlinuxIcon from '@iconify/icons-logos/archlinux';
import debianIcon from '@iconify/icons-logos/debian';
import rockyIcon from '@iconify/icons-simple-icons/rockylinux';
import centOsIcon from '@iconify/icons-logos/centos-icon';
import pythonIcon from '@iconify/icons-simple-icons/python';
import kaliIcon from '@iconify/icons-simple-icons/kalilinux';

export default [
  {
    id: 'ubuntu',
    icon: <Icon height="4rem" icon={ubuntuIcon} color="#E95420" />,
  },
  {
    id: 'debian',
    icon: <Icon height="4rem" icon={debianIcon} />,
  },
  {
    id: 'centos',
    icon: <Icon height="4rem" icon={centOsIcon} />,
  },
  {
    id: 'archlinux',
    icon: <Icon height="4rem" icon={archlinuxIcon} />,
  },
  {
    id: 'rocky',
    icon: <Icon height="4rem" icon={rockyIcon} color="#10B981" />,
  },
  {
    id: 'kali',
    icon: <Icon height="4rem" icon={kaliIcon} color="#557C94" />,
  },
  {
    id: 'python',
    icon: <Icon height="4rem" icon={pythonIcon} color="#3776AB" />,
  },
];
