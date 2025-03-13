import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Flower, Palette, Cake, Award, Star, Sparkles } from "lucide-react";

export default function RulePage() {
    const categories = [
        'High Points in Show',
        'High Points Flowers',
        'High Points Vegetables',
        'High Points Handicrafts',
        'High Points Hobby Crafts and Artwork',
        'High Points Baking',
        'High Points Photography',
        'Best in Show Sunflower',
        'Best in Show Fairy Garden',
        'Best in Show Vegetables',
        'Best in Show Baking',
        'Best in Show Handicrafts',
        'Best in Show Hobby Crafts and Artwork',
        'Best in Show Photography',
    ];
    const u5Categories = [
        'Best in Show – Best entry from U1 – U9',
        'Best in Show Colouring Page'
    ];

    return (
        <main className="container px-4 py-8 mx-auto">
            <div className="absolute top-120 left-20 animate-spin-slow hidden md:block">
                <Sparkles size={30} className="text-purple-400" />
            </div>
            <div className="absolute top-40 right-20 animate-spin-slow hidden md:block">
                <Sparkles size={30} className="text-purple-400" />
            </div>
            <div className="absolute bottom-40 right-20 animate-spin-slow hidden md:block">
                <Sparkles size={30} className="text-purple-400" />
            </div>
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center mb-6 text-blue-500 hover:text-blue-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="p-8 bg-white rounded-2xl shadow-xl border-2 border-blue-200 relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4">
                        <div className="bg-yellow-300 rounded-full p-2 shadow-md">
                            <Award className="w-6 h-6 text-yellow-700" />
                        </div>
                    </div>

                    <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">Contest Rules</h1>

                    <div className="space-y-6">

                        <a
                            href='https://drive.google.com/file/d/1AgcGxoGUfrFwcJB24ZPG5t95odfToQIy/view'
                            className="block p-4 text-center text-blue-600 bg-blue-100 rounded-xl border-2 border-blue-200 hover:bg-blue-200"
                        >Detailed PDF Rules Click Here</a>

                        <div className="p-4 bg-yellow-100 rounded-xl border-2 border-yellow-200">

                            <h2 className="mb-2 text-xl font-bold text-yellow-800 flex items-center">
                                <Star className="w-5 h-5 mr-2 text-yellow-600" />
                                Important Dates
                            </h2>
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
                            <h2 className="mb-3 text-xl font-bold text-blue-700 flex items-center">
                                <Award className="w-5 h-5 mr-2 text-blue-600" />
                                General Rules
                            </h2>
                            <ol className="pl-5 space-y-2 list-decimal ">
                                <li>Entries are judged under four main categories of participants:
                                    <ul className="px-4 list-disc">
                                        <li>Individual: 5 years and under</li>
                                        <li>Individual: 6-10 years</li>
                                        <li>Individual: 11-17 years</li>
                                        <li>Group: Family or Team</li>
                                    </ul>

                                </li>
                                <li>For “Group” entries, at least 50% of the group members must be aged 17 and under.</li>
                                <li>Entries must be made, grown or produced by the participant(s), and not previously entered at one of our past events.</li>
                                <li>All vegetable and flower entries must be grown within Mountain View County. Please no restricted or noxious weeds.</li>
                                <li>Each individual participant, or member within a group, may have no more than one entry per category (e.g. one entry in VF1 cabbage). There is no limit to the number of categories participants can enter.</li>
                                <li>
                                    Judging will follow the “Fair System” (for more info check out the&nbsp;
                                    <a
                                        href='https://open.alberta.ca/publications/judging-and-exhibiting-standards-for-horticultural-shows'
                                        className="text-blue-600 underline">
                                        Alberta Government site
                                    </a>)
                                </li>
                                <li>Ribbons are awarded at the discretion of the judges. Each category may not have 1st, 2nd and 3rd place winners. Ribbons are awarded as follows:
                                    <ul className="px-4 list-disc">
                                        <li>1st place – Red Ribbon</li>
                                        <li>2nd place – Blue Ribbon</li>
                                        <li>3rd place – White Ribbon</li>
                                    </ul>
                                </li>
                                <li>
                                    Entries must include a completed entry form (available at the venue or downloadable from our
                                    website)
                                </li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="mb-3 text-xl font-bold text-green-700 flex items-center">
                                <Flower className="w-5 h-5 mr-2 text-green-600" />
                                Category-Specific Rules
                            </h2>

                            <div className="space-y-4 mt-4">
                                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                    <h3 className="mb-2 text-lg font-semibold text-green-700 flex items-center">
                                        <Flower className="w-4 h-4 mr-2 text-green-600" />
                                        Vegetables & Flowers
                                    </h3>
                                    <ul className="pl-5 space-y-1 list-disc">
                                        <li>All plants must be grown by the participant</li>
                                        <li>Entries should be displayed in appropriate containers</li>
                                        <li>Please label varieties if known</li>
                                    </ul>
                                </div>

                                <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                                    <h3 className="mb-2 text-lg font-semibold text-pink-700 flex items-center">
                                        <Cake className="w-4 h-4 mr-2 text-pink-600" />
                                        Baking & Cakes
                                    </h3>
                                    <ul className="pl-5 space-y-1 list-disc">
                                        <li>All baked goods must be made from scratch by the participant</li>
                                        <li>Include recipe cards with your entries</li>
                                        <li>Items should be presented on disposable plates covered with plastic wrap</li>
                                    </ul>
                                </div>

                                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                    <h3 className="mb-2 text-lg font-semibold text-purple-700 flex items-center">
                                        <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                                        Hobbies & Crafts
                                    </h3>
                                    <ul className="pl-5 space-y-1 list-disc">
                                        <li>Crafts can include any handmade items</li>
                                        <li>Include a brief description of materials used and techniques</li>
                                        <li>Items should be ready for display</li>
                                    </ul>
                                </div>

                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                    <h3 className="mb-2 text-lg font-semibold text-blue-700 flex items-center">
                                        <Palette className="w-4 h-4 mr-2 text-blue-600" />
                                        Artwork & Photography
                                    </h3>
                                    <ul className="pl-5 space-y-1 list-disc">
                                        <li>Artwork can be in any medium</li>
                                        <li>Photography must be taken by the participant</li>
                                        <li>All entries should be mounted or framed for display</li>
                                        <li>Maximum size: 16&quot; x 20&quot;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-100 rounded-xl border-2 border-blue-200">
                            <h2 className="mb-2 text-xl font-bold text-blue-800 flex items-center">
                                <Star className="w-5 h-5 mr-2 text-blue-600" />
                                New This Year!
                            </h2>
                            <p className="mb-2 font-bold">Team & Family Entries</p>
                            <ul className="pl-5 space-y-1 list-disc">
                                <li>Families or teams of friends can submit collaborative entries</li>
                                <li>All team members must be 17 or under</li>
                                <li>Team entries will be judged in their own category</li>
                            </ul>
                        </div>

                        <div>

                            <h2 className="mb-3 text-xl font-bold text-red-700 flex items-center">
                                <Award className="w-5 h-5 mr-2 text-red-600" />
                                Prizes
                            </h2>
                            <p className="mb-6">Cash awards are available for the following:</p>
                            <h3 className="font-bold">Ages 5 &amp; Under</h3>
                            <div className="overflow-x-auto rounded-t-xl mb-6 ">
                                <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                                    <thead>
                                        <tr className="bg-blue-200">
                                            <th className="px-6 py-3 border-b text-left">Category</th>
                                            <th className="px-6 py-3 border-b text-center">Individual</th>
                                            <th className="px-6 py-3 border-b text-center">Group</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {u5Categories.map((category, index) => (
                                            <tr key={index} className="hover:bg-blue-50">
                                                <td className="px-6 py-2 border-b">{category}</td>
                                                <td className="px-6 py-2 border-b text-center">
                                                    $10
                                                </td>
                                                <td className="px-6 py-2 border-b text-center">
                                                    $10
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <h3 className="font-bold">Ages 6 &amp; Up</h3>
                            <div className="overflow-x-auto rounded-t-xl ">
                                <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                                    <thead>
                                        <tr className="bg-blue-200">
                                            <th className="px-6 py-3 border-b text-left">Category</th>
                                            <th className="px-6 py-3 border-b text-center">Ages 6-10 Individual</th>
                                            <th className="px-6 py-3 border-b text-center">Ages 11-17 Individual</th>
                                            <th className="px-6 py-3 border-b text-center">Group</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.map((category, index) => (
                                            <tr key={index} className="hover:bg-blue-50">
                                                <td className="px-6 py-2 border-b">{category}</td>
                                                <td className="px-6 py-2 border-b text-center">
                                                    {index === 0 ? '$20' : '$10'}
                                                </td>
                                                <td className="px-6 py-2 border-b text-center">
                                                    {index === 0 ? '$20' : '$10'}
                                                </td>
                                                <td className="px-6 py-2 border-b text-center">
                                                    {index === 0 ? '$20' : '$10'}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="p-4 text-center bg-purple-100 rounded-xl border-2 border-purple-200">
                            <p className="text-purple-800">For more information or questions, please email:</p>
                            <a className="mt-2 font-bold text-purple-800" href="mailto:carstairskidscontest@gmail.com">Rose Warden</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
