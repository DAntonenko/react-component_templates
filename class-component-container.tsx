import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { componentActions } from '../../store/actions/component/component.actions';
import { IRootState } from '../../store/reducers';
import * as componentStyles from './component.css';

interface IComponentOwnProps {
  
}

interface IComponentStateProps {
  
}

interface IComponentDispatchProps {
  componentActions: ComponentActions;
}

type TComponentProps =
  IComponentOwnProps &
  IComponentStateProps &
  IComponentDispatchProps;

interface IComponentState {
  
}

class Component extends React.Component<TComponentProps, IComponentState> {
  public state: IComponentState = {
    
  };

  public render() {
    const {
      
    } = this.props;

    const {
      
    } = this.state;

    return (
      <div className={componentStyles['component']}>
        Something
      </div>
    );
  }

  private somePrivateMethod = () => {
    
  }
}

const mapStateToProps = (state: IRootState): IComponentStateProps => ({
  someProp: state.component.something,
});

const mapDispatchToProps = (dispatch: Dispatch<IRootState>): IComponentDispatchProps => ({
  componentActions: bindActionCreators(componentActions, dispatch),
});

export const ComponentContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
