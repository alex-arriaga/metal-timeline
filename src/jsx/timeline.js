'use strict';

import JSXComponent from 'metal-jsx';
import defineWebComponent from 'metal-web-component';
import './styles.scss';

import TimelineItem from './timeline-item';

class Timeline extends JSXComponent {
  render() {
    return (
        <div class="metal-item-timeline">
          <div class="metal-item-timeline__items">
            {this.state.items.map(
                (item, index) => {
                  return <TimelineItem index={index} item={item}/>;
                })
            }
          </div>
        </div>
    );
  }
}

Timeline.STATE = {
  items: {
    value: [
      {
        title: 'Sample #1'
      }, {
        title: 'Sample #2'
      }]
  }
};

defineWebComponent('metal-timeline', Timeline);

export {Timeline};
export default Timeline;
