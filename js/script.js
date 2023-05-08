// import '/js/mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiamFjay14aWEiLCJhIjoiY2tzeWI0ZzY4MmhiazJucGdmOHpseWMydiJ9.BGwgjm240AKVbV60tdMJBQ';
london_tube_json = './data/london_tube.json'

function loadBasicMap(container_id) {
    map_style_URL = 'mapbox://styles/jack-xia/clea1ea2400ba01mt3zvc4yhm';
    const map = new mapboxgl.Map({
        container: container_id,
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: map_style_URL,
        center: [-0.1292638, 51.5254607],
        zoom: 13,
    });
}


function addMapSource(source_name = 'test', source_type = 'geojson', data){
    map.addSource(sourcename, {
        'type': source_type,
        'data': data
    });
}

function addMapLayer(layer_name = 'test', source_name = 'test'){
    map.addLayer({
        'id': layer_name,
        'type': 'fill',
        'source': source_name, // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.5
        }
    });
}