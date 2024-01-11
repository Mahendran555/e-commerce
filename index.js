



document.getElementById('respones').addEventListener('click', function() {

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    console.log(data);
    
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
});

document.getElementById('respones_2').addEventListener('click', function() {

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    console.log(data);
    
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
});

document.getElementById('respones_3').addEventListener('click', function() {

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    console.log(data);
    
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    });
});