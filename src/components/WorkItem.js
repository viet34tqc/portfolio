import Link from "next/link";

const WorkItem = ( { work } ) => {
	const { link, meta } = work;

	return (
		<article>
			<Link href={ "/works" + link }>
				<a>Read more &rarr;</a>
			</Link>
		</article>
	);
};

export default WorkItem;
