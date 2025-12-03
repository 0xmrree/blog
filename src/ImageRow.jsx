import './ImageRow.css'

function ImageRow({ images, maxSize, caption }) {
  // images should be an array of objects with { src, alt, aspectRatio }
  // aspectRatio is width/height (e.g., 16/9 = 1.778)
  // maxSize is optional max-width in pixels (e.g., 800)
  // caption is optional text to display below the image(s)
  
  // Normalize to array if single image is passed
  const imageArray = Array.isArray(images) ? images : [images]
  
  // Calculate the total aspect ratio sum for proportional width distribution
  const totalAspectRatio = imageArray.reduce((sum, img) => sum + (img.aspectRatio || 1), 0)
  
  return (
    <div 
      className="image-row-wrapper"
      style={{ maxWidth: maxSize ? `${maxSize}px` : 'none' }}
    >
      {caption && <p className="image-caption">{caption}</p>}
      <div className="image-row">
        {imageArray.map((image, index) => {
          // Calculate width percentage based on aspect ratio proportion
          const widthPercent = ((image.aspectRatio || 1) / totalAspectRatio) * 100
          
          return (
            <div 
              key={index} 
              className="image-container"
              style={{ width: `${widthPercent}%` }}
            >
              <img 
                src={image.src} 
                alt={image.alt || `Image ${index + 1}`}
                loading="lazy"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageRow
