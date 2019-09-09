let mountainBackgrounds = [
  'url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/163550/landscape-scenic-going-to-the-sun-road-rocky-mountains-163550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/672451/pexels-photo-672451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/551876/pexels-photo-551876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  'url(https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'
];

class Gallery3D {
  constructor(elementSelector, options) {
    const defaultOptions = {
      backgroundsSet: mountainBackgrounds
    };

    this.options = Object.assign({}, defaultOptions, options);
    this.gallerySelector = elementSelector;
    this.gallery3d = null;
    this.gallery3dElements = null;
    this.rotateAngle = null;

    this.generate3dGallery();
    this.buttonAction();
    this.showDetails();
    this.setTransformValue();

    window.addEventListener('resize', () => this.setTransformValue());
  }

  // Generating HTML structure
  generate3dGallery() {
    this.gallery3d = document.querySelector(this.gallerySelector);
    this.gallery3d.classList.add('gallery-3d');

    const galleryCnt = document.createElement('div');
    galleryCnt.classList.add('gallery-3d-cnt');

    // Creating section with images
    const galleryImages = document.createElement('div');
    galleryImages.classList.add('gallery-3d-images');

    const prevButton = document.createElement('button');
    prevButton.classList.add('gallery-3d-previous');
    prevButton.innerText = '<';

    const nextButton = document.createElement('button');
    nextButton.classList.add('gallery-3d-next');
    nextButton.innerText = '>';

    this.gallery3dElements = document.createElement('div');
    this.gallery3dElements.classList.add('gallery-3d-elements');

    const elements = this.gallery3d.children;
    const elementsCount = elements.length;
    this.rotateAngle = 360 / elementsCount;

    const width = (elementsCount > 4) ? (250 / elementsCount) : 65;
    const height = (elementsCount > 4) ? (200 / elementsCount) : 65;

    for (let i = 0; i < elementsCount; i++) {
      elements[0].classList.add('gallery-3d-element');
      elements[0].dataset.angle = '';
      elements[0].dataset.count = `${i + 1}`;
      elements[0].style.transform = `rotateY(${this.rotateAngle * i}deg) translateZ(400px)`;

      // Random background addition
      let randNumber = Math.floor(Math.random() * this.options.backgroundsSet.length);
      elements[0].style.background = this.options.backgroundsSet[randNumber];
      this.options.backgroundsSet.splice(randNumber, 1);

      // In case you do not want to set backgrounds in randowm way:
      //this.slides[0].style.background = this.options.backgroundsSet[0];
      //this.options.backgroundsSet.splice(0, 1);

      elements[0].style.backgroundSize = 'cover';
      elements[0].style.backgroundPosition = 'center';
      elements[0].style.width = `${width}%`;
      elements[0].style.height = `${height}`;

      this.gallery3dElements.appendChild(elements[0]);
    }
    this.gallery3dElements.firstElementChild.classList.add('active');
    this.gallery3dElements.firstElementChild.dataset.angle = '0';


    galleryImages.appendChild(prevButton);
    galleryImages.appendChild(this.gallery3dElements);
    galleryImages.appendChild(nextButton);

    //Creating section with description/details
    const galleryDetails = document.createElement('div');
    galleryDetails.classList.add('gallery-3d-element-details');

    const gallery3dTitle = document.createElement('h2');
    gallery3dTitle.classList.add('gallery-3d-title');

    const gallery3dText = document.createElement('p');
    gallery3dText.classList.add('gallery-3d-text');

    galleryDetails.appendChild(gallery3dTitle);
    galleryDetails.appendChild(gallery3dText);

    //Final integration
    galleryCnt.appendChild(galleryImages);
    galleryCnt.appendChild(galleryDetails);

    this.gallery3d.appendChild(galleryCnt);
  }

  // Checking elements position
  checkActive() {
    let activeElement = this.gallery3dElements.querySelector('.active');
    let nextElement;
    let previousElement;

    if (activeElement.dataset.count === "1") {
      previousElement = this.gallery3dElements.lastElementChild;
    } else {
      previousElement = activeElement.previousElementSibling;
    }

    if (activeElement.dataset.count === `${activeElement.parentElement.children.length}`) {
      nextElement = this.gallery3dElements.firstElementChild;
    } else {
      nextElement = activeElement.nextElementSibling;
    }

    return [previousElement, activeElement, nextElement];
  }

  // Add event listeners to buttons
  buttonAction() {
    const next = document.querySelector('.gallery-3d-next');
    const previous = document.querySelector('.gallery-3d-previous');

    next.addEventListener('click', () => {
      let [previous, active, next] = this.checkActive();

      next.dataset.angle = `${parseInt(active.dataset.angle) - this.rotateAngle}`;
      previous.dataset.angle = `${parseInt(active.dataset.angle) + this.rotateAngle}`;

      this.gallery3dElements.style.transform = `rotateY(${next.dataset.angle}deg)`;
      active.classList.remove('active');
      next.classList.add('active');
      this.showDetails();
    });

    previous.addEventListener('click', () => {
      let [previous, active, next] = this.checkActive();

      next.dataset.angle = `${parseInt(active.dataset.angle) - this.rotateAngle}`;
      previous.dataset.angle = `${parseInt(active.dataset.angle) + this.rotateAngle}`;

      this.gallery3dElements.style.transform = `rotateY(${previous.dataset.angle}deg)`;
      active.classList.remove('active');
      previous.classList.add('active');
      this.showDetails();
    });
  }

  //Adding description section
  showDetails() {
    const title = this.gallery3d.querySelector('.gallery-3d-title');
    const text = this.gallery3d.querySelector('.gallery-3d-text');
    const activeElement = this.gallery3d.querySelector('.active');

    title.innerText = activeElement.firstElementChild.innerText;
    text.innerText = activeElement.lastElementChild.innerText;
  }

  //changing styles according to gallery items
  setTransformValue() {
    const elementCntStyle = getComputedStyle(this.gallery3dElements);
    const width = parseInt(elementCntStyle.width.slice(0, -2));
    const elements = this.gallery3dElements.children;

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transform = `rotateY(${this.rotateAngle * i}deg) translateZ(${width * 0.4}px)`;
    }
  }
}

//const gallery3d = new Gallery3D('#gallery3D');