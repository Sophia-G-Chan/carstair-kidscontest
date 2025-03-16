'use client'
import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { PlusCircle, MinusCircle, Download } from 'lucide-react';
import jsPDF from 'jspdf';
// Import autotable properly
import 'jspdf-autotable';

// Add the type augmentation for TypeScript
declare module 'jspdf' {
    interface jsPDF {
        autoTable: (options: any) => any;
    }
}

// Define types for our form
interface EntryItem {
    section: string;
    categoryCode: string;
    description: string;
    ageGroup: string;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    mailingAddress: string;
    entries: EntryItem[];
}

const EntryFormFillerTwo: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            mailingAddress: '',
            entries: [{ section: '', categoryCode: '', description: '', ageGroup: '' }]
        }
    });

    // Use useFieldArray for proper handling of dynamic form fields
    const { fields, append, remove } = useFieldArray({
        control,
        name: "entries"
    });

    const addEntry = () => {
        append({ section: '', categoryCode: '', description: '', ageGroup: '' });
    };

    // Clean up the PDF URL when component unmounts
    useEffect(() => {
        return () => {
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [pdfUrl]);

    const generatePdf = (data: FormData) => {
        try {
            // Create a new jsPDF instance
            const doc = new jsPDF();

            // Add title
            doc.setFontSize(18);
            doc.text("Horticultural And Craft Show Entry Form", 20, 20);

            // Add form data
            doc.setFontSize(12);
            doc.text(`Name: ${data.name}`, 20, 40);
            doc.text(`Phone: ${data.phone}`, 20, 50);
            doc.text(`Email: ${data.email || "Not provided"}`, 20, 60);
            doc.text(`Mailing Address: ${data.mailingAddress || "Not provided"}`, 20, 70);

            // Add entries table
            doc.text("Entries:", 20, 90);

            // Using autoTable plugin
            doc.autoTable({
                startY: 100,
                head: [['Section', 'Category Code', 'Description', 'Age Group']],
                body: data.entries.map(entry => [
                    entry.section || '',
                    entry.categoryCode || '',
                    entry.description || '',
                    entry.ageGroup || ''
                ]),
            });

            // Add agreement text
            const agreementY = (doc as any).lastAutoTable?.finalY + 20 || 140;
            doc.setFontSize(10);
            const agreementText =
                "I have read the general rules of this contest, and agree entries have been made in " +
                "accordance with them and agree to abide by them. The Carstairs Horticultural and Craft Show Committee, " +
                "The Make Bake Grow Kids' Contest, and Carstairs & District Agricultural Society members will endeavor to " +
                "provide security for the exhibition but will not be held liable for any damage, theft, or " +
                "entries & awards/cash not picked up.";

            doc.text(agreementText, 20, agreementY, { maxWidth: 170 });

            // Add signature line
            doc.text("Signature: ___________________________", 20, agreementY + 30);

            return doc;
        } catch (error) {
            console.error("Error in PDF generation:", error);
            throw error;
        }
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            console.log("Form submitted with data:", data);

            // Generate PDF document
            const doc = generatePdf(data);

            // Generate blob and download
            const pdfBlob = doc.output('blob');
            const url = URL.createObjectURL(pdfBlob);

            console.log("PDF URL created:", url);
            setPdfUrl(url);

            // Force download
            try {
                console.log("Attempting download...");
                const filename = `carstairs-entry-form-${Date.now()}.pdf`;

                // Method 1: Using anchor element
                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();

                // Short delay before removing
                setTimeout(() => {
                    document.body.removeChild(link);
                    console.log("Download link removed");
                }, 100);

            } catch (downloadError) {
                console.error("Download error:", downloadError);
                setError(`Download failed: ${downloadError instanceof Error ? downloadError.message : 'Unknown error'}`);
            }

        } catch (error) {
            console.error("PDF generation error:", error);
            setError(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Horticultural And Craft Show Entry Form</h1>

            {error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded border border-red-300">
                    <p>{error}</p>
                    <p className="text-sm mt-1">Check browser console for detailed error information.</p>
                </div>
            )}

            <form id="entryForm" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                        <input
                            {...register('phone', { required: 'Phone number is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            {...register('email')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mailing Address</label>
                        <input
                            {...register('mailingAddress')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Entries Table */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold">Your Entries</h2>
                        <button
                            type="button"
                            onClick={addEntry}
                            className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                            <PlusCircle className="w-5 h-5 mr-1" /> Add Entry
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left border">Section</th>
                                    <th className="px-4 py-2 text-left border">Category Code</th>
                                    <th className="px-4 py-2 text-left border">Entry Description</th>
                                    <th className="px-4 py-2 text-left border">Age Group</th>
                                    <th className="px-4 py-2 text-left border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fields.map((field, index) => (
                                    <tr key={field.id}>
                                        <td className="border px-4 py-2">
                                            <select
                                                {...register(`entries.${index}.section` as const)}
                                                className="w-full p-1 border-gray-300 rounded"
                                            >
                                                <option value="">Select</option>
                                                <option value="Flower">Flower</option>
                                                <option value="Vegetable">Vegetable</option>
                                                <option value="Fruit">Fruit</option>
                                                <option value="Baking">Baking</option>
                                                <option value="Craft">Craft</option>
                                            </select>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <input
                                                {...register(`entries.${index}.categoryCode` as const)}
                                                className="w-full p-1 border-gray-300 rounded"
                                                placeholder="e.g. JF8"
                                            />
                                        </td>
                                        <td className="border px-4 py-2">
                                            <input
                                                {...register(`entries.${index}.description` as const)}
                                                className="w-full p-1 border-gray-300 rounded"
                                                placeholder="e.g. Sunflower, 1 large"
                                            />
                                        </td>
                                        <td className="border px-4 py-2">
                                            <select
                                                {...register(`entries.${index}.ageGroup` as const)}
                                                className="w-full p-1 border-gray-300 rounded"
                                            >
                                                <option value="">Select</option>
                                                <option value="5 & under">5 & under</option>
                                                <option value="6-10">6-10</option>
                                                <option value="11-17">11-17</option>
                                                <option value="Group">Group</option>
                                            </select>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button
                                                type="button"
                                                onClick={() => fields.length > 1 && remove(index)}
                                                disabled={fields.length === 1}
                                                className={`text-red-500 hover:text-red-700 ${fields.length === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                                    }`}
                                            >
                                                <MinusCircle className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Agreement and Submit */}
                <div className="space-y-4">
                    <div className="border p-4 rounded bg-gray-50">
                        <p className="text-sm text-gray-700">
                            I have read the general rules of this contest, and agree entries have been made in
                            accordance with them and agree to abide by them. The Carstairs Horticultural and Craft Show Committee,
                            The Make Bake Grow Kids' Contest, and Carstairs & District Agricultural Society members will endeavor to
                            provide security for the exhibition but will not be held liable for any damage, theft, or
                            entries & awards/cash not picked up.
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
                        >
                            {isSubmitting ? 'Processing...' : (
                                <>
                                    <Download className="w-5 h-5 mr-2" />
                                    Generate PDF
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>

            {pdfUrl && (
                <div className="mt-6 border-t pt-4">
                    <h3 className="font-medium mb-2">Your completed form:</h3>
                    <div className="border rounded-lg overflow-hidden">
                        <iframe
                            src={pdfUrl}
                            className="w-full h-96"
                            title="Filled Entry Form PDF"
                        />
                    </div>
                    <div className="mt-2 flex justify-end">
                        <a
                            href={pdfUrl}
                            download={`entry-form-${new Date().getTime()}.pdf`}
                            className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                            <Download className="w-5 h-5 mr-1" /> Download PDF
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EntryFormFillerTwo;
