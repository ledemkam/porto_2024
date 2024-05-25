import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ExternalLink, GitFork, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


export type DataProject =  {
    id: number,
    title: string,
    description: string,
    npm_url?: string,
    github_url?: string,
    website_url ?: string,
    status: 'under-development' | 'archived' | 'released',
    technos: {
		title: string;
		foto_url: StaticImageData;
}[]
}

type ProjectDataProps = {
   project: DataProject
}


const CardProject = ({project}: ProjectDataProps) => {
  return (
		<Card className="w-full lg:min-w-[700px] lg:max-w-[750px]">
			<CardHeader>
				<CardTitle>{ project.title }</CardTitle>
				<CardDescription>{ project.description }</CardDescription>
				<div className="flex gap-3">
					{
						project.status === 'under-development' && (
							<Badge variant="secondary">Under development</Badge>
						)
					}
					{
						project.status === 'archived' && (
							<Badge variant="outline">Archived</Badge>
						)
					}
					{
						project.status === 'released' && (
							<Badge variant="default">Released</Badge>
						)
					}
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex gap-2">
					{
						project.technos.map((techno) => (
							<Image
								key={ techno.title }
								alt={ techno.title }
								className="rounded-sm"
								height="30"
								src={ techno.foto_url }
								title={ techno.title }
								width="30"
							/>
						))
					}
				</div>
			</CardContent>
			<CardFooter className="justify-end gap-4">
				{
					project.website_url ? (
						<Button
							className="gap-2 items-center"
							variant="outline"
							asChild
						>
							<Link
								href={ project.website_url }
								target="_blank"
							>
								View website <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
				{
					project.npm_url ? (
						<Button
							className="gap-2 items-center"
							variant="destructive"
							asChild
						>
							<Link
								href={ project.npm_url }
								target="_blank"
							>
								View on NPM <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
		
				{
					project.github_url ? (
						<Button
							className="gap-2 items-center"
							asChild
						>
							<Link
								href={ project.github_url }
								target="_blank"
							>
								View on GitHub <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
			</CardFooter>
		</Card>
	);
}
export default CardProject