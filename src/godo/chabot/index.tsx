import { Logo } from '@/components/logo';
import { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
    const [mensaje, setMensaje] = useState('');
    const [enviado, setEnviado] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [streamedResponse, setStreamedResponse] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const mensajesIniciales = [
        {
            id: 1,
            sender: 'bot',
            content:
                '¡Hola! Soy el asistente virtual de La Vanguardia. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre:\n- Búsquedas en nuestra hemeroteca\n- Recomendaciones de contenido\n- Información sobre nuestros servicios',
        },
    ];

    const [mensajes, setMensajes] = useState(mensajesIniciales);

    const historialNavegacion = [
        'Búsqueda histórica hemeroteca',
        'Recomendación personalizada',
        'Consulta sobre suscripciones',
        'Información sobre eventos culturales',
    ];

    // Función para simular el stream de texto
    const streamResponse = (fullResponse: string) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < fullResponse.length) {
                setStreamedResponse((prev) => prev + fullResponse.charAt(i));
                i++;
                scrollToBottom();
            } else {
                clearInterval(interval);
                setIsTyping(false);
                // Cuando termina el stream, añadimos el mensaje completo al historial
                setMensajes((prev) => [
                    ...prev,
                    {
                        id: prev.length + 1,
                        sender: 'bot',
                        content: fullResponse,
                    },
                ]);
                setStreamedResponse('');
            }
        }, 20); // Velocidad de escritura (ms por caracter)
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const enviarMensaje = () => {
        if (mensaje.trim() === '' || isTyping) return;

        const nuevoMensaje = {
            id: mensajes.length + 1,
            sender: 'user',
            content: mensaje,
        };

        setMensajes([...mensajes, nuevoMensaje]);
        setMensaje('');
        setEnviado(true);
        setIsTyping(true);
        scrollToBottom();

        // Simular respuesta del bot basada en el contenido del mensaje
        setTimeout(() => {
            let respuestaBot;

            if (
                mensaje.toLowerCase().includes('juegos olímpicos') ||
                mensaje.toLowerCase().includes('barcelona 1992')
            ) {
                respuestaBot =
                    'La Vanguardia publicó el 26 de julio de 1992 una cobertura especial sobre la ceremonia inaugural de los Juegos Olímpicos, destacando la emotividad del encendido del pebetero por Antonio Rebollo y la ovación al desfile de los atletas españoles.\n\n📄 Cita textual:\n"El cielo de Barcelona se iluminó con fuegos artificiales mientras 60.000 espectadores en Montjuïc ovacionaban de pie" (La Vanguardia, 26/07/1992).\n\n➕ ¿Quieres leer la crónica completa? [Ver artículo original]';
            } else if (
                mensaje.toLowerCase().includes('música catalana') ||
                mensaje.toLowerCase().includes('los 80')
            ) {
                respuestaBot =
                    '¡Claro! Según los archivos de RAC105 y La Vanguardia, te puede interesar:\n\n🎤 Entrevista: "Llach, íntimo y combativo" (1987)\n📰 Reportaje: "Barcelona, capital del pop català" (1985)\n\nEstos artículos exploran la escena musical catalana de los años 80.\n\n➕ ¿Quieres recibir más contenido como este? [Sí, por favor] [No, gracias]';
            } else {
                respuestaBot =
                    'Gracias por tu mensaje. ¿Te refieres a alguna de estas opciones?\n1. Búsqueda en hemeroteca\n2. Recomendaciones de contenido\n3. Información sobre servicios\n\nPor favor, especifica tu consulta para poder ayudarte mejor.';
            }

            streamResponse(respuestaBot);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            enviarMensaje();
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [mensajes, streamedResponse]);

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Header del chatbot */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <div className="flex items-center justify-between gap-8">
                    <div className="text-lg font-semibold translate-y-1">
                        Asistente Virtual - La Vanguardia
                    </div>
                    <div className="h-8 w-24">
                        <Logo></Logo>
                    </div>
                </div>
                <div className="w-6 h-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                </div>
            </div>

            {/* Sidebar + contenido */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-60 border-r border-gray-200 flex flex-col bg-white">
                    {/* Buscador */}
                    <div className="p-3 border-b border-gray-200">
                        <div className="flex items-center bg-gray-100 rounded-md p-2">
                            <svg
                                className="w-4 h-4 text-gray-500 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Buscar conversaciones"
                                className="bg-transparent outline-none text-sm flex-1"
                            />
                        </div>
                    </div>

                    {/* Historial de navegación */}
                    <div className="flex-1 overflow-y-auto">
                        {historialNavegacion.map((item, index) => (
                            <div
                                key={index}
                                className="py-3 px-4 hover:bg-gray-100 cursor-pointer text-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Panel de chat */}
                <div className="flex-1 flex flex-col">
                    {/* Mensajes */}
                    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                        {mensajes.map((msg) => (
                            <div
                                key={msg.id}
                                className={`mb-4 max-w-xs md:max-w-md lg:max-w-lg ${
                                    msg.sender === 'user'
                                        ? 'ml-auto'
                                        : 'mr-auto'
                                }`}
                            >
                                <div
                                    className={`p-3 rounded-lg text-sm ${
                                        msg.sender === 'user'
                                            ? 'bg-bland-dark-blue text-white'
                                            : 'bg-gray-200 text-gray-800'
                                    }`}
                                >
                                    {msg.content.split('\n').map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="mb-4 max-w-xs md:max-w-md lg:max-w-lg mr-auto">
                                <div className="p-3 rounded-lg bg-gray-200 text-gray-800 text-sm">
                                    {streamedResponse}
                                    <span className="inline-block w-2 h-4 bg-gray-500 ml-1 animate-blink"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input de mensaje */}
                    <div className="border-t border-gray-200 p-3 flex items-center">
                        <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            className="flex-1 outline-none text-sm"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disabled={isTyping}
                        />
                        <button
                            onClick={enviarMensaje}
                            className={`text-gray-600 hover:text-gray-900 ${isTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isTyping}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
