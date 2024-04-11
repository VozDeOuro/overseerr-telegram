import DiscordLogo from '@app/assets/extlogos/discord.svg';
import GotifyLogo from '@app/assets/extlogos/gotify.svg';
import LunaSeaLogo from '@app/assets/extlogos/lunasea.svg';
import PushbulletLogo from '@app/assets/extlogos/pushbullet.svg';
import PushoverLogo from '@app/assets/extlogos/pushover.svg';
import SlackLogo from '@app/assets/extlogos/slack.svg';
import TelegramLogo from '@app/assets/extlogos/telegram.svg';
import PageTitle from '@app/components/Common/PageTitle';
import type { SettingsRoute } from '@app/components/Common/SettingsTabs';
import SettingsTabs from '@app/components/Common/SettingsTabs';
import globalMessages from '@app/i18n/globalMessages';
import { BoltIcon, CloudIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  notifications: 'Notifications',
  notificationsettings: 'Notification Settings',
  notificationAgentSettingsDescription:
    'Configure and enable notification agents.',
  email: 'Email',
  webhook: 'Webhook',
  webpush: 'Web Push',
});

type SettingsNotificationsProps = {
  children: React.ReactNode;
};

const SettingsNotifications = ({ children }: SettingsNotificationsProps) => {
  const intl = useIntl();

  const settingsRoutes: SettingsRoute[] = [
    {
      text: intl.formatMessage(messages.email),
      content: (
        <span className="flex items-center">
          <EnvelopeIcon className="mr-2 h-4" />
          {intl.formatMessage(messages.email)}
        </span>
      ),
      route: '/settings/notifications/email',
      regex: /^\/settings\/notifications\/email/,
    },
    {
      text: intl.formatMessage(messages.webpush),
      content: (
        <span className="flex items-center">
          <CloudIcon className="mr-2 h-4" />
          {intl.formatMessage(messages.webpush)}
        </span>
      ),
      route: '/settings/notifications/webpush',
      regex: /^\/settings\/notifications\/webpush/,
    },
    {
      text: 'Discord',
      content: (
        <span className="flex items-center">
          <DiscordLogo className="mr-2 h-4" />
          Discord
        </span>
      ),
      route: '/settings/notifications/discord',
      regex: /^\/settings\/notifications\/discord/,
    },
    {
      text: 'Gotify',
      content: (
        <span className="flex items-center">
          <GotifyLogo className="mr-2 h-4" />
          Gotify
        </span>
      ),
      route: '/settings/notifications/gotify',
      regex: /^\/settings\/notifications\/gotify/,
    },
    {
      text: 'LunaSea',
      content: (
        <span className="flex items-center">
          <LunaSeaLogo className="mr-2 h-4" />
          LunaSea
        </span>
      ),
      route: '/settings/notifications/lunasea',
      regex: /^\/settings\/notifications\/lunasea/,
    },
    {
      text: 'Pushbullet',
      content: (
        <span className="flex items-center">
          <PushbulletLogo className="mr-2 h-4" />
          Pushbullet
        </span>
      ),
      route: '/settings/notifications/pushbullet',
      regex: /^\/settings\/notifications\/pushbullet/,
    },
    {
      text: 'Pushover',
      content: (
        <span className="flex items-center">
          <PushoverLogo className="mr-2 h-4" />
          Pushover
        </span>
      ),
      route: '/settings/notifications/pushover',
      regex: /^\/settings\/notifications\/pushover/,
    },
    {
      text: 'Slack',
      content: (
        <span className="flex items-center">
          <SlackLogo className="mr-2 h-4" />
          Slack
        </span>
      ),
      route: '/settings/notifications/slack',
      regex: /^\/settings\/notifications\/slack/,
    },
    {
      text: 'Telegram',
      content: (
        <span className="flex items-center">
          <TelegramLogo className="mr-2 h-4" />
          Telegram
        </span>
      ),
      route: '/settings/notifications/telegram',
      regex: /^\/settings\/notifications\/telegram$/,
    },
    {
      text: 'Telegram_2',
      content: (
        <span className="flex items-center">
          <TelegramLogo className="mr-2 h-4" />
          Telegram_2
        </span>
      ),
      route: '/settings/notifications/telegram_2',
      regex: /^\/settings\/notifications\/telegram_2$/,
    },
    {
      text: intl.formatMessage(messages.webhook),
      content: (
        <span className="flex items-center">
          <BoltIcon className="mr-2 h-4" />
          {intl.formatMessage(messages.webhook)}
        </span>
      ),
      route: '/settings/notifications/webhook',
      regex: /^\/settings\/notifications\/webhook/,
    },
  ];

  return (
    <>
      <PageTitle
        title={[
          intl.formatMessage(messages.notifications),
          intl.formatMessage(globalMessages.settings),
        ]}
      />
      <div className="mb-6">
        <h3 className="heading">
          {intl.formatMessage(messages.notificationsettings)}
        </h3>
        <p className="description">
          {intl.formatMessage(messages.notificationAgentSettingsDescription)}
        </p>
      </div>
      <SettingsTabs tabType="button" settingsRoutes={settingsRoutes} />
      <div className="section">{children}</div>
    </>
  );
};

export default SettingsNotifications;
