import { useState } from 'react';

function ImageCard({ image }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `ai-generated-${image.prompt.substring(0, 30).replace(/[^a-z0-9]/gi, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="image-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="image-container">
          {!imageError ? (
            <>
              <img
                src={image.url}
                alt={`Generated image: ${image.prompt}`}
                onError={() => setImageError(true)}
                loading="lazy"
              />
              <div className={`image-overlay ${isHovered ? 'visible' : ''}`}>
                Click to view full size
              </div>
            </>
          ) : (
            <div className="image-placeholder">Failed to generate image</div>
          )}
        </div>
        <div className="image-info">
          <div className="image-prompt">"{image.prompt}"</div>
          <div className="image-details">
            <span>{image.resolution}</span>
            <span>{image.style} style</span>
            <span>{image.quality} quality</span>
          </div>
          <div className="image-actions">
            <button onClick={downloadImage} className="action-btn download-btn">
              Download
            </button>
            <button onClick={openModal} className="action-btn view-btn">
              View Full
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <div className="modal-prompt">"{image.prompt}"</div>
            <img src={image.url} alt={`Generated image: ${image.prompt}`} />
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageCard;
