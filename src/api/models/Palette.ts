/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { calendarPickerPalette } from './calendarPickerPalette';
import type { TextPalette } from './TextPalette';
import type { ToggleButtonPalette } from './ToggleButtonPalette';

export type Palette = {
  border?: string;
  primary?: string;
  background?: string;
  trackFill?: string;
  railFill?: string;
  handle?: string;
  warning?: string;
  error?: string;
  text?: TextPalette;
  toggleButton?: ToggleButtonPalette;
  lineColor?: string;
  calendarPicker?: calendarPickerPalette;
};
