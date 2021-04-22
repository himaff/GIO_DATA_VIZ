$( document ).ready(function() {
    document.body.innerHTML = '<div id="zoneArea" style="width: 500px; height: 500px; background-color: red"></div>';

  
        // Get the container to hold the IO globe
        var container = document.getElementById( "zoneArea" );

        // Create Gio.controller
        var controller = new GIO.Controller( container );

        // Add data
        controller.addData( data );

        // Initialize and render the globe
        controller.init();
});