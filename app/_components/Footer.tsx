import { BugPlayIcon} from "lucide-react";
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<footer className="px-2 w-full lg:container lg:m-auto lg:px-8">
			<Separator orientation="horizontal" />
			<div className="grid grid-cols-1 lg:grid-cols-12 pt-8 pb-8 lg:pb-16">
				<div className="lg:col-start-1 lg:col-span-6 flex flex-col justify-between items-start">
					<Link
						className="flex items-center gap-4"
						href="/"
					>
						<BugPlayIcon size="64" />
						<span className="flex flex-col">
							<span className="text-4xl font-semibold">Eric kamdem</span>
							<span className="text-lg">© { currentYear }</span>
						</span>
					</Link>
				</div>
				<nav className="hidden lg:block lg:col-start-7 lg:col-span-3">
					<ul>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="#aboutme"
								>
									Who is Eric?
								</Link>
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="#projects"
								>
									Projects
								</Link>
							</Button>
						</li>
						
					</ul>
				</nav>
				<nav className="lg:col-start-10 lg:col-span-3">
					<ul>
						<li>
							<Button
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
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https:linkedin.com/in/eric-kamdem"
									target="_blank"
								>
									LinkedIn
								</Link>
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;