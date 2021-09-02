import useWorks from '../hooks/useWorks';
import { TabItem, Tabs } from './Tabs';
import WorkItem from './WorkItem';

const WorkList = () => {
	const allWorks = useWorks();
	return (
		<section className="works">
			<div className="container">
				<h2>Recent Works</h2>
				<Tabs defaultTab="Frontend">
					{Object.entries(allWorks).map(([tag, works]) => {
						return (
							<TabItem key={tag} label={tag} index={tag}>
								{works.map((work) => (
									<WorkItem key={work.link} work={work} />
								))}
							</TabItem>
						);
					})}
				</Tabs>
			</div>
		</section>
	);
};

export default WorkList;
