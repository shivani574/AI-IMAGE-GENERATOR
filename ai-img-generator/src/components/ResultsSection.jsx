import ImageCard from './ImageCard';

function ResultsSection({ images, statusMessage }) {
  return (
    <div className="results-section">
      <div className="results-header">
        <h2>Generated Images</h2>
      </div>

      <div id="results">
        {statusMessage && (
          <div className={`status-message status-${statusMessage.type}`}>
            {statusMessage.text}
          </div>
        )}

        {images.length === 0 && !statusMessage && (
          <div className="placeholder">
            <svg className="placeholder-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
            <p>Your generated images will appear here</p>
            <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
              Enter a prompt above and click "Generate Images" to get started
            </p>
          </div>
        )}

        {images.length > 0 && (
          <div className="image-grid">
            {images.map((image, index) => (
              <ImageCard key={index} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsSection;
