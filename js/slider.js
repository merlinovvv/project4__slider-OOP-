var slider1 = {
    imagesURLs: ['./img/car1.jpg', './img/car2.jpg', './img/car3.jpeg', './img/car4.jpg', './img/car5.jpg'],
    prevButton: document.getElementById('btn__prev'),
    nextButton: document.getElementById('btn__next'),
    slideImage: document.getElementById('images__img'),
    currentImageIndex: 0,

    start: function () {
        var that = this;
        this.slideImage.src = this.imagesURLs[this.currentImageIndex];

        this.prevButton.addEventListener('click', function(e){
            that.onShowPrevBtnClick(e);
        });
        this.nextButton.addEventListener('click', function(e){
            that.onShowNextBtnClick(e);
        });
        this.prevButton.disabled = true;
    },
    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesURLs[this.currentImageIndex];
        this.nextButton.disabled = false;
        if (this.currentImageIndex === 0) {
            this.prevButton.disabled = true;
        }
    },
    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesURLs[this.currentImageIndex];
        this.prevButton.disabled = false;
        if (this.currentImageIndex === (this.imagesURLs.length - 1)) {
            this.nextButton.disabled = true;
        }
    }
};