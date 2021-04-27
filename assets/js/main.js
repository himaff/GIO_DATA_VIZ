$( document ).ready(function() {
    document.body.innerHTML = '<div id="headerbar">\
        <div class="headerpanel" id="maintitle">\
            <p class="title">Fixed Telephone Monitor</p>\
        </div>\
        <div class="headerpanel" id="description">\
            <p class="maindescription">\
                Exploring the distribution, dimensions and<br>dynamics of intentional homicide around the world.\
            </p>\
        </div>\
        <div class="headerpanel" id="scale">\
            <p class="labeltext1">\
                HOMICIDES PER 100,000 POPULATION\
            </p>\
            <div id="scaleboxes">\
                <table id="scaletable">\
                    <tbody>\
                        <tr>\
                            <td class="scalebox" id="scalebox0"></td>\
                            <td class="scalebox" id="scalebox1"></td>\
                            <td class="scalebox" id="scalebox2"></td>\
                            <td class="scalebox" id="scalebox3"></td>\
                            <td class="scalebox" id="scalebox4"></td>\
                            <td class="scalebox" id="scalebox5"></td>\
                            <td class="scalebox" id="scalebox6"></td>\
                            <td class="scalebox" id="scalebox7"></td>\
                        </tr>\
                        <tr>\
                            <td class="scalelabel" id="scalelabel0">\
                                <p class="scalelabeltext">no data</p>\
                            </td>\
                            <td class="scalelabel" id="scalelabel1">\
                                <p class="scalelabeltext">0 - 3.13</p>\
                            </td>\
                            <td class="scalelabel" id="scalelabel2">\
                                <p class="scalelabeltext">- 5.25</p>\
                            </td>\
                            <td class="scalelabel" id="scalelabel3">\
                                <p class="scalelabeltext">- 12.5</p>\
                            </td>\
                            <td class="scalelabel" id="scalelabel4">\
                                <p class="scalelabeltext">- 25.0</p>\
                            </td>\
                            <td class="scalelabel" id="scalelabel5">\
                                <p class="scalelabeltext">- 50</p>\
                            </td>\
                            <td class="scalelabel" id="scalelabel6">\
                                <p class="scalelabeltext">- 100</p>\
                            </td>\
                            <td class="scalelabel" id="scalelabel7">\
                                <p class="scalelabeltext">100 +</p>\
                            </td>\
                        </tr>\
                    </tbody>\
                </table>\
            </div>\
        </div>\
        <div class="headerpanel" id="search">\
            <div class="ui-widget">\
                <i class="fas fa-search"></i>\
                <input id="tags" class="ui-autocomplete-input" style="color: rgb(178, 240, 255);">\
            </div>\
        </div>\
    </div>\
    <div id="zoneArea" ></div>';

        
        // Get the container to hold the IO globe
        var container = document.getElementById( "zoneArea" );

        // Create Gio.controller
        var controller = new GIO.Controller( container );

        var data = [
            {
                "e": "US",
                "i": "CI",
                "v": 100000
            },
            {
                "e": "CI",
                "i": "MA",
                "v": 100000
            }
        ];

        // Add data
        controller.addData(data);

        //COULEUR DE GLOBE--------------------------------////
        //change surface de la terre
        controller.setSurfaceColor("#fabd3e");
        //change la couleur de fond du document
        controller.setBackgroundColor("#010a0f");
        //reduire l'eclairage de l'ocean
        controller.adjustOceanBrightness(1);
        // change the init country to the United States
        controller.setInitCountry("CI");
        //set halo color
        controller.setHaloColor("#CFE4FC");

        // Initialize and render the globe
        controller.init();
});