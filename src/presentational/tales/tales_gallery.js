import React from 'react';
import Iframe from 'react-iframe';

/*//play video
  var $bacgroundFilm = $('#film_background');
  var $film = $('#film');

  $bacgroundFilm.on('click', function() {
    $bacgroundFilm.css('display', 'none');
    $film.fadeIn('slow');
    $film.trigger('play');
  });
*/

const TalesGallery = (props) => (
  <div className="box">
    {props.tales.map(tale => {
      return (
        <div className="box_tale" key={tale.id}>
          <div className="movie_box">
            <div className="iframe_container">
              <Iframe url={tale.link} className="iframe_class" />
            </div>
            <h2>{tale.title}</h2>
            <h3>{tale.short_text}</h3>
          </div>
        </div>
      )
    })}
  </div>
)

export default TalesGallery;
