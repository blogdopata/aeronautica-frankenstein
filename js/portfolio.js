
    $(function(){
        $("#elastic_grid_demo").elastic_grid({
            'showAllText' : 'Todos',
            'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'items' :
            [
                {
                    'title'         : 'Avión de la USMP',
                    'description'   : 'Es un avión de última generación adquirido desde nuevo por la universidad en el 2012. Cuenta con sistemas de navegación Garmin 1000, Piloto automático y visión sintética 3D. Dichos equipos ayudan a nuestros alumnos a familiarizarme con los sistemas más modernos usados en aviación comercial.',
                    'thumbnail'     : ['images/portfolio/1_small.jpg', 'images/portfolio/2_small.jpg'],
                    'large'         : ['images/portfolio/1.jpg', 'images/portfolio/2.jpg'],
                    'img_title'     : ['Pic 1 ', 'Pic 2'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : false}
                    ],
                    'tags'          : ['Aviones']
                },
                {
                    'title'         : 'Otro Avión de la USMP',
                    'description'   : 'EsTE ES OTRO avión de última generación adquirido desde nuevo por la universidad en el 2012. Cuenta con sistemas de navegación Garmin 1000, Piloto automático y visión sintética 3D. Dichos equipos ayudan a nuestros alumnos a familiarizarme con los sistemas más modernos usados en aviación comercial.',
                    'thumbnail'     : ['images/portfolio/2_small.jpg', 'images/portfolio/1_small.jpg'],
                    'large'         : ['images/portfolio/2.jpg', 'images/portfolio/1.jpg'],
                    'img_title'     : ['Pic 2', 'Pic 1'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : false}
                    ],
                    'tags'          : ['Aviones']
                },



                {
                    'title'         : 'Simulador',
                    'description'   : 'TEXTO DEL SIMULADOR ',
                    'thumbnail'     : ['images/portfolio/3_small.jpg', 'images/portfolio/4_small.jpg', 'images/portfolio/5_small.jpg', 'images/portfolio/6_small.jpg'],
                    'large'         : ['images/portfolio/3.jpg', 'images/portfolio/4.jpg', 'images/portfolio/5.jpg', 'images/portfolio/6.jpg'],
                    'img_title'     : ['Pic 3 ', 'Pic 4', 'Pic 4', 'Pic 6'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Simulador']
                },

                 {
                    'title'         : 'Simulador',
                    'description'   : 'TEXTO DEL SIMULADOR ',
                    'thumbnail'     : ['images/portfolio/4_small.jpg', 'images/portfolio/5_small.jpg', 'images/portfolio/6_small.jpg', 'images/portfolio/3_small.jpg'],
                    'large'         : ['images/portfolio/4.jpg', 'images/portfolio/5.jpg', 'images/portfolio/6.jpg', 'images/portfolio/3.jpg'],
                    'img_title'     : ['Pic 4 ', 'Pic 5', 'Pic 6', 'Pic 3'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Simulador']
                },

                 {
                    'title'         : 'Simulador',
                    'description'   : 'TEXTO DEL SIMULADOR ',
                    'thumbnail'     : ['images/portfolio/5_small.jpg', 'images/portfolio/6_small.jpg', 'images/portfolio/4_small.jpg', 'images/portfolio/3_small.jpg'],
                    'large'         : ['images/portfolio/5.jpg', 'images/portfolio/6.jpg', 'images/portfolio/3.jpg', 'images/portfolio/4.jpg'],
                    'img_title'     : ['Pic 5 ', 'Pic 6', 'Pic 3', 'Pic 4'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Simulador']
                },

                 {
                    'title'         : 'Simulador',
                    'description'   : 'TEXTO DEL SIMULADOR ',
                    'thumbnail'     : ['images/portfolio/3_small.jpg', 'images/portfolio/4_small.jpg', 'images/portfolio/5_small.jpg', 'images/portfolio/6_small.jpg'],
                    'large'         : ['images/portfolio/3.jpg', 'images/portfolio/4.jpg', 'images/portfolio/5.jpg', 'images/portfolio/6.jpg'],
                    'img_title'     : ['Pic 3 ', 'Pic 4', 'Pic 4', 'Pic 6'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Simulador']
                },





                {
                    'title'         : 'Laboratorio',
                    'description'   : 'Texto de Laboratorio',
                    'thumbnail'     : ['images/portfolio/7_small.jpg','images/portfolio/8_Small.jpg', 'images/portfolio/9_small.jpg'],
                    'large'         : ['images/portfolio/7.jpg','images/portfolio/8.jpg', 'images/portfolio/9.jpg'],
                    'img_title'     : ['Pic 7', 'Pic 8', 'Pic 9'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Laboratorio']
                },
                 {
                    'title'         : 'Laboratorio',
                    'description'   : 'Texto de Laboratorio',
                    'thumbnail'     : ['images/portfolio/8_small.jpg','images/portfolio/9_Small.jpg', 'images/portfolio/7_small.jpg'],
                    'large'         : ['images/portfolio/8.jpg','images/portfolio/9.jpg', 'images/portfolio/7.jpg'],
                    'img_title'     : ['Pic 8', 'Pic 9', 'Pic 7'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Laboratorio']
                },

                 {
                    'title'         : 'Laboratorio',
                    'description'   : 'Texto de Laboratorio',
                    'thumbnail'     : ['images/portfolio/9_small.jpg','images/portfolio/8_Small.jpg', 'images/portfolio/7_small.jpg'],
                    'large'         : ['images/portfolio/9.jpg','images/portfolio/8.jpg', 'images/portfolio/7.jpg'],
                    'img_title'     : ['Pic 9', 'Pic 8', 'Pic 7'],
                    'button_list'   :
                    [
                        // { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        // { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Laboratorio']
                },
                

            ]
        });
    });
