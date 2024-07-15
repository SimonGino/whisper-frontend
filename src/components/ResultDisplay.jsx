import React, { useState, useEffect } from 'react';

const ResultDisplay = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const handleTranscriptionResult = (event) => {
            setResults(event.detail);
        };

        window.addEventListener('transcriptionResult', handleTranscriptionResult);

        return () => {
            window.removeEventListener('transcriptionResult', handleTranscriptionResult);
        };
    }, []);

    if (results.length === 0) {
        return null;
    }

    return (
        <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">转录结果</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
                {results.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>{result.start.toFixed(2)}s - {result.end.toFixed(2)}s</span>
                        </div>
                        <p className="text-sm text-gray-800">{result.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResultDisplay;