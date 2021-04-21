const quotes = [

    {
        quote: "Las calles son nuestras aunque el tiempo diga lo contrario.",
        autor: "Callejeros"
    },
    {
        quote: "Lo reprimido cuando está cautivo, te pide salir.",
        autor: "Callejeros"
    },
    {
        quote: "Era todo? Pregunté. Soy un iluso.",
        autor: "Los Redondos"
    },
    {
        quote: "Caen las tropas de su majestad, y cae el norte de la Italia rica.",
        autor: "Los Piojos"
    },
    {
        quote: "Fui consumiendo infiernos... Para salir de vos.",
        autor: "La Bersuit"
    },
    {
        quote: "Si para tenerte aqui habia que maltratarte. No puedo hacerlo, sos mi Dios.",
        autor: "La Bersuit"
    },
    {
        quote: "La pelota SIEMPRE al 10, que ocurrira otro milagro.",
        autor: "Las Pastillas del Abuelo"
    },
    {
        quote: "La enfermedad es mi cordura.",
        autor: "Gustavo Cordera"
    },
    {
        quote: "No piensen que soy humilde, yo solo me subestimo.",
        autor: "Gustavo Cordera"
    },
    {
        quote: "Yo soy mi Dios, mi referente.",
        autor: "Gustavo Cordera"
    },
    {
        quote: "Creo que con una palabra puedo decir mil cosas.",
        autor: "Callejeros"
    },
    {
        quote: "Por la 9 de Julio voy con el miedo de no verte nunca mas.",
        autor: "Callejeros"
    },
    {
        quote: "Casi ya no llora. Atrapado en libertad.",
        autor: "Los Redondos"
    },
    {
        quote: "La veo casi como un demonio, y rasco la alfombra por su amor.",
        autor: "Los Redondos"
    },
    {
        quote: "Las minitas aman los payasos, y la pasta de campeon!",
        autor: "Los Redondos"
    },
    {
        quote: "Hasta que no te pase a vos, no vas a entender, siempre asi, tan egoísta.",
        autor: "Attaque 77"
    },
    {
        quote: "Somos indios latinos con guitarra eléctrica, y comunicados a traves de internet.",
        autor: "Intoxicados"
    },
    {
        quote: "Para odiar hay que querer, para destruir hay que hacer.",
        autor: "Intoxicados"
    },
    {
        quote: "Te cansaste de mi, yo me cansé de vos, pero cuando nos miramos sabemos que no es verdad.",
        autor: "Intoxicados"
    },
    {
        quote: "Toda la vida es un baile, te pueden bailar, aunque no quieras, lo veras...",
        autor: "La Bersuit"
    },
    {
        quote: "Si esto no es una dictadura... Que es? Que es?",
        autor: "La Bersuit"
    },
    {
        quote: "Tranzan, venden, y es solo una figurita el que este de Presidente.",
        autor: "La Bersuit"
    },
    {
        quote: "Estoy rodeado de viejos vinagres, todo alrededor!",
        autor: "Sumo"
    },
    {
        quote: "Para vos, lo peor, es la LIBERTAD.",
        autor: "Sumo"
    },
    {
        quote: "Juventud, divino, tesoro!",
        autor: "Sumo"
    },
    {
        quote: "A brillar mi amor, vamos a brillar mi amor.",
        autor: "Los Redondos"
    },
    {
        quote: "Hay caballos que se mueren potros sin galopar.",
        autor: "Los Redondos"
    },
    {
        quote: "Es una copa de lo mejor, cuando se ríe.",
        autor: "Los Redondos"
    },
    {
        quote: "El lujo es vulgaridad.",
        autor: "Los Redondos"
    },
    {
        quote: "Ay si pudieras recordar sin rencor...",
        autor: "Los Redondos"
    },
    {
        quote: "...Y un corazón no se endurece porque si.",
        autor: "Los Redondos"
    },
    {
        quote: "Mucho de lo que está prohibido me hace feliz.",
        autor: "Callejeros"
    },
    {
        quote: "No me lastimes con tus crímenes perfectos.",
        autor: "Calamaro"
    },
    {
        quote: "Creo que con una canción la tristeza es más hermosa.",
        autor: "Callejeros"
    },
    {
        quote: "Hay gente que le importa más su imágen que su forma de ser.",
        autor: "Intoxicados"
    },
    {
        quote: "Le converso a mi insomnio de vos.",
        autor: "Caballeros de la quema"
    },
    {
        quote: "¿Quién no ha sido blanco fácil por ser inocente y creer en la gente?",
        autor: "Callejeros"
    },
    {
        quote: "Esa sonrisa su salvación, su ancho de espadas y mi perdición.",
        autor: "Callejeros"
    },
    {
        quote: "Libre de vos, pero no de mí.",
        autor: "Callejeros"
    },
    {
        quote: "Nos volveremos a ver porque siempre hay un regreso.",
        autor: "Calamaro"
    },
    {
        quote: "Voy a soñar con ese beso al regresar.",
        autor: "Los Piojos"
    },
    {
        quote: "Quiero ser lo que te hace más feliz, a mi me gusta verte así...",
        autor: "Gustavo Cerati"
    },

];

//button

const button = document.getElementById("otraFrase");

//

button.addEventListener('click', () => {

    //random
    let random = Math.floor(Math.random() * quotes.length);

    //mostrar
    document.getElementById("frase").innerText = quotes[random].quote;
    document.getElementById("autor").innerText = quotes[random].autor;

});