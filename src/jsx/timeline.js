'use strict';

import JSXComponent from 'metal-jsx';
import defineWebComponent from 'metal-web-component';
import './styles.scss';

import TimelineItem from './timeline-item';

class Timeline extends JSXComponent {
  render() {
    return (
        <div class="metal-item-timeline">
          <h2>Timeline :)</h2>
          <div class="metal-item-timeline__items">
            {this.props.items.map(
                (item, index) => {
                  return <TimelineItem index={index} item={item}/>;
                })
            }
          </div>
        </div>
    );
  }

  willReceiveProps(changes) {
    console.log('>> Changes', changes);
    // if (changes.foo && changes.foo.newVal !== changes.foo.prevVal) {
    //   // This is available in the next render
    //   this.state.bar = 'bar1';
    // }

    this.state.items = changes;
  }
}

Timeline.PROPS = {
  items: {
    value: []
  }
};

// Timeline.STATE = Timeline.PROPS;
//     {
//   items: {
//     value: [
//       {
//         title: 'Sample #1'
//       }, {
//         title: 'Sample #2'
//       }]
//   }
// };

defineWebComponent('metal-timeline', Timeline);

export {Timeline};
export default Timeline;
