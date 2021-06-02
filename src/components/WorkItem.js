import Link from "next/link";

const WorkItem = ( { work } ) => {
	const { link, meta } = work;

	return (
		<article className="work">
			<Link href={ "/works" + link }>
				<a href={ "/works" + link } className="work__thumb">
					<img src={ meta.thumb } alt="" />
				</a>
			</Link>

				<h3 className="work__title">
					<Link href={ "/works" + link }>{ meta.title }</Link>
				</h3>

				<p className="word__desc">{ meta.description }</p>
		</article>
	);
};

export default WorkItem;
