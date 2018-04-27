import JSXComponent from 'metal-jsx';
import defineWebComponent from 'metal-web-component';
import './styles.scss';

class Timeline extends JSXComponent {
  render() {
    return (
        <div className="metal-item-timeline">
          <div class="metal-item-timeline__items">
            {this.state.items.map(
                (item) => {
                  return <div class="metal-item metal-item-timeline">
                    <div class="metal-item metal-item-timeline__info-container">
                      <div
                          class="metal-item metal-item-timeline__image-container">
                        <img src="http://lorempixel.com/400/400/people/1/"
                             class="metal-item metal-item-timeline__image"
                             alt=""/>
                        <span
                            class="metal-item metal-item-timeline__date">{item.date}</span>
                      </div>
                    </div>
                    <div
                        class="metal-item metal-item-timeline__details-container">
                      <div class="metal-item metal-item-timeline__details">
                        <h3 class="metal-item metal-item-timeline__title">
                          {item.title}
                        </h3>
                        <div
                            class="metal-item metal-item-timeline__description">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>;
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
