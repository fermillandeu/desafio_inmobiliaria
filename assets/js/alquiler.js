const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0YW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Moderno condominio de 3 habitaciones en una zona residencial tranquila.',
        ubicacion: '789 Quiet Street, Suburbia, CA 54321',
        habitaciones: 3,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Duplex en medio de la ciudad',
        src: 'https://www.hogares.cl/wp-content/uploads/2023/08/01_EstarCocina_v.3-BAJA-1024x574.png',
        descripcion: 'Moderno duplex de 2 habitaciones cerca del centro de l ciudad',
        ubicacion: '958 Olympia Avenue, Maine, CA 145464',
        habitaciones: 2,
        baños: 2,
        costo: 3200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de campo con piscina',
        src: 'https://content.elmueble.com/medio/2021/03/10/00485448_3219ffc0_1200x799.jpg',
        descripcion: 'Moderno condominio de 3 habitaciones en una zona residencial tranquila.',
        ubicacion: 'Pasaje Iver 854, Olmué, Chile',
        habitaciones: 4,
        baños: 4,
        costo: 6200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en medio del bosque',
        src: 'https://i.blogs.es/89f672/ablackaframe_38871474_1609162982522286_6610420868013195_n/1024_2000.jpg',
        descripcion: 'Moderno condominio de 3 habitaciones en una zona residencial tranquila.',
        ubicacion: 'Ruta 89, Valdivia, Chile',
        habitaciones: 2,
        baños: 2,
        costo: 3200,
        smoke: false,
        pets: false
    },
];

const alquilerList = document.getElementById('alquiler-list');

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
                    <p class="card-text">Se permite fumar: 
                        ${propiedad.smoke ? '<i class="fa-solid fa-smoking" style="color: green;"></i> Sí' : '<i class="fa-solid fa-ban-smoking" style="color: red;"></i> No'}
                    </p>
                    <p class="card-text">Se permiten mascotas: 
                        ${propiedad.pets ? '<i class="fa-solid fa-paw" style="color: green;"></i> Sí' : '<i class="fa-solid fa-ban" style="color: red;"></i> No'}
                    </p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

renderizarPropiedades(propiedadesAlquiler, alquilerList);
