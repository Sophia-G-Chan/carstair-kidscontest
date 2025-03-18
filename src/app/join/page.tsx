
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import Image from "next/image"

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-white">

            <main className="container px-4 py-8 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <Link href="/" className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-700">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <div className="p-8 bg-white rounded-lg shadow-lg">
                        <h1 className="mb-6 text-3xl font-bold text-center text-purple-600">Register for the Contest</h1>

                        <div className="p-4 mb-6 bg-yellow-100 rounded-lg">
                            <h2 className="font-bold text-xl mb-4">How To Submit Your Entry</h2>
                            <ul className="list-disc list-inside">
                                <li>Fill out the attached entry form and bring it with your entries.</li>
                                <li>All entries must be labelled with an entry tag. Without a tag, we cannot know who made the item.</li>
                                <li>Please print out entry tags from the attached template, fill them out, and securely attach one to each entry.</li>
                                <li>Tags may be attached using clear tape or another secure method. They may also be folded in half.</li>
                                <li>Entry tags must be completed in full. Name varieties of vegetable and flower entries if possible.</li>
                                <li>When declaring an item as an individual or group entry, consider: &quot;Whose hands did the work?&quot;</li>
                                <li>The contest is held at Carstairs Curling Rink, 350 11th Ave, Carstairs, AB T0M 0N0 (beside the water park).</li>
                                <li>Doors open for entry drop-off on <strong>Friday, August 15th, at 8:00 AM.</strong></li>
                                <li>Tables will be labeled by category. Find the correct space and place your entry accordingly.</li>
                                <li>Doors close at 11:00 AM for judging.</li>
                            </ul>

                        </div>
                        <a
                            href='https://drive.google.com/drive/folders/1sUQFhBz_NAlEeTXJAYWAfqGCYPjqieJF'
                            className="mb-6 block p-4 text-center text-blue-600 bg-blue-100 rounded-xl border-2 border-blue-200 hover:bg-blue-200"
                        >Detailed PDF Rules Click Here</a>
                        <div className=" p-4 rounded-lg overflow-hidden mb-6 shadow-md">
                            <h2 className="font-bold text-xl mb-4">Example Entry Tag </h2>
                            <Image
                                src="/entry-tag.png"
                                alt="Entry Form"
                                width={600}
                                height={400}
                                className="mx-auto mb-4"
                            />
                        </div>

                        <div className="border  rounded-lg overflow-hidden">
                            <a
                                href="/entry-form.pdf"
                                download
                                className="text-center mt-2 text-blue-600 underline flex gap-2"
                            >
                                <Download className="" />
                                Download PDF Here
                            </a>
                            <iframe
                                src='/entry-form.pdf'
                                className="w-full h-80 md:h-96 lg:h-250"
                                title="Entry Form PDF"
                                allow="fullscreen"
                            />

                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-6 mt-12 text-center text-gray-600 bg-gray-100">
                <div className="container px-4 mx-auto">
                    <p>Sponsored by: the Carstairs &amp; District Agricultural Society</p>
                    <p className="mt-2">
                        <a href="https://CarstairsAgSociety.ca" className="text-blue-500 hover:underline">
                            CarstairsAgSociety.ca
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    )
}
