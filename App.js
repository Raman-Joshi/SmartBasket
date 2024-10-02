// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const generateImage = async () => {
        const response = await axios.post('http://localhost:5000/generate-image', { prompt });
        setImageUrl(response.data.imageUrl);
    };

    const generateVideo = async () => {
        const response = await axios.post('http://localhost:5000/generate-video', { script: prompt });
        setVideoUrl(response.data.videoUrl);
    };

    return (
        <div>
            <h1>SmartBasket - AI Promotional Media Generator</h1>
            <textarea
                placeholder="Enter prompt for image/video generation"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={generateImage}>Generate Image</button>
            <button onClick={generateVideo}>Generate Video</button>

            {imageUrl && <img src={imageUrl} alt="Generated" />}
            {videoUrl && <video controls src={videoUrl} />}
        </div>
    );
};

export default App;
