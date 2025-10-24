function GeneratorControls({
  prompt,
  setPrompt,
  style,
  setStyle,
  resolution,
  setResolution,
  quality,
  setQuality,
  count,
  setCount,
  isGenerating,
  onGenerate,
  onKeyPress
}) {
  return (
    <div className="generator-section">
      <div className="input-group">
        <label htmlFor="prompt">Enter your image description</label>
        <textarea
          id="prompt"
          className="prompt-input"
          placeholder="Describe the image you want to generate... (e.g., 'A futuristic cityscape at sunset with flying cars and neon lights')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={onKeyPress}
        />
      </div>

      <div className="controls">
        <div className="control-group">
          <label htmlFor="style">Art Style</label>
          <select
            id="style"
            className="control-input"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="realistic">Realistic</option>
            <option value="artistic">Artistic</option>
            <option value="cartoon">Cartoon</option>
            <option value="abstract">Abstract</option>
            <option value="cyberpunk">Cyberpunk</option>
            <option value="vintage">Vintage</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="resolution">Resolution</label>
          <select
            id="resolution"
            className="control-input"
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
          >
            <option value="512x512">512 × 512</option>
            <option value="768x768">768 × 768</option>
            <option value="1024x1024">1024 × 1024</option>
            <option value="1536x1024">1536 × 1024</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="quality">Quality</label>
          <select
            id="quality"
            className="control-input"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            <option value="standard">Standard</option>
            <option value="high">High</option>
            <option value="ultra">Ultra</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="count">Number of Images</label>
          <select
            id="count"
            className="control-input"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          >
            <option value="1">1 Image</option>
            <option value="2">2 Images</option>
            <option value="4">4 Images</option>
          </select>
        </div>
      </div>

      <button
        className="generate-btn"
        onClick={onGenerate}
        disabled={isGenerating}
      >
        {isGenerating && <span className="loading-spinner"></span>}
        <span className="btn-text">
          {isGenerating ? 'Generating...' : 'Generate Images'}
        </span>
      </button>
    </div>
  );
}

export default GeneratorControls;
