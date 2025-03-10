import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function RulePage() {
    return (
        <main className="container px-4 py-8 mx-auto">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">Contest Rules</h1>

                    <div className="space-y-6">
                        <div className="p-4 bg-yellow-100 rounded-lg">
                            <h2 className="mb-2 text-xl font-bold text-yellow-800">Important Dates</h2>
                            <p>
                                <strong>Drop Off:</strong> Friday, August 15, 2025 (8am - 11am)
                            </p>
                            <p>
                                <strong>Viewing:</strong> Saturday, August 16, 2025 (11am - 4pm)
                            </p>
                            <p>
                                <strong>Awards Ceremony:</strong> Saturday, August 16, 2025 (3pm)
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-3 text-xl font-bold text-blue-700">General Rules</h2>
                            <ul className="pl-5 space-y-2 list-disc">
                                <li>Open to all children ages 17 and under</li>
                                <li>All entries must be the work of the child entering the contest</li>
                                <li>
                                    Parents/guardians may assist younger children, but the work should be primarily done by the child
                                </li>
                                <li>Each participant may enter multiple categories</li>
                                <li>All entries must be submitted during the drop-off time</li>
                                <li>
                                    Entries must include a completed entry form (available at the venue or downloadable from our
                                    website)
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-3 text-xl font-bold text-green-700">Category-Specific Rules</h2>

                            <h3 className="mt-4 mb-2 text-lg font-semibold">Vegetables & Flowers</h3>
                            <ul className="pl-5 space-y-1 list-disc">
                                <li>All plants must be grown by the participant</li>
                                <li>Entries should be displayed in appropriate containers</li>
                                <li>Please label varieties if known</li>
                            </ul>

                            <h3 className="mt-4 mb-2 text-lg font-semibold">Baking & Cakes</h3>
                            <ul className="pl-5 space-y-1 list-disc">
                                <li>All baked goods must be made from scratch by the participant</li>
                                <li>Include recipe cards with your entries</li>
                                <li>Items should be presented on disposable plates covered with plastic wrap</li>
                            </ul>

                            <h3 className="mt-4 mb-2 text-lg font-semibold">Hobbies & Crafts</h3>
                            <ul className="pl-5 space-y-1 list-disc">
                                <li>Crafts can include any handmade items</li>
                                <li>Include a brief description of materials used and techniques</li>
                                <li>Items should be ready for display</li>
                            </ul>

                            <h3 className="mt-4 mb-2 text-lg font-semibold">Artwork & Photography</h3>
                            <ul className="pl-5 space-y-1 list-disc">
                                <li>Artwork can be in any medium</li>
                                <li>Photography must be taken by the participant</li>
                                <li>All entries should be mounted or framed for display</li>
                                <li>Maximum size: 16&quot; x 20&quot;`</li>
                            </ul>
                        </div>

                        <div className="p-4 bg-blue-100 rounded-lg">
                            <h2 className="mb-2 text-xl font-bold text-blue-800">New This Year!</h2>
                            <p className="mb-2">Team & Family Entries</p>
                            <ul className="pl-5 space-y-1 list-disc">
                                <li>Families or teams of friends can submit collaborative entries</li>
                                <li>All team members must be 17 or under</li>
                                <li>Team entries will be judged in their own category</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-3 text-xl font-bold text-red-700">Judging & Prizes</h2>
                            <ul className="pl-5 space-y-2 list-disc">
                                <li>Entries will be judged on creativity, skill, presentation, and adherence to theme</li>
                                <li>Age-appropriate judging will be applied (entries will be grouped by age ranges)</li>
                                <li>Ribbons will be awarded for 1st, 2nd, and 3rd place in each category and age group</li>
                                <li>Special prizes will be awarded for Best in Show</li>
                                <li>All participants will receive a certificate of participation</li>
                            </ul>
                        </div>

                        <div className="p-4 text-center bg-purple-100 rounded-lg">
                            <p className="text-purple-800">For more information or questions, please email:</p>
                            <p className="font-bold text-purple-800">rose.warden@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
