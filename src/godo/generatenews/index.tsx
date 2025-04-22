import { Footer } from '@/components/footer';
import Header from '@/components/header';
import React, { useState } from 'react';
import { FaRegFileWord } from 'react-icons/fa';

// Type definitions
type MediaType = 'la-vanguardia' | 'mundo-deportivo' | 'rac1';
type ToneType = 'informative' | 'sports' | 'analysis' | 'conversational';
type FormatType = 'complete' | 'summary' | 'social' | 'podcast';
type ChannelType = 'web' | 'app' | 'newsletter' | 'radio';

interface FormData {
    media: MediaType | null;
    tone: ToneType | null;
    content: string;
    format: FormatType | null;
    channel: ChannelType | null;
}

// Mock content generator
const generateContent = (data: FormData): string => {
    const mediaPrefix =
        data.media === 'la-vanguardia'
            ? 'ÚLTIMA HORA: '
            : data.media === 'mundo-deportivo'
              ? '¡INCREÍBLE! '
              : '🎙️ EN DIRECTO: ';

    const toneStyle =
        data.tone === 'informative'
            ? 'De manera objetiva, '
            : data.tone === 'sports'
              ? '¡Con gran emoción! '
              : data.tone === 'analysis'
                ? 'Tras un análisis detallado, '
                : 'Como te contábamos antes, ';

    return `${mediaPrefix}${toneStyle}${data.content}`;
};

export default function GenerateNews() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        media: null,
        tone: null,
        content: '',
        format: null,
        channel: null,
    });
    const [generatedContent, setGeneratedContent] = useState('');

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleMediaSelection = (media: MediaType) => {
        setFormData({ ...formData, media });
    };

    const handleToneSelection = (tone: ToneType) => {
        setFormData({ ...formData, tone });
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, content: e.target.value });
    };

    const handleFormatSelection = (format: FormatType) => {
        setFormData({ ...formData, format });
    };

    const handleChannelSelection = (channel: ChannelType) => {
        setFormData({ ...formData, channel });
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // In a real application, you would handle file upload here
        console.log('File selected:', e.target.files);
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                content: 'Contenido del archivo cargado (simulado)',
            });
        }
    };

    const handleGenerate = () => {
        const content = generateContent(formData);
        setGeneratedContent(content);
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.media !== null && formData.tone !== null;
            case 2:
                return formData.content.trim() !== '';
            case 3:
                return formData.format !== null && formData.channel !== null;
            default:
                return true;
        }
    };

    // Selection option stylings
    const optionBaseStyle =
        'border-2 p-4 rounded-lg cursor-pointer transition-all';
    const optionActiveStyle = 'border-blue-500 bg-blue-50';
    const optionInactiveStyle = 'border-gray-300 hover:border-blue-300';
    const links = [{ label: 'Auto Generate News', path: '/app2' }];
    function handleDownload(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        event.preventDefault();
        const link = document.createElement('a');
        link.href = '/src/assets/Fallece el Papa Francisco.docx'; // path relative to public
        link.download = 'your-file.docx'; // name it whatever you want
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
            <Header links={links}></Header>
            <div className="max-w-8xl mx-auto mt-6 bg-white p-6 rounded-xl shadow-lg">
                {/* Progress indicator */}
                <div className="mb-8">
                    <div className="flex justify-between">
                        {[1, 2, 3, 4].map((step) => (
                            <div
                                key={step}
                                className="flex-1 flex flex-col items-center"
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                        step === currentStep
                                            ? 'bg-bland-dark-blue text-white'
                                            : step < currentStep
                                              ? 'bg-bland-blue text-white'
                                              : 'bg-gray-300 text-gray-600'
                                    }`}
                                >
                                    {step < currentStep ? <span>✓</span> : step}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-2">
                        {[1, 2, 3, 4].map((step) => (
                            <div
                                key={`label-${step}`}
                                className="flex-1 text-center text-sm font-medium"
                            >
                                {step === 1 && 'Medio y tono'}
                                {step === 2 && 'Datos iniciales'}
                                {step === 3 && 'Formato y canal'}
                                {step === 4 && 'Vista previa'}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step 1: Media and Tone Selection */}
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">
                            Paso 1 – Medio y tono editorial
                        </h2>

                        <div className="space-y-4">
                            <h3 className="font-semibold">
                                Selecciona una cabecera:
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div
                                    className={`${optionBaseStyle} ${formData.media === 'la-vanguardia' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleMediaSelection('la-vanguardia')
                                    }
                                >
                                    <div className="font-serif font-bold">
                                        La Vanguardia
                                    </div>
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.media === 'mundo-deportivo' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleMediaSelection('mundo-deportivo')
                                    }
                                >
                                    <div className="font-serif font-bold ">
                                        Mundo Deportivo
                                    </div>
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.media === 'rac1' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() => handleMediaSelection('rac1')}
                                >
                                    <div className="font-serif font-bold">
                                        RAC1
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">
                                Selecciona el tono:
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className={`${optionBaseStyle} ${formData.tone === 'informative' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleToneSelection('informative')
                                    }
                                >
                                    Informativo / objetivo
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.tone === 'sports' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleToneSelection('sports')
                                    }
                                >
                                    Deportivo / apasionado
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.tone === 'analysis' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleToneSelection('analysis')
                                    }
                                >
                                    Análisis / experto
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.tone === 'conversational' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleToneSelection('conversational')
                                    }
                                >
                                    Cercano / conversacional
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Base Information */}
                {currentStep === 2 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">
                            Paso 2 – Datos iniciales para la redacción
                        </h2>

                        <div className="space-y-4">
                            <label className="block">
                                <span className="text-gray-700">
                                    Describe brevemente la noticia o pega los
                                    datos clave:
                                </span>
                                <textarea
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 h-32"
                                    placeholder="Ej: Victoria del Barça ante el Madrid 2-1. Goles de Lewandowski y Yamal. Minuto a minuto del partido disponible."
                                    value={formData.content}
                                    onChange={handleContentChange}
                                />
                            </label>

                            <div className="mt-4">
                                <label className="block">
                                    <span className="text-gray-700">
                                        O sube un archivo con los datos:
                                    </span>
                                    <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-bland-dark-blue hover:text-bland-blue focus-within:outline-none"
                                                >
                                                    <span>Sube un archivo</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                        onChange={
                                                            handleFileUpload
                                                        }
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    o arrastra y suelta
                                                </p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                PDF, TXT, JSON (máx. 10MB)
                                            </p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Format and Channel Selection */}
                {currentStep === 3 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">
                            Paso 3 – Formato y canal
                        </h2>

                        <div className="space-y-4">
                            <h3 className="font-semibold">
                                ¿Qué formato deseas generar?
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className={`${optionBaseStyle} ${formData.format === 'complete' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleFormatSelection('complete')
                                    }
                                >
                                    Noticia completa
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.format === 'summary' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleFormatSelection('summary')
                                    }
                                >
                                    Breve resumen
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.format === 'social' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleFormatSelection('social')
                                    }
                                >
                                    Hilo para redes sociales
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.format === 'podcast' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleFormatSelection('podcast')
                                    }
                                >
                                    Guion para pódcast
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold">
                                ¿Dónde se va a publicar?
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div
                                    className={`${optionBaseStyle} ${formData.channel === 'web' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleChannelSelection('web')
                                    }
                                >
                                    Web
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.channel === 'app' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleChannelSelection('app')
                                    }
                                >
                                    App
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.channel === 'newsletter' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleChannelSelection('newsletter')
                                    }
                                >
                                    Boletín
                                </div>
                                <div
                                    className={`${optionBaseStyle} ${formData.channel === 'radio' ? optionActiveStyle : optionInactiveStyle}`}
                                    onClick={() =>
                                        handleChannelSelection('radio')
                                    }
                                >
                                    Radio
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Preview and Generation */}
                {currentStep === 4 && (
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">
                            Paso 4 – Vista previa y publicación
                        </h2>

                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                            {generatedContent && (
                                <div className="flex items-center gap-2 p-2 border rounded-md shadow-sm">
                                    <FaRegFileWord />
                                    <span className="text-base font-medium">
                                        Fallece el Papa Francisco.docx
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={handleGenerate}
                                className="w-full bg-bland-dark-blue hover:bg-bland-blue text-white py-2 px-4 rounded transition"
                            >
                                Generar contenido
                            </button>
                            <button
                                onClick={handleDownload}
                                className="w-full bg-white border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded transition"
                            >
                                Descargar
                            </button>
                        </div>
                    </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handleBack}
                        className={`bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded transition ${
                            currentStep === 1 ? 'invisible' : ''
                        }`}
                    >
                        Anterior
                    </button>

                    {currentStep < 4 && (
                        <button
                            onClick={handleNext}
                            disabled={!isStepValid()}
                            className={`bg-bland-dark-blue hover:bg-bland-blue text-white py-2 px-4 rounded transition ${
                                !isStepValid()
                                    ? 'opacity-50 cursor-not-allowed'
                                    : ''
                            }`}
                        >
                            Siguiente
                        </button>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
