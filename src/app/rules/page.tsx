'use client'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Flower, Palette, Cake, Award, Star, Sparkles, ChevronRight, Baby } from "lucide-react";
import { cashAwardsData } from "@/lib/constants"
import Table from "@/components/ui/table"
import { useState } from "react";
import { RulesSubmenu } from "@/components/RulesSubMenu";

export default function RulePage() {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    const toggleSection = (id: string) => {
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <RulesSubmenu />

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
                                href='https://drive.google.com/drive/folders/1sUQFhBz_NAlEeTXJAYWAfqGCYPjqieJF'
                                className="block p-4 text-center text-blue-600 bg-blue-100 rounded-xl border-2 border-blue-200 hover:bg-blue-200"
                            >Detailed PDF Rules Click Here</a>

                            <div id="important-dates"
                                className="p-4 bg-yellow-100 rounded-xl border-2 border-yellow-200">

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

                            <div id="general-rules">
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
                                    <li>Each participant (individual or member within a group), may have
                                    only one entry in each category (e.g. one entry in JF8 Sunflower).</li>
                                    <li>Participants may enter multiple categories. There is no limit to the number of categories participants may enter.</li>
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
                                        Ribbons do not always equal a cash award. Cash awards depend on sponsorship, fundraising & donations. If you would like to volunteer or donate, please contact us – your help is appreciated!
                                    </li>
                                </ol>
                            </div>

                            <div id="category-rules">
                                <h2 className="mb-3 text-xl font-bold text-green-700 flex items-center">
                                    <Flower className="w-5 h-5 mr-2 text-green-600" />
                                    Category-Specific Rules
                                </h2>

                                <div className="space-y-4 mt-4">
                                    <div id="vegetables-flowers" className="p-3 bg-green-50 rounded-lg border border-green-200">
                                        <h3 className="mb-2 text-lg font-semibold text-green-700 flex items-center">
                                            <Flower className="w-4 h-4 mr-2 text-green-600" />
                                            Vegetables & Flowers
                                        </h3>
                                        <ul className="pl-5 space-y-1 list-disc mb-6">
                                            <li>All vegetable and flower entries must be grown within Mountain View County.</li>
                                            <li>Please no restricted or noxious weeds.</li>
                                            <li>May place vegetables in plastic bag with slightly damp paper towel for freshness.</li>

                                        </ul>
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => toggleSection("section1")}
                                                className="flex items-center  gap-2 rounded-lg w-full text-left"
                                            >
                                                <div
                                                    className={`transform transition-transform duration-200 ${openSections["section1"] ? "rotate-90 mb-0" : ""
                                                        }`}
                                                >
                                                    <ChevronRight className="w-4 h-4 mr-2 mb-0 text-green-600" />
                                                </div>
                                                <h4 className="flex items-center text-lg font-semibold text-green-700">
                                                    Flower Categories
                                                </h4>
                                            </button>
                                            <Table
                                                data={cashAwardsData}
                                                type="categories"
                                                sectionName="Flower Section"
                                                className={` ${openSections["section1"]
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "hidden m-0"}`}
                                                headerBgColor="bg-emerald-600"
                                            />
                                            <button
                                                onClick={() => toggleSection("section2")}
                                                className="flex items-center  gap-2 rounded-lg w-full text-left"
                                            >
                                                <div
                                                    className={`transform transition-transform duration-200 ${openSections["section2"] ? "rotate-90 mb-0" : ""
                                                        }`}
                                                >
                                                    <ChevronRight className="w-4 h-4 mr-2 mb-0 text-green-600" />
                                                </div>
                                                <h4 className="flex items-center text-lg font-semibold text-green-700">
                                                    Vegetable Categories
                                                </h4>
                                            </button>
                                            <Table
                                                data={cashAwardsData}
                                                type="categories"
                                                sectionName="Vegetable Section"
                                                className={`${openSections["section2"]
                                                    ? "grid-rows-[1fr] opacity-100"
                                                    : "hidden"}`}
                                                headerBgColor="bg-emerald-600"
                                            />
                                        </div>

                                    </div>

                                    <div id="baking-cakes" className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                                        <h3 className="mb-2 text-lg font-semibold text-pink-700 flex items-center">
                                            <Cake className="w-4 h-4 mr-2 text-pink-600" />
                                            Baking
                                        </h3>
                                        <ul className="pl-5 space-y-1 list-disc mb-6">
                                            <li>Place on a plate or tray and put in a clear plastic bag - do not seal.</li>
                                        </ul>
                                        <button
                                            onClick={() => toggleSection("section3")}
                                            className="flex items-center  gap-2 rounded-lg w-full text-left"
                                        >
                                            <div
                                                className={`transform transition-transform duration-200 ${openSections["section3"] ? "rotate-90 mb-0" : ""
                                                    }`}
                                            >
                                                <ChevronRight className="w-4 h-4 mr-2 mb-0 text-pink-700" />
                                            </div>
                                            <h4 className="flex items-center text-lg font-semibold text-pink-700">
                                                Baking Categories
                                            </h4>
                                        </button>
                                        <Table
                                            data={cashAwardsData}
                                            type="categories"
                                            sectionName="Baking Section"
                                            className={` ${openSections["section3"]
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "hidden m-0"}`}
                                            headerBgColor="bg-rose-400"
                                        />
                                    </div>

                                    <div id="hobbies-crafts" className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                                        <h3 className="mb-6 text-lg font-semibold text-purple-700 flex items-center">
                                            <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                                            Hobbies &amp; Crafts
                                        </h3>
                                        <button
                                            onClick={() => toggleSection("section4")}
                                            className="flex items-center  gap-2 rounded-lg w-full text-left"
                                        >
                                            <div
                                                className={`transform transition-transform duration-200 ${openSections["section4"] ? "rotate-90 mb-0" : ""
                                                    }`}
                                            >
                                                <ChevronRight className="w-4 h-4 mr-2 mb-0 text-purple-600" />
                                            </div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-600">
                                                Handicraft Categories
                                            </h4>
                                        </button>
                                        <Table
                                            data={cashAwardsData}
                                            type="categories"
                                            sectionName="Handicraft Section"
                                            className={` ${openSections["section4"]
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "hidden m-0"}`}
                                            headerBgColor="bg-violet-200"
                                        />
                                        <button
                                            onClick={() => toggleSection("section5")}
                                            className="flex items-center  gap-2 rounded-lg w-full text-left"
                                        >
                                            <div
                                                className={`transform transition-transform duration-200 ${openSections["section5"] ? "rotate-90 mb-0" : ""
                                                    }`}
                                            >
                                                <ChevronRight className="w-4 h-4 mr-2 mb-0 text-purple-600" />
                                            </div>
                                            <h4 className="flex items-center text-lg font-semibold text-purple-600">
                                                Hobby Crafts & Artwork Categories
                                            </h4>
                                        </button>
                                        <Table
                                            data={cashAwardsData}
                                            type="categories"
                                            sectionName="Hobby Crafts & Artwork Section"
                                            className={` ${openSections["section5"]
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "hidden m-0"}`}
                                            headerBgColor="bg-violet-200"
                                        />
                                    </div>

                                    <div id="artwork-photography" className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                        <h3 className="mb-2 text-lg font-semibold text-blue-700 flex items-center">
                                            <Palette className="w-4 h-4 mr-2 text-blue-600" />
                                            Photography
                                        </h3>
                                        <ul className="pl-5 space-y-1 list-disc mb-6">
                                            <li>Photos may be black & white or color, 4 X 6 or 5 X 7 inches (10 X 15 cm or 12.5 X 17.5 cm).</li>
                                            <li>All photos must be mounted on a stiff backing or cardstock, with a 1/2 inch (1.5 cm) border.</li>
                                            <li>All photographs must be original work.</li>
                                        </ul>
                                        <button
                                            onClick={() => toggleSection("section6")}
                                            className="flex items-center  gap-2 rounded-lg w-full text-left"
                                        >
                                            <div
                                                className={`transform transition-transform duration-200 ${openSections["section6"] ? "rotate-90 mb-0" : ""
                                                    }`}
                                            >
                                                <ChevronRight className="w-4 h-4 mr-2 mb-0 text-blue-700" />
                                            </div>
                                            <h4 className="flex items-center text-lg font-semibold text-blue-700">
                                                Photography Categories
                                            </h4>
                                        </button>
                                        <Table
                                            data={cashAwardsData}
                                            type="categories"
                                            sectionName="Photography Section"
                                            className={`" ${openSections["section6"]
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "hidden m-0"}`}
                                            headerBgColor="bg-blue-400"
                                        />

                                    </div>

                                    <div id="five-and-under" className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                                        <h3 className=" text-lg font-semibold text-orange-700 flex items-center">
                                            <Baby className="w-4 h-4 mr-2 text-orange-600" />
                                            5 Years Old &amp; Under
                                        </h3>
                                        <ul className="pl-5 space-y-1 list-disc mb-6">
                                            <li>
                                                <a
                                                    href="https://drive.google.com/file/d/1CMr0mEbAcAXgTT-ef9UJYGWXsPV5374O/view?usp=drive_link"
                                                    className="text-blue-700 underline">
                                                    Contest Colouring Book Page link
                                                </a>
                                            </li>
                                        </ul>
                                        <button
                                            onClick={() => toggleSection("section7")}
                                            className="flex items-center  gap-2 rounded-lg w-full text-left"
                                        >
                                            <div
                                                className={`transform transition-transform duration-200 ${openSections["section7"] ? "rotate-90 mb-0" : ""
                                                    }`}
                                            >
                                                <ChevronRight className="w-4 h-4 mr-2 mb-0 text-orange-600" />
                                            </div>
                                            <h4 className="flex items-center text-lg font-semibold text-orange-600">
                                                5 Years Old &amp; Younger Categories
                                            </h4>
                                        </button>
                                        <Table
                                            data={cashAwardsData}
                                            type="categories"
                                            sectionName="5 Years Old & Younger Section"
                                            className={`" ${openSections["section7"]
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "hidden m-0"}`}
                                            headerBgColor="text-orange-400"
                                        />

                                    </div>
                                </div>
                            </div>

                            <div id="team-entries" className="p-4 bg-yellow-100 rounded-xl border-2 border-yellow-200">
                                <h2 className="mb-2 text-xl font-bold text-yellow-800 flex items-center">
                                    <Star className="w-5 h-5 mr-2 text-yellow-600" />
                                    New This Year!
                                </h2>
                                <p className="mb-2 font-bold">Team & Family Entries</p>
                                <ul className="pl-5 space-y-1 list-disc">
                                    <li>Families or teams of friends can submit collaborative entries</li>
                                    <li>All team members must be 17 or under</li>
                                    <li>Team entries will be judged in their own category</li>
                                </ul>
                            </div>

                            <div id="judging-prizes" className="transition-all p-3 rounded-lg duration-300 bg-pink-300 ">
                                <h2 className="mb-3 text-xl font-bold text-white flex items-center">
                                    <Award className="w-5 h-5 mr-2 text-white" />
                                    Prizes
                                </h2>
                                <p className="mb-6 text-white">Cash awards are available for the following:</p>
                                <button
                                    onClick={() => toggleSection("section8")}
                                    className="flex items-center  gap-2 rounded-lg w-full text-left"
                                >
                                    <div
                                        className={`transform transition-transform duration-200 ${openSections["section8"] ? "rotate-90 mb-0" : ""
                                            }`}
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2 mb-0 text-white" />
                                    </div>
                                    <h4 className="flex items-center text-lg font-semibold text-white">
                                        Ages 5 &amp; Under
                                    </h4>
                                </button>
                                <Table
                                    data={cashAwardsData}
                                    type="age5AndUnderAwards"
                                    className={` ${openSections["section8"]
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "hidden m-0"}`}
                                    headerBgColor="bg-pink-400 text-white"
                                />


                                <button
                                    onClick={() => toggleSection("section9")}
                                    className="flex items-center  gap-2 rounded-lg w-full text-left"
                                >
                                    <div
                                        className={`transform transition-transform duration-200 ${openSections["section9"] ? "rotate-90 mb-0" : ""
                                            }`}
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2 mb-0 text-white" />
                                    </div>
                                    <h4 className="flex items-center text-lg font-semibold text-white">
                                        Ages 6 &amp; Up
                                    </h4>
                                </button>
                                <Table
                                    data={cashAwardsData}
                                    type="mainAwards"
                                    className={` ${openSections["section9"]
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "hidden m-0"}`}
                                    headerBgColor="bg-pink-400 text-white"
                                />
                            </div>

                            <div className="p-4 text-center bg-purple-100 rounded-xl border-2 border-purple-200">
                                <p className="text-purple-800">For more information or questions, please email:</p>
                                <a className="mt-2 font-bold text-purple-800" href="mailto:carstairskidscontest@gmail.com">Rose Warden</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}
