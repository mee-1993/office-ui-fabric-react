/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import {
  BaseComponent,
  css,
  getNativeProps,
  divProperties
} from '../../Utilities';
import { ITooltipProps, TooltipDelay } from './Tooltip.Props';
import { Callout } from '../../Callout';
import { DirectionalHint } from '../../common/DirectionalHint';
import * as stylesImport from './Tooltip.scss';
const styles: any = stylesImport;
import { AnimationClassNames } from '@uifabric/styling';

export class Tooltip extends BaseComponent<ITooltipProps, any> {

  // Specify default props values
  public static defaultProps = {
    directionalHint: DirectionalHint.topCenter,
    delay: TooltipDelay.medium,
    calloutProps: {
      isBeakVisible: true,
      beakWidth: 16,
      gapSpace: 0,
      setInitialFocus: true,
      doNotLayer: false
    }
  };

  public render() {
    let { targetElement, content, calloutProps, directionalHint, delay, id } = this.props;

    return (
      <Callout
        className={ css('ms-Tooltip ' + AnimationClassNames.fadeIn200, styles.root, {
          [styles.hasMediumDelay]: delay === TooltipDelay.medium
        }) }
        targetElement={ targetElement }
        directionalHint={ directionalHint }
        {...calloutProps}
        { ...getNativeProps(this.props, divProperties) }
      >
        <div className={ css('ms-Tooltip-content') }>
          <p className={ css('ms-Tooltip-subText', styles.subText) } id={ id } role='tooltip'>
            { content }
          </p>
        </div>
      </Callout >
    );
  }
}
