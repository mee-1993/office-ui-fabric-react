import { IButtonStyles } from '../Button.Props';
import {
  ITheme,
  mergeStyles,
  mergeStyleSets,
  getTheme
} from '../../../Styling';
import {
  getStyles as getBaseButtonStyles
} from '../BaseButton.styles';

const DEFAULT_BUTTON_HEIGHT = '32px';
const DEFAULT_PADDING = '0 4px';

export function getStyles(
  theme: ITheme = getTheme(),
  customStyles?: IButtonStyles
): IButtonStyles {
  let baseButtonStyles: IButtonStyles = getBaseButtonStyles(theme);
  let iconButtonStyles: IButtonStyles = {
    root: mergeStyles(
      {
        padding: '0 4px',
        width: '32px',
        height: '32px',
        backgroundColor: 'transparent',

        ':hover': {
          color: theme.palette.themeDarker
        },
        ':active': {
          color: theme.palette.themePrimary
        }
      }
    ),

    rootToggled: mergeStyles({
      backgroundColor: theme.palette.neutralTertiaryAlt,

      ':hover': {
        backgroundColor: theme.palette.neutralLight
      }

    }),

    rootDisabled: mergeStyles(
      {
        color: theme.palette.neutralTertiary
      }
    )
  };

  return mergeStyleSets(baseButtonStyles, iconButtonStyles, customStyles);
}
