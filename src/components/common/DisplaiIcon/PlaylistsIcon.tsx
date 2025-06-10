import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export interface PlaylistsIconProps extends SvgIconProps {}

export const PlaylistsIcon: React.FC<PlaylistsIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 22">
    <path d="M18.727 11V14.273H22V16.727H18.727V20H16.273V16.727H13V14.273H16.273V11H18.727ZM11 11V18H2V11H11ZM11 2V9H2V2H11ZM22 2V9H13V2H22Z" />
  </SvgIcon>
);
