'use client'
import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { PlusCircle, MinusCircle, Download } from 'lucide-react';

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

const EntryFormFiller: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>('/entry-form.pdf');

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

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        try {
            // Fetch the PDF from the public directory
            const formPdfResponse = await fetch('/entry-form.pdf');

            if (!formPdfResponse.ok) {
                throw new Error(`Failed to load PDF: ${formPdfResponse.status} ${formPdfResponse.statusText}`);
            }

            const formPdfBytes = await formPdfResponse.arrayBuffer();

            // Load the PDF document
            const pdfDoc = await PDFDocument.load(formPdfBytes);
            const form = pdfDoc.getForm();

            // Get all form fields available in the PDF (for debugging)
            const fields = form.getFields();
            console.log('Available PDF fields:', fields.map(f => f.getName()));

            // Create a formatted text representation of the entries for the PDF
            let entriesText = '';
            data.entries.forEach((entry, i) => {
                entriesText += `${entry.section || ''}\t${entry.categoryCode || ''}\t${entry.description || ''}\t${entry.ageGroup || ''}\n`;
            });

            // Fill form fields - try different approaches to handle both acroform fields and free text
            try {
                // Try standard form field approach
                form.getTextField('name')?.setText(data.name || '');
                form.getTextField('phone')?.setText(data.phone || '');
                form.getTextField('email')?.setText(data.email || '');
                form.getTextField('address')?.setText(data.mailingAddress || '');
                form.getTextField('entries')?.setText(entriesText);
            } catch (e) {
                console.warn('Error filling form fields:', e);

                // Fallback: Try to add text annotations if form fields don't exist
                const pages = pdfDoc.getPages();
                const firstPage = pages[0];

                // These coordinates are approximate and may need adjustment for your specific PDF
                firstPage.drawText(data.name || '', { x: 600, y: 500, size: 12 });
                firstPage.drawText(data.phone || '', { x: 750, y: 100, size: 12 });
                firstPage.drawText(data.email || '', { x: 800, y: 1400, size: 12 });
                firstPage.drawText(data.mailingAddress || '', { x: 950, y: 800, size: 12 });

                // Draw entries as text
                const lines = entriesText.split('\n');
                lines.forEach((line, i) => {
                    firstPage.drawText(line, { x: 90, y: 400 - (i * 20), size: 12 });
                });
            }

            // Flatten form fields to ensure they appear in all PDF viewers
            form.flatten();

            // Save the PDF
            const pdfBytes = await pdfDoc.save();

            // Create a Blob and URL for the PDF
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            setPdfUrl(url);

            // Create a download link and trigger it
            const link = document.createElement('a');
            link.href = url;
            link.download = `entry-form-${new Date().toISOString().slice(0, 10)}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        } catch (error) {
            console.error('Error generating PDF:', error);
            alert(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Horticultural And Craft Show Entry Form</h1>

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

                    <div className="mt-2 flex justify-end">
                        <a
                            href={pdfUrl}
                            download={`entry-form-${new Date().toISOString().slice(0, 10)}.pdf`}
                            className="text-blue-600 hover:text-blue-800 flex items-center"
                        >
                            <Download className="w-5 h-5 mr-1" /> Download Again
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EntryFormFiller;
