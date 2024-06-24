const propiedadesVenta = [
    {
        nombre: 'Casa espaciosa con jardín',
        src: 'https://tindas.es/images/espacios-exteriores-mas-solicitados-casa_7.jpg',
        descripcion: 'Hermosa casa de 4 habitaciones con amplio jardín.',
        ubicacion: '321 Maple Drive, Greentown, CA 65432',
        habitaciones: 4,
        baños: 3,
        costo: 500000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa moderna con piscina',
        src: 'https://img.freepik.com/fotos-premium/casa-moderna-piscina-vista-al-jardin_865967-3242.jpg?w=740',
        descripcion: 'Casa de lujo con diseño moderno y piscina privada.',
        ubicacion: '654 Oak Street, Luxuryville, CA 98765',
        habitaciones: 5,
        baños: 4,
        costo: 1200000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo con viñedo',
        src: 'https://previews.123rf.com/images/dpreezg/dpreezg1504/dpreezg150400055/42314894-vista-de-una-casa-de-campo-y-vi%C3%B1edos-en-el-valle-del-r%C3%ADo-hex.jpg',
        descripcion: 'Encantadora casa de campo con su propio viñedo.',
        ubicacion: '987 Vine Road, Wineland, CA 87654',
        habitaciones: 3,
        baños: 2,
        costo: 850000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa en la montaña',
        src: 'https://content.arquitecturaydiseno.es/medio/2021/08/23/casa-moderna-en-los-bosques-de-canada-5e022697-1500x1080_58fa7c01_1500x1080.jpeg',
        descripcion: 'Hermosa casa en medio de la montaña.',
        ubicacion: '565, Cerro la Campana. Olmué, Chile',
        habitaciones: 5,
        baños: 4,
        costo: 890000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa tipica de Valparaiso',
        src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20230524/2588327/n_wm_sothebys_163703_101163703_239968_1.webp',
        descripcion: 'Encantadora casa de campo con su propio viñedo.',
        ubicacion: 'Cerro Alegre, Valparaiso, Chile',
        habitaciones: 3,
        baños: 2,
        costo: 1850000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa acogedora en medio de la nieve',
        src: 'https://content.arquitecturaydiseno.es/medio/2021/01/11/casas-en-la-montana-nevadas-de-madera_6caa737f_1500x1000.jpg',
        descripcion: 'Encantadora casa en la nieve.',
        ubicacion: '895 Snow Road, Iceland, Alaska 552352',
        habitaciones: 3,
        baños: 2,
        costo: 850000,
        smoke: false,
        pets: false
    },
];

const ventaList = document.getElementById('venta-list');

function renderizarPropiedades(propiedades, container) {
    propiedades.forEach(propiedad => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p class="card-text">Ubicación: ${propiedad.ubicacion}</p>
                    <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
                    <p class="card-text">Baños: ${propiedad.baños}</p>
                    <p class="card-text">Costo: $${propiedad.costo}</p>
                    <p class="card-text"> 
                        ${propiedad.smoke ? '<i class="fa-solid fa-smoking" style="color: green;"></i> Se permite fumar' : '<i class="fa-solid fa-ban-smoking" style="color: red;"></i> No se permite fumar'}
                    </p>
                    <p class="card-text"> 
                        ${propiedad.pets ? '<i class="fa-solid fa-paw" style="color: green;"></i> Se permiten mascotas' : '<i class="fa-solid fa-ban" style="color: red;"></i> No se permiten mascotas'}
                    </p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

renderizarPropiedades(propiedadesVenta, ventaList);
