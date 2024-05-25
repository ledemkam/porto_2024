import Image from 'next/image';
//import  portrait from '@/public/portrait.jpg';
import  kams from '@/public/img/kams.jpg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


const AboutMe = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-6">
			<div className="col-start-1 col-span-8  row-start-1 row-span-6 pt-10">
				<h3 className="text-5xl  font-bold mb-14">About me</h3>
				<div className="p-8 border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-lg rounded-2xl relative z-20">
					<h3 className="text-2xl font-semibold mb-9">Who is Eric?</h3>
					<p className="text-base mb-8">
						   Hello! I&apos;m Eric Kamdem, web developer from Deutschland.
							Passionate about automation, optimization and efficiency, I love to learn new ways to solve problems and find answers to every needs.
							I&apos;m also passionate about teaching and sharing my knowledge with others. That&apos;s why I created
						<Button
							className="font-bold text-base p-0 h-fit"
							variant="link"
							asChild
						>
							<Link
								href="https://github.com/ledemkam"
								target="_blank"
							>
								ledemkam
							</Link>
						</Button>
						<span>, a YouTube channel specialized in React and its ecosystem, for helping people to improve their skills and learn new things.</span>
					</p>
					<p className="text-base">
						<span className="mr-1">I also love the concept of behind the open-source idea. The most of my projects are open-source, under MIT lisense, and available on my</span>
						<Button
							className="font-bold text-base p-0 h-fit"
							variant="link"
							asChild
						>
							<Link
								href="https://github.com/ledemkam"
								target="_blank"
							>
								GitHub
							</Link>
						</Button>
						<span> profile. Check out below to see my main projects.</span>
					</p>
				</div>
			</div>
			<div className="col-start-8 col-span-4 row-start-1 row-span-5">
					<div className="w-fit h-fit rounded-2xl drop-shadow-lg">
					<Image
						alt="kamdem"
						className="rounded-2xl relative  z-10"
						height={400}
						src={kams}
						width={400}
					/>
					</div>
			</div>
		</div>
  );
};

export default AboutMe;