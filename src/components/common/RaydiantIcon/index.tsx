import { FC } from 'react';

import { AddIcon } from './AddIcon';
import { CloseIcon } from './CloseIcon';
import { PlaylistsIcon } from './PlaylistsIcon';
import { PlaylistAddIcon } from './PlaylistAddIcon';
import { APISourcesIcon } from './APISourcesIcon';
import { APIKeysIcon } from './APIKeysIcon';
import { SettingsIcon } from './SettingsIcon';
import { ToastSettingsIcon } from './ToastSettingsIcon';

export type IconName = 'close' | 'add' | 'playlists' | 'playlist-add';

const iconMap = {
  close: CloseIcon,
  add: AddIcon,
  playlists: PlaylistsIcon,
  'playlist-add': PlaylistAddIcon,
  'api-sources': APISourcesIcon,
  'api-keys': APIKeysIcon,
  settings: SettingsIcon,
  'toast-settings': ToastSettingsIcon,
};

export const RaydiantIcon: FC<{ name: IconName }> = ({ name }) => {
  const IconComponent = iconMap[name];
  return (
    // Negative margin ensures icon is vertically centered with text
    <span className="relative top-[4px] inline-flex mx-1">
      <IconComponent />
    </span>
  );
};
