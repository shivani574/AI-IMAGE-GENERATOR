import { useState } from 'react';
import Header from './Header';
import GeneratorControls from './GeneratorControls';
import ResultsSection from './ResultsSection';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [resolution, setResolution] = useState('512x512');
  const [quality, setQuality] = useState('standard');
  const [count, setCount] = useState('1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  const [statusMessage, setStatusMessage] = useState(null);

  const generateImages = () => {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      setStatusMessage({ type: 'error', text: 'Please enter a description for your image.' });
      return;
    }

    if (isGenerating) return;

    setIsGenerating(true);
    setGeneratedImages([]);
    setStatusMessage({ type: 'info', text: 'Generating your images... This may take a few moments.' });

    setTimeout(() => {
      const imageCount = parseInt(count);
      const images = [];

      for (let i = 0; i < imageCount; i++) {
        const enhancedPrompt = `${trimmedPrompt}, ${style} style, high quality, detailed`;
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=${resolution.split('x')[0]}&height=${resolution.split('x')[1]}&seed=${Date.now() + i}&nologo=true`;

        images.push({
          url: imageUrl,
          prompt: trimmedPrompt,
          style,
          resolution,
          quality
        });
      }

      setGeneratedImages(images);
      setIsGenerating(false);
      setStatusMessage({
        type: 'success',
        text: `Successfully generated ${imageCount} image${imageCount > 1 ? 's' : ''}!`
      });

      setTimeout(() => {
        setStatusMessage(null);
      }, 5000);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      generateImages();
    }
  };

  return (
    <div className="container">
      <Header />
      <GeneratorControls
        prompt={prompt}
        setPrompt={setPrompt}
        style={style}
        setStyle={setStyle}
        resolution={resolution}
        setResolution={setResolution}
        quality={quality}
        setQuality={setQuality}
        count={count}
        setCount={setCount}
        isGenerating={isGenerating}
        onGenerate={generateImages}
        onKeyPress={handleKeyPress}
      />
      <ResultsSection
        images={generatedImages}
        statusMessage={statusMessage}
      />
    </div>
  );
}

export default ImageGenerator;
