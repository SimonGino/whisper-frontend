import React, { useState } from 'react';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        setIsLoading(true);
        // 模拟API调用
        setTimeout(() => {
            const mockResult = [
                { start: 0, end: 2, text: "这是第一句测试文本。" },
                { start: 2, end: 4, text: "Whisper转录非常准确。" },
                { start: 4, end: 7, text: "我们正在测试更多的数据行。" },
                { start: 7, end: 10, text: "这是第四行转录文本。" },
                { start: 10, end: 13, text: "音频转录可以帮助我们更好地理解内容。" },
                { start: 13, end: 16, text: "希望这个演示能够展示良好的用户体验。" },
                { start: 16, end: 20, text: "如果需要，我们可以添加更多的模拟数据行。" },
                { start: 20, end: 23, text: "谢谢您使用我们的Whisper转录服务。" }
            ];
            window.dispatchEvent(new CustomEvent('transcriptionResult', { detail: mockResult }));
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p className="mb-1 text-sm text-gray-500"><span className="font-semibold">点击上传</span> 或拖放文件</p>
                            <p className="text-xs text-gray-500">支持 WAV, MP3 或 M4A 格式</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept="audio/*" />
                    </label>
                </div>
                {file && (
                    <p className="text-sm text-gray-500 text-center">
                        已选择文件: {file.name}
                    </p>
                )}
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 transition duration-150 ease-in-out"
                    disabled={!file || isLoading}
                >
                    {isLoading ? (
                        <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              转录中...
            </span>
                    ) : '开始转录'}
                </button>
            </form>
        </div>
    );
};

export default FileUploader;