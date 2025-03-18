// components/SimplePdfViewer.tsx
'use client';

import { useState, useEffect } from 'react';
import { Download } from "lucide-react"

interface SimplePdfViewerProps {
    pdfPath: string;
}

const SimplePdfViewer = ({ pdfPath }: SimplePdfViewerProps) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Check if we're on client-side
        if (typeof window !== 'undefined') {
            // Detect mobile devices
            const checkMobile = () => {
                const width = window.innerWidth;
                setWindowWidth(width);
                setIsMobile(width < 768);
            };

            // Initial check
            checkMobile();

            // Add listener for resize
            window.addEventListener('resize', checkMobile);

            // Cleanup
            return () => window.removeEventListener('resize', checkMobile);
        }
    }, []);

    // Height calculation based on device
    const viewerHeight = isMobile ? '400px' : '600px';

    return (
        <div className="flex flex-col w-full items-center">
            {/* Fallback for very small screens */}
            {windowWidth < 400 ? (
                <div className="w-full text-center py-8">
                    <p className="text-gray-500 mb-4">PDF preview not available on small screens. Download fillable entry form and entry tags by clicking below.</p>
                    <a
                        href={pdfPath}
                        download
                        className=" flex justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-auto"
                    >
                        <Download className="text-white " />
                        Download PDF
                    </a>
                </div>
            ) : (
                <>
                    {/* PDF viewer using object tag - more compatible than iframe */}
                    <object
                        data={pdfPath}
                        type="application/pdf"
                        width="100%"
                        height={viewerHeight}
                        className="border rounded shadow-lg"
                    >
                        <div className="w-full text-center py-8 border border-gray-200 rounded flex item-center flex-col justify-center">

                            <a
                                href={pdfPath}
                                download
                                className="w-sm flex justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-auto"
                            >

                                <Download className="text-white " />
                                Download PDF
                            </a>
                        </div>
                    </object>

                </>
            )}
        </div>
    );
};

export default SimplePdfViewer;
