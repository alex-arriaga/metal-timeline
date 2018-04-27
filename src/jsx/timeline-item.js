'use strict';

import JSXComponent from 'metal-jsx';

class TimelineItem extends JSXComponent {

  render() {

    return (
        <div class="metal-item metal-item-timeline">
          <div class="metal-item metal-item-timeline__info-container">
            <div
                class="metal-item metal-item-timeline__image-container">
              <img src="http://lorempixel.com/400/400/people/1/"
                   class="metal-item metal-item-timeline__image"
                   alt=""/>
              <span
                  class="metal-item metal-item-timeline__date">{this.props.item.date}</span>
            </div>
          </div>
          <div
              class="metal-item metal-item-timeline__details-container">
            <div class="metal-item metal-item-timeline__details">
              <h3 class="metal-item metal-item-timeline__title">
                {this.props.item.title}
              </h3>
              <div
                  class="metal-item metal-item-timeline__description">
                {this.props.item.description}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

TimelineItem.PROPS = {
  index: {
    value: null
  },
  item: {
    value: null
  }

};

export {TimelineItem};
export default TimelineItem;
