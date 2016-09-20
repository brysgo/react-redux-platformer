import { connect } from 'react-redux';
import Floor from './Floor';

const mapStateToProps = state => ({
  stageHeight: state.stage.height,
  stageWidth: state.stage.width,
});

export default connect(
  mapStateToProps
)(Floor);