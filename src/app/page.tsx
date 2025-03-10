import Link from "next/link";
import { Button } from '../components/ui/button'
import Image from "next/image";

export default function Home() {
	return (



		<main className="container px-4 py-8 mx-auto relative flex-1">

			<Image
				src="/cupcake.png"
				alt="Kids Contest Poster"
				width={100}
				height={100}
				className="absolute left-0 top-15 transform rotate-12 md:left-14"
				priority
			/>

			<div className="flex flex-col items-center justify-center text-center">
				<div className="max-w-4xl mb-8">
					<h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl text-black">
						<span className=" text-blue-500">MAKE </span>
						<span className=" text-red-500">BAKE</span>
						<span className="block text-green-500">&amp; GROW</span>
						Kids' Contest
					</h1>
					<p className="mb-4 text-xl text-gray-700">PRESENTED BY THE CARSTAIRS HORTICULTURAL &amp; CRAFT SHOW</p>
					<p className="mb-8 text-lg text-gray-600">CREATE TOGETHER &amp; ENTER FOR A FAMILY FUN TIME!</p>
					<div className="flex flex-wrap justify-center gap-4 mb-8">
						<Link href="/rules">
							<Button className="px-6 py-6 text-lg font-bold text-white bg-blue-500 hover:bg-blue-600">
								See Contest Rules
							</Button>
						</Link>
						<Link href="/register">
							<Button className="px-6 py-6 text-lg font-bold text-white bg-green-500 hover:bg-green-600">
								Register Now
							</Button>
						</Link>
					</div>
				</div>



				<div className="grid gap-8 md:grid-cols-3 max-w-4xl">
					<div className="p-6 bg-blue-100 rounded-lg shadow-md">
						<h3 className="mb-3 text-xl font-bold text-blue-700">Categories</h3>
						<ul className="pl-5 space-y-2 text-left list-disc">
							<li>Vegetables &amp; flowers</li>
							<li>Baking &amp; cakes</li>
							<li>Hobbies &amp; crafts</li>
							<li>Artwork &amp; photography</li>
						</ul>
					</div>
					<div className="p-6 bg-red-100 rounded-lg shadow-md">
						<h3 className="mb-3 text-xl font-bold text-red-700">Drop Off</h3>
						<p className="text-lg font-bold text-red-600">FRIDAY, 15 AUG 2025</p>
						<p>8am - 11am at the</p>
						<p>Carstairs Curling Rink</p>
					</div>
					<div className="p-6 bg-green-100 rounded-lg shadow-md">
						<h3 className="mb-3 text-xl font-bold text-green-700">Viewing</h3>
						<p className="text-lg font-bold text-green-600">SATURDAY, 16 AUG 2025</p>
						<p>11am - 4pm</p>
						<p>Awards at 3pm</p>
					</div>
				</div>
			</div>
		</main>

	);
}
