import React from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,

  AppSwitcher20,
  Notification20,
  UserAvatar20,
 } from '@carbon/icons-react';

function TutorialHeader() {
    return (
        <div>
            <UserAvatar20 />
            <Notification20 />
            <AppSwitcher20 />

            {/* <HeaderName element={Link} to="/" prefix="IBM">
              Carbon Tutorial
            </HeaderName> */}
        </div>
    )
};

export default TutorialHeader;

 