let carrito = [];
let total = 0;
const contadorCarrito = document.getElementById("contador-carrito");

document.querySelectorAll('.producto button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productoDiv = event.target.parentElement;
        const producto = productoDiv.querySelector('h3').textContent;
        const precio = parseFloat(productoDiv.getAttribute('data-precio'));

        carrito.push({ nombre: producto, precio: precio });
        total += precio;

        contadorCarrito.textContent = carrito.length;
        alert(`Producto añadido al carrito: ${producto}`);
        console.log(carrito);
    });
});

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        const productos = carrito.map(item => `${item.nombre}: $${item.precio.toFixed(2)}`).join('\n');
        alert(`Productos en el carrito:\n${productos}\n\nTotal a pagar: $${total.toFixed(2)}`);
    }
}

function pagar() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Añade productos antes de pagar.");
        return;
    }

    const productos = carrito.map(item => item.nombre).join(', ');
    const url = `https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sb-g04ku33255102@personal.example.com&item_name=Compra%20de%20suplementos&amount=${total.toFixed(2)}&currency_code=USD&invoice=${productos}`;
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    const chatbot = document.getElementById('chatbot');
    const chatMessages = document.getElementById('chat-messages');
    chatbot.style.display = 'block';

    document.getElementById('enviarSuplemento').addEventListener('click', function() {
        const suplemento = document.getElementById('suplementoInput').value.toLowerCase();
        const respuesta = obtenerRespuesta(suplemento);
        mostrarMensaje(`Tú: ${suplemento}`);
        mostrarMensaje(`🤖: ${respuesta}`);
        document.getElementById('suplementoInput').value = ''; // Limpiar el input
    });

    function obtenerRespuesta(suplemento) {
        switch (suplemento) {
            case 'proteína':
                return "Las proteínas ayudan en la recuperación muscular. ¿Te gustaría saber sobre algún tipo específico?";
            case 'creatina':
                return "La creatina mejora la fuerza y el rendimiento. ¿Buscas algún producto en particular?";
            case 'pre-entreno':
                return "Los pre-entrenos aumentan la energía y el enfoque. ¿Cuál es tu objetivo en el gym?";
            case 'bcaas':
                return "Los BCAAs ayudan en la recuperación y el crecimiento muscular. ¿Quieres más detalles?";
            case '':
                return "Por favor, escribe el nombre del suplemento que te interesa.";
            default:
                return "No tengo información sobre eso, pero puedo ayudarte con proteínas, creatinas o pre-entrenos.";
        }
    }

    function mostrarMensaje(mensaje) {
        const p = document.createElement('p');
        p.textContent = mensaje;
        chatMessages.appendChild(p);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
    }
});

function pagar() {
    const productos = carrito.map((item) => item).join(', ');
    const total = carrito.length * 0.01; // Supongamos que cada producto cuesta $0.01 para la prueba
    const url = `https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_xclick&business=sb-g04ku33255102@personal.example.com&item_name=Compra%20de%20suplementos&amount=${total}&currency_code=USD&invoice=${productos}`;
    window.location.href = url;
}
