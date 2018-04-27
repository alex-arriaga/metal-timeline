import JSXComponent from 'metal-jsx';
import defineWebComponent from 'metal-web-component';
import './styles.scss';

class Timeline extends JSXComponent {
  render() {
    return (
        <div class="metal-item metal-item-timeline">
          <div class="metal-item metal-item-timeline__info-container">
            <div class="metal-item metal-item-timeline__image-container">
              <img src="http://lorempixel.com/400/400/people/1/"
                   class="metal-item metal-item-timeline__image"/>
              <span class="metal-item metal-item-timeline__date">09.12.2016</span>
            </div>
          </div>
          <div class="metal-item metal-item-timeline__details-container">
            <div class="metal-item metal-item-timeline__details">
              <h3 class="metal-item metal-item-timeline__title">Phasellus pharetra</h3>
              <div class="metal-item metal-item-timeline__description">Proin condimentum tempus
                ultrices. Suspendisse vestibulum
                suscipit erat, ac efficitur lorem. Nullam non ex vel turpis
                imperdiet maximus sit amet nec odio. Donec mauris nisl,
                vestibulum id efficitur at, convallis id dui. Sed enim nisl,
                ultrices vitae sodales eu, vestibulum a mi. Morbi consectetur
                pulvinar sagittis. Phasellus pharetra diam id leo gravida
                pharetra. In rutrum est gravida, maximus mi ac, mattis metus. Ut
                at tempus sem. Vivamus condimentum erat eget aliquet
                dignissim.
              </div>
            </div>
          </div>
        </div>
    );
  }
}

defineWebComponent('metal-timeline', Timeline);

export {Timeline};
export default Timeline;
