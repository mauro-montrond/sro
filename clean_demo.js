$(function() {

    var southWest = L.latLng(14.902777, -23.546727);
    var northEast = L.latLng(14.972272, -23.452314);
    var bounds = L.latLngBounds(southWest, northEast);

    var map = L.map('map', {
        center: [14.917677382116992, -23.50910526997089],
        zoom: 15,
        maxBounds: bounds,
        layers: [],
        crs: L.CRS.EPSG3857
    });

    var tile_layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 12,
        attribution: 'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
        detectRetina: false
    }).addTo(map);

    var marker_cluster = L.markerClusterGroup();
    map.addLayer(marker_cluster);

    var marker = L.marker([14.9169, -23.509], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon = L.AwesomeMarkers.icon({
        icon: 'asterisk',
        iconColor: 'white',
        markerColor: 'green',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker.setIcon(icon);

    var popup = L.popup({
        maxWidth: '300'
    });


    var popup_html = $('<div id="popup_html" style="width: 100.0%; height: 100.0%;"> Marker 1.</div>')[0];
    popup.setContent(popup_html);

    marker.bindPopup(popup);

    var marker_2 = L.marker([14.9176, -23.5091], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_2 = L.AwesomeMarkers.icon({
        icon: 'plus',
        iconColor: 'white',
        markerColor: 'red',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_2.setIcon(icon_2);

    var popup_2 = L.popup({
        maxWidth: '300'
    });


    var popup_2_html = $('<div id="popup_2_html" style="width: 100.0%; height: 100.0%;"> Marker 2.</div>')[0];
    popup_2.setContent(popup_2_html);

    marker_2.bindPopup(popup_2);

    var marker_3 = L.marker([14.9172, -23.5086], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_3 = L.AwesomeMarkers.icon({
        icon: 'euro',
        iconColor: 'white',
        markerColor: 'green',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_3.setIcon(icon_3);

    var popup_3 = L.popup({
        maxWidth: '300'
    });


    var popup_3_html = $('<div id="popup_3_html" style="width: 100.0%; height: 100.0%;"> Marker 3.</div>')[0];
    popup_3.setContent(popup_3_html);

    marker_3.bindPopup(popup_3);

    var marker_4 = L.marker([14.9164, -23.5187], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_4 = L.AwesomeMarkers.icon({
        icon: 'minus',
        iconColor: 'white',
        markerColor: 'green',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_4.setIcon(icon_4);

    var popup_4 = L.popup({
        maxWidth: '300'
    });

    var popup_4_html = $('<div id="popup_4_html" style="width: 100.0%; height: 100.0%;"> Marker 4.</div>')[0];
    popup_4.setContent(popup_4_html);

    marker_4.bindPopup(popup_4);

    var marker_5 = L.marker([14.9151, -23.5206], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_5 = L.AwesomeMarkers.icon({
        icon: 'cloud',
        iconColor: 'white',
        markerColor: 'red',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_5.setIcon(icon_5);

    var popup_5 = L.popup({
        maxWidth: '300'
    });

    var popup_5_html = $('<div id="popup_5_html" style="width: 100.0%; height: 100.0%;"> Marker 5.</div>')[0];
    popup_5.setContent(popup_5_html);

    marker_5.bindPopup(popup_5);

    var marker_6 = L.marker([14.9138, -23.5194], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_6 = L.AwesomeMarkers.icon({
        icon: 'envelope',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_6.setIcon(icon_6);

    var popup_6 = L.popup({
        maxWidth: '300'
    });

    var popup_6_html = $('<div id="popup_6_html" style="width: 100.0%; height: 100.0%;"> Marker 6.</div>')[0];
    popup_6.setContent(popup_6_html);

    marker_6.bindPopup(popup_6);

    var marker_7 = L.marker([14.9140, -23.5273], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_7 = L.AwesomeMarkers.icon({
        icon: 'pencil',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_7.setIcon(icon_7);

    var popup_7 = L.popup({
        maxWidth: '300'
    });

    var popup_7_html = $('<div id="popup_7_html" style="width: 100.0%; height: 100.0%;"> Marker 7.</div>')[0];
    popup_7.setContent(popup_7_html);

    marker_7.bindPopup(popup_7);

    var marker_8 = L.marker([14.9138, -23.5264], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_8 = L.AwesomeMarkers.icon({
        icon: 'glass',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_8.setIcon(icon_8);

    var popup_8 = L.popup({
        maxWidth: '300'
    });

    var popup_8_html = $('<div id="popup_8_html" style="width: 100.0%; height: 100.0%;"> Marker 8.</div>')[0];
    popup_8.setContent(popup_8_html);

    marker_8.bindPopup(popup_8);

    var marker_9 = L.marker([14.9132, -23.5269], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_9 = L.AwesomeMarkers.icon({
        icon: 'music',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_9.setIcon(icon_9);

    var popup_9 = L.popup({
        maxWidth: '300'
    });

    var popup_9_html = $('<div id="popup_9_html" style="width: 100.0%; height: 100.0%;"> Marker 9.</div>')[0];
    popup_9.setContent(popup_9_html);

    marker_9.bindPopup(popup_9);

    var marker_10 = L.marker([14.9128, -23.5278], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_10 = L.AwesomeMarkers.icon({
        icon: 'search',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_10.setIcon(icon_10);

    var popup_10 = L.popup({
        maxWidth: '300'
    });

    var popup_10_html = $('<div id="popup_10_html" style="width: 100.0%; height: 100.0%;"> Marker 10.</div>')[0];
    popup_10.setContent(popup_10_html);

    marker_10.bindPopup(popup_10);

    var marker_11 = L.marker([14.9207, -23.5211], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_11 = L.AwesomeMarkers.icon({
        icon: 'heart',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_11.setIcon(icon_11);

    var popup_11 = L.popup({
        maxWidth: '300'
    });

    var popup_11_html = $('<div id="popup_11_html" style="width: 100.0%; height: 100.0%;"> Marker 11.</div>')[0];
    popup_11.setContent(popup_11_html);

    marker_11.bindPopup(popup_11);

    var marker_12 = L.marker([14.9204, -23.5200], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_12 = L.AwesomeMarkers.icon({
        icon: 'star',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_12.setIcon(icon_12);

    var popup_12 = L.popup({
        maxWidth: '300'
    });

    var popup_12_html = $('<div id="popup_12_html" style="width: 100.0%; height: 100.0%;"> Marker 12.</div>')[0];
    popup_12.setContent(popup_12_html);

    marker_12.bindPopup(popup_12);

    var marker_13 = L.marker([14.9197, -23.5194], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_13 = L.AwesomeMarkers.icon({
        icon: 'star-empty',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_13.setIcon(icon_13);

    var popup_13 = L.popup({
        maxWidth: '300'
    });

    var popup_13_html = $('<div id="popup_13_html" style="width: 100.0%; height: 100.0%;"> Marker 13.</div>')[0];
    popup_13.setContent(popup_13_html);

    marker_13.bindPopup(popup_13);

    var marker_14 = L.marker([14.9184, -23.5192], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_14 = L.AwesomeMarkers.icon({
        icon: 'user',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_14.setIcon(icon_14);

    var popup_14 = L.popup({
        maxWidth: '300'
    });

    var popup_14_html = $('<div id="popup_14_html" style="width: 100.0%; height: 100.0%;"> Marker 14.</div>')[0];
    popup_14.setContent(popup_14_html);

    marker_14.bindPopup(popup_14);

    var marker_15 = L.marker([14.9237, -23.5128], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_15 = L.AwesomeMarkers.icon({
        icon: 'film',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_15.setIcon(icon_15);

    var popup_15 = L.popup({
        maxWidth: '300'
    });

    var popup_15_html = $('<div id="popup_15_html" style="width: 100.0%; height: 100.0%;"> Marker 15.</div>')[0];
    popup_15.setContent(popup_15_html);

    marker_15.bindPopup(popup_15);

    var marker_16 = L.marker([14.9249, -23.5137], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_16 = L.AwesomeMarkers.icon({
        icon: 'th-large',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_16.setIcon(icon_16);

    var popup_16 = L.popup({
        maxWidth: '300'
    });

    var popup_16_html = $('<div id="popup_16_html" style="width: 100.0%; height: 100.0%;"> Marker 16.</div>')[0];
    popup_16.setContent(popup_16_html);

    marker_16.bindPopup(popup_16);

    var marker_17 = L.marker([14.9242, -23.5142], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_17 = L.AwesomeMarkers.icon({
        icon: 'th',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_17.setIcon(icon_17);

    var popup_17 = L.popup({
        maxWidth: '300'
    });

    var popup_17_html = $('<div id="popup_17_html" style="width: 100.0%; height: 100.0%;"> Marker 17.</div>')[0];
    popup_17.setContent(popup_17_html);

    marker_17.bindPopup(popup_17);

    var marker_18 = L.marker([14.9246, -23.5125], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_18 = L.AwesomeMarkers.icon({
        icon: 'th-list',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_18.setIcon(icon_18);

    var popup_18 = L.popup({
        maxWidth: '300'
    });

    var popup_18_html = $('<div id="popup_18_html" style="width: 100.0%; height: 100.0%;"> Marker 18.</div>')[0];
    popup_18.setContent(popup_18_html);

    marker_18.bindPopup(popup_18);

    var marker_19 = L.marker([14.9251, -23.5128], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_19 = L.AwesomeMarkers.icon({
        icon: 'ok',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_19.setIcon(icon_19);

    var popup_19 = L.popup({
        maxWidth: '300'
    });

    var popup_19_html = $('<div id="popup_19_html" style="width: 100.0%; height: 100.0%;"> Marker 19.</div>')[0];
    popup_19.setContent(popup_19_html);

    marker_19.bindPopup(popup_19);

    var marker_20 = L.marker([14.9245, -23.5145], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_20 = L.AwesomeMarkers.icon({
        icon: 'remove',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_20.setIcon(icon_20);

    var popup_20 = L.popup({
        maxWidth: '300'
    });

    var popup_20_html = $('<div id="popup_20_html" style="width: 100.0%; height: 100.0%;"> Marker 20.</div>')[0];
    popup_20.setContent(popup_20_html);

    marker_20.bindPopup(popup_20);

    var marker_21 = L.marker([14.9240, -23.5138], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_21 = L.AwesomeMarkers.icon({
        icon: 'zoom-in',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_21.setIcon(icon_21);

    var popup_21 = L.popup({
        maxWidth: '300'
    });

    var popup_21_html = $('<div id="popup_21_html" style="width: 100.0%; height: 100.0%;"> Marker 21.</div>')[0];
    popup_21.setContent(popup_21_html);

    marker_21.bindPopup(popup_21);

    var marker_22 = L.marker([14.9243, -23.5133], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_22 = L.AwesomeMarkers.icon({
        icon: 'zoom-out',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_22.setIcon(icon_22);

    var popup_22 = L.popup({
        maxWidth: '300'
    });

    var popup_22_html = $('<div id="popup_22_html" style="width: 100.0%; height: 100.0%;"> Marker 22.</div>')[0];
    popup_22.setContent(popup_22_html);

    marker_22.bindPopup(popup_22);

    var marker_23 = L.marker([14.9250, -23.5143], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_23 = L.AwesomeMarkers.icon({
        icon: 'off',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_23.setIcon(icon_23);

    var popup_23 = L.popup({
        maxWidth: '300'
    });

    var popup_23_html = $('<div id="popup_23_html" style="width: 100.0%; height: 100.0%;"> Marker 23.</div>')[0];
    popup_23.setContent(popup_23_html);

    marker_23.bindPopup(popup_23);

    var marker_24 = L.marker([14.9241, -23.5124], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_24 = L.AwesomeMarkers.icon({
        icon: 'signal',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_24.setIcon(icon_24);

    var popup_24 = L.popup({
        maxWidth: '300'
    });

    var popup_24_html = $('<div id="popup_24_html" style="width: 100.0%; height: 100.0%;"> Marker 24.</div>')[0];
    popup_24.setContent(popup_24_html);

    marker_24.bindPopup(popup_24);

    var marker_25 = L.marker([14.9179, -23.5338], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_25 = L.AwesomeMarkers.icon({
        icon: 'cog',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_25.setIcon(icon_25);

    var popup_25 = L.popup({
        maxWidth: '300'
    });

    var popup_25_html = $('<div id="popup_25_html" style="width: 100.0%; height: 100.0%;"> Marker 25.</div>')[0];
    popup_25.setContent(popup_25_html);

    marker_25.bindPopup(popup_25);

    var marker_26 = L.marker([14.9180, -23.5353], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_26 = L.AwesomeMarkers.icon({
        icon: 'trash',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_26.setIcon(icon_26);

    var popup_26 = L.popup({
        maxWidth: '300'
    });

    var popup_26_html = $('<div id="popup_26_html" style="width: 100.0%; height: 100.0%;"> Marker 26.</div>')[0];
    popup_26.setContent(popup_26_html);

    marker_26.bindPopup(popup_26);

    var marker_27 = L.marker([14.9173, -23.5355], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_27 = L.AwesomeMarkers.icon({
        icon: 'home',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_27.setIcon(icon_27);

    var popup_27 = L.popup({
        maxWidth: '300'
    });

    var popup_27_html = $('<div id="popup_27_html" style="width: 100.0%; height: 100.0%;"> Marker 27.</div>')[0];
    popup_27.setContent(popup_27_html);

    marker_27.bindPopup(popup_27);

    var marker_28 = L.marker([14.9182, -23.5361], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_28 = L.AwesomeMarkers.icon({
        icon: 'file',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_28.setIcon(icon_28);

    var popup_28 = L.popup({
        maxWidth: '300'
    });

    var popup_28_html = $('<div id="popup_28_html" style="width: 100.0%; height: 100.0%;"> Marker 28.</div>')[0];
    popup_28.setContent(popup_28_html);

    marker_28.bindPopup(popup_28);

    var marker_29 = L.marker([14.9175, -23.5362], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_29 = L.AwesomeMarkers.icon({
        icon: 'time',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_29.setIcon(icon_29);

    var popup_29 = L.popup({
        maxWidth: '300'
    });

    var popup_29_html = $('<div id="popup_29_html" style="width: 100.0%; height: 100.0%;"> Marker 29.</div>')[0];
    popup_29.setContent(popup_29_html);

    marker_29.bindPopup(popup_29);

    var marker_30 = L.marker([14.9169, -23.5364], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_30 = L.AwesomeMarkers.icon({
        icon: 'road',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_30.setIcon(icon_30);

    var popup_30 = L.popup({
        maxWidth: '300'
    });

    var popup_30_html = $('<div id="popup_30_html" style="width: 100.0%; height: 100.0%;"> Marker 30.</div>')[0];
    popup_30.setContent(popup_30_html);

    marker_30.bindPopup(popup_30);

    var marker_31 = L.marker([14.9184, -23.5370], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_31 = L.AwesomeMarkers.icon({
        icon: 'download-alt',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_31.setIcon(icon_31);

    var popup_31 = L.popup({
        maxWidth: '300'
    });

    var popup_31_html = $('<div id="popup_31_html" style="width: 100.0%; height: 100.0%;"> Marker 31.</div>')[0];
    popup_31.setContent(popup_31_html);

    marker_31.bindPopup(popup_31);

    var marker_32 = L.marker([14.9177, -23.5372], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_32 = L.AwesomeMarkers.icon({
        icon: 'download',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_32.setIcon(icon_32);

    var popup_32 = L.popup({
        maxWidth: '300'
    });

    var popup_32_html = $('<div id="popup_32_html" style="width: 100.0%; height: 100.0%;"> Marker 32.</div>')[0];
    popup_32.setContent(popup_32_html);

    marker_32.bindPopup(popup_32);

    var marker_33 = L.marker([14.9171, -23.5373], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_33 = L.AwesomeMarkers.icon({
        icon: 'upload',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_33.setIcon(icon_33);

    var popup_33 = L.popup({
        maxWidth: '300'
    });

    var popup_33_html = $('<div id="popup_33_html" style="width: 100.0%; height: 100.0%;"> Marker 33.</div>')[0];
    popup_33.setContent(popup_33_html);

    marker_33.bindPopup(popup_33);

    var marker_34 = L.marker([14.9209, -23.5392], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_34 = L.AwesomeMarkers.icon({
        icon: 'inbox',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_34.setIcon(icon_34);

    var popup_34 = L.popup({
        maxWidth: '300'
    });

    var popup_34_html = $('<div id="popup_34_html" style="width: 100.0%; height: 100.0%;"> Marker 34.</div>')[0];
    popup_34.setContent(popup_34_html);

    marker_34.bindPopup(popup_34);

    var marker_35 = L.marker([14.9203, -23.5393], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_35 = L.AwesomeMarkers.icon({
        icon: 'play-circle',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_35.setIcon(icon_35);

    var popup_35 = L.popup({
        maxWidth: '300'
    });

    var popup_35_html = $('<div id="popup_35_html" style="width: 100.0%; height: 100.0%;"> Marker 35.</div>')[0];
    popup_35.setContent(popup_35_html);

    marker_35.bindPopup(popup_35);

    var marker_36 = L.marker([14.9197, -23.5394], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_36 = L.AwesomeMarkers.icon({
        icon: 'repeat',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_36.setIcon(icon_36);

    var popup_36 = L.popup({
        maxWidth: '300'
    });

    var popup_36_html = $('<div id="popup_36_html" style="width: 100.0%; height: 100.0%;"> Marker 36.</div>')[0];
    popup_36.setContent(popup_36_html);

    marker_36.bindPopup(popup_36);

    var marker_37 = L.marker([14.9210, -23.5399], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_37 = L.AwesomeMarkers.icon({
        icon: 'refresh',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_37.setIcon(icon_37);

    var popup_37 = L.popup({
        maxWidth: '300'
    });

    var popup_37_html = $('<div id="popup_37_html" style="width: 100.0%; height: 100.0%;"> Marker 37.</div>')[0];
    popup_37.setContent(popup_37_html);

    marker_37.bindPopup(popup_37);

    var marker_38 = L.marker([14.9205, -23.5401], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_38 = L.AwesomeMarkers.icon({
        icon: 'list-alt',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_38.setIcon(icon_38);

    var popup_38 = L.popup({
        maxWidth: '300'
    });

    var popup_38_html = $('<div id="popup_38_html" style="width: 100.0%; height: 100.0%;"> Marker 38.</div>')[0];
    popup_38.setContent(popup_38_html);

    marker_38.bindPopup(popup_38);

    var marker_39 = L.marker([14.9199, -23.5402], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_39 = L.AwesomeMarkers.icon({
        icon: 'lock',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_39.setIcon(icon_39);

    var popup_39 = L.popup({
        maxWidth: '300'
    });

    var popup_39_html = $('<div id="popup_39_html" style="width: 100.0%; height: 100.0%;"> Marker 39.</div>')[0];
    popup_39.setContent(popup_39_html);

    marker_39.bindPopup(popup_39);

    var marker_40 = L.marker([14.9212, -23.5408], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_40 = L.AwesomeMarkers.icon({
        icon: 'flag',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_40.setIcon(icon_40);

    var popup_40 = L.popup({
        maxWidth: '300'
    });

    var popup_40_html = $('<div id="popup_40_html" style="width: 100.0%; height: 100.0%;"> Marker 40.</div>')[0];
    popup_40.setContent(popup_40_html);

    marker_40.bindPopup(popup_40);

    var marker_41 = L.marker([14.9206, -23.5409], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_41 = L.AwesomeMarkers.icon({
        icon: 'headphones',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_41.setIcon(icon_41);

    var popup_41 = L.popup({
        maxWidth: '300'
    });

    var popup_41_html = $('<div id="popup_41_html" style="width: 100.0%; height: 100.0%;"> Marker 41.</div>')[0];
    popup_41.setContent(popup_41_html);

    marker_41.bindPopup(popup_41);

    var marker_42 = L.marker([14.9201, -23.5410], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_42 = L.AwesomeMarkers.icon({
        icon: 'volume-off',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_42.setIcon(icon_42);

    var popup_42 = L.popup({
        maxWidth: '300'
    });

    var popup_42_html = $('<div id="popup_42_html" style="width: 100.0%; height: 100.0%;"> Marker 42.</div>')[0];
    popup_42.setContent(popup_42_html);

    marker_42.bindPopup(popup_42);

    var marker_43 = L.marker([14.9213, -23.5414], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_43 = L.AwesomeMarkers.icon({
        icon: 'volume-down',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_43.setIcon(icon_43);

    var popup_43 = L.popup({
        maxWidth: '300'
    });

    var popup_43_html = $('<div id="popup_43_html" style="width: 100.0%; height: 100.0%;"> Marker 43.</div>')[0];
    popup_43.setContent(popup_43_html);

    marker_43.bindPopup(popup_43);

    var marker_44 = L.marker([14.9207, -23.5415], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_44 = L.AwesomeMarkers.icon({
        icon: 'volume-up',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_44.setIcon(icon_44);

    var popup_44 = L.popup({
        maxWidth: '300'
    });

    var popup_44_html = $('<div id="popup_44_html" style="width: 100.0%; height: 100.0%;"> Marker 44.</div>')[0];
    popup_44.setContent(popup_44_html);

    marker_44.bindPopup(popup_44);

    var marker_45 = L.marker([14.9202, -23.5416], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_45 = L.AwesomeMarkers.icon({
        icon: 'qrcode',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_45.setIcon(icon_45);

    var popup_45 = L.popup({
        maxWidth: '300'
    });

    var popup_45_html = $('<div id="popup_45_html" style="width: 100.0%; height: 100.0%;"> Marker 45.</div>')[0];
    popup_45.setContent(popup_45_html);

    marker_45.bindPopup(popup_45);

    var marker_46 = L.marker([14.9194, -23.5412], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_46 = L.AwesomeMarkers.icon({
        icon: 'barcode',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_46.setIcon(icon_46);

    var popup_46 = L.popup({
        maxWidth: '300'
    });

    var popup_46_html = $('<div id="popup_46_html" style="width: 100.0%; height: 100.0%;"> Marker 46.</div>')[0];
    popup_46.setContent(popup_46_html);

    marker_46.bindPopup(popup_46);

    var marker_47 = L.marker([14.9194, -23.5418], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_47 = L.AwesomeMarkers.icon({
        icon: 'tag',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_47.setIcon(icon_47);

    var popup_47 = L.popup({
        maxWidth: '300'
    });

    var popup_47_html = $('<div id="popup_47_html" style="width: 100.0%; height: 100.0%;"> Marker 47.</div>')[0];
    popup_47.setContent(popup_47_html);

    marker_47.bindPopup(popup_47);

    var marker_48 = L.marker([14.9203, -23.5427], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_48 = L.AwesomeMarkers.icon({
        icon: 'tags',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_48.setIcon(icon_48);

    var popup_48 = L.popup({
        maxWidth: '300'
    });

    var popup_48_html = $('<div id="popup_48_html" style="width: 100.0%; height: 100.0%;"> Marker 48.</div>')[0];
    popup_48.setContent(popup_48_html);

    marker_48.bindPopup(popup_48);

    var marker_49 = L.marker([14.9197, -23.5425], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_49 = L.AwesomeMarkers.icon({
        icon: 'book',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_49.setIcon(icon_49);

    var popup_49 = L.popup({
        maxWidth: '300'
    });

    var popup_49_html = $('<div id="popup_49_html" style="width: 100.0%; height: 100.0%;"> Marker 49.</div>')[0];
    popup_49.setContent(popup_49_html);

    marker_49.bindPopup(popup_49);

    var marker_50 = L.marker([14.9191, -23.5423], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_50 = L.AwesomeMarkers.icon({
        icon: 'bookmark',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_50.setIcon(icon_50);

    var popup_50 = L.popup({
        maxWidth: '300'
    });

    var popup_50_html = $('<div id="popup_50_html" style="width: 100.0%; height: 100.0%;"> Marker 50.</div>')[0];
    popup_50.setContent(popup_50_html);

    marker_50.bindPopup(popup_50);

    var marker_51 = L.marker([14.9185, -23.5421], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_51 = L.AwesomeMarkers.icon({
        icon: 'print',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_51.setIcon(icon_51);

    var popup_51 = L.popup({
        maxWidth: '300'
    });

    var popup_51_html = $('<div id="popup_51_html" style="width: 100.0%; height: 100.0%;"> Marker 51.</div>')[0];
    popup_51.setContent(popup_51_html);

    marker_51.bindPopup(popup_51);

    var marker_52 = L.marker([14.9201, -23.5434], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_52 = L.AwesomeMarkers.icon({
        icon: 'camera',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_52.setIcon(icon_52);

    var popup_52 = L.popup({
        maxWidth: '300'
    });

    var popup_52_html = $('<div id="popup_52_html" style="width: 100.0%; height: 100.0%;"> Marker 52.</div>')[0];
    popup_52.setContent(popup_52_html);

    marker_52.bindPopup(popup_52);

    var marker_53 = L.marker([14.9195, -23.5432], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_53 = L.AwesomeMarkers.icon({
        icon: 'font',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_53.setIcon(icon_53);

    var popup_53 = L.popup({
        maxWidth: '300'
    });

    var popup_53_html = $('<div id="popup_53_html" style="width: 100.0%; height: 100.0%;"> Marker 53.</div>')[0];
    popup_53.setContent(popup_53_html);

    marker_53.bindPopup(popup_53);

    var marker_54 = L.marker([14.9189, -23.5430], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_54 = L.AwesomeMarkers.icon({
        icon: 'bold',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_54.setIcon(icon_54);

    var popup_54 = L.popup({
        maxWidth: '300'
    });

    var popup_54_html = $('<div id="popup_54_html" style="width: 100.0%; height: 100.0%;"> Marker 54.</div>')[0];
    popup_54.setContent(popup_54_html);

    marker_54.bindPopup(popup_54);

    var marker_55 = L.marker([14.9183, -23.5428], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_55 = L.AwesomeMarkers.icon({
        icon: 'italic',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_55.setIcon(icon_55);

    var popup_55 = L.popup({
        maxWidth: '300'
    });

    var popup_55_html = $('<div id="popup_55_html" style="width: 100.0%; height: 100.0%;"> Marker 55.</div>')[0];
    popup_55.setContent(popup_55_html);

    marker_55.bindPopup(popup_55);

    var marker_56 = L.marker([14.9144, -23.5405], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_56 = L.AwesomeMarkers.icon({
        icon: 'text-height',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_56.setIcon(icon_56);

    var popup_56 = L.popup({
        maxWidth: '300'
    });

    var popup_56_html = $('<div id="popup_56_html" style="width: 100.0%; height: 100.0%;"> Marker 56.</div>')[0];
    popup_56.setContent(popup_56_html);

    marker_56.bindPopup(popup_56);

    var marker_57 = L.marker([14.9136, -23.5398], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_57 = L.AwesomeMarkers.icon({
        icon: 'text-width',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_57.setIcon(icon_57);

    var popup_57 = L.popup({
        maxWidth: '300'
    });

    var popup_57_html = $('<div id="popup_57_html" style="width: 100.0%; height: 100.0%;"> Marker 57.</div>')[0];
    popup_57.setContent(popup_57_html);

    marker_57.bindPopup(popup_57);

    var marker_58 = L.marker([14.9127, -23.5390], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_58 = L.AwesomeMarkers.icon({
        icon: 'align-left',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_58.setIcon(icon_58);

    var popup_58 = L.popup({
        maxWidth: '300'
    });

    var popup_58_html = $('<div id="popup_58_html" style="width: 100.0%; height: 100.0%;"> Marker 58.</div>')[0];
    popup_58.setContent(popup_58_html);

    marker_58.bindPopup(popup_58);

    var marker_59 = L.marker([14.9141, -23.5408], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_59 = L.AwesomeMarkers.icon({
        icon: 'align-center',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_59.setIcon(icon_58);

    var popup_59 = L.popup({
        maxWidth: '300'
    });

    var popup_59_html = $('<div id="popup_59_html" style="width: 100.0%; height: 100.0%;"> Marker 59.</div>')[0];
    popup_59.setContent(popup_59_html);

    marker_59.bindPopup(popup_59);

    var marker_60 = L.marker([14.9133, -23.5401], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_60 = L.AwesomeMarkers.icon({
        icon: 'align-right',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_60.setIcon(icon_60);

    var popup_60 = L.popup({
        maxWidth: '300'
    });

    var popup_60_html = $('<div id="popup_60_html" style="width: 100.0%; height: 100.0%;"> Marker 60.</div>')[0];
    popup_60.setContent(popup_60_html);

    marker_60.bindPopup(popup_60);

    var marker_61 = L.marker([14.9124, -23.5394], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_61 = L.AwesomeMarkers.icon({
        icon: 'align-justify',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_61.setIcon(icon_61);

    var popup_61 = L.popup({
        maxWidth: '300'
    });

    var popup_61_html = $('<div id="popup_61_html" style="width: 100.0%; height: 100.0%;"> Marker 61.</div>')[0];
    popup_61.setContent(popup_61_html);

    marker_61.bindPopup(popup_61);

    var marker_62 = L.marker([14.9138, -23.5411], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_62 = L.AwesomeMarkers.icon({
        icon: 'list',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_62.setIcon(icon_62);

    var popup_62 = L.popup({
        maxWidth: '300'
    });

    var popup_62_html = $('<div id="popup_62_html" style="width: 100.0%; height: 100.0%;"> Marker 62.</div>')[0];
    popup_62.setContent(popup_62_html);

    marker_62.bindPopup(popup_62);

    var marker_63 = L.marker([14.9130, -23.5405], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_63 = L.AwesomeMarkers.icon({
        icon: 'indent-left',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_63.setIcon(icon_63);

    var popup_63 = L.popup({
        maxWidth: '300'
    });

    var popup_63_html = $('<div id="popup_63_html" style="width: 100.0%; height: 100.0%;"> Marker 63.</div>')[0];
    popup_63.setContent(popup_63_html);

    marker_63.bindPopup(popup_63);

    var marker_64 = L.marker([14.9121, -23.5397], {
        icon: new L.Icon.Default()
    }).addTo(marker_cluster);

    var icon_64 = L.AwesomeMarkers.icon({
        icon: 'indent-right',
        iconColor: 'white',
        markerColor: 'blue',
        prefix: 'glyphicon',
        extraClasses: 'fa-rotate-0'
    });
    marker_64.setIcon(icon_64);

    var popup_64 = L.popup({
        maxWidth: '300'
    });

    var popup_64_html = $('<div id="popup_64_html" style="width: 100.0%; height: 100.0%;"> Marker 64.</div>')[0];
    popup_64.setContent(popup_64_html);

    marker_64.bindPopup(popup_64);

    var prev_mark = null;

    function cleanPrev() {
        prev_mark = null;
    }

    function newMarker(e) {
        // Check to see if  a new mark was already on the map and if there was i clears it so it can be replaced
        if (prev_mark != null) {
            map.removeLayer(prev_mark); // Remove mark from map
            marker_cluster.removeLayer(prev_mark); // Remove mark from cluster
        }

        var new_mark = L.marker().setLatLng(e.latlng).addTo(map).addTo(marker_cluster);
        new_mark.dragging.enable();
        new_mark.on('dblclick', function(e) {
            cleanPrev()
        }); // Reset perv_mark on double click on the mark
        new_mark.on('dblclick', function(e) {
            map.removeLayer(e.target)
        }); // Remove mark from map on double click on the mark
        new_mark.on('dblclick', function(e) {
            marker_cluster.removeLayer(new_mark)
        }); // Remove mark from cluster on double click on the mark
        var lat = e.latlng.lat.toFixed(4),
            lng = e.latlng.lng.toFixed(4);


        prev_mark = new_mark;

        var lat1 = 14.9169;
        var long1 = -23.509;

        var coords1 = [];
        coords1[0] = long1;
        coords1[1] = lat1;

        //coords1[0] = 4.8422;
        //coords1[1] = 45.7597;

        var coords2 = [];
        coords2[0] = lng;
        coords2[1] = lat;

        //coords2[0] = 2.3508;
        //coords2[1] = 48.8567;

        function haversineDistance1(coords1, coords2, isMiles) {
            function toRad(x) {
                return x * Math.PI / 180;
            }

            var lon1 = coords1[0];
            var lat1 = coords1[1];

            var lon2 = coords2[0];
            var lat2 = coords2[1];

            var R = 6371; // km

            var x1 = lat2 - lat1;
            var dLat = toRad(x1); // diferenca de latitudes
            var x2 = lon2 - lon1;
            var dLon = toRad(x2); // diferenca de longitudes
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;

            if (isMiles) d /= 1.60934;

            return d;
        }

        function haversineDistance2(coords1, coords2) {
            function toRadians(x) {
                return x * Math.PI / 180;
            }

            var R = 6371e3; // metres
            //var R = 6371; // km
            var φ1 = toRadians(coords1[1]);
            var φ2 = toRadians(coords2[1]);
            var Δφ = toRadians((coords2[1] - coords1[1])); // diferenca de latitudes
            var Δλ = toRadians((coords2[0] - coords1[0])); // diferenca de longitudes

            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            var d = R * c

            return d;
        }

        var d = haversineDistance2(coords1, coords2);

        // Use the lat and long to to reverse geocode and get the address
        var geocoder = new google.maps.Geocoder;
        var input = e.latlng;
        var latlngStr = [lat, lng];
        var latlng = {
            lat: parseFloat(latlngStr[0]),
            lng: parseFloat(latlngStr[1])
        };
        geocoder.geocode({
            'location': latlng
        }, function(results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    var texto = results[0].formatted_address.concat("<br>Distancia de Mark1: ");
                    texto = texto.concat(d.toString())
                    new_mark.bindPopup(texto);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });


    };
    map.on('click', newMarker);
});