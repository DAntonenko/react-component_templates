import * as React from 'react';
import { mergeClassNames } from '../../../../utils/merge-class-names/merge-class-names';
import * as componentStyles from './component.css';

interface IComponentProps {
  isComponentChildVisible: boolean;
  someOptionalProp?: void;
}

interface IComponentState {
  isComponentChildSomeKind: boolean;
}

export class Component extends React.Component<IComponentProps, IComponentState> {

  public props = {
    isComponentChildVisible: true,
    someOptionalProp: () => {},
  }

  public state = {
    isComponentChildSomeKind: false,
  }

  public render() {
    const {
      isComponentChildVisible,
      someOptionalProp,
    } = this.props;

    const {
      isComponentChildSomeKind,
    } = this.state;

    return (
      <div className={componentStyles['component']}>
        {isComponentChildVisible &&
          <div
            className={mergeClassNames([
              componentStyles['component__child'],
              isComponentChildSomeKind &&  componentStyles['component__child--modifier'],
            ])}
            onClick={this.onComponentChildClic}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        }
      </div>
    );
  }

  private onComponentChildClic = () => {
    this.setState((prevState) => ({
      isComponentChildSomeKind: !prevState.isComponentChildSomeKind,
    }));
  }
}
