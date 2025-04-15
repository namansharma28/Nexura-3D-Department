import React, { useState } from "react";

const ProjectCard = ({ 
    title, 
    description, 
    videoSrc, 
    cardTitle, 
    cardDescription 
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="service-card" onClick={handleCardClick}>
                <h3>{cardTitle}</h3>
                <p>{cardDescription}</p>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div 
                        className="video-modal"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <button className="close-button" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <div className="video-overlay-content">
                            <h2>{title}</h2>
                            <div className="modal-footer">
                                <p className="project-description">
                                    {description}
                                </p>
                            </div>
                        </div>
                        <video 
                            autoPlay={isHovered}
                            loop 
                            muted
                            playsInline
                            controls
                            className="custom-video-player"
                            style={{ backgroundColor: 'black' }}
                        >
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;