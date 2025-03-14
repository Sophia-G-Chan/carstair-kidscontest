
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft } from "lucide-react"

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-white">
            <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
                <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-blue-500">Kids&apos; Contest</span>
                    </Link>
                    <nav className="flex items-center space-x-4">
                        <Link href="/rules">
                            <Button
                                variant="outline"
                                className="font-medium border-2 border-blue-400 text-blue-600 hover:bg-blue-100"
                            >
                                Rules
                            </Button>
                        </Link>
                        <Link href="/venue">
                            <Button
                                variant="outline"
                                className="font-medium border-2 border-green-400 text-green-600 hover:bg-green-100"
                            >
                                Venue Info
                            </Button>
                        </Link>
                    </nav>
                </div>
            </header>

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
                                Fill out this form to pre-register for the contest. You&apos;ll still need to bring your entries on the
                                drop-off day (Friday, August 15, 2025, 8am-11am).
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-blue-700">Participant Information</h2>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium">
                                            First Name
                                        </label>
                                        <Input id="firstName" placeholder="First Name" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="block text-sm font-medium">
                                            Last Name
                                        </label>
                                        <Input id="lastName" placeholder="Last Name" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="age" className="block text-sm font-medium">
                                        Age
                                    </label>
                                    <Input id="age" type="number" min="1" max="17" placeholder="Age" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="parentEmail" className="block text-sm font-medium">
                                        Parent/Guardian Email
                                    </label>
                                    <Input id="parentEmail" type="email" placeholder="Email" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium">
                                        Phone Number
                                    </label>
                                    <Input id="phone" type="tel" placeholder="Phone Number" required />
                                </div>
                            </div>

                            <div className="pt-4 space-y-4 border-t">
                                <h2 className="text-xl font-bold text-green-700">Entry Information</h2>

                                <div className="space-y-3">
                                    <p className="font-medium">Which categories will you be entering? (Select all that apply)</p>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="vegetables" />
                                        <label
                                            htmlFor="vegetables"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Vegetables &amp; Flowers
                                        </label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="baking" />
                                        <label
                                            htmlFor="baking"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Baking &amp; Cakes
                                        </label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="crafts" />
                                        <label
                                            htmlFor="crafts"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Hobbies &amp; Crafts
                                        </label>
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="artwork" />
                                        <label
                                            htmlFor="artwork"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Artwork &amp; Photography
                                        </label>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="entryDescription" className="block text-sm font-medium">
                                        Brief Description of Your Entries
                                    </label>
                                    <Textarea
                                        id="entryDescription"
                                        placeholder="Please describe what you plan to enter in the contest"
                                        className="h-24"
                                    />
                                </div>

                                <div className="flex items-start space-x-2">
                                    <Checkbox id="teamEntry" />
                                    <div>
                                        <label
                                            htmlFor="teamEntry"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            This is a team/family entry
                                        </label>
                                        <p className="text-xs text-gray-500">
                                            Check this box if multiple children worked on the entry together
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 space-y-4 border-t">
                                <div className="flex items-start space-x-2">
                                    <Checkbox id="termsAgree" required />
                                    <div>
                                        <label
                                            htmlFor="termsAgree"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            I agree to the contest rules
                                        </label>
                                        <p className="text-xs text-gray-500">
                                            By checking this box, you confirm that you have read and agree to the
                                            <Link href="/rules" className="ml-1 text-blue-500 hover:underline">
                                                contest rules
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <Button  className="w-full py-6 text-lg font-bold">
                                    Submit Registration
                                </Button>
                            </div>
                        </form>
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
