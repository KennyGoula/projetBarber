var navAccueil = document.getElementById('navAccueil');
var navTarifs = document.getElementById('navTarifs');
var navHorraires = document.getElementById('navHorraires');
var navContacts = document.getElementById('navContacts');
var header = document.getElementById('header');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var logo = document.getElementById('logo');
var i;

/* -------------------------------onglet Accueil-------------------------------- */

navAccueil.addEventListener('click', suppTarifs);
navAccueil.addEventListener('click', suppHorraires);
navAccueil.addEventListener('click', suppContacts);

function suppTarifs() {
    header.removeChild(divTarifs);
}

function suppHorraires() {
    header.removeChild(divHorraires);
}

function suppContacts() {
    header.removeChild(divContacts);
}

/* -------------------------------onglet Tarifs--------------------------------- */

navTarifs.addEventListener('click', showTarifs);
navTarifs.addEventListener('click', suppHorraires);
navTarifs.addEventListener('click', suppContacts);
var divTarifs = document.createElement('div');

function showTarifs() {
    divTarifs.style.width = '55vw';
    divTarifs.style.height = '60vh';
    divTarifs.style.backgroundImage = 'url(../images/tab1.jpg)';
    divTarifs.style.backgroundSize = 'cover';
    divTarifs.style.position = 'absolute';
    divTarifs.style.marginLeft = '35vw';
    divTarifs.style.marginTop = '17vh';
    divTarifs.animate([{
            opacity: '0',
        },
        {
            opacity: '1',
        }
    ], {
        fill: 'forwards',
        duration: 1000,
    });

    if (window.matchMedia("(max-width: 425px)").matches) {
        divTarifs.style.marginTop = '3vh';
        divTarifs.style.marginLeft = '3vw';
        divTarifs.style.width = '90vw';
        divTarifs.style.height = '30vh';
    } else if (window.matchMedia("(max-width: 768px) and (min-width: 426px)").matches) {
        divTarifs.style.marginTop = '18vh';
        divTarifs.style.marginLeft = '3vw';
        divTarifs.style.width = '90vw';
        divTarifs.style.height = '50vh';
    }

    header.appendChild(divTarifs);
}

/* -------------------------------onglet Horraires------------------------------ */

navHorraires.addEventListener('click', showHorraires);
navHorraires.addEventListener('click', suppTarifs);
navHorraires.addEventListener('click', suppContacts);
var divHorraires = document.createElement('div');

function showHorraires() {
    divHorraires.style.width = '55vw';
    divHorraires.style.height = '60vh';
    divHorraires.style.backgroundImage = 'url(../images/tab2.jpg)';
    divHorraires.style.backgroundSize = 'cover';
    divHorraires.style.position = 'absolute';
    divHorraires.style.marginLeft = '35vw';
    divHorraires.style.marginTop = '17vh';
    divHorraires.animate([{
            opacity: '0',
        },
        {
            opacity: '1',
        }
    ], {
        fill: 'forwards',
        duration: 1000,
    });

    if (window.matchMedia("(max-width: 425px)").matches) {
        divHorraires.style.marginTop = '3vh';
        divHorraires.style.marginLeft = '3vw';
        divHorraires.style.width = '90vw';
        divHorraires.style.height = '30vh';
    } else if (window.matchMedia("(max-width: 768px) and (min-width: 426px)").matches) {
        divHorraires.style.marginTop = '18vh';
        divHorraires.style.marginLeft = '3vw';
        divHorraires.style.width = '90vw';
        divHorraires.style.height = '50vh';
    }

    header.appendChild(divHorraires);
}

/* -------------------------------onglet Conacts-------------------------------- */

navContacts.addEventListener('click', showContacts);
navContacts.addEventListener('click', suppTarifs);
navContacts.addEventListener('click', suppHorraires);
var divContacts = document.createElement('div');

function showContacts() {

    divContacts.style.width = '55vw';
    divContacts.style.height = '60vh';
    divContacts.style.backgroundImage = 'url(../images/tab3.jpeg)';
    divContacts.style.backgroundSize = 'cover';
    divContacts.style.position = 'absolute';
    divContacts.style.marginLeft = '35vw';
    divContacts.style.marginTop = '17vh';
    divContacts.animate([{
            opacity: '0',
        },
        {
            opacity: '1',
        }
    ], {
        fill: 'forwards',
        duration: 1000,
    });

    if (window.matchMedia("(max-width: 425px)").matches) {
        divContacts.style.marginTop = '3vh';
        divContacts.style.marginLeft = '3vw';
        divContacts.style.width = '90vw';
        divContacts.style.height = '30vh';
    } else if (window.matchMedia("(max-width: 768px) and (min-width: 426px)").matches) {
        divContacts.style.marginTop = '18vh';
        divContacts.style.marginLeft = '3vw';
        divContacts.style.width = '90vw';
        divContacts.style.height = '50vh';
    }

    header.appendChild(divContacts);
}

/* --------------------------------image 1-------------------------------------- */
img1.addEventListener('mouseover', highlightImg1);
img1.addEventListener('mouseout', highlightDownImg1);
img1.addEventListener('click', showImg);

function highlightImg1() {
    this.animate([{
            transform: 'scale(1)',
            boxShadow: '0px 0px 0px black'
        },
        {
            transform: 'scale(1.1)',
            boxShadow: '5px 5px 20px black'
        }
    ], {
        fill: 'forwards',
        duration: 200,
    });

    this.style.position = 'relative';
    this.style.zIndex = '10';
}

function highlightDownImg1() {
    this.animate([{
            transform: 'scale(1.1)',
            boxShadow: '5px 5px 20px black'
        },
        {
            transform: 'scale(1)',
            boxShadow: '0px 0px 0px black'
        }
    ], {
        fill: 'forwards',
        duration: 200,
    });

    this.style.zIndex = '0';
}


/* ---------------------------------image 3-------------------------------------------- */
img3.addEventListener('mouseover', highlightImg3);
img3.addEventListener('mouseout', highlightDownImg3);
img3.addEventListener('click', showImg);

function highlightImg3() {
    this.animate([{
            transform: 'scale(1)',
            boxShadow: '0px 0px 0px black'
        },
        {
            transform: 'scale(1.1)',
            boxShadow: '5px -5px 20px black'
        }
    ], {
        fill: 'forwards',
        duration: 200,
    });
    this.style.position = 'relative';
    this.style.zIndex = '10';
}

function highlightDownImg3() {
    this.animate([{
            transform: 'scale(1.1)',
            boxShadow: '5px -5px 20px black'
        },
        {
            transform: 'scale(1)',
            boxShadow: '0px 0px 0px black'
        }
    ], {
        fill: 'forwards',
        duration: 200,
    });
    this.style.zIndex = '0';
}

/* -------------------------------------image 4--------------------------------------------------- */
img4.addEventListener('mouseover', highlightImg4);
img4.addEventListener('mouseout', highlightDownImg4);
img4.addEventListener('click', showImg);

function highlightImg4() {
    this.animate([{
            transform: 'scale(1)',
            boxShadow: '0px 0px 0px black'
        },
        {
            transform: 'scale(1.1)',
            boxShadow: '-5px -5px 20px black'
        }
    ], {
        fill: 'forwards',
        duration: 200,
    });
    this.style.position = 'relative';
    this.style.zIndex = '10';
}

function highlightDownImg4() {
    this.animate([{
            transform: 'scale(1.1)',
            boxShadow: '-5px -5px 20px black'
        },
        {
            transform: 'scale(1)',
            boxShadow: '0px 0px 0px black'
        }
    ], {
        fill: 'forwards',
        duration: 200,
    });
    this.style.zIndex = '0';
}

/* ----------------------------galerie------------------------------------------- */

function showImg() {
    var divGallery = document.createElement('div');
    divGallery.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    divGallery.style.width = '100vw';
    divGallery.style.height = '100vh';
    divGallery.style.position = 'absolute';
    divGallery.style.zIndex = '101';
    document.body.insertBefore(divGallery, header);
    /* -------------------fleche gauche---------------------- */
    var arrowSlideLeft = document.createElement('img');
    arrowSlideLeft.setAttribute('src', '../images/arrowSlide.png');
    arrowSlideLeft.style.width = '100px';
    arrowSlideLeft.style.height = '100px';
    arrowSlideLeft.style.cssFloat = 'left';
    arrowSlideLeft.style.transform = 'rotate(180deg)';
    arrowSlideLeft.style.marginTop = '40vh';
    divGallery.appendChild(arrowSlideLeft);
    arrowSlideLeft.addEventListener('click', clickArrowLeft)
    arrowSlideLeft.addEventListener('mouseover', overArrowLeft);
    arrowSlideLeft.addEventListener('mouseout', outArrowLeft);

    function overArrowLeft() {
        arrowSlideLeft.animate([{
                transform: 'scale(1) rotate(180deg)',
            },
            {
                transform: 'scale(1.2) rotate(180deg)',
            }
        ], {
            fill: 'forwards',
            duration: 200,
        });
    }

    function outArrowLeft() {
        arrowSlideLeft.animate([{
                transform: 'scale(1.2) rotate(180deg)',
            },
            {
                transform: 'scale(1) rotate(180deg)',
            }
        ], {
            fill: 'forwards',
            duration: 200,
        });
    }
    /* -----------------------fleche droite------------------- */
    var arrowSlideRight = document.createElement('img');
    arrowSlideRight.setAttribute('src', '../images/arrowSlide.png');
    arrowSlideRight.style.width = '100px';
    arrowSlideRight.style.height = '100px';
    arrowSlideRight.style.cssFloat = 'right';
    arrowSlideRight.style.marginTop = '40vh';
    divGallery.appendChild(arrowSlideRight);
    arrowSlideRight.addEventListener('click', clickArrowRight);
    arrowSlideRight.addEventListener('mouseover', overArrowRight);
    arrowSlideRight.addEventListener('mouseout', outArrowRight);

    function overArrowRight() {
        arrowSlideRight.animate([{
                transform: 'scale(1)',
            },
            {
                transform: 'scale(1.2)',
            }
        ], {
            fill: 'forwards',
            duration: 200,
        });
    }

    function outArrowRight() {
        arrowSlideRight.animate([{
                transform: 'scale(1.2)',
            },
            {
                transform: 'scale(1)',
            }
        ], {
            fill: 'forwards',
            duration: 200,
        });
    }
    /* -----------croix-------------------------- */
    var cross = document.createElement('img');
    cross.setAttribute('src', '../images/cross.png');
    cross.style.width = '50px';
    cross.style.height = '50px';
    cross.style.position = 'absolute';
    cross.style.top = '10px';
    cross.style.left = '10px';
    divGallery.appendChild(cross);
    cross.addEventListener('click', suppGallery);
    cross.addEventListener('mouseover', overCross);
    cross.addEventListener('mouseout', outCross);

    function overCross() {
        cross.animate([{
                transform: 'scale(1)',
            },
            {
                transform: 'scale(1.2)',
            }
        ], {
            fill: 'forwards',
            duration: 200,
        });
    }

    function outCross() {
        cross.animate([{
                transform: 'scale(1.2)',
            },
            {
                transform: 'scale(1)',
            }
        ], {
            fill: 'forwards',
            duration: 200,
        });
    }

    function suppGallery() {
        document.body.removeChild(divGallery);
    }
    /*-----------------------------images------------------ */
    var slide1 = document.createElement('img');
    slide1.setAttribute('src', '../images/img1.jpg')
    slide1.style.width = '70vw';
    slide1.style.height = '70vh';
    slide1.style.position = 'absolute';
    slide1.style.margin = '15vh 16vw';
    slide1.style.display = 'block';
    divGallery.appendChild(slide1);

    var slide2 = document.createElement('img');
    slide2.setAttribute('src', '../images/img2.jpg')
    slide2.style.width = '70vw';
    slide2.style.height = '70vh';
    slide2.style.position = 'absolute';
    slide2.style.margin = '15vh 16vw';
    slide2.style.display = 'none';
    divGallery.appendChild(slide2);

    var slide3 = document.createElement('img');
    slide3.setAttribute('src', '../images/img3.jpg')
    slide3.style.width = '70vw';
    slide3.style.height = '70vh';
    slide3.style.position = 'absolute';
    slide3.style.margin = '15vh 16vw';
    slide3.style.display = 'none';
    divGallery.appendChild(slide3);

    var slide4 = document.createElement('img');
    slide4.setAttribute('src', '../images/img4.png')
    slide4.style.width = '70vw';
    slide4.style.height = '70vh';
    slide4.style.position = 'absolute';
    slide4.style.margin = '15vh 16vw';
    slide4.style.display = 'none';
    divGallery.appendChild(slide4);

    if (window.matchMedia("(max-width: 425px)").matches) {
        slide1.style.height = '20vh';
        slide2.style.height = '20vh';
        slide3.style.height = '20vh';
        slide4.style.height = '20vh';
    } else if (window.matchMedia("(max-width: 768px) and (min-width: 426px)").matches) {
        slide1.style.height = '40vh';
        slide2.style.height = '40vh';
        slide3.style.height = '40vh';
        slide4.style.height = '40vh';
    }

    var count = 1;
    /* --------------------click fleche gauche------------------------------------ */
    function clickArrowLeft() {
        if (count == 4) {
            slide4.animate([{
                    transform: 'translateX(0px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(2000px)',
                    display: 'none',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            slide3.animate([{
                    transform: 'translateX(-2000px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(0px)',
                    display: 'block',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            count = 3;
        } else if (count == 3) {
            slide3.animate([{
                    transform: 'translateX(0px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(2000px)',
                    display: 'none',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });


            slide2.animate([{
                    transform: 'translateX(-2000px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(0px)',
                    display: 'block',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            count = 2;
        } else if (count == 2) {
            slide2.animate([{
                    transform: 'translateX(0px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(2000px)',
                    display: 'block',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });


            slide1.animate([{
                    transform: 'translateX(-2000px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(0px)',
                    display: 'block',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            count = 1;
        } else {
            count = 1;
        }

        if (window.matchMedia("(max-width: 425px)").matches) {
            slide1.style.height = '20vh';
            slide2.style.height = '20vh';
            slide3.style.height = '20vh';
            slide4.style.height = '20vh';
        } else if (window.matchMedia("(max-width: 768px) and (min-width: 426px)").matches) {
            slide1.style.height = '40vh';
            slide2.style.height = '40vh';
            slide3.style.height = '40vh';
            slide4.style.height = '40vh';
        }

    }

    /* ------------------------------click fleche droite-------------------------------------- */

    function clickArrowRight() {
        if (count == 1) {
            slide1.animate([{
                    transform: 'translateX(0px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(-2000px)',
                    display: 'none',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            slide2.style.display = 'block';


            slide2.animate([{
                    transform: 'translateX(2000px)',
                },
                {
                    transform: 'translateX(0px)',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            count = 2;
        } else if (count == 2) {
            slide2.animate([{
                    transform: 'translateX(0px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(-2000px)',
                    display: 'none',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            slide3.style.display = 'block';


            slide3.animate([{
                    transform: 'translateX(2000px)',
                },
                {
                    transform: 'translateX(0px)',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            count = 3;
        } else if (count == 3) {
            slide3.animate([{
                    transform: 'translateX(0px)',
                    display: 'block',
                },
                {
                    transform: 'translateX(-2000px)',
                    display: 'none',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            slide4.style.display = 'block';


            slide4.animate([{
                    transform: 'translateX(2000px)',
                },
                {
                    transform: 'translateX(0px)',
                }
            ], {
                fill: 'forwards',
                duration: 1000,
            });

            count = 4;
        } else {
            count = 4;
        }

        if (window.matchMedia("(max-width: 425px)").matches) {
            slide1.style.height = '20vh';
            slide2.style.height = '20vh';
            slide3.style.height = '20vh';
            slide4.style.height = '20vh';
        } else if (window.matchMedia("(max-width: 768px) and (min-width: 426px)").matches) {
            slide1.style.height = '40vh';
            slide2.style.height = '40vh';
            slide3.style.height = '40vh';
            slide4.style.height = '40vh';
        }

    }
}