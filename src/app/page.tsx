import Link from "next/link";
import { Button } from '../components/ui/button'
import Image from "next/image";
import { Flower, Palette, Cake, Award, ChefHat, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<main className="container px-4 py-8 mx-auto relative flex-1 overflow-hidden">

			<Image
				src="/robot.png"
				alt="Kids Contest Poster"
				width={100}
				height={100}
				className="absolute left-5 top-5 transform -rotate-12 md:left-24"
				priority
			/>
			<div className="absolute top-40 left-60 animate-bounce-slow hidden md:block">
				<Flower size={40} className="text-pink-400" />
			</div>
			<div className="absolute top-10 right-20 animate-float hidden md:block">
				<Cake size={40} className="text-yellow-500" />
			</div>
			<div className="absolute bottom-40 left-10 animate-spin-slow hidden md:block">
				<Sparkles size={40} className="text-purple-400" />
			</div>
			<div className="absolute bottom-60 right-0 animate-bounce-slow hidden md:block">
				<Palette size={40} className="text-blue-500" />
			</div>
			<div className="absolute bottom-5 right-40 animate-bounce-slow hidden md:block">
				<ChefHat size={40} className="text-grey-400" />
			</div>
			<Image
				src="/rainbow.png"
				alt="Kids Contest Poster"
				width={100}
				height={100}
				className="absolute -right-0 top-42 transform rotate-12"
				priority
			/>
			<Image
				src="/square.png"
				alt="Kids Contest Poster"
				width={100}
				height={100}
				className="absolute left-1 -bottom-0 transform rotate-12"
				priority
			/>

			<section className="flex flex-col items-center justify-center text-center">
				<div className="max-w-4xl mb-8 relative">
					<h1 className="mb-4 text-7xl font-extrabold tracking-tight md:text-10xl ">
						<span className={`block text-blue-500 drop-shadow-lg animate-float chewy-text`}>Make</span>
						<span className="block text-red-500 drop-shadow-md animate-float animation-delay-300 chewy-text">Bake</span>
						<span className="block text-green-500 drop-shadow-md animate-float animation-delay-600 chewy-text">&amp; Grow</span>
					</h1>
					<div className="absolute top-0 right-0 transform translate-x-full -translate-y-1/4 animate-spin-slow">
						<Sparkles className="text-yellow-400 w-8 h-8" />
					</div>
					<div className="absolute bottom-0 left-0 transform -translate-x-full translate-y-1/4 animate-spin-slow animation-delay-500">
						<Sparkles className="text-yellow-400 w-8 h-8" />
					</div>
				</div>

				<h2 className="mb-6 text-4xl font-bold text-black drop-shadow-sm">Kids&apos; Contest</h2>

				<div className="flex flex-col  justify-center gap-4 mb-8">
					<Link href="/join"
						className=" rounded-full">
						<Button className="px-2 py-2 bg-yellow-100 rounded-full border-2 border-yellow-300 text-lg font-bold text-yellow-800 shadow-lg transform transition-transform hover:scale-105 whitespace-nowrap"
						size="default">
							<ChefHat className="w-6 h-6 mr-2" />
							Ages 17 &amp; under, click here join the Fun!
							<ArrowRight className="w-6 h-6 ml-2" />
						</Button>
					</Link>
					<Link href="https://checkout.square.site/merchant/MLB8TY1QMQG6C/checkout/2CDTARWNLSSNSKDCUZF3SAFV?src=webqr" >
                            <Button
                                variant="outline"
                                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl shadow-lg transform transition-transform hover:scale-105 text-white font-bold "
                            >
                                Donate
                            </Button>
                        </Link>
				</div>

				<article>
					<p className="mb-4 text-xl text-gray-700">Presented by the Carstairs Horticultural &amp; Craft Show</p>
					<p className="mb-8 text-lg text-gray-600">Create Together &amp; Enter for a Family Fun Time!</p>

				</article>


				<section className="grid gap-8 md:grid-cols-2 max-w-4xl">
					<div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-200 transform hover:scale-105 transition-transform">
						<h3 className="text-2xl font-bold text-blue-600 mb-3 flex items-center">
							<Palette className="w-6 h-6 mr-2 text-blue-500" />
							Contest Categories
						</h3>
						<ul className="space-y-2">
							<li className="flex items-center text-lg">
								<Flower className="w-5 h-5 mr-2 text-green-500" />
								<span>Vegetables &amp; flowers</span>
							</li>
							<li className="flex items-center text-lg">
								<Cake className="w-5 h-5 mr-2 text-pink-500" />
								<span>Baking &amp; cakes</span>
							</li>
							<li className="flex items-center text-lg">
								<Sparkles className="w-5 h-5 mr-2 text-purple-500" />
								<span>Hobbies &amp; crafts</span>
							</li>
							<li className="flex items-center text-lg">
								<Palette className="w-5 h-5 mr-2 text-blue-500" />
								<span>Artwork &amp; photography</span>
							</li>
						</ul>
						<div className="flex flex-wrap justify-end gap-4 mt-3">
							<Link href="/rules">
								<Button className="px-6 md:p-6 text-md md:text-lg font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
								size="default">

									See Contest Rules
								</Button>

							</Link>
						</div>
					</div>
					<Link href="/venue">

						<div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-red-200 transform hover:scale-105 transition-transform text-left flex flex-col ">
							<h3 className="text-2xl font-bold text-red-600 mb-2">Important Dates</h3>
							<p className="text-lg mb-1">
								<strong>Drop Off:</strong> Friday, Aug 15, 2025 8am - 11am
							</p>
							<p className="text-lg">
								<strong>Viewing Day:</strong> Saturday, Aug 16, 2025 11am - 4pm
							</p>
							<p className="text-lg flex">
								<Award className="w-6 h-6 text-yellow-700" />
								<strong>Awards:</strong> Saturday, Aug 16, 2025 3pm
							</p>
							<div className="absolute -top-4 -right-4 z-20 animate-bounce-slow">
								<div className="bg-yellow-300 rounded-full p-3 shadow-md">
									<Award className="w-6 h-6 text-yellow-700" />
								</div>
							</div>
						</div>
					</Link>
				</section>
			</section>
		</main>

	);
}
