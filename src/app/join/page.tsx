
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
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

                        <div className="p-4 mb-6 text-center bg-yellow-100 rounded-lg">
                            <p className="text-yellow-800">
                                Bring the form below on Friday, August 15, 2025, 8am-11am along with the entry tags to register for the Carstairs Kids Contest.
                            </p>
                        </div>
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
                            <iframe
                                src='/entry-form.pdf'
                                className="w-full h-250"
                                title="Entry Form PDF"
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
