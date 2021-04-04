import React from 'react';

const Navigation = () => {
  return (
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i class="fa fa-bars"></i>
                    </button>
            <img id="flag" src="img/lang_english.png">
            <a class="navbar-brand page-scroll" href="#page-top">AJG</a>
          </div>
          <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
            <ul class="nav navbar-nav">
              <li class="hidden">
                <a href="#page-top"></a>
              </li>
              <li>
                <a class="page-scroll" href="#about">
                                <span class="en">About Me</span>
                                <span class="es">Acerca de Mi</span>
                            </a>
              </li>
              <li>
                <a class="page-scroll" href="#portfolio">
                                <span class="en">Portfolio</span>
                                <span class="es">Portafolio</span>
                            </a>
              </li>
              <li>
                <a class="page-scroll" href="#contact">
                                <span class="en">Contact</span>
                                <span class="es">Contacto</span>
                            </a>
              </li>
              <li>
                <a class="page-scroll" href="#interests">
                                <span class="en">Interests</span>
                                <span class="es">Intereses</span>
                            </a>
              </li>
              <li>
                <a href="https://www.blog.andrewgingrich.com">
                                <span class="en">Blog</span>
                                <span class="es">Blog</span>
                            </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
};

export default Navigation;
