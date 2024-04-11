import NotificationsTelegram_2 from '@app/components/Settings/Notifications/NotificationsTelegram_2';
import SettingsLayout from '@app/components/Settings/SettingsLayout';
import SettingsNotifications from '@app/components/Settings/SettingsNotifications';
import useRouteGuard from '@app/hooks/useRouteGuard';
import { Permission } from '@app/hooks/useUser';
import type { NextPage } from 'next';

const NotificationsPage: NextPage = () => {
  useRouteGuard(Permission.ADMIN);
  return (
    <SettingsLayout>
      <SettingsNotifications>
        <NotificationsTelegram_2 />
      </SettingsNotifications>
    </SettingsLayout>
  );
};

export default NotificationsPage;
